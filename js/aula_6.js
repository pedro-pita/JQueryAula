$(document).ready(function(){
	$("#disJQ").click(function(){
		var h = $("img").css("heigth");//devolve a altura definida
		//alert(h);
		var w = $("img").css("weigth");//devolver a largura definida
		//alert(w);
		//alert("Altura: "+h+" largura: "+w);
		var hImg = $("img").height();
		//alert(hImg);
		//devolver a altura da imagem + o espa?amento aplicado
		var h2Img = $("img").innerHeight();
		//alert(h2Img);
		//devolver a altura da imagem + o espa?amento aplicado + a borda do elemento
		var h3Img = $("img").outerHeight();
		//alert(h3Img);
		//devolver a altura da imagem + o espa?amento aplicado + a borda do elemento + margem
		var h4Img = $("img").outerHeight(true);
		//alert(h4Img);
		
		//atribuir prop.
		//$("img").css("width","200px
		
		//conjunto de propriedades
		$("img").css({
			width:"200px",
			height:"50px",
			border:"4px dotted #ff0000"
		});
		var testa = $("img").hasClass();
		//alert(testa);
		var testa1 = $("img").hasClass("img");
		//alert(testa1);
		
		$("img").removeClass("img");
		$("img").removeAttr("style");
		$("img").addClass("imgClass");
		
		//Posicao dos elementos
		/*
			A diferenca entre o offset e position: o offset ? relativo ao documento, a position ? relativo ao ancestral sobre o qual o alemento posicionado.
		*/
		var pt = $("img").position().top;
		var pl = $("img").position().left;
		//alert(pt);
		//alert(pl);
		
		var poft = $("img").offset().top;
		var pofl = $("img").offset().left;
		//alert(poft);
		//alert(pofl);
		
		$("#cab1").text("Clicado");
	}).dblclick(function(){
		$("#cab1").text("Clicado 2X");
	}).mouseover(function(){
		//$("#cab1").text("");
		$("#cab1").text("sai de cima");
	}).mouseout(function(){
		$("#cab1").text("obrigado");
	}).mousemove(function(posicao){
		$("#cab1").text("PosX: "+posicao.clientX+"PosY:"+posicao.clientY);
	}).css("border","2px solid #ff00ff");
});
