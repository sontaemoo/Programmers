const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n) % 42);

const resultSet = new Set(inputs);

console.log(resultSet.size);