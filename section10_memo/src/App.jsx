import { useCallback, useReducer, useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'


/*
최적화를 언제하면 좋은가 ? 하나의 프로젝트를 거의 완성하고 나서 
기능 구현이 우선이 되어야하고 이후에 최적화를 하는게 일반적

대상은 ? 모든 것에 최적화를 적용하면 안되고 꼭 최적화 되어야하는 연산 메서드 컴포넌트에 해야함

헤더와 같은건 메모이제이션 최적화를 했지 -> 얘도 최적화를 위한 연산이 필요함 -> 이 연산보다 리렌더링 하는게 더 나을 수도 있음
투두 아이템 컴포넌트처럼 개수가 많아지는 컴포넌트라던가, 함수가 많아서 무거운 컴포넌트 이던가에 사용

*/

// 재렌더링 되지 않아도 되어서
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  }
]

const reduce = (state, action) => {
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo)
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const[todos, dispatch] = useReducer(reduce, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  },[])

  // 재생성되지 않도록 하기 위한 함수를 넘겨줌
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  },[])
  // 마운트 될 때 func를 한번 생성함 -> 빈배열일때 
  // 마운트 될 때 onDelete가 한번 생성되고 리렌더링 되도 새로 안만들어짐

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
