function solution(n, arr1, arr2) {
    const maxNum = Math.pow(2, n);
    const resultArr = new Array(n);
    for(let i = 0; i < n; i++) {
        const sumNum = arr1[i] | arr2[i] | maxNum;
        resultArr[i] = sumNum.toString(2).slice(1).replaceAll("0", " ").replaceAll("1", "#");
    }
    return resultArr;
}