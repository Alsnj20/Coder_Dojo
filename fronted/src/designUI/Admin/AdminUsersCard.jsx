
function AdminUsersCard({ title, info, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground">{info}</p>
        <div className="mt-4 md:justify-end flex justify-center gap-2">
          {children}
        </div>
      </div>
    </div>
  )
}
export default AdminUsersCard;