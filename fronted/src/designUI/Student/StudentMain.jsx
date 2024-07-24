import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../components/useContext';

function StudentMain() {
  const { user } = useUser()
  const [cursos, setCursos] = useState([])
  const [misCursos, setMisCursos] = useState([])
  const [tareasAsignadas, setTareasAsignadas] = useState([])

  useEffect(() => {
    const getCursos = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/system/course/list/`)
        setCursos(response.data)
      } catch (error) {
        console.error('Error al obtener los cursos:', error)
      }
    }
    getCursos()
  }, [user.id])


  useEffect(() => {
    const getMyCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/system/student/${user.id}/courses/`)
        setMisCursos(response.data)
      } catch (error) {
        console.error('Error al obtener mis cursos:', error)
      }
    }
    getMyCourses()
  }, [user.id])

  useEffect(() => {
    const getAssignedTasks = async () => {
      console.log("User ", user.id)
      try {
        const response = await axios.get(`http://localhost:8000/system/student/${user.id}/assigned_tasks/`, {user_id: user.id})
        console.log(response.data)
        setTareasAsignadas(response.data)
      } catch (error) {
        console.error('Error al obtener las tareas asignadas:', error)
      }
    }
    getAssignedTasks()
  }, [user.id])

  const enrollCourse = async (courseId) => {
    console.log('Enroll course:', courseId)
    try {
      const response = await axios.post(`http://localhost:8000/system/student/enroll/${courseId}/${user.id}/`)
      console.log("Cambios " + response.data)
    } catch (error) {
      console.error('Error al unirse al curso:', error)
    }
  }

  const statusEnroll = (courseId) => {
    const course = misCursos.find((curso) => curso.id === courseId)
    return course ? 'Inscrito' : 'Inscribirse'
  }

  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Panel de Estudio</h1>
          <p className="text-gray-500">Bienvenido  Estudiante, {user.name}.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h1>Todos los cursos</h1>
              <div className="grid gap-3">
                {cursos.map((curso) => (
                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4" key={curso.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{curso.nombre}</h2>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">Profesor: {curso.id}</p>
                    <p className="font-medium">{curso.descripcion}</p>
                    <div className="flex justify-end">
                      <button
                        onClick={() => enrollCourse(curso.id)}

                        className={`${statusEnroll(curso.id) !== 'Inscrito' ? 'bg-primary-light dark:bg-primary-dark' : 'bg-secondary-light dark:bg-secondary-dark'} text-white px-4 py-2 rounded-md`}
                      >
                        <i className="bx bx-edit mr-1"></i>
                        {statusEnroll(curso.id)}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h1>Mis Cursos</h1>
              <div className="grid md:grid-cols-3 gap-3">
                {misCursos.map((curso) => (
                  <div className="bg-card-opt dark:bg-gray-800 rounded-md shadow-md p-4" key={curso.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{curso.nombre}</h2>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">Profesor: {curso.docente}</p>
                    <p className="font-medium">{curso.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h1>Tareas Asignadas</h1>
              <div className="grid gap-3">
                {tareasAsignadas.map((tarea) => (
                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4" key={tarea.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{tarea.nombre}</h2>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">Curso: {tarea.curso.nombre}</p>
                    <p className="font-medium">{tarea.descripcion}</p>
                    <p className="font-medium">Fecha de entrega: {new Date(tarea.fecha_entrega).toLocaleString()}</p>
                  </div>
                ))}
              </div>

            </section>
        </div>
      </div>
    </section>
    </main >
  )
}

export default StudentMain;