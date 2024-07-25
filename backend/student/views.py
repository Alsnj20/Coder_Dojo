# Models
from system.models import *;
from system.serializers import *;
# Rest Framework
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

# Enroll a student in a course
class CoursesOfAStudentView(APIView):
  permission_classes = [permissions.AllowAny] 
  
  def post(self, request, pkC, pkE):
    print(pkC, pkE)
    try:
      course = Curso.objects.get(id=pkC)
      print(course)
      student = Usuario.objects.get(id=pkE, tipo='ST')
      print(student)
      course.estudiantes.add(student)
      course.save()
      return Response({"message": "Estudiante inscrito con el éxito"}, status=status.HTTP_200_OK)
    except Curso.DoesNotExist:
      return Response({"error": "Curso no encontrado."}, status=status.HTTP_404_NOT_FOUND)
    except Usuario.DoesNotExist:
      return Response({"error": "Estudiante no encontrado."}, status=status.HTTP_404_NOT_FOUND)
    
# Student my courses
class StudentMyCourses(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    try:
      student = Usuario.objects.get(id=pk, tipo='ST')
      courses = student.cursos.all()
      serializer = CursoSerializer(courses, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
    except Usuario.DoesNotExist:
      return Response({"error": "Estudiante no encontrado."}, status=status.HTTP_404_NOT_FOUND)
    
# Student list Tasks
class AssignedTasksView(generics.ListAPIView):
  serializer_class = EntregaSerializer
  permission_classes = [permissions.AllowAny]

  def get_queryset(self):
    student_id = self.kwargs.get('student_id')
    try:
      user = Usuario.objects.get(id=student_id, tipo=Usuario.Types.STUDENT)
      return Entrega.objects.filter(estudiante_id=user.id, enlace='')
    except Usuario.DoesNotExist:
      return Tarea.objects.none()
    
# Student list delivered
class SubmittedTasksView(generics.ListAPIView):
  serializer_class = EntregaSerializer
  permission_classes = [permissions.AllowAny]

  def get_queryset(self):
    student_id = self.kwargs.get('student_id')
    try:
      user = Usuario.objects.get(id=student_id, tipo=Usuario.Types.STUDENT)
      return Entrega.objects.filter(estudiante=user).exclude(enlace='')
    except Usuario.DoesNotExist:
      return Entrega.objects.none()
    
# Student create deliveries
class UpdateEntregaView(generics.CreateAPIView):
  serializer_class = EntregaSerializer
  permission_classes = [permissions.AllowAny]

  def post(self, request, user_id):
    try:
      user = Usuario.objects.get(id=user_id)
    except Usuario.DoesNotExist:
      return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
          
    if user.tipo != Usuario.Types.STUDENT:
      return Response({"error": "Permiso denegado"}, status=status.HTTP_403_FORBIDDEN)
        
    tarea_id = request.data.get('tarea')
    url = request.data.get('url')

    try:
      tarea = Tarea.objects.get(id=tarea_id)
    except Tarea.DoesNotExist:
      return Response({"error": "Tarea no encontrada"}, status=status.HTTP_404_NOT_FOUND)
    
    try:
      entrega = Entrega.objects.get(tarea=tarea, estudiante=user)
      entrega.enlace = url
      entrega.save()
      return Response(EntregaSerializer(entrega).data, status=status.HTTP_200_OK)
    except Entrega.DoesNotExist:
      entrega = Entrega.objects.create(
        tarea=tarea,
        estudiante=user,
        enlace=url
      )
      return Response(EntregaSerializer(entrega).data, status=status.HTTP_201_CREATED)