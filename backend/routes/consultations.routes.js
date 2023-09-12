const express = require('express')
const router = express.Router()
const consultationsDbQuery = require('../database/consultations.db_query')
const m = require('../helpers/middlewares')

// get all consultations
router.get('/', async (req, res) => {
    try {
        const consultations = await consultationsDbQuery.getConsultations();

        const formattedConsultations = consultations.map(consultation => ({
            ...consultation,
            date: new Date(consultation.date).toISOString().split('T')[0], // Format the date
            from_time: consultation.from_time.slice(0, 5), // Format the from_time
            to_time: consultation.to_time.slice(0, 5), // Format the to_time
        }));

        res.json(formattedConsultations);
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message });
        }
    }
});


/* Insert a new consultation */
router.post('/', async (req, res) => {
    await consultationsDbQuery.createConsultant(req.body)
        .then(consultation => res.status(201).json({
            message: `The consultation #${consultation.insertId} has been created`,
            content: {
                ...req.body, id: consultation.insertId
            }
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router