from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.getUsers, name='user-list'),
    path('users/<int:pk>/', views.getUser, name='user-detail'),
    path('users/create/', views.createUser, name='user-create'),
]