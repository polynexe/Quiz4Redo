from django.urls import path
from . import views

urlspattern = [
    path('users/', views.user_list, name='user-list'),
    path('users/<int:pk>/', views.user_detail, name='user-detail'),
    path('users/create/', views.user_create, name='user-create'),
]