import { useRef, useState, useContext } from "react"
import "./Editor.css"
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const {onCreate} = useContext(TodoDispatchContext); // useContext는 인수로 전달한 컨텍스트로부터 공급된 데이터를 반환해주는 함수
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content);

    setContent("");
  }


  return(
    <div className="Editor">
      <input ref={contentRef} value={content} placeholder="새로운 Todo..." onChange={onChangeContent} onKeyDown={onKeyDown}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;