const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const inputs = input[1].split(' ').map(Number);
const findNumber = Number(input[2]);

console.log(inputs.filter(n => n === findNumber).length);