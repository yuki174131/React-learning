import type { FC } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  // 単方向データフローを保ったまま、コールバックを介してその値を変更してる（state のリフトアップ）
  // state を変更す る場合、そのセット関数に直接、新しい値を渡すこともできるし、この更新関数を渡すこともできる。
  // でもこのサンプルでは、新しい値を渡す方法
  // const increment = () => setCount(count + 1)
  // でも問題なく動く。じゃあなぜここでは更新関数を渡してるか

  // setCount(count + 1) を 3 回連続して実行する
  // const plusThree=()=>[...Array(3).keys()].forEach(()=>setCount(count+1));
  // 上記のような例の場合、レンダリングにあたってコンポーネント関数が実行される際、その実行が終わるまで state の値は一 定で変わらないため、更新関数を渡さないと1づつ増えてしまう

  const increment = () => setCount((c) => c + 1);

  const reset = () => setCount(0);

  return (
    <Box p={3} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Stat mb={1}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{count}</StatNumber>
      </Stat>
      <ButtonGroup maxW="xs" m={2} variant="contained" isAttached>
        {/* 親コンポーネントが自身の状態を変更する関数を子コンポーネントに渡して、フォ  ーム操作で発火されるイベントへその関数を仕込んでおく */}
        <Button w="xs" colorScheme="green" variant="solid" onClick={increment}>
          +1
        </Button>
        <Button w="xs" colorScheme="red" variant="solid" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Counter;
