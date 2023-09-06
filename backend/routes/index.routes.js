const express = require('express')
const router = express.Router()

router.use('/api/v1/posts', require('./post.routes'))
router.use('/api/v1/consultants', require('./consultants.routes'))
router.use('/api/v1/users', require('./users.routes'))

module.exports = router