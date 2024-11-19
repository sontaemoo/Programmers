const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const size = Number(input[0]);
const pointArr = input[1].split(' ').map(Number);
const maxPoint = Math.max(...pointArr);

const avgPoint = Math.round(pointArr.map(p => Math.round(p / maxPoint * 100000) / 1000).reduce((a, b) => a + b) / size * 1000) / 1000 ;

console.log(parseFloat(avgPoint));