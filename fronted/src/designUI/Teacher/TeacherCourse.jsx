import { useLocation, Link } from "react-router-dom"
import { useUser } from "../../components/useContext"
import TeacherCreateTask from "./TeacherCreateTask";
import axios from "axios";
import { useEffect, useState } from "react";

function TeacherCourse() {
  const { user } = useUser();
  const location = useLocation();
  const { course } = location.state;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/system/course/${course.id}/task/list/`);
        console.log(response.data);
        setTasks(response.data); // Guarda las tareas en el estado
      } catch (error) {
        alert('Error al cargar las tareas');
      }
    };
    getTasks();
  }, [course.id]);


  const handleAssignTask = async (taskId) => {
    try {
      const response = await axios.post(`http://localhost:8000/system/course/${course.id}/task/assign/`, {task_id: taskId});
      alert('Tarea asignada correctamente');
      console.log(response.data);
    } catch (error) {
      alert('Error al asignar la tarea');
    }
  }

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
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold">Tareas</h1>
        <div className="grid gap-4 mt-6">
          {tasks.map((task) => (
            <div className="bg-gray-200 p-4 rounded-lg" key={task.id}>
              <h2 className="text-2xl font-bold">{task.nombre}</h2>
              <p className="text-gray-500">{task.descripcion}</p>
              <p className="text-gray-500">Fecha de entrega: {task.fecha_entrega}</p>
              <button 
              onClick={() => handleAssignTask(task.id)}
              className="bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Asignar Tarea</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default TeacherCourse