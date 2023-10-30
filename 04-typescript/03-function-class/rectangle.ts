class Rectangle {
  // 『プロパティ初期化子(Property Initializer)』。コンストラクタに引数がないクラスでは、インスタンスの初期化をこれだけで済ませてコンストラクタを省略できる
  // readonly 修飾子を付けることで、そのプロパティを変更不可にもできる
  readonly name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = () => this.sideA * this.sideB;
}

const rect = new Rectangle(10, 20);
console.log(rect.getArea());
