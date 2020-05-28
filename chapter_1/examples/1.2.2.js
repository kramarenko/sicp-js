const fib0 = n => {
  let prev = 0, next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}

const fib1 = n => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

const oldFib = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return (fib(n - 1) + fib(n - 2))
  }
}

// мемоизация
const memorize = f => {
  const cache = {};
  return arg => cache[arg] || (cache[arg] = f(arg));
}

const fib = memorize(oldFib);


const fib2 = (n) => {
  return fib_iter(1, 0, n);
}

const fib_iter = (a, b, count) => {
  // console.log(a, b, count);
  return count === 0
  ? b
  : fib_iter(a + b, a, count - 1);
}

// формула Бине
const fib3 = n => {
  const a = (1 + 5 ** 0.5) / 2; 
  const b = (1 - 5 ** 0.5) / 2;
  return (a ** n - b ** n) / 5 ** 0.5 
}

const fib4 = n => {
  const fib_iter = (a, b, count) => {
    if (count == 0) {
      return a;
    }
    return fib_iter(a + b, a, count - 1)
  }

  return fib_iter(0, 1, n);
}

console.log('fib0', fib0(5));
console.log('fib1', fib1(5));
console.log('fib', fib(5));
console.log('fib2', fib2(5));
console.log('fib3', fib3(5));
console.log('fib4', fib4(5));
// console.log('fib2', fib2(10));
// console.log('fib2', fib2(20));
// console.log('fib2', fib2(90));

module.exports = fib;