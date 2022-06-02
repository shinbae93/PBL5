from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('song/', include('songs.urls')),
    path('songalbum/', include('songalbums.urls')),
    path('album/', include('albums.urls')),
    path('artist/', include('artists.urls')),
    path('feed/', include('feeds.urls')),
    path('favoritesong/', include('favoritesongs.urls')),
]
