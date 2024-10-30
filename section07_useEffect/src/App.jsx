import { useEffect, useRef, useState } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even';


// state lifing을 통해 공통 컴포넌트에서 데이터를 내려주는 구조로 한거임

// 라이프 사이클
// 1. 마운트
// 2. 업데이트
// 3. 언마운트
// useEffect로 제어 가능

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  const isMount = useRef(false);

  // 배열에 의존
  // 의존성 배열이라고 부름 = deps
  // useEffect(() => {
  //   console.log(`count : ${count} / input : ${input}`);
  // }, [count, input]) // 배열에 들어가 있는 값이 바뀌면 sideEffect로써 콜백함수를 실행

  // 1. 마운트
  useEffect(() => {
    console.log('마운트');
  }, []); // 이렇게 빈배열을 넘겨줘야함

  // 2. 업데이트
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('업데이트');
  }); // deps를 생략하면, mount될때 한 번 실행되고 리렌더링 될 때마다 실행됨
  // 이렇게 useRef로 컴포넌트가 마운트 되었는지를 제어하면, 마운트 될 때 실행되지 않도록 제어할 수 있음

  // 3. 언마운트
  

  // 값 변경에 어떤 이벤트를 쓰고 싶다면 함수로 제어하면 되지 않나?
  // useState안의 set.. 함수는 비동기로 동작하기 때문에 -> state값을 동기적으로 사용이 불가하기 때문에 안됨
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
