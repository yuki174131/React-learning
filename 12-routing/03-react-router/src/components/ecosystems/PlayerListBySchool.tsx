import type { FC, SyntheticEvent } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Heading } from '@chakra-ui/react';
import { playerData, schoolData } from 'data';
import { SCHOOL_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import PlayerList from 'components/organisms/PlayerList';

const PlayerListBySchool: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const { schoolID = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // loading を使って疑似ローディング画面を実装
  const isLoading = Boolean(searchParams.get('loading'));

  const handleLoading = (event: SyntheticEvent) => {
    event.stopPropagation();
    const loading = !isLoading ? 'true' : '';
    setSearchParams(`loading=${loading}`);
  };

  // useParams() でパスからルーティングパラメータ :schoolID の 値を抽出してるんですよね。そして if 文の中でその値が shohoku、ryonan、kainandai のどれかに一致し てるかどうか判断してて、一致してればそれに該当する選手一覧をレンダリング、一致してなければ最後 でトップにリダイレクト
  // SCHOOL_CODE は文字列の配列じゃなくて shohoku、ryonan、kainandai という定数のタプル。そのままだと文字列型の schoolID は型ちがいで includes() に渡せない。苦肉の策として型アサーションしてる
  if (SCHOOL_CODE.includes(schoolID as never)) {
    // if (SCHOOL_CODE.includes(schoolID as 'shohoku')) {
    const players = playerData.filter((player) => player.schoolID === schoolID);
    const school = schoolData.find((school) => school.id === schoolID);

    return (
      <Box my={my} w="2xl">
        {/* ドキュメントヘッダの更新 */}
        <Helmet>
          <title>登場人物｜{school?.name}｜SLAM DUNK</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {school?.name}
        </Heading>
        <Box textAlign="right">
          <IconButton
            onClick={handleLoading}
            aria-label="ローディング切り替え"
            icon={<SpinnerIcon />}
          />
        </Box>
        <PlayerList
          players={players}
          color={school?.color}
          isLoading={isLoading}
        />
      </Box>
    );
  }

  return <Navigate to="/" replace />;
};

export default PlayerListBySchool;
