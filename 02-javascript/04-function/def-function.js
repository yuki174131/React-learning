// 関数宣言文による定義
function double(n) {
  return n * 2;
}

// 関数式による定義
const dbl = function (n) {
  return n * 2;
};

console.log(double(10));
console.log(dbl(10));

// JavaScript では基本的に文の末尾にはセミコロンが必要だが、{...} のブロックで終わる場合 にはつけないという例外規則がある。
// 逆に関数式のほうは最終的に変数への代入文になってるから、末 尾にセミコロンを付ける必要がある。
