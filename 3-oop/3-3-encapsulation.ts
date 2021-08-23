{
  /* ✏생성자로 만드는 것과 static으로 object를 생성하는 것에 대한 차이
   *
   * static 함수는 사용 용도에 따라서 장점이 달라짐.
    1.오브젝트의 생성 주기를 효율적으로 관리
      싱글톤 패턴이나, 생성 할 수 있는 인스턴스의 갯수 제한, 등 여러가지를 컨트롤 가능
    2.인스턴스를 만드는 로직을 캡슐화
      인스턴스를 생성하는데 복잡한 로직이 추가 된다면, static 함수를 통해 이런 복잡성을 심플하게 제공
      Car.createBlueCar();
      Car.createYellowCar();
      사용하는 사람은 정확하게 어떻게 만드는 지 몰라도, 함수 하나로 BlueCar, YellowCar를 만듦
 */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: 항상 접근 가능
  // private: 클래스 내부에서만 접근 가능
  // protected: 클래스 내부 뿐만 아니라 상속한 다른 클래스에서도 접근 가능
  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level
    // 이렇게 static 메서드를 통해서 인스턴스를 생성한다면
    // 생성자 함수는 사용 못하도록 private 처리하는게 좋다.
    // 왜냐하면 이렇게 해야 개발자가 의도한 대로 makeMachine으로만 생성할 수 있기 때문.
    static makeMachine(shots: number): CoffeeMachine {
      return new CoffeeMachine(shots);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }

    // 해당 함수로 유효성 체크
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
  }

  // const coffeeMachine = new CoffeeMachine(22);
  const coffeeMachine = CoffeeMachine.makeMachine(22);
  // coffeeMachine.coffeBeans = 3;
  // coffeeMachine.coffeBeans = -34; invalid
  coffeeMachine.fillCoffeeBeans(10);

  // getter, setter
  // 어떠한 계산을 하게될 때 getter, setter를 활용하면 좋다.
  // vue에서 computed와 비슷한 개념같군..
  class User {
    // private firstName: string; 생성자 함수에 접근제한자 설정하여 얘네들은 불필요!
    // private lastName: string;
    // fullName: string;
    // get이라는 키워드를 쓰면 함수처럼 표기되지만 접근할 때는 멤버 변수처럼 접근 가능! ex) user.fullName
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private inernalAge = 4;
    get age(): number {
      return this.inernalAge;
    }
    set age(num: number) {
      // setter를 이용하면 아래와 같은 유효성 검사도 가능!
      if (num < 0) {
        throw new Error('age is not minus!');
      }
      this.inernalAge = num;
    }

    // 생성자에 접근제한자를 설정하면 자동으로 멤버변수로 설정 됨!
    constructor(private firstName: string, private lastName: string) {
      // this.firstName = firstName;  얘네도 생성자 함수에 private이 붙어서 불필요!
      // this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'Jobs');
  // console.log(user.fullName); // Steve Jobs
  // user.firstName = 'Wani';
  // console.log(user.fullName); Steve Jobs가 나옴 -> fullName은 생성자 함수가 호출될 때 할당되기 때문. -> 그렇다면 다른 name이 변경될때 full도 반영되게 하고 싶다면 어떻게 할까> -> getter 활용
  // console.log(user.fullName); // getter로 바꾸니까 Wani Jobs가 나옴
  user.age = 6; // 멤버 변수처럼 사용하지만 setter를 통해 값이 할당된 것!
}
