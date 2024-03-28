const joi = require('joi')

const registerSchema = joi.object({
    fullName: joi.string().required().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/), //add regex
    email: joi.string().email().required().regex(/^[a-zA-Z0-9._%+-]+@(?:gmail|yahoo|hotmail|outlook|aol)\.[a-zA-Z]{2,}$/), // add regex 
    password: joi.string().required().min(8).max(20),
    phone: joi.string().required().pattern(/^(\+2)?01[0125][0-9]{8}$/) //change this regex later
})

const loginShema = joi.object({
    email: joi.string().email().required().regex(/^[a-zA-Z0-9._%+-]+@(?:gmail|yahoo|hotmail|outlook|aol)\.[a-zA-Z]{2,}$/),
    password: joi.string().required().min(8).max(20)
})

module.exports = {registerSchema, loginShema}