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
          
          
class StudentAssignmentsView(generics.ListAPIView):
  serializer_class = EntregaSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
        user = self.request.user
        return Entrega.objects.filter(estudiante=user)
  

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
    
    
# Student courses
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
    
class AssignedTasksView(generics.ListAPIView):
    serializer_class = TareaSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        student_id = self.kwargs.get('student_id')
        try:
            user = Usuario.objects.get(id=student_id, tipo=Usuario.Types.STUDENT)
            cursos_ids = user.cursos.values_list('id', flat=True)
            print("Cursos ",cursos_ids)
            serializer = TareaSerializer(Tarea.objects.filter(curso__id__in=cursos_ids), many=True)
            return serializer.data
        except Usuario.DoesNotExist:
            return Tarea.objects.none()
        except Entrega.DoesNotExist:
            print("Entrega no encontrada")
            return Tarea.objects.none()
    
# Student entregas
class CreateorUpdateEntregaView(generics.CreateAPIView):
    serializer_class = EntregaSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, user_id, *args, **kwargs):
        try:
            user = Usuario.objects.get(id=user_id)
        except Usuario.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
          
        print("User ",user)
        if user.tipo != Usuario.Types.STUDENT:
            return Response({"error": "Permiso denegado"}, status=status.HTTP_403_FORBIDDEN)
        
        tarea_id = request.data.get('tarea')
        print("Tarea ",tarea_id)
        url = request.data.get('url')
        print("Enlace ",url)

        try:
            tarea = Tarea.objects.get(id=tarea_id)
        except Tarea.DoesNotExist:
            return Response({"error": "Tarea no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        entrega, created = Entrega.objects.get_or_create(
            tarea=tarea,
            estudiante=user,
            defaults={'enlace': url}
        )

        if not created:
            entrega.enlace = url
            entrega.save()

        return Response(EntregaSerializer(entrega).data, status=status.HTTP_200_OK)
      
      
class UpdateEntregaView(generics.UpdateAPIView):
    queryset = Entrega.objects.all()
    serializer_class = EntregaSerializer
    permission_classes = [permissions.AllowAny]
    
    def put(self, request, *args, **kwargs):
        entrega = self.get_object()
        url = request.data.get('url')
        entrega.enlace = url
        entrega.save()
        return Response(EntregaSerializer(entrega).data, status=status.HTTP_200_OK)
      
    def delete(self, request, *args, **kwargs):
        entrega = self.get_object()
        entrega.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
