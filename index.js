const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
mongoose.connect(mongoURI)

const app = express()

app.use(
    cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session());

require('./models/User')
require('./services/passport')
require('./routes/authRoutes')(app);


app.listen(5000);

