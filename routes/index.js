const express = require('express');
const router = express.Router();
const { calculateFibonacci } = require('../controllers/fibonacciController');

router.get('/fibonnaci',calculateFibonacci)


module.exports = router;