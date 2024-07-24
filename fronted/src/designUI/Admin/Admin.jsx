import HomeFooter from "../Home/HomeFooter";
import AdminMain from "./AdminMain";
import AdminList from "./AdminList";
import AdminNavigation from "./AdminNavigation";
import { useLocation, Outlet, Route, Routes } from 'react-router-dom';
import AdminCourse from "./AdminCourse";
import AdminCourseCard from "./AdminCourseCard";
import { useEffect, useState } from "react";

function Admin() {
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
    <div className="flex flex-col min-h screen
     dark:bg-primary-dark dark:text-text-light"
    >
      <AdminNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main className="flex-grow min-h-[60vh]
      ">
        <Routes>
          <Route index element={<AdminMain />} />
          <Route path="users" element={<AdminList />} />
          <Route path="courses" element={<AdminCourseCard />} />
          <Route path="courses/create" element={<AdminCourse />} />
        </Routes>
      </main>
      <Outlet />
      <HomeFooter />
    </div>
  );
}
export default Admin;