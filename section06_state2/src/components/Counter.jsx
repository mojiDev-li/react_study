import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // 첫번 째 요소는 새롭게 생성된 state 값 (초기 값), 두번 째 요소는 state값을 변형시키는 함수 (상태변화함수)

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}

export default Counter;