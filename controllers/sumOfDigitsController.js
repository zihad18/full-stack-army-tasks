const {sumOfDigits} = require('../services/sumOfDigitsService');

const calculateSumOfDigits = (req,res) => {
    try {
        const num = parseInt(req.query.number);
        res.json({ originalNumber: num, sumOfDigits: sumOfDigits(num) });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    calculateSumOfDigits,
};