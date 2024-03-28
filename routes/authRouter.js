const router = require('express').Router()
const AuthController = require('../controllers/authController.js')

router.route('/register').post(AuthController.addUser)
router.route('/login').post(AuthController.login)

module.exports = router