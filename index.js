const server = require("./api/server")

const PORTS = Process.env.PORT || 5000 ;


server.listen(PORTS, () =>{
console.log(`we are now logging ${PORTS} `)

})
