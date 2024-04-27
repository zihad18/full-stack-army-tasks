const {factorial} = require('../services/factorialService');

const calculateFactorial = (req, res) => {
    try {
        const value = parseInt(req.query.value);
        res.json({ originalValue: value, result: factorial(value) });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    calculateFactorial,
};