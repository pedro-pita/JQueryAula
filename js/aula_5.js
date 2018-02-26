$(document).ready(function(){
	$("#disJQ").click(function(){
		//var idP = $("p").attr("id");
		//alert(idP);
		//$("p").attr("id","pSergio");		//$("p").attr("id","pSergio").attr("class","classparagrafo1");
		//$("img").attr("src","Aula 5 - Material/2.jpg").attr("title","foto2");
		/*$("img").attr({
				src:"Aula 5 - Material/2.jpg",
				title:"foto2"
			});*/
		//mudar();
		//$("img").removeAttr("title").removeAttr("alt");
		//alert($("img").hasClass("borda"));
		//$("img").addClass("borda");//add
		//alert($("img").hasClass("borda"));
		//$("img").toggleClass("borda");
		//alert($("p").html());		
		//$("p").html("</br>P alterada via Jquery, com o metodo html");
		//$("h2").text("Texto");
		//alert($(":input").val());
		//$("h2").html($(":input").val());
		//$("h2").replaceWith("<div>Div criado troca com h2.</div>");
		/*var p = document.createElement("p");
			//p.appendChild(document.createTextNode("Paragrafo iserido!!"));
			//document.body.appendChild(p);
		$("h2").replaceWith(p);*/
		/*var imgNew = ("<img />",{src:"Aula 5 - Material/2.jpg",style:"width:100px"});
		$("body").append(imgNew);*/
		/*var newLine = $("<br/>");
		var newImg = $("<img/>",{src:"Aula 5 - Material/4.jpg",style:"width:100px", title:"Titulo da imagem", click:function(){
		alert("fui criado pelo jquery, e tambem já fui criado....");
			}
		});
		$("body").append(newLine).append(newImg);
		var listaNaoOrdenada = $("<ul/>").append($("<li/>")).append("Dados inseridos pelo Jquery.");
		$("body").append(newLine).append(newImg).append(listaNaoOrdenada);*/
		var listaNaoOrdenada = $("<ul/>");
		var dado1LNO = $("<li/>").append("Dados inseridos pelo Jquery 1.");
		var dado2LNO = $("<li/>").append("Dados inseridos pelo Jquery 2.");
		var span = $("<span>Element Span</span>");
		listaNaoOrdenada.append(dado1LNO).append(dado2LNO).append(span);
		$("body").append(listaNaoOrdenada).append(span);
		listaNaoOrdenada.append("<li>Dentro UL, mas no fim</li>");
		listaNaoOrdenada.prepend("<li>Dentro UL, mas no inicio</li>");
		listaNaoOrdenada.before("<li>Antes do UL</li>");
		listaNaoOrdenada.after("<li>Depois do UL</li>");
		var p= $("<p/>");
		span.wrap(p);//envolver o span num elemento p
		
		$("ul").append($("li").clone());
		//------------------REmover*/*/*/*/*/*/*/*/*/*/*/*/*/*/-/-*/
		//$("h2").remove();-elimina todas as tags h2
		//Aplicar filtro ao metodo de remocao
		//$("h2").remove("#cab1");
		
		//limpar o conteudo dos p
		//$("p").empty();
		
		//tiraro p que envolve a imagem
		$("img").unwrap();
	}).css("border","2px solid #ff00ff");
});
var cont = 2;
function mudar(){
	var str = "Aula 5 - Material/";
	str += cont+".jpg";
	$("img")
		.attr("src",str)
		.attr("title","foto"+cont);
	cont++;
	if(cont==6){
		cont=1;
	}
}