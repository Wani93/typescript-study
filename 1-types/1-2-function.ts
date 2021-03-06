{
  // // JavaScript ๐ฉ
  // function jsAdd(num1, num2) {
  //     return num1 + num2;
  // }

  // // TypeScript ๐
  // function Add(num1: number, num2: number): number {
  //     return num1 + num2;
  // }

  // // JavsScript ๐ฉ
  // function jsFetchNum(id) {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //         resolve(100);
  //     });
  // }

  // // TypeScript ๐
  // function fetchNum(id: string): Promise<number> {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //         resolve(100);
  //     });
  // }

  // JavaScript์์๋ ์ฌ์ฉ์ด ๊ฐ๋ฅํ๊ณ  TypeScript์์ ๋ ํ์ฉ๋๋ฅผ ๋์ผ ์ ์๋ ํ์์ด ์ ํด์ง ํจ์ ์ ์ ๋ฐฉ๋ฒ
  // Optional Parameter: ?๋ฅผ ๋ถ์ด๋ฉด lastName๊ฐ์ ๊ฒฝ์ฐ๋ ์ ํ ์ต์์ ํด๋นํ๋ค.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // ์ ๋ฌํ์ง ์์ผ๋ฉด undefined๊ฐ ๋จ.
  }
  printName('Steve', 'Jobs');
  printName('Byeongwan');
  printName('test', undefined);

  // Default Parameter: ์๋ฌด๊ฒ๋ ์ ๋ฌํ์ง ์์๋ undefined๊ฐ ์๋ ๋ํดํธ ๊ฐ์ด ๋ค์ด๊ฐ๋ค.
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((previous, current) => {
      return previous + current;
    });
  }
  addNumbers(1, 2, 3);
  addNumbers(1, 2, 3, 4, 5);
  addNumbers(1, 2, 3, 4, 5, 6, 7);
}
