import { createContext, useCallback, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

/*
Context 
context는 컴포넌트 외부에서 선언함 보통 -> 리렌더링 될 때마다 새로운 컨텍스트를 생성하게 될 것이기 때문에 외부에 생성

provider 프로퍼티 : 컨텍스트가 공급할 데이터를 설정하거나, 공급 받을 컴포넌트를 설정

memo를 적용해도 리렌더링이 됨 -> 부모 컨텍스트 컴포넌트가 재렌더링 되기 떄문임
-> 변경 될 수 있는 값과 변경되지 않는 값을 나눠서 컨텍스트를 생성하면서 해결이 가능함

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  // 컴포넌트가 재렌더링 될 때 함수들이 새로 만들어지면서, 필요 없는 부분까지도 전부 재렌더링 될 텐데
  // 우리가 원하는건 컨텍스트를 분리하면서까지 변하지 않은 부분은 재렌더링 되지 않도록 하는거였음
  // 따라서 해당 메서드들은 useMemo를 통해 메모이제이션해서 재생성되지 않도록했고
  // 첫 마운트 시에만 생성이 되며 컴포넌트가 재렌더링 되어도 재생성되지 않아 자식 컴포넌트의 memo를 활용할 수 있음
  const memoizedDispatch = useMemo(()=>{return {onCreate, onDelete, onUpdate}}, []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}
// 프로바이더 컴포넌트의 자식 컴포넌트들은 value로 제공한 데이터, 함수를 사용할 수 있음
export default App
