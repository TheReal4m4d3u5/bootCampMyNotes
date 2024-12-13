//This line imports the sequelize connection from the connection.js file, which connects your code to the database.
import sequelize from '../config/connection.js';

//These lines import factory functions that create two models: Reader and LibraryCard.
//The Reader and LibraryCard models are created by calling their factory functions and passing in the sequelize connection.
import { ReaderFactory } from "./Reader.js";
import { LibraryCardFactory } from "./LibraryCard.js";

//The Reader and LibraryCard models are created by calling their factory functions and passing in the sequelize connection.
const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);


// Reader.hasOne(LibraryCard): Each Reader has one LibraryCard. The onDelete: 'CASCADE' part means if a Reader is deleted, their LibraryCard will also be deleted.
Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE'
});

// LibraryCard.belongsTo(Reader): Each LibraryCard is linked to a Reader.
LibraryCard.belongsTo(Reader);

export { sequelize, Reader, LibraryCard };
