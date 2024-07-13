import { useState } from 'react';

function HomeNavigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold">
            <i className="text-3xl text-text-light dark:text-text-dark bx bx-code-alt"></i> CoderDojo
          </span>
        </a>
      </div>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">About</a>
        <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">Courses</a>
        <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            document.documentElement.classList.toggle('dark', !isDarkMode);
          }}
          className="rounded-full"
        >
          <i className={`w-8 h-8 text-2xl rounded-full hover:bg-text-light hover:text-primary-light dark:hover:bg-text-dark dark:hover:text-primary-dark ${isDarkMode ? 'bx bx-sun' : 'bx bx-moon'}`}></i>
        </button>
        <a
          href="#"
          className="bg-text-light h-8 text-primary-light px-4 py-2 rounded-md hover:bg-secondary-light dark:bg-text-dark dark:text-primary-dark dark:hover:bg-secondary-dark flex items-center gap-2"
        >
          <i className="text-lg bx bx-user-plus" style={{ color: '#0b2d5f' }}></i>
          Register
        </a>
        <a
          href="#"
          className="bg-text-light h-8 text-primary-light px-4 py-2 rounded-md hover:bg-secondary-light dark:bg-text-dark dark:text-primary-dark dark:hover:bg-secondary-dark flex items-center gap-2"
        >
          <i className="text-lg bx bx-log-in" style={{ color: '#0b2d5f' }}></i>
          Login
        </a>
      </div>
    </header>
  );
}

export default HomeNavigation;