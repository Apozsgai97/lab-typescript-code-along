const foods = ['hamburger', 'pizza', 'pasta'];

const filledArray = new Array<null>(100).fill(null).map((_,i) => {
 return i;
});

const data = [1,2,3];

const lastElement = data[data.length-1];

const indexOfValue2 = data.indexOf(2);

[{name: "Adrienn"}].map((person) => {
 return {...person, name: person.name.toUpperCase()};
}).forEach((person) => {
 console.log({person});
});


//map array converted it to number array - check it out the parameters
//for loops are powerful, but array methods are more expressive (reduce are more messy but map is good)
//change multiple var names
//spread operator ...
// map and for each together 
//.includes, .sort, .push, .pop, .shift, .unshift, .splice (it mutate), .slice, .join
// mutable, immutable methods 
//Object.keys, Object.values - more useable than for of or for in 
//.filter, .find, .every(predicate - google the word), .some, .reduce
//.map should take a poor function not take side-effects