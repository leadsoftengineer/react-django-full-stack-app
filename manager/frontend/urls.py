#KYIV MEDIA 10.12.2019
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index)
]