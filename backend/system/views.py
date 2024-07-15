# Register
from rest_framework import generics, permissions
from .models import *
from .serializers import *
# Login
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework_simplejwt.tokens import RefreshToken

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
      refresh = RefreshToken.for_user(user)
      return Response({
                "message": "Usuario autenticado",
                "user": UsuarioSerializer(user).data,
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
            })
    else:
      return Response({"message": "Usuario no autenticado"}, status=status.HTTP_401_UNAUTHORIZED)
    
class UsersView(APIView):
  permission_classes = [permissions.IsAdminUser]

  def get(self, request):
    print(request.user)
    users = Usuario.objects.exclude(tipo='AD')
    serializer = UsuarioSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
class UserDetailView(APIView):
  permission_classes = [permissions.AllowAny]

  def put(self, request, pk):
    print(request.data)
    try:
      user = Usuario.objects.get(pk=pk)
      print(user)
      serializer = UsuarioSerializer(user, data=request.data, partial=True)
      if serializer.is_valid():
        if 'password' in request.data and request.data['password']:
          user.set_password(request.data['password'])
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
      print(serializer.errors)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Usuario.DoesNotExist:
      return Response({"error": "Usuario no encontrado."}, status=status.HTTP_404_NOT_FOUND)

  def delete(self, request, pk):
    try:
      user = Usuario.objects.get(pk=pk)
      user.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
    except Usuario.DoesNotExist:
      return Response({"error": "Usuario no encontrado."}, status=status.HTTP_404_NOT_FOUND)
  
class CourseCreateView(generics.CreateAPIView):
  queryset = Curso.objects.all()
  serializer_class = CursoSerializer
  permission_classes = [permissions.AllowAny]
  
  def get_serializer_context(self):
    context = super().get_serializer_context()
    context.update({"request": self.request})
    return context
  
class CourseListView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request):
    courses = Curso.objects.all()
    serializer = CursoSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
class CoursesByTeacherView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    courses = Curso.objects.filter(docente=pk)
    serializer = CursoSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
class TeacherListView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request):
    teachers = Usuario.objects.filter(tipo='TC')
    serializer = UsuarioSerializer(teachers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)