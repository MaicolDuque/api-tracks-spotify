const express = require('express');
const app = express();
const configRoutes = require('./routes')
const configExpress = require('./config/express')

configExpress(app)
configRoutes(app)

module.exports = app
