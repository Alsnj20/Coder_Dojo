from django.urls import include, path
from .import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
  # Registro de usuarios
  path("system/user/register/", views.CreateUserView.as_view(), name="register"),
  path('system/user/create-user/', views.CreateUserView.as_view(), name='create-user'),
  # Tokens de autenticación
  # Token => Existe una cuenta
  path("system/token/", TokenObtainPairView.as_view(), name="get_token"),
  path("system/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
  # Usuarios
  path("system-auth/", include("rest_framework.urls", namespace="rest_framework")) 
]