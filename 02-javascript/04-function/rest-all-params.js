// 第 1 引数としてレストパラメータを設定すれば、引数の中身を全部持ってこれる
const showAllArgs = (...args) => {
  console.log(args);
};

console.log(showAllArgs('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus'));
// [ 'Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus' ]