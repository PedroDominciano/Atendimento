function verificar(){
	var formulario = document.getElementById("formulario");
	valida_nomes(formulario);
	
	if(!valida_form()){
		document.getElementById("inp-email").focus();
	}
}

function valida_form (){
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(!filter.test(document.getElementById("inp-email").value))
	{
		console.log("Favor verificar o email");
		return false
	}
	return true;
}

function valida_nomes(formulario){	
	var regex = /\D{2,}/;
	var nome = formulario.nome.value;
	var sobreNome = formulario.sobrenome.value;
	var assunto = formulario.ass.value;
	if(!regex.test(nome)){
		alert("Favor verificar o nome");
		document.getElementById("inp-nome").value='';
		document.getElementById("inp-nome").style.backgroundColor = "#FF6666";
	}
	if(!regex.test(sobreNome)){
		alert("Favor verificar o Sobrenome");
		document.getElementById("inp-sobreNome").value='';
		document.getElementById("inp-sobreNome").style.backgroundColor = "#FF6666";
	}
	if(!regex.test(assunto)){
		alert("Favor verificar o Assunto");
		document.getElementById("inp-ass").value='';
		document.getElementById("inp-ass").style.backgroundColor = "#FF6666";
	}
}
