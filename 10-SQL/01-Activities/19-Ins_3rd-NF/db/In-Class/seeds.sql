-- Inserting data into students
INSERT INTO students (student_name) VALUES
('Alice'),
('Bob'),
('Charlie'),
('David'),
('Eva');

INSERT INTO instructors (instructor_name)
VALUES ('Mr Smith'),
('Dr Doe'),
('Mrs Anderson'),
('Ms Johnson'),
('Dr Williams');

INSERT INTO courses (course_level, course_name, instructor_id) 
VALUES (101, 'Math', 1),
(102, 'Science', 2);

INSERT INTO enrollements (student_id, course_id)
VALUES (1, 1),
(3, 1), 
(5, 2),
(1, 2);
