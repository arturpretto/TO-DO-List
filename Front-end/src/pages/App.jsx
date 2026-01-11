import { Route, Routes } from 'react-router-dom'
import Signup from './Sign-up.jsx'
import Todo from './Todo.jsx'
import Login from './log-in.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tasks' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
