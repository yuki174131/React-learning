// function キーワードによる関数式
const plusOne = function (n) {
  return n + 1;
}

// アロー関数式
const addOne = (n) => {
  return n + 1;
};

// アロー関数式、さらに省略記法
// アロー関数式では引数がひとつだけの場合はかっこが省略で きるのと、本文が return 文だけのときは、return 文をブロックごと省略できる
const increment = n => n + 1;

console.log(plusOne(4));
console.log(addOne(4));
console.log(increment(4));
