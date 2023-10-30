import type { FC } from 'react';
import Providers from './Providers';
import IndexRoutes from './routes';

const App: FC = () => (
  // Redux の機能を下位のコンポーネントで使えるようにするためのプロバイダコンポーネントを読み込む
  <Providers>
    <IndexRoutes />
  </Providers>
);

export default App;
