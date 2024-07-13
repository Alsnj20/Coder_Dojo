
function AdminUsersCard({ title, children, add, all }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground">{children}</p>
        <div className="mt-4 md:justify-end flex justify-center gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
          >
            {all}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
          >
            {add}
          </a>
        </div>
      </div>
    </div>
  )
}
export default AdminUsersCard;