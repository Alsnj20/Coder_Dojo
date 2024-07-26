import React, { useState } from 'react';
import Card from '../Admin/Utilities'
import axios from 'axios';


function TeacherCreateTask({ cursoId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description, date, cursoId)
    try {
      const response = await axios.post(`https://coderdojo-backend.vercel.app/system/course/${cursoId}/task/create/`, {
        nombre: title,
        descripcion: description,
        fecha_entrega: date,
        curso_id: cursoId,
      })
      alert('Tarea creada con éxito')
      console.log("Tarea Creada ", response.data)

    }catch{
      alert('Error al crear la tarea')
    }
  }

  return (
    <Card>
      <form className='flex flex-col gap-3'>
        <div>
          <label>Nombre de la tarea</label>
          <input placeholder="  Name Task" type="text" name="nombre" 
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción</label>
          <br />
          <textarea minLength={20}
          maxLength={500} placeholder="Description Task" name="descripcion"
          onChange={(e) => setDescription(e.target.value)}
          ></textarea
          >
        </div>
        <div>
          <label>Fecha de entrega</label>
          <input type="date" name="fecha_entrega" 
          onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className=' grid grid-cols-2 md:max-w-max'>
          <button 
          onClick={handleSubmit}
          className='bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded'
          type="submit">Crear tarea</button>
          <button className='bg-secondary-light hover:bg-secondary-dark text-primary-light font-bold py-2 px-4 rounded'
          type="reset"
          onClick={() => setShowForm(false)}
          >Cancelar</button>
        </div>
      </form>
    </Card>
  );
}
export default TeacherCreateTask;