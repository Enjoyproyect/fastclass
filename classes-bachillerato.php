<html>
	<head>
		<meta charset="utf-8" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="viewport" content="user-scalable=no, initial-scale=1, maximun-scale=1, minimun-scale=1, whidth=device-width, height=device-height, target-densitydpi=device-dpi" />
		<link rel="stylesheet" type="text/css" href="css/jquery-mobile-1.4.5.css" />        
        <link rel="stylesheet" type="text/css" href="css/classes.min.css" />         
        <link rel="stylesheet" type="text/css" href="css/main.css" />    
        <link rel="stylesheet" type="text/css" href="css/jquery.datetimepicker.css" />
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jquery-mobile-1.4.5.js"></script>
        <script type="text/javascript" src="js/jquery.validate.min.js"></script>
        <script type="text/javascript" src="js/jquery.datetimepicker.js"></script>
		<script type="text/javascript" src="classes-bachillerato-validador.js"></script>
		<title>CLASSES</title>
	</head>

	<body>

		<!--PAGINA MATERIAS BACHILLERATO-->

		<div data-role="page" data-theme="d" id="page2">

			<div data-role="header" data-theme="d" id="" data-position="fixed">
				
				<h1>BACHILLERATO</h1>
				
			</div>

			<div data-role="content" data-theme="d" id="">
			<form id="formulario_materias_bachillerato" method="post" data-ajax="false">
				<fieldset data-role="controlgroup">
					<legend>Selecciona la(s) materia(s) que quieres recibir:</legend>
                    	<input type="hidden" name="bachillerato" id="bachillerato" value="bachillerato"/>
                        <input type="checkbox" name="trigonometria" id="trigonometria" value="trigonometria"/>
						<label for="trigonometria">Trigonometría</label>
                        <input type="checkbox" name="quimica" id="quimica" value="quimica"/>
						<label for="quimica">Quimica</label>
                        <input type="checkbox" name="fisica" id="fisica" value="fisica"/>
						<label for="fisica">Física</label>
						<input type="checkbox" name="matematicas" id="matematicas" value="matematicas"/>
						<label for="matematicas">Matematicas</label>
						<input type="checkbox" name="geometria" id="geometria" value="geometria"/>
						<label for="geometria">Geometría</label>
						<input type="checkbox" name="calculo" id="calculo" value="calculo"/>
						<label for="calculo">Cálculo</label>
						<input type="checkbox" name="informatica" id="informatica" value="informatica"/>
                        <label for="informatica">Informática</label>
				</fieldset>
                    <input type="submit" value="Siguiente" id="submit">
                </form>
			</div>

			<div data-role="footer" data-theme="d" id="" data-position="fixed">
				<h5>(c) 2015. Classes</h5>
			</div>
		</div>
		
		<!--PAGINA MATERIAS BACHILLERATO-->

<div data-role="page" data-theme="d" id="formulario_horas">
        <div data-role="header" data-theme="d">
            <h2>BACHILLERATO</h2>
        </div>
            
        <div data-role="content" data-theme="d">
        
                 <form id="formulario_horas_bachillerato" method="post" data-ajax="false">   
                 
                 <hr>
                 	<label for="num_estudientas">Numero de estudiantes:</label>
                    <select id="num_estudientas" name="num_estudientas" data-native-menu="false">
                        <option value="">Seleccione:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <?php //for($i = 1; $i <= 5; $i++){echo "<option value=\"$i\">$i</option>";}?>
                	</select>
                 <hr>	
                    <div class="trigonometria">
                    <legend>FORMULARIO TRIGONOMETRIA:</legend> 
                    
                    <label for="hora1_trigo">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_trigo" id="hora1_trigo">
                    
                    <label for="hora2_trigo">Hora final de clase: </label>
                    <input class="horas2" type="text" name="hora2_trigo" id="hora2_trigo">
                    
                    <label for="fecha_trigo">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_trigo" id="fecha_trigo">
                    
                    </div>
                    <br>
                    
                    <div class="quimica">
                    <legend>FORMULARIO QUIMICA:</legend>
                    
                    <label for="hora1_quimi">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_quimi" id="hora1_quimi">   
                    
                    <label for="hora2_quimi">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_quimi" id="hora2_quimi">   
                    
                    <label for="fecha_quimi">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_quimi" id="fecha_quimi">
                    </div>
                    <br>
                    
                    <div class="fisica">
                     <legend>FORMULARIO FISICA:</legend>
                     
                     <label for="hora1_fisic">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_fisic" id="hora1_fisic">

                    <label for="hora2_fisic">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_fisic" id="hora2_fisic">
                    
                    <label for="fecha_fisic">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_fisic" id="fecha_fisic">
                    </div>
                    <br>
                    
                    <div class="matematicas">
                     <legend>FORMULARIO MATEMATICAS:</legend>
                     
                     <label for="hora1_matem">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_matem" id="hora1_matem">
                    
                    <label for="hora2_matem">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_matem" id="hora2_matem">
                    
                    <label for="fecha_matem">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_matem" id="fecha_matem">
                    </div>
                    <br>
                    
                    <div class="geometria">
                     <legend>FORMULARIO GEOMETRIA:</legend>
                    
                    <label for="hora1_geome">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_geome" id="hora1_geome">
                    
                    <label for="hora2_geome">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_geome" id="hora2_geome">
                    
                    <label for="fecha_geome">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_geome" id="fecha_geome">
                    </div>
                    <br>
                    
                    <div class="calculo">
                     <legend>FORMULARIO CALCULO:</legend>
                     
                    <label for="hora1_calcu">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_calcu" id="hora1_calcu">
                    
                    <label for="hora2_calcu">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_calcu" id="hora2_calcu">
                    
                    <label for="fecha_calcu">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_calcu" id="fecha_calcu">
                    </div>
                    
                    <br>                    
                    <div class="informatica">
                     <legend>FORMULARIO INFORMATICA:</legend>
                    
                    <label for="hora1_infor">Hora inicio de clase: </label>
                    <input class="horas" type="text" name="hora1_infor" id="hora1_infor">
                    
                    <label for="hora2_infor">Hora fin de clase: </label>
                    <input class="horas2" type="text" name="hora2_infor" id="hora2_infor">
                    
                    <label for="fecha_infor">Fecha de clase: </label>
                    <input class="fechas" type="text" name="fecha_infor" id="fecha_infor">
                    </div>
                    <input type="submit" value="Entrar" id="submit">
                    
                </form>
                
        </div>    
        
        <div data-role="footer" data-theme="d" id="" data-position="fixed">
            <h5>(c) 2015. Classes</h5>
        </div>
</div>


<div data-role="page" data-theme="d" id="datos_estudiante">
        <div data-role="header" data-theme="d">
            <h2>BACHILLERATO</h2>
        </div>
            
        <div data-role="content" data-theme="d">
        
                 <form id="formulario_datos_estudiante" >   
                   <fieldset data-role="">
                    <h2>Datos Estudiante: </h2>
                    
                        <label for="nombre_completo">Nombre completo: </label>
                        <input type="text" name="nombre_completo" id="nombre_completo">
                        
                        <label for="ciudad">Ciudad: </label>
                        <select name="ciudad" id="ciduad" data-native-menu="false">
                        <option value="bucaramanga">Bucaramanga</option>
                        <option value="bogota">Bogotá</option>
                        <option value="medellin">Medellín</option>                        
                        </select>
                        
                        
                        <label for="direccion">Direccion: </label>
                        <input type="text" name="direccion" id="direccion">
                        
                        <label for="telefono">Telefono: </label>
                        <input type="text" name="telefono" id="telefono">
                        
                        <label for="email">E-mail: </label>
                        <input type="email" name="email" id="email">
                                                        
                        <label for="int_educativa">Institucion educativa: </label>
                        <input type="text" name="int_educativa" id="int_educativa">
                        
                        <label for="tematica">Tematica: </label>
                        <textarea type="text" name="tematica" id="tematica"></textarea>
                   </fieldset>
                   <input type="submit" value="Entrar" id="submit">
                </form>
                
        </div>    
        
        <div data-role="footer" data-theme="d" id="" data-position="fixed">
            <h5>(c) 2015. Classes</h5>
        </div>
</div>


<div data-role="page" data-theme="d" id="exito">
        <div data-role="header" data-theme="d">
            <h2>BACHILLERATO</h2>
        </div>
            
        <div data-role="content" data-theme="d">
            <h1 align="center">Exito</h1>
            <h2 align="center">Su solicitud ha sido enviada con exito, en breve recibira respuesta.</h2>
            
           <!-- <h3 >DATOS</h3>
            <h4 id="classes"></h4>
            <h4 id="horas_usuario"></h4>
            <h4 id="num_e"></h4>-->
        </div>    
        
        <div data-role="footer" data-theme="d" id="" data-position="fixed">
            <h5>(c) 2015. Classes</h5>
        </div>
</div>

<script>
 	$(function() {
    $( ".fechas" ).datetimepicker({	timepicker:false, format:'Y-m-d H:i', lang:'es', inline:true, value:""});
	$( ".horas" ).datetimepicker({datepicker:false, format:'H:i',	value:'00:00'});
	});

$( "#hora1_trigo" ).change(function() {$( "#hora2_trigo" ).datetimepicker({ datepicker:false, format:'H:i', value:'', allowTimes:[SumarHoras($("#hora1_trigo").val(),'01:00'),SumarHoras($("#hora1_trigo").val(),'02:00'),
SumarHoras($("#hora1_trigo").val(),'03:00'), SumarHoras($("#hora1_trigo").val(),'04:00'),]});});

$( "#hora1_quimi" ).change(function() {$( "#hora2_quimi" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_quimi").val(),'01:00'),SumarHoras($("#hora1_quimi").val(),'02:00'),
	  SumarHoras($("#hora1_quimi").val(),'03:00'), SumarHoras($("#hora1_quimi").val(),'04:00'),]});
	  
	  alert($("#hora1_trigo").val())
	  });

$( "#hora1_fisic" ).change(function() {$( "#hora2_fisic" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_fisic").val(),'01:00'),SumarHoras($("#hora1_fisic").val(),'02:00'),
	  SumarHoras($("#hora1_fisic").val(),'03:00'), SumarHoras($("#hora1_fisic").val(),'04:00'),]});});

$( "#hora1_matem" ).change(function() { $( "#hora2_matem" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_matem").val(),'01:00'),SumarHoras($("#hora1_matem").val(),'02:00'),
	  SumarHoras($("#hora1_matem").val(),'03:00'),SumarHoras($("#hora1_matem").val(),'04:00'),]});});

$( "#hora1_geome" ).change(function() { $( "#hora2_geome" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_geome").val(),'01:00'),SumarHoras($("#hora1_geome").val(),'02:00'),
	  SumarHoras($("#hora1_geome").val(),'03:00'),SumarHoras($("#hora1_geome").val(),'04:00'),]});});
	  
$( "#hora1_calcu" ).change(function() { $( "#hora2_calcu" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_calcu").val(),'01:00'),SumarHoras($("#hora1_calcu").val(),'02:00'),
	  SumarHoras($("#hora1_calcu").val(),'03:00'),SumarHoras($("#hora1_calcu").val(),'04:00'),]});});
	  
$( "#hora1_infor" ).change(function() { $( "#hora2_infor" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_infor").val(),'01:00'),SumarHoras($("#hora1_infor").val(),'02:00'),
	  SumarHoras($("#hora1_infor").val(),'03:00'),SumarHoras($("#hora1_infor").val(),'04:00'),]});});


function SumarHoras(inicio,fin) {
  //inicio = document.getElementById("inicio").value;
  //fin = document.getElementById("fin").value;
  inicioMinutos = parseInt(inicio.substr(3,2)); inicioHoras = parseInt(inicio.substr(0,2));
  finMinutos = parseInt(fin.substr(3,2)); finHoras = parseInt(fin.substr(0,2));
  transcurridoMinutos = finMinutos - inicioMinutos; transcurridoHoras = finHoras + inicioHoras;
  if (transcurridoMinutos < 0) {transcurridoHoras--; transcurridoMinutos = 60 + transcurridoMinutos;}
  horas = transcurridoHoras.toString(); minutos = transcurridoMinutos.toString();
  if (horas.length < 2) {horas = "0"+horas;}
  if (minutos.length < 2) {minutos = minutos+"0";}
  return (horas+":"+minutos);
}
</script>
</body>
</html>