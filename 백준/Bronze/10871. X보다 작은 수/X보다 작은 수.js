const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const x = Number(input[0].split(' ')[1]);
const inputs = input[1].split(' ').map(Number);

console.log(inputs.filter(n => n < x).join(' '));