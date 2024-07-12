# Register
from rest_framework import generics, permissions
from .models import *
from .serializers import *
# Login
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

class CreateUserView(generics.CreateAPIView):
  queryset = Usuario.objects.all()
  serializer_class = UsuarioSerializer
  permission_classes = [permissions.AllowAny]

  def get_serializer_context(self):
    context = super().get_serializer_context()
    context.update({"request": self.request})
    return context
  
class LoginView(APIView):
  permission_classes = [permissions.AllowAny]

  def post(self, request):
    email = request.data.get("email")
    password = request.data.get("password")

    user = authenticate(request, email=email, password=password)
    if user is not None:
      login(request, user)
      return Response({"message": "Usuario autenticado", "user": UsuarioSerializer(user).data})
    else:
      return Response({"message": "Usuario no autenticado"}, status=status.HTTP_401_UNAUTHORIZED)