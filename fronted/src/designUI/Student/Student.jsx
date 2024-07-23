import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import StudentNavigation from './StudentNavigation';
import StudentMain from './StudentMain';
import HomeFooter from '../Home/HomeFooter';

function Student(){
  return (
    <div className="flex flex-col min-h screen">
      <StudentNavigation/>
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

export default Student