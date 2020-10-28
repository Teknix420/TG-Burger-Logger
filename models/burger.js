const orm = require('../config/orm.js');

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    new: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
    },
    update: function (burgerId, cb) {
        orm.updateOne(burgerId, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;