// for of 반복문 -> 배열만을 위한 특수한 반복문
let arr = [1,2,3,4,5,6];

for(let item of arr){
  console.log(item);
}


// 객체 순회
let person = {
  name: '홍길동',
  age: 24
}

// Object.keys
// -> 주어진 객체에서 key만 뽑아 배열로 반환
let keys = Object.keys(person);
for(let key of keys){
  console.log(key, person[key]);
}

// Object.values
// 객체에서 value만 뽑아 배열로 반환
let values = Object.values(person);
for(let value of values){
  console.log(value);
}

// for in -> 객체 만을 위한 특수한 반복문
// key값을 가져옴
for(let key in person){
  console.log(key);
  console.log(person[key]); 
}


// forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
  console.log(idx, item * 2);
});
// 0 2 , 1 4 , 2 6

console.clear();

let doubleArr = []
arr1.forEach((item) => doubleArr.push(item * 2));
console.log(doubleArr);
console.clear();

// includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let result = arr2.includes(3);
console.log(result);

// indexOf
// 특정 요소의 인텍스를 찾아 반환
// 여러개 있다면 가장 처음으로 찾은 값의 인덱스 반환
// 존재하지 않은 값을 찾으라고 하면 -1 반환
// 얕은 비교로 동작해서 -> 객체값이 있다면 배열안에. 프로퍼티 기준으로 찾을 수 없음
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index);


// findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스를 반환하는 메서드
// 처음으로 만족하는 값의 인덱스를 리턴
// 없다면 -1 반환
// 객체 타입이 배열에 있을 때 유용함
let arr4 = [1,2,3];
let findedResult = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedResult);

let objectArr = [
  {name: '홍길동'},
  {name: '아이유'}
]
console.log(objectArr.findIndex(item => item.name === '홍길동'));


// find
// findIndex와 유사함
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
  {name: '홍길동'},
  {name: '아이유'}
];

const finded = arr5.find(item => item.name === '아이유');
console.log(finded);