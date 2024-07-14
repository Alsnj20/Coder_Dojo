function HomeFooter() {
  return (
    <footer className="bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark py-8 px-6 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">
            <i className="text-3xl text-text-light dark:text-text-dark bx bx-code-alt"></i> Coder Dojo
          </span>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">About</a>
          <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">Courses</a>
          <a href="#" className="hover:border-b-2 border-text-light dark:border-text-dark">Contact</a>
        </nav>
        <p className="text-sm">&copy; 2024 Coder Dojo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export default HomeFooter;