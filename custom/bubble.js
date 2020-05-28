const arr = [1, 213, 213, 4, 3, 5, 5, 2, 7, 8];
// const arr = [1, 213, 213, 4];

const bubble = arr => {
  const length = arr.length;
  for (let i = length; i > 0; i--) {
    for (let z = 0; z < i-1; z++) {
      // console.log(arr[i], arr[z]);
      if (arr[z] > arr[z+1]) {
        // const tmp = arr[z];
        // arr[z] = arr[z+1];
        // arr[z+1] = tmp;
        [arr[z], arr[z+1]] = [arr[z+1], arr[z]];
      }
    }
  }
  return arr;
}

console.log(bubble(arr));