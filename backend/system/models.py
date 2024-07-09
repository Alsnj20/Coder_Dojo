from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class UsuarioManager(BaseUserManager):
  def create_user(self, email, password):
    if not email:
      raise ValueError('Ingrese un correo')
    if not password:
      raise ValueError('Ingrese una contraseña')

    norm_email = self.normalize_email(email)
    usuario = self.model(
      username = norm_email,
      email = norm_email
    )
    usuario.set_password(password)
    usuario.save(using=self._db)
    return usuario

  def create_superuser(self, email, password):
    usuario = self.create_user(email, password)
    usuario.is_admin = True
    usuario.save(using=self._db)
    return usuario

class Usuario(AbstractUser):
  class Types(models.TextChoices):
    ADMIN = 'AD', 'Administrador'
    STUDENT = 'ST', 'Estudiante'
    TEACHER = 'TC', 'Docente'

  email = models.EmailField(unique=True) #pk
  tipo = models.CharField(
    max_length=2,
    choices=Types.choices,
  )

  objects = UsuarioManager
  REQUIRED_FIELDS = []
  USERNAME_FIELD = 'email'

  def __str__(self):
    return self.email