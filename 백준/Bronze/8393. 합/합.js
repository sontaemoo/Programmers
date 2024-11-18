const maxNumber = Number(require('fs').readFileSync('dev/stdin').toString().trim());

let result = 0;

for(let i = 1; i <= maxNumber; i++) {
    result = result + i;
}
console.log(result);