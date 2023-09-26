function primeFactors(number) {
  let listOfNumbers = [];

  let divisor = 2;

  while (number > 1) {
    if (number % divisor === 0) {
      number /= divisor;
      listOfNumbers.push(divisor);
    } else {
      divisor++;
    }
  }

  console.log(listOfNumbers);
}

primeFactors(20); // [2, 2 ,5] es decir, 2*2*5 = 20
primeFactors(330); // [2, 3, 5, 11] es decir, 2*3*5*11 = 330
