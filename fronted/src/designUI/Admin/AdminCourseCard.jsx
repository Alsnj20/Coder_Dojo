import React from 'react';
import Card from './Utilities';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function AdminCourseCard() {
  const location = useLocation();
  console.log(location.state);
  const users  = location.state.users;
  const [courses, setCourses] = useState(location.state.courses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', docente: '' });
  const [showForm, setShowForm] = useState(false);

  const searchTeacher = (id) => {
    const teacher = users.find(user => user.id === id);
    return teacher ? `${teacher.name}` : 'No asignado';
  }

  const handleEditClick = (course) => {
    setEditingCourse(course);
    setFormData({ nombre: course.nombre, descripcion: course.descripcion, docente: course.docente });
    setShowForm(true);
  };

  const handleDeleteCourse = async (id) => {
    console.log(courses);
    console.log(id);
    try {
      await axios.delete(`http://localhost:8000/system/course/${id}/`);
      location.state.courses = courses.filter(course => course.id !== id);
      setCourses(courses.filter(course => course.id !== id));
      alert('Curso eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el curso:', error);
    }
  }

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.put(`http://localhost:8000/system/course/${editingCourse.id}/`, formData);
      const updatedCourse = response.data;
      const updatedCourses = courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course));
      setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
      location.state.courses = updatedCourses;
      setEditingCourse(null);
      setShowForm(false);
    }catch(error){
      console.error('Error al editar el curso:', error);
    }
  }

  return (
    <section className="container mx-auto py-12 px-6">
      <div className="space-y-4">
        <Link className='border-spacing-1 hover:border-b-black' to='/admin'>
          <i className='bx bx-arrow-back'></i> Regresar
        </Link>
        <h2 className="text-2xl font-bold">Lista de Cursos</h2>
  
        {showForm && (
          <div className='shadow-md p-3 rounded-md dark:bg-menu-dark md:w-[70vw]'>
            <h3 className="text-lg font-semibold">Editar Curso</h3>
            <form onSubmit={handleSubmitEdit} className="mb-4 grid md:grid-cols-4 gap-3">
              <label htmlFor="nombre" className="font-medium">Nombre</label>
              <input
                id="nombre"
                className="bg-menu-light dark:text-menu-dark  py-1 px-2 rounded-2xl"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
  
              <label htmlFor="descripcion" className="font-medium">Descripción</label>
              <textarea
                id="descripcion"
                className="bg-menu-light py-1 px-2 rounded-2xl dark:text-menu-dark"
                name="descripcion"
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                required
              />
  
              <label htmlFor="docente" className="font-medium">Docente</label>
              <select
                id="docente"
                className="bg-menu-light dark:text-menu-dark py-1 px-2 rounded-2xl"
                name="docente"
                value={formData.docente}
                onChange={(e) => setFormData({ ...formData, docente: e.target.value })}
                required
              >
                <option value="" disabled>Seleccionar</option>
                {users.filter(user => user.tipo === 'TC').map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
  
              <button
                type="submit"
                className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2">
                Guardar
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2">
                Cancelar
              </button>
            </form>
          </div>
        )}
  
        {courses.length === 0 ? (
          <p className="text-muted-foreground dark:text-muted-foreground">No hay cursos registrados</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(course => (
              <Card key={course.id}>
                <div className="flex flex-col justify-between">
                  <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                    {course.nombre}
                  </h1>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                    Profesor: {searchTeacher(course.docente)}
                  </p>
                </div>
                <p className="font-medium">
                  {course.descripcion}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleEditClick(course)}
                    className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2">
                    <i className="bx bx-edit mr-1"></i>
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2">
                    <i className="bx bx-trash mr-1"></i>
                    Eliminar
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminCourseCard;