from django.shortcuts import render
from artists.models import Artist

# Create your views here.
def show(request):
    firstname = request.session["firstname"]
    artists = Artist.objects.all()
    return render(request, 'authentication/artist.html', {"artists": artists,"firstname": firstname})
