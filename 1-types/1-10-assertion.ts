{
  /**
   * Type Assertions ๐ฉ -> ๋น๋ฒํ ์ฌ์ฉ์ ๊ถ์ฅํ์ง ์์.
   * ์ฝ๋๋ฅผ ์ง๋ค๋ณด๋ฉด ํ์์ ๊ฐ์ํ๋ ์๊ฐ์ด ์ค๋๋ฐ ๊ทธ๋๋ Type Assertion์ ๊ด๋ จ๋ ๋ฌธ๋ฒ์ ์ฌ์ฉํด์ผํ๋ค.
   */
  function jsStrFunc(): any {
    return 'hello'; // JS์์๋ ํ์์ด ์์ง๋ง ํด๋น ํจ์๋ ํญ์ string ํ์์ returnํ๋ ์ํฉ
  }
  const result = jsStrFunc();
  result.length; // any ํ์์ด๋ผ length API๊ฐ ์กํ์ง์์

  // ์ด๋ด๋ ์ฌ์ฉํ๋๊ฒ Type Assertion!
  (result as string).length; // string ๊ด๋ จ API๊ฐ IDE์ ์กํ
  <string>result.length; // ์ ์ฝ๋์ ๊ฐ์ ์๋ฏธ์ด๋ค.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ๐ฑ Type Assertion(!)์ ํ์ง ์์ผ๋ฉด numbers๊ฐ undefined์ผ ๊ฒฝ์ฐ๋ฅผ ๊ณ ๋ คํ๊ธฐ ๋๋ฌธ์ ์๋ฌ๊ฐ ๋๋ค
  // !๋ฅผ ์ด๋ค๋๊ฑด ํ์์ ๋ํ ํ์ ์ด ์์ ๋ ์ฌ์ฉ!

  const button = document.querySelector('.btn')!; // querysSelect๋ element ํ์ | null์ ๋ฆฌํดํ์ง๋ง element๊ฐ ์๋ค๋ ํ์ ์ด ์๋ค๋ฉด ๋์ !๋ฅผ ๋ถ์ฌ์ ํํํ๋ค.
}
