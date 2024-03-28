const express = require('express')
const apiV1 = express.Router()
const userRouter = require('./userRoutes.js')
const authRouter = require('./authRouter.js')

apiV1.use('/users', userRouter)
apiV1.use('/auth', authRouter)


module.exports = apiV1