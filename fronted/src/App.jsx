import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Home
import Home from './designUI/Home/Home'
//Register and Login
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'
//Admin
import Admin from './designUI/Admin/Admin'
import AccessDenied from './components/AccessDenied'
import Teacher from './designUI/Teacher/Teacher'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register/" element={<RegisterUser />} />
        <Route path="login/" element={<LoginUser />} />
        <Route path="admin/*" element={<Admin />}/>
        <Route path="teacher/" element={<Teacher />} />
        <Route path="access-denied/" element={<AccessDenied />} />
      </Routes>
    </Router>
  )
}

export default App
