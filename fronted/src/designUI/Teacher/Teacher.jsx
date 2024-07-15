
import { useLocation, Outlet, Route, Routes } from 'react-router-dom';

import TeacherNavigation from './TeacherNavigation';
import HomeFooter from '../Home/HomeFooter';
function Teacher() {
  const location = useLocation();
  const user = location.state;
  console.log('Teacher', user);
  return (
    <div className="flex flex-col min-h screen">
      <TeacherNavigation user={user}/>
      <main className="flex-grow min-h-[80vh]">
        <Routes>
        </Routes>
      </main>
      <Outlet />
      <HomeFooter />
    </div>
  );
}
export default Teacher;