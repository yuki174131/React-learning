import type { FC } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useTimer } from 'hooks/useTimer';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  // Custom Hook を作る際には、Custom Hook 関数の名前の頭に『use』をつける
  // その関数が Custom Hook なのか をひと目で判断できるよう React の公式チームが課してる規約
  const [timeLeft, reset] = useTimer(maxCount);

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
