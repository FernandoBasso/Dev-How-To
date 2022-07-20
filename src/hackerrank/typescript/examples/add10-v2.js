const log = console.log.bind(console);

//
// Immutable Data Structures
//

function add10(n) {
  return n + 10;
}

const nums = [1, 2, 3, 4];

const plus10 = nums.map(add10);
// map(add10(1))
// map(add10(2))
// map(add10(3))
// map(add10(4))

log(plus10);
