import { memo } from "react";
import "./Header.css"

const Header = () => {
  return(
    <div className="Header">
      <h3>오늘은 🗓</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
};

// 인수로 받은 컴포넌트를 props가 변하지 않을 때 렌더링되지 않도록 최적화 할 수 있음
// 자신이 받는 props가 바뀌지 않으면 렌더링되지 않음
export default memo(Header);