from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import *
from .serializers import *

class CreateUserView(generics.CreateAPIView):
  queryset = Usuario.objects.all()
  serializer_class = UsuarioSerializer
  permission_classes = [AllowAny]

  def get_serializer_context(self):
    context = super().get_serializer_context()
    context.update({"request": self.request})
    return context