import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import New from './pages/New'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'


// 1. "/" : 모든 일기 조회 Home
// 2. "/new" : 일기 작성 new
// 3. "/diary" : 일기 상세 조회 diary

function App() {

  // 이렇게 하면 switch case 처럼 위에서 부터 아래로 내려가며 path를 찾음
  // 마지막에 와일드 카드는 매핑되지 않은 모든 url에 대한 응답 페이지를 하기 위함임
  // Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있음
  // Routes 컴포넌트 밖에있는 컴포넌트들은 모든 페이지에서 렌더링됨
  // Router 이동은 Link 컴포넌트로 함
  // 버튼으로 페이지 이동시킬때 useNavigate훅 사용
  const nav = useNavigate();
  const onClick = () => {
    nav('/new')
  }

  // 동적 라우팅
  //  <Route path="/diary/:id" element={<Diary></Diary>} /> 이렇게 콜론으로 해줌
  
  return (
    <div>
      <Button />
      
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/new" element={<New></New>} />
        <Route path="/diary/:id" element={<Diary></Diary>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
