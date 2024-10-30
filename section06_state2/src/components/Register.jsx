// 회원 가입 폼
// 이름 , 생년월일, 국적, 자기소개

// 비슷한 state구조를 객체로 묶음

import { useRef, useState } from "react";

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });

  // 얘는 값이 변경되었다고 해서 컴포넌트를 리렌더링하지 않음
  // 컴포넌트 내부에서 렌더링에 영향을 미치지 않은 것에 사용해야함
  // 그냥 변수 만들면 되는데? 왜 ref를 써야하나?? -> 값이 변하게 된다면 리렌더링이 일어나게 되고 해당 변수는 다시 초기화 되는것임 -> useState, useRef같은 경우 컴포넌트가 리렌더링되어도 초기화 되지 않아서 사용해야함!!!!
  const countRef = useRef(0); // reference 객체 current값에 값을 담아두기만 함 -> 초기 값주면 current값에 담김
  const inputRef = useRef(); // DOM요소에 접근이 가능함


  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if(input.name === ""){
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} placeholder={"이름"} onChange={onChange} />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange}/>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;