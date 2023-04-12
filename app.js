require('dotenv').config()
require('./mongoClient')
const express = require('express')
const config = require('./config')
const routes = require('./routes')
const app = express()

// Add routes here
routes(app)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    console.log(err)
    err.status = 404
    res.send('Route not found')
    next(err)
})
app.listen(process.env.PORT || config.port, () => {
    console.log(`${config.appName} listening on port ${config.port}!`)
})
module.exports = app