from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.http import HttpResponse
from system.forms import LoginForm, EstudianteForm, RegisterForm
from .models import Usuario
from django.contrib.auth import authenticate, login, logout

def home(request):
    return render(request, 'system/home.html')

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['email'], password=form.cleaned_data['password'])
            if user:
                login(request, user)
                return redirect('home')
    elif request.method == 'GET':
        form = LoginForm()
    return render(request, 'system/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('home')

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
        print(form.errors)
    elif request.method == 'GET':
        form = RegisterForm()
    return render(request, 'system/register.html', {'form': form})

def list_users_view(request):
    #if not request.user.is_authenticated or request.user.tipo != Usuario.Types.ADMIN:
    #    return HttpResponse('No tienes permisos para acceder a esta página')
    usuarios = Usuario.objects.all()
    return render(request, 'system/list_users.html', {'usuarios': usuarios})
    
def list_students_view(request):
    estudiantes = Usuario.objects.filter(tipo=Usuario.Types.STUDENT)
    return render(request, 'system/list_students.html', {'estudiantes': estudiantes})

def list_teachers_view(request):
    docentes = Usuario.objects.filter(tipo=Usuario.Types.TEACHER)
    return render(request, 'system/list_teachers.html', {'docentes': docentes})

def create_user_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_users')
    elif request.method == 'GET':
        form = RegisterForm()
    return render(request, 'system/create_user.html', {'form': form})

def user_detail_view(request, user_id):
    user = Usuario.objects.get(id=user_id)
    return render(request, 'system/user_detail.html', {'user': user})

def user_edit_view(request, user_id):
    user = Usuario.objects.get(id=user_id)
    if request.method == 'POST':
        form = EstudianteForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('list_users')
    elif request.method == 'GET':
        form = EstudianteForm(instance=user)
    return render(request, 'system/create_user.html', {'form': form})

def user_delete_view(request, user_id):
    user = Usuario.objects.get(id=user_id)
    user.delete()
    return redirect('list_users')

# Frontend
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import viewsets
from .models import Usuario, Curso, Tarea, Entrega
from system.serializers import UsuarioSerializer, CursoSerializer, TareaSerializer, EntregaSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class TareaViewSet(viewsets.ModelViewSet):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializer

class EntregaViewSet(viewsets.ModelViewSet):
    queryset = Entrega.objects.all()
    serializer_class = EntregaSerializer

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


class RegisterView(APIView):
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class AdminCheckView(APIView):
    def get(self, request):
        if request.user.tipo == Usuario.Types.ADMIN:
            return Response({'message': 'You are an admin', 'is_admin': True}, status=status.HTTP_200_OK)
        return Response({'message': 'You are not an admin', 'is_admin': False}, status=status.HTTP_200_OK)