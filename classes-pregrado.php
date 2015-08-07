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
		<!--PAGINA MATERIAS UNIVERSIDAD-->
		<div data-role="page" data-theme="d" id="page2">
			<div data-role="header" data-theme="d" id="" data-position="fixed">
				<h1>PREGRADO</h1>
			</div>
			<div data-role="content" data-theme="d" id="">
			<form id="formulario_materias_pregrado" method="post" data-ajax="false">	
                <fieldset data-role="controlgroup">
					<legend>Escoge la(s) materia(s) que quieres recibir:</legend>
                   		<input type="hidden" name="bachillerato" id="bachillerato" value="pregrado"/>
                        <input type="checkbox" name="quimica" id="quimica" value="quimica"/>
						<label for="quimica">Quimica</label>
                        <input type="checkbox" name="fisica" id="fisica" value="fisica"/>
						<label for="fisica">Física</label>
						<input type="checkbox" name="calculo" id="calculo" value="calculo"/>
						<label for="calculo">Cálculo</label>
                        <ul data-role="listview" data-inset="true">
                        <li><a href="classes-bachillerato.php" data-ajax="false">Classes segun su pensum</a></li>
                        </ul>
				</fieldset>
                <input type="submit" value="Siguente" />
            </form>
			</div>
			<div data-role="footer" data-theme="d" id="" data-position="fixed">
				<h5>(c) 2015. Classes</h5>
			</div>
		</div>
		<!--PAGINA MATERIAS UNIVERSIDAD-->
        
        <div data-role="page"  data-theme="d" id="formulario_horas_pregrado">
                    <div data-role="header" data-theme="d">
                        <h2>PREGRADO</h2>
                    </div>
                        
                    <div data-role="content" data-theme="d"> 
                    
                             <form id="formulario_horas_bachillerato" method="post" data-ajax="false">   
                             
                             <hr>
                                <label for="num_estudientas">Numero de estudiantes:</label>
                                <select id="num_estudientas" name="num_estudientas" data-native-menu="false">
                                    <option value="">Seleccione:</option>
                                    <?php for($i = 1; $i <= 5; $i++){echo "<option value=\"$i\">$i</option>";}?>
                                </select>
                             <hr>	
                                
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
                                
                                <div class="calculo">
                                 <legend>FORMULARIO CALCULO:</legend>
                                 
                                <label for="hora1_calcu">Hora inicio de clase: </label>
                                <input class="horas" type="text" name="hora1_calcu" id="hora1_calcu">
                                
                                <label for="hora2_calcu">Hora fin de clase: </label>
                                <input class="horas2" type="text" name="hora2_calcu" id="hora2_calcu">
                                
                                <label for="fecha_calcu">Fecha de clase: </label>
                                <input class="fechas" type="text" name="fecha_calcu" id="fecha_calcu">
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
                        <h2>PREGRADO</h2>
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
            
            <div data-role="page" id="exito" data-theme="d">
                    <div data-role="header" data-theme="d">
                        <h2>BACHILLERATO</h2>
                    </div>
                        
                    <div data-role="content" data-theme="d">
                        <h1 align="center">Exito</h1>
                        <h2 align="center">Su solicitud ha sido enviada con exito, en breve recibira respuesta.</h2>
                        
                        <!--<h3 >DATOS</h3>
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


$( "#hora1_quimi" ).change(function() {$( "#hora2_quimi" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_quimi").val(),'01:00'),SumarHoras($("#hora1_quimi").val(),'02:00'),
	  SumarHoras($("#hora1_quimi").val(),'03:00'), SumarHoras($("#hora1_quimi").val(),'04:00'),]});});

$( "#hora1_fisic" ).change(function() {$( "#hora2_fisic" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_fisic").val(),'01:00'),SumarHoras($("#hora1_fisic").val(),'02:00'),
	  SumarHoras($("#hora1_fisic").val(),'03:00'), SumarHoras($("#hora1_fisic").val(),'04:00'),]});});
	  
$( "#hora1_calcu" ).change(function() { $( "#hora2_calcu" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_calcu").val(),'01:00'),SumarHoras($("#hora1_calcu").val(),'02:00'),
	  SumarHoras($("#hora1_calcu").val(),'03:00'),SumarHoras($("#hora1_calcu").val(),'04:00'),]});});

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