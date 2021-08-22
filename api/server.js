const express = require("express")
const server = express()
const cors = require("cors")
const helmet = require("helmet")
const gameRouter = require("./open-router/games-routers")
const authRouter =  require("./auth-users/auth-router")


server.use(helmet())
server.use(cors())
server.use(express.json())
server.use("/api/games", gameRouter)
server.use("/api/games", authRouter)

module.exports = server
