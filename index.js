const express = require('express')
const mysql = require('mysql')
const mysql2 = require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')

//add view department function

function viewrole() {
    Connection.createQuery("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(results);
        startMenu();
    });
}
//add view roles function
function viewrole() {
    Connection.createQuery("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(results);
        startMenu();
    });
}

//View employees function
function viewemployee() {
    connection.query(`SELECT department.name, role.title, role.salary, employee.first_name, employee.last_name, employee.manager_id as manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id;`, function (err, res) {
    if (err) throw err;
    console.table(results);
    startMenu();
});
}



// const updateEmployeeRole = async () => {
//   // get employees and choice one
//   const employees = await connection.query('SELECT * FROM employee');
//   console.log({ employees });
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


