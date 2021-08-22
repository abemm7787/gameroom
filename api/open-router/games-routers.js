const router = require("express").Router();

const UserAccount = require("./games-modules");

// will get a lists of teams with the thier credientials
router.get("/", (req, res, next) => {
  UserAccount.getall()

    .then((lists) => {
      res.status(200).json(lists);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  UserAccount.getbyId(req.params.id)
    .then((lists) => {
      res.status(201).json(lists);
    })
    .catch(next);
  console.log("victory");
});

// router.post("/",  async (req,res,next ) => {

//     try{
//     const newBets = await UserAccount.create({
//         odds : req.body.odds,
//         price: req.body.price,

// })
// res.status(201).json(newBets)
//     }
//     catch{
//         next()

//     }})

router.post("/", async (req, res, next) => {
  console.log(req)
  try {
    const data = await UserAccount.create(req.body);
  res.status(201).json(data); 
}
catch (err) {

    next(err);
  }
}
);

// router.post("/", async (req, res, next) => {
//     try {
//       const newAccount = await  UserAccount.create({
//         price: req.body.price.trim(),
//         odds: req.body.budget,
//       });
//       res.status(201).json(newAccount);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

router.put("/:id", async (req, res, next) => {
  try {
    const updated = await UserAccount.updateById(req.params.id, req.body);
    res.json(updated);
    res.json("update account");
  } catch (err) {
    next(err);
  }
});

router.delete("/", (req, res, next) => {});

module.exports = router;
