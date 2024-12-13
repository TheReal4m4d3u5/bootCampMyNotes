DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id NOT NULL,
  first_name VARCHAR(50) NOT NUll,
  last_name VARCHAR(50) NOT NUll,
  value_card_member BOOLEAN NOT NULL
);
