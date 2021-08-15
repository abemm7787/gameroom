const express = require("express")
const server = express()
const cors = require("cors")
const helmet = require("helmet")
const gameRouter = require("./games-routers")

server.use(helmet())
server.use(cors())
server.use("/api/games", gameRouter)


module.exports = server
