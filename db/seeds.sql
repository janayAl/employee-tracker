USE employees_db;
INSERT INTO department (id, name)
VALUES ('1', 'Air'),
       ('2', 'Water'),
       ('3', 'Earth');

       INSERT INTO role (title, salary)
VALUES ('Bird', '500000'),
       ('Fish', '50000'),
       ('Deer', '100000');
       

       INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Scuttle', 'Shores', 1, 1),
       ('Flounder','Dunger', 2, 2 ),
       ('Bambi', 'Bloom', 3, 3);
    
