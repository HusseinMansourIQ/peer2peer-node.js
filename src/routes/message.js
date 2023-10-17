const message = (req,res)=>{
    const {from , message} = req.params
    console.log (`${from} sent you a message :- ${message}`)
    console.log(process.argv[2])
    res.json(message)
}
module.exports = {
    message
}