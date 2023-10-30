// 関数宣言
{
  function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4));
}

// 関数式
{
  const add = function (n: number, m: number): number {
    return n + m;
  };
  console.log(add(5, 7));
}

// アロー関数式
{
  const add = (n: number, m: number): number => n + m;
  const hello = (): void => {
    console.log('Hello!');
  };

  console.log(add(8, 1));
  hello();
}
