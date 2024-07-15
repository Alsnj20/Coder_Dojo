import { useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

function TeacherCourse(){
  const location = useLocation();
  const { course } = location.state;
  console.log('TeacherCourse', course);

  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Curso: {course.nombre}</h1>
          <p className="text-gray-500">Profesor: {course.profesor}</p>
          <p className="text-gray-500">Descripción: {course.descripcion}</p>
        </div>
      </section>
    </main>
  )
}

export default TeacherCourse