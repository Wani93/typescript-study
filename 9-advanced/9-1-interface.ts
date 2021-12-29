// Type Alias vs Interface [구현 차이]
// 여기 Position을 의미하는 type과 interface가 있다.
type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// Object: type, interface 가능
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// Class: type, interface 가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  z: number;
  x: number;
  y: number;
}

// Extends: type, interface 가능
type ZPositionType = PositionType & { z: number };
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// Merge: interface 가능
interface PositionInterface {
  z: number;
}

// Comuted properties: type 가능
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';

// Type Alias vs Interface [개념 차이]
// Interface: 어떤 것의 규격 사항 ex) class
// Type: 데이터의 타입 ex) variable
