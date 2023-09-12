const connection = require('./');

async function getConsultations() {
    try {
        const results = await connection.query('SELECT * FROM consultations');
        return results; // resolving with the results of the query
    } catch (error) {
        throw { status: 500, message: 'Database query error', details: error }; // rejecting with an error object
    }
}

async function createConsultant(consultationData) {
    try {
        const sql = `
            INSERT INTO consultations (topic, consultant_name, date, from_time, to_time, duration, spotsLeft) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const {
            topic,
            consultant_name,
            date,
            from_time,
            to_time,
            duration,
            spotsLeft
        } = consultationData;

        const params = [
            topic,
            consultant_name,
            date,
            from_time,
            to_time,
            duration,
            spotsLeft
        ];

        const results = await connection.query(sql, params);
        return results;
    } catch (error) {
        throw { status: 500, message: 'Database insertion error', details: error };
    }

}

module.exports = {
    getConsultations,
    createConsultant
}