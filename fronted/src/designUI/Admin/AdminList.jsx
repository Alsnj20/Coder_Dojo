import { Link, useLocation } from 'react-router-dom';
import Card from './Utilities/';
import { useState } from 'react';
import axios from 'axios';

function AdminList() {
  const location = useLocation();
  const [users, setUsers] = useState(location.state.users);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', password: '' });
  const [showForm, setShowForm] = useState(false);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, role: user.tipo, password: '' }); // Resetea la contraseña
    setShowForm(true); // Muestra el formulario al editar
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/system/user/${userId}/`);
      // Actualiza la lista de usuarios después de eliminar
      location.state.users = users.filter(user => user.id !== userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/system/user/${editingUser.id}/`, formData);
      const updatedUser = response.data;
      // Actualiza la lista de usuarios
      const updatedUsers = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      location.state.users = updatedUsers;
      setEditingUser(null);
      setShowForm(false); // Oculta el formulario después de guardar
    } catch (error) {
      console.error('Error al editar el usuario:', error);
    }
  };

  return (
    <section className="container mx-auto py-12 px-6">
      <div className="space-y-4">
        <Link className='border-spacing-1 hover:border-b-black' to='/admin'>
          <i className='bx bx-arrow-back'></i> Regresar
        </Link>
        <h2 className="text-2xl font-bold">Lista de Usuarios</h2>

        {showForm && (
          <div className='shadow-md p-3 rounded-md dark:bg-menu-dark md:w-[60vw]'>
            <h3 className="text-lg font-semibold">Editar Usuario</h3>
            <form onSubmit={handleSubmitEdit} className="mb-4 grid md:grid-cols-4 gap-3">
              <label htmlFor="name">Nombre</label>
              <input
                className='bg-menu-light py-1 px-2 rounded-2xl'
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nombre"
                required
              />
              <label htmlFor="email">Correo</label>
              <input
                className='bg-menu-light py-1 px-2 rounded-2xl'
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Correo"
                required
              />
              <label htmlFor="role">Rol</label>
              <select
                className='bg-menu-light py-1 px-2 rounded-2xl'
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              >
                <option className="pr-2 px-2 rounded-2xl'" value="AD">Admin</option>
                <option value="TC">Profesor</option>
                <option value="ST">Estudiante</option>
              </select>
              <label htmlFor="password">Contraseña</label>
              <input
                className='bg-menu-light py-1 px-2 rounded-2xl'
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Contraseña (dejar vacío si no se cambia)"
              />
              <div className='flex flex-col md:flex-row gap-2'>
                <button className="bg-primary-light rounded-lg p-2 text-text-light" type="submit">Guardar</button>
                <button
                  type="button"
                  className="bg-primary-light rounded-lg p-2 text-text-light"
                  onClick={() => {
                    setFormData({ name: '', email: '', role: '', password: '' });
                    setEditingUser(null);
                    setShowForm(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {users.length === 0 ? (
          <p className="text-gray-500">No hay usuarios disponibles.</p>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className='hover:bg-gray-50'>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">Nombre</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">Correo</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">Rol</th>
                    <th className="py-3 px-4 text-left text-gray-500 font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody className='text-text-dark'>
                  {users.map(user => (
                    <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.tipo}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <button className="hover:text-blue-500" onClick={() => handleEditClick(user)}>
                            <i className="bx bx-edit"></i>
                          </button>
                          <button className="hover:text-red-500" onClick={() => handleDelete(user.id)}>
                            <i className="bx bx-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

export default AdminList;