const express = require('express');
const router = express.Router();
const { calculateFibonacci } = require('../controllers/fibonacciController');
const {calculateFactorial} = require('../controllers/factorialController');
const {checkPalindrome} = require('../controllers/checkPalindromeController')
const {generaterandomNumber} = require('../controllers/randomNumberController');
const {generateReverseString} = require('../controllers/reverseStringController');
const {calculateSumOfDigits} = require('../controllers/sumOfDigitsController');


router.get('/fibonnaci',calculateFibonacci);
router.get('/factorial',calculateFactorial);
router.get('/checkPalindrome',checkPalindrome);
router.get('/randomNumber',generaterandomNumber);
router.get('/reverseString',generateReverseString);
router.get('/sumOfDigits',calculateSumOfDigits);



module.exports = router;