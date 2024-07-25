import HomeRolCard from "./HomeRolCard"
function HomeSection() {
  return (
    <section className="
    w-screen flex flex-col justify-center
    gap-8 items-center py-36 px-10 md:px-12 lg:px-24 h-full
    dark:bg-gradient-to-t from-primary-light to-primary-dark
      "

    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary-light dark:text-text-light">Descubre tu rol en 
      <i className="text-3xl md:text-5xl text-primary-light dark:text-text-light bx bx-code-alt ml-2" ></i>
        CoderDojo</h2>
      <p className="dark:text-text-light text-2xl font-semibold mb-8">¿Eres administrador, profesor o estudiante?</p>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <HomeRolCard rol="Estudiante" icon="bx bx-user">
          Explora proyectos de codificación, completa tareas y aprende a tu propio ritmo.
        </HomeRolCard>
        <HomeRolCard rol="Profesor" icon="bx bxs-school">
          Asigna tareas de codificación, supervisa el progreso de los estudiantes y brinda orientación.
        </HomeRolCard>
        <HomeRolCard rol="Administrador" icon="bx bx-cog">
          Administra usuarios, asigna roles y supervisa el progreso de los estudiantes.
        </HomeRolCard>
      </div>
    </section>
  )
}
export default HomeSection;