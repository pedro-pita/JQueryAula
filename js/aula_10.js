$(document).ready(function(){
	/*$("#seletudo").click(function(){
		$(":checkbox[name=casa]").attr("checked","checked");
	});*/
	$("#alterna").click(function(){
		//Minha solução
		/*if ( $(this).is(':checked') ){
			$(":checkbox[name=casa]").attr("checked","checked");
		}else{
			$(":checkbox[name=casa]").removeAttr("checked");
		}*/
		//Solução prfoessor
		/*if($("#alterna").attr("checked")=="checked"){
			$(":checkbox[name=casa]").removeAttr("checked");
		}else{
			$(":checkbox[name=casa]").attr("checked","checked");
		}*/

	});
});