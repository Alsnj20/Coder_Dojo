from django.urls import include, path
from .import views
from admin import views as admin_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
  # Tokens de autenticación
  # Token => Existe una cuenta
  path("system/token/", TokenObtainPairView.as_view(), name="get_token"),
  path("system/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
  # Usuarios
  path("system-auth/", include("rest_framework.urls", namespace="rest_framework")), 
  
  # Registro de usuarios
  path("system/user/register/", views.CreateUserView.as_view(), name="register"),
  
  # Login
  path("system/user/login/", views.LoginView.as_view(), name="login"),

  # ADMIN
  # Usuarios
  path("system/user/list/", admin_views.UserListView.as_view(), name="user_list"),
  path("system/user/<int:pk>/",admin_views.UserDetailView.as_view(), name="user_detail"),
  # Cursos
  path("system/course/create/", admin_views.CourseCreateView.as_view() ,name="course_create"),
  path("system/course/list/", admin_views.CourseListView.as_view(), name="course_list"),
  path("system/course/<int:pk>/", admin_views.CourseDetailView.as_view(), name="course_detail"),
  
  # Inscripción a cursos
  path("system/student/enroll/<int:pkC>/<int:pkE>/", views.CoursesOfAStudentView.as_view(), name="enroll-student"), 
  
  # Estudiantes
  path("system/student/<int:pk>/courses/", views.StudentMyCourses.as_view(), name="student_mycourses"),
  path("system/student/<int:student_id>/assigned_tasks/", views.AssignedTasksView.as_view(), name="assigned_tasks"),
  path("system/student/<int:user_id>/delivery/", views.CreateorUpdateEntregaView.as_view(), name="create_or_update_entrega"),
  
  # Teachers
  path("system/teacher/list/", views.TeacherListView.as_view(), name="teacher_list"),
  path("system/teacher/course/<int:pk>/", views.CoursesByTeacherView.as_view(), name="teacher_course"),
  
  # Tareas 
  path("system/course/<int:curso_id>/task/create/", views.TaskCreateView.as_view(), name="task_create"),
  path("system/course/<int:curso_id>/task/list/", views.TaskListView.as_view(), name="task_list"),
  path("system/course/<int:curso_id>/task/assign/", views.AssignTaskView.as_view(), name="task_detail"),
  
  # Entregas
  path("system/course/task/deliveries/grade/", views.GradeDeliveryView.as_view(), name="delivery_grade"),
  path("system/course/task/deliveries/", views.DeliveryByTaskView.as_view(), name="deliveries_list"),
  
]

