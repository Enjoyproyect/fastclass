<html>
	<head>
		<meta charset="utf-8" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="viewport" content="user-scalable=no, initial-scale=1, maximun-scale=1, minimun-scale=1, whidth=device-width, height=device-height, target-densitydpi=device-dpi" />
		<link rel="stylesheet" type="text/css" href="css/index.css" />
		<link rel="stylesheet" type="text/css" href="css/jquery-mobile-1.4.5.css" />
        <link rel="stylesheet" type="text/css" href="css/classes.min.css" />         
        <link rel="stylesheet" type="text/css" href="css/main.css" />            
		<script type="text/javascript" src="js/index.js"></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jquery-mobile-1.4.5.js"></script>
		<title>CLASSES</title>
	</head>

	<body>
        <!--FORMULARIO POR CLASES-->
        <div data-role="page" data-theme="d" id="formul">
            <div data-role="header" data-theme="d" id="" data-position="fixed">
                    <h1>BACHILLERATO</h1>
            </div>
            
            <div data-role="content" data-theme="d" id="" >
				<form id="formulario_datos_estudiante" >   
                   <fieldset data-role="">
                    <legend>Datos Estudiante: </legend>
                    
                        <label for="nombre_completo">Nombre completo: </label>
                        <input type="text" name="nombre_completo" id="nombre_completo">
                        
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
                        
                        <label for="fecha">Fecha: </label>
                        <input type="date" data-role="fecha">
                        
                        <label for="hora">Hora de clase: </label>
                        <input type="datetime-local" name="hora" id="hora">
                        
                        <h3 id="notification2"></h3>
                        
                   </fieldset>
                   <input type="submit" value="Entrar" id="submit">
                    
                    
                </form>
                               
			</div>

			<div data-role="footer" data-theme="d" id="" data-position="fixed">
				<h5>(c) 2015. Classes</h5>
			</div>
        </div>
        
        <!--FORMULARIO POR CLASES-->
        
	</body>

</html>