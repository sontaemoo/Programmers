const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
console.log(Number(input[0]) + Number(input[1]));
console.log(Number(input[0]) - Number(input[1]));
console.log(Number(input[0]) * Number(input[1]));
console.log(Number.parseInt(Number(input[0]) / Number(input[1])));
console.log(Number(input[0]) % Number(input[1]));