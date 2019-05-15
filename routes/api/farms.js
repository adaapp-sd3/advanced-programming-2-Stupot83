const express = require("express");
const router = express.Router();
const Farm = require("../../schema/Farm");

router.post("/farm", (req, res) => {
  Farm.findOne({ userId: req.body.userId }).then(farm => {
    if (farm) {
        console.log({farm});
        console.log("this is an existing farm");
      //TODO Update farm
    } else {
    console.log(req.body);
      const newFarm = new Farm({
        userId: req.body.userId,
        chickens: req.body.chickens
      });

    //TODO Get it to put correct data into mongodb
      newFarm
          .save()
          .then(savedFarm => res.json(savedFarm))
          .catch(err => console.log(err));
    }
  });
});

module.exports = router;
