const fetch = require('cross-fetch')
const registerWithRandomSeedServer = async (uri)=>{
    try{
        const response = await fetch(`${uri}/register/${process.argv[3]}/localhost:${process.argv[2] || 3000}`)
        //console.log("this is register function ")
        return response.json()

    }catch(err){
        console.log(err)
        console.log("this is error from register function ")
    }
}

module.exports = {
    registerWithRandomSeedServer
}

/**
 * const response = await fetch(`${uri}/register`,{
        method : "POST",
        body : JSON.stringify({
            uri : "http://localhost:3000",
            user : "hussein"
        }),
        headers : {"Content-Type" : "application/json"}
    })
    return response.json()
 */