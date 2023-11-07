/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddOrEvenArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = "even";
    } else {
      numbers[i] = "odd";
    }

    oddOrEvenArr.push(numbers[i]);
  }

  return oddOrEvenArr;
}
