# Composing Functions

- [example of non-composed functions](#example-of-non-composed-functions)
- [using true composition](#using-true-composition)
- [handling calculations with pipe](#handling calculations with pipe)


Look at this more traditional code style:

## example of non-composed functions

```js
const log = console.log.bind(console);

const COUNTRY = 'JP';

const laraCroft = {
    name: 'Lara Croft',
    birthCountry: 'UK',
    naturalizationDate: '1996-01-01',
    age: 23,
    skill: 'Archaeology',
};

const wasBornInCountry = ({ birthCountry }) => birthCountry === COUNTRY;

const wasNaturalized = ({ naturalizationDate }) => Boolean(naturalizationDate);

const isOver18 = ({ age }) => age >= 18;

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);

const isEligibleToVote = person => isOver18(person) && isCitizen(person);

log(isCitizen(laraCroft));
// → true
log(isEligibleToVote(laraCroft));
// → true
log(isEligibleToVote({ ...laraCroft, naturalizationDate: undefined }));
// → false
log(isEligibleToVote({ ...laraCroft, age: 17 }));
// → false
```

## using true composition

Using some ramda functions, it could be rewriten as this:

```js
const { either, both } = require('ramda');

const log = console.log.bind(console);

const COUNTRY = 'JP';

const laraCroft = {
    name: 'Lara Croft',
    birthCountry: 'UK',
    naturalizationDate: '1996-01-01',
    age: 23,
    skill: 'Archaeology',
};

// These three functions remain the same.
const wasBornInCountry = ({ birthCountry }) => birthCountry === COUNTRY;

const wasNaturalized = ({ naturalizationDate }) => Boolean(naturalizationDate);

const isOver18 = ({ age }) => age >= 18;

// For the next two functions, we use some ramda stuff to help us out wich makes
// for very elegant code. One downside is that it is not clear that `isCitizen`
// and `isEligibleToVote` take a `person` object.
const isCitizen = either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = both(isOver18, isCitizen);

log(isCitizen(laraCroft));
// → true
log(isEligibleToVote(laraCroft));
// → true
log(isEligibleToVote({ ...laraCroft, naturalizationDate: undefined }));
// → false
log(isEligibleToVote({ ...laraCroft, age: 17 }));
// → false
```

## handling calculations with pipe

We want to multiply a number by 2, then add 10, and then increment it. We can do:

```js
const performOps1 = (num, mult) => {
  const product = multiply(num, mult);
  const sum = add(product, 10);
  const incremented = inc(sum);
  return incremented;
};

log(performOps1(5, 3)); // (((5 * 3) + 10) + 1)
// → 26
```

We can do a bit better and use this approach instead.

```js
log(inc(add(multiply(5, 3), 10)));
// → 26
```

And probably the most elegant version is this, which doesn't require a lot of saving results around (like in the first approach) and doesn't require an unwindly amount of nesting (like the second approach).

```js
const { pipe, inc, add, multiply } = require('ramda');
const performOps2 = pipe(multiply, add(10), inc);
log(performOps2(5, 3));
// → 26
```

`add` takes two args. Since most (or all?) ramda functions are automatically curried, we pass `10` to `add`, and the `pipe` composition takes care of passing the other argument, result of `multiply`.

Once more, there is one downside that it is not clear the args `performOps2` requires. For that, one needs to look into the most left function inside the pipe.

Ever wondered why the [docs on ramda pipe](https://ramdajs.com/docs/#pipe) says:

> The leftmost function may have any arity; the remaining functions must be unary.

The leftmost one takes any number of arguments, and produces _a single value_ which is then passed to the next function, which _again produces a single value_. Since functions produce a single value, there is not way to produce multiple values/arguments to the next functions in the chain. That is why only the leftmost function may have any arity, because we pass the initial values _manually_, whereas the rest of the passing arguments is done by feeding return value of one function into another.

