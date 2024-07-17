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
import { UserProvider } from './components/useContext'
import PrivateRoute from './components/PrivateRoute'
import Student from './designUI/Student/Student'
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/" element={<RegisterUser />} />
          <Route path="login/" element={<LoginUser />} />
          <Route path="access-denied/" element={<AccessDenied />} />

          <Route element={<PrivateRoute allowedRoles={['AD']} />}>
            <Route path="admin/*" element={<Admin />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={['TC']} />}>
            <Route path="teacher/*" element={<Teacher />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={['ST']} />}>
            <Route path="student/*" element={<Student/>} />
          </Route>
    
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
