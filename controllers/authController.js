const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postSignup = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.redirect('/login');

    } catch (error) {
        console.error(error);
        res.status(500).send('Signup error');
    }
};

exports.postLogin = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send('Invalid email or password');
        }

        req.session.isAuth = true;

        req.session.user = {
            userId: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        res.redirect('/dashboard');

    } catch (error) {
        console.error(error);
        res.status(500).send('Login error');
    }
};

exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.send('Logout error');
        }

        res.clearCookie('connect.sid');
        res.send('Logged out successfully');
    });
};

exports.getDashboard = (req, res) => {
    res.render('dashboard', {
        user: req.session.user
    });
};

exports.getAdminPanel = (req, res) => {
    res.render('admin', {
        user: req.session.user
    });
};

exports.postLoginJWT = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send('Invalid email or password');
        }

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: 'Login successful',
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('JWT login error');
    }
};