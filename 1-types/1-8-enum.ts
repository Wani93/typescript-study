{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  //자바스크립트에서는 freeze API를 활용하여 Enum처럼 사용한다.
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum의 명칭은 보통 앞글자만 대문자로 적는다.
  // enum은 타입스크립트에서 자주 쓰이지 않는다.
  // enum으로 타입이 결정된 변수에 다른 숫자값은 발생하지않는다.
  // 주로 enum 대신 Union 타입으로 대체해서 쓰인다.
  // 강의자는 웹에서 안드로이드 또는 IOS와 통신할때 enum을 사용한 적이 있다고 한다.
  type DaysOfWeek = 'Monday' | 'Tuesday';
  enum Days {
    Monday = 1, // default로 0으로 시작, 문자열 할당도 가능하지만 키값마다 할당해줘야한다.
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Thursday);
  let day = Days.Sunday;
  day = 10; // 10에 대한 enum 정의가 없어도 문제가 되지 않는 것을 확인할 수 있음. -> 타입이 정확하게 보장되지 않음.
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Tuesday';
  // dayOfToday = 'byeongwan'; Union에서 지정한 타입이 아니면 에러 발생!
}
