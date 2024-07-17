
import { useLocation, Outlet, Route, Routes } from 'react-router-dom';

import TeacherNavigation from './TeacherNavigation';
import TeacherMain from './TeacherMain';
import TeacherCourse from './TeacherCourse';
import HomeFooter from '../Home/HomeFooter';
function Teacher() {
  const location = useLocation();
  const user = location.state;
  console.log('Teacher', user);

  return (
    <div className="flex flex-col min-h screen">
      <TeacherNavigation user={user} />
      <main className="flex-grow min-h-[80vh]">
        <Routes>
          <Route index element={<TeacherMain user={user} />} />
          <Route path="course/:id" element={<TeacherCourse />} />
        </Routes>
      </main>
      <Outlet />
      <HomeFooter />
    </div>
  );
}
export default Teacher;