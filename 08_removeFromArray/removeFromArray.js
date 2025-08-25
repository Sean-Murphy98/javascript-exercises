const removeFromArray = function() {
    arr = arguments[0]
    for (let i=1; i<arguments.length; i++){
        arr = arr.filter((entry) => entry !== arguments[i]);
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
