const {reverseString} = require('../services/reverseStringService');

const generateReverseString = (req,res) => {
    try {
        const str = req.query.string;
        res.json({ originalString: str, reversedString: reverseString(str) });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    generateReverseString,
};