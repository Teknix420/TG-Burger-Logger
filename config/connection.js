// Set up mysql connection
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    port: '3306',
    user: 'b7d8c3d91af578',
    password: 'e563ff6d',
    database: 'heroku_2877138bb8dee35'
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