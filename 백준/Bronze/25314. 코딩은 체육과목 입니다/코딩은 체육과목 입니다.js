const byteSize = Number(require('fs').readFileSync('dev/stdin').toString().trim());

const longCnt = Math.ceil(byteSize / 4);
let resultMsg = new Array(longCnt).fill('long').join(' ') + ' int';
console.log(resultMsg);