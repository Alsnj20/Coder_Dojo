from rest_framework import serializers
from .models import Usuario, Curso, Tarea, Entrega

class UsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Usuario
    fields = ['id', 'name', 'email', 'password', 'tipo',]
    extra_kwargs = {'password': {'write_only': True, 'required': False}}

  def create(self, validated_data):
    user = Usuario.objects.create_user(
      email=validated_data['email'],
      password=validated_data['password']
    )
    user.name = validated_data['name']
    user.tipo = validated_data['tipo']
    user.save()
    return user
  
  def update(self, instance, validated_data):
    instance.name = validated_data.get('name', instance.name)
    instance.email = validated_data.get('email', instance.email)
    instance.tipo = validated_data.get('tipo', instance.tipo)
    if 'password' in validated_data and validated_data['password']:
      instance.set_password(validated_data['password'])
    instance.save()
    return instance
  
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