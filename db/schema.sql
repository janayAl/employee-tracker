DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
role_id INT,
  title VARCHAR(30),
  salary DECIMAL NOT NULL,
    FOREIGN KEY (department)
    REFERENCES department(id)
    ON DELETE SET NULL
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
  first_name VARCHAR(30),
   last_name VARCHAR(30),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
    manager_id INT
    REFERENCES employee(id)
);
