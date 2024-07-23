import Button from './Button';
import HomeEvent from './HomeEvent';
import HomeRol from './HomeRol';
import Cloud from './Cloud';

function HomeMain() {
  return (
    <main className="
    bg-bgHome
    dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700
    flex flex-col items-center justify-center h-screen"
    >
      <section className="container mx-auto flex flex-col lg:flex-row justify-center
      gap-8 items-center py-36 px-2 md:px-12 lg:px-24 h-full
      "
      >
        <Cloud className="w-[15%] absolute top-[35%] left-[10%] z-0 animate-move-cloud" />
        <Cloud className="w-[15%] absolute top-[15%] left-[35%] z-0 animate-move-cloud"/>
        <Cloud className="w-[15%] absolute top-[30%] right-[10%] z-0 animate-move-cloud"/>
        <Cloud className="w-[15%] absolute top-[50%] right-[20%] z-0 animate-move-cloud"/>
        <div className='
        relative z-20
        p-10 md:px-[7%] flex flex-col items-center justify-center z-1'
        >
          <h1 className="text-5xl md:text-9xl font-bold mb-4 text-text-dark dark:text-text-light flex justify-center items-center gap-2">
            <i className="text-4xl md:text-9xl text-text-dark dark:text-text-light bx bx-code-alt"></i>
            CoderDojo
          </h1>
          <p className='text-center text-lg font-bold dark:text-text-light'>
            Explora el mundo de la codificación y la programación con CoderDojo.
          </p>
          <p className="text-center text-md text-muted-foreground 
          dark:text-text-light
          mb-8 font-semibold max-[50vw]" >
            Unete a nuestra comunidad de jóvenes programadores y descubre la alegría de<br></br> programar de una manera divertida y accesible.
          </p>
          <div className="flex gap-4 items-center">
            <Button text="Empezar Ahora" icon="bx bx-user-plus" url='register/' />
            <a href="#" className="
            text-primary-light rounded-md px-4 py-2
            border-2 border-text-light
            bg-text-light
            hover:bg-transparent
            dark:text-text-dark dark:border-text-dark">
              Más Información
            </a>
          </div>
        </div>
      </section>
      <div className='absolute -bottom-4 flex w-screen gap-4 md:gap-40 '>
        <svg className='w-full h-auto' viewBox="0 0 356 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M87.6551 1L1 16.9696V151H354L286.483 80.2776L161.02 71.7224L87.6551 1Z" fill="#0B2D5F" stroke="#0B2D5F" />
        </svg>
        <svg className='w-full h-auto' viewBox="0 0 357 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M269.099 1L356 16.9696V151H2L69.7078 80.2776L195.527 71.7224L269.099 1Z" fill="#0B2D5F" stroke="#0B2D5F" />
        </svg>
      </div>
    </main>
  );
}
export default HomeMain;