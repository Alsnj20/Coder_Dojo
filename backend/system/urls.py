from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),
    path('students/', views.list_estudiantes_view, name='students'),
    path('teachers/', views.list_docentes_view, name='teachers'),
]