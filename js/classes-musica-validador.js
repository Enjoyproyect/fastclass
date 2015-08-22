$().ready(function() {
	// VARIABLES GLOBALES
	var fastclass;//PARA SABER SI ES FASTCLASS
	var num_e="";//NUMERO DE ESTUDIANTES DEL SELECT
	var materia;//MATERIAS SELECCIONADAS
	
	//DIFERENCIA DE HORAS PARA SABER CUANTAS HORAS VA A ESTUDIAR
	var diferencia_horas_canto = 0;	var diferencia_horas_guita = 0; var diferencia_horas_piano = 0; var diferencia_horas_violi = 0;
	
	//VALOR COBRADO DE HORAS POR MATERIA
	var valor_num_e_canto=0; var valor_num_e_guita=0; var valor_num_e_piano=0; var valor_num_e_violi=0;
	 
	//ARREGLO DE HORAS POR MATERIA
	var miArray_canto;	var miArray_guita; var miArray_piano ; var miArray_violi ;
	
	//PARA SABER SI ES HORARIO DIRUNO O NOCTURNO
	var diurnac; var diurnag; var diurnap; var diurnav;
	
	//VALORES INSERTADOR POR EL USUARIO
	var hora1_canto; var hora2_canto; var fecha_canto;	var hora1_guita ; var hora2_guita ; var fecha_guita ; var hora1_piano ; var hora2_piano ; var fecha_piano; var hora1_violi ; var hora2_violi ; var fecha_violi;
	
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
			num_estudientas: {required: true},
			hora1_canto: {required: true},
			hora2_canto: {required: true,},
			fecha_canto: {required: true, date:true},
			
			hora1_guita: {required: true},
			hora2_guita: {required: true,},
			fecha_guita: {required: true, date:true},
			
			hora1_piano: {required: true},
			hora2_piano: {required: true,},
			fecha_piano: {required: true, date:true},
			
			hora1_violi: {required: true},
			hora2_violi: {required: true,},
			fecha_violi: {required: true, date:true},
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

})//end ready	
//------------------------------------------------------------------------------------------------------------//	
//-------------------------------------------MUSICA----------------------------------------------------------------//
//Funcion ajax cinco formulario_materias_musica
function funcion_ajax5() {
	document.getElementById("formulario_horas_musica").reset();
	$(".canto, .guitarra, .piano, .violin").css("display", "none");
	var i=0;
	$("input:checkbox:checked").each(function(){//cada elemento seleccionado
			var materia= $(this).val();
			$("."+materia+"").css("display", "block");
			i++
	});
	
	if(i==0){
	alert("Por favor seleccione alguna(s) materia(s)")
	}else{
		$(':mobile-pagecontainer').pagecontainer('change', '#formulario_musica', {
			reload: false
		});
	}
	
return false;
}

//Funcion ajax seis formulario_horas_musica
function funcion_ajax6() {
	num_e=$("#num_estudientas").val();
	var resul="";
	// Cogemos los valores pasados por get
	var valores=getGET();	
	
	//TOMA LA FECHA DEL SISTEMA PARA SER COMPARADA CON LA FECHA INSERTADA POR EL USUARIO
	var fecha = new Date();	
	fecha.setHours(fecha.getHours()+12);//agrega 12 horas a la fecha del sistema
	var dd = fecha.getDate(); var mm = fecha.getMonth()+1; var yyyy = fecha.getFullYear();  var h = fecha.getHours(); var m = fecha.getMinutes(); if(dd<10) {	dd='0'+dd} if(mm<10) {	mm='0'+mm} 
	hoyfecha = yyyy+'-'+mm+'-'+dd; hoyhora = h+':'+m;
	
	//INSTANCIA LOS ARREGLOS PARA LAS HORAS
	miArray_canto = new Array(); miArray_guita = new Array(); miArray_piano = new Array(); miArray_violi = new Array();
	
	//VARIABLES PARA COMPARAR LAS FECHAS DE LAS MATERIAS PARA QUE NO SE REPITAN
	var igualesCG= "";	var igualesCP= "";	var igualesCV= ""; var igualesGP= ""; var igualesGV= ""; var igualesPV= "";
	
	hora1_canto =  $("#hora1_canto").val();
	hora2_canto =  $("#hora2_canto").val();
	fecha_canto =  $("#fecha_canto").val();
	diferencia_horas_canto = restarHoras(hora1_canto,hora2_canto);
	for (i = 0; i < diferencia_horas_canto; i++) {miArray_canto[i] = parseInt(hora1_canto) +  parseInt(i);} //miArray_canto[5] = fecha_canto;
	cambiar_array(miArray_canto)
	var docehoras_canto = compare_dates(fecha_canto,hoyfecha,hora1_canto,hoyhora);

	hora1_guita =  $("#hora1_guita").val();
	hora2_guita =  $("#hora2_guita").val();
	fecha_guita =  $("#fecha_guita").val();
	diferencia_horas_guita = restarHoras(hora1_guita,hora2_guita);
	for (i = 0; i < diferencia_horas_guita; i++) {miArray_guita[i] = parseInt(hora1_guita) +  parseInt(i);}
	cambiar_array(miArray_guita)
	var docehoras_guita = compare_dates(fecha_guita,hoyfecha,hora1_guita,hoyhora);
	
	
	hora1_piano =  $("#hora1_piano").val();
	hora2_piano =  $("#hora2_piano").val();
	fecha_piano =  $("#fecha_piano").val();
	diferencia_horas_piano = restarHoras(hora1_piano,hora2_piano);
	for (i = 0; i < diferencia_horas_piano; i++) {miArray_piano[i] = parseInt(hora1_piano) +  parseInt(i);}
	cambiar_array(miArray_piano)
	var docehoras_piano = compare_dates(fecha_piano,hoyfecha,hora1_piano,hoyhora);
	
	hora1_violi =  $("#hora1_violi").val();
	hora2_violi =  $("#hora2_violi").val();
	fecha_violi =  $("#fecha_violi").val();
	diferencia_horas_violi = restarHoras(hora1_violi,hora2_violi);
	for (i = 0; i < diferencia_horas_violi; i++) {miArray_violi[i] = parseInt(hora1_violi) +  parseInt(i);}
	cambiar_array(miArray_violi)
	var docehoras_violi = compare_dates(fecha_violi,hoyfecha,hora1_violi,hoyhora);
	
	
	if(fecha_canto==fecha_guita){igualesCG= "";resul = camparar(miArray_canto,miArray_guita);if(resul == "si"){alert("La clase de canto se cruza con guitarra"); igualesCG= "iguales"}}
	if(fecha_canto==fecha_piano){igualesCP= "";resul = camparar(miArray_canto,miArray_piano);if(resul == "si"){alert("La clase de canto se cruza con piano"); igualesCP= "iguales"}}	
	if(fecha_canto==fecha_violi){igualesCV= "";resul = camparar(miArray_canto,miArray_violi);if(resul == "si"){alert("La clase de canto se cruza con violin"); igualesCV= "iguales"}}	
	
	if(fecha_guita==fecha_piano){igualesGP= "";resul = camparar(miArray_guita,miArray_piano);if(resul == "si"){alert("La clase de guitarra se cruza con piano"); igualesGP= "iguales"}}	
	if(fecha_guita==fecha_violi){igualesGV= "";resul = camparar(miArray_guita,miArray_violi);if(resul == "si"){alert("La clase de guitarra se cruza con violin"); igualesGV= "iguales"}}	
	
	if(fecha_piano==fecha_violi){igualesPV= "";resul = camparar(miArray_piano,miArray_violi);if(resul == "si"){alert("La clase de piano se cruza con violin"); igualesPV= "iguales"}}	
	
	diurnac = camparar_diurna(miArray_canto);
	diurnag = camparar_diurna(miArray_guita);
	diurnap = camparar_diurna(miArray_piano);
	diurnav = camparar_diurna(miArray_violi);
	
	if(diurnac == "nocturna" || diurnag == "nocturna" || diurnap == "nocturna" || diurnav == "nocturna"){alert("Las horas nocturnas solicitadas tendran un cobro adicional")}
	
	
	if(fecha_canto == "" && hora1_canto!= ""){
		alert("No ha elegido una fecha para canto")
	
	}else if(fecha_guita == "" && hora1_guita!= ""){
		alert("No ha elegido una fecha para guitarra")
	
	}else if(fecha_piano == "" && hora1_piano!= ""){
		alert("No ha elegido una fecha para piano")
	
	}else if(fecha_violi == "" && hora1_violi!= ""){
		alert("No ha elegido una fecha para violin")
	
	}else if(igualesCG =="" && igualesCP =="" && igualesCV =="" && igualesGP =="" && igualesGV =="" && igualesPV ==""){
			
			if(valores){
						$(':mobile-pagecontainer').pagecontainer('change', '#datos_estudiante',{
						reload: false
						});			
				}else{
					if(docehoras_canto == true && docehoras_guita == true && docehoras_piano == true && docehoras_violi == true){
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
	var uno = parseInt(diferencia_horas_canto);
	var dos = parseInt(diferencia_horas_guita);
	var tres = parseInt(diferencia_horas_piano);
	var cuatro = parseInt(diferencia_horas_violi);
	
	if(isNaN(uno)){uno=0} if(isNaN(dos)){dos=0}	if(isNaN(tres)){tres=0}	if(isNaN(cuatro)){cuatro=0}
	
	valor_num_e_canto = calcular_precio_materia(diurnac);
	valor_num_e_guita = calcular_precio_materia(diurnag);
	valor_num_e_piano = calcular_precio_materia(diurnap);
	valor_num_e_violi = calcular_precio_materia(diurnav);
	
	num_h = uno + dos + tres + cuatro;
	valor_canto = valor_num_e_canto * uno;
	valor_guita = valor_num_e_guita * dos;
	valor_piano = valor_num_e_piano * tres;
	valor_violi = valor_num_e_violi * cuatro;
	
	if(diurnac =="extra"){	valor_canto = valor_canto + 10000;	}	
	if(diurnag =="extra"){	valor_guita = valor_guita + 10000;	}	
	if(diurnap =="extra"){	valor_piano = valor_piano + 10000;}	
	if(diurnav =="extra"){	valor_violi = valor_violi + 10000;	}
	
	valor_total = valor_canto + valor_guita +  valor_piano + valor_violi;

	$("#classes").text("Classe de: "+$("#musica").val());
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
		"canto": hora1_canto +" "+ hora2_canto  +" "+ fecha_canto ,
		"guitarra": hora1_guita +" "+ hora2_guita  +" "+ fecha_guita ,
		"piano": hora1_piano +" "+ hora2_piano  +" "+ fecha_piano ,
		"violin": hora1_violi +" "+ hora2_violi  +" "+ fecha_violi ,
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
