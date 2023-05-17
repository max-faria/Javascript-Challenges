// USING THE forEach Method
function average(numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  const avg = sum / numbers.length;

  return `The average value of ${numbers} is: ${avg}`;
}

numbersList = [20, 30, 40, 50, 100];
console.log(average(numbersList));

// USING THE .reduce() method
//array1.reduce(callback function(accumulator, currentValue) => accumulator + currentValue, initialValue)

function averageWithReduce(numbers) {
  const sum = numbers.reduce((accm, curr) => accm + curr, 0);
  const avg = sum / numbers.length;
  return `The average of ${numbers} with the .reduce() method is: ${avg}`;
}
console.log(averageWithReduce(numbersList));

// Removing some variables declarations
function averageWithReduceSimplified(numbers) {
  return numbers.reduce((accm, curr) => accm + curr, 0) / numbers.length;
}

console.log(
  `The average value with .reduce() simplified of ${numbersList} is: ${averageWithReduceSimplified(
    numbersList
  )}`
);
