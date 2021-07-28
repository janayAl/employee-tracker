const express = require (`express`)
const mysql = require (`mysql`)
const mysql2 = require (`mysql2`)

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  