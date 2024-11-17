const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const x = Number(input[0]);
const y = Number(input[1]);
let result = 4
if(x > 0 && y > 0) {
    result = 1;
}else if(x < 0 && y > 0) {
    result = 2;
}else if(x < 0 && y < 0) {
    result = 3;
}
console.log(result);