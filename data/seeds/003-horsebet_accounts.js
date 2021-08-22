

const horse_bet_table = [
  { horse_league: 'Sea Biscuit'  ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/44", price: 30.00},
  {horse_league: 'Lexus Texas'    ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 102.00},

]

exports.horse_bet_table = horse_bet_table

exports.seed = function (knex, Promise) {
return knex('horse_bet_table').truncate()
.then(function () {
return knex('horse_bet_table').insert(horse_bet_table);
});
};

