$(function(){
	alert("asds");
	$('#item_newsletter').click(function(e){
		e.preventDefault();
		
		var id = $('#dialog');
		
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		
		$("#mask").css({'width':maskWidth,'height':maskHeight});
		
		$("#mask").fadeIn(1000);
		$("#mask").fadeTo("slow",0.8);
		
		var winH = $(window).height();
		var winW = $(window).width();
		
		$(id).css('top',winH/2-$(id).height()/2);
		$(id).css('left',winW/2-$(id).width()/2);
		
		$(id).fadeIn(2000);
	});
	$('.window .close').click(function(e){
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});
	$('#mask').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.window').hide();
	});
	$('input[type=submit]').click(function(e){
		e.preventDefault();
		$verificado = verificarPreenchimento();
		if($verificado == true){
			$email = $('input[type=email]').val();
			$nome = $('input[type=text]').val();
			$idade = $('#idade').val();
			$sexo = $('#sexo').val();
			$cidade = $('#cCid').val();
			$assinante = $('#assinante').val();
			
			alert("Email:" + $email + " Nome:" + $nome + " Idade" + $idade + " Sexo:" + $sexo + " Cidade" + $cidade + " Assinante:" + $assinante);
		}else{
			alert("Preencha tudo!")
		}
	});
	function verificarPreenchimento(){
        var preenchido = true;
        if(($('input[type=text]').val() == "") || ($("input[type=email]").val() == "")){
			preenchido = false;
        }else{
			preenchido = true;
		}
		return preenchido;
	}
    
    });