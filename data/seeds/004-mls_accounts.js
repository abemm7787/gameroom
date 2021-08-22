

const mls_soccar_table = [
  { soccar_league: 'Brazil'  ,description:"high chance to win the world cup" , odds: "1/4", price: 30.00},
  { soccar_league: 'Paris-Germany'  ,description:"soccar league of the year" , odds: "1/2", price: 102.00},

]

exports.mls_soccar_table = mls_soccar_table

exports.seed = function (knex, Promise) {
  return knex('mls_soccar_table').truncate()
  .then(function () {
  return knex('mls_soccar_table').insert(mls_soccar_table);
  });
  };
  
