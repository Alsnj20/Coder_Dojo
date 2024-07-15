import React, { useState } from "react";
function AdminNavigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className="bg-[#0b2d5f] text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold"> <i className="text-3xl text-white bx bx-code-alt"></i> CoderDojo</span>
        </a>
      </div>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="hover:border-b-2 border-white ">Users</a>
        <a href="#" className="hover:border-b-2 border-white ">Courses</a>
      </nav>
      <div className="flex items-center gap-4">
        <div>
        <i className={`text-gray-700 rounded-full bg-gray-300 bx bx-user p-2`}></i>
          <span> Bienvenido, Admin</span>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-full"
        >
          <i className={`w-8  h-8 text-2xl rounded-full hover:bg-white hover:text-[#0b2d5f] ${isDarkMode ? "bx bx-sun" : "bx bx-moon"}`}></i>
          <span className="sr-only">Toggle dark mode</span>
        </button>
        <a
          href="/"
          className="bg-white h-8 text-[#0b2d5f] px-4 py-2 rounded-md hover:bg-[#e6e6e6] flex items-center gap-2"
        >
          <i className="text-lg bx bx-log-out" style={{ color: '#0b2d5f' }}></i>
          Logout
        </a>
      </div>
    </header>
  );
}
export default AdminNavigation;