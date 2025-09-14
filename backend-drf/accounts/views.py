from django.shortcuts import render
from .serilizers import UserSerilizer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework import generics

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerilizer
    permission_classes =[AllowAny]
