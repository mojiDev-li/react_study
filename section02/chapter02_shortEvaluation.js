// 단락 평가 
// 조거문에 앞의 결과만으로 평가를 하는 것.
// 활용사례
function printName(person){
  console.log(person && person.name);
}

printName();
// 이렇게 해서 객체가 없어도 오류를 제어할 수 있음

function print(person){
  let name = person && person.name;
  console.log(name || 'person의 값이 없습니다.');
}

print(); 
print({name: '뽀찌'});
/*
이게 가능한 이유는 첫번째 함수 호출에서는 person의 객체가 undefined이기 떄문에
name변수에 값이 할당 될 때 person에서 Falsy 값을 반환해 undefined가 할당되고
console.log에서는 name이 falsy하기 때문에 or 연산자로 인해 뒤에 있는 문자열 값이 출력되게 됨

두번 째에서는 person객체가 truthy하기 때문에 person.name까지 도달하여 name값이 할당되고
console.log에서는 name이 truthy하기 떄문에 or연산자로 뒤에 까지 도달하지 못하고 앞에서 끝나서 name이 출력됨
 */