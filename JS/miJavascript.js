
matriz ={
	columnas: 3,
	filas: 2,
	Crear:  function(){
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

matrizDos ={
	columnas: 3,
	filas: 2,
	Crear:  function(){
		var Tabla;
		var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td><input type="+"number"+" id="+"T2Celda"+num+" class="+"inputb"+"></td> ";
				num++;
			};
			Tabla += "</tr>"
		};
		Tabla += "</table>";
		//$('#matrizUno').html(Tabla);
		return Tabla;
	}

}

matrizTres ={
	columnas: 3,
	filas: 2,
	Crear:  function(){
		var Tabla;
		var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td><input type="+"number"+" id="+"T3Celda"+num+" class="+"inputb"+"></td> ";
				num++;
			};
			Tabla += "</tr>"
		};
		Tabla += "</table>";
		//$('#matrizUno').html(Tabla);
		return Tabla;
	}

}

matrizCuatro ={
	columnas: 0,
	filas: 0,
	Crear:  function(){
		var Tabla;
		var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td><input type="+"number"+" id="+"T4Celda"+num+" class="+"inputb"+"></td> ";
				num++;
			};
			Tabla += "</tr>"
		};
		Tabla += "</table>";
		//$('#matrizUno').html(Tabla);
		return Tabla;
	}

}

matrizResultado ={
	columnas: 0,
	filas: 0,
	Crear: function(Celda){
		var Tabla;
		var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td>"+Celda[num]+"</td> ";
				num++;
			};
			Tabla += "</tr>"
		};
		Tabla += "</table>";
		//$('#matrizUno').html(Tabla);
		return Tabla;
	}
}

matrizResultado2 ={
	columnas: 0,
	filas: 0,
	Crear: function(I){
		var Tabla;
		//var num = 0;
		Tabla = "<table class="+"table table-bordered"+">";
		for (var i = 0; i < this.filas; i++) {
			Tabla += "<tr>"
			for (var j = 0; j < this.columnas; j++) {
				Tabla += "<td>"+I[i][j]+"</td> ";
				//num++;
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
	Abtn2 = $('#aplicarTodo2');
	Obtn2 = $('#OperarTodo2');
	matriz1 =  matriz;
	matriz2 = matrizDos;
	matriz3 = matrizTres;
	matriz4 = matrizCuatro;
	Abtn.click(TomarDatos);
	Abtn2.click(TomarDatos);
	Obtn2.click(function(e){
		e.preventDefault();
		MatrizIdentidad(e);
		GuardarM(e);
		var I = matrix_invert(M);
		$('#MatrizResult2').html(matrizResultado2.Crear(I));
	});
	
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
	matrizResultado.filas = $('#tb1alto').val();
	$('#matrizUno').html(matriz1.Crear());

	matriz2.columnas = $('#tb2ancho').val();
	matriz2.filas = $('#tb2alto').val();
	matrizResultado.columnas = $('#tb2ancho').val();
	$('#matrizDos').html(matriz2.Crear());

	matriz3.columnas = $('#tb3ancho').val();
	matriz3.filas = $('#tb3alto').val();
	$('#matrizTres').html(matriz3.Crear());

	matrizResultado2.columnas = $('#tb4ancho').val();
	matrizResultado2.filas = $('#tb4alto').val();
	matriz4.columnas = $('#tb4ancho').val();
	matriz4.filas = $('#tb4alto').val();
	$('#matrizCuatro').html(matriz4.Crear());



}

var CeldaSuma = [];
function SumarMatriz(e){
	e.preventDefault();
	var celdaT1 = "#T1Celda";
	var celdaT2 = "#T2Celda";
	var celdaT3 = "#T3Celda";
	var CeldaTotal = matriz.columnas*matriz.filas;
	if (matriz.columnas == matriz2.columnas && matriz.filas == matriz2.filas && matriz2.columnas != matriz3.columnas && matriz2.filas != matriz3.filas && matriz.columnas != matriz3.columnas && matriz.filas != matriz3.filas) {
		//sumas de la matriz de 1 y 2
		//window.alert("digamos que hice la suma de 1 y 2 "+ CeldaTotal);
		for (var i =0 ; i <= CeldaTotal-1; i++) {
			console.log($(""+celdaT1+i).val());
			if(isFloat($(""+celdaT1+i).val()) == true && isFloat($(""+celdaT2+i).val()) == true){
				//isNaN($(""+celdaT1+i).val()) == false && isNaN($(""+celdaT2+i).val()) == false
				//CeldaSuma[i] = Fracciones(''+(parseFloat($(""+celdaT1+i).val()) + parseFloat(dividir($(""+celdaT2+i).val()))));
				CeldaSuma[i] = Fracciones(''+(parseFloat(dividir("1/2")) + parseFloat(dividir("1/5"))));
				console.log("estoy Aqui");
			}else{
				CeldaSuma[i] = parseInt($(""+celdaT1+i).val(), 10) + parseInt($(""+celdaT2+i).val(), 10);
			}
			//window.alert(CeldaSuma[i]);
		};

	}else if(matriz.columnas == matriz2.columnas && matriz2.columnas == matriz3.columnas && matriz2.filas == matriz3.filas && matriz.filas == matriz2.filas){
		for (var i =0 ; i <= CeldaTotal-1; i++) {
			CeldaSuma[i] = parseInt($(""+celdaT1+i).val(), 10) + parseInt($(""+celdaT2+i).val(), 10) + parseInt($(""+celdaT3+i).val(), 10);
			//window.alert(CeldaSuma[i]);
		};

	}else{
		window.alert("Las matrices no poseen las mismas dimensiones por tanto no pueden ser sumadas");
	};

	//matrizResultado.columnas = matriz1.columnas;
	matrizResultado.columnas = matriz1.columnas;
	$('#MatrizResult').html(matrizResultado.Crear(CeldaSuma));

}

function isFloat(n) {
    return n % 1 != 0;
}

function RestarMatriz(e){
	e.preventDefault();
	var celdaT1 = "#T1Celda";
	var celdaT2 = "#T2Celda";
	var celdaT3 = "#T3Celda";
	var CeldaTotal = matriz.columnas*matriz.filas;
	if (matriz.columnas == matriz2.columnas && matriz.filas == matriz2.filas && matriz2.columnas != matriz3.columnas && matriz2.filas != matriz3.filas && matriz.columnas != matriz3.columnas && matriz.filas != matriz3.filas) {
		//sumas de la matriz de 1 y 2
		//window.alert("digamos que hice la suma de 1 y 2 "+ CeldaTotal);
		for (var i =0 ; i <= CeldaTotal-1; i++) {
			CeldaSuma[i] = parseInt($(""+celdaT1+i).val(), 10) - parseInt($(""+celdaT2+i).val(), 10);
			//window.alert(CeldaSuma[i]);
		};

	}else if(matriz.columnas == matriz2.columnas && matriz2.columnas == matriz3.columnas && matriz2.filas == matriz3.filas && matriz.filas == matriz2.filas){
		for (var i =0 ; i <= CeldaTotal-1; i++) {
			CeldaSuma[i] = parseInt($(""+celdaT1+i).val(), 10) - parseInt($(""+celdaT2+i).val(), 10) - parseInt($(""+celdaT3+i).val(), 10);
		};

	}else{
		window.alert("Las matrices no poseen las mismas dimensiones por tanto no pueden ser sumadas");
	};

	//matrizResultado.columnas = matriz1.columnas;
	matrizResultado.columnas = matriz1.columnas;
	$('#MatrizResult').html(matrizResultado.Crear(CeldaSuma));

}

function Inicializar () {
    for (i=0; i < 100; i++){
    matrizRes[i]=[];
    acumulador2[i]=[];
        for (j=0; j <100; j++){
            matrizRes[i][j] = 0;
        }
    }
}

var matrizRes =[];
var CeldaMulti1 = [];
var CeldaMulti2 = [];
var acumulador = [];
var acumulador2 =[];
function MultiplicarMatriz(e){
e.preventDefault();
var celdaT1 = "#T1Celda";
var celdaT2 = "#T2Celda";
//var celdaT3 = "#T3Celda";
var conta = 0;
var conta2 = 0;
if (matriz.columnas == matriz2.filas) {
	for (var i = 0; i <= matriz.filas-1; i++) {
		CeldaMulti1[i] = [];
		for (var j = 0; j <= matriz.columnas-1; j++) {
			CeldaMulti1[i][j] = parseInt($(""+celdaT1+conta).val(), 10);
				//console.log("valores: "+CeldaMulti1[i][j]+"Este es el contador: "+conta+"las filas son: "+matriz.filas+" y "+matriz.columnas);
			conta++;
		};
	};
	for (var i = 0; i <= matriz2.filas-1; i++) {
		CeldaMulti2[i] = [];
		for (var j = 0; j <= matriz2.columnas-1; j++) {
			CeldaMulti2[i][j] = parseInt($(""+celdaT2+conta2).val(), 10);
				//console.log("valores: "+CeldaMulti2[i][j]+"Este es el contador: "+conta2+"las filas son: "+matriz2.filas+" y "+matriz2.columnas);
			conta2++;
		};
	};
	Inicializar();
	var z=0;
    for (var i=0; i < matriz.filas; i++){
        for (var j=0; j < matriz2.columnas; j++){
            for (k=0; k < matriz.columnas; k++){
                acumulador2[i][j] = matrizRes[i][j] += CeldaMulti1[i][k] * CeldaMulti2[k][j];

            }
            	acumulador[z]= acumulador2[i][j] 
                z++;
                console.log(acumulador2[i][j]);
        }
    }
    //matrizResultado.columnas = matriz1.columnas;
    $('#MatrizResult').html(matrizResultado.Crear(acumulador));

}else{
	window.alert("las Matrices no se pueden multiplicar");
}
}


var Miden = [];
function MatrizIdentidad(e){
e.preventDefault();
if (matriz4.columnas == matriz4.filas) {
	for (var i = 0; i <= matriz4.filas; i++) {
		Miden[i]=[];
		for (var j = 0; j <= matriz4.columnas; j++) {
			if (i==j) {
				Miden[i][j]=1;
			}else{
				Miden[i][j]=0;
			};
		//console.log(Miden[i][j]);	
		};
	};
}else{
	window.alert("Para Aplicar Gauss Jordan es necesario que la matriz sea cuadrada");
}
}
var M =[];
function GuardarM(e){
	e.preventDefault();
	var celdaT4 = "#T4Celda";
	var contaGM = 0;
	for (var i = 0; i < matriz4.filas; i++) {
		M[i]=[];
		for (var j = 0; j < matriz4.columnas; j++) {
			M[i][j] = parseFloat($(""+celdaT4+contaGM).val(), 10);
			contaGM++;
		};
	};
}


function matrix_invert(M){
    var i=0, ii=0, j=0, dim=matriz4.filas, e=0, t=0;
    var I = [], C = [];
    for(i=0; i<dim; i+=1){
        I[I.length]=[];
        C[C.length]=[];
        for(j=0; j<dim; j+=1){
            if(i==j){ I[i][j] = 1; }
            else{ I[i][j] = 0; }
            C[i][j] = M[i][j];
        }
    }
    for(i=0; i<dim; i+=1){
        e = C[i][i];
        if(e==0){
            for(ii=i+1; ii<dim; ii+=1){
                if(C[ii][i] != 0){
                    for(j=0; j<dim; j++){
                        e = C[i][j];       
                        C[i][j] = C[ii][j];
                        C[ii][j] = e;      
                        e = I[i][j];       
                        I[i][j] = I[ii][j];
                        I[ii][j] = e;      
                    }
                    break;
                }
            }
            e = C[i][i];
            
            if(e==0){return}
        }      
        for(j=0; j<dim; j++){
            C[i][j] = C[i][j]/e; 
            I[i][j] = I[i][j]/e; 
        }
        
        
        for(ii=0; ii<dim; ii++){
            if(ii==i){continue;}
            e = C[ii][i];
            for(j=0; j<dim; j++){
                C[ii][j] -= e*C[i][j]; 
                I[ii][j] -= e*I[i][j]; 
            }
        }
    }
return I;
}

function dividir(Frac){
	var vec = Frac.split("/");
	var numerador = parseFloat(vec[0], 10);
    var denominador = parseFloat(vec[1], 10);
    var respu = parseFloat(numerador/denominador);
    return respu.toFixed(2);
}

function Fracciones (decimal){

    var factor; 
   // Finds the highest common factor of 2 numbers
    function highestCommonFactor() {
        for (factor = numerator; factor > 0; factor--) {
            if ((numerator % factor == 0) && (denominator % factor == 0)) {
                return factor;
            }
        }
    }

    // Enter a decimal to convert to a fraction
    //var decimal = "'0.5'";
    
    // Split the decimal
    var decimalArray = decimal.split(".");
    
    var leftDecimalPart = decimalArray[0];
    var rightDecimalPart = decimalArray[1];
    var algo = '"'+rightDecimalPart+'"';
    
    // Save decimal part only for later use
    var decimalOnly = "0." + rightDecimalPart;
    
    // Find the decimal multiplier
    var multiplier = "1";
    
    for (var i = 0; i < algo.length; i++) {
        multiplier += "0";
    }
    
    // Create numerator by multiplying the multiplier and decimal part together
    var numerator = Number(multiplier) * Number(decimalOnly);
    
    var denominator = multiplier;
    
    // Find the highest common factor for the numerator and denominator
    highestCommonFactor();
    
    // Simplify the fraction by dividing the numerator and denominator by the factor
    var numerator = Number(numerator) / Number(factor);
    var denominator = Number(denominator) / Number(factor);

    // Output as a mixed number fraction (depending on input)
    var mixedNumber = leftDecimalPart + " " + numerator + "/" + denominator;
    
    // Output as a proper fraction or improper fraction (depending on input)
    var numerator = numerator + (leftDecimalPart * denominator);
    var fraction = numerator + "/" + denominator;

    // Display solution
    return fraction;
}