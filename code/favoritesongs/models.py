from django.db import models

from songs.models import Song
from django.contrib.auth.models import User

# Create your models here.
class FavoriteSong(models.Model):
    song = models.ForeignKey(
        Song,
        on_delete=models.CASCADE,
        blank=False,
        null=True)#1-n
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=False,
        null=True)#1-n