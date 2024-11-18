const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const totalCnt = Number(input[0]);
const resultArr = new Array(totalCnt);
for(let i = 1; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    resultArr[i-1] = 'Case #' + i + ': ' + A + ' + ' + B + ' = '+ (A + B);
}
console.log(resultArr.join('\n'));