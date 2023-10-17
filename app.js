const express = require('express')
const {getRandonSeedServer} = require('./src/getRandomSeedServer')
const {registerWithRandomSeedServer} = require('./src/registerWithRandomSeedServer')
const {seeds} = require('./seeds')
const {addNode} = require('./src/routes/servers')
const {v4} = require('uuid')
const axios = require('axios');

///controllers
const {register} = require('./src/routes/register')
const {lookup} = require('./src/routes/lookup')
const {send} = require('./src/routes/send')
const { message } = require('./src/routes/message')
const { lookupUser } = require('./src/lookupUser')
const app = express()
const port = process.argv[2] || 3000

app.get('/', async(req,res)=>{
    console.log(process.argv[3])
    console.log(process.argv[2])
})

app.get('/register/:user/:uri',register)

app.get('/lookup/:user',lookup)

app.get('/send/:from/:to/:message' , send)

app.get('/message/:from/:message',message)

async function initilize(){

    for (let seed of seeds) {
        addNode(seed);
      }

    const randomSeedServer = getRandonSeedServer()
    console.log(randomSeedServer)
    await registerWithRandomSeedServer(randomSeedServer.uri)
}

initilize()



app.listen(port,()=>{
    console.log(process.env.USER)
})

