


//Create a function that takes an array of numbers and a k:integer as arguments. Must to return the maximum sum of k elements in the array.



//DEvuelve la maxima suma de un subconjunto de k elementos del Array

const maxSum = (arr, k) => {
  const ArrOrdenado = arr.sort((a, b) => a - b);
  return ArrOrdenado.reverse()
    .slice(0, k)
    .reduce((a, b) => a + b, 0);
};

module.exports = maxSum;

console.log(maxSum([8, 2, 3, 6, 1], 3));
