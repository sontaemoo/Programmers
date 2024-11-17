const [diceOne, diceTwo, diceThree] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
if(diceOne === diceTwo && diceTwo === diceThree) {
    result = 10000 + diceOne * 1000;
} else if((diceOne === diceTwo && diceTwo !== diceThree) 
    || (diceOne !== diceTwo && diceTwo === diceThree)
    || (diceOne === diceThree && diceOne !== diceTwo)) {
    if(diceOne === diceTwo || diceOne === diceThree) {
        result = 1000 + diceOne * 100;
    } else {
        result = 1000 + diceTwo * 100;
    }
} else {
    const maxDice = Math.max(diceOne, diceTwo, diceThree);
    result = maxDice * 100;
}

console.log(result);