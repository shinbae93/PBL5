from django.db import models
from matplotlib import artist

from artists.models import Artist

# Create your models here.
class Song(models.Model):
    name = models.TextField(max_length=256)
    time = models.TextField(max_length=50)
    linkSave = models.TextField()
    artist = models.ForeignKey(
        Artist,
        on_delete=models.CASCADE,
        blank=False,
        null=True)#1-n