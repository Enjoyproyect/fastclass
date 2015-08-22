$().ready(function() {
	// VARIABLES GLOBALES
	var fastclass;//PARA SABER SI ES FASTCLASS
	var num_e="";//NUMERO DE ESTUDIANTES DEL SELECT
	var materia;//MATERIAS SELECCIONADAS
	
	//DIFERENCIA DE HORAS PARA SABER CUANTAS HORAS VA A ESTUDIAR
	var diferencia_horas_quimi = 0;	var diferencia_horas_fisica = 0; var diferencia_horas_calcu = 0;
	
	//VALOR COBRADO DE HORAS POR MATERIA
	var valor_num_e_quimi=0; var valor_num_e_fisica=0; var valor_num_e_calcu=0;
	
	//ARREGLO DE HORAS POR MATERIA
	var miArray_quimi;	var miArray_fisic; var miArray_calcu ;
	
	//PARA SABER SI ES HORARIO DIRUNO O NOCTURNO
	var diurnaq; var diurnaf; var diurnac;
	
	//VALORES INSERTADOR POR EL USUARIO
	var hora1_quimi; var hora2_quimi; var fecha_quimi;	var hora1_fisic ; var hora2_fisic ; var fecha_fisic ; var hora1_calcu ; var hora2_calcu ; var fecha_calcu;
	
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

//validador 2	
	$("#formulario_horas_pregrado").validate({
		//Funcion que se ejecuta al final de la validacion 
		//form.submit();
		submitHandler: function(form){
			funcion_ajax2();
          },	
				
		rules:{
			num_estudientas: {required: true},
			hora1_quimi: {required: true},
			hora2_quimi: {required: true,},
			fecha_quimi: {required: true, date:true},
			
			hora1_fisic: {required: true},
			hora2_fisic: {required: true,},
			fecha_fisic: {required: true, date:true},
			
			hora1_calcu: {required: true},
			hora2_calcu: {required: true,},
			fecha_calcu: {required: true, date:true},
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
			nombre_completo: {required: true},
			ciudad: {required: true},
			direccion: {required: true},
			telefono: {required: true, digits: true},
			ints_educativa: {required: true},
			email: {required: true, email: true},	
			tematica: {required: true},			
		},
		
		messages: {
		
		
		},
		
		errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
   		 },
	});

//---------------------------------------------------------------------------------------------------------------//	
})

//---------------------------------------------PREGRADO-----------------------------------------------------------//
//Funcion ajax cuatro formulario_materias_pregrado
function funcion_ajax4() {
	document.getElementById("formulario_horas_pregrado").reset();
	
	$(".quimica, .fisica, .calculo").css("display", "none");
	var i=0;
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			var materia= $(this).val();
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

//Funcion ajax dos formulario_horas_pregrado
function funcion_ajax2() {
	num_e=$("#num_estudientas").val();
	var resul="";
	// Cogemos los valores pasados por get
	var valores=getGET();	
	
	//TOMA LA FECHA DEL SISTEMA PARA SER COMPARADA CON LA FECHA INSERTADA POR EL USUARIO
	var fecha = new Date();	
	fecha.setHours(fecha.getHours()+12);//agrega 12 horas a la fecha del sistema
	var dd = fecha.getDate(); var mm = fecha.getMonth()+1; var yyyy = fecha.getFullYear();  var h = fecha.getHours(); var m = fecha.getMinutes(); if(dd<10) {	dd='0'+dd} if(mm<10) {	mm='0'+mm} 
	hoyfecha = yyyy+'-'+mm+'-'+dd;  hoyhora = h+':'+m;
	
	//INSTANCIA LOS ARREGLOS PARA LAS HORAS
	miArray_quimi = new Array(); miArray_fisic = new Array(); miArray_calcu = new Array(); 	
	
	//VARIABLES PARA COMPARAR LAS FECHAS DE LAS MATERIAS PARA QUE NO SE REPITAN
	var igualesQF= "";	var igualesQC= "";	var igualesFC= "";
	
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
	
	
	hora1_calcu =  $("#hora1_calcu").val();
	hora2_calcu =  $("#hora2_calcu").val();
	fecha_calcu =  $("#fecha_calcu").val();
	diferencia_horas_calcu = restarHoras(hora1_calcu,hora2_calcu);
	for (i = 0; i < diferencia_horas_calcu; i++) {miArray_calcu[i] = parseInt(hora1_calcu) +  parseInt(i);}
	cambiar_array(miArray_calcu)
	var docehoras_calcu = compare_dates(fecha_calcu,hoyfecha,hora1_calcu,hoyhora);
	
	
	if(fecha_quimi==fecha_fisic){igualesQF= "";resul = camparar(miArray_quimi,miArray_fisic);if(resul == "si"){alert("La materia Quimica se cruza con Fisica"); igualesQF= "iguales"}}
	if(fecha_quimi==fecha_calcu){igualesQC= "";resul = camparar(miArray_quimi,miArray_calcu);if(resul == "si"){alert("La materia Quimica se cruza con Calculo"); igualesQC= "iguales"}}	
	if(fecha_fisic==fecha_calcu){igualesFC= "";resul = camparar(miArray_fisic,miArray_calcu);if(resul == "si"){alert("La materia Fisica se cruza con Calculo"); igualesFC= "iguales"}}	
	
	diurnaq = camparar_diurna(miArray_quimi);
	diurnaf = camparar_diurna(miArray_fisic);
	diurnac = camparar_diurna(miArray_calcu);
	
	if(diurnaq == "nocturna" || diurnaf == "nocturna" || diurnac == "nocturna"){alert("Las horas nocturnas solicitadas tendran un cobro adicional")}
	
	if(fecha_quimi == "" && hora1_quimi!= ""){
		alert("No ha elegido una fecha para quimica")
	
	}else if(fecha_fisic == "" && hora1_fisic!= ""){
		alert("No ha elegido una fecha para fisica")
	
	}else if(fecha_calcu == "" && hora1_calcu!= ""){
		alert("No ha elegido una fecha para calculo")
	
	}else if(igualesQF =="" && igualesQC =="" && igualesFC ==""){
		
			if(valores){
						$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante',{
						reload: false
						});				
				}else{
					if(docehoras_quimi == true && docehoras_fisic == true && docehoras_calcu == true ){
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
	var dos = parseInt(diferencia_horas_quimi);
	var tres = parseInt(diferencia_horas_fisica);
	var seis = parseInt(diferencia_horas_calcu);
	
	if(isNaN(dos)){dos=0}	if(isNaN(tres)){tres=0}	if(isNaN(seis)){seis=0}
	
	valor_num_e_quimi = calcular_precio_materia(diurnaq);
	valor_num_e_fisica = calcular_precio_materia(diurnaf);
	valor_num_e_calcu = calcular_precio_materia(diurnac);
	
	num_h =  dos + tres +seis;
	valor_quimi = valor_num_e_quimi * dos;
	valor_fisica = valor_num_e_fisica * tres;
	valor_calcu = valor_num_e_calcu * seis;
	
	if(diurnaq =="extra"){	valor_quimi = valor_quimi + 10000;	}
	if(diurnaf =="extra"){	valor_fisica = valor_fisica + 10000;}	
	if(diurnac =="extra"){	valor_calcu = valor_calcu + 10000;	}
	
	valor_total = valor_quimi + valor_fisica +  valor_calcu 

	$("#classes").text("Classe de: "+$("#pregrado").val());
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
		"classe" : $("#pregrado").val(),
		"numero_estudiantes": num_e,
		"quimica": hora1_quimi +" "+ hora2_quimi  +" "+ fecha_quimi ,
		"fisica": hora1_fisic +" "+ hora2_fisic  +" "+ fecha_fisic ,
		"calculo": hora1_calcu +" "+ hora2_calcu  +" "+ fecha_calcu ,
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

//-----------------------------------------------------------------------------------------------------------------//
//---------------------------------------------FUNCIONES---------------------------------------------------------//
function calcular_precio_materia(horario){
if (horario !== undefined) {
	var valores=getGET();
	if(valores){
		if(horario =="diurna"){	
			switch (num_e) { 
			case "1":	valor_num_e = 30000;	break;	case "2": valor_num_e = 40000; break;	case "3": valor_num_e = 50000; break;	case "4": valor_num_e = 60000; break;	case "5": valor_num_e = 70000; break;
			}
		}else{
			switch (num_e) {
			case "1": valor_num_e = 50000; break;	case "2": valor_num_e = 60000; break;	case "3": valor_num_e = 70000; break;	case "4": valor_num_e = 80000; break;	case "5": valor_num_e = 90000; break;
			}
		}
		return valor_num_e;
	}else{
		if(horario =="diurna" || horario =="extra"){	
			switch (num_e) { 
			case "1":	valor_num_e = 25000;	break;	case "2": valor_num_e = 35000; break;	case "3": valor_num_e = 45000; break;	case "4": valor_num_e = 55000; break;	case "5": valor_num_e = 65000; break;
			}
		}else{
			switch (num_e) {
			case "1": valor_num_e = 45000; break;	case "2": valor_num_e = 55000; break;	case "3": valor_num_e = 65000; break;	case "4": valor_num_e = 75000; break;	case "5": valor_num_e = 85000; break;
			}
		}
		return valor_num_e;		
	}
}else{
return 0;	
}
}

//---------------------------------------------------------------------------------------------------------------//