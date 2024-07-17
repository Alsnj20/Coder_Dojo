import { Link, useNavigate } from "react-router-dom";
import Card from "../Admin/Utilities";

function TeacherCoursesCard({ course = {}, user = {} }) {
  return (
    <Card>
      <div className="flex flex-col justify-between">
        <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
          {course.nombre}
        </h1>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
          Profesor: {user.name}
        </p>
      </div>
      <p className="font-medium">
        {course.descripcion}
      </p>
      <div className="flex justify-end">
        <Link to={`course/${course.id}`} state={{course}}>
        <button 
        className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-2 px-4 rounded-md hover:bg-blue-900 mt-2" >
          <i className="bx bx-edit mr-1"></i>
          Ver más
        </button>
        </Link>
      </div>
    </Card >
  );
}

export default TeacherCoursesCard;