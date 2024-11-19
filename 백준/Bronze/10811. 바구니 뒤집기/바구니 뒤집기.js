const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [size, lineSize] = input[0].split(' ').map(Number);
let basketArr = new Array(size).fill(0).map((n,idx) => idx + 1);

for(let i = 1; i <= lineSize; i++) {
    const [first, last] = input[i].split(' ').map(Number);
    const sliceArr = basketArr.slice(first -1, last).reverse();

    basketArr = [
        ...basketArr.slice(0, first - 1),
        ...sliceArr,
        ...basketArr.slice(last)
    ]
}

console.log(basketArr.join(' '));