DROP DATABASE IF EXISTS university;
CREATE DATABASE university;

\c university;

CREATE TABLE students (
    student_id SERIAL,
    student_name VARCHAR(255),
    PRIMARY KEY (student_id)
);

CREATE TABLE instructors (
    instructor_id SERIAL,
    instructor_name VARCHAR(255),
    PRIMARY KEY (instructor_id)
);

CREATE TABLE courses (
    course_id SERIAL,
    course_level INTEGER,
    course_name VARCHAR(255),
    instructor_id INTEGER,
    PRIMARY KEY (course_id),
    FOREIGN KEY (instructor_id)
    REFERENCES instructors(instructor_id)
    ON DELETE SET NULL
);

CREATE TABLE enrollements (
    enrollment_id SERIAL,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    PRIMARY KEY (enrollment_id),
    FOREIGN KEY (student_id)
    REFERENCES students(student_id)
    ON DELETE CASCADE,
    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
    ON DELETE SET NULL
);