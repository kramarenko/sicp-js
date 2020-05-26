const hasDuplicates = function (num) {
  let count = 0;
    //loop the list, our O(n) op
    for (let i = 0; i < nums.length; i++) {
      // console.log('i',++count);
        const thisNum = nums[i];
        //loop the list again, the O(n^2) op
        for (let j = 0; j < nums.length; j++) {
          console.log('j',++count);
            //make sure we're not checking same number
            if (j !== i) {
                const otherNum = nums[j];
                //if there's an equal value, return
                if (otherNum === thisNum) return true;
            }
        }
    }
    //if we're here, no dups
    return false;
}
const nums = [1, 2, 3, 4];
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function searchFor(value, list) {
  let first = 0;    //left endpoint
  let last = list.length - 1;   //right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (list[middle] == value) {
          found = true;
          position = middle;
      } else if (list[middle] > value) {  //if in lower half
          last = middle - 1;
      } else {  //in in upper half
          first = middle + 1;
      }
  }
  return position;
}


const hasDuplicates2 = function (nums) {
  for (let num of nums) {
      //let's go through the list again and have a look
      //at all the other numbers so we can compare
      if (searchFor(nums, num)) {
          return true;
      }
  }
  //only arrive here if there are no dups
  return false;
}

// hasDuplicates(nums);//true
console.log(hasDuplicates(nums));//true
console.log(hasDuplicates2(nums));//true