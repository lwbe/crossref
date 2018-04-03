$(document).ready(function(){

    $("#submit").hide();

    // si on clique sur preload alors on rempli le formulaire voir
    // la fonction activate
    $("#preload").click(function(){
        var doi = $("#id_doi").val();
        activate(doi);
    });
    // un clic sur reset remet le html dans son état initial
    $("#reset").click(function () {
	deactivate();
    });
});

function deactivate() {
    $("#preload").show();
    $("#submit").hide().prop('disabled',true);
    
    $('#id_doi').prop('disabled',false);
    $('#id_doi').val("");
    
    $('#div_title').hide();
    $('#div_authors').hide();
    $('#div_page').hide();
    $('#div_published').hide();
    $('#div_wos').hide();	
};

function activate(doi){

    $.ajax({
       url : 'get_crossref/'+doi,
       type : 'GET',
       dataType : 'json',

	success : function(jsondata, statut){
	    // on teste qu'on a des données.
	    console.log("in success");
	    if ( ! $.isEmptyObject(jsondata)) {
		$("#preload").hide();
		$("#submit").show().prop('disabled',false);

		$('#id_doi').prop('disabled',true);
		
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
	},
	error : function(result,status,error){
	    console.log('in error');
	    $('#id_doi').val(doi+" not found");
	}
    });
};


