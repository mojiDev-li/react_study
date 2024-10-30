import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

// 함수 컴포넌트 -> 화살표 함수로도 만들 수 있음
// 클래스 컴포넌트 -> 직접 작성해야하는 코드의 양이 어마어마해짐 -> 함수 컴포넌트를 사용
// 함수의 이름은 반드시 첫글자는 대문자여야함 -> 자동으로 컴포넌트로 인식되게 하려면
// 보통은 모듈화를 위해서 컴포넌트별로 파일을 나눠서 작성하는게 일반적
// function Header(){ // 자식 컴포넌트
//   return(
//     <header>
//       <h1>Header</h1>
//     </header>
//   )
// }

function App() { // 부모 컴포넌트 (관례는 대부분이 App 컴포넌트를 Root 컴포넌트로 함)

  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3
  }

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} >
        <Header />
      </Button>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  )
}

// 자식 컴포넌트를 넘길 수 있음 -> children props로 넘어감 -> 부모 컴포넌트에서는 children으로 받을 수 있음
// props는 자식 컴포넌트에서 부모 컴포넌트로 값 전달 하는건 불가능
// 오직 부모 컴포넌트에서 자식 컴포넌트로 값 전달 하는것만 가능
export default App
