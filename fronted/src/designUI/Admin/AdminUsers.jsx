
function AdminUsers() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 font-medium">Nombre
            </th>
            <th className="py-3 px-4 text-left text-gray-600 font-medium">Correo
            </th>
            <th className="py-3 px-4 text-left text-gray-600 font-medium">Rol
            </th>
            <th className="py-3 px-4 text-left text-gray-600 font-medium">Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              Mariel Jara
            </td>
            <td className="py-3 px-4">
              marieljara@example.com
            </td>
            <td className="py-3 px-4">
              AD
            </td>
            <td>
              <div className="flex items-center gap-2">
                <button className="hover:text-blue-500">
                  <i className="bx bx-edit"></i>
                  Edit
                </button>
                <button className="hover:text-red-500">
                  <i className="bx bx-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              Mariel Jara
            </td>
            <td className="py-3 px-4">
              marieljara@example.com
            </td>
            <td className="py-3 px-4">
              AD
            </td>
            <td>
              <div className="flex items-center gap-2">
                <button className="hover:text-blue-500">
                  <i className="bx bx-edit"></i>
                  Edit
                </button>
                <button className="hover:text-red-500">
                  <i className="bx bx-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              Mariel Jara
            </td>
            <td className="py-3 px-4">
              marieljara@example.com
            </td>
            <td className="py-3 px-4">
              AD
            </td>
            <td>
              <div className="flex items-center gap-2">
                <button className="hover:text-blue-500">
                  <i className="bx bx-edit"></i>
                  Edit
                </button>
                <button className="hover:text-red-500">
                  <i className="bx bx-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">
              Mariel Jara
            </td>
            <td className="py-3 px-4">
              marieljara@example.com
            </td>
            <td className="py-3 px-4">
              AD
            </td>
            <td>
              <div className="flex items-center gap-2">
                <button className="hover:text-blue-500">
                  <i className="bx bx-edit"></i>
                  Edit
                </button>
                <button className="hover:text-red-500">
                  <i className="bx bx-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}
export default AdminUsers;