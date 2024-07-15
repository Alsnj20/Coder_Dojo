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
        const response = await axios.get('http://localhost:8000/system/teacher/list/');
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
      const response = await axios.post('http://localhost:8000/system/course/create/', {
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
      }else{
        alert('Error al crear el curso');
      }
    }
  }

  return (
    <section className="container mx-auto py-12 px-6">
      <Link className='border-spacing-1 hover:border-b-black' to='/admin'><i><i className='bx bx-arrow-back'></i></i>Regresar </Link>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Agregar Curso</h1>
          </div>
          <p className="text-muted-foreground">
            Llenar el formulario para agregar un nuevo curso a tu plataforma Coder Dojo.
          </p>
          <Card>
            <div className="grid gap-2">
              <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Titulo</label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ingrese el título del curso"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Descripción</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ingrese la descripción del curso"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="teacher" className='block text-sm font-medium text-gray-700'>Profesor</label>
              <select
                id="teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                placeholder="Ingrese el nombre del teacher"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="" disabled>Seleccione un teacher</option>
                {teachers.map((profesor) => (
                  <option key={profesor.id} value={profesor.id}>{profesor.name}</option>
                ))}
              </select>
            </div>
            <div className='flex justify-end mt-2'>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                <i className='bx bx-save'></i>
                Guardar
              </button>
            </div>
          </Card>
        </div>
      </form>
    </section>
  )
}
export default AdminCourse;