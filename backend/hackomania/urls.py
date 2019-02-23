from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="transcribe"),
    url(r'^transcribe$', views.transcribe, name="transcribe")
]


