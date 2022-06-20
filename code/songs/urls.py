from songs.views import trendSong


from django.urls import path
from . import views
urlpatterns = [
    path('trend/', views.trendSong,),
    path('feed/', views.feedSong,),
    path('allsongs/', views.getAllSongs,name='allsongs'),
    path('getsong/', views.getSong,name='getsong'),
]