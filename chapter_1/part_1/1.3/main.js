function abs(x) {
  return x >= 0 ? x : -x;
}

function square(num) {
  return num * num;
}

function sumOfSquares(a, b) {
  return square(a) + square(b);
}

function sumOfBiggestSquares(a, b, c) {
  if ((a >= c) && (b >= c)) {
    return sumOfSquares(a, b);
  } else if ((a >= b) && (c >= b)) {
    return sumOfSquares(a, c);
  } else {
    return sumOfSquares(b, c);
  }
}

function sumOfBiggestSquares2(x, y, z) {
  return square(x) + square(y) + square(z) - square(x > y ? (y > z ? z: y) : (x > z ? z : x))
}

// console.log(sumOfBiggestSquares(1,2,3))
// console.log(sumOfBiggestSquares(2,1,3))
// console.log(sumOfBiggestSquares(3,2,1))


module.exports = {
  sumOfBiggestSquares,
  sumOfBiggestSquares2
};