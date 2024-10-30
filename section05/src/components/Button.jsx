const Button = ({text, color, children}) => {
  return(
    <button style={{color: color}}>
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