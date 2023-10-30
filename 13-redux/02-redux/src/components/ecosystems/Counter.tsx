import type { FC } from 'react';
// Redux の提供する Hooks API
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment } from 'stores/actions';
import type { CounterState } from 'stores/reducers';
import CounterBoard from 'components/molecules/CounterBoard';

const Counter: FC = () => {
  // store から任意の state の値を抽出するための API
  const count = useSelector<CounterState, number>((state) => state.count);
  // action を dispatcher に渡すための関数を取得する API。得た関数を dispatch({ type: 'INCREMENT' }) のように action を引数にしてコールすれば、
  // INCREMENT タイプの action が dispatch されるようになってる
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default Counter;
