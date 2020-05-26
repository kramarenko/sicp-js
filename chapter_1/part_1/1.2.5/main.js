// Нахождение наибольшего общего делителя
// Метод Евклида
const gcd = (a, b) => {
  // console.log(a, b);
  return b === 0 ? Math.abs(a) : gcd(b, a % b)
}

function plus(a, b) { 
  return a + b; 
}

function minus(a, b) { 
  return a - b; 
}


const ost = (a, b) => {
  const iter = (num, sum) => {
    if (abs(num) < b) {
      return [sum, num]
    }
    return iter((num < 0 ? plus : minus)(num, b), ++sum)
  }
  return iter(a, 0)
}

const pow = (num, step) => {

  const iter = (n, sum, result) => {
    if (sum === step) {
      return n;
    }
    return iter(num * n, ++sum)
  }

  return iter(num, 1)
}

const abs = (x) => x >= 0 ? x : -x
console.log(gcd(16, 24));
// console.log(ost(-44, 5));
// console.log(pow(3, 3));