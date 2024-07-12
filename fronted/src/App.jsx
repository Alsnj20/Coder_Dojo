import axios from 'axios'
//Home
import Home from './pages/Home'
import HomeAdmin from './pages/HomeAdmin'
import HomeTeacher from './components/HomeTeacher'
import HomeStudent from './components/HomeStudent'
import ListUsers from './components/ListUsers'
//Register
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/teacher" element={<HomeTeacher />} />
        <Route path="/student" element={<ListUsers />} />
        <Route path="/student" element={<HomeStudent />} />
      </Routes>
    </Router>
  )
}

export default App
