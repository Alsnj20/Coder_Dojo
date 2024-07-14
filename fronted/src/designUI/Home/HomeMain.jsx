import HomeEvent from './HomeEvent';
import HomeRol from './HomeRol';
import coderDojoMain from './img/coderDojoMain.png';

function HomeMain() {
  return (
    <main className="py-12 px-6 md:px-12 lg:px-24">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary-light dark:text-text-dark">
            Explora el mundo de la codificación con CoderDojo
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Unete a nuestra comunidad de jóvenes programadores y descubre la alegría de programar de una manera divertida y accesible.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="register/"
              className="bg-primary-light text-white px-6 py-3 rounded-md hover:bg-primary-dark flex items-center gap-2"
            >
              <i className="text-lg bx bx-user-plus"></i>
              Empezar
            </a>
            <a href="#" className="text-primary-light dark:text-text-dark hover:border-b-2 border-primary-light dark:border-text-dark">
              Más Información
            </a>
          </div>
        </div>
        <div>
          <img src={coderDojoMain} width={600} height={400} alt="Coder Dojo" className="rounded-lg" />
        </div>
      </section>
      <HomeRol />
      <HomeEvent />
    </main>
  );
}
export default HomeMain;