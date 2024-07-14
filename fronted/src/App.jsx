import axios from 'axios'
//Home
import HomeTeacher from './components/HomeTeacher'
import HomeStudent from './components/HomeStudent'
import ListUsers from './components/ListUsers'
//Register
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './designUI/Admin/Admin'
import Home from './designUI/Home/Home'
import AccessDenied from './components/AccessDenied'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register/" element={<RegisterUser />} />
        <Route path="login/" element={<LoginUser />} />
        <Route path="admin/" element={<Admin />} />
        <Route path="teacher/" element={<HomeTeacher />} />
        <Route path="list/" element={<ListUsers />} />
        <Route path="student/" element={<HomeStudent />} />
        <Route path="access-denied/" element={<AccessDenied />} />
      </Routes>
    </Router>
  )
}

export default App
