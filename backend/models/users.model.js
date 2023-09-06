let users = require('../data/users.json')
const filename = './data/users.json'
const helper = require('../helpers/helper.js')

function registerUser(newUserInfo) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(users) }
        const date = {
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        }
        newUserInfo = { ...newUserInfo, ...date, ...id, }
        users.push(newUserInfo)
        helper.writeJSONFile(filename, users)
        resolve(newUserInfo)
    })
}



function loginUser(userInfo) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(users) }
        const date = {
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        }
        newUserInfo = { ...newUserInfo, ...date, ...id, }
        users.push(newUserInfo)
        helper.writeJSONFile(filename, users)
        resolve(newPost)
    })
}

module.exports = {
    registerUser,
    loginUser
}
