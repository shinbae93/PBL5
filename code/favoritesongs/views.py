from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render

from favoritesongs.models import FavoriteSong
from songs.models import Song
from django.contrib.auth.models import User

# Create your views here.
# def create(request, id):
#     song = FavoriteSong()
#     song.user = User.objects.get(id = request.session['id'])
#     song.song = Song.objects.get(id = id)
     
#     song.save()
#     return redirect("/home")
def create(request):
    if request.method == 'GET':
           id = request.GET['id']
           user = User.objects.get(id = request.session['id'])
           song = Song.objects.get(id = id)
           fsong = FavoriteSong.objects.filter(song = song).filter(user = user)
           if fsong.count() == 0:
               song = FavoriteSong()
               song.user = User.objects.get(id = request.session['id'])
               song.song = Song.objects.get(id = id)
               song.save()
           return HttpResponse("Success!") # Sending an success response
    else:
           return HttpResponse("Request method is not a GET")
def delete(request):
       if request.method == 'GET':
           id = request.GET['id']
           user = User.objects.get(id = request.session['id'])
           song = Song.objects.get(id = id)
           fsong = FavoriteSong.objects.filter(song = song).filter(user = user)
           fsong[0].delete()
           print(fsong[0])
           return HttpResponse("Success!") # Sending an success response
       else:
           return HttpResponse("Request method is not a GET")
def favoriteSong(request):
    firstname = request.session["firstname"]
    user = User.objects.get(id = request.session['id'])
    fsong = FavoriteSong.objects.filter(user = user)
    return render(request, 'authentication/favoriteSong.html',{"fsong": fsong, "firstname": firstname})