




const mlb_baseball_table = [
  {baseball_teams: 'Royals',description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00},   //baseball_teams_team
  {baseball_teams: 'Mets'   ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00 },
  { baseball_teams: 'Dodgers'   ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00},
  { baseball_teams: 'Red_Soxs'  ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00},
  { baseball_teams: 'Cardinals'  ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00},
  {baseball_teams: 'Bluejays'    ,description:"we are farmers, bum, bumb, bum, bum, bum, um" , odds: "1/2", price: 10.00},
]

exports.mlb_baseball_table = mlb_baseball_table

exports.seed = function (knex, Promise) {
return knex('mlb_baseball_table').truncate()
.then(function () {
return knex('mlb_baseball_table').insert(mlb_baseball_table);
});
};

