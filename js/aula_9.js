$(document).ready(function(){
	$("#curso tr:even").css("background","#00ff00");
	$("#curso tr:odd").css("background","#0000ff");
	//Aplica num determinado elemento, inicia em 1
	$("#curso tr:nth-child(2)").css("background","#ff0000");
	//Aplicar segundo uma expressao, valorn-sera os multiplos do valor
	$("#curso tr:nth-child(3n)").css("background","#00ff00");
	
	//****************************************
	//destaque linha
	//Metodo hover
	/*$("#curso tbody tr").hover(sobre,fora);
	function sobre(){
		$(this).css("color","#dc00fd");
	}
	function fora(){
		$(this).css("color","#ffffff");
	}
	//ou atraves de class
	$("curso tbody tr").hover(
		function(){
			$(this).addClass("sobre");
		},function(){
			$(this).removeClass("sobre");
		}
	);
	//Destaqui de coluna
	//each - Metodo que percorre e itera um determinado elemento.
	$("#curso thead tr th").each(function(index){
		$(this).click(function(){ //this indica o valor de cima, neste caso o #curso thead tr th (<th>Modulo</th>)
			console.log("Indice: " + index);
			$("td").removeClass("sobre1");
			$(this).parents("thead").siblings("tbody").children("tr").each(function(){ //this continua com o mesmo valor
				$(this).children("td:eq(" + index + ")").addClass("sobre1"); //this representa $(this).parents("thead").siblings("tbody").children("tr")
			});
		});
	});*/
	
	//OU
	/*$("#curso thead tr th").each(function(index){
		$(this).hover(function(){
			percorre($(this),index)//passa a coluna que estou naquele momento e o index 
		});
	});
	function percorre(tthis,i){ //usamos tthis porque this é uma palavra reservada
		console.log("Indice: " + i);
		$("td").removeClass("sobre1");
		tthis.parents("thead").siblings("tbody").children("tr").each(function(){ //this continua com o mesmo valor
			$(this).children("td:eq(" + i + ")").addClass("sobre1"); //this representa
			addClass("sobre1");
		});
	}*/
	//************************
	//Destava celula e mostra conteudo
	$("#curso thead tr th").each(function(index){
		var coluna = $(this).text();
		console.log(coluna);
		var pos = index + 1;
		$("tr td:nth-child(" + pos + ")").hover(function(){
			var valorCelula = $(this).text();
			$(this).addClass("sobre").prepend("<span class='destaca'>" + valorCelula + "</span>");
		},
		function(){
			$(this).removeClass("sobre");
			$(".destaca").remove();
		});
	});
});