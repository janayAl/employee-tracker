const express = require ('express')
const mysql = require ('mysql')
const mysql2 = require ('mysql2')




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


