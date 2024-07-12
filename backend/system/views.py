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
    
class UsersView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request):
    print("Datos: ",self, request.json())
    users = Usuario.objects.exclude(tipo='AD')
    serializer = UsuarioSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
class UserDetailView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    user = Usuario.objects.get(pk=pk)
    serializer = UsuarioSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
  def put(self, request, pk):
    user = Usuario.objects.get(pk=pk)
    serializer = UsuarioSerializer(user, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, pk):
    user = Usuario.objects.get(pk=pk)
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)