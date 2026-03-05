from django.shortcuts import render
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def getUsers(request):
    users = CustomUser.objects.all()
    serializer = CustomUserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    user = CustomUser.objects.get(_id=pk)
    serializer = CustomUserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)