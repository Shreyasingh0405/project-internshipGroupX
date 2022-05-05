const express = require('express');

const router = express.Router();
const collegeController = require("../controller/collegeController")
const internController = require("../controller/internController")


// first api for college creation.

router.post('/functionup/colleges', collegeController.collegeCreate);

// second api for intern creation.

router.post('/functionup/interns', internController.internCreate);

// third api for gt all interns data for each college.

router.get('/functionup/collegeDetails', collegeController.getAllIntern);


module.exports = router;

