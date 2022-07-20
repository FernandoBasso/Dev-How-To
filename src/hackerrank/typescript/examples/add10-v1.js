const log = console.log.bind(console);

//
// Immutable Data Structures
//

const nums = [1, 2, 3, 4];
//

const plus10 = [];

//
// Add 10 to each element in `nums`.
//
for (let i = 0; i < nums.length; i++) {
  const currentNumber = nums[i];
  plus10.push(currentNumber + 10);
}

log(plus10);
