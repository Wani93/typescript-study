/**
 * Type Inference
 * 타입추론이란 타입을 명시하지 않아도 타입스크립트가 자동으로 타입을 지정해주는 것.
 * 강의자는 타입추론만 믿고 타입을 명시하지 않는 행위는 별로라고 한다.
 * 복잡한 로직일 경우 타입을 명시하는게 유용하기 때문이다.
 * 간단한 원시타입의 경우에는 타입추론을 활용할 수 있다.
 */
let text = 'hello'; // 자동으로 string 타입 추론
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
