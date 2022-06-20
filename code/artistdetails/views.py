from django.shortcuts import get_object_or_404, redirect, render
from typing_extensions import Self
from django.http import HttpResponse

from songs.models import Song
from artists.models import Artist

# Create your views here.
def artistDetail(request, id):
    firstname = request.session["firstname"]
    request.session['idArtist'] = id
    artist = Artist.objects.get(id = id)
    songs = Song.objects.filter(artist_id = id)
    return render(request, 'authentication/artistDetail.html',{"songs": songs, "firstname": firstname, "artist": artist})
def getallsong(request):
    if request.method == 'GET':
            idsong = []
            songs = Song.objects.filter(artist_id = request.session["idArtist"])
            for i in songs:
                idsong.append(i.id)
                idsong.append(" ")
            return HttpResponse(idsong) # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")