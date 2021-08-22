

exports.up = function(knex, Promise) {
    return knex.schema.createTable("mlb_baseball_table" , (table) =>  {
    table.increments()
    table.string("baseball_teams",200).notNullable()
    table.string("description",500)
    table.string("odds").notNullable()
    table.integer("price").notNullable()
    })
  
    .createTable("pro_boxing_table" , (table) =>  {
    table.increments()
    table.string("boxing_team",200).notNullable()
    table.string("description",300)
    table.integer("odds").notNullable()
    table.integer("price").notNullable()
    })

    .createTable("mls_soccar_table" , (table) =>  {
    table.increments()
    table.string("soccar_league",200).notNullable()
    table.string("description",300)
    table.integer("odds").notNullable()
    table.integer("price").notNullable()
    })
    .createTable("horse_bet_table" , (table) =>  {
    table.increments()
    table.string("horse_league",200).notNullable()
    table.string("description",300)
    table.integer("odds").notNullable()
    table.integer("price").notNullable()
    })

    .createTable("users_table", (table) => {
        table.increments()
        table.string("username", 255).notNullable()
        table.string("password", 255).notNullable()
    })
    }

   



  
  exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("mlb_baseball_table")
   .dropTableIfExists("users_table")
   .dropTableIfExists("pro_boxing_table")
   .dropTableIfExists("mls_soccar_table")
   .dropTableIfExists("horse_bet_table")
  
  };
  
  // no intelesense
  // callbacks always take an argument



  const { userParams } = require("../dbConfig");


    



  
  

  

