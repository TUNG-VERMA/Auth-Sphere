const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');
const jwtAuth = require('../middleware/jwtAuth');

const {
    signupValidator,
    loginValidator
} = require('../middleware/validators');

router.get('/signup', authController.getSignup);
router.post('/signup', signupValidator, authController.postSignup);

router.get('/login', authController.getLogin);
router.post('/login', loginValidator, authController.postLogin);

router.get('/dashboard', isAuth, authController.getDashboard);

router.get('/admin', isAuth, isAdmin, authController.getAdminPanel);

router.get('/logout', authController.logout);

router.post('/login-jwt', authController.postLoginJWT);

router.get('/profile-jwt', jwtAuth, (req, res) => {
    res.json({
        message: 'JWT Protected Route',
        user: req.user
    });
});

module.exports = router;