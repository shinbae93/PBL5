from django.shortcuts import get_object_or_404, redirect, render
from typing_extensions import Self
from django.http import HttpResponse

from favoritesongs.models import FavoriteSong
from albums.models import Album
from songs.models import Song
from django.contrib.auth.models import User

# Create your views here.
def albumSongs(request, id):
    firstname = request.session["firstname"]
    album = Album.objects.get(id = id)
    songs = album.songs.all()
    return render(request, 'authentication/albumDetail.html',{"songs": songs, "firstname": firstname})
