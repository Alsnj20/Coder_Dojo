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
  name = models.CharField(max_length=50)
  tipo = models.CharField(
    max_length=2,
    choices=Types.choices,
  )

  objects = UsuarioManager
  REQUIRED_FIELDS = []
  USERNAME_FIELD = 'email'

  def __str__(self):
    return "{Name: "+ self.username+",Email: "+self.email+",Type: "+self.tipo+"}"
  
class Curso(models.Model):
  nombre = models.CharField(max_length=50)
  descripcion = models.TextField()
  docente = models.ForeignKey(Usuario, limit_choices_to={'tipo': Usuario.Types.TEACHER}, on_delete=models.CASCADE)
  estudiantes = models.ManyToManyField(Usuario, limit_choices_to={'tipo': Usuario.Types.STUDENT}, related_name='cursos')

  def __str__(self):
    return "{Course: "+ self.nombre+",Docente: "+self.docente.username+"}"
  
class Tarea(models.Model):
  nombre = models.CharField(max_length=50)
  descripcion = models.TextField()
  curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
  fecha_entrega = models.DateTimeField()

  def __str__(self):
    return "{Task: "+ self.nombre+",Course: "+self.curso.nombre+"}"
  
class Entrega(models.Model):
  tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE)
  estudiante = models.ForeignKey(Usuario, on_delete=models.CASCADE)
  enlace = models.URLField()
  calificacion = models.FloatField(null=True, blank=True)

  def __str__(self):
    return "{Task: "+ self.tarea.nombre+",Student: "+self.estudiante.username+"}"
  