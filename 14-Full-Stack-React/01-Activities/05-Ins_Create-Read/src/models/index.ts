import sequelize from '../config/connection.js';
import { BookFactory } from './book.js';

const Book = BookFactory(sequelize); // BookFactory gets imported from book.js, Books is a sequalize model 

export { sequelize, Book }; //server.ts -> index.ts -> index.ts -> book-routes -> models/book ->  Book 
