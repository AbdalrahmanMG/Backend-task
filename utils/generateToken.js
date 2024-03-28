const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY

const generateToken = (userId)=>{
    console.log(userId);
    return jwt.sign({userId:userId}, SECRET_KEY,{
        expiresIn: '6h'
    })
}

module.exports =generateToken