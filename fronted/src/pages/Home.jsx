import React from "react";
import { useNavigate } from "react-router-dom";


function Home(){
  const navigate = useNavigate();
  const btnMoreInfo = () => {
    navigate("/more-info");
  }

  const btnRegister = () => {
    navigate("/register");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Programación para todos Coder Dojo</h1>
        <p className="text-lg mb-6">
          Coder Dojo es un programa que permite a los estudiantes aprender programación de manera divertida y accesible, mientras los docentes pueden gestionar y asignar tareas fácilmente.
        </p>
        <div className="space-x-4">
          <button
            onClick={btnMoreInfo}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-900"
          >
            Más Información
          </button>
          <button
            onClick={btnRegister}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-600"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;