// 右辺と同型の配列やオブジェクトを用意することで、左辺側でそれに対応する値を変数に 代入できる
// JavaScript では分割代入はよく使われる

const [a, b] = ['foo', 'bar'];
console.log(a, b); // foo bar

const [, n] = [1, 4]; 
console.log(n); // 4

const [, , i, , j, , , k] = [1, 2, 3, 4, 5, 6, 7];
console.log(i, j, k); // 3 5 undefined

const profile = { name: 'Kanae', age: 24, gender: 'f' };
const { name, age } = profile;
console.log(name, age); // Kanae 24
