import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../components/useContext';

function StudentMain() {
  const { user } = useUser()
  const [cursos, setCursos] = useState([])
  const [misCursos, setMisCursos] = useState([])
  const [entregasAsignadas, setEntregasAsignadas] = useState([])
  const [url, setUrl] = useState('')
  const [entregasEnviadas, setEntregasEnviadas] = useState([])

  useEffect(() => {
    const getCursos = async () => {
      try {
        const response = await axios.get(`https://coderdojo-backend.vercel.app/system/course/list/`)
        setCursos(response.data)
      } catch (error) {
        console.error('Error al obtener los cursos:', error)
      }
    }
    getCursos()
  }, [])

  const enrollCourse = async (courseId) => {
    console.log('Enroll course:', courseId)
    try {
      const response = await axios.post(`https://coderdojo-backend.vercel.app/system/student/enroll/${courseId}/${user.id}/`)
      console.log("Cambios " + response.data)
      window.location.reload();
    } catch (error) {
      console.error('Error al unirse al curso:', error)
    }
  }

  const statusEnroll = (courseId) => {
    const course = misCursos.find((curso) => curso.id === courseId)
    return course ? 'Inscrito' : 'Inscribirse'
  }


  useEffect(() => {
    const getMyCourses = async () => {
      try {
        const response = await axios.get(`https://coderdojo-backend.vercel.app/system/student/${user.id}/courses/`)
        setMisCursos(response.data)
      } catch (error) {
        console.error('Error al obtener mis cursos:', error)
      }
    }
    getMyCourses()
  }, [user.id])

  useEffect(() => {
    const getAssignedTasks = async () => {
      try {
        const response = await axios.get(`https://coderdojo-backend.vercel.app/system/student/${user.id}/assigned_tasks/`, { user_id: user.id })
        console.log("Asignadas", response.data)
        setEntregasAsignadas(response.data)
      } catch (error) {
        console.error('Error al obtener las tareas asignadas:', error)
      }
    }

    const getSubmittedTasks = async () => {
      try {
        const response = await axios.get(`https://coderdojo-backend.vercel.app/system/student/${user.id}/submitted_tasks/`)
        console.log("Entregas", response.data)
        setEntregasEnviadas(response.data)
      } catch (error) {
        console.error('Error al obtener las entregas:', error)
      }
    }

    getAssignedTasks()
    getSubmittedTasks()
  }, [user.id])

  const handleSubmitDelivery = async (taskId, url) => {
    if (!url) {
      alert('Por favor, ingrese un enlace de entrega')
      return
    }
    try {
      const response = await axios.post(`https://coderdojo-backend.vercel.app/system/student/${user.id}/delivery/`, { tarea: taskId, url: url })
      alert('Entrega enviada correctamente')
      console.log(response.data)
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar la entrega:', error)
    }
  }

  const changeColor = (grade) =>{
    if(grade >= 0 && grade <= 10){
      return 'text-red-500'
    } else if(grade > 10 && grade <= 15){
      return 'text-yellow-500'
    } else if(grade > 15 && grade <= 20){
      return 'text-green-500'
    }
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

                        className={`${statusEnroll(curso.id) !== 'Inscrito' ? 'bg-primary-light dark:bg-primary-dark' : 'bg-secondary-light dark:bg-secondary-dark cursor-not-allowed'} text-white px-4 py-2 rounded-md`}
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
              <div className="grid md:grid-cols-2 gap-3 ">
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
                {entregasAsignadas.map((entrega) => (
                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4" key={entrega.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{entrega.tarea.nombre}</h2>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">Curso: {entrega.tarea.curso.nombre}</p>
                    <p className="font-medium">{entrega.tarea.descripcion}</p>
                    <p className="font-medium">Fecha de entrega: {new Date(entrega.tarea.fecha_entrega).toLocaleString()}</p>
                    <input
                      type="url"
                      placeholder="Enlace de la entrega"
                      onChange={(e) => setUrl(e.target.value)}
                      className="block mt-2 p-2 border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => { handleSubmitDelivery(entrega.tarea.id, url) }}
                      className='bg-primary-light dark:bg-primary-dark rounded-lg text-text-light px-4 py-2 mt-2'
                    >
                      <i className="bx bx-upload mr-1"></i>
                      Enviar entrega
                    </button>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h1>Tareas Enviadas</h1>
              <div className="grid gap-3">
                {entregasEnviadas.map((entrega) => (
                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4" key={entrega.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{entrega.tarea.nombre}</h2>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">Curso: {entrega.tarea.curso}</p>
                    <p className="font-medium">Fecha de entrega: {new Date(entrega.tarea.fecha_entrega).toLocaleString()}</p>
                    <p className="font-medium">Entrega: <a className="text-primary-light"
                      href={entrega.enlace} target="_blank" rel="noreferrer">{entrega.enlace}</a></p>
                    <p className={changeColor(entrega.calificacion)}>Calificación: {entrega.calificacion}</p>
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