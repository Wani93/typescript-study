interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('Full time!!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Part time!!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭도 조건을 걸어서 조금 더 제한적인 범위내에서 일반화된 제네릭을 사용 가능✨
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const wani = new FullTimeEmployee();
const hanna = new PartTimeEmployee();

pay(wani);
// pay(123); Error

const obj = {
  name: 'wani',
  age: 20,
};

// 제네릭 조건 예제👍
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // wani
console.log(getValue(obj, 'age')); // 20
