import Greet from './components/Greet';
import Summary from './components/Summary';
import Form from './components/Form';
import TextInput from './components/TextInput';
import './App.css';

// 他ファイルで定義してる Greet コンポーネントをインポートして JSX の中で使ってる。
// タグ内で属性として定義されてる name と times が Greet コンポーネントに props として受け渡されてる
// props とは『properties』から来てて、コンポーネントを関数として考えたときにその引数に相当するもの
const App: React.FC = () => (
  <div className="App">
    <Greet name="Patty" times={4} />
    <Summary title="Maple Town">
      <p>
        Patty Hope-rabbit, along with her family, arrives in Maple Town, a
        smalltown inhabited by friendly animals.
      </p>
      <p>
        Soon, the Rabbit Family settles in Maple Town as mail carriers and the
        bitter, yet sweet friendship of Patty and Bobby begins to blossom.
      </p>
    </Summary>
    <Form selected="fox" />
    <TextInput />
  </div>
);

export default App;
