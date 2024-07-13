function HomeFooter() {
  return (
    <footer className="bg-[#0b2d5f] text-white py-8 px-6 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold"><i className="text-3xl text-white bx bx-code-alt"></i> Coder Dojo</span>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="hover:border-b-2 border-white ">About</a>
          <a href="#" className="hover:border-b-2 border-white ">Courses</a>
          <a href="#" className="hover:border-b-2 border-white ">Contact</a>
        </nav>
        <p className="text-sm">&copy; 2024 Coder Dojo. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
export default HomeFooter;