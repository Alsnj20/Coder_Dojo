import React, { useState } from 'react';
import axios from 'axios';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/system/user/login/', formData);
      //Data de la respuesta
      console.log(response.data.user.tipo);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setUser(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <h1 className='text-3xl font-bold text-center mb-2 text-blue-800'>Welcome CoderDojo 📚</h1>
        <h2 className="text-3xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-900"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
