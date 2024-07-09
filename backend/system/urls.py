from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),
    path('students/', views.list_students_view, name='students'),
    path('teachers/', views.list_teachers_view, name='teachers'),
    path('create_student/', views.create_student_view, name='create_student'),
]