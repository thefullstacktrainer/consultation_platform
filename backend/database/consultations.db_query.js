const connection = require('./');

async function getConsultations() {
    try {
        const results = await connection.query('SELECT * FROM consultations');
        return results; // resolving with the results of the query
    } catch (error) {
        throw { status: 500, message: 'Database query error', details: error }; // rejecting with an error object
    }
}


module.exports = {
    getConsultations
}