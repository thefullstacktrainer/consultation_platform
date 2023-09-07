const jwt = require('jsonwebtoken');

function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}

function checkFieldsPost(req, res, next) {
    const { title, content, tags } = req.body
    next();
    // if (title && content && tags) {
    //     next()
    // } else {
    //     res.status(400).json({ message: 'fields are not good' })
    // }
}

function checkUserFields(req, res, next) {
    const { email, username, password } = req.body;
    if (email || username && password) {
        next()
    } else {
        res.status(400).json({ message: 'fields are missing' })
    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

        if (err) return res.sendStatus(403);
        const { username, id, email } = { ...user };
        req.user = { username, id, email };
        next();
    });
}

module.exports = {
    mustBeInteger,
    checkFieldsPost,
    authenticateToken,
    checkUserFields
}