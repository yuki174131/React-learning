interface T { foo: number }
interface U { bar: string }
interface V {
  foo?: number;
  baz: boolean;
}

type TnU = T & U;  // { foo: number; bar: string } 
type TnV = T & V;  // { foo: number; baz: boolean }
type VnTorU = V & (T | U); // { foo: number; baz: boolean } or { foo?: number; bar: string; baz: boolean }
// 同じプロパティで型が共通点のないものだった場合は、never になる
