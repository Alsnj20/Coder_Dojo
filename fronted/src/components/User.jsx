
function User({ user }) {
  return (
    <div className="border-b py-2">
      <li className="py-2">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tipo:</strong> {user.tipo}</p>
      </li>
      <div className="flex gap-2 mt-2">
        <button className="bg-black text-white p-1 rounded-lg w-20 hover:bg-gray-600">Edit</button>
        <button className="bg-black text-white p-1 rounded-lg w-20 bg-black-hover hover:bg-gray-600" >Delete</button>
      </div>
    </div>
  )
}
export default User