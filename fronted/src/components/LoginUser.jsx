import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginUser(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userType, setUserType] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/system/user/login/', { email, password });
      const access = response.data.access_token;
      const refresh = response.data.refresh_token;
      const user = response.data.user;
      const userT = user.tipo;
      setUserType(userT);
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      if (userT === 'ST') {
        navigate('/student', { state: user });
      } else if (userT === 'TC') {
        navigate('/teacher', { state: user });
      } else if (userT === 'AD') {
        console.log('Admin', user);
        navigate('/admin', { state: user });
      } else {
        setUserType(null);
        navigate('/');
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setUserType(null);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-md w-full p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-primary-light dark:text-primary-dark">Welcome CoderDojo 📚</h1>
        <h2 className="text-3xl font-bold text-center mb-0.5 text-primary-light dark:text-primary-dark">Iniciar Sesión</h2>
        <p className="text-center text-muted-foreground mb-5">
          Ingresa tus credenciales para acceder a Coder Dojo
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
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
              className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-2 px-4 rounded-md hover:bg-blue-900"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-center mt-4 text-muted-foreground">
          ¿No tienes una cuenta? <Link to="/register" className="text-primary-light dark:text-primary-dark">Registrarse</Link>
        </p>
        <p className="text-center mt-4 text-green-500">
          {userType === 'ST' ? 'Estudiante' : userType === 'PR' ? 'Profesor' : 'Acceso denegado'}
        </p>
      </div>
    </div>
  );
}

export default LoginUser;
