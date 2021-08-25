{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(shots: number): CoffeeMachine {
      return new CoffeeMachine(shots);
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 상속을 이용하면 공통적인 기능은 재사용
  // super 키워드로 부모 클래스의 속성 접근 가능
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식 클래스에서 생성자를 따로 구현하는 경우에는 부모의 생성자를 호출해야함.
      super(beans); // 부모 클래스 생성자 호출
    }
    private steamMilk(): void {
      console.log('Steaming some mink...');
    }

    // overwriting
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(23, 'TEST');
  const coffee = latteMachine.makeCoffee(2);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
