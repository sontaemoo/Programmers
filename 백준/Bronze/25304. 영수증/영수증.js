const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const totalAmt = Number(input[0]);
const count = Number(input[1]);
let sumAmt = 0;

for(let i = 2; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    sumAmt = sumAmt + (A * B);
}

let resultMsg = 'No';
if(sumAmt === totalAmt) {
    resultMsg = 'Yes';
}
console.log(resultMsg);