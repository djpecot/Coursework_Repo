const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    // When setting in postman, remove replace('Bearer ')???
    console.log("Hit Async function", req.header('Authorization'))
    const token = req.header('Authorization').replace('Bearer ', "")
    const decoded = jwt.verify(token, 'This is my new course')
    // console.log(decoded._id,token)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    try {
        // console.log(user)
        if (!user) {
            throw new Error()
        }
        req.user = user
        next()
    } catch (e) {
        res.status(401).send('Authentication Failed!')
    }
    // const decoded = jwt.verify(res.token, 'This is my new course')
}

module.exports = auth