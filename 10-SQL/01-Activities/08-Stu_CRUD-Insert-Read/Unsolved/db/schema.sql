DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- creates database fo books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
-- \c makes that database the focus of the interaction 
\c books_db;

-- TODO: What is the SQL code below doing?
-- creates a table biographies in the database 
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- makes a constraint on id that is must be an integer and is not null 
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  -- VARCHAR has to be a string and cannot exeed 100 charaters 
  name VARCHAR(100) NOT NULL
);

