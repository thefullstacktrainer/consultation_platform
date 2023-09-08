let users = require('../data/users.json')
const filename = './data/users.json'
const helper = require('../helpers/helper.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = newUserInfo => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => (user.username === newUserInfo.username || user.email === newUserInfo.email))
        if (user != null) {
            reject({ message: "username || email is already registered" });
        } else {
            const id = { id: helper.getNewId(users) }
            const date = {
                createdAt: helper.newDate(),
                updatedAt: helper.newDate()
            }
            newUserInfo = { ...newUserInfo, ...date, ...id, }
            users.push(newUserInfo)
            helper.writeJSONFile(filename, users)
            resolve(newUserInfo)
        }
    })
}

const loginUser = userInfo => {
    return new Promise(async (resolve, reject) => {
        const user = users.find(user => user.username === userInfo.identifier || user.email === userInfo.identifier)
        if (user == null) {
            reject({ message: "user is not found" });
        } else {
            try {
                bcrypt.compare(userInfo.password, user.password, (err, result) => {
                    // 'result' will be true if the passwords match, false otherwise
                    if (result) {
                        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                        resolve({ accessToken });
                    } else {
                        reject({ message: 'Not Allowed' });
                    }
                });
            } catch {
                reject({ message: "Not allowed" });
            }
        }
    })
}

const getProfile = userInfo => {
    return new Promise(async (resolve, reject) => {
        const user = users.find(user => user.username === userInfo.identifier || user.email === userInfo.identifier)
        if (user == null) {
            reject({ message: "user is not found" });
        } else {
            const { profile, id, email, username } = user;
            const currentUser = { profile, id, username, email }
            resolve({ ...currentUser })
        }
    })
}

module.exports = {
    registerUser,
    loginUser,
    getProfile
}
