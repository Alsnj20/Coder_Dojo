import { useEffect, useState } from "react"
import axios from "axios"
import User from "./User";

function ListUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/system/user/list/');
        setUsers(response.data);

      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ListUsers