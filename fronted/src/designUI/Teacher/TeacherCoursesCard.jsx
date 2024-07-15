import Card from "../Admin/Utilities";

function TeacherCoursesCard({ course = {} }) {
  return (
    <Card>
      <div className="flex flex-col justify-between">
        <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
          Programacion Web 2
        </h1>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
          Profesor: Jane Smith
        </p>
      </div>
      <p className="font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quaerat praesentium voluptatum sit recusandae vitae voluptates sequi inventore, velit iure minus quisquam cupiditate animi dolorem quam, illo ad eveniet reiciendis?
      </p>
      <div className="flex justify-end">
        <button className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-2 px-4 rounded-md hover:bg-blue-900">
          <i className="bx bx-edit mr-1"></i> 
           Ver más
        </button>
      </div>
    </Card>
  );
}

export default TeacherCoursesCard;