from django.shortcuts import render
from albums.models import Album
from artists.models import Artist

# Create your views here.
def show(request):
    firstname = request.session["firstname"]
    albums = Album.objects.all()
    return render(request, 'authentication/album.html', {"albums": albums,"firstname": firstname})
# Create your views here.
