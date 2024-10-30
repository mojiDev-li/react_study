import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

// useMemo : 불필요한 연산을 하지 않도록 해주는 리액트 훅
// 반복적으로 수행되는 동일한 연산을 메모리에 저장해두고 연산이 필요해지면 결과 값을 돌려주는 기법
// 메모이제이션 기법임
// 최초 연산 이후에는 똑같은 연산을 하지 않아 프로프래밍 성능에 좋음
// 

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos State의 값들 중 일치하는 아이템의 isDone 변경
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
