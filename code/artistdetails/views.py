from django.shortcuts import get_object_or_404, redirect, render
from typing_extensions import Self
from django.http import HttpResponse

from favoritesongs.models import FavoriteSong
from songs.models import Song
from django.contrib.auth.models import User

# Create your views here.
def artistDetail(request):
    firstname = request.session["firstname"]
    user = User.objects.get(id = request.session['id'])
    songs = FavoriteSong.objects.filter(user = user)
    return render(request, 'authentication/artistDetail.html',{"songs": songs, "firstname": firstname})