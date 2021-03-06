{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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
      console.log('heating up... π₯');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...β`);

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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // μμ ν΄λμ€μμ μμ±μλ₯Ό λ°λ‘ κ΅¬ννλ κ²½μ°μλ λΆλͺ¨μ μμ±μλ₯Ό νΈμΆν΄μΌν¨.
      super(beans); // λΆλͺ¨ ν΄λμ€ μμ±μ νΈμΆ
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

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log('Add some Sugar ...');
    }
    // overwriting
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();

      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  // λ€νμ±μ μ₯μ 
  // μΈν°νμ΄μ€ λλ λΆλͺ¨ν΄λμ€λ₯Ό μμνμ λ
  // λμΌν ν¨μλ₯Ό μ΄λ€ ν΄λμ€μΈμ§ κ΅¬λΆνμ§ μκ³ 
  // κ³΅ν΅λ APIλ₯Ό νΈμΆν  μ μλ€.
  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(2);
  });
}
