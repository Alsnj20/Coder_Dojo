import React from 'react';
import Card from './Utilities';
import { Link, useLocation } from 'react-router-dom';

function AdminCourseCard() {
  const location = useLocation();
  console.log(location.state);
  const { courses, users } = location.state;

  const searchTeacher = (id) => {
    const teacher = users.find(user => user.id === id);
    return teacher ? `${teacher.nombre}` : 'No asignado';
  }

  return (
    <section className="container mx-auto py-12 px-6">
      <div className="space-y-4">
        <Link className='border-spacing-1 hover:border-b-black' to='/admin'>
          <i className='bx bx-arrow-back'></i> Regresar
        </Link>
        <h2 className="text-2xl font-bold">Lista de Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(course => (
            <Card key={course.id}>
              <div className="flex flex-col justify-between">
                <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                  {course.nombre}
                </h1>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Profesor: {searchTeacher(course.id)}
                </p>
              </div>
              <p className="font-medium">
                {course.descripcion}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2" >
                  <i className="bx bx-edit mr-1"></i>
                  Editar
                </button>
                <button
                  className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-light py-2 px-4 rounded-md hover:bg-blue-900 mt-2" >
                  <i className="bx bx-edit mr-1"></i>
                  Eliminar
                </button>
              </div>
            </Card >

          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminCourseCard;