from django.urls import path

from albumdetails import views


urlpatterns = [
    path('<int:id>', views.albumSongs,name='allsongs'),
    path('getallsong/', views.getallsong,name='getallsong'),
]