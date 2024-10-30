// 1. Spread 연산자
// -> 흩뿌리다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,...arr1, 5,6];

let obj1 = {
  a: 1,
  b: 2,
}

let obj2 = {
  ...obj1,
  c: 3,
  d: 4
}
// console.log(obj2) // {a:1, b:2, c:3, d: 4}

function funcA(p1, p2, p3){
  console.log(p1, p2, p3);
}

funcA(...arr1); // 풀어헤쳐서 전달가능

// 2. Rest 매개변수
// 나머지 매개변수

function funcB(one,two,...rest){
  console.log(rest);
}

funcB(...arr1);

// 이렇게 ...으로 넘겨줘야 받을 수 있음.
