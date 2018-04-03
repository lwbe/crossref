from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from habanero import Crossref


def start_form(request):
    return render(request,'preload_form/preload_form.html')

def done(request):
    if request.method=="POST":
       allstuff=request.POST.keys()
       return HttpResponse(allstuff,content_type="text/plain")
    return HttpResponse('NOT POST but'+request.method)

def get_crossref(request,doi=""):
    # on recupere un objet crossref pour faire le requetage
    cr = Crossref()
    #doi = 'doi:10.1038/nature25767'
    print('doi=',doi)
    # initialisation du json
    d = {'authors':'Authors',
         'title':'Title',
         'published':'Published',
         'doi':'DOI',
         'page':'Page'}

    # on recupere les donnes associees au DOI si le doi ne correspond a rien
    # on a une erreur d'ou le try except
    try:
        data = cr.works(ids=doi)
    except:
        data =[]

    # si il y a quelque chose on rempli les donnees
    if data:
        m = data['message']
        d['authors'] = ":".join(["%s %s" % (i['given'], i['family']) for i in m['author']])
        d['published'] = "/".join(map(str, m['issued']['date-parts'][0]))
        d['title'] = m['title'][0]
        for k in ['DOI', 'publisher', 'page']:
            d[k.lower()] = m[k]


    # just return a JsonResponse
    return JsonResponse(d)
