// 구조 분해 할당

// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// let [one, two, three] = arr; // 배열의 원소들이 각각 할당됨
// console.log(one, two, three);

// let [one, two] = arr; // 이렇게 배열의 개수보다 적게 선언하는 게 가능
// console.log(one, two); // 1 2

// let [one, two, three, four] = arr; // 이렇게 배열의 개수보다 많이 선언 할 수 있음
// console.log(one, two, three, four); // 1 2 3 undefined

// let [one, two, three, four = 4] = arr; // 이렇게 원소 값이 없을 경우를 대비해 default값을 줄 수 있음
// console.log(one, two, three, four); // 1 2 3 4


// 2. 객체의 구조 분해 할당
let person = {
  name: '길동',
  age: 25,
  hobby: '테니스'
}

// let {name, age, hobby} = person; // key 값을 기준으로 분해 할당 할 수 있음
// console.log(name, age, hobby); // 길동 25 테니스

// let {name, age, hobby, extra} = person; // 배열의 구조분해할당 처럼 없는 프로퍼티도 가능함
// console.log(name, age, hobby, extra); // 길동 25 테니스 undefined

// let {name, age, hobby, extra = "후하요"} = person; // 없는 프로퍼티를 대신할 default값을 지정해 할당이 가능
// console.log(name, age, hobby, extra); // 길동 25 테니스 후하요

// let {name, age: myAge, hobby, extra = "후하요"} = person; // 이렇게 프로퍼티를 할당 받을 때 이름을 바꿀 수 있음
// console.log(name, myAge, hobby, extra); // 길동 25 테니스 후하요


// 3. 객체의 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
// 이건 객체만 가능
const funcA = ({name, age, hobby}) => {
  console.log(name, age, hobby);
}

funcA(person);

