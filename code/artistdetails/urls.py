from django.urls import path

from artistdetails import views


urlpatterns = [
    path('<int:id>', views.artistDetail,name='artist'),
]