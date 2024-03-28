const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const authValidation = require('../middlewares/authValidation.js')

router.route('/').get(authValidation, UserController.getAllUsers)
router.route('/user/:id')
    .get(authValidation, UserController.getUserDetails)
    .delete(authValidation, UserController.deleteUser)
    .put(authValidation, UserController.updateUser)


module.exports = router