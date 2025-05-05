function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.1;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.2;
        case (salary > 1500000):
            return salary * 0.3;
        default:
            return 'enter the valid salary';
    }
}

console.log(findTax(500000)); 
console.log(findTax(1000000));
console.log(findTax(1500000));
console.log(findTax(2000000));
console.log(findTax(-500000));