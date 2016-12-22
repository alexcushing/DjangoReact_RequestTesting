from django.http import HttpResponse
from django.shortcuts import render
import os
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

@csrf_exempt
def index(request):
    return render(request, './index.html')

@csrf_exempt
def test(request):
    print("in test")
    f = open('open.txt', 'w')
    f.write('posted')
    return render(request, './index.html')