from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.conf import settings
# Create your views here.
import requests,os,json

def index(request):
  return render(request,"index.html")

def transcribe(request):

    if request.method == 'POST' and request.FILES['recording']:
        recording = request.FILES['recording']
        fs = FileSystemStorage()
        filename = fs.save(recording.name + ".aac", recording)
        api_url = "http://52.163.240.180/client/dynamic/recognize"
        with open(os.path.join(settings.MEDIA_ROOT,filename), 'rb') as payload:
          r = requests.put(api_url, data=payload)

        print(r.json())
        intepreted = r.json()['hypotheses'][0]['utterance']
        print(intepreted)
        return HttpResponse(intepreted)
