function verificar(){
	var formulario = document.getElementById("formulario");
	var nome = formulario.nome.value;
	var sobreNome = formulario.sobrenome.value;
	var email = formulario.email.value;
	var assunto = formulario.ass.value;

	if(nome.length > 10 || sobreNome.length > 10 || assunto.length > 16){
		console.log("Os campos podem ter,no maximo, 8 caracteres")
		document.getElementById("nome");
	}
	if(!valida_form()){
		document.getElementById("email").focus();
	}
}

function valida_form (){
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(!filter.test(document.getElementById("email").value))
	{
		console.log("Favor verificar o email");
		return false
	}
	return true;
}
