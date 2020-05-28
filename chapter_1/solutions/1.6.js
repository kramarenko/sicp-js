const sqrt_iter = (guess , x) => good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);

const improve = (guess, x) => average(guess, x / guess);

const average = (x, y) => (x + y)/2;

const good_enough = (guess, x) => Math.abs(square(guess) - x) < 0.001;

const square = x => x * x;

const sqrt = x => sqrt_iter(1.0, x);

console.log(sqrt(9));