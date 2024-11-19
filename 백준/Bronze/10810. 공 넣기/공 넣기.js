const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [size, lineSize] = input[0].split(' ').map(Number);
const basketArr = new Array(size).fill(0);

for(let i = 1; i <= lineSize; i++) {
    const [first, last, ballNum] = input[i].split(' ').map(Number);
    for(let j = first; j <= last; j++) {
        basketArr[j-1] = ballNum;
    }
}
console.log(basketArr.join(' '));