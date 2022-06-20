from django.shortcuts import get_object_or_404, redirect, render
from typing_extensions import Self
from django.http import HttpResponse

from songs.models import Song
from artists.models import Artist

# Create your views here.
def artistDetail(request, id):
    firstname = request.session["firstname"]
    artist = Artist.objects.get(id = id)
    songs = Song.objects.filter(artist_id = id)
    return render(request, 'authentication/artistDetail.html',{"songs": songs, "firstname": firstname, "artist": artist})