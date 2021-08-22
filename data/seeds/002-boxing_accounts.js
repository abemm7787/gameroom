

const pro_boxing_table = [
  { boxing_team: 'Mayweather'  ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/44", price: 30.00},
  {boxing_team: 'Ali'    ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 102.00},

]

exports.pro_boxing_table = pro_boxing_table

exports.seed = function (knex, Promise) {
return knex('pro_boxing_table').truncate()
.then(function () {
return knex('pro_boxing_table').insert(pro_boxing_table);
});
};


// .createTable("pro_boxing_table" , (table) =>  {
//   table.increments("boxing_id")
//   table.string("boxing_team",200).notNullable()
//   table.string("description",300)
//   table.integer("odds").notNullable()
//   table.integer("price").notNullable()
//   })
