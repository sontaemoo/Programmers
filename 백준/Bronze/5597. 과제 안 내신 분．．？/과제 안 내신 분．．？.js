const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let resultStr = new Array(30).fill(0).map((n,idx) => idx + 1).join(' ') + ' ';

for(let i = 0; i <= inputs.length; i++) {
    resultStr = resultStr.replace(inputs[i] + ' ', '');
}
console.log(resultStr.trim().split(' ').join('\n'));