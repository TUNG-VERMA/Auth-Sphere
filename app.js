const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),
        cookie: {
            maxAge: 1000 * 60 * 60,
            httpOnly: true
        }
    })
);

app.use(authRoutes);

app.get('/', (req, res) => {
    res.send('AuthSphere Server Running');
});

app.get('/check-session', (req, res) => {
    res.send(req.session);
});

module.exports = app;