// Set up mysql connection
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'fishsticks420',
    database: 'burger_db'
});

connection.connect(function (err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    };
    console.log("Connected as ID " + connection.threadId);
});

// Export mysql connection to be used in other files
module.exports = connection;