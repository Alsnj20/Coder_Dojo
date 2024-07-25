import axios from "axios"
import { useState } from "react"
// eslint-disable-next-line react/prop-types
export function Task({ task = {}, handleAssignTask }) {

  const [entregas, setEntregas] = useState([]);
  const [grade, setGrade] = useState(0);

  const loadDeliveries = async (taskId) => {
    try {
      const response = await axios.post(`http://localhost:8000/system/course/task/deliveries/`, { task_id: taskId });
      console.log(response.data);
      setEntregas(response.data);
    } catch (error) {
      alert('Error al cargar las entregas');
    }
  }

  const submitGrade = async (deliveryId, grade) => {
    console.log(deliveryId, grade);
    try {
      const response = await axios.post(`http://localhost:8000/system/course/task/deliveries/grade/`, { delivery_id: deliveryId, grade: parseInt(grade) });
      console.log(response.data);
      alert('Entrega calificada correctamente')
    } catch (error) {
      alert('Error al calificar la entrega');
    }
  }

  return <div className="bg-gray-200 p-4 rounded-lg" key={task.id}>
    <h2 className="text-2xl font-bold">{task.nombre}</h2>
    <p className="text-gray-500">{task.descripcion}</p>
    <p className="text-gray-500">Fecha de entrega: {task.fecha_entrega}</p>
    {task.asignada ? (
      <div>
        <button
          onClick={() => loadDeliveries(task.id)}
          className="bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Cargar Entregas
        </button>
        <div>
          {entregas.length != 0 && (
            <div>
              <h3>Entregas</h3>
              <div className="grid gap-4 mt-6">
                {entregas.length != 0 && entregas.map((entrega) => (
                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4" key={entrega.id}>
                    <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">{entrega.estudiante.name}</h2>
                    <a href={entrega.enlace} target="_blank" rel="noreferrer" className="text-primary-light dark:text-primary-dark">Ver entrega</a>
                    <div>
                      <input className="text-xl font-bold text-primary-light dark:text-primary-dark" 
                      onChange={(e) => setGrade(e.target.value)}
                      type="text" placeholder="0/20" />
                      <button 
                      className="
                      bg-primary-light
                      text-text-light
                      px-4 py-2 rounded-lg
                      hover:bg-primary-dark
                      flex items-center gap-2 
                      " 
                      onClick={() => submitGrade(entrega.id,grade) } >Calificar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    ) : (
      <button
        onClick={() => handleAssignTask(task.id)}
        className="bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Asignar Tarea
      </button>
    )}
  </div>
}
