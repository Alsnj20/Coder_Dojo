import Card from './Utilities/';
function AdminCourse() {
  return (
    <section className="container mx-auto py-12 px-6">
      <form action="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Add Course</h1>
          </div>
          <p className="text-muted-foreground">
            Llenar el formulario para agregar un nuevo curso a tu plataforma Coder Dojo.
          </p>
          <Card>
            <div className="grid gap-2">
              <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
              <input id="title" placeholder="Ingrese el título del curso"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
              <textarea id="description" placeholder="Ingrese la descripción del curso" rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label htmlFor="profesor" className='block text-sm font-medium text-gray-700'>Profesor</label>
                <input id="profesor" placeholder="Ingrese el nombre del profesor"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="estudiantes" className='block text-sm font-medium text-gray-700'>Estudiantes</label>
                <input id="estudiantes" type="number" placeholder="Ingrese el número de estudiantes"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 gap-2">
              <label htmlFor="category" className='block text-sm font-medium text-gray-700'>Categoria</label>
              <select id="category"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="" disabled>Selecciona la categoria</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="data-science">Data Science</option>
                <option value="artificial-intelligence">Artificial Intelligence</option>
              </select>
            </div>
            <div className='flex justify-end mt-2'>
              <button
                className="inline-flex items-center gap-2 bg-[#0b2d5f] text-white px-4 py-2 rounded-md hover:bg-[#0a2a54]"
              >
                Save
              </button>
            </div>
          </Card>
        </div>
      </form>
    </section>
  )
}
export default AdminCourse;