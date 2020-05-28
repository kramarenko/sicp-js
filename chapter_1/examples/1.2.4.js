const exp = (b, n) => {
  console.log('exp', n);
  if (n == 0) {
    return 1;
  }
  return (b * exp(b, n - 1))
}

console.log(exp(2, 4))

const exp2 = (b, n) => {
  const exp_iter = (b, counter, product) => {
    console.log('exp2',counter);
    if (counter == 0) {
      return product;
    }
    return exp_iter(b, counter - 1, b * product)
  }

  return exp_iter(b, n, 1);
}

console.log(exp2(2, 4))


module.exports = exp;