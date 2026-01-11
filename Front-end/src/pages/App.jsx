import { Route, Routes } from 'react-router-dom'
import Todo from './todo.jsx'
import Login from './log-in.jsx'
import Signup from './sign-up.jsx'

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
