const starSize = Number(require('fs').readFileSync('dev/stdin').toString().trim());
const resultArr = new Array(starSize).fill('');
for(let i = 0; i < starSize; i++) {
    for(let j = i+1; j < starSize; j++) {
        resultArr[i] = resultArr[i] + ' ';
    }
    if(i === 0) {
        resultArr[i] = resultArr[i] + '*';
    } else {
        resultArr[i] = resultArr[i-1].substring(1) + '*'; 
    }
}
console.log(resultArr.join('\n'));