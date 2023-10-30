const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
};

const rolley = { ...patty, name: 'Rolley Cocker' };
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

// シャローコピー(Shallow Copy)と いって、コピーされるオブジェクトの深さが 1 段階までしか有効じゃない
// パティの住んでる町がパームタウンになってしまう。
console.log(patty);
//{
// name:'PattyRabbit',
// email:'patty@maple.town',
// address:{town:'PalmTown'} 
//}