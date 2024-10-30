import { useMemo, useState } from "react";
import "./List.css"
import TodoItem from "./TodoItem";

const List = ({todos, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === ""){
      return todos;
    }

    return todos.filter((todo) => { return todo.content.toLowerCase().includes(search.toLowerCase())});
  }

  const filteredTodos = getFilteredData();


  // 리렌더링 될 때마다 실행될 필요가 없음 search에 검색하거나 그럴떄
  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }

  // 두번째는 deps -> 의존성 배열 -> useEffect의 그거
  // deps에 포함된 값이 변경될 때 콜백함수를 재 실행
  // 콜백함수가 반환하는 값을 useMemo가 그대로 반환
  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log('getAnalyzedData !!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos])
  // deps가 비어있을 때 -> 컴포넌트가 최초 렌더링 될 때 한번만 실행
  // 비어있게 되면 안에서 활용하는 todos 데이터가 반영되지 않는다는 경고
  // 투두 데이터 추가할 시에 새로 실행하게 하려면 -> 빈배열안에 todos를 넣어주면됨

  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();


  return(
    <div className="List">
      <h4>Todo List 🎃</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch}/>
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  )
}

export default List;