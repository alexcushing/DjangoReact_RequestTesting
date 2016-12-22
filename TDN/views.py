from django.http import HttpResponse
from django.shortcuts import render
import os
import json
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

@csrf_exempt
def index(request):
    meme = "test meme"
    return render(request, './index.html',{"meme" : meme})

@csrf_exempt
def test(request):
    meme = "test meme"
    haha = "test 2"
    data = {}
    data[meme] = haha
    json_data = json.dumps(data)
    return HttpResponse(json_data)