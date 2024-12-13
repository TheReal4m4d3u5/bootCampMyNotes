import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type ForeignKey,
  Sequelize,
} from 'sequelize';

import type {Reader} from './Reader.js';

/*
! LibraryCard Model using our own interfaces

import { DataTypes, Sequelize, Model, Optional } from 'sequelize'

interface LibraryCardAttributes {
  id: number;
  readerId: number;
  cardNumber: string;
}

interface LibraryCardCreationAttributes extends Optional<LibraryCardAttributes, 'id'> {}

export class LibraryCard extends Model<LibraryCardAttributes, LibraryCardCreationAttributes> implements LibraryCardAttributes {
  declare id: number;
  declare readerId: number;
  declare cardNumber: string;
}

*/


//creates a LibraryCard class, extending the Model class from Sequelize, which provides built-in functions for interacting 
//with the database (like creating, updating, and deleting records).
class LibraryCard extends Model<
  InferAttributes<LibraryCard>,
  InferCreationAttributes<LibraryCard>
> {

  // id: This is the unique identifier for each library card, which is a number. It can be created automatically.
  // readerId: A reference to a Reader (another model) linked to this library card. It connects each card to a specific reader.
  // cardNumber: A unique identifier for the card, generated as a UUID (Universally Unique Identifier).

  declare id: CreationOptional<number>;
  declare readerId: ForeignKey<Reader['id']>;
  declare cardNumber: CreationOptional<string>;
}

//This function sets up the LibraryCard model in the database. It takes in sequelize, the database connection, and uses it to initialize the LibraryCard model.
export function LibraryCardFactory(sequelize: Sequelize) {
  LibraryCard.init(
    {
      //id: Defines the id field as an integer that auto-increments (increases by 1 for each new card) and is the primary key.
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      //cardNumber: Defines cardNumber as a unique string (UUID) for each card.
      cardNumber: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {

      // sequelize: Uses the database connection.
      // timestamps: false: Disables automatic createdAt and updatedAt timestamp fields.
      // underscored: true: Converts field names to use underscores (e.g., library_card).
      // modelName: Names the model library_card for the database.
      
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'library_card',
    }
  );
  // returns the LibraryCard model, so it’s ready to use elsewhere in the app.
  return LibraryCard;
}

export default LibraryCard;
