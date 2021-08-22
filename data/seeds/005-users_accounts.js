

const users_table = [
  { boxing_team: 'Mayweather'  ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/44", price: 30.00},
  {boxing_team: 'Ali'    ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 102.00},

]

exports.users_table = users_table

exports.seed = function (knex, Promise) {
return knex('users_table').truncate()
.then(function () {
return knex('users_table').insert(users_table);
});
};
