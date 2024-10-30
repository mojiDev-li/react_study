import { memo } from "react";
import "./TodoItem.css"


const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeletButton = () => {
    onDelete(id)
  }
  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">
        {content}
      </div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeletButton}>삭제</button>
    </div>
  )
}

export default memo(TodoItem)

// 이렇게 할 경우 적용되지 않음
// App 컴포넌트가 리렌더링되면서 여기에 전해지는 함수는 객체여서 얕은 비교를 하기 떄문에 
// 객체 타입을 받는 컴포넌트의 경우 memo만 적용할 수 없음
// 1. 앱 컴포넌트에서 여기에 전해지는 함수들을 메모이제이션해야함.
// 2. 두번 째 인수로 콜백함수로 전해서 최적화 기능을 커스터마이징
// 이런걸 고차 컴포넌트 라고 부름 -> memo말고도 커스텀 해서 만들 수 있음
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 콜백함수를 기반으로 판단
//   // 반환값에 따라 true면 바뀌지 않음으로 판단 -> 리렌더링 X
//   // false면 바뀜으로 판단 -> 리렌더링

//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;

// });