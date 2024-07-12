import { useLocation, Link } from "react-router-dom";
function HomeStudent() {
  const location = useLocation();
  const user = location.state
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Dashboard</h2>
        <p className="text-center text-gray-600">Bienvenido alumno/a {user.name}.</p>
        <div>
      </div>
      </div>
    </div>
  );
}

export default HomeStudent