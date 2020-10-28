var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create the`router` for the app, and export the`router` at the end of your file.
router.get("/", function (req, res) {

    burger.all(function (data) {
        var obj = {
            burgers: data
        };
        res.render("index", obj);
    });
});

router.post("/api/burgers", function (req, res) {

    burger.new(req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var burgerId = req.params.id

    burger.update(burgerId, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;