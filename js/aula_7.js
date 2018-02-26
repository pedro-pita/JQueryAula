/*$(document).ready(function(){
	$("#disJQ").click(function(){
		$(":text").keyup(function(){
			$("#cab1").text($(this).val());
		});
	}).css("border","2px solid #ff00ff");
});*/

/*$(document).ready(function(){
	$(":text").bind("keyup",atribui)
				.bind("focus",mudarCor)
				.bind("blur",mudarCor2);
	function atribui(){
		$("#cab1").text($(this).val());
	}
	function mudarCor(){
		$("#cab1").css("background","#00ff00");
	}
	function mudarCor2(){
		$("#cab1").css("background","#ff00ff");
	}
});*/

$(document).ready(function(){
	$("#disJQ").click(function(){
		$(":text").bind("click",function(){
			$("#cab1").text($(this).val());
		});
	}).css("border","2px solid #ff00ff");
});
