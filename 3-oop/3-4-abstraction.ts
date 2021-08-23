{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface 명칭에 접두사 I를 붙이는 경우도 있음.
  // interface: 따라야하는 규격, 규약 (계약서 느낌)
  // 허용 범위를 지정
  // CoffeeMaker를 인터페이스로 삼으면, 반드시 makeCoffee를 만들어야 함.
  // C++의 추상 클래스 같음.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
  }

  const coffeeMachine: CoffeeMachine = CoffeeMachine.makeMachine(22);
  coffeeMachine.fillCoffeeBeans(10);
  coffeeMachine.makeCoffee(2);

  const coffeeMachine2: CoffeeMaker = CoffeeMachine.makeMachine(22);
  // coffeeMachine2.fillCoffeeBeans(10); CoffeeMaker에는 fillCoffeeBeans 메서드가 없음.
  coffeeMachine2.makeCoffee(2);
}
