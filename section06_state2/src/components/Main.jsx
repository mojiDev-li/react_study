import "./Main.css"; // 이렇게 from없이 이렇게 경로만 불러와도 자동으로 적용해줌

// JSX의 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
// 3항연산자, 값, 변수의 이름 처럼 특정한 값으로 표현되는 애들
// if문이나, for문을 사용할 수 없음
// 2. 숫자, 문자열, 배열의 값만 렌더링된다.
// 객체도 객체 자체를 출력할 수 없고 프로퍼티를 출력할 수 있음
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const user = {
    name: '홍길동',
    isLogin: true
  }

  if(user.isLogin){
    return <div className="logout">로그아웃</div>
  }else{
    return <div>로그인</div>
  }
  
  // return(
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // )
}

export default Main;