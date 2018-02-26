$(document).ready(function(){
	//$(":input").css("background","#0000ff");
	//$(":text").css("background","#0000ff");
	$(":button").click(function(){
		//$(":text").css("background","#ff00ff");
		//$(":password").css("background","#0000ff");
		//$(":radio").prev().css("background","#0000ff");	
		//$(":checkbox").parent().css("background","#0000ff");
		//$(":file").css("background","#0000ff");
		//$("textarea").css("background","#0000ff");
		//$(":submit").css("background","#0000ff");
		//$(":reset").css("background","#0000ff");
		//$(":enable").css("background","#0000ff");
		//$(":disabled").css("background","#0000ff");
		$(":selected").next().css("background","#0000ff");
	}).css("border","2px solid #ff00ff");
});