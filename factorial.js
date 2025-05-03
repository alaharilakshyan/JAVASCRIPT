var prompt = require('prompt-sync')();
var num = parseInt(prompt('Enter a number: '));
var sum = sumDigits(num);   
console.log('The sum of the digits is ' + sum);

function sumDigits(n) {
    let total = 0;
    while (n) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}
