const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const inputs = input[1].split(' ').map(Number);

console.log(Math.min(...inputs) + ' ' + Math.max(...inputs));