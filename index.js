const server = require("./api/server")


const PORTS = 5000 

server.listen(PORTS, () =>{
console.log(`we are now logging ${PORTS} `)

})
