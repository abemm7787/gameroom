const router = require("express").Router()
const extra = require("./extra")




router.get("/", (req,res) =>{
    res.status(200).json(extra)
})