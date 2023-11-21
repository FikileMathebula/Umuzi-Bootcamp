function multiples(x) {
  let totalSum = 0;
  for (let i = 0; i < x; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      totalSum += i;
    }
  }
  console.log(totalSum);
}

multiples(10);
multiples(11);

module.exports = { multiples };
