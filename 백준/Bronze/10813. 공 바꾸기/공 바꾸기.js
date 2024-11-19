const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [size, lineSize] = input[0].split(' ').map(Number);
const basketArr = new Array(size).fill(0).map((n,idx) => idx + 1);

for(let i = 1; i <= lineSize; i++) {
    const [first, last] = input[i].split(' ').map(Number);
    [basketArr[first - 1], basketArr[last - 1]] = [basketArr[last - 1], basketArr[first - 1]];
}
console.log(basketArr.join(' '));