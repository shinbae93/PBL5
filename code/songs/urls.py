from songs.views import trendSong


from django.urls import path
from . import views
urlpatterns = [
    path('', views.trendSong,),
]