import Image from './img/logo.png';

function HomeFooter() {
  return (
    <footer className="relative text-text-light
  bg-primary-light md:bg-transparent
   dark:text-text-dark py-8 px-6 md:px-12 lg:px-24 min-h-[200px]">
      <div className="relative z-10 container max-w-7xl mx-auto
      md:mt-[5%]
      flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4
        dark:text-text-light
        ">
          <img src={Image} alt="Logo" height="100" width="100" />
          <span className="text-2xl font-bold">
            <i className="text-3xl text-text-light bx bx-code-alt"></i> Coder Dojo
          </span>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 font-bold dark:text-text-light">
          <a href="#" className="hover:border-b-2 border-text-light">Home</a>
          <a href="#" className="hover:border-b-2 border-text-light ">Cursos</a>
          <a href="#" className="hover:border-b-2 border-text-light">Tareas</a>
        </nav>
        <div className="flex flex-col items-center md:items-start gap-4 font-bold dark:text-text-light">
          <p>Redes Sociales</p>
          <div className="flex gap-4">
            <a href="#" className="text-2xl"><i className="bx bxl-linkedin-square"></i></a>
            <a href="#" className="text-2xl"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="text-2xl"><i className="bx bxl-facebook"></i></a>
          </div>
          <p className="text-center">&copy; 2024 Coder Dojo. Todos los derechos reservados.</p>
        </div>
      </div>
      <svg className="absolute top-0 left-0 w-full h-full z-0 md:h-auto" viewBox="0 0 876 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M107 17.5063C65.4719 17.6862 1 9.00631 1 9.00631V191.506H875V9.00631C875 9.00631 835.344 34.9562 806.5 42.0063C742.232 57.7147 708.019 5.81343 642 1.50631C560.375 -3.81895 516.791 34.6443 435 33.5063C359.955 32.4622 320.552 1.77138 245.5 1.50631C191.053 1.31402 161.447 17.2705 107 17.5063Z" fill="#0B2D5F" stroke="#0B2D5F" />
      </svg>
    </footer>
  );
}

export default HomeFooter;