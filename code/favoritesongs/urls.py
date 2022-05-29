from django.urls import path

from favoritesongs import views


urlpatterns = [
    path('create/', views.create, name='create'),
    path('delete/', views.delete, name='delete'),
]