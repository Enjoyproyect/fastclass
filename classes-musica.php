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
		<!--PAGINA MATERIAS MÚSICA-->
		<div data-role="page" data-theme="d" id="page2">
			<div data-role="header" data-theme="d" id="" data-position="fixed">
				<h1>MUSICA</h1>
			</div>
			<div data-role="content" data-theme="d" id="">
            <form id="formulario_materias_musica" method="post" data-ajax="false">
				<fieldset data-role="controlgroup">
					<legend>Escoge la(s) materia(s) que quieres recibir:</legend>
                        <input type="hidden" name="bachillerato" id="bachillerato" value="musica"/>
                        <input type="checkbox" name="canto" id="canto" value="canto"/>
						<label for="canto">Canto</label>
                        <input type="checkbox" name="guitarra" id="guitarra" value="guitarra"/>
						<label for="guitarra">Guitarra</label>
						<input type="checkbox" name="piano" id="piano" value="piano"/>
						<label for="piano">Piano / Organeta</label>
						<input type="checkbox" name="violin" id="violin" value="violin"/>
						<label for="violin">Violin</label>
				</fieldset>
                <input type="submit" value="Siguente" />
            </form>
			</div>
			<div data-role="footer" data-theme="d" id="" data-position="fixed">
				<h5>(c) 2015. Classes</h5>
			</div>
		</div>
		<!--PAGINA MATERIAS MÚSICA-->
        
        <div data-role="page" data-theme="d" id="formulario_musica">
                    <div data-role="header" data-theme="d">
                        <h2>MUSICA</h2>
                    </div>
                        
                    <div data-role="content" data-theme="d">
                    
                             <form id="formulario_horas_musica" method="post" data-ajax="false">   
                             
                             <hr>
                                <label for="num_estudientas">Numero de estudiantes:</label>
                                <select id="num_estudientas" name="num_estudientas" data-native-menu="false">
                                    <option value="">Seleccione:</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                             <hr>	
                                
                                <div class="canto">
                                <legend>FORMULARIO CANTO:</legend>
                                
                                <label for="hora1_canto">Hora inicio de clase: </label>
                                <input class="horas" type="text" name="hora1_canto" id="hora1_canto">   
                                
                                <label for="hora2_canto">Hora fin de clase: </label>
                                <input class="horas2" type="text" name="hora2_canto" id="hora2_canto">   
                                
                                <label for="fecha_canto">Fecha de clase: </label>
                                <input class="fechas" type="text" name="fecha_canto" id="fecha_canto">
                                </div>
                                <br>
                                
                                <div class="guitarra">
                                 <legend>FORMULARIO GUITARRA:</legend>
                                 
                                 <label for="hora1_guita">Hora inicio de clase: </label>
                                <input class="horas" type="text" name="hora1_guita" id="hora1_guita">
            
                                <label for="hora2_guita">Hora fin de clase: </label>
                                <input class="horas2" type="text" name="hora2_guita" id="hora2_guita">
                                
                                <label for="fecha_guita">Fecha de clase: </label>
                                <input class="fechas" type="text" name="fecha_guita" id="fecha_guita">
                                </div>
                                <br>
                                
                                <div class="piano">
                                 <legend>FORMULARIO PIANO:</legend>
                                 
                                <label for="hora1_piano">Hora inicio de clase: </label>
                                <input class="horas" type="text" name="hora1_piano" id="hora1_piano">
                                
                                <label for="hora2_piano">Hora fin de clase: </label>
                                <input class="horas2" type="text" name="hora2_piano" id="hora2_piano">
                                
                                <label for="fecha_piano">Fecha de clase: </label>
                                <input class="fechas" type="text" name="fecha_piano" id="fecha_piano">
                                </div>
                                
                                <div class="violin">
                                 <legend>FORMULARIO VIOLIN:</legend>
                                 
                                <label for="hora1_violi">Hora inicio de clase: </label>
                                <input class="horas" type="text" name="hora1_violi" id="hora1_violi">
                                
                                <label for="hora2_violi">Hora fin de clase: </label>
                                <input class="horas2" type="text" name="hora2_violi" id="hora2_violi">
                                
                                <label for="fecha_violi">Fecha de clase: </label>
                                <input class="fechas" type="text" name="fecha_violi" id="fecha_violi">
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
                        <h2>MUSICA</h2>
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
                        <h2>MUSICA</h2>
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


$( "#hora1_canto" ).change(function() {$( "#hora2_canto" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_canto").val(),'01:00'),SumarHoras($("#hora1_canto").val(),'02:00'),
	  SumarHoras($("#hora1_canto").val(),'03:00'), SumarHoras($("#hora1_canto").val(),'04:00'),]});});

$( "#hora1_guita" ).change(function() {$( "#hora2_guita" ).datetimepicker({ datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_guita").val(),'01:00'),SumarHoras($("#hora1_guita").val(),'02:00'),
	  SumarHoras($("#hora1_guita").val(),'03:00'), SumarHoras($("#hora1_guita").val(),'04:00'),]});});
	  
$( "#hora1_piano" ).change(function() { $( "#hora2_piano" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_piano").val(),'01:00'),SumarHoras($("#hora1_piano").val(),'02:00'),
	  SumarHoras($("#hora1_piano").val(),'03:00'),SumarHoras($("#hora1_piano").val(),'04:00'),]});});
	  
$( "#hora1_violi" ).change(function() { $( "#hora2_violi" ).datetimepicker({datepicker:false,format:'H:i',value:'',allowTimes:[SumarHoras($("#hora1_violi").val(),'01:00'),SumarHoras($("#hora1_violi").val(),'02:00'),
	  SumarHoras($("#hora1_violi").val(),'03:00'),SumarHoras($("#hora1_violi").val(),'04:00'),]});});

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