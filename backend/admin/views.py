# Models
from system.models import *;
from system.serializers import *;
# Rest Framework
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

class UserListView(APIView):
  permission_classes = [permissions.AllowAny]

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
  
class CourseDetailView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    try:
      course = Curso.objects.get(pk=pk)
      serializer = CursoSerializer(course)
      return Response(serializer.data, status=status.HTTP_200_OK)
    except Curso.DoesNotExist:
      return Response({"error": "Curso no encontrado."}, status=status.HTTP_404_NOT_FOUND)
  
  def put(self, request, pk):
    print("DATA: ",request.data)
    try:
      course = Curso.objects.get(pk=pk)
      serializer = CursoSerializer(course, data=request.data, partial=True)
      if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Curso.DoesNotExist:
      return Response({"error": "Curso no encontrado."}, status=status.HTTP_404_NOT_FOUND)
  
  def delete(self, request, pk):
    try:
      course = Curso.objects.get(pk=pk)
      course.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
    except Curso.DoesNotExist:
      return Response({"error": "Curso no encontrado."}, status=status.HTTP_404_NOT_FOUND)

class TeacherListView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request):
    teachers = Usuario.objects.filter(tipo='TC')
    serializer = UsuarioSerializer(teachers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

