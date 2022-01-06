console.log(this);

function simpleFunc() {
    console.log(this);
}

window.simpleFunc();

class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    }
    // arrow function을 이용한다면 따로 바인딩을 하지 않아도 선언 시점의 this로 인식하게 됨.
}

const counter = new Counter();
counter.increase();

// const caller = counter.increase;
const caller = counter.increase.bind(counter); // 이렇게 bind 해주면 this는 counter가 됨.
caller(); // window 전역 객체에 함수 등록 되어있음
console.log(window.counter); // 하지만 const, let 키워드로 선언된 변수는 window 객체에 등록되지 않음! 단, var는 window 객체에 등록됨.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();  // Bob
