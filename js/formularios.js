
var formulario1=
'<label>FORMULARIO</label>\n'+
'<label for="cant_horas">Cantidad de horas:</label>\n'+
'<select id="cant_horas" name="cant_horas" data-native-menu="false">\n'+
'	<option>Seleccione:</option>\n'+
'	<?php \n'+
'	for($i = 1; $i <= 20; $i++){ \n'+
'	echo "<option value=\"$i\">$i</option>";\n'+
'	}\n'+
'	?>\n'+
'</select> \n'+
'				\n'+
'<label for="num_estudientas">Numero de estudiantes:</label>\n'+
'<select id="num_estudientas" name="num_estudientas" data-native-menu="false">\n'+
'	<option>Seleccione:</option>\n'+
'	<?php\n'+
'	for($i = 1; $i <= 5; $i++){\n'+
'	echo "<option value=\"$i\">$i</option>";\n'+
'	}\n'+
'?>\n'+
'</select>'