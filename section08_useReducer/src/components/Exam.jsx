import { useReducer } from "react";

// 변환기
// 상태를 직접 변화
// 현재 상태의 값과, 어떤값으로 변화되길 기록되어있는 액션객체를 인자로 받음
// 값을 반환 해주면 useReducer가 state값을 알아서 바꿔줌
function reducer(state, action) {
  switch(action.type){
    case "INCREASE" : return state + action.data;
    case "DECREASE" : return state - action.data;
    default : state;
  }
}

const Exam = () => {

  // 상태변화를 요청하기만 하는 dispatch 함수 
  // -> dispath는 상태변화가 있어야한다는 사실을 알리는 함수
  // 그사실을 알고 처리하는 함수가 useReducer안에 넘어가는 함수 -> state값을 직접 변화시키는 변환기
  // 두번 째 인자는 초기값을 지정할 수 있음
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {

    // 인자로는 상태가 어떻게 변화되길 원하는지
    // 인자는 액션 객체라고 부름
    dispatch({
      type: "INCREASE",
      data: 1
    });
    // type은 값을 증가시켜달라고 요청했고 데이터는 1만큼 증가되길 요청함

  }

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1
    })
  }


  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam;