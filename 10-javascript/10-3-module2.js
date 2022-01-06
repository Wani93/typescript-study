/**
 * 모듈화를 이용하면 파일들간의 중복적으로 발생할 수 있는 이름 충돌을 방지
 * 코드를 분리하여 모듈성이 높아짐
 * 모듈간의 재사용성도 높아짐
 */
import * as calculator from './10-3-module1.js';

console.log(calculator.add(1,3));
calculator.print();
calculator.number;