const CustomError = require('../errors/customError.js')
const User = require('../models/user.js')
const UserRepository = require('../repositories/UserRepository.js')
const { registerSchema } = require('../validations/userValidation.js')
const bcryptjs = require('bcryptjs')


class UserController {
    async getAllUsers(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1
            const pageSize = parseInt(req.query.pageSize) || 10;

            const startIndex = (page - 1) * pageSize;
            const users = await UserRepository.getAllUsers(startIndex, pageSize)
            res.json(users)
        } catch (error) {
            next(error)
        }
    }

    async getUserDetails(req, res, next) {
        try {
            const userId = req.params.id
            const user = await UserRepository.getUserDetials(userId)

            res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const userId = req.params.id
            await UserRepository.deleteUser(userId)
            res.json({ success: true, message: "User is deleted successfully!" })
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const { error, value } = registerSchema.validate(req.body)
            if (error) {
                throw new CustomError(400, error.details[0].message)
            }

            const userId = req.params.id
            const { fullName, password, email, phone } = value

            const passwordHashed = await bcryptjs.hash(password, 10)

            const userData = new User(fullName, email, passwordHashed, phone)
            await UserRepository.updateUser(userId, userData, email)
            res.json({ success: true, message: "User updated successfully!" })

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController()