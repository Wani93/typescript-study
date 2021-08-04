{
  /**
   * Tyep Aliases
   * 새로운 타입을 정의할 수 있다.
   */
  type Text = string;
  const name: Text = 'byeongwan';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'byeongwan',
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let firstName: Name;
  firstName = 'name'; // 'name' 값만 가질 수 있다.
  type JSON = 'json';
  const json: JSON = 'json'; // 'json' 값만 가질 수 있다.

  type Boal = true;
  const isCat: Boal = true; // true 값만 할당 가능
}
