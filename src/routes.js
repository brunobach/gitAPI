const express = require('express')
const DevController = require('./controllers/Controller')


const routes = express.Router()

routes.post('/devs', DevController.store)

module.exports = routes 