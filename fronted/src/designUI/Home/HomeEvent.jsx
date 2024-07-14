import HomeEventCard from './HomeEventCard';

function HomeEvent(){
  return(
    <section className='mt-12'>
      <h2 className='text-3xl font-bold mb-8 text-primary-light dark:text-text-dark'>
        Eventos Futuros
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <HomeEventCard title='Evento 1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum.
        </HomeEventCard>
        <HomeEventCard title='Evento 2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum.
        </HomeEventCard>
        <HomeEventCard title='Evento 3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorum.
        </HomeEventCard>
      </div>
    </section>
  )
}
export default HomeEvent;