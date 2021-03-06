/**
 * Let's make a game ð¹
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
      // ìëì ê°ì´ êµ¬ííë¤ë©´ ìëí typeì´ ìëì ì»´íì¼ ìë¬ê° ë°ì
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
