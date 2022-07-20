const log = console.log.bind(console);

//
// Uppercase names.
//

const names = [
  "Bruna",
  "Natália",
  "Carol",
];

function toUpper(str) {
  return str.toUpperCase();
}

const upperCasedNames = names.map(toUpper);

log(upperCasedNames);
