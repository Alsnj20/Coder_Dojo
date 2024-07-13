import axios from 'axios'
//Home
import HomeAdmin from './pages/HomeAdmin'
import HomeTeacher from './components/HomeTeacher'
import HomeStudent from './components/HomeStudent'
import ListUsers from './components/ListUsers'
//Register
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './designUI/Admin/Admin'
import Home from './designUI/Home/Home'
function App() {
  return (
    <Admin/>
  )
}

export default App
