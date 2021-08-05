const express = require('express')
const mysql = require('mysql')
const mysql2 = require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')
const inquirer = require('inquirer')

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected at " + connection.threadId + "\n");
    initialQuestions() //add a function to prompt initial questions
})

function initialQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'ViewOptions',
            message: 'What would you like to do?',
            Choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role',]
        }

    ])
        .then(function(answer) {   //function asnswer vs value? 
            switch (answer.ViewOptions) {   // switches the responses to equal/yield its corresponding function
                case 'view all departments':
                    viewDepartment();
                    break;
                case 'view all roles':
                    ViewRole();
                    break;
                    case 'view all employees':
                    ViewEmployee();
                    break;
                case 'add a department':
                    AddDepartment(); //create add department function  call
                    break;
                case 'add a role':
                    AddRole(); //add role funciton call
                    break;
                case 'add an emplyee':
                    AddEmployee(); //add employee function call 
                    break;
                case 'update an employee role':
                    UpdateEmployeeRole(); // update employee function call
                    break; //if I don't have the word break here, then it will go on to the next case or will it go back to the top?
//exit (connection.end) or come back to initial questions? //
//or delete beak at the end to add deault: console log('choose another option')
            }
        })
    
}
//add view department function

function viewDepartment() {
    Connection.Query(`SELECT * FROM department`,
        function (err, results) {
            if (err) throw err; // added if statement for throw error if an erorr
            console.table(results); //console.table displays tabular data as a table
            startMenu();// add a function to start back from the top when done?
        });
}


//add view roles function
function ViewRole() {
    Connection.Query(`SELECT * FROM role`, function (err, results) {
        if (err) throw err;
        console.table(results);
        initialQuestions();
    });
}

//View employees function
function ViewEmployee() {
    connection.query(`SELECT department.name, role.title, role.salary, employee.first_name, employee.last_name, employee.manager_id as manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        initialQuestions();
    });
}


// const updateEmployeeRole = async () => {
//   // get employees and choice one
//   const employee = await connection.query('SELECT * FROM employee');
//   console.log({ employee });
//   const employee = await inquirer.prompt([
//     {
//       type: 'list',
//       message: "Which employee's role would you like to update?",
//       name: 'selectedValue',
//       choices: employees.map(
//         employee =>
//           `${employee.id} ${employee.first_name} ${employee.last_name}`,
//       ),
//     },
//   ]);
//   console.log({ employee });
//   const employeeId = employee.selectedValue.split(' ')[0];

//   // get roles and choice one
//   const roles = await connection.query('SELECT * FROM role');
//   console.log({ roles });
//   const newRole = inquirer.prompt([
//     {
//       type: 'list',
//       message: "What is the employee's new role?",
//       name: 'selectedValue',
//       choices: roles.map(role => `${role.id} ${role.title}`),
//     },
//   ]);
//   console.log({ newRole });
//   const roleId = newRole.selectedValue.split(' ')[0];

//   // update employee role
//   const updateResult = await connection.query(
//     'UPDATE employee SET role_id = ? WHERE id = ?',
//     [roleId, employeeId],
//   );
//   console.log({ updateResult });

//   return Promise.resolve();
// };

// updateEmployeeRole()
//   .then(() => {
//     console.log('updateEmployeeRole() is Done. Now will run start()');
//     start();
//   })
//   .catch(err => {
//     console.error('Something Error ', { err });
//   });


