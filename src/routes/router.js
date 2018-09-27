/**
 *--------------------------------------------------------------------------
 * Routes
 *--------------------------------------------------------------------------
 * @description :: API routes
 */

// import router from express
const router = require("express").Router()

// import jwt from jsonwebtoken
const jwt = require('jsonwebtoken')

// call VerifyMiddleware function
const verification = require('../middleware/VerifyMiddleware')

// import ClientController
const clientController = require('../controllers/ClientController')
const authController = require('../controllers/AuthController')


// Describe route path
// Client router
router.get('/client', clientController.index)
router.get('/client/:id', clientController.view)
router.post('/clients/register', clientController.create)

//prepare jwt token
router.post('/auth/login', authController.auth)

//lets say is the Dashboard
router.post('/client/dashboard', verification.authToken, authController.login)


// router.post('/authenticate', clientController.login)
// Export router
module.exports = router