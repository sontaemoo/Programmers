const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const topNumbers = Number(input[0]);
const bottomNumbers = input[1];


console.log(topNumbers * bottomNumbers[2]);
console.log(topNumbers * bottomNumbers[1]);
console.log(topNumbers * bottomNumbers[0]);
console.log(topNumbers * bottomNumbers);