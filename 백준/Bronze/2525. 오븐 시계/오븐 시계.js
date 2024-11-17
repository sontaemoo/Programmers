const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [hours, minutes] = input[0].split(' ').map(Number);
const cookingTime = Number(input[1]);
const cookingHours = parseInt(cookingTime / 60);
const cookingMinutes = cookingTime % 60;

let resultHours = (hours + cookingHours) % 24;
let resultMinutes = minutes + cookingMinutes;
if(resultMinutes >= 60) {
    resultMinutes = resultMinutes % 60;
    resultHours = resultHours === 23 ? 0 : ++resultHours;
}

console.log(`${resultHours} ${resultMinutes}`);