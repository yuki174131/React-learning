// 配列やオブジェクトの名前の前に ... をつけることでその中身が展開される
const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1, 'd', 'e'];
const arr3 = ['Y', 'Z', ...arr2];
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr3); // [ 'Y', 'Z', 'a', 'b', 'c', 'd', 'e' ]

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { ...obj1, d: 99, e: 5 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 99, e: 5 }
