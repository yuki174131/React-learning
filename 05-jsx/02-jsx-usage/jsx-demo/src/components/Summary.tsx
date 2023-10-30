import type { PropsWithChildren } from 'react';
import './Summary.css';

type Props = { title: string; folded?: boolean } & PropsWithChildren;

const Summary: React.FC<Props> = ({ title, folded = false, children }) => {
  // 子要素として、childrenで<p> 要素を二つ受け取れる。
  // console.log(children);

  return (
    <details className="story" open={!folded}>
      <summary>{title}</summary>
      {children}
    </details>
  );
};

export default Summary;
