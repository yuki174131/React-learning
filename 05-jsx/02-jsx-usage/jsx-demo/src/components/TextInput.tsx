import { useRef } from 'react';
import './TextInput.css';

// 組み込みコンポーネントの input とそれに対応する実際にレンダリングされた後のリアルな DOM とを結びつけ、その要素の focus() メソッド を実行したい。
// ref 属性の中に React が用意してる RefObject というオブジェクトを設定しておくと、そのコンポーネントが DOM にレンダリングされた際に、
// RefObject の .current プロパティにその DOM への参照値を入れてくれるようになってる

const TextInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="input-item">
      <input type="text" ref={inputRef} />
      <input type="button" value="フォーカス" onClick={handleClick} />
    </div>
  );
};

export default TextInput;
