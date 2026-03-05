from django.db import models
from django.conf import settings

# Create your models here.

class Project(models.Model):

    STATUS_CHOICES = [
        ('completed', 'Completed'),
        ('in_progress', 'In Progress'),
    ]
    
    _id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    project_name = models.CharField(max_length=100)
    project_description = models.TextField(null=True, blank=True, default='No description provided.')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='in_progress')
    hours_spent = models.IntegerField(default=0)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.project_name
    
class Task(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    task_name = models.CharField(max_length=100)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    task_description = models.TextField(null=True, blank=True, default='No description provided.')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.task_name