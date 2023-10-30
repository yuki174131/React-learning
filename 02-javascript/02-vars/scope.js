var n = 0;

if (true) {
  var n = 50;
  var m = 100;
  console.log(n); // 50
}

console.log(n); // 50
console.log(m); // 100

// var で定義された変数のスコープは関数単位なんだよ。if のような制御構文のブロックをすり抜けてしまう。
// s.jsではconstで定義されており、エラーとなる。

