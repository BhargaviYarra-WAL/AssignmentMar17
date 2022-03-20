var express = require("express");
var router = express.Router();
let prods = [
  {
    name: "nike shoe",
    price: "2300",
    description: "branded",
    category: "clothes",
    status: "available",
  },
];
router.get("/", function (req, res) {
  res.json(prods);
});
router.post("/", function (req, res) {
  console.log(req.body);
  let { name, price, description, category, status } = req.body;
  prods.push({ name, price, description, category, status });
  res.json({ status: "adding prod" });
});
router.delete("/:indexToDelete", function (req, res) {
  console.log(req.params.indexToDelete);
  let newProds = prods.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log("come in return false");
      return false;
    } else {
      return true;
    }
  });
  console.log(newProds);
  prods = newProds;
  console.log(prods);
  res.json({ status: "successfully deleted" });
});
router.get("/clearall", function (req, res) {
  prods = [];
  res.json({ status: "all deleted" });
});
module.exports = router;
