function calculate(num1, num2, op) {
    switch (op) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'num 2 cannot be 0';
        default:
            return 'enter valid oerator';
    }
}

console.log(calculate(10, 5, 'add'));
console.log(calculate(10, 5, 'subtract'));
console.log(calculate(10, 5, 'multiply'));
console.log(calculate(10, 5, 'divide'));
console.log(calculate(10, 0, 'divide'));