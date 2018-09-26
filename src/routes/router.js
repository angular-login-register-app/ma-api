/**
 *--------------------------------------------------------------------------
 * Routes
 *--------------------------------------------------------------------------
 * @description :: API routes
 */

// import router from express
const router = require("express").Router()

// import ClientController
const clientController = require('../controllers/ClientController')


// Describe route path
// Client router
router.get('/client', clientController.index)
router.get('/client/:id', clientController.view)
router.post('/client', clientController.create)
// Export router
module.exports = router