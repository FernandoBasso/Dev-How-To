const log = console.log.bind(console);

//
// Uppercase names.
//

const names = [
  "Bruna",
  "Natália",
  "Carol",
];

const upperCasedNames = names.map(function toUpper(str) {
  return str.toUpperCase();
});

log(upperCasedNames);
