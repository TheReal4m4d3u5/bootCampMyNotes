import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';
import { AuthorFactory } from './Author.js';
import { BookFactory } from './Book.js';

// TODO: Initialize the models

const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);
const Author = AuthorFactory(sequelize);
const Book = BookFactory(sequelize);
// Create associations between the models

Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

// TODO: An author can have many books
Author.hasMany(Book, {
  onDelete: 'CASCADE',
});

// TODO: A book can only have one author
Book.hasOne(Author, {
  onDelete: 'CASCADE',
});

// TODO: A book can have many readers and a reader can have many books
Book.hasMany(Reader, {
  onDelete: 'CASCADE',
});



export { Reader, LibraryCard, Author, Book };
