// 1. Falsy 한 값 (7개)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 값을 저장할 때 사용하는 것.

// if(!f7){
//   console.log('falsy');
// }

// falsy 한 값으로 조건문에서 거짓으로 판단

// 2. Truthy 한 값
// -> 7가지의 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if(t5){
//   console.log('truthy');
// }

// 3. 어떤 상황에 활용할 수 있나
function printName(person){
  // if(person === undefined) {
  //   console.log('person의 값이 없음');
  //   return;
  // }
  if(!person){
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
} 

let person = null;
// person = undefined;
printName(person);
// undefined 값을 매개변수로 담겨버리면 오류
// 물론 if 문으로 undefined를 걸어주면 가능하지만, 또 다른 falsy한 값이 발생한다면?
// if문을 계속 늘려야됨.
// 해당 방법이 비효율적이기 때문에 truthy와 falsy의 특징을 이용해 조건문을 개선 시킬 수 있음
