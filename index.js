const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
mongoose.connect(mongoURI)
const app = express()
require('./models/User')
require('./services/passport')
require('./routes/authRoutes')(app);

app.listen(5000);

