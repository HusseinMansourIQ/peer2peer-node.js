const servers = []

const getNodes = ()=>{
    return [...servers]
}

const addNode = (node)=>{
    const isAlreadyAdded = servers.find((n)=> n.user === node.user )
    if(isAlreadyAdded) {console.log("this node is already added") ; return } ;
    servers.push(node)
    console.log(`${node.user} registed at ${node.uri}`)
} 

const getNodeByUser = (user)=>{
    return servers.find((node)=> node.user == user)
}

module.exports = {
    addNode,
    getNodeByUser,
    getNodes
}