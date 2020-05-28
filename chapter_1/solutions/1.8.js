const qbrt = x => (
  qbrt_iter(1.0, x)
);

const qbrt_iter = (guess, x) => {
  if (good_enough(guess, x)) {
    return guess;
  }
  return qbrt_iter(improve(guess, x), x);
}

const good_enough = (guess, x) => (abs(qube(guess) - x) < 0.001);

const qube = x => x * x * x;

const improve = (guess, x) => (
  (x / square(guess) + 2 * guess ) / 3
);

const square = x => x * x;

const abs = x => x > 0 ? x : -x;


module.exports = { qbrt, qube };