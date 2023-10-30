// モジュール間で名前がバッティングしてしまうときや、長い名前を省略して取り回したいときとかに、as キーワードを使うことで名前を変更できる
import { ONE, TWO as ZWEI } from './constants.js';

export const plus = (n, m = ONE) => n + m;
const times = (n, m = ZWEI) => n * m;

export default times;
// デフォルトエクスポートしたものは、読み込む側で任意の名前をつけられる
