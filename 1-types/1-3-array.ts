{
  // Array
  const fruits: string[] = ['🍉', '🍊']; // 배열 case 1. 타입[]
  const scores: Array<number> = [1, 2, 3]; // 배열 case 2. Array<타입>
  function printArray(fruits: readonly string[]) {} // readonly는 case 1에서만 사용 가능하다.

  // Tuple: 서로 다른 타입을 가질 수 있는 배열
  // Tuple -> interface, type alias, class로 대체 해서 사용하는게 좋다.
  //          왜? tuple은 인덱스로 접근하기 때문에 해당 데이터가 명시적이지 않다.
  //          리액트의 useState는 tuple 형태로 return하기 때문에 해당 경우에 활용된다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 인덱스 순서로 해당 변수에 할당된다.
}
