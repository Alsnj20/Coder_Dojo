import { useEffect, useState } from "react";
import AdminUsersCard from "./AdminUsersCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../components/useContext";
function AdminMain() {
  const user = useUser().user;
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);


  const navigate = useNavigate();

  const handleGetUsers = async () => {
    const token = localStorage.getItem('access_token');
    console.log(user);
    if (user.tipo !== 'AD') {
      navigate('access-denied/');
    } else {
      try {
        const response = await axios.get('http://localhost:8000/system/user/list/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const users = response.data;
        setUsers(users);
        navigate('/admin/users', { state: { users } });
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        navigate('/admin');
      }
    }
  };

  const handleGetCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/system/course/list/')
      const courses = response.data;
      console.log(courses);
      setCourses(courses);
      navigate('/admin/courses', { state: { courses, users } });
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
      navigate('/admin');
    }
  }

  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <p className="text-gray-500">Bienvenido, Admin.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-2xl font-bold col-span-full">Administrar Usuarios</h2>

            <AdminUsersCard title="Usuarios" info={'Agrega, edita y elimina usuarios de la plataforma.'}>
              <button onClick={handleGetUsers}
                className="inline-flex items-center gap-2 
                bg-primary-light dark:bg-primary-dark
                text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Ver Usuarios
              </button>
            </AdminUsersCard>
            <AdminUsersCard title="Cursos" info={'Agrega, edita y elimina cursos de la plataforma.'}>
              <button onClick={handleGetCourses}
                className="inline-flex items-center gap-2
                bg-primary-light dark:bg-primary-dark
                text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Ver Cursos
              </button>
              <Link to='courses/create/'>
                <button
                  className="inline-flex items-center gap-2 bg-primary-light dark:bg-primary-dark  text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
                >
                  Crear Curso
                </button>
              </Link>
            </AdminUsersCard>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AdminMain;