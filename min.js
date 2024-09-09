let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];
numbers.sort((a,b) => a - b)

console.log("sort",numbers);


let squraes = numbers.map(num => num *num)
console.log("squraes",squraes)


let bigthan = squraes.find(num => num > 25);
console.log("big thn  25:", bigthan);


let number5= numbers.every(num => num > 5);
console.log("big than 5",number5)


let number3= numbers.includes(3);
console.log("includes",number3)


let even=numbers.filter( num=> num %2===0)
console.log(even);


let deletnum = numbers.pop();
console.log("delet:", numbers);


numbers.push(100);
console.log("add 100:", numbers);




const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const namesa = names.filter(name => name.toLowerCase().includes('a'));

console.log("Names  'a':", namesa);


let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];

let hasB = fruits.some(fruit => fruit.startsWith('b'));

console.log("name  with 'b'?", hasB);
