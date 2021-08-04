{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //     return num1 + num2;
  // }

  // // TypeScript 😎
  // function Add(num1: number, num2: number): number {
  //     return num1 + num2;
  // }

  // // JavsScript 💩
  // function jsFetchNum(id) {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //         resolve(100);
  //     });
  // }

  // // TypeScript 😎
  // function fetchNum(id: string): Promise<number> {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //         resolve(100);
  //     });
  // }

  // JavaScript에서도 사용이 가능하고 TypeScript에서 더 활용도를 높일 수 있는 타입이 정해진 함수 정의 방법
  // Optional Parameter: ?를 붙이면 lastName같은 경우는 선택 옵션에 해당한다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // 전달하지 않으면 undefined가 됨.
  }
  printName('Steve', 'Jobs');
  printName('Byeongwan');
  printName('test', undefined);

  // Default Parameter: 아무것도 전달하지 않아도 undefined가 아닌 디폴트 값이 들어간다.
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
