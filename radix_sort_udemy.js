/*
JavaScript Algorithms and Data Structures Masterclass
radixSort

digitCount(num) returns the number of digits in num.

maxDigitCount(nums) given an array of numbers returns the number of digits in the largest number

radixSort(nums) 
takes an array of numbers
figure out how many digits the largest number has
loop from k = 0 up to the largest number of digits

*/

const digitCount = (num) => {
  return num.toString().length;
}

const maxDigitCount = (nums) => {
  let max = 0;
  for(let i = 0; i < nums.length; i++) {
    if(digitCount(nums[i]) > max) {
      max = digitCount(nums[i]);
    }
  }

  return max;
}

const radixSort = (nums) => {
  
}
