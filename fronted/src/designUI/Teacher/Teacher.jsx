
import {Outlet, Route, Routes } from 'react-router-dom';

import TeacherNavigation from './TeacherNavigation';
import TeacherMain from './TeacherMain';
import TeacherCourse from './TeacherCourse';
import HomeFooter from '../Home/HomeFooter';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';


function Teacher() {
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
      <TeacherNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main className="flex-grow min-h-[80vh]">
        <Routes>
          <Route index element={<TeacherMain/>} />
          <Route path="course/:id" element={<TeacherCourse />} />
        </Routes>
      </main>
      <Outlet />
      <HomeFooter />
    </div>
  );
}
export default Teacher;