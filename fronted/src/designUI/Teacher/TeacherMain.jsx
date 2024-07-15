import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TeacherCoursesCard from "./TeacherCoursesCard";
function AdminMain({ user }) {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    console.log(user.id)
    const getCursos = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8000/system/course/${userId}/`)
        console.log(response.data)
        setCursos(response.data)
      } catch (error) {
        console.error('Error al obtener los cursos:', error)
      }
    }
    getCursos(user.id)
  }, [user.id])


  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Panel de Grupos</h1>
          <p className="text-gray-500">Bienvenido  Profesor, {user.name}.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cursos.length === 0 ? (
              <h2 className="text-2xl font-bold">Usted no tiene cursos</h2>
            ) : (
              <>
                <h2 className="text-2xl font-bold col-span-full">Cursos</h2>
                <div className="grid gap-3">
                  {cursos.map((curso) => (
                    <TeacherCoursesCard
                      key={curso.id}
                      nombre={curso.nombre}
                      descripcion={curso.descripcion}
                      profesor={user.name}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
export default AdminMain;