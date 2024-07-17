import React, { useState } from 'react';
import Card from '../Admin/Utilities'


function TeacherCreateTask({ cursoId }) {
  const [task, setTask] = useState({});

  

  return (
    <Card>
      <form className='flex flex-col gap-3'>
        <div>
          <label>Nombre de la tarea</label>
          <input placeholder="  Name Task" type="text" name="nombre" />
        </div>
        <div>
          <label>Descripción</label>
          <br />
          <textarea minLength={200}
          maxLength={500} placeholder="Description Task" name="descripcion"></textarea>
        </div>
        <div>
          <label>Fecha de entrega</label>
          <input type="date" name="fecha_entrega" />
        </div>
        <div>
          <label>Archivo</label>
          <input type="file" name="archivo" />
        </div>
        <div className=' grid grid-cols-2 md:max-w-max'>
          <button className='bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded'
          type="submit">Crear tarea</button>
          <button className='bg-secondary-light hover:bg-secondary-dark text-primary-light font-bold py-2 px-4 rounded'
          type="reset">Cancelar</button>
        </div>
      </form>
    </Card>
  )
}
export default TeacherCreateTask;