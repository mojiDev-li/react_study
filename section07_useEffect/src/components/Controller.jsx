// 파라미터를 넘길수 없어서 화살표함수로 핸들러를 만든거임

const Controller = ({onClickButton}) => {
  return(
    <div>
      <button onClick={() => onClickButton(-1)}>-1</button>
      <button onClick={() => onClickButton(-10)}>-10</button>
      <button onClick={() => onClickButton(-100)}>-100</button>
      <button onClick={() => onClickButton(+100)}>+100</button>
      <button onClick={() => onClickButton(+10)}>+10</button>
      <button onClick={() => onClickButton(+1)}>+1</button>
    </div>
  )
}

export default Controller;