const sendMessage = async (from , message ,uri )=>{
    try{
        const response = await fetch(`${uri}/message/${from}/${message}`)
        return response
    }catch(err){
        console.log(err)
    }


}

module.exports = {
    sendMessage
}