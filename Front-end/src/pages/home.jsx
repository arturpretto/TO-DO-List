import { Route, Routes } from 'react-router-dom'
import Signup from '../components/sign'
import Login from '../components/login'
import Tasks from '../components/tasks'

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
