import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

// コンポーネント全体としてstate 変数 timeLeft を取り回すことで機能を実現
// 初期値 として props の maxCount
const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  // timeLeft をひとつ減算する機能
  const tick = () => setTimeLeft((t) => t - 1);
  const reset = () => setTimeLeft(maxCount);

  useEffect(() => {
    // ミリ秒ごとに tick が実行されるよう登録
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
    // 空配列を渡してるので、インターバル実行の開始処理は初 回マウント時にのみ実行
  }, []);

  // useEffectはコンポーネントの中に複数置ける
  useEffect(() => {
    
    // if (timeLeft === 0) setTimeLeft(maxCount);
    if (timeLeft === 0) reset()
    },[timeLeft,maxCount]);
  return (
    <Box p={5} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Stat mb={2}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{timeLeft}</StatNumber>
      </Stat>
      <Button
        w="xs"
        colorScheme="red"
        variant="solid"
        leftIcon={<ResetIcon />}
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Timer;
