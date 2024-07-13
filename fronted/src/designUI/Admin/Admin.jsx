import AdminFooter from "./AdminFooter";
import AdminMain from "./AdminMain";
import AdminNavigation from "./AdminNavigation";
function Admin() {
  return (<div className="flex flex-col min-h screen">
    <AdminNavigation/>
    <AdminMain/>
    <AdminFooter/>
    </div>)
}
export default Admin;