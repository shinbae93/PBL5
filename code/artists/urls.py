from django.urls import path

from artists import views


urlpatterns = [
    path('', views.show, name='artist'),
]