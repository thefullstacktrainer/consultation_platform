const express = require('express')
const router = express.Router()
const consultationsDbQuery = require('../database/consultations.db_query')
const m = require('../helpers/middlewares')

// get all consultations
router.get('/', async (req, res) => {
    await consultationsDbQuery.getConsultations()
        .then(consultations => res.json(consultations))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

module.exports = router