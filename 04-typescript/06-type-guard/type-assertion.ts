type User = { username: string; address: { zipcode: string; town: string } };

const str = `{ "username": "patty", "town": "Maple Town" }`;
const data: unknown = JSON.parse(str);
const user = data as User;

console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
