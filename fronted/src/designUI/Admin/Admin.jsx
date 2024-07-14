import AdminFooter from "./AdminFooter";
import AdminMain from "./AdminMain";
import AdminNavigation from "./AdminNavigation";
import { Outlet, useLocation } from "react-router-dom";
function Admin() {
  const location = useLocation();
  console.log("La info del admin ha llegado", location.state);
  return (
  <div className="flex flex-col min-h screen">
    <AdminNavigation/>
    <AdminMain>
    </AdminMain>
    <Outlet/>
    <AdminFooter/>
  </div>
  );
}
export default Admin;