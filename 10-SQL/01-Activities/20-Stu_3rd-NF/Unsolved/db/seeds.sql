INSERT INTO locations (location_name, location_manager)
VALUES ('Annapolis, MD', 'Rita Ivanov'),
('Los Angeles, CA', 'Aaron Danov'),
('Lincoln, NB', 'Farahd Mohamed'),



-- Inserting data into businesses
INSERT INTO businesses (business_name, location_id) VALUES
('Prosser Lankovitch Products', 1),
('Ripley Enterprises', 2),
('Gormenghast, Inc.', 3),
('Nullhammer Corporation', 4);

SELECT location_manager, location_name, business_name FROM locations;
JOIN businesses
ON locations.location_id = businesses.lcoation_id


