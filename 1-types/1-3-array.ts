{
  // Array
  const fruits: string[] = ['๐', '๐']; // ๋ฐฐ์ด case 1. ํ์[]
  const scores: Array<number> = [1, 2, 3]; // ๋ฐฐ์ด case 2. Array<ํ์>
  function printArray(fruits: readonly string[]) {} // readonly๋ case 1์์๋ง ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.

  // Tuple: ์๋ก ๋ค๋ฅธ ํ์์ ๊ฐ์ง ์ ์๋ ๋ฐฐ์ด
  // Tuple -> interface, type alias, class๋ก ๋์ฒด ํด์ ์ฌ์ฉํ๋๊ฒ ์ข๋ค.
  //          ์? tuple์ ์ธ๋ฑ์ค๋ก ์ ๊ทผํ๊ธฐ ๋๋ฌธ์ ํด๋น ๋ฐ์ดํฐ๊ฐ ๋ช์์ ์ด์ง ์๋ค.
  //          ๋ฆฌ์กํธ์ useState๋ tuple ํํ๋ก returnํ๊ธฐ ๋๋ฌธ์ ํด๋น ๊ฒฝ์ฐ์ ํ์ฉ๋๋ค.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // ์ธ๋ฑ์ค ์์๋ก ํด๋น ๋ณ์์ ํ ๋น๋๋ค.
}
