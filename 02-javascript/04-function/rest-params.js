// ... のプレフィックスを付けることで『残り』の引数を配列として受け取ることができる
const showNames = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

showNames('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus');
// Moon
// Mercury
// [ 'Mars', 'Jupiter', 'Venus' ]
