const reverseString = function(s) {
    let l = s.length
    let a = ""
    for (l; l>0; l--){
        a += s[l-1]
    }
    return a
};

// Do not edit below this line
module.exports = reverseString;
