import { useContext, useState } from "react";
import "./List.css"
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {

  const todos = useContext(TodoStateContext);
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

  return(
    <div className="List">
      <h4>Todo List 🎃</h4>
      <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch}/>
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} />
        })}
      </div>
    </div>
  )
}

export default List;