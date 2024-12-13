DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;


-- Creating a instructors table
CREATE TABLE locations (
    location_id SERIAL, PRIMARY KEY,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);


-- Creating a students table
CREATE TABLE businesses (
    business_id SERIAL PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER
    FOREIGN KEY (location_id)
    REFERENCES locations(lcoation_id)
    ON DELETE CASCADE 
    -- on delete cascase delets rest if primary gets deleted
);

