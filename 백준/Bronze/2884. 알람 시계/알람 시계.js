const [hours, minutes] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let resultHours = hours
let resultMinutes = minutes - 45;
if(minutes < 45) {
    resultHours = resultHours === 0 ? 23 : resultHours - 1;
    resultMinutes = minutes + 15;
}

console.log(`${resultHours} ${resultMinutes}`);