const log = console.log.bind(console);

//
// Immutable Data Structures
//

const nums = [1, 2, 3, 4];

const plus10 = nums.map(function add10toN(n) {
  return n + 10;
});

// map(add10(1))
// map(add10(2))
// map(add10(3))
// map(add10(4))

log(plus10);
