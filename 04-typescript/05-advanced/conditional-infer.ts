type Each<T> = T extends Array<infer U> ? U : T;

const num = 5;
const arr = [3, 6, 9];
type ArrEach = Each<typeofarr>; //number
type NumEach = Each<typeofnum>; //number
// 型 T が何らかの型の配列だった場合、その配列の中身の型を infer U で型 U として取得し、 出力の型として使ってる。配列じゃなかった場合はそのままその型が出力される