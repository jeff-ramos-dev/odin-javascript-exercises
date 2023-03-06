const removeFromArray = function(inputArray, target) {
    let outputArray = inputArray
    for (let i = 1; i < arguments.length; i++) {
        if (outputArray.includes(arguments[i])) {
            outputArray.splice(outputArray.indexOf(arguments[i]), 1)
        }
    }
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
