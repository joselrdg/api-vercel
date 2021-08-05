const express = require('express');
const router = express.Router();
// const usersController = require('../controllers/users.controller')
const formController = require('../controllers/form.controller')
const clientController = require('../controllers/client.controller')
// const authMiddleware = require('../middlewares/auth.middleware')

// Users routes
// router.get('/', authMiddleware.isAuthenticated, usersController.user)

router.post('/form/contact', formController.doEmail)
router.post('/client', clientController.doConnected)
router.post('/u', clientController.doUpConnected)
router.post('/client/disconnected', clientController.doDisconnected)



module.exports = router;