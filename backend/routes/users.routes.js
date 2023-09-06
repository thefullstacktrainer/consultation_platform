const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/users.model')
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.username, password: hashedPassword };
        users.registerUser(user)
            .then(data => res.status(201).send())
            .catch(error => res.status(500).send())
    } catch {
        res.status(500).send();
    }
});

router.post('/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name);
    if (user == null) {
        return res.status(400).send('Cannot find user');
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken });
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
});

module.exports = router