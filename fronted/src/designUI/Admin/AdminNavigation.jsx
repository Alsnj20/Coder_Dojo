import React, { useState } from "react";
import { useUser } from "../../components/useContext";
import Button from "../Home/Button";

function AdminNavigation({ isDarkMode, setIsDarkMode }) {
  const { user, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="
    dark:bg-primary-light
     text-primary-dark dark:text-text-light py-6 px-6 shadow-sm flex justify-between items-center w-full z-1000">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-text-dark dark:text-text-light">
            <i className="text-3xl text-text-dark dark:text-text-light bx bx-code-alt"></i> CoderDojo
          </span>
        </a>
      </div>
      <nav className={`flex-col md:flex-row md:flex gap-8 items-center ${isMenuOpen ? 'flex' : 'hidden'} 
      md:flex absolute md:relative top-24 md:top-0 right-0 md:left-auto 
      px-8 py-4 md:py-0 md:px-0
      md:w-auto bg-menu-light dark:bg-menu-dark md:bg-transparent
      md:dark:bg-transparent
      animate-open-menu md:animate-none
      z-50 md:z-auto`
      }>
        <a href="#" className="font-semibold hover:border-b-2 border-primary-light dark:border-text-dark">Cursos</a>
        <a href="#" className="font-semibold hover:border-b-2 border-primary-light dark:border-text-dark">Usuarios</a>
        <div className="flex items-center gap-2">
          <i className="text-gray-700 rounded-full bg-gray-300 bx bx-user p-2"></i>
          <span>Bienvenido, Admin</span>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <Button onClick={logout}

          text="Cerrar Sesión" icon="bx bx-log-out" url='/' />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <i className={`w-8 h-8 text-2xl 
            text-primary-light dark:text-text-light
           ${isDarkMode ? 'bx bx-sun' : 'bx bx-moon'}`}></i>
          <span className="sr-only">Toggle dark mode</span>
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="bx bx-menu text-3xl"></i>
        </button>
      </div>
    </header>
  );
}

export default AdminNavigation;