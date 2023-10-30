const list = [4, 8, 2, 6];

// slice(n, m)は配列のインデックス n から m - 1 までの選択された範囲をシャローコピーして新しい配列を返すメソッド。引数を完全に省略すると元の配列と全く同じものができる。
// これを非破壊メソッドの前に挟めば、元の配列が破壊されることはなくなる
const sortedList = list.slice().sort((n, m) => n < m ? -1 : 1);
console.log(sortedList, list); // [2, 4, 6, 8] [4, 8, 2, 6]

// 空配列の中に元の配列をスプレッド構文で展開する
const reverseList = [...list].reverse();
console.log(reverseList, list); // [6, 2, 8, 4] [4, 8, 2, 6]
