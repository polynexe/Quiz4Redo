from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer, TaskSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/projects/',
        '/api/projects/create/',
        '/api/projects/<id>/',
        '/api/projects/<id>/update/',
        '/api/projects/<id>/delete/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(_id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProject(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def createTask(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)