from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),
    path('create_user/', views.create_user_view, name='create_user'),
    path('users/', views.list_users_view, name='list_users'),
    path('users/<int:user_id>/', views.user_detail_view, name='user_detail'),
    path('users/<int:user_id>/edit/', views.user_edit_view, name='user_edit'),
    path('users/<int:user_id>/delete/', views.user_delete_view, name='user_delete'),
    path('students/', views.list_students_view, name='students'),
    path('teachers/', views.list_teachers_view, name='teachers'),
    path('prueba/', views.hello_world, name='hello_world'),
]