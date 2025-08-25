const sumAll = function(num1, num2) {
    sum = 0;
    if (num1 < 0 || !Number.isInteger(num1)|| num2 < 0 || !Number.isInteger(num2)){
        return "ERROR"
    }
    let a = Math.min(...arguments)
    let b = Math.max(...arguments)
    for (let i=a; i<=b; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
