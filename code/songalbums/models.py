from django.db import models
from albums.models import Album

from songs.models import Song

# Create your models here.
class SongAlbum(models.Model):
    song = models.ForeignKey(
        Song,
        on_delete=models.CASCADE,
        blank=False,
        null=True)#1-n
    album = models.ForeignKey(
        Album,
        on_delete=models.CASCADE,
        blank=False,
        null=True)#1-n