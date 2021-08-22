
const db = require("../../data/dbConfig")




async function getall(){

//  return db("  baseball_teams", "description ", "odds", "odds").from("mlb_baseball_table")
return db.select().table("mlb_baseball_table")

}

const getbyId = async (id) => {
    return db('mlb_baseball_table').where('id', id).first()
  }



const create = async(team) =>{


  const  [id] = await db("mlb_baseball_table").insert(team)
    return getbyId(id)
 
}



const updateById = async (id, account) => {
  await db('mlb_baseball_table').where('id', id).update(account)
  return getbyId(id)
}


async function remove(){

}





module.exports = {getall, create, remove, getbyId ,  updateById}