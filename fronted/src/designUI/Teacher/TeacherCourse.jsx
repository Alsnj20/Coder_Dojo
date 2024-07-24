import { useLocation, Link } from "react-router-dom"
import { useUser } from "../../components/useContext"
import TeacherCreateTask from "./TeacherCreateTask";
import axios from "axios";

function TeacherCourse() {
  const { user } = useUser()
  const location = useLocation();
  const { course } = location.state;

  if (!course) {
    return <div><h1 className="text-2xl">Loading...</h1></div>;
  }

  return (
    

    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <Link className='border-spacing-1 hover:border-b-black' to='/teacher'><i><i className='bx bx-arrow-back'></i></i>Regresar </Link>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <h1 className="text-3xl font-bold">Curso: {course.nombre}</h1>
            <button className="w-[200px] bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Agregar Tarea</button>
          </div>
          <p className="text-gray-500">Profesor: {user.name}</p>
          <p className="text-gray-500">Descripción: {course.descripcion}</p>
        </div>
        <TeacherCreateTask cursoId={course.id} />
      </section>
    </main>
  )
}

export default TeacherCourse