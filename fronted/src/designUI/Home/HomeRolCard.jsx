
function HomeCardRol({rol="", icon="", children}) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md">
      <i className={`mb-4 text-5xl text-primary-dark ${icon}`}></i>
      <h3 className="text-2xl font-bold mb-2">{rol}</h3>
      <p className="text-muted-foreground">
        {children}
      </p>
    </div>
  )
}
export default HomeCardRol;