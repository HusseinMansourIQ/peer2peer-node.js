const {getNodeByUser} = require('./servers')
const {getNodes} = require('./servers')
const {lookupUser} = require('../lookupUser')
const {v4} = require('uuid')
const seedIds = new Set()
const lookup = async (req,res)=>{

    const {user} = req.params
    const requestId = req.get('x-request-id') ?? v4()
    
    if(seedIds.has(requestId)){
        res.status(404).send("no user")
    }
    
    seedIds.add(requestId) 
    const serverByUser = getNodeByUser(user)


    if(serverByUser){
        res.json(serverByUser)
    }else{
        try{
            let foundUser 
            for(let server of getNodes()){
                console.log("this is server.uri")
                console.log(server.uri + "  fffff")
                 
               foundUser = await  lookupUser(user , server.uri , requestId)
            }
            if(foundUser){
                res.json(foundUser)
            }else{
                res.status(404).send("no user")
            }
            

        }catch(err){
            res.json(err)
        }
    }
}

module.exports = {lookup}