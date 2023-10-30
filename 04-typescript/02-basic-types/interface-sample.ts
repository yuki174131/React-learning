interface Color {
  // readonly 修飾子をつけたプロパティは書き換え不可
  readonly rgb: string;
  opacity: number;
  // プロパティ名の末尾に ? をつけると、そのプロパティは 省略可能
  alias?: string;
}

const tq: Color = { rgb: '00afcc', opacity: 1 };
tq.alias = 'turquoise';
// tq.rgb = '03c1ff';  //errorTS2540:Cannotassignto'rgb'becauseitisaread-onlyproperty.
