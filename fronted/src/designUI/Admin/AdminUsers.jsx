import Card from './Utilities/';
function AdminUsers() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="">
            <tr className='hover:bg-gray-50'>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">Nombre
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">Correo
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">Rol
              </th>
              <th className="py-3 px-4 text-left text-gray-500 font-medium">Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
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
                  </button>
                  <button className="hover:text-red-500">
                    <i className="bx bx-trash"></i>
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
                  </button>
                  <button className="hover:text-red-500">
                    <i className="bx bx-trash"></i>
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
                  </button>
                  <button className="hover:text-red-500">
                    <i className="bx bx-trash"></i>
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
                  </button>
                  <button className="hover:text-red-500">
                    <i className="bx bx-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  )

}
export default AdminUsers;