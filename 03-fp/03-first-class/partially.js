const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5));  // 15

// カリー化の部分適用
const triple = withMultiple(3);
console.log(triple(5));  // 15
// withMultiple のひとつめの引数に 3 を渡してできた関数に triple という名前をつける
// triple は元の関数に還元すれば multiply(3, m) になる
// どんな数を渡しても、常に 3 倍される関数が作れる