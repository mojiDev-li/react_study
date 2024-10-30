import './App.css'
import { useState } from 'react'
import Bulb from './components/Bulb'
import Counter from './components/Counter'

// 1. 자신이 관리하는 state값이 바뀔 때
// 2. 자신이 제공받는 props값이 바뀔 떄
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링
// + 버튼을 클릭할 때 -> 자신이 관리하는 state값이 바뀌어 app 컴포넌트가 바뀌고 -> 3번에 의해 Bulb 컴포넌트도 리렌더링됨 (불필요)
// 해서 state값을 각각의 역할에 맞게 분리하는게 중요함
// 더 이쁘게 components로 모듈화 진행


// const Bulb = () => {
//   const [light, setLight] = useState('OFF');
//   console.log(light);

//   return (
//     <div>{light === "ON" ? <h1 style={{backgroundColor: "orange"}}>ON</h1> : <h1 style={{backgroundColor: "grey"}}>OFF</h1>}
//       <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>{light === "ON" ? "끄기" : "켜기"}</button>
//     </div>
//   )
// }

// const Counter = () => {
//   const [count, setCount] = useState(0); // 첫번 째 요소는 새롭게 생성된 state 값 (초기 값), 두번 째 요소는 state값을 변형시키는 함수 (상태변화함수)

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {setCount(count + 1)}}>+</button>
//     </div>
//   )
// }

function App() { // 부모 컴포넌트 (관례는 대부분이 App 컴포넌트를 Root 컴포넌트로 함)

  // 재렌더링 시킴
  // 페이지를 새로고침하면 렌더링되면서 0으로 초기화 되고
  // 버튼을 클릭해 state값을 업데이트하면 App함수가 다시 호출되면서 재렌더링되고 업데이트된 값이 화면에 보이게됨
  // 컴포넌트의 state값이 바뀌면 return을 다시하고 화면을 다시 그리며 그때 반영되는 state값이 바뀌어 반영됨
  // state값이 바뀔 때만 리렌더링 되기 때문에 사용해야 화면에 바로 반영이 가능함 -> let 으로 그냥 설정해서 직접 값을 바꿔줄 수 없는 이유임 !!
  
  return (
    <>
      <Bulb />
      {/* <h1>{light}</h1> */}
      <Counter />
    </>
  )
}


export default App
