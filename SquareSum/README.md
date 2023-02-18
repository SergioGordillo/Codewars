# Square Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for `[1, 2, 2]` it should return `9` because `1^2 + 2^2 + 2^2 = 9`. 

`export function squareSum(numbers) {
    return 0;
}`

Complete the function.

## EXPLANATION ABOUT THE REDUCE JS METHOD

`reduce()` is a higher-order function in JavaScript that allows you to iteratively process each element of an array and accumulate a single value based on the logic you provide. The accumulated value can be of any type, not just a number.

The `reduce()` method takes two arguments:

1. a callback function
2. an optional initial value

The callback function is executed on each element of the array, and it takes four arguments:

1. accumulator: the accumulated value so far
2. currentValue: the current element being processed
3. currentIndex (optional): the index of the current element being processed
4. array (optional): the original array being processed

The optional initial value is the initial value of the accumulator. If it is not provided, then the first element of the array is used as the initial value and the callback function starts with the second element.

Here is the basic syntax of `reduce()`:

`array.reduce(callback[, initialValue]);`

Now, let's see an example to better understand how `reduce()` works:

`const numbers = [1, 2, 3, 4, 5];`

`const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);`

`console.log(sum); // Output: 15`

In this example, we start with an array of numbers `[1, 2, 3, 4, 5]` and we want to calculate the sum of all the elements. We use the `reduce()` method to iteratively add each element to the accumulator and return the accumulated sum as the new accumulator. The initial value of accumulator is 0. The final output is the accumulated sum, which is 15.

Did you like it? You can follow me on my professional Twitter (https://twitter.com/SGordilloDev) and follow our Algoritmo Salvaje project (https://twitter.com/AlgoritmoSalvaj) where we share a lot of information can be useful for your professional career as a software engineer. Hope it helps :wink:
