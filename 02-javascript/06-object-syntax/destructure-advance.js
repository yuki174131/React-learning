const response = {
  data: [
    {
      id: 1,
      name: 'Patty Rabbit',
      email: 'patty@maple.town',
    },
    {
      id: 2,
      name: 'Rolley Cocker',
      email: 'rolley@palm.town',
    },
    {
      id: 3,
      name: 'Bobby Bear',
      email: 'bobby@maple.town',
    },
  ],
};

// response の中の data プロパティの値を分割代入でそのキー名のまま抽出して変数にするのではなく、users という名前の変数にしてる
// data の値がなかった場合に備えて、users にはデフォルト値として空配列を設定してる
const { data: users = [] } = response;
console.log(users);
//[
// {id:1,name:'PattyRabbit',email:'patty@maple.town'}, 
// {id:2,name:'RolleyCocker',email:'rolley@palm.town'}, 
// {id:3,name:'BobbyBear',email:'bobby@maple.town'} 
//]