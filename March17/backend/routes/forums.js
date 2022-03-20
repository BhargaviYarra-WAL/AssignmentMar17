const express = require("express");
const router = express.Router();
let forums = [
  {
    title: "Fountain Head",
    date: "2022-03-12",
    body: "Individulism vs Collectivism",
    author: "Ayn Rand",
  },
];
router.get("/", function (req, res) {
  res.json(forums);
});
router.post("/", function (req, res) {
  forums.push(req.body);
  res.send({ status: "Forum added Successfully" });
});
router.delete("/:i", function (req, res) {
  let newforums = forums.filter((val, index) => {
    if (index === Number(req.params.i)) {
      return false;
    } else {
      return true;
    }
  });
  forums = newforums;
  res.send({ status: "deleted forum successfully" });
});
router.put("/clearAll", function (req, res) {
  forums = [];
  res.send({ status: " all forums deleted" });
});
module.exports = router;
