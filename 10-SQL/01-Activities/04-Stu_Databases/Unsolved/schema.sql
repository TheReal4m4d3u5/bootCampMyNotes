-- Write code here or enter directly in PostgreSQL shell --
DROP DATABASE inventory_db;
DROP DATABASE IF EXISTS inventory_db;

-- Create two new databases --

CREATE DATABASE inventory_db;

-- Use inventory_db --
\c inventory_db;

-- See database in use --
SELECT current_database();
