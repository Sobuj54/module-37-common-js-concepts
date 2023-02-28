/*
Truthy:
1.truth
2.any real number with the exception of zero is truthy
3.any string other than empty string is truthy
4.array also empty array [] is a truthy
5.object even empty object {} is a truthy

Falsy:
1.false
2. 0 is falsy
3.''(empty string) is falsy
4.undefined
5.null
*/

const x = {};
if (x) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

// optional
// check falsy
const y = "";
if (!y) {
  console.log("value is falsy");
}

// check truthy
const z = { class: 12 };
if (!!z) {
  console.log("value is truthy");
}
