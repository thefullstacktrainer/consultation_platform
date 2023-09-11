const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'consultation_platform'
});

connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the MySQL server.');
});
connection.query = util.promisify(connection.query);

module.exports = connection;
