const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

module.exports = {
    isPalindrome,
}