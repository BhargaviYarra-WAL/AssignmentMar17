var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("welcome to home page");
});
router.get("/students", (req, res) => {
  let students = ["karuna", "bindu", "mounisha"];
  res.json(students);
});
router.get("/student", (req, res) => {
  let studentObj = { name: "bindu", city: "hyderabad" };
  res.json(studentObj);
});

router.get("/fibonacci", (req, res) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  res.json(arr);
});
/*router.get("/fibonacci/:min/:max", (req, res) => {
  console.log(req.params);
  const minval = req.params.min;
  const maxval = req.params.max;
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");
  let arr = [];
  for (let i = minval; i <= maxval; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  res.json(arr);
});*/

router.get("/fibonacci/:min/:max", function (req, res, next) {
  let min = parseInt(req.params.min);
  let max = parseInt(req.params.max);
  let fibarr = [min, max];
  if (min == 0 && max == 1) {
    res.send(fibarr);
  } else {
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;
    let fibArr = [];
    if (min == 0) {
      fibArr.push(0);
    }
    while (nextTerm <= max) {
      nextTerm = n1 + n2;
      if (nextTerm >= min && nextTerm <= max) {
        fibArr.push(nextTerm);
      }
      n1 = n2;
      n2 = nextTerm;
    }
    res.json(fibArr);
  }
});

module.exports = router;
