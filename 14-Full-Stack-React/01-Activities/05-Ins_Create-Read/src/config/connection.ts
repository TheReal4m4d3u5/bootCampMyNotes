// Enable access to .env variables
//This loads environment variables from a .env file, 
// so you can use values like DB_URL, DB_NAME, DB_USER, and DB_PASSWORD securely without hardcoding them.
import dotenv from 'dotenv';
dotenv.config();

// This imports Sequelize, an ORM (Object-Relational Mapping) 
// library for connecting to a database and performing operations.
import { Sequelize } from 'sequelize'; // from sequalize module

// // Create a connection object
// This line checks if DB_URL is provided:
// If it exists, it uses it to connect to the database.
// If not, it creates a new connection using individual environment variables 
// (DB_NAME, DB_USER, DB_PASSWORD) and connects to a local PostgreSQL server.
// host: 'localhost' specifies where the database is hosted (in this case, locally).
// dialect: 'postgres' sets the database type to PostgreSQL.
// dialectOptions: { decimalNumbers: true } tells Sequelize to use decimal numbers where needed.

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {

      //configuration for where the database can be found and what dialect we are using
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
