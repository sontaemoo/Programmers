const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length -1; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    console.log(A + B);
}