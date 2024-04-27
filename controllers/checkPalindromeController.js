const {isPalindrome} = require('../services/checkPalindromeService');

const checkPalindrome = (req, res) => {
    try {
        const str = req.query.string;
        res.json({ string: str, isPalindrome: isPalindrome(str) });
    } catch {
        res.status(422).json({ message: 'Invalid Query Params', value });
    }
};

module.exports = {
    checkPalindrome,
};