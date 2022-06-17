from django.shortcuts import get_object_or_404, redirect, render
from typing_extensions import Self
from django.http import HttpResponse

from favoritesongs.models import FavoriteSong
from songs.models import Song
from django.contrib.auth.models import User

# Create your views here.
def favoriteSong(request):
    firstname = request.session["firstname"]
    user = User.objects.get(id = request.session['id'])
    songs = FavoriteSong.objects.filter(user = user)
    return render(request, 'authentication/albumDetail.html',{"songs": songs, "firstname": firstname})

def getAllSongs(request):
    if request.method == 'GET':
            idsong = []
            firstname = request.session["firstname"]
            user = User.objects.get(id = request.session['id'])
            songs = FavoriteSong.objects.filter(user = user)
            for i in songs:
                idsong.append(i.song.id)
                idsong.append(" ")
            return HttpResponse(idsong) # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")