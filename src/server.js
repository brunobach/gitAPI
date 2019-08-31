const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

const server = require('http').Server(app)

mongoose.connect('URL DO SEU BANCO', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

    .then(db => console.log('DB está conectado'))
    .catch(err => console.error(err));

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333

server.listen(port, function () {
    console.log(`Servidor executando em ${port}`)
  })
