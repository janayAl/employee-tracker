const express = require('express')
const mysql = require('mysql')
const mysql2 = require('mysql2')
// const Connection = require('mysql2/typings/mysql/lib/Connection')
const inquirer = require('inquirer')
require('dotenv').config()
const cTable = require('console.table'); // npm package, writes the table in the view of the console



// const sequlize = require('sequlize')
//enable acces to .env variables

// use environment variables to connect to database
// const sequlize = new sequlize
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
// {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// }
// );

// connection.connect(function (error) {
//     if (error) throw error;
//     console.log("connected at " + connection.threadId + "\n");
//     initialQuestions() //add a function to prompt initial questions
// })

const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySQL connected')
})


function initialQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'ViewOptions',
            message: 'What would you like to do?',
            choices: ['view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role',],
        },

    ])
        .then(function (answer) {   //function asnswer vs value? 
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
                case 'add an employee':
                    AddEmployee(); //add employee function call 
                    break;
                case 'update an employee role':
                    updateEmployeeRole(); // update employee function call
                    break;
                case "Exit":
                    exit(db.end);
                    break;

                //if I don't have the word break here, then it will go on to the next case or will it go back to the top?
                //exit (connection.end) or come back to initial questions? //
                //or delete beak at the end to add deault: console log('choose another option')
            }
        })

}
initialQuestions();
//add view department function
function viewDepartment() {
    db.query(`SELECT * FROM department`,
        function (err, results) {
            if (err) throw err; // added if statement for throw error if an erorr
            console.table(results); //console.table displays tabular data as a table
            initialQuestions();// add a function to start back from the top when done?
        });
}

//add view roles function
function ViewRole() {
    db.query(`SELECT * FROM role`, function (err, results) {
        if (err) throw err;
        console.table(results);
        initialQuestions();
    });
}

//View employees function
function ViewEmployee() {
    db.query(`SELECT department.name, role.title, role.salary, employee.first_name, employee.last_name, employee.manager_id as manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id;`, function (err, results) {
        if (err) throw err;
        console.table(results);
        initialQuestions();
    }
    )
};

function AddEmployee(employee) {
    db.query(`SELECT * FROM employee`, function (err, results) {
        // console.table(results);

        inquire.prompt([
            {
                name: "firstName",
                type: "input",
                message: "Enter employee's  first name"
            },
            {
                name: "lastName",
                type: "input",
                message: "Enter employee's  last name"
            },
            {
                name: "role",
                type: "list",
                message: "Select a role",
                choices: ["Bird", "Fish", "Deer"]
            }
        ]).then(function (answer) {
            db.query("INSERT INTO department SET ?", { name: answer.firstName, name: answer.lastName },)
            function (err) {
                if (err) throw err; {
                    console.table("Inserted employee successfully!");
                })
    });
})




const updateEmployeeRole = async () => {
    // get employees and choice one
    const employee = await db.query('SELECT * FROM employee');
    console.log({ employee });
    const employeeQuestion = await inquirer.prompt([
        {
            type: 'list',
            message: "Which employee role would you like to update?",
            name: 'selectedValue',
            // choices: employee.map(
            //   employee =>
            //     `${employee.id} ${employee.first_name} ${employee.last_name}`,
            // ),
            choices: ["a", "b"]
        },
    ]);
    console.log({ employee });
    const employeeId = employee.selectedValue.split(' ')[0];

    // get roles and choice one
    const roles = await connection.query('SELECT * FROM role');
    console.log({ roles });

    const newRole = inquirer.prompt([
        {
            type: 'list',
            message: "What is the employee new role?",
            name: 'selectedValue',
            choices: role.map(role => `${role.id} ${role.title}`),
        },
    ]);
    console.log({ newRole });
    const roleId = newRole.selectedValue.split(' ')[0];

    // update employee role
    const updateResult = await connection.query(
        'UPDATE employee SET role_id = ? WHERE id = ?',
        [roleId, employeeId],
    );
    console.log({ updateResult });

    return Promise.resolve();
}

//add a department function//
function AddDepartment(employee) {
    db.query(`SELECT * FROM department`, function (err, results) {
        console.table(results);

        inquirer
            .prompt([
                {
                    name: "departmentName",
                    type: "input",
                    message: "Enter department name"

                } //insert into department set or employee set?//
            ]).then(function (answer) {
                db.query("INSERT INTO department SET ?", { name: answer.departmentName },
                    function (err) {
                        if (err) throw err;
                        console.table("Inserted data successfully!"); // use console.table so data will show in lieu of console.log
                    })
            })

    })
}
// initialQuestions();
// AddEmployee();



//add role function//
function AddRole(employee) {
    db.query(`SELECT * FROM role`, function (err, results) {
        console.table(results);

        inquire
            .prompt([
                {
                    name: "roleName",
                    type: "input",
                    message: "Enter the name of the role" //needs to be choices?
                    // validate: (input) => {
                    //     if (input) {
                    //         return true;

                    //     }else {
                    //         return "invalid entry, try again.";
                    //     }
                    // }

                }
            ])
    })
}
// updateEmployeeRole()
//   .then(() => {
//     console.log('updateEmployeeRole() is Done. Now will run start()');
//     start();
//   })
//   .catch(err => {
//     console.error('Something Error ', { err });
//   });


