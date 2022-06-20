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
    request.session['idAlbum'] = id
    album = Album.objects.get(id = id)
    songs = album.songs.all()
    return render(request, 'authentication/albumDetail.html',{"songs": songs, "firstname": firstname})
def getallsong(request):
    if request.method == 'GET':
            idsong = []
            album = Album.objects.get(id = request.session["idAlbum"])
            songs = album.songs.all()
            for i in songs:
                idsong.append(i.id)
                idsong.append(" ")
            return HttpResponse(idsong) # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")