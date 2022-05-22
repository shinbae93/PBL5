from django.db import models

# Create your models here.
class Album(models.Model):
    name = models.TextField(max_length=256)
    songSize = models.BigIntegerField()
    linkImage = models.TextField()
