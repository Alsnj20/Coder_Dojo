import Image from './img/coderDojoMain.png'

function HomeAboutUs(){
  return (
    <section className="
    w-screen flex flex-col justify-center
    gap-8 items-center py-36 px-10 md:px-12 lg:px-24 h-full
  dark:bg-muted-foreground
      "

    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary-light dark:text-text-dark">Quienes somos?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-center items-center justify-center md:w-[80%]">
        <p className='text-center font-semibold'>
        En CoderDojo, nuestra misión es empoderar a los jóvenes mediante la enseñanza de la programación y habilidades tecnológicas en un entorno inclusivo y lúdico. Creemos que cada joven tiene el potencial de convertirse en un creador digital, y trabajamos para proporcionar las herramientas y el apoyo necesarios para que puedan explorar y desarrollar sus habilidades.
        Nuestro programa  Programación para todos: CoderDojo está diseñado para ser accesible y divertido, permitiendo a los participantes sumergirse en el emocionante mundo de la codificación. Ofrecemos sesiones guiadas por apasionados mentores, que ayudan a los jóvenes a descubrir su potencial y a desarrollar su creatividad a través de proyectos prácticos y colaborativos.
        </p>
        <img src={Image} alt="CoderDojo" className="rounded-lg"/>
      </div>
    </section>
  )
}

export default HomeAboutUs;