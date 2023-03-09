const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    if (num === 0) return 0
    let previousFibValue = 0
    let currentFibValue = 1
    let i = 1
    while (i < num) {
        const temp = currentFibValue
        currentFibValue = previousFibValue + currentFibValue
        previousFibValue = temp
        i++
    }
    return currentFibValue
};
// fibonacci(1) == 1
// fibonacci(2) == 1
// fibonacci(3) == 2
// fibonacci(4) == 3
// fibonacci(5) == 5
// fibonacci(6) == 8
// Do not edit below this line
module.exports = fibonacci;
