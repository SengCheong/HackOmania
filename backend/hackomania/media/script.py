import requests,os

url = "http://52.163.240.180/client/dynamic/recognize"
headers = {'content-type': 'audio/x-wav'}
with open('Audio_recording_2019-02-23_18-25-59.aac', 'rb') as payload:
    r = requests.put(url, data=payload, headers=headers)
print("DONE")