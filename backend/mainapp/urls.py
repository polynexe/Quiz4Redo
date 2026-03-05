from .views import createProject, createTask, getProject, getProjects, getRoutes
from django.urls import path

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('projects/', getProjects, name='projects'),
    path('projects/create/', createProject, name='project-create'),
    path('projects/<str:pk>/', getProject, name='project'),
    path('projects/<str:pk>/tasks/create/', createTask, name='task-create'),
]