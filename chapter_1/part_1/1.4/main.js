function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
  return (b > 0 ? plus : minus)(a, b);
}

// console.log(a_plus_abs_b(1,2));
// console.log(a_plus_abs_b(-2, 1));
// console.log(a_plus_abs_b(5, 0));
module.exports = a_plus_abs_b;
