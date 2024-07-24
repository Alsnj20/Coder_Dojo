from django.urls import include, path
from .import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
  # Registro de usuarios
  path("system/user/register/", views.CreateUserView.as_view(), name="register"),
  # Tokens de autenticación
  # Token => Existe una cuenta
  path("system/token/", TokenObtainPairView.as_view(), name="get_token"),
  path("system/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
  # Usuarios
  path("system-auth/", include("rest_framework.urls", namespace="rest_framework")), 
  # Login
  path("system/user/login/", views.LoginView.as_view(), name="login"),

  # Usuarios
  path("system/user/list/", views.UsersView.as_view(), name="user_list"),
  path("system/user/<int:pk>/", views.UserDetailView.as_view(), name="user_detail"),
  
  # Cursos
  path("system/course/create/", views.CourseCreateView.as_view() ,name="course_create"),
  path("system/course/list/", views.CourseListView.as_view(), name="course_list"),
  path("system/course/<int:pk>/", views.CourseDetailView.as_view(), name="course_detail"),
  
  # Inscripción a cursos
  
  # Estudiantes
  path("system/student/enroll/<int:pkC>/<int:pkE>/", views.CoursesOfAStudentView.as_view(), name="enroll-student"),
  path("system/student/<int:pk>/courses/", views.StudentMyCourses.as_view(), name="student_mycourses"),
  path("system/student/<int:student_id>/assigned_tasks/", views.AssignedTasksView.as_view(), name="assigned_tasks"),
  
  # Teachers
  path("system/teacher/list/", views.TeacherListView.as_view(), name="teacher_list"),
  path("system/teacher/course/<int:pk>/", views.CoursesByTeacherView.as_view(), name="teacher_course"),
  
  # Tareas 
  path("system/course/<int:curso_id>/task/create/", views.TaskCreateView.as_view(), name="task_create"),
  path("system/course/<int:curso_id>/task/list/", views.TaskListView.as_view(), name="task_list"),
  path("system/course/<int:curso_id>/task/assign/", views.AssignTaskView.as_view(), name="task_detail"),
]