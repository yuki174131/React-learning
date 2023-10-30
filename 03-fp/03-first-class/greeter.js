const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  return sayHello;
};

// 関数型プログラミングでは不要な代入は避けるので、以下のようにかける
// const greeter = (target) => {
//   return () => {
//   console.log(`Hi, ${target}!`);
// };

// アロー関数式では、内容が return 文だけだった場合はそのブロックごと表記を省略できる
// const greeter = (target) => () => console.log(`Hi, ${target}!)`;

const greet = greeter('Step Jun');
greet(); // Hi, Step Jun!
