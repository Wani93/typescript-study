{
  const obj = {
    name: 'wani',
  };
  obj.name; // wani
  obj['name']; // wani

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender'];

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'wani',
    gender: 'male',
  };
}
