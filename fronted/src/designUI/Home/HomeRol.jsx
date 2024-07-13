import HomeRolCard from "./HomeRolCard"
function HomeSection() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-8 text-[#0b2d5f]">Que rol eres?</h2>
      <div className="grid md:grid-cols-3 gap-8">
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