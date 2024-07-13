import HomeEvent from './HomeEvent';
import HomeRol from './HomeRol';
import coderDojoMain from './img/coderDojoMain.png';
function Main(){
  return (
    <main className="py-12 px-6 md:px-12 lg:px-24">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#0b2d5f]">Explora el mundo de la codificación con CoderDojo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Unete a nuestra comunidad de jóvenes programadores y descubre la alegría de programar de una manera divertida y accesible.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="bg-[#0b2d5f] text-white px-6 py-3 rounded-md hover:bg-[#0a2a54] flex items-center gap-2"
            >
              <i className="text-lg bx bx-user-plus text-white"></i>
              Empezar 
            </a>
            <a href="#" className="text-[#0b2d5f] hover:border-b-2 border-[#0b2d5f]">Más Información</a>
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
export default Main;