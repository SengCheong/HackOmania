from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.conf import settings
# Create your views here.
import requests,os

def transcribe(request):
    if request.method == 'POST' and request.FILES['recording']:
        recording = request.FILES['recording']
        fs = FileSystemStorage()
        filename = fs.save(recording.name, recording)
        api_url = "http://52.163.240.180/client/dynamic/recognize"
        with open(os.path.join(settings.MEDIA_ROOT,filename), 'rb') as payload:
          r = requests.put(api_url, data=payload)
        return JsonResponse(r.json())
