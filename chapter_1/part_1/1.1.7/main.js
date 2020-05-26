function sqrt_iter(guess, x) {
  if (good_enough(guess, x)) {
    return guess
  } else {
    return sqrt_iter(improve(guess, x), x)
  }
}

function improve(guess, x) {
  return average(guess, (x / guess));
}

function average(x, y) {
  return (x + y) / 2;
}

function good_enough(guess, x) {
return (abs(x - square(guess))) < 0.001;
}

function sqrt(x) {
  return sqrt_iter(1.0, x)
}

function abs(x) {
  return (x > 0) ? x : -x;
}

function square(x) {
  return x * x;
}

// console.log(good_enough());
console.log(square(25));
console.log(sqrt(25));
console.log(sqrt(16));