import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


// what are the attributes this book should keep track of
interface BookAttributes {
  book_id: number;
  title: string;
  author: string;
  isbn: string;
  pages: number;
  edition: number;
  is_paperback: boolean;
}

//the data types it takes when creating entity Book, book_id is primary key


// BookCreationAttributes Interface:

// Optional<BookAttributes, 'book_id'> uses TypeScript's Optional utility type, 
// making the book_id attribute optional when creating a new Book instance.
// This is useful since book_id is often auto-generated, so it doesn’t need to be
//  provided when a new Book record is created.
// > means wait for this value and its coming 

// means that when you’re creating a new book, the book_id is optional.

// Here's a simplified explanation:

// BookAttributes defines everything a book should have (like book_id, title, author, etc.).
// Optional<BookAttributes, 'book_id'> makes only book_id optional, so it doesn’t 
// need to be set when creating a new book.
// So, BookCreationAttributes is just a version of BookAttributes where book_id is optional, 
// which is useful since databases usually create book_id automatically.

interface BookCreationAttributes extends Optional<BookAttributes, 'book_id'> {} // going to extend BookAttributes  with book_id as optional

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public book_id!: number; //! this property might not be assigned when new is created
  public title!: string;
  public author!: string;
  public isbn!: string;
  public pages!: number;
  public edition!: number;
  public is_paperback!: boolean;
}

// BookFactory is a function that takes sequelize (the database connection) 
// as a parameter and returns the Book model.

export function BookFactory(sequelize: Sequelize): typeof Book {


  // Inside Book.init, you define each field (book_id, title, author, etc.) and s
  // pecify their types, constraints, and other settings:
  // book_id is an auto-incrementing integer and is set as the primary key.
  // title, author, isbn, pages, and edition are required fields (allowNull: false), 
  // meaning they can’t be empty when creating a book.
  // is_paperback is a boolean that also must be provided.

  Book.init(
    {
      // if this is not done will autoamtically create Primary key but we are specificaly saying create book_id as PK
      book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      edition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_paperback: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },

  //   sequelize: Links the model to the provided database connection.
  // tableName: 'book': Sets the table name to book.
  // timestamps: false: Disables automatic createdAt and updatedAt fields, which are often enabled by default.
  // underscored: true: Converts camelCase field names to snake_case in the database (e.g., book_id).
  // freezeTableName: true: Prevents Sequelize from pluralizing the table name, so it stays book.

    {
      sequelize, // connect to this database
      tableName: 'book', // book table should live in library_db which sequlize is set to
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  );

  return Book;
}
