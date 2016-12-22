from django.http import HttpResponse
from django.shortcuts import render
import os
import json
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

@csrf_exempt
def index(request):
    return render(request, './index.html')

@csrf_exempt
def test(request):
    meme = "test example "
    data = {}
    for x in range(0, 5):
        data[x] = meme + str(x)
        
    json_data = json.dumps(data)
    return HttpResponse(json_data)