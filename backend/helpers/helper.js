const fs = require('fs')

const getNewId = array => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

const mustBeInArray = (array, id) => {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: `Resource with the ${id} is not found`,
                status: 404
            })
        } else {
            resolve(row)
        }
    })
}

const writeJSONFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
}