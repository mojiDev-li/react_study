// 이벤트 핸들러에서는 함수의 이름만 전달하는 거임 !


const Button = ({text, color, children}) => {

  // 이벤트 객체 = 이벤트 핸들러로 넘어가는 e 파라미터
  const onClickButton = (e) => { // 이벤트 핸들러
    console.log(e);
    console.log(text);
  }

  return(
    <button onClick={onClickButton} style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

// props를 다룰 때 넘어오지 않는 값들이 있을 수 있는데 넘어오지 않는 값들의 기본값을 설정하는 방법임
Button.defaultProps = {
  color: "black"
}

export default Button;