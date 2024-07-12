import { useLocation, Link } from "react-router-dom";
function HomeAdmin() {
  const location = useLocation();
  const user = location.state
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Dashboard</h2>
        <p className="text-center text-gray-600">Bienvenido {user.email} al panel de Administración control.</p>
        <div>
          <h3 className="text-3xl font-bold text-center mb-4">Administrar Users</h3>
          <p className="text-center text-gray-600">Add, Edite and remove users.
            <div className="flex flex-col gap-2 items-center justify-center">
              <button className="bg-blue-900 rounded-lg text-gray-300 p-2"><Link to="users">Manage Users</Link ></button>
              <button className="bg-blue-900 rounded-lg text-gray-300 p-2"><Link to="admin/courses">Manage Courses</Link></button>
            </div>

          </p>
        </div>
      </div>
    </div>
  );
}
export default HomeAdmin;