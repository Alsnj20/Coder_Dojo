# Models
from system.models import *;
from system.serializers import *;
# Rest Framework
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

# Create your views here.
class CoursesByTeacherView(APIView):
  permission_classes = [permissions.AllowAny]

  def get(self, request, pk):
    courses = Curso.objects.filter(docente=pk)
    serializer = CursoSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
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