from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.TextField(max_length=256)
    linkImage = models.TextField()
    description = models.TextField(default='')