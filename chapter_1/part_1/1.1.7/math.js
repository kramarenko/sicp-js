const abs = x => (x < 0) ? -x : x;

const square = (x) => x * x;

const average = (x,y) => (x + y) / 2;

const improve = (guess,x) => average(guess, (x / guess));

const sqrt = x => sqrt_iter(1.0, x);

const good_enough = (guess, x) => (abs(square(guess) - x) < 0.000001)

const better_good_enough = (guess, prev_guess) => {
  return (abs((guess - prev_guess) / prev_guess) < 0.001)
}

const sqrt_iter = (guess,x) => {
  if (good_enough(guess, x)) {
    return guess;
  }

  return sqrt_iter(improve(guess, x), x)
}

// (define (better-good-enough? guess prev-guess) 
//   (< (abs (/ (- guess prev-guess) prev-guess)) 0.001))


console.log(sqrt(0.1));
module.exports = { square, sqrt, abs }