const arr = [1, 213, 213, 4, 3, 5, 5, 2, 7, 8];

const qsort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  const pivotPosition = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotPosition];
  const less = arr.filter(value => value < pivot);
  const greater = arr.filter(value => value > pivot);
  return [...qsort(less), pivot, ...qsort(greater)];
}

console.log(qsort(arr));