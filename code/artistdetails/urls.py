from django.urls import path

from artistdetails import views


urlpatterns = [
    path('', views.artistDetail,name='artist'),
]