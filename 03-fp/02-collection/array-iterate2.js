const arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce((n, m) => n + m), // 15
  arr.sort((n, m) => n > m ? -1 : 1), // [ 5, 4, 3, 2, 1 ]
);

// reduce
// 1 回めの実行： m = 1 、前回の実行がないので、結果は 1 がそのまま返る
// 2 回めの実行： m = 2 、前回の実行結果により n = 1 、結果は 1 + 2 = 3 が返る
// 3 回めの実行： m = 3 、前回の実行結果により n = 3 、結果は 3 + 3 = 6 が返る
// 4 回めの実行： m = 4 、前回の実行結果により n = 6 、結果は 6 + 4 = 10 が返る
// 5 回めの実行： m = 5 、前回の実行結果により n = 10 、結果は 10 + 5 = 15 が返る

// sort
// ⅰ. 第 1 引数が第 2 引数より優先度が高い（前に並べる）場合、 0 未満の数値を返す
// ⅱ. 第 1 引数が第 2 引数より優先度が低い（後に並べる）場合、 0 より大きい数値を返す
// ⅲ. 第 1 引数と第 2 引数の優先度が同じ（ソートの必要がない）場合、 0 を返す（※省略可）
