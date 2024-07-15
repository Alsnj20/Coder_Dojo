import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TeacherCoursesCard from "./TeacherCoursesCard";
function AdminMain({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    const getCursos = async () => {
      
    }
  })


return (
  <main className="flex-1">
    <section className="container mx-auto py-12 px-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Panel de Grupos</h1>
        <p className="text-gray-500">Bienvenido  Profesor, {user.name}.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 className="text-2xl font-bold col-span-full">Cursos</h2>
          <div>
            <TeacherCoursesCard />
          </div>
        </div>
      </div>
    </section>
  </main>
)
}
export default AdminMain;