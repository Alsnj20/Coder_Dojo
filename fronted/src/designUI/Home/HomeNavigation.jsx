import { useState } from 'react';

function HomeNavigation({isDarkMode, setIsDarkMode}) {
  return (
    <header className="bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark py-6 px-6 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="" className="flex items-center">
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
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-full"
        >
          <i className={`w-8 h-8 text-2xl rounded-full hover:bg-text-light hover:text-primary-light dark:hover:bg-text-dark dark:hover:text-primary-dark ${isDarkMode ? 'bx bx-sun' : 'bx bx-moon'}`}></i>
          <span className="sr-only">Toggle dark mode</span>
        </button>
        <a
          href="register/"
          className="bg-text-light h-8 text-primary-light px-4 py-2 rounded-md hover:bg-secondary-light dark:bg-text-dark dark:text-primary-dark dark:hover:bg-secondary-dark flex items-center gap-2"
        >
          <i className="text-lg bx bx-user-plus"></i>
          Register
        </a>
        <a
          href="login/"
          className="bg-text-light h-8 text-primary-light px-4 py-2 rounded-md hover:bg-secondary-light dark:bg-text-dark dark:text-primary-dark dark:hover:bg-secondary-dark flex items-center gap-2"
        >
          <i className="text-lg bx bx-log-in"></i>
          Login
        </a>
      </div>
    </header>
  );
}

export default HomeNavigation;