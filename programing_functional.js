var getshowName = function showName() {
    return 'paul rocker';
}


var setShowName = getshowName;

console.log(setShowName());

// --------------------------------

var calculator = function calculator(operator) {
    return function(a, b) {
        var results;

        switch (operator) {
            case '+':
                results = a + b;
                break;

            case '-':
                results = a - b;
                break;

            case '*':
                results = a * b;
                break;

            case '/':
                results = a / b;
                break;

            case '%':
                results = a % b;
                break;

            default:
                return 'invalid operator';
        }
        return 'results: ' + a + ' ' + operator + ' ' + b + ' = ' + results;
    };
};


var sum = calculator('+');
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var module = calculator('%');

console.log(sum(4,5));
console.log(subtraction(10,5));
console.log(multiplication(5,3));
console.log(division(130,6));
console.log(module(4,2));
