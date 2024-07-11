from rest_framework import serializers
from .models import Usuario, Curso, Tarea, Entrega

class UsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usuario
    fields = ['id', 'email', 'name', 'tipo', 'password']
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    return super().create(validated_data)
  
class CursoSerializer(serializers.ModelSerializer):
  docente = UsuarioSerializer(read_only=True)
  estudiantes = UsuarioSerializer(read_only=True, many=True)
  class Meta:
    model = Curso
    fields = ['id', 'nombre', 'descripcion', 'docente', 'estudiantes']

class TareaSerializer(serializers.ModelSerializer):
  curso = CursoSerializer(read_only=True)
  class Meta:
    model = Tarea
    fields = ['id', 'nombre', 'descripcion', 'curso', 'fecha_entrega']
  
class EntregaSerializer(serializers.ModelSerializer):
  tarea = TareaSerializer(read_only=True)
  estudiante = UsuarioSerializer(read_only=True)

  class Meta:
    model = Entrega
    fields = ['id', 'tarea', 'estudiante', 'enlace', 'calificacion']