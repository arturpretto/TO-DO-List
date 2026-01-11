import { Route, Routes } from 'react-router-dom'
import Signup from './sign'
import Login from './login'
import Tasks from './tasks'

function Home() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </>
  )
}

export default Home
