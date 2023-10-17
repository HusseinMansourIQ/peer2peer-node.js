const lookupUser = async (user,uri , requestId)=>{
    try{
        const response = await fetch(`${uri}/lookup/${user}` ,{
            headers : {
                "x-request-id" : requestId
            }
        })
        return response
    }catch(err){
        console.log(err)
    }


}

module.exports = {
    lookupUser
}