from django.http import HttpResponse
from django.shortcuts import render
from songs.models import Song
  
# Create your views here.
def trendSong(request):
    firstname = request.session["firstname"]
    songs = Song.objects.all()
    return render(request, "authentication/trend.html",{"firstname": request.session['firstname'],"songs": songs})

def feedSong(request):
    firstname = request.session["firstname"]
    songs = Song.objects.all()
    return render(request, "authentication/feed.html",{"firstname": request.session['firstname'],"songs": songs})