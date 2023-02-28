/*
8 ways to get undefined

1.variable that is not initialized will give undefined
ex: let first;
    console.log(first);

2.function with no return will give undefined
ex: function first(a, b) {
    const total = a + b;
    }
    const first1 = first(10, 20);
    console.log(first1);

3.parameter that is not passed with give undefined
ex: function first(a, b) {
    const total = a + b;
    console.log(a, b);
    }
    first(10);

4.if return has no value to return then it will give undefined
ex: function nonNegative(a, b) {
        if (a < 0 || b < 0) {
        return;
        }
        return a + b;
    }
    const result = nonNegative(10, -20);
    console.log(result);

5.property that doesn't exist in an object will give undefined
ex: const fifth = { id: 5, job: "developer", age: 22 };
    console.log(fifth.job, fifth.name);

6.accessing array element outside of index range will give undefine 
ex: const sixth = [10, 25, 45, 47, 14];
    console.log(sixth[0], sixth[5], sixth[10]);

7.deleting an element inside an array
8.set a value directly to undefined
ex: const value = undefined;
 console.log(value);
*/
const value = null;
console.log(value, typeof null);
