let numbers = [1,2,3,4,5,6,7,8,9,10];
let strings = new Array('apple', 'orange', 'banana');

//console.log(numbers, strings);
//Methods supported by arrays
//forEach: loops over each element of the array
//numbers.forEach(element => console.log(element));

//filter(): Filters out the elements that don't match the condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);   

