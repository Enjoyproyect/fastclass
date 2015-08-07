$().ready(function() {
	
	//variables globales
	var num_e = ""
	var horas_usuario = ""
	
	function xx(){
	alert("wey")
	}
	
//Agregar funciones al validador
	jQuery.validator.addMethod("lettersonly", function(value, element) {
	  return this.optional(element) || /^[a-z," "]+$/i.test(value); 
	}, "Solo puede digitar letras");

//Ejecutar el validador
//------------------------------------------BACHILLERATO----------------------------------------------------------//
//validador uno
	$("#formulario_materias_bachillerato").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
		
		 	
	});
	
	
//validador 2	
	$("#formulario_horas_bachillerato").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax2();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
		
		 	
	});
		
	
//validador 3
	$("#formulario_datos_estudiante").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax3();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});
//---------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------PREGRADO--------------------------------------------------------//
//validador 4
	$("#formulario_materias_pregrado").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax4();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});
//---------------------------------------------------------------------------------------------------------------//	
//-------------------------------------------------MUSICA--------------------------------------------------------//	
//validador 5
	$("#formulario_materias_musica").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax5();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});
	
//validador 6
	$("#formulario_horas_musica").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax6();
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
//------------------------------------------------INSCRIPCION PROFESOR----------------------------------------//	
//validador 7
	$("#profesor_datos").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax7();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
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
//------------------------------------------------FASTCLASS---------------------------------------------------//	
//validador 11
	$("#formulario_fastclass").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax11();
          },	
				
		rules:{
		
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});	
	
});


//---------------------------------------------BACHILLERATO-------------------------------------------------------//
//Funcion ajax uno formulario_materias_bachillerato
function funcion_ajax() {
	$(".trigonometria, .quimica, .fisica, .matematicas, .geometria, .calculo, .informatica ").css("display", "none");
	
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			var materia= $(this).val();
			$("."+materia+"").css("display", "block");
	});
	
	cant_h= $("#cant_horas").val();
	num_e=$("#num_estudientas").val();
	
	
	$("#cant_horas2").text($("#cant_horas").val());
	$("#num_estudientas2").text($("#num_estudientas").val());
	
	$(':mobile-pagecontainer').pagecontainer('change', '#formulario_horas', {
		reload: false
	});
return false;
}

//Funcion ajax dos formulario_horas_bachillerato
function funcion_ajax2() {

	num_e=$("#num_estudientas").val();
	
	var hora1_trigo =  $("#hora1_trigo").val();
	var hora2_trigo =  $("#hora2_trigo").val();
	var fecha_trigo =  $("#fecha_trigo").val();

	$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante', {
	reload: false
	});
	
return false;
}


//Funcion ajax tres formulario_datos_estudiante
function funcion_ajax3() {
	$("#classes").text("Clase de          : "+$("#bachillerato").val());
	//$("#horas_usuario").text("Horas             : "+horas_usuario);
	$("#num_e").text("Numero estudiantes: "+num_e);
	$(':mobile-pagecontainer').pagecontainer('change', '#exito', {
	reload: false
	});
	
return false;
}

//----------------------------------------------------------------------------------------------------------------//
//---------------------------------------------PREGRADO-----------------------------------------------------------//
//Funcion ajax cuatro formulario_materias_pregrado
function funcion_ajax4() {
	$(".quimica, .fisica, .calculo").css("display", "none");
	
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			var materia= $(this).val();
			$("."+materia+"").css("display", "block");
	});

	$(':mobile-pagecontainer').pagecontainer('change', '#formulario_horas_pregrado', {
	reload: false
	});
	
return false;
}
//-----------------------------------------------------------------------------------------------------------------//
//-------------------------------------------MUSICA----------------------------------------------------------------//
//Funcion ajax cinco formulario_materias_musica
function funcion_ajax5() {
	$(".canto, .guitarra, .piano, .violin").css("display", "none");
	
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			var materia= $(this).val();
			$("."+materia+"").css("display", "block");
	});

	$(':mobile-pagecontainer').pagecontainer('change', '#formulario_musica', {
	reload: false
	});
	
return false;
}

//Funcion ajax seis formulario_horas_musica
function funcion_ajax6() {
	num_e=$("#num_estudientas").val();


	$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante', {
	reload: false
	});
	
return false;
}
//----------------------------------------------------------------------------------------------------------------//
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

//Funcion ajax dies exito
function funcion_ajax10() {
	$(':mobile-pagecontainer').pagecontainer('change', '#exito', {
	reload: false
	});
return false;
}
//------------------------------------------------------------------------------------------------------------//	
//------------------------------------------------FASTCLASS---------------------------------------------------//
//Funcion ajax once formulario_fastclass
function funcion_ajax11() {
	if(document.getElementById("bachillerato").checked = true){
	alert("b")
	}
	
	
return false;
}
//----------------------------------------------------------------------------------------------------------------//

//---------------------------------------------FUNCIONES---------------------------------------------------------//
function restarHoras(inicio,fin) {//RESTAR HORAS
  inicioMinutos = parseInt(inicio.substr(3,2)); inicioHoras = parseInt(inicio.substr(0,2));
  finMinutos = parseInt(fin.substr(3,2)); finHoras = parseInt(fin.substr(0,2));
  transcurridoMinutos = finMinutos - inicioMinutos; transcurridoHoras = finHoras - inicioHoras;
  if (transcurridoMinutos < 0) {transcurridoHoras--;transcurridoMinutos = 60 + transcurridoMinutos;}
  horas = transcurridoHoras.toString(); minutos = transcurridoMinutos.toString();
  if (horas.length < 2) {horas = "0"+horas;}  
  if (horas.length < 2) {horas = "0"+horas;}
    
  alert(horas+":"+minutos);
}


//---------------------------------------------------------------------------------------------------------------//

