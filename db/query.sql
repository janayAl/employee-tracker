SELECT department.name, role.title, role.salary, employee.first_name, employee.last_name, employee.manager_id
FROM department
INNER JOIN role ON role.role_id = department.id
INNER JOIN employee ON role.salry = employee.id
ORDER BY department.name ASC;


-- SELECT department.department_name AS department, role.title
-- FROM role
-- JOIN department
-- ON role.role_id = department.id
-- ORDER BY department.department_name;

-- SELECT role.role_name AS role, role.title
-- FROM role
-- LEFT JOIN department
-- ON role.role_id = department.id
-- ORDER BY department.name;

--SELECT *
-- FROM role
-- JOIN department
-- ON role.department= department.id;





-- SELECT
--   student.first_name,
--   student.last_name,
--   course.name
-- FROM student
-- JOIN student_course
--   ON student.id = student_course.student_id
-- JOIN course
--   ON course.id = student_course.course_id;