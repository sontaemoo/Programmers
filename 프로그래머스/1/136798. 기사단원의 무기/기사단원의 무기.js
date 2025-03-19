function solution(number, limit, power) {
    let result = 0;
    for(let i = 1; i <= number; i++) {
        result = result + getCnt(i, limit, power);
    }
    return result;
}

function getCnt(number, limit, power) {
    let resultSet = new Set();
    const num = Math.sqrt(number);    
    for(let i = 1; i <= num; i++) {
        if(number % i === 0) {
            resultSet.add(i);
            resultSet.add(number / i)
        }
    }
    return resultSet.size > limit ? power : resultSet.size;
}