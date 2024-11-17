const years = Number(require('fs').readFileSync('dev/stdin').toString().trim());
let result = 0;
if((years % 4 === 0 && years % 400 === 0) || (years % 4 === 0 && years % 100 !== 0)) {
    result = 1;
}
console.log(result);