import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegisterUser() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    tipo: 'ST',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/system/user/register/', formData);
      const userA = response.data
      const userT = userA.tipo;

      if (userT === 'ST') {
        navigate('/student', {state: userA});
      } else if (userT === 'TC') {
        navigate('/teacher', {state: userA});
      }else if (userT === 'AD'){
        console.log('Admin', userA)
        navigate('/admin', {state: userA})
      }else{
        navigate('/')
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-md w-full p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-primary-light dark:text-primary-dark">Welcome CoderDojo 📚</h1>
        <h2 className="text-3xl font-bold text-center mb-0">Registrate</h2>
        <p className="text-center text-muted-foreground mb-5">Crea una cuenta como estudiante o docente</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
            className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
          />
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary-light dark:border-secondary-dark rounded-md focus:outline-none focus:border-primary-light dark:focus:border-primary-dark"
          >
            <option value="ST">Estudiante</option>
            <option value="TC">Docente</option>
          </select>
          <button
            type="submit"
            className="w-full bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-2 px-4 rounded-md hover:bg-blue-900"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center mt-4 text-muted-foreground">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-primary-light dark:text-primary-dark">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
    
}


export default RegisterUser;