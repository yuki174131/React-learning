// 型ジェネリクスを使用
// 型引数(Type Parameter)。関数に渡す引数と同じで、任意の型を <> によって引数として 渡すことで、その関数の引数や戻り値の型に適用できるようになる
// toArray() は同じ型の引数を 2 つ取り、その型の配列を返す関数となる
function toarray<T>(arg1: T, arg2: T) {
   return[arg1,arg2];
}
toArray<number>(8, 3); //[8, 3]

const toArrayArrow = <T>(arg1: T, arg2: T) => [arg1, arg2];
toArrayArrow(true, false); //[true, false]
// toArrayyArrow(5, 'baz'); 
// <repl>.ts:11:17 - error TS2345: Argument of type 'string' is not assignable to parameter of type'number'.


const toArrayvariably = <T>(...args: T[]): T[] => [...args];
toArrayVariably(1, 2, 3, 4, 5); // [1,2,3,4,5]
// toArrayvariably(6, '7', 8);
// <repl>.ts:6:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type'number'.

// 型引数は関数の定義だけじゃなくインターフェースの定義にも使えるし、また通常の関数の引数のようにデフォルト値を設定できたりもする
interface CustomError<E = Error> {
  type: 'syntax' | 'logic' | 'runtime';
  error :E;
}

const tokenError: CustomError = {
  type: 'syntax',
  error: new Error('Unexpected Token'),
};

console.log(tokenError);
