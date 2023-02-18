function squareSum(numbers) {
    if(Array.isArray(numbers)){
    let i = 0;
    let result = 0;
        while (i < numbers.length) {
        result += Math.pow(numbers[i], 2);
        i++;
        }
    return result;
    } else {
        console.log("You need to introduce an array");
        return ;
    }
}

console.log(squareSum([1, 2, 2])); //Expected result: 9
console.log(squareSum([2, 2, 2])); //Expected result: 12
console.log(squareSum([3, 1, 2, 3])); //Expected result: 23