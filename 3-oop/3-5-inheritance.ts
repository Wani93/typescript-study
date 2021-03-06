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

  // μμμ μ΄μ©νλ©΄ κ³΅ν΅μ μΈ κΈ°λ₯μ μ¬μ¬μ©
  // super ν€μλλ‘ λΆλͺ¨ ν΄λμ€μ μμ± μ κ·Ό κ°λ₯
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

  const latteMachine = new CaffeLatteMachine(23, 'TEST');
  const coffee = latteMachine.makeCoffee(2);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
