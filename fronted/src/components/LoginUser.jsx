import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  console.log(history);

  const [userType, setUserType] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/system/user/login/', formData);
      const userT = response.data.user.tipo;
      setUserType(userT);

      if (userT === 'ST') {
        navigate('/student');
      } else if (userT === 'PR') {
        navigate('/teacher');
      }else{
        navigate('/home')
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setUserType(null);
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
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-900"
          >
            Iniciar sesión
          </button>
        </form>
        <p className='text-center mt-4'>
          ¿No tienes una cuenta? <Link to="/">Registrarse</Link>
        </p>
        <p className='text-center mt-4 text-green-500'>
          {userType === 'ST' ? 'Estudiante' : userType === 'PR' ? 'Profesor' : 'Acceso denegado'}
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
