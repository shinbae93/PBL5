from django.urls import path

from favoritesongs import views


urlpatterns = [
    path('', views.favoriteSong, name='create'),
    path('create/', views.create, name='create'),
    path('delete/', views.delete, name='delete'),
]