from django.db import models
from django import forms
from django.forms import ModelForm
from .models import Usuario, Curso, Tarea, Entrega

class LoginForm(forms.Form):
  email = forms.EmailField(label='Correo electrónico')
  password = forms.CharField(label='Contraseña', widget=forms.PasswordInput)

class LogoutForm(forms.Form):
  pass

class UsuarioForm(ModelForm):
  password1 = forms.CharField(label='Contraseña', widget=forms.PasswordInput)
  password2 = forms.CharField(label='Confirmar contraseña', widget=forms.PasswordInput)

  class Meta:
    model = Usuario
    fields = ['email', 'name']

  def clean_password2(self):
    password1 = self.cleaned_data.get('password1')
    password2 = self.cleaned_data.get('password2')
    if password1 and password2 and password1 != password2:
      raise forms.ValidationError('Las contraseñas no coinciden')
    return password2
  
  def save(self, commit=True):
    user = super().save(commit=False)
    user.set_password(self.cleaned_data['password1'])
    if commit:
      user.save()
    return user

class RegisterForm(UsuarioForm):
  class Types(models.TextChoices):
    STUDENT = 'ST', 'Estudiante'
    TEACHER = 'TC', 'Profesor'

  tipo = forms.ChoiceField(label='Tipo de usuario', choices=Types.choices)

  class Meta:
    model = Usuario
    fields = ['email', 'name']

  def save(self, commit=True):
    user = super().save(commit=False)
    user.username = self.cleaned_data['email']
    user.email = self.cleaned_data['email']
    user.tipo = self.cleaned_data['tipo']
    if commit:
      user.save()
    return user    

class EstudianteForm(UsuarioForm):
  class Meta:
    model = Usuario
    fields = ['email', 'name']

    def save(self, commit=True):
      user = super().save(commit=False)
      user.tipo = Usuario.Types.ESTUDIANTE
      if commit:
        user.save()
      return user

class ProfesorForm(UsuarioForm):
  class Meta:
    model = Usuario
    fields = ['email', 'name']

    def save(self, commit=True):
      user = super().save(commit=False)
      user.tipo = Usuario.Types.PROFESOR
      if commit:
        user.save()
      return user

class CursoForm(ModelForm):
  class Meta:
    model = Curso
    fields = '__all__'

class TareaForm(ModelForm):
  class Meta:
    model = Tarea
    fields = '__all__'

class EntregaForm(ModelForm):
  class Meta:
    model = Entrega
    fields = '__all__'