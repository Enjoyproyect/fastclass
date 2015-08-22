$().ready(function() {

//globales
	var fechavalidate ="";
	var fastclass;//PARA SABER SI ES FASTCLASS
	var num_e="";//NUMERO DE ESTUDIANTES DEL SELECT
	var materia;//MATERIAS SELECCIONADAS
	
	//DIFERENCIA DE HORAS PARA SABER CUANTAS HORAS VA A ESTUDIAR
	var diferencia_horas_trigo = 0;	var diferencia_horas_quimi = 0;	var diferencia_horas_fisica = 0; var diferencia_horas_matem = 0; var diferencia_horas_geome = 0; var diferencia_horas_calcu = 0; var diferencia_horas_infor = 0;
	
	//VALOR COBRADO DE HORAS POR MATERIA
	var valor_num_e_trigo=0; var valor_num_e_quimi=0; var valor_num_e_fisica=0;	var valor_num_e_matem=0; var valor_num_e_geome=0; var valor_num_e_calcu=0; var valor_num_e_infor=0;
	
	//ARREGLO DE HORAS POR MATERIA
	var miArray;	var miArray_quimi;	var miArray_fisic;	var miArray_matem;	var miArray_geome;	var miArray_calcu ;	var miArray_infor;
	
	//PARA SABER SI ES HORARIO DIRUNO O NOCTURNO
	var diurnat; var diurnaq; var diurnaf; var diurnam; var diurnag; var diurnac; var diurnai;
	
	//VALORES INSERTADOR POR EL USUARIO
	var hora1_trigo; var hora2_trigo; var fecha_trigo;	var hora1_quimi; var hora2_quimi; var fecha_quimi;	var hora1_fisic ; var hora2_fisic ; var fecha_fisic ;	var hora1_matem ;	var hora2_matem ; var fecha_matem ;	var hora1_geome ; var hora2_geome ; 
	var fecha_geome; var hora1_calcu ; var hora2_calcu ; var fecha_calcu; var hora1_infor; var hora2_infor; var fecha_infor;
		
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
				
		rules:{},
		
		messages: {},
		
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
			
			num_estudientas: {required: true},
			hora1_trigo: {required: true},
			hora2_trigo: {required: true,},
			fecha_trigo: {required: true, date:true},
			
			hora1_quimi: {required: true},
			hora2_quimi: {required: true,},
			fecha_quimi: {required: true, date:true},
			
			hora1_fisic: {required: true},
			hora2_fisic: {required: true,},
			fecha_fisic: {required: true, date:true},
			
			hora1_matem: {required: true},
			hora2_matem: {required: true,},
			fecha_matem: {required: true, date:true},
			
			hora1_geome: {required: true},
			hora2_geome: {required: true,},
			fecha_geome: {required: true, date:true},
			
			hora1_calcu: {required: true},
			hora2_calcu: {required: true,},
			fecha_calcu: {required: true, date:true},
			
			hora1_infor: {required: true},
			hora2_infor: {required: true,},
			fecha_infor: {required: true, date:true},
			
			
		},
		
		messages: {},
		
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
			
			nombre_completo: {required: true},
			ciudad: {required: true},
			direccion: {required: true},
			telefono: {required: true, digits: true},
			ints_educativa: {required: true},
			email: {required: true, email: true},	
			tematica: {required: true},	
			
		},
		
		messages: {},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});
//---------------------------------------------------------------------------------------------------------------//
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
		
		messages: {},
		
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
	var i =0;
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			 materia= $(this).val();
			$("."+materia+"").css("display", "block");
			i++
	});
	
	if(i==0){
	alert("Por favor seleccione alguna(s) materia(s)")
	}else{
		$(':mobile-pagecontainer').pagecontainer('change', '#formulario_horas', {
			reload: false
		});
	}
	
		
	
return false;
}

//Funcion ajax dos formulario_horas_bachillerato
function funcion_ajax2() {	
	num_e=$("#num_estudientas").val();
	var resul="";
	// Cogemos los valores pasados por get
	var valores=getGET();	
	
	//toma la fecha del sistema para ser comparada con la fecha insertada por el usuario
	var fecha = new Date();	
    fecha.setHours(fecha.getHours()+12);//agrega 12 horas a la fecha del sistema
	var dd = fecha.getDate(); var mm = fecha.getMonth()+1; var yyyy = fecha.getFullYear();  var h = fecha.getHours(); var m = fecha.getMinutes(); if(dd<10) {	dd='0'+dd}; if(mm<10) {	mm='0'+mm}
	hoyfecha = yyyy+'-'+mm+'-'+dd; hoyhora = h+':'+m;
	
	miArray = new Array(); miArray_quimi = new Array(); miArray_fisic = new Array(); miArray_matem = new Array(); miArray_geome = new Array(); miArray_calcu = new Array(); miArray_infor = new Array();	
	var igualesTQ= "";	var igualesTF= "";	var igualesTM= "";	var igualesTG= "";	var igualesTC= "";	var igualesTI= "";	var igualesQF= "";	var igualesQM= "";	var igualesQG= "";	var igualesQC= "";	var igualesQI= "";	var igualesFM= "";	var igualesFG= "";	var igualesFC= "";	var igualesFI= "";	var igualesMG= "";	var igualesMC= "";	var igualesMI= "";	var igualesGC= "";	var igualesGI= "";	var igualesCI= "";
	
	hora1_trigo =  $("#hora1_trigo").val();
	hora2_trigo =  $("#hora2_trigo").val();
	fecha_trigo =  $("#fecha_trigo").val();
	(diferencia_horas_trigo = restarHoras(hora1_trigo,hora2_trigo));
	for (i = 0; i < diferencia_horas_trigo; i++) {miArray[i] = parseInt(hora1_trigo) +  parseInt(i);} //miArray[5] = fecha_trigo;
	cambiar_array(miArray)
	var docehoras_trigo = (compare_dates(fecha_trigo,hoyfecha,hora1_trigo,hoyhora));
	
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
	
	diurnat = (camparar_diurna(miArray));
	diurnaq = camparar_diurna(miArray_quimi);
	diurnaf = camparar_diurna(miArray_fisic);
	diurnam = camparar_diurna(miArray_matem);
	diurnag = camparar_diurna(miArray_geome);
	diurnac = camparar_diurna(miArray_calcu);
	diurnai = camparar_diurna(miArray_infor);
	
	if(diurnat == "nocturna" || diurnaq == "nocturna" || diurnaf == "nocturna" || diurnam == "nocturna" || diurnag == "nocturna" || diurnac == "nocturna" || diurnai == "nocturna"){alert("Las horas nocturnas solicitadas tendran un cobro adicional")}
	
	if(fecha_trigo == "" && hora1_trigo!= ""){
		alert("No ha elegido una fecha para trigonometria")
	
	}else if(fecha_quimi == "" && hora1_quimi!= ""){
		alert("No ha elegido una fecha para quimica")
	
	}else if(fecha_fisic == "" && hora1_fisic!= ""){
		alert("No ha elegido una fecha para fisica")
	
	}else if(fecha_matem == "" && hora1_matem!= ""){
		alert("No ha elegido una fecha para matematicas")
	
	}else if(fecha_geome == "" && hora1_geome!= ""){
		alert("No ha elegido una fecha para geometria")
	
	}else if(fecha_calcu == "" && hora1_calcu!= ""){
		alert("No ha elegido una fecha para calculo")
	
	}else if(fecha_infor == "" && hora1_infor!= ""){
		alert("No ha elegido una fecha para informatica")
	
	}else if(igualesTQ ==""&& igualesTF =="" &&igualesTM =="" &&igualesTG =="" &&igualesTC =="" &&igualesTI =="" &&igualesQF =="" &&igualesQM =="" &&igualesQG =="" &&igualesQC =="" &&igualesQI =="" &&igualesFM =="" &&igualesFG =="" &&igualesFC =="" &&igualesFI =="" &&igualesMG =="" && igualesMC==""&&igualesMI =="" &&igualesGC =="" &&igualesGI =="" &&igualesCI ==""){
		
		
				if(valores){
						$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante',{
						reload: false
						});					
				}else{
					if(docehoras_trigo == true && docehoras_quimi == true && docehoras_fisic == true && docehoras_matem == true && docehoras_geome == true && docehoras_calcu == true  && docehoras_infor == true){
						$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante',{
						reload: false
						});
					}else{
						alert("Si va  a agendar antes de 12 horas por favor dirijase al apartado de Fast Class")
					}
				}
				
	}
	
return false;
}


//Funcion ajax tres resumen de solicitud
function funcion_ajax3() {
	//var valor_trigo = 0 ; var valor_quimi = 0 ; var valor_fisica = 0 ; var valor_matem = 0 ; var valor_geome = 0 ; var valor_calcu = 0 ; var valor_infor = 0 ;
	
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
	
	//si es diurna y va de 9pm a 10pm
	if(diurnat =="extra"){	valor_trigo = valor_trigo + 10000;	}	
	if(diurnaq =="extra"){	valor_quimi = valor_quimi + 10000;	}	
	if(diurnaf =="extra"){	valor_fisica = valor_fisica + 10000;}	
	if(diurnam =="extra"){	valor_matem = valor_matem + 10000;	}	
	if(diurnag =="extra"){	valor_geome = valor_geome + 10000;	}	
	if(diurnac =="extra"){	valor_calcu = valor_calcu + 10000;	}	
	if(diurnai =="extra"){	valor_infor = valor_infor + 10000;	}
	
	valor_total = valor_trigo + valor_quimi + valor_fisica + valor_matem + valor_geome + valor_calcu + valor_infor

	$("#classes").text("Classe de: "+$("#bachillerato").val());
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
	var agendar;
	// Cogemos los valores pasados por get
	var valores=getGET();
	
	if(valores){
		//si existe un valor es fastclass
		fastclass =("SI");
	}else{
	    fastclass =("NO");
	}	
	
	//RECORDAR SESION
	if( $("#agendar").is(':checked')){
		var agendar = "SI"
	}else{
		var agendar = "NO"
	}
		
	var parametros = {
		"fastclass" : fastclass,
		"agendar": agendar,
		"nombre" : $("#nombre_completo").val(),
		"ciudad" : $("#ciudad").val(),
		"direccion" : $("#direccion").val(),
		"telefono" : $("#telefono").val(),
		"email" : $("#email").val(),
		"ints_educativa" : $("#ints_educativa").val(),
		"tematica" : $("#tematica").val(),
		"classe" : $("#bachillerato").val(),
		"numero_estudiantes": num_e,
		"trigonometria":hora1_trigo +" "+ hora2_trigo +" "+ fecha_trigo,
		"quimica": hora1_quimi +" "+ hora2_quimi  +" "+ fecha_quimi ,
		"fisica": hora1_fisic +" "+ hora2_fisic  +" "+ fecha_fisic ,
		"matematicas": hora1_matem  +" "+ hora2_matem  +" "+ fecha_matem ,
		"geometria": hora1_geome +" "+ hora2_geome  +" "+ fecha_geome ,
		"calculo": hora1_calcu +" "+ hora2_calcu  +" "+ fecha_calcu ,
		"informatica": hora1_infor +" "+ hora2_infor  +" "+ fecha_infor ,
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
//---------------------------------------------FUNCIONES---------------------------------------------------------//
function calcular_precio_materia(horario){
if (horario !== undefined) {
	// Cogemos los valores pasados por get
	var valores=getGET();
	if(valores){//si es fastclass
		if(horario =="diurna"){	
			switch (num_e) { 
			case "1":	valor_num_e = 25000;	break;	case "2": valor_num_e = 35000; break;	case "3": valor_num_e = 45000; break;	case "4": valor_num_e = 55000; break;	case "5": valor_num_e = 65000; break;
			}
		}else{
			switch (num_e) {
			case "1": valor_num_e = 45000; break;	case "2": valor_num_e = 55000; break;	case "3": valor_num_e = 65000; break;	case "4": valor_num_e = 75000; break;	case "5": valor_num_e = 85000; break;
			}
		}
	    return valor_num_e;
		
	}else{//si no es fastclass
		if(horario =="diurna" || horario =="extra"){
			switch (num_e) { 
			case "1":	valor_num_e = 20000;	break;	case "2": valor_num_e = 30000; break;	case "3": valor_num_e = 40000; break;	case "4": valor_num_e = 50000; break;	case "5": valor_num_e = 60000; break;			
			}
		}else if(horario =="nocturna"){
			switch (num_e) {
			case "1": valor_num_e = 40000; break;	case "2": valor_num_e = 50000; break;	case "3": valor_num_e = 60000; break;	case "4": valor_num_e = 70000; break;	case "5": valor_num_e = 80000; break;
			}
		}
		return valor_num_e;
	}
}else{
return 0;	
}
}

//---------------------------------------------------------------------------------------------------------------//

