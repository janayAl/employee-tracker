SELECT departments.department_name AS department, role.title
FROM role
JOIN department
ON role.role_id = department.id
ORDER BY department.department_name;

SELECT role.role_name AS role, role.title
FROM role
LEFT JOIN department
ON role.role_id = department.id
ORDER BY department.department_name;



-- SELECT
--   student.first_name,
--   student.last_name,
--   course.name
-- FROM student
-- JOIN student_course
--   ON student.id = student_course.student_id
-- JOIN course
--   ON course.id = student_course.course_id;