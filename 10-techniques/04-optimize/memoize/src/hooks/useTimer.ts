import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SyntheticEvent } from 'react';
import { getPrimes } from 'utils/prime';

const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  // const primes = getPrimes(maxCount);
  // メモ化を使用
  const primes = useMemo(() => getPrimes(maxCount), [maxCount]);
  // useRef で定義した値は .current という書き換え可能なプロパティを持つ。それを組み込みコンポーネ ントの ref に入れておくと、React がリアル DOM を出力した際にその対応する要素を参照する値が .current の中に設定される
  // useRef は ref 属性だけじゃなく、汎用的な値にも使うことができる。だから好きに自分で .currentプロパティに値を入れたり更新して、それをコンポーネントに任意の場所で参照すればいい
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  const tick = useCallback(() => setTimeLeft((t) => t - 1), []);
  // 定義するたびにその値が指すメモリのアドレスが 変わるので、レンダリングごとの値としては非等価になる。つまり依存配列を設定してないのと同じく毎回のレンダリングで実行されてしまうので、reset の定義に useCallback() を使う
  // 関数定義の実行タイミングを依存配列に よってコントロールできる
  const reset = useCallback(
    (event?: SyntheticEvent) => {
      event?.stopPropagation();

      if (intervalId.current !== undefined) {
        clearInterval(intervalId.current);
      }
      intervalId.current = setInterval(tick, 1000);
      setTimeLeft(maxCount);
    },
    [maxCount, tick]
  );

  useEffect(() => {
    reset();

    return () => clearInterval(intervalId.current);
  }, [reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return [timeLeft, primes.includes(timeLeft), reset];
};

export { useTimer };
