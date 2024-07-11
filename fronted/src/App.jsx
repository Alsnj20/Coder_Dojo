import { useState, useEffect } from 'react'
import axiosInstance from './axiosConfig'
import './App.css'

function App() {
  const[users, setUsers] = useState([])

  useEffect(() => {
    axiosInstance.get('users/')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log('Error fetch',error)
      })
  }, [])

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <ul>
        {users.map(usuario => (
          <li key={usuario.id}>{usuario.name} ({usuario.email})</li>
        ))}
      </ul>
    </div>
  );  
}

export default App
