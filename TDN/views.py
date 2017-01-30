from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import HttpResponse
from django.shortcuts import render
import xml.etree.ElementTree as ET
import os
import json

@csrf_exempt
def index(request):
    return render(request, './index.html')

@csrf_exempt
def test(request):
    concordance = {}
    res = request.GET['VAL']


    if str(res) != "":
        tree = ET.parse('greek_lexicon.xml')
        heb_tree = ET.parse('hebrew_lexicon.xml')
        root = tree.getroot()
        heb_root = heb_tree.getroot()

        with open('concordance.txt', 'r') as f:
            read_data = f.read()


        count = 0
        countFull = 0
        countFull = 0
        myStr = ""
        jsonDict= {}
        limiter = 0

        for x in str(read_data):
            myStr+= x
            count += 1
            countFull += 1
            if x == '\n':
                if str(res).lower() in myStr.lower():
                    concordance[countFull - 1] = myStr
                count = 0
                myStr = ""
        for y in concordance:
            print "conc : ", y, concordance[y]
            if limiter <= 5:
                jsonDict[limiter] = y
            limiter = limiter+1

        json_data = json.dumps(concordance)
        print "json_data : ", json_data
        json_data2 = json.dumps(jsonDict)
        print "json_data 2 : ", json_data2

        print "searched word: ", res

        return HttpResponse(json_data)
    else:
        return HttpResponse("")

def bibRec(request):
    print "hey"
