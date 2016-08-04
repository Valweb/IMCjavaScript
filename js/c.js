
/* recupera do id do documento */
/* recupera o name e o valor que está preenchido no campo 
IMC = peso / (altura)²
*/

function calcular(){
	
	var formulario = document.getElementById("formulario");

	/*o opoerando + serve para converter a strings abaixo  em inteiro*/

	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var cm = +formulario.cm.value;
	var msg = formulario.msg.value;


	var altura =  (metros * 100 + cm) / 100;
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);


	if(imc < 20){

		formulario.msg.value = "Abaixo do Peso";

	}else if (imc >= 20 && imc <= 25){

		formulario.msg.value = "Peso ideal";

	}else if (imc >= 25 &&  imc <=30) {

		formulario.msg.value ="Sobrepeso";

	}else if (imc >= 30 && imc <= 35){

		formulario.msg.value = "Obesidade Moderada";

	}else if (imc >= 35 && imc <= 40){

		formulario.msg.value = "Obesidade Severa";

	}else if (imc >= 40 && imc <= 50){

		formulario.msg.value ="Obesidade Móbida";

	}else{

		formulario.msg.value ="Super Obesidade!!!";
	}
	
}