from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import LoginForm, EstudianteForm, RegisterForm
from .models import Usuario
from django.contrib.auth import authenticate, login, logout


# Create your views here.

def home(request):
    return render(request, 'system/home.html')

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user:
                login(request, user)
                return redirect('home')
    elif request.method == 'GET':
        form = LoginForm()
    return render(request, 'system/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('home')

def create_estudiante_view(request):
    if request.method == 'POST':
        form = EstudianteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    elif request.method == 'GET':
        form = EstudianteForm()
    return render(request, 'system/create_estudiante.html', {'form': form})

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    elif request.method == 'GET':
        form = RegisterForm()
    return render(request, 'system/register.html', {'form': form})
    