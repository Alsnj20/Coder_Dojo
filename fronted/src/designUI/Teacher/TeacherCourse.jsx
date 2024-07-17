import { useEffect } from "react"
import axios from "axios"
import { useLocation, Link } from "react-router-dom"

function TeacherCourse() {
  const location = useLocation();
  console.log('Location', location);
  const { course } = location.state;
  console.log('TeacherCourse', course);

  if (!course) {
    return <div><h1 className="text-2xl">Loading...</h1></div>;
  }

  return (

    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <Link className='border-spacing-1 hover:border-b-black' to='/teacher'><i><i className='bx bx-arrow-back'></i></i>Regresar </Link>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Curso: {course.nombre}</h1>
          <p className="text-gray-500">Profesor: {course.docente}</p>
          <p className="text-gray-500">Descripción: {course.descripcion}</p>
        </div>
      </section>
    </main>
  )
}

export default TeacherCourse