{
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
}
