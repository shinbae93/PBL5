from django.urls import path

from albums import views


urlpatterns = [
    path('', views.show, name='album'),
]