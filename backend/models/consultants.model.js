let consultants = require('../data/consultants.json')
const filename = './data/consultants.json'
const helper = require('../helpers/helper.js')

const insertConsultant = newConsultant => {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(consultants) }
        const date = {
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        }
        newConsultant = { ...date, ...newConsultant, ...id }
        consultants.push(newConsultant)
        helper.writeJSONFile(filename, consultants)
        resolve(newConsultant)
    })
}

const getConsultants = () => {
    return new Promise((resolve, reject) => {
        if (consultants.length === 0) {
            reject({
                message: 'No consultants available',
                status: 202
            })
        }
        resolve(consultants)
    })
}

const getConsultantById = id => {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(consultants, id)
            .then(consultant => resolve(consultant))
            .catch(err => reject(err))
    })
}

const updateConsultant = (id, updatedData) => {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(consultants, id)
            .then(consultant => {
                const index = consultants.findIndex(c => c.id == consultant.id)
                id = { id: consultant.id }
                const date = {
                    createdAt: consultant.createdAt,
                    updatedAt: helper.newDate()
                }
                consultants[index] = { ...date, ...updatedData, ...id }
                helper.writeJSONFile(filename, consultants)
                resolve(consultants[index])
            })
            .catch(err => reject(err))
    })
}

const deleteConsultant = id => {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(consultants, id)
            .then(() => {
                consultants = consultants.filter(c => c.id != id);
                helper.writeJSONFile(filename, consultants)
                resolve({ message: "Deleted" })
            })
            .catch(err => reject(err))
    })
}

module.exports = {
    insertConsultant,
    getConsultants,
    getConsultantById,
    updateConsultant,
    deleteConsultant
}