$().ready(function() {
	//variables globales
	var name;
	var direccion;
	var telefono;
	var institucion;
	var email;
	var materia_bach;
	var materia_preg;
	var materia_musi;
	
//------------------------------------------------INSCRIPCION PROFESOR----------------------------------------//	
//validador 7
	$("#profesor_datos").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax7();
        },	
				
		rules:{
			nombre: {required: true},
			direccion: {required: true},
			telefono: {required: true, digits: true},
			institucion: {required: true},
			email: {required: true, email: true},
		},
		
		messages: {},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		},
	});
	
//validador 8
	$("#profesor_materias_bachillerato").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax8();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});	
	
//validador 9
	$("#profesor_materias_pregrado").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax9();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});	
		
		
//validador 10
	$("#profesor_materias_musica").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax10();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});	
//------------------------------------------------------------------------------------------------------------//	
})//end document ready

//--------------------------------------------INCRIPCION PROFESOR---------------------------------------------------------//
//Funcion ajax siete bachillerato
function funcion_ajax7() {

	
	$(':mobile-pagecontainer').pagecontainer('change', '#bachillerato', {
	reload: false
	});
return false;
}

//Funcion ajax ocho pregrado
function funcion_ajax8() {
	$(':mobile-pagecontainer').pagecontainer('change', '#pregrado', {
	reload: false
	});
return false;
}

//Funcion ajax nueve musica
function funcion_ajax9() {
	$(':mobile-pagecontainer').pagecontainer('change', '#musica', {
	reload: false
	});
return false;
}



//Funcion ajax dies 
function funcion_ajax10() {
	$(':mobile-pagecontainer').pagecontainer('change', '#resumen', {
	reload: false
	});
return false;	
}


function exito(){
	materia_musi = new Array() 
	var i = 0;	
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			(materia_musi[i]= $(this).attr("id"));
			i++
	});	
	
	var parametros = {
		"nombre" : $("#nombre").val(),
		"direccion" : $("#direccion").val(),
		"telefono" : $("#telefono").val(),
		"institucion" : $("#institucion").val(),
		"email" : $("#email").val(),
		"materias": materia_musi.toString(),
	
	};
	$.ajax({
		type: "POST",
		url: "classes-bachillerato-servidor.php",
		cache: false,
		data: parametros,
		success: function(data, status){
			alert(data);
		},
	});	
	
	$(':mobile-pagecontainer').pagecontainer('change', '#exito', {
	reload: false
	});
return false;
}

//------------------------------------------------------------------------------------------------------------//	
//TERMINOS Y CONDICIONES
function tyc(){
	if( $("#tyc").is(':checked')){
	$("#submit_resumen").removeAttr("disabled");
	$("#submit_resumen").parent().removeClass('ui-state-disabled')
	}else{
	$('#submit_resumen').attr("disabled", "disabled");
	$("#submit_resumen").parent().addClass('ui-state-disabled')
	}
}