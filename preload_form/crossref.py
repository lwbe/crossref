from habanero import Crossref
import json
cr = Crossref()

doi='doi:10.1038/nature25767'
data=cr.works(ids = doi)
m=data['message']
d={}
d['authors']=":".join(["%s %s" % (i['given'],i['family']) for i in m['author']])
d['published'] = "/".join(map(str,m['issued']['date-parts'][0]))
d['title'] = m['title'][0]
for k in ['DOI','publisher','page']:
    d[k]=m[k]

print(json.dumps(d))
