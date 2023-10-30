const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
};

// いったん文字列として展開してから JSON にパースし直す。
const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);
//{
// name:'PattyRabbit',
// email:'patty@maple.town',
// address:{town:'MapleTown'} 
//}