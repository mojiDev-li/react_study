// filter
// 조건을 만족하는 요소들만 필터링하여 배열로 반환
let arr1 = [
  {name: '홍길동', hobby:'테니스'},
  {name: '유재석', hobby:'운동'},
  {name: '아이유', hobby:'테니스'}
]
const tennisPeople = arr1.filter((item) => {
  if(item.hobby === '테니스') return true;
})

console.log(tennisPeople);

// map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
// 원본 배열을 변형한 새로운 배열을 만들 수 있음
let arr2 = [1,2,3]
const mapResult1 = arr2.map((item, idx, arr2) => {
  return item * 2;
})
console.log(mapResult1);

let names = arr1.map((item) => {
  return item.name
});
console.log(names);

console.clear()

// sort
// 문자열일 때는 잘 동작하지만
// 안에 숫자가 있다면 정렬이 정상적으로 안됨 -> 배열을 사전순으로 정렬해서 그럼

let arr3 = ['b', 'a', 'c']
arr3.sort()
console.log(arr3);

// 숫자를 정렬할 때는 이렇게 콜백함수를 넘겨서 해야함
let arr3_2 = [10, 3, 4]
arr3_2.sort((a, b) => {
  if(a > b){
    // b가 a앞에 와라
    return 1;
  }else if(a < b){
    // a가 b앞에 와라
    return -1;
  }else{
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
})
console.log(arr3_2);

// toSorted
// 원본 배열은 바꾸지 않고 새로운 정렬된 배열을 반환
let arr5 = ['c','b','a']
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted)


// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 인수로 구분자를 넣어 합칠 수 있음
let arr6 = ['hi','itm'];
const joined = arr6.join('');
console.log(joined)