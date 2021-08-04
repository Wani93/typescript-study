// 모듈화를 사용하지 않기 때문에 {}으로 블록을 설정하여 지역변수로 연습
{
  /*
   * JavaScript
   * let, const - ES6
   * Primitive: number, string, boolean, bigint, symbol, undefined
   * Object: function, array
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined: 값의 유무가 결정되지 않은 상태
  let name: undefined; // 💩 단독적으로 undefined 타입이 쓰이지 않음
  let age: number | undefined; // optional type일때 이렇게 쓰임 ✨보편적으로 optional type 일때 undefined를 많이 쓰임
  function find(): number | undefined {
    return 10;
  }

  // null: 값이 없다고 나타냄
  let person: null; // 💩 null도 단독적으로 사용하지 않음
  let person2: string | null; // undefined와 마찬가지로 optional type일때 이렇게 쓰임 ✨해석의 차이로 값이 없거나 있거나로 된다면 null을 사용하는게 맞음

  // unknown: 어떠한 타입이 될지 알수없음 💩 될수있으면 지양하는 것이 좋음.
  // 타입스크립트에서 자바스크립트의 라이브러리를 사용하는 경우에
  // 자바스크립트에서 리턴하는 타입을 모를 때 사용
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 마찬가지로 지양하는 게 좋음.
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // 💩 void 타입의 변수일 경우 undefined만 가능, 비추.

  // never: 함수가 리턴하지 않는 경우에 사용
  function throwError(message: string): never {
    // case 1.
    // message -> server (log) 메세지를 서버에 전달하여 log를 남기고
    // throw new Error(message) 에러 메세지를 띄우고 어플리케이션을 종료

    // case 2.
    // 무한 반복
    while (true) {}
  }
  let neverEnding: never; // 💩 변수에 never 타입을 표현하는 경우는 없음

  // object 💩 오브젝트 타입도 추상적이어서 구체적인 명시가 필요하다.
  let obj: object = [1, 2, 3];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'test' });
  acceptSomeObject({ animal: 'doc' });
}
