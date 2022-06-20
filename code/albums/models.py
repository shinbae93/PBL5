from django.db import models
from songs.models import Song

# Create your models here.
class Album(models.Model):
    name = models.TextField(max_length=256)
    songSize = models.BigIntegerField()
    linkImage = models.TextField()
    songs = models.ManyToManyField(Song)
