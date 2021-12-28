/**
 * Let's make a game 🕹
 */
interface Position {
  x: number;
  y: number;
}
type Direction = 'up' | 'down' | 'left' | 'right';

const position: Position = { x: 0, y: 0 };
const move = (dir: Direction) => {
  switch (dir) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      // 아래와 같이 구현한다면 의도한 type이 아닐시 컴파일 에러가 발생
      const invalid: never = dir;
      throw new Error(`unknown direction: ${invalid}`);
  }
};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
