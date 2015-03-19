matriz ={
	this.columnas: 0,
	this.filas: 0,
	this.Crear:  function(){
		var Tabla;
		var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td><input type="+"number"+" id="+"T1Celda"+num+" class="+"inputb"+"></td> ";
				num++;
			};
			Tabla += "</tr>"
		};
		Tabla += "</table>";
		//$('#matrizUno').html(Tabla);
		return Tabla;
	}

}

$(document).ready(function(){
	Abtn = $('#aplicarTodo');
	Obtn = $('#OperarTodo');
	matriz1 =  matriz;
	Abtn.click(TomarDatos);
	$("#selecoperation").change(function(){
		if ($(this).val()=="suma") {
			Obtn.click(SumarMatriz);
		};
	})
	$("#selecoperation").change(function(){
		if ($(this).val()=="resta") {
			Obtn.click(RestarMatriz);
		};
	})
	$("#selecoperation").change(function(){
		if ($(this).val()=="multiplicar") {
			Obtn.click(MultiplicarMatriz);
		};
	})
})

function TomarDatos(e){
	e.preventDefault();
	matriz1.columnas = $('#tb1ancho').val();
	matriz1.filas = $('#tb1alto').val();
	$('#matrizUno').html(matriz.Crear());

	matriz2.columnas = $('#tb2ancho').val();
	matriz2.filas = $('#tb2alto').val();
	$('#matrizDos').html(matriz.Crear());

	matriz3.columnas = $('#tb3ancho').val();
	matriz3.filas = $('#tb3alto').val();
	$('#matrizTres').html(matriz.Crear());

}
