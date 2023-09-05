const express = require('express')
const router = express.Router()
const consultantsModel = require('../models/consultants.model')
const m = require('../helpers/middlewares')

// get all consultants
router.get('/', async (req, res) => {
    await consultantsModel.getConsultants()
        .then(consultants => res.json(consultants))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

// /* Insert a new consultant */
router.post('/', m.checkFieldsPost, async (req, res) => {
    console.log(req.body)
    await consultantsModel.insertConsultant(req.body)
        .then(consultant => res.status(201).json({
            message: `The consultant with #${consultant.id} has been created`,
            content: consultant
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})


/* A consultant by id */
router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await consultantsModel.getConsultantById(id)
        .then(consultant => res.json(consultant))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})



/* Update a consultant */
router.put('/:id', m.mustBeInteger, m.checkFieldsPost, async (req, res) => {
    const id = req.params.id

    await consultantsModel.updateConsultant(id, req.body)
        .then(consultant => res.json({
            message: `The consultant #${id} has been updated`,
            content: consultant
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

/* Delete a consultant */
router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await consultantsModel.deleteConsultant(id)
        .then(consultant => res.json({
            message: `The consultant #${consultant.id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

module.exports = router