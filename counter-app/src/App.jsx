import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'


// state lifing을 통해 공통 컴포넌트에서 데이터를 내려주는 구조로 한거임

function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
