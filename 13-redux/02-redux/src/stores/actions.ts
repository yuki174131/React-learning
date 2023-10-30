export const CounterActions = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  ADD: 'ADD',
} as const;

type ValueOf<T> = T[keyof T];

export interface CounterAction {
  type: ValueOf<typeof CounterActions>;
  amount?: number;
}

// 3 つの関数 decrement、increment、add は action を生成する Action Creator と呼ばれる関数
export const decrement = (): CounterAction => ({
  type: CounterActions.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActions.INCREMENT,
});

export const add = (amount: number): CounterAction => ({
  type: CounterActions.ADD,
  amount,
});
