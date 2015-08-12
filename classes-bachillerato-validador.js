$().ready(function() {

//globales
	var num_e="";
	var materia;
	var diferencia_horas_trigo = 0;	var diferencia_horas_quimi = 0;	var diferencia_horas_fisica = 0; var diferencia_horas_matem = 0; var diferencia_horas_geome = 0; var diferencia_horas_calcu = 0; var diferencia_horas_infor = 0;
	var valor_num_e_trigo=0; var valor_num_e_quimi=0; var valor_num_e_fisica=0;	var valor_num_e_matem=0; var valor_num_e_geome=0; var valor_num_e_calcu=0; var valor_num_e_infor=0;
	var miArray;	var miArray_quimi;	var miArray_fisic;	var miArray_matem;	var miArray_geome;	var miArray_calcu ;	var miArray_infor;
	var diurnat; var diurnaq; var diurnaf; var diurnam; var diurnag; var diurnac; var diurnai;
	
	var hora1_trigo; var hora2_trigo; var fecha_trigo;	var hora1_quimi; var hora2_quimi; var fecha_quimi;	var hora1_fisic ; var hora2_fisic ; var fecha_fisic ;	var hora1_matem ;	var hora2_matem ; var fecha_matem ;	var hora1_geome ; var hora2_geome ; var fecha_geome; var hora1_calcu ; var hora2_calcu ; var fecha_calcu; var hora1_infor; var hora2_infor; var fecha_infor;


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
	document.getElementById("formulario_horas_bachillerato").reset();
	
	$(".trigonometria, .quimica, .fisica, .matematicas, .geometria, .calculo, .informatica ").css("display", "none");
	//busca los check seleccionados para activar los formularios 
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			 materia= $(this).val();
			$("."+materia+"").css("display", "block");
	});
	
	//num_e=$("#num_estudientas").val();
	
	$(':mobile-pagecontainer').pagecontainer('change', '#formulario_horas', {
		reload: false
	});
return false;
}

//Funcion ajax dos formulario_horas_bachillerato
function funcion_ajax2() {	
	num_e=$("#num_estudientas").val();
	
	//toma la fecha del sistema para ser comparada con la fecha insertada por el usuario
	var fecha = new Date();	
    fecha.setHours(fecha.getHours()+12);//agrega 12 horas a la fecha del sistema
	var dd = fecha.getDate(); var mm = fecha.getMonth()+1; var yyyy = fecha.getFullYear(); var h = fecha.getHours(); var m = fecha.getMinutes(); if(dd<10) {	dd='0'+dd} if(mm<10) {	mm='0'+mm} 
	hoyfecha = yyyy+'-'+mm+'-'+dd;	hoyhora = h+':'+m;
	
	
	var resul="";
	miArray = new Array(); miArray_quimi = new Array(); miArray_fisic = new Array(); miArray_matem = new Array(); miArray_geome = new Array(); miArray_calcu = new Array(); miArray_infor = new Array();	
	var igualesTQ= "";	var igualesTF= "";	var igualesTM= "";	var igualesTG= "";	var igualesTC= "";	var igualesTI= "";	var igualesQF= "";	var igualesQM= "";	var igualesQG= "";	var igualesQC= "";	var igualesQI= "";	var igualesFM= "";	var igualesFG= "";	var igualesFC= "";	var igualesFI= "";	var igualesMG= "";	var igualesMC= "";	var igualesMI= "";	var igualesGC= "";	var igualesGI= "";	var igualesCI= "";
	
	hora1_trigo =  $("#hora1_trigo").val();
	hora2_trigo =  $("#hora2_trigo").val();
	fecha_trigo =  $("#fecha_trigo").val();
	(diferencia_horas_trigo = restarHoras(hora1_trigo,hora2_trigo));
	for (i = 0; i < diferencia_horas_trigo; i++) {miArray[i] = parseInt(hora1_trigo) +  parseInt(i);} //miArray[5] = fecha_trigo;
	cambiar_array(miArray)
	var docehoras_trigo = compare_dates(fecha_trigo,hoyfecha,hora1_trigo,hoyhora);
	
	hora1_quimi =  $("#hora1_quimi").val();
	hora2_quimi =  $("#hora2_quimi").val();
	fecha_quimi =  $("#fecha_quimi").val();
	diferencia_horas_quimi = restarHoras(hora1_quimi,hora2_quimi);
	for (i = 0; i < diferencia_horas_quimi; i++) {miArray_quimi[i] = parseInt(hora1_quimi) +  parseInt(i);} //miArray_quimi[5] = fecha_quimi;
	cambiar_array(miArray_quimi)
	var docehoras_quimi = compare_dates(fecha_quimi,hoyfecha,hora1_quimi,hoyhora);

	hora1_fisic =  $("#hora1_fisic").val();
	hora2_fisic =  $("#hora2_fisic").val();
	fecha_fisic =  $("#fecha_fisic").val();
	diferencia_horas_fisica = restarHoras(hora1_fisic,hora2_fisic);
	for (i = 0; i < diferencia_horas_fisica; i++) {miArray_fisic[i] = parseInt(hora1_fisic) +  parseInt(i);}
	cambiar_array(miArray_fisic)
	var docehoras_fisic = compare_dates(fecha_fisic,hoyfecha,hora1_fisic,hoyhora);
	
	hora1_matem =  $("#hora1_matem").val();
	hora2_matem =  $("#hora2_matem").val();
	fecha_matem =  $("#fecha_matem").val();
	diferencia_horas_matem = restarHoras(hora1_matem,hora2_matem);
	for (i = 0; i < diferencia_horas_matem; i++) {miArray_matem[i] = parseInt(hora1_matem) +  parseInt(i);}
	cambiar_array(miArray_matem)
	var docehoras_matem = compare_dates(fecha_matem,hoyfecha,hora1_matem,hoyhora);
	
	hora1_geome =  $("#hora1_geome").val();
	hora2_geome =  $("#hora2_geome").val();
	fecha_geome =  $("#fecha_geome").val();
	diferencia_horas_geome = restarHoras(hora1_geome,hora2_geome);
	for (i = 0; i < diferencia_horas_geome; i++) {miArray_geome[i] = parseInt(hora1_geome) +  parseInt(i);}
	cambiar_array(miArray_geome)
	var docehoras_geome = compare_dates(fecha_geome,hoyfecha,hora1_geome,hoyhora);
	
	hora1_calcu =  $("#hora1_calcu").val();
	hora2_calcu =  $("#hora2_calcu").val();
	fecha_calcu =  $("#fecha_calcu").val();
	diferencia_horas_calcu = restarHoras(hora1_calcu,hora2_calcu);
	for (i = 0; i < diferencia_horas_calcu; i++) {miArray_calcu[i] = parseInt(hora1_calcu) +  parseInt(i);}
	cambiar_array(miArray_calcu)
	var docehoras_calcu = compare_dates(fecha_calcu,hoyfecha,hora1_calcu,hoyhora);
	
	hora1_infor =  $("#hora1_infor").val();
	hora2_infor =  $("#hora2_infor").val();
	fecha_infor =  $("#fecha_infor").val();
	diferencia_horas_infor = restarHoras(hora1_infor,hora2_infor);
	for (i = 0; i < diferencia_horas_infor; i++) {miArray_infor[i] = parseInt(hora1_infor) +  parseInt(i);}
	cambiar_array(miArray_infor)
	var docehoras_infor= compare_dates(fecha_infor,hoyfecha,hora1_infor,hoyhora);

	if(fecha_trigo==fecha_quimi){igualesTQ= "";resul = camparar(miArray,miArray_quimi);if(resul == "si"){alert("La materia Trigonometria se cruza con Quimica"); igualesTQ= "iguales"}}
	if(fecha_trigo==fecha_fisic){igualesTF= "";resul = camparar(miArray,miArray_fisic);if(resul == "si"){alert("La materia Trigonometria se cruza con Fisica"); igualesTF= "iguales"}}
	if(fecha_trigo==fecha_matem){igualesTM= "";resul = camparar(miArray,miArray_matem);if(resul == "si"){alert("La materia Trigonometria se cruza con Matematicas"); igualesTM= "iguales"}}
	if(fecha_trigo==fecha_geome){igualesTG= "";resul = camparar(miArray,miArray_geome);if(resul == "si"){alert("La materia Trigonometria se cruza con Geometria"); igualesTG= "iguales"}}
	if(fecha_trigo==fecha_calcu){igualesTC= "";resul = camparar(miArray,miArray_calcu);if(resul == "si"){alert("La materia Trigonometria se cruza con Calculo"); igualesTC= "iguales"}}
	if(fecha_trigo==fecha_infor){igualesTI= "";resul = camparar(miArray,miArray_infor);if(resul == "si"){alert("La materia Trigonometria se cruza con Informatica"); igualesTI= "iguales"}}
	
	if(fecha_quimi==fecha_fisic){igualesQF= "";resul = camparar(miArray_quimi,miArray_fisic);if(resul == "si"){alert("La materia Quimica se cruza con Fisica"); igualesQF= "iguales"}}
	if(fecha_quimi==fecha_matem){igualesQM= "";resul = camparar(miArray_quimi,miArray_matem);if(resul == "si"){alert("La materia Quimica se cruza con Matematicas"); igualesQM= "iguales"}}
	if(fecha_quimi==fecha_geome){igualesQG= "";resul = camparar(miArray_quimi,miArray_geome);if(resul == "si"){alert("La materia Quimica se cruza con Geometria"); igualesQG= "iguales"}}	
	if(fecha_quimi==fecha_calcu){igualesQC= "";resul = camparar(miArray_quimi,miArray_calcu);if(resul == "si"){alert("La materia Quimica se cruza con Calculo"); igualesQC= "iguales"}}	
	if(fecha_quimi==fecha_infor){igualesQI= "";resul = camparar(miArray_quimi,miArray_infor);if(resul == "si"){alert("La materia Quimica se cruza con Informatica"); igualesQI= "iguales"}}
	
	if(fecha_fisic==fecha_matem){igualesFM= "";resul = camparar(miArray_fisic,miArray_matem);if(resul == "si"){alert("La materia Fisica se cruza con Matematicas"); igualesFM= "iguales"}}	
	if(fecha_fisic==fecha_geome){igualesFG= "";resul = camparar(miArray_fisic,miArray_geome);if(resul == "si"){alert("La materia Fisica se cruza con Geometria"); igualesFG= "iguales"}}	
	if(fecha_fisic==fecha_calcu){igualesFC= "";resul = camparar(miArray_fisic,miArray_calcu);if(resul == "si"){alert("La materia Fisica se cruza con Calculo"); igualesFC= "iguales"}}	
	if(fecha_fisic==fecha_infor){igualesFI= "";resul = camparar(miArray_fisic,miArray_infor);if(resul == "si"){alert("La materia Fisica se cruza con Informatica"); igualesFI= "iguales"}}	
	
	if(fecha_matem==fecha_geome){igualesMG= "";resul = camparar(miArray_matem,miArray_geome);if(resul == "si"){alert("La materia Matematicas se cruza con Geometria"); igualesMG= "iguales"}}	
	if(fecha_matem==fecha_calcu){igualesMC= "";resul = camparar(miArray_matem,miArray_calcu);if(resul == "si"){alert("La materia Matematicas se cruza con Calculo"); igualesMC= "iguales"}}	
	if(fecha_matem==fecha_infor){igualesMI= "";resul = camparar(miArray_matem,miArray_infor);if(resul == "si"){alert("La materia Matematicas se cruza con Informatica"); igualesMI= "iguales"}}	
	
	if(fecha_geome==fecha_calcu){igualesGC= "";resul = camparar(miArray_geome,miArray_calcu);if(resul == "si"){alert("La materia Geometria se cruza con Calculo"); igualesGC= "iguales"}}	
	if(fecha_geome==fecha_infor){igualesGI= "";resul = camparar(miArray_geome,miArray_infor);if(resul == "si"){alert("La materia Geometria se cruza con Informatica"); igualesGI= "iguales"}}	
	
	if(fecha_calcu==fecha_infor){igualesCI= "";resul = camparar(miArray_calcu,miArray_infor);if(resul == "si"){alert("La materia Calculo se cruza con Informatica"); igualesCI= "iguales"}}	
	
	
	diurnat = camparar_diurna(miArray);
	diurnaq = camparar_diurna(miArray_quimi);
	diurnaf = camparar_diurna(miArray_fisic);
	diurnam = camparar_diurna(miArray_matem);
	diurnag = camparar_diurna(miArray_geome);
	diurnac = camparar_diurna(miArray_calcu);
	diurnai = camparar_diurna(miArray_infor);
	
	if(diurnat == "nocturna" || diurnaq == "nocturna" || diurnaf == "nocturna" || diurnam == "nocturna" || diurnag == "nocturna" || diurnac == "nocturna" || diurnai == "nocturna"){alert("Las horas nocturnas solicitadas tendran un cobro adicional")}
	
	if(igualesTQ ==""&& igualesTF =="" &&igualesTM =="" &&igualesTG =="" &&igualesTC =="" &&igualesTI =="" &&igualesQF =="" &&igualesQM =="" &&igualesQG =="" &&igualesQC =="" &&igualesQI =="" &&igualesFM =="" &&igualesFG =="" &&igualesFC =="" &&igualesFI =="" &&igualesMG =="" && igualesMC==""&&igualesMI =="" &&igualesGC =="" &&igualesGI =="" &&igualesCI ==""){
		
		if(docehoras_trigo == true && docehoras_quimi == true && docehoras_fisic == true && docehoras_matem == true && docehoras_geome == true && docehoras_calcu == true  && docehoras_infor == true){
			$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante',{
			reload: false
			});
		}else{
			alert("El horario de cada materia deben ser 12 horas mayor a la hora actual")
		}
		
	}
	
return false;
}


//Funcion ajax tres resumen de solicitud
function funcion_ajax3() {
	var uno =  parseInt(diferencia_horas_trigo);
	var dos = parseInt(diferencia_horas_quimi);
	var tres = parseInt(diferencia_horas_fisica);
	var cuatro = parseInt(diferencia_horas_matem);
	var cinco = parseInt(diferencia_horas_geome);
	var seis = parseInt(diferencia_horas_calcu);
	var siete =  parseInt(diferencia_horas_infor);
	
	if(isNaN(uno)){uno=0}	if(isNaN(dos)){dos=0}	if(isNaN(tres)){tres=0}	if(isNaN(cuatro)){cuatro=0}	if(isNaN(cinco)){cinco=0}	if(isNaN(seis)){seis=0}	if(isNaN(siete)){siete=0}
	
	valor_num_e_trigo = calcular_precio_materia(diurnat);
	valor_num_e_quimi = calcular_precio_materia(diurnaq);
	valor_num_e_fisica = calcular_precio_materia(diurnaf);
	valor_num_e_matem = calcular_precio_materia(diurnam);
	valor_num_e_geome = calcular_precio_materia(diurnag);
	valor_num_e_calcu = calcular_precio_materia(diurnac);
	valor_num_e_infor = calcular_precio_materia(diurnai);
	
	num_h =  uno + dos + tres + cuatro + cinco + seis + siete;
	valor_trigo = valor_num_e_trigo * uno;
	valor_quimi = valor_num_e_quimi * dos;
	valor_fisica = valor_num_e_fisica * tres;
	valor_matem = valor_num_e_matem * cuatro;
	valor_geome = valor_num_e_geome * cinco;
	valor_calcu = valor_num_e_calcu * seis;
	valor_infor = valor_num_e_infor * siete;
	
	valor_total = valor_trigo + valor_quimi + valor_fisica + valor_matem + valor_geome + valor_calcu + valor_infor

	$("#classes").text("Clase de: "+$("#bachillerato").val());
	$("#num_e").text("Numero de estudiantes: "+num_e);
	$("#num_h_total").text("Numero de horas totales: "+num_h)
	$("#valor_total").text("Valor total a pagar: "+valor_total);
	
	$(':mobile-pagecontainer').pagecontainer('change', '#resumen', {
	reload: false
	});
	
return false;
}

//Funcion cuatro exito 
function exito(){
	
	var parametros = {
		"nombre" : $("#nombre_completo").val(),
		"ciudad" : $("#ciudad").val(),
		"direccion" : $("#direccion").val(),
		"telefono" : $("#telefono").val(),
		"email" : $("#email").val(),
		"inst_educativa" : $("#inst_educativa").val(),
		"tematica" : $("#tematica").val(),
		"classe" : $("#bachillerato").val(),
		"numero_estudiantes": num_e,
		"trigonometria":"trigonometria"+ hora1_trigo +" "+ hora2_trigo +" "+ fecha_trigo,
		"quimica":"quimica"+ hora1_quimi +" "+ hora2_quimi  +" "+ fecha_quimi ,
		"fisica":"fisica"+ hora1_fisic +" "+ hora2_fisic  +" "+ fecha_fisic ,
		"matematicas":"matematicas"+ hora1_matem  +" "+ hora2_matem  +" "+ fecha_matem ,
		"geometria":"geometria"+ hora1_geome +" "+ hora2_geome  +" "+ fecha_geome ,
		"calculo":"calculo"+ hora1_calcu +" "+ hora2_calcu  +" "+ fecha_calcu ,
		"informatica":"informatica"+ hora1_infor +" "+ hora2_infor  +" "+ fecha_infor ,
		"valor_total": valor_total,
	
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
	if(inicio > "12:00"){	
		if(fin == "00:00"){	fin = "24:00"}
		if(fin == "01:00"){	fin = "25:00"}
		if(fin == "02:00"){	fin = "26:00"}
		if(fin == "03:00"){	fin = "27:00"}
	}
  inicioMinutos = parseInt(inicio.substr(3,2)); inicioHoras = parseInt(inicio.substr(0,2));
  finMinutos = parseInt(fin.substr(3,2)); finHoras = parseInt(fin.substr(0,2));
  transcurridoMinutos = finMinutos - inicioMinutos; (transcurridoHoras = finHoras - inicioHoras);//aqui 
  if (transcurridoMinutos < 0) {transcurridoHoras--;transcurridoMinutos = 60 + transcurridoMinutos;}
  horas = transcurridoHoras.toString(); minutos = transcurridoMinutos.toString();
  if (horas.length < 2) {horas = "0"+horas;} 
  if (minutos.length < 2) {minutos = minutos+"0";}     
  //return (horas+":"+minutos);
  return (horas);
}

function camparar(array1,array2) {
	res = "";
	for (x=0;x<array1.length;x++){ 	
		for (y=0;y<array2.length;y++){ 			
			if (array1[x] == array2[y]){ 
				res="si"
			}
		} 
	} 
	return res;
}

function camparar_diurna(array1) {
	if(array1 != ""){
		res = "";
		for (x=0;x<array1.length;x++){ 
				if (array1[x] >= "6" && array1[x] < "21"){ 
					res="diurna"
				}else{
					res="nocturna"
				}
		} 
		return res;
	}
}

function cambiar_array(array){
	if(array != ""){
		for (x=0;x<array.length;x++){ 	
			if (array[x] == "24"){ array[x] = "0"} 
			if (array[x] == "25"){ array[x] = "1"}
			if (array[x] == "26"){ array[x] = "2"}
			if (array[x] == "27"){ array[x] = "3"}
		} 
	}
}

function calcular_precio_materia(horario){
	if(horario =="diurna"){	
		switch (num_e) { 
		case "1":	valor_num_e = 20000;	break;	case "2": valor_num_e = 30000; break;	case "3": valor_num_e = 40000; break;	case "4": valor_num_e = 50000; break;	case "5": valor_num_e = 60000; break;
		}
	}else{
		switch (num_e) {
		case "1": valor_num_e = 45000; break;	case "2": valor_num_e = 55000; break;	case "3": valor_num_e = 65000; break;	case "4": valor_num_e = 75000; break;	case "5": valor_num_e = 85000; break;
		}
	}
	return valor_num_e;
}

function compare_dates(fecha, fecha2 ,hora, hora2){  
	if(fecha != "" && hora != "" ){	
		var xMonth=fecha.substring(3, 5);  
		var xDay=fecha.substring(0, 2);  
		var xYear=fecha.substring(6,10);  
		var yMonth=fecha2.substring(3, 5);  
		var yDay=fecha2.substring(0, 2);  
		var yYear=fecha2.substring(6,10);  
		var xhora = parseInt(hora)
		var yhora = parseInt(hora2)
		
		if (xYear> yYear){  
			return(true)  
		}  
		else{  
		  if (xYear == yYear){   
			if (xMonth> yMonth){  
				return(true)
			}  
			else{   
			  if (xMonth == yMonth){  
				if (xDay>= yDay){  
					if(xhora>yhora){
						return(true)
					}else{
						return(false);
					} 
				}else{  
				  return(false);
				}
			  }  
			  else{  
				return(false);  
			  }
			}  
		  }  
		  else{  
			return(false);  
		  }
		}  
	}else{
		return(true)
	}
}


//---------------------------------------------------------------------------------------------------------------//

