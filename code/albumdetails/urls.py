from django.urls import path

from albumdetails import views


urlpatterns = [
    path('', views.favoriteSong,name='allsongs'),
]