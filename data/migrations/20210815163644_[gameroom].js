

exports.up = function(knex, Promise) {
    return knex.schema.createTable("mlb_baseball_table" , (table) =>  {
    table.increments()
    table.string("baseball_teams",200).notNullable().unique()
    table.string("description",500)
    table.string("odds")
    table.integer("price")
    })
  
    // .createTable("pro_boxing_table" , (table) =>  {
    // table.increments("boxing_id")
    // table.string("boxing_team",200).notNullable()
    // table.string("description",300)
    // table.integer("odds").notNullable()
    // table.integer("price").notNullable()
    // })
    // .createTable("mls_soccar_table" , (table) =>  {
    // table.increments("soccar_id")
    // table.string("soccar_league",200).notNullable()
    // table.string("description",300)
    // table.integer("odds").notNullable()
    // table.integer("price").notNullable()
    // })
    // .createTable("horse_bet_table" , (table) =>  {
    // table.increments("horse_id")
    // table.string("horse_league",200).notNullable()
    // table.string("description",300)
    // table.integer("odds").notNullable()
    // table.integer("price").notNullable()
    // })
    }
  
  exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("mlb_baseball_table")
  // .dropTableIfExists("pro_boxing_table")
  // .dropTableIfExists("mls_soccar_table")
  // .dropTableIfExists("horse_bet_table")
  };
  
  // no intelesense
  // callbacks always take an argument