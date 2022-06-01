from django.shortcuts import render
from artists.models import Artist

# Create your views here.
def show(request):
    firstname = request.session["firstname"]
    artists = Artist.objects.all()
    return render(request, 'authentication/album.html', {"artists": artists,"firstname": firstname})
# Create your views here.
