import { useState } from 'react';
import Button from './Button';

function HomeNavigation({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="
     text-primary-dark dark:text-text-light py-6 px-6 shadow-sm flex justify-between items-center absolute w-full z-1000">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-text-dark dark:text-text-light">
            <i className="text-3xl text-text-dark dark:text-text-light bx bx-code-alt"></i> CoderDojo
          </span>
        </a>
      </div>
      <nav className={`flex-col md:flex-row md:flex gap-8 items-center ${isMenuOpen ? 'flex' : 'hidden'} 
      md:flex absolute md:relative top-full right-0 md:top-0 md:left-auto 
      px-8 py-4 md:py-0 md:px-0
      md:w-auto bg-menu-light dark:bg-menu-dark md:bg-transparent
      md:dark:bg-transparent
      animate-open-menu md:animate-none
      z-50 md:z-auto`
      }>
        <a href="#" className="font-semibold hover:border-b-2 border-primary-light dark:border-text-dark">Home</a>
        <a href="#" className="font-semibold hover:border-b-2 border-primary-light dark:border-text-dark">Nosotros</a>
        <a href="#" className="font-semibold hover:border-b-2 border-primary-light dark:border-text-dark">Más Información</a>
        <Button text="Register" icon="bx bx-user-plus" url='register/' />
        <Button text="Login" icon="bx bx-log-in" url='login/' />
      </nav>
      <div className="flex items-center gap-4">
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

export default HomeNavigation;