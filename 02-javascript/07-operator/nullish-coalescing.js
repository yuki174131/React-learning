const users = [
  {
    name: 'Patty Rabbit',
    address: {
      town: 'Maple Town',
    },
  },
  {
    name: 'Rolley Cocker',
    address: {},
  },
  null,
];
  
for (u of users) {
  const user = u ?? { name: '(Somebody)' };
  const town = user?.address?.town ?? '(Somewhere)';
  console.log(`${user.name} lives in ${town}`);
}

// Patty Rabbit lives in Maple Town
// Rolley Cocker lives in (Somewhere)
// (Somebody) lives in (Somewhere)
// 従来ならタイプエラーを起こさないようにするために if 文ブロックで書いてたような処理も、わずか 1 行とかで書ける。
// チェーンできるのはプロパティだけじゃなくメソッドの場合でもfoo?.bar()?.baz() のように書いていける