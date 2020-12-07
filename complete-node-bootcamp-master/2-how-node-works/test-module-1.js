// First approach
/*class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    muliply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

module.exports = Calculator; */


// Second approach
module.exports = class  {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    muliply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}