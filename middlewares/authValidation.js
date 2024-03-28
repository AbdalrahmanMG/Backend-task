const jwt = require("jsonwebtoken")
const CustomError = require("../errors/customError")


const authValidation = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            throw new CustomError(401, "Unauthorized user - no token!")
        }

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            if (!decoded) {
                throw new CustomError(401, "Unauthorized user - invalid token!")
            }

            const userId = decoded.userId
            if (!userId) {
                throw new CustomError(401, "Unauthorized user ")
            }
            req.userId = userId
            next()
        } catch (error) {
            throw new CustomError(401, "Unauthorized user - invalid token signature!");
        }

    } catch (error) {
        next(error)
    }
}

module.exports = authValidation