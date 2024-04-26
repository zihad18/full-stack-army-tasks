const fibonacci1 = (num) => {
    if (num < 2) {
    return num;
    }
    return fibonacci1(num - 1) + fibonacci1(num - 2);
}

const fibonacci2 = (num, memo) => {
    memo = memo || {};
    if (memo[num]) {
    return memo[num];
    }
    if (num <= 1) {
    return 1;
    }
    return memo[num] = fibonacci2(num - 1, memo) + fibonacci2(num - 2, memo);
}

const fibonacci3 = (num) => {
    let answer = [];
    let x = 0;
    let y = 1;
    let z;
    
    answer.push(x);
    answer.push(y);
    
    for (let i = 2; i < num; i++) {
    z = x + y;
    x = y;
    y = z;
    answer.push(z);
    }
    
    return answer.pop();
}

const fibonacci4 = (num) => {
    const result = [BigInt(0), BigInt(1)];
    for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
    }
    return result[num].toString();
};

const fibonacci5 = (num) => {
    let a = BigInt(0);
    let b = BigInt(1);
    let c = BigInt(0);
    for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
    }
    return c.toString();
};


module.exports = {
    fibonacci1,
    fibonacci2,
    fibonacci3,
    fibonacci4,
    fibonacci5
};
