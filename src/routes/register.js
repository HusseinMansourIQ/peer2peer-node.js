const {addNode} = require('./servers')

const register = (req,res)=>{
    try{

     const { user, uri } = req.params;
     
     addNode({user,uri,});
  
    } catch(err){
        console.log(err)
    }

    res.json({ message: "success" });

}

module.exports = {register}
// لان جاي اشغل السيد بالبداية وجاي يسجل باسم نور