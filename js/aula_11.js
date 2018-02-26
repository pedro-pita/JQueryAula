/*$(document).ready(function(){
	$("#data").datepicker();
	
});*/
	//Carregamento total da pagina usando seletor por omissao
	//
$(function(){ //mesma coisa que $(document).ready(function()}); mas só que de forma mais limpa
	/*$("#data").datepicker();	//Adicionar calendario
	$("#accordion").accordion( //mudar design
	{collapsible:true}
	)*/
	
	//Auto preenchimento
	var fonte = ["Pedro","Henrique","Mendes","Pita","Petra","Henriqueta","Mendis","Pito"];
	$("#auto").autocomplete({
		source: fonte
	});
	/*$("#abre").click(function(){
		abrirJanelaModal();
	});*/
	$("#abre").bind("click", function(){
		var largura = prompt("Insira a largura","Insira a largura");
		var altura = prompt("Insira a altura","Insira a altura");
		abrirJanelaModal(largura, altura);
	});
});
function abrirJanelaModal(altura, largura){
	$("#modal").dialog({
		width: altura,
		height: largura,
		modal: true,
		buttons:{
			"Confirme!":function(){
				alert("Confirmado!");
				$(this).dialog("close");
			},
			Cancel:function(){
				alert("Cancelado, a janela sera fechada!");
				$(this).dialog("close");
			}
		}		
	});
}