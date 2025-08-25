const repeatString = function(stri, num) {
    if (num < 0){
        return "ERROR"
    }
    let a = ""
    for (let i = 0; i<num; i++){
        a += stri
    }
    return a
};

// Do not edit below this line
module.exports = repeatString;
