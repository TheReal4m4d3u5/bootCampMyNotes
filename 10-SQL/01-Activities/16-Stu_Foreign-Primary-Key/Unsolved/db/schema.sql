-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
    id SERIAL VARCHAR(30);,
    first_name VARCHAR(30);
    PRIMARY KEY (id);
);

CREATE TABLE customer_orders (

    id SERIAL,
    customer_id INTEGER,
    order_details TEXT NOT NULL, 
    FOREIGN KEY (customer_id)
    REFERENCES customer(id)
    ON DELETE CASCAS,
    PRIMARY KEY (id);
);