type Props = { name: string; times?: number };

// Greet を関数コンポーネントとして型付けするのに、FunctionComponent<P> インターフェースを用いてる。
// この型引数 P が props の型に適用されるのね。この例では Props という型エイリアスで定義してる
const Greet: React.FC<Props> = (props) => {
  const { name, times = 1 } = props;

  return (
    <>
      {[...Array(times)].map(() => (
        <p>Hello, {name}!</p>
      ))}
    </>
  );
};

export default Greet;
