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
					
					if(array1[0] == 3 || array1[0] == 4 ||array1[0] == 5){
						res="nocturna"	
					}else{
						res="diurna"
					}
					
				}else if(array1[x] >= "21" && array1[x] <"22"){
					res="extra"
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


function compare_dates(fecha, fecha2,hora,hora2){  
	if(fecha != ""){	
		var xMonth=fecha.substring(5,7);  
		var xDay=fecha.substring(8,10);  
		var xYear=fecha.substring(0,4);  
		var yMonth=fecha2.substring(5,7);  
		var yDay=fecha2.substring(8,10);  
		var yYear=fecha2.substring(0,4); 
		
		if (xYear> yYear){   
			return(true)
		}else{  
		  if (xYear == yYear){   
			if (xMonth> yMonth){ 
				return(true)
			}else{   
			  if (xMonth == yMonth){  
				if (xDay>yDay){
					return(true)
				}else{
					if(xDay==yDay){
						if (parseInt(hora)>parseInt(hora2)){
							return(true)	
						}else{
							return(false)	
						}
						
					}else{
						return(false)
					}
				}
			  }else{  
				return(false);  
			  }
			}  
		  }else{  
			return(false);  
		  }
		}  
	}else{
		return(true)
	}
}

function getGET(){
	// capturamos la url
	var loc = document.location.href;
	// si existe el interrogante
	if(loc.indexOf('?')>0){
		// cogemos la parte de la url que hay despues del interrogante
		var getString = loc.split('?')[1];
		// obtenemos un array con cada clave=valor
		var GET = getString.split('&');
		var get = {};

		// recorremos todo el array de valores
		for(var i = 0, l = GET.length; i < l; i++){
			var tmp = GET[i].split('=');
			get[tmp[0]] = unescape(decodeURI(tmp[1]));
		}
		return get;
	}
}
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