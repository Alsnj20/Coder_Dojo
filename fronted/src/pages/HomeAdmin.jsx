import { useLocation, Link } from "react-router-dom";
import ListUsers from "../components/ListUsers";

function HomeAdmin() {
  const location = useLocation();
  const user = location.state

  const getUsers = () => {
    return <ListUsers user={user} />
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Dashboard</h2>
        <p className="text-center text-gray-600">Bienvenido {user.email} al panel de Administración control.</p>
        <div>
          <h3 className="text-3xl font-bold text-center mb-4">Administrar Users</h3>
          <p className="text-center text-gray-600">Add, Edit and remove users.</p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Link to={{ pathname: 'list/', state: {user}}} state{...user}className="bg-blue-900 rounded-lg text-gray-300 p-1">
              <button className="bg-blue-900 rounded-lg text-gray-300 p-2">
                Manage Users
              </button>
            </Link>
            <button className="bg-blue-900 rounded-lg text-gray-300 p-2">
              Manage Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeAdmin;