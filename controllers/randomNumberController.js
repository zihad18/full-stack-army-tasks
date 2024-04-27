const {randomNumber} = require('../services/randomNumberService');

const generaterandomNumber = (req,res) => {
    try {
        const min = parseInt(req.query.min);
        const max = parseInt(req.query.max);
        
        const Number = randomNumber(max,min);
        res.json({ min, max, Number });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    generaterandomNumber,
};