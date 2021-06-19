// const person: {
//   name: string;
//   age: number;
// // } 
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple: an array with EXACTLY THESE ELEMENTS, in this order.
//  } = {
//   name: "Garrett",
//   age: 23,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// } 
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; //Enums are mostly done with caps lock, but it isn't mandatory. All can be assigned numbers, but by default start at zero.

const person = {
  name: "Garrett",
  age: 23,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

//person.role.push('admin');
//person.role[1] = 10; //these are okay as they only modify the existing data types.

//person.role = [0, "admin", "user"]; will get caught due to too many elements.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
};

if (person.role === Role.AUTHOR) {
  console.log('is author.');
}