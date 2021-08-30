{
  /**
   * 메모
   * 유효성을 체크하는 함수를 만들 때, 타입별로 모든 함수를 다 만들어야할까?
   * 제네릭을 이용하여 해결할 수 있다.
   */
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number!');
    }

    return arg;
  }

  // 아래 함수와 같이 쓰면 모든 타입에 대한 유효성 체크가 가능하지만 타입 보장이 되지 않는다. return값은 항상 any
  function checkNotNullAnyBad(arg: any): any {
    if (arg == null) {
      throw new Error('Not valid number!');
    }

    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('Not valid number!');
    }

    return arg;
  }
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
