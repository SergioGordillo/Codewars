//WAY 1

function squareSumVerboseWay(numbers) {
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

console.log(squareSumVerboseWay([1, 2, 2])); //Expected result: 9
console.log(squareSumVerboseWay([2, 2, 2])); //Expected result: 12
console.log(squareSumVerboseWay([3, 1, 2, 3])); //Expected result: 23

//WAY 2

function squareSumElegantWay(numbers) {
  return numbers.reduce((acc, num) => acc + num*num, 0);
}

console.log(squareSumElegantWay([1, 2, 2])); //Expected result: 9
console.log(squareSumElegantWay([2, 2, 2])); //Expected result: 12
console.log(squareSumElegantWay([3, 1, 2, 3])); //Expected result: 23