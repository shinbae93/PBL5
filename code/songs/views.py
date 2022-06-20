from telnetlib import STATUS
from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import render
from grpc import Status, StatusCode
from requests import Response
from songs.models import Song
  
# Create your views here.
def getAllSongs(request):
    if request.method == 'GET':
            idsong = []
            songs = Song.objects.all()
            for i in songs:
                idsong.append(i.id)
                idsong.append(" ")
            return HttpResponse(idsong) # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")
def getSong(request):
    if request.method == 'GET':
        id = request.GET.get("id", None)
        songs = Song.objects.filter(id = id)
        return HttpResponse(songs.first().linkSave) # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")
def trendSong(request):
    firstname = request.session["firstname"]
    songs = Song.objects.all()
    return render(request, "authentication/trend.html",{"firstname": request.session['firstname'],"songs": songs})

def feedSong(request):
    firstname = request.session["firstname"]
    songs = Song.objects.all()
    return render(request, "authentication/feed.html",{"firstname": request.session['firstname'],"songs": songs})