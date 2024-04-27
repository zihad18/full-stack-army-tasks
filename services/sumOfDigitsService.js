const sumOfDigits = (num) => {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

module.exports = {
    sumOfDigits,
};