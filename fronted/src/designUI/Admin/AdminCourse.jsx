import Card from './Utilities/';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function AdminCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [teacher, setTeacher] = useState('');
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const response = await axios.get('https://coderdojo-backend.vercel.app/system/teacher/list/');
        setTeachers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTeachers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://coderdojo-backend.vercel.app/system/course/create/', {
        nombre: title,
        descripcion: description,
        docente: teacher
      });
      if (response.status === 201) {
        alert('Curso creado correctamente');
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.non_field_errors[0]);
      } else {
        alert('Error al crear el curso');
      }
    }
  }
  return (
    <section className="container mx-auto py-12 px-6">
      <Link className='border-spacing-1 hover:border-b-black' to='/admin'>
        <i className='bx bx-arrow-back'></i> Regresar
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Agregar Curso</h1>
          </div>
          <p className="text-muted-foreground dark:text-text-light">
            Llenar el formulario para agregar un nuevo curso a tu plataforma Coder Dojo.
          </p>

          <div className='shadow-md p-3 rounded-md dark:bg-menu-dark md:w-[50vw]'>
            <div className="grid gap-3 mb-4">
              <label htmlFor="title" className='block text-sm font-medium dark:text-text-light'>Titulo</label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ingrese el título del curso"
                className="bg-menu-light dark:text-menu-dark  py-1 px-2 rounded-2xl"
                required
              />
            </div>
            <div className="grid gap-3 mb-4">
              <label htmlFor="description" className='block text-sm font-medium dark:text-text-light
              '>Descripción</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ingrese la descripción del curso"
                rows={3}
                className="bg-menu-light py-1 px-2 rounded-2xl dark:text-menu-dark"
                required
              />
            </div>
            <div className="grid gap-3 mb-4">
              <label htmlFor="teacher" className='block text-sm font-medium dark:text-text-light'>Profesor</label>
              <select
                id="teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                placeholder="Ingrese el nombre del teacher"
                className="bg-menu-light dark:text-menu-dark py-1 px-2 rounded-2xl"
                required
              >
                <option value="" disabled>Seleccione un teacher</option>
                {teachers.map((profesor) => (
                  <option key={profesor.id} value={profesor.id}>{profesor.name}</option>
                ))}
              </select>
            </div>
            <div className='flex justify-end mt-2'>
              <button
                type="submit"
                className="bg-primary-light rounded-lg p-2 text-text-light hover:bg-[#0a2a54]"
              >
                <i className='bx bx-save'></i> Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}


export default AdminCourse;