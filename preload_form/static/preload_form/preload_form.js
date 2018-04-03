$(document).ready(function(){

    $("#submit").hide();
    $("#preload").click(function(){
        var doi = $("#id_doi").val();
        activate(doi);
    });
});


function activate(doi){
    $("#preload").hide();
    $("#submit").show().prop('disabled',false);

    $.ajax({
       url : 'get_crossref/'+doi,
       type : 'GET',
       dataType : 'json',

       success : function(jsondata, statut){

        $('#div_title').show();
        $('#id_title').val(jsondata["title"]);

        $('#div_authors').show();
        $('#id_authors').val(jsondata["authors"]);

        $('#div_page').show();
        $('#id_page').val(jsondata["page"]);

        $('#div_published').show();
        $('#id_published').val(jsondata["published"]);

        $('#div_wos').show();
        //$('#id_wos').val(jsondata["authors"]);
       }

    });


}





//const method = 'GET'
//const url = 'https://doi.org/10.1093/BIOINFORMATICS/BTT178'

//const syncXhr = new XMLHttpRequest()
//syncXhr.open(method, url, false)
//syncXhr.setRequestHeader('accept', 'application/vnd.citationstyles.csl+json')
//try {
//    syncXhr.send()
//    console.log('sync response:', syncXhr.response)
//} catch (e) {
//    console.log('sync response:', syncXhr)
//    console.log('error:', e)
//}

//const asyncXhr = new XMLHttpRequest()
//asyncXhr.onload = function () {
//    console.log('async response:', asyncXhr)
//    console.log('async response:', asyncXhr.response.indexed.author)
//    alert('async response:', String(asyncXhr.response))
//}

//asyncXhr.open(method, url)
//asyncXhr.setRequestHeader('accept', 'application/vnd.citationstyles.csl+json')
//asyncXhr.send()

//doiCites = {};

//function doiInfo(doi) {
//    var doienc = encodeURIComponent(doi);
//    var doiXHR;
//    window.XMLHttpRequest ? doiXHR=new XMLHttpRequest() : doiXHR=new ActiveXObject("Microsoft.XMLHTTP");
//
//    doiXHR.addEventListener('load', function(){
//        if (doiXHR.readyState==4 && doiXHR.status==200){
//            var doi_resp = JSON.parse(doiXHR.responseText)[0];
//            var authors = doi_resp.fullCitation.replace(/, \d{4}, .*$/, '')
//                .split(',');
//            var auths = authors.length;
//            labelname:
//            if (auths == 1) {
//                var auth_str = authors[0];
//            } else if (auths == 2) {
//                var auth_str = authors.join(' &');
//            } else if (auths == 3) {
//                var auth_str = authors[0] + ',' + authors[1] + ' &' + authors[2];
//            } else if (auths > 3) {
//                var auth_str = authors[0] + ' et al.';
//            } else break labelname; // don't accept author-less entries
//            var doi_cite = auth_str
//                + ' ('
//                + doi_resp.year
//                + ') '
//                + doi_resp.title;
//
//            doiCites[doi] = doi_cite;
//        }
//    });
//
//    doiXHR.open('GET', 'http://search.crossref.org/dois?q=' + doienc, true);
//    doiXHR.send();
//}
//function doiInfo(doi) {
//    var doienc = encodeURIComponent(doi);
//    var doiXHR;
//    window.XMLHttpRequest ? doiXHR=new XMLHttpRequest() : doiXHR=new ActiveXObject("Microsoft.XMLHTTP");

//    doiXHR.onreadystatechange=function()
//    {
//        if (doiXHR.readyState==4 && doiXHR.status==200)
//        {
//            console.log(doiXHR.responseText);
//        } else if (doiXHR.readyState==4) {
//            // something went wrong
//        }
//    }
//    doiXHR.open("GET", "https://api.crossref.org/works?filter=doi:" + doienc, true);//10.1038/nature25767
//    //doiXHR.open("GET", "http://search.crossref.org/dois?q=" + doienc, true);
//    doiXHR.setRequestHeader("Content-type", "application/json;");
//    doiXHR.setRequestHeader("Access-Control-Allow-Origin", "*");
//    doiXHR.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//    doiXHR.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
//    doiXHR.setRequestHeader("Access-Control-Max-Age", "86400"); // cache for 1 day

//    doiXHR.withCredentials = "true";
//   console.log('before send')
//    doiXHR.send();
//}

//doiInfo('10.1002/bies.201000071')
//console.log('dd')
//console.log(doiInfo('10.1002/bies.201000071'));
//console.log('ddd')
// doiCites['10.1002/bies.201000071']