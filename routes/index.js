const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/create', (req, res) => {
    let user = { username: req.body.username };
    User.create(user, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
            res.redirect('./');
        }
    });
});

module.exports = router;
