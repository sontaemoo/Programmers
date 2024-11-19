const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const max = Math.max(...inputs);

console.log(max);
console.log(inputs.indexOf(max) + 1)