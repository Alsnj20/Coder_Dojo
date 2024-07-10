from rest_framework import serializers
from .models import Usuario, Curso, Tarea, Entrega

class UsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usuario
    fields = ['id', 'email', 'name', 'tipo']

class CursoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Curso
    fields = ['id', 'nombre', 'descripcion', 'docente', 'estudiantes']

class TareaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tarea
    fields = ['id', 'nombre', 'descripcion', 'curso', 'fecha_entrega']
  
class EntregaSerializer(serializers.ModelSerializer):
  tarea = TareaSerializer(read_only=True)
  estudiante = UsuarioSerializer(read_only=True)

  class Meta:
    model = Entrega
    fields = ['id', 'tarea', 'estudiante', 'enlace', 'calificacion']