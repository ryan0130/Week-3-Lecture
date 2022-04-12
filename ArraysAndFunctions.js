let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);
/*
Array(5)
0: 3
1: 3
2: 4
3: 5
4: 8
length: 5
[[Prototype]]: Array(0)
*/

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);
console.log(sum);
//33

names.forEach(function(element) {
    console.log(element);
});
/*
Sam
Tom
Eric
Sally
Nicholas
*/

let evens = names.filter(function(element) {
    return element.length % 2 === 0;
});
console.log(evens);
/*
Array(2)
0: "Eric"
1: "Nicholas"
length: 2
[[Prototype]]: Array(0)
*/

let removedElement = names.splice(1, 1);
console.log(removedElement);
/*
Array(1)
0: "Tom"
length: 1
[[Prototype]]: Array(0)
*/
