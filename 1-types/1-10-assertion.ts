{
  /**
   * Type Assertions 💩 -> 빈번한 사용은 권장하지 않음.
   * 코드를 짜다보면 타입을 강요하는 순간이 오는데 그때는 Type Assertion에 관련된 문법을 사용해야한다.
   */
  function jsStrFunc(): any {
    return 'hello'; // JS에서는 타입이 없지만 해당 함수는 항상 string 타입을 return하는 상황
  }
  const result = jsStrFunc();
  result.length; // any 타입이라 length API가 잡히지않음

  // 이럴때 사용하는게 Type Assertion!
  (result as string).length; // string 관련 API가 IDE에 잡힘
  <string>result.length; // 위 코드와 같은 의미이다.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱 Type Assertion(!)을 하지 않으면 numbers가 undefined일 경우를 고려하기 때문에 에러가 난다
  // !를 쓴다는건 타입에 대한 확신이 있을 때 사용!

  const button = document.querySelector('.btn')!; // querysSelect는 element 타입 | null을 리턴하지만 element가 있다는 확신이 있다면 끝에 !를 붙여서 표현한다.
}
