const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const users = require('../models/users.model')
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { username: req.body.username, password: hashedPassword };
        users.registerUser(user)
            .then(data => res.status(201).send({ username: data.username, message: "User is created" }))
            .catch(error => res.status(500).send({ error }))
    } catch {
        res.status(500).send({ error: "Some error" });
    }
});

router.post('/login', async (req, res) => {
    users.loginUser(req.body)
        .then(user => {
            res.status(200).send({ user });
        })
        .catch(error => res.status(400).send({ error }))

});

module.exports = router