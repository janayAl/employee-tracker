DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
);


CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id int INT NOT null AUTO_INCREMENT,
manager_id int null,
FOREIGN key (role_id) REFERENCES role(id),
Foreign key (manager_id) References employee(id) on DELETE set null
);

