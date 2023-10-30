const greet = (friend: "Serval" | "Caracal" | "Cheetah") => {
  switch (friend) {
    case "Serval":
      return `Hello, ${friend}!`;
    case "Caracal":
      return `Hi, ${friend}!`;
    case "Cheetah":
      return `Hiya, ${friend}!`;
    default: {
      // never を使うことで、case 文の漏れを未然にチェックできる
      // 例えば、case "Cheetah"のルーチンを削除すると、エラーを出してくれる。
      const check: never = friend;
    }
  }
};

console.log(greet("Serval"));
