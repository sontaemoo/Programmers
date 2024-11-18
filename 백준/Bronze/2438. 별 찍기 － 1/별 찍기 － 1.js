const starSize = Number(require('fs').readFileSync('dev/stdin').toString().trim());
const resultArr = new Array(starSize);
for(let i = 0; i < starSize; i++) {
    if(i === 0) {
        resultArr[i] = '*';
    } else {
        resultArr[i] = resultArr[i-1] + '*'; 
    }
}
console.log(resultArr.join('\n'));