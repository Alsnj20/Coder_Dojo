import AdminFooter from "./AdminFooter";
import AdminMain from "./AdminMain";
import AdminList from "./AdminList";
import AdminNavigation from "./AdminNavigation";
import AccessDenied from "../../components/AccessDenied";
import { useLocation, Outlet, Route, Routes } from 'react-router-dom';
import AdminCourse from "./AdminCourse";

function Admin() {
  const location = useLocation();
  const user = location.state;
  return (
    <div className="flex flex-col min-h screen">
      <AdminNavigation />
      <main className="flex-grow min-h-[80vh]">
        <Routes>
          <Route index element={<AdminMain />} />
          <Route path="users" element={<AdminList />} />
          <Route path="courses" element={<AdminList />} />
          <Route path="courses/create" element={<AdminCourse />} />
        </Routes>
      </main>
      <Outlet />
      <AdminFooter />
    </div>
  );
}
export default Admin;