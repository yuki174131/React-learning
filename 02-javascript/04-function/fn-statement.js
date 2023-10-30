console.log(fn());

function fn() {
  return 'foo';
}

function fn() {
  return 'bar';
}
// 関数宣言文による定義のほうは var による変数宣言と同じ問題を抱えている
// node 04-function/fn-statement.js 
// bar
// 再宣言ができてしまうことと、宣言の巻き上げが起こる。