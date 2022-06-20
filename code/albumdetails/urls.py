from django.urls import path

from albumdetails import views


urlpatterns = [
    path('<int:id>', views.albumSongs,name='allsongs'),
]