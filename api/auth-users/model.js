const db = require("../../data/dbConfig")




exports.add = function({username, password}){
    return db("users_table")
    .insert({username, password})
    .then(id =>{
        return db("users_table")
        .where("id" , id)
        .first()
    })
}


exports.getBy = function (username){
    return db("users_table")
    .where({username})
    .first()
}

