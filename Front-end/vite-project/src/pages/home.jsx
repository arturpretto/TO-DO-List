import { Route, Routes } from 'react-router-dom'
import Signup from '../components/sign'
import Auth from '../components/auth'
import Login from '../components/login'

function Home() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Home
