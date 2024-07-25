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
  docente = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.filter(tipo=Usuario.Types.TEACHER))
  estudiantes = UsuarioSerializer(read_only=True, many=True, required=False)
  class Meta:
    model = Curso
    fields = ['id', 'nombre', 'descripcion', 'docente', 'estudiantes']
  
  def validate(self, data):
    nombre = data.get('nombre')
    docente = data.get('docente')
    if Curso.objects.filter(nombre=nombre, docente=docente).exists():
      raise serializers.ValidationError("El curso ya existe")
    return data

class TareaSerializer(serializers.ModelSerializer):
  curso = serializers.PrimaryKeyRelatedField(queryset=Curso.objects.all())
  
  class Meta:
    model = Tarea
    fields = ['id', 'nombre', 'descripcion', 'curso', 'fecha_entrega', 'asignada']
    
  def to_representation(self, instance):
    representation = super().to_representation(instance)
    entrega = Entrega.objects.filter(tarea=instance).first()
    representation['calificacion'] = entrega.calificacion if entrega else None
    return representation    
  
class EntregaSerializer(serializers.ModelSerializer):
  tarea = TareaSerializer(read_only=True)
  estudiante = UsuarioSerializer(read_only=True)

  class Meta:
    model = Entrega
    fields = ['id', 'tarea', 'estudiante', 'enlace', 'calificacion']