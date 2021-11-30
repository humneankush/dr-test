from typing import Generic

from django.db.models.fields import GenericIPAddressField
from .models import Student
from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView

# Create your views here.
class StudentList(ListAPIView):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer




