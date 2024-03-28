const authRepository = require('../repositories/authRepository.js')
const User = require('../models/user.js')
const {registerSchema,loginShema} = require('../validations/userValidation.js')
const bcryptjs = require('bcryptjs')
const CustomError = require('../errors/customError.js')
const generateToken = require('../utils/generateToken.js')
const sanitizeUserInput = require('../utils/sanitizeUserInput.js')

class AuthController{
    async login(req, res, next) {
        try {
            const {error, value} = loginShema.validate(req.body)
            if (error) {
                throw new CustomError(400, `Validation Error: ${error.details[0].message}`)
            }
            const {email, password} = value

            const user = await authRepository.login(email, password)
            const currestUser = user[0]
            console.log("frn controller", currestUser.id);
            const token = generateToken( currestUser.id)

            res.json({
                id: currestUser.id,
                fullName: currestUser.fullName,
                email: currestUser.email,
                phone: currestUser.phone,
                token: token
            })
        } catch (error) {
            next(error)
        }
    }
    
    async addUser(req, res, next){
        try {
            const {error, value} = registerSchema.validate(req.body)
            if(error){
                throw new CustomError(400, `Validation Error: ${error.details[0].message}`)
            }

            const sanitizedUser = sanitizeUserInput(value)
            const {fullName, email, password, phone} = sanitizedUser

            const passwordHashed = await bcryptjs.hash(password, 10)

            const newUser = new User(fullName, email, passwordHashed, phone)
            await authRepository.addUser(newUser, email)
            res.json({success: true ,message:"signUp successfully!"})
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController()