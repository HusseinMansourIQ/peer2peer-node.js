const {seeds} = require('../seeds') 
const getRandonSeedServer = ()=>{
    return seeds[Math.floor(Math.random()*seeds.length)]
}
module.exports = {getRandonSeedServer}