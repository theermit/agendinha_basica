var session = require('express-session');

module.exports = session({
    secret: 'enigma',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
});