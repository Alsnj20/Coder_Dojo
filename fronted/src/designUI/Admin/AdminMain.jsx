import { useEffect, useState } from "react";
import AdminUsersCard from "./AdminUsersCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AdminMain({ user }) {
  const navigate = useNavigate();

  const handleGetUsers = async () => {
    const token = localStorage.getItem('access_token');
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
        navigate('/admin/users', { state: { users } });
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        navigate('/admin');
      }
    }
  };


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
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Ver Usuarios
              </button>
            <Link to='users/create/'>
              <button
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Crear Usuario
              </button>
            </Link>
          </AdminUsersCard>
          <AdminUsersCard title="Usuarios" info={'Agrega, edita y elimina cursos de la plataforma.'}>
              <button onClick={handleGetUsers}
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Ver Cursos
              </button>
            <Link to='courses/create/'>
              <button
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
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