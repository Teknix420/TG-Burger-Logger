var connection = require('./connection.js');

var orm = {
    // select data from the table
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            };
            cb(res);
        });
    },

    // insert one "new" item into the table
    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, burgerName, function (err, res) {
            if (err) {
                throw err;
            };
            cb(res);
        });
    },

    // update one item when the "button" is pressed
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = " + id + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            };
            cb(res);
        });
    }
};

module.exports = orm;