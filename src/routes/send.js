const {lookupUser} = require('../lookupUser')
const {v4} = require('uuid')
const { sendMessage } = require('../sendMessage')
const { getRandonSeedServer } = require('../getRandomSeedServer')
const axios = require('axios');

const send = async (req,res)=>{

    try{
        //const uri = `http://localhost:${process.argv[2] || 3000}`
        const {from , to ,message} = req.params
        console.log(to + " this is to" )
        const foundUser = await axios.get(`http://localhost:3000/lookup/noor`) 

        console.log(foundUser.data.uri + " this is found user ")
        await sendMessage(from , message ,"http://" + foundUser.data.uri )

        res.json("message sent ")
    }catch(err){
        console.log(err)
    }

}
module.exports = {
    send
}
//lookupUser(to, getRandonSeedServer().uri, v4());
