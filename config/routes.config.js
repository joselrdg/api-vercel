const express = require('express');
const router = express.Router();
// const usersController = require('../controllers/users.controller')
const formController = require('../controllers/form.controller')
// const authMiddleware = require('../middlewares/auth.middleware')

// Users routes
// router.get('/', authMiddleware.isAuthenticated, usersController.user)

router.post('/form/contact', formController.doEmail)



module.exports = router;