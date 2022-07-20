const log = console.log.bind(console);

//
// Uppercase names.
//

const names = [
  "Bruna",
  "Natália",
  "Carol",
];

const upperCasedNames = [];

for (let idx = 0; idx < names.length; ++idx) {
  const currentName = names[idx];

  upperCasedNames.push(currentName.toUpperCase());
}

log(upperCasedNames);
