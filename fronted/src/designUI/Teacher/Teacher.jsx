
import {Outlet, Route, Routes } from 'react-router-dom';

import TeacherNavigation from './TeacherNavigation';
import TeacherMain from './TeacherMain';
import TeacherCourse from './TeacherCourse';
import HomeFooter from '../Home/HomeFooter';

function Teacher() {

  return (
    <div className="flex flex-col min-h screen">
      <TeacherNavigation/>
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