import Button from './Button';
import HomeEvent from './HomeEvent';
import HomeRol from './HomeRol';
import coderDojoMain from './img/coderDojoMain.png';

function HomeMain() {
  return (
    <main className="
    bg-gradient-to-r from-[#7FD7FD] to-[#C2EFF9]
    dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700
    ">
      <section className="container mx-auto flex flex-col lg:flex-row justify-center
      gap-8 items-center py-20 px-2 md:px-12 lg:px-24"
      >
        <div className='p-10 md:px-[7%] flex flex-col items-center justify-center' >
          <h1 className="text-5xl md:text-8xl font-bold mb-4 text-text-dark dark:text-text-light flex justify-center items-center" >
            <svg
              width="10%" height="5%" viewBox="0 0 57 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
              <path d="M17.5714 25.1L3 16L17.5714 6.9M39.4286 25.1L54 16L39.4286 6.9M33.9643 3L23.0357 29" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            CoderDojo
          </h1>
          <p>
            Explora el mundo de la codificación y la programación con CoderDojo.
          </p>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Unete a nuestra comunidad de jóvenes programadores y descubre la alegría de programar de una manera divertida y accesible.
          </p>
          <div className="flex gap-4 items-center">
            <Button text="Empezar Ahora" icon="bx bx-user-plus" url='register/' />
            <a href="#" className="text-primary-light dark:text-text-dark hover:border-b-2 border-primary-light dark:border-text-dark">
              Más Información
            </a>
          </div>
        </div>
      </section>
      <div className='flex-grow relative'>
        <svg width="356" height="152" viewBox="0 0 356 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M87.6551 1L1 16.9696V151H354L286.483 80.2776L161.02 71.7224L87.6551 1Z" fill="#0B2D5F" stroke="#0B2D5F"
            className="absolute bottom-0 left-0 w-32 h-32"
          />
        </svg>
        <svg width="357" height="152" viewBox="0 0 357 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M269.099 1L356 16.9696V151H2L69.7078 80.2776L195.527 71.7224L269.099 1Z" fill="#0B2D5F" stroke="#0B2D5F"
            className="absolute bottom-0 right-0 w-32 h-32"
          />
        </svg>
      </div>
    </main>

  );
}
export default HomeMain;