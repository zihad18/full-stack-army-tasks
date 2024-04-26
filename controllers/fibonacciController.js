const { fibonacci1,fibonacci2,fibonacci3,fibonacci4,fibonacci5 } = require('../services/fibonacciService');

const calculateFibonacci = (req, res) => {
    try {
        const value = parseInt(req.query.value);
        res.json({ originalValue: value, result: fibonacci3(value) });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    calculateFibonacci,
};
