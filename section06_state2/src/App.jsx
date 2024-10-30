import './App.css'
import HookExam from './components/HookExam'
import Register from './components/Register'

// 사용자 입력 state 다루기
// useRef는 리렌더링 되지 않음


function App() { // 부모 컴포넌트 (관례는 대부분이 App 컴포넌트를 Root 컴포넌트로 함)

  return (
    <>
      <Register />
      <HookExam />
    </>
  )
}


export default App
