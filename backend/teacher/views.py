# Models
from system.models import *;
from system.serializers import *;
# Rest Framework
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

class CoursesByTeacherView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    courses = Curso.objects.filter(docente=pk)
    serializer = CursoSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
# Task
class TaskCreateView(generics.CreateAPIView):
  queryset = Tarea.objects.all()
  serializer_class = TareaSerializer
  permission_classes = [permissions.AllowAny]

  def post(self, request, *args, **kwargs):
        curso_id = self.kwargs.get('curso_id') 
        data = request.data.copy()
        data['curso'] = curso_id  
        serializer = self.get_serializer(data=data)
        
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskListView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, curso_id):
    tasks = Tarea.objects.filter(curso=curso_id)
    serializer = TareaSerializer(tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
  
# Assign Task
class AssignTaskView(APIView):
  permission_classes = [permissions.AllowAny]

  def post(self, request, *args, **kwargs):
    task_id = request.data.get('task_id')
    course_id = kwargs.get('curso_id')
    try:
      tarea = Tarea.objects.get(id=task_id)
      curso = Curso.objects.get(id=course_id)
      estudiantes = curso.estudiantes.all()
      print("S", estudiantes)
            
      for estudiante in estudiantes:
        Entrega.objects.get_or_create(
          tarea=tarea,
          estudiante=estudiante,
          defaults={'enlace': ''}
        )
            
      tarea.asignada = True
      tarea.save()
      print(tarea.__dict__)      
      return Response({"status": "Tasks assigned successfully"}, status=status.HTTP_200_OK)
    except (Tarea.DoesNotExist, Curso.DoesNotExist):
      return Response({"error": "Task or course not found"}, status=status.HTTP_404_NOT_FOUND)
    
# list deliveries by task
class DeliveryByTaskView(APIView):
  permission_classes = [permissions.AllowAny]
  
  def post(self, request, *args, **kwargs):
    task_id = request.data.get('task_id')
    try:
      task = Tarea.objects.get(id=task_id)
      deliveries = Entrega.objects.filter(tarea=task)
      serializer = EntregaSerializer(deliveries, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
    except:
      return Response({"error": "Deliveries not found"}, status=status.HTTP_404_NOT_FOUND)
        
# Update delivery grade
class GradeDeliveryView(APIView):
  permission_classes = [permissions.AllowAny]
  
  def post(self, request, *args, **kwargs):
    entrega_id = request.data.get('delivery_id')
    grade = request.data.get('grade')
    try:
      print(entrega_id, grade)
      entrega = Entrega.objects.get(id=entrega_id)

      entrega.calificacion = grade
      entrega.save()
      return Response({"status": "Grade assigned successfully"}, status=status.HTTP_200_OK)
    except Entrega.DoesNotExist:
      return Response({"error": "Delivery not found"}, status=status.HTTP_404_NOT_FOUND)
