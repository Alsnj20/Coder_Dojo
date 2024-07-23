import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../components/useContext';

function StudentMain() {
  const { user } = useUser()
  const [cursos, setCursos] = useState([])

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


  const enrollCourse = async (courseId) => {
    console.log('Enroll course:', courseId)
    try {
      const response = await axios.post(`http://localhost:8000/system/student/enroll/${courseId}/${user.id}/`)
      console.log("Cambios "+response.data)
    } catch (error) {
      console.error('Error al unirse al curso:', error)
    }
  }

  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Panel de Estudio</h1>
          <p className="text-gray-500">Bienvenido  Estudiante, {user.name}.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
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
                      className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-2 px-4 rounded-md hover:bg-blue-900 mt-2">
                        <i className="bx bx-edit mr-1"></i>
                        Unirse
                      </button>
                    </div>
                  </div>
                ))}
            </div>
              <h1>Mis Cursos</h1>
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}

export default StudentMain;