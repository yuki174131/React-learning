import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllPlayers from 'components/ecosystems/AllPlayers';
import PlayerListBySchool from 'components/ecosystems/PlayerListBySchool';
import CharactersFrame from 'components/templates/CharactersFrame';
import Home from 'components/templates/Home';

const IndexRoutes: FC = () => {
  // useEffect を使って、コンポーネントのレンダリング時に強制的にトップにスクロールさせて る
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="characters" element={<CharactersFrame />}>
        {/* 全キャラ一覧 */}
        <Route path="" element={<AllPlayers my={12} />} />
        {/* 高校別キャラ一覧 */}
        <Route path=":schoolID" element={<PlayerListBySchool my={12} />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
