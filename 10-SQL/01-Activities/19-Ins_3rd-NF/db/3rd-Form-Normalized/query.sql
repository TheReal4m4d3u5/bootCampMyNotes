SELECT 
    student_name,
    CONCAT(course_name, ' ', course_level) AS course_title,
    instructor_name
FROM courses
JOIN enrollements
ON enrollements.course_id = courses.course_id
JOIN students
ON enrollements.student_id = students.student_id
JOIN instructors
ON courses.instructor_id = instructors.instructor_id;