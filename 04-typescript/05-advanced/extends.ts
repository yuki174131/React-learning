// ここでの extends は、関数 override() の第 2 引数 obj2 の型を定義している型引数 U が第 1 引数の型 obj1 の型 T と同じか拡張したものでなければならないことを示唆する
const overMerge = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});

console.log(
  overMerge({ a: 1 }, { a: 4, b: 8 }),
  // overMerge({ a: 3 }, { n: 6, m: 9 }),  { n: number; m: number } が { a: number } の拡張じゃないからエラー
);
