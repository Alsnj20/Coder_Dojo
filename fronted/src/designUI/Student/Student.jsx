import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import StudentNavigation from './StudentNavigation';
import StudentMain from './StudentMain';
import HomeFooter from '../Home/HomeFooter';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Student(){
  const location = useLocation();
  const user = location.state;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h screen">
      <StudentNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main className="flex-grow min-h-[80vh]">
        <Routes>
          <Route index element={<StudentMain/>} />
          <Route path="course/:id" element={<StudentNavigation />} />
        </Routes>
      </main>
      <Outlet />
      <HomeFooter />
    </div>
  );
}

export default Student;