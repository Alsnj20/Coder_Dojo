import AdminUsersCard from "./AdminUsersCard";
function AdminMain() {
  return (
    <main className="flex-1">
      <section className="container mx-auto py-12 px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <p className="text-gray-500">Bienvenido, Admin.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-2xl font-bold col-span-full">Administrar Usuarios</h2>
            <AdminUsersCard title="Usuarios" all="Ver Usuarios" add="Crear Usuario" url={"admin/users/"}>
              Agrega, edita y elimina usuarios de la plataforma.
            </AdminUsersCard>
            <h2 className="text-2xl font-bold col-span-full">Administrar Cursos</h2>
            <AdminUsersCard title="Cursos" all="Ver Cursos" url ={"admin/courses/"} add="Crear Curso">
              Agrega, edita y elimina cursos de la plataforma.
            </AdminUsersCard>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AdminMain;