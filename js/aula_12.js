/* Requisicao text
$(function(){
	$("#ajax").click(function(){
		$.ajax({
			type:"GET",
			url:"./Aula 12 -Material/file.txt",
			dataType:"Text",
			success: function(res){
				alert(res);
			}
		});
		return false;
	});
});*/

$(function(){
	$("#ajax").click(function(){
		$.ajax({
			type: "GET",
			url: "./Aula 12 -Material/cod.json",
			dataType: "json",
			success: function(json){
				/*for(var i=0;i<xml.getElementsByTagName("formando").length;i++){
					document.write(xml.getElementsByTagName("formando")[1].firstChild.nodeValue+"<br/>");
				}*/
				/*$(xml).find('formacao').each(function(){
					$(this).find('formando').each(function(){
						var name = $(this).text();
						document.write(name);
					});
					document.write("<br />");
				});*/
				/*console.log(json);
				var cd = json["cd"];
				var output = "<table><thead><tr><th>Title</th><th>Artist</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr></head><tbody>";
				for(var i in cd){
					output += "<tr><td>"+cd[i].title+"</td><td>"+cd[i].artist+"</td><td>"+cd[i].country+"</td><td>"+cd[i].company+"</td><td>"+cd[i].price+"</td><td>"+cd[i].year+"</td></tr>"
				}	
				output += "</tbody></table>";
				$("body").html(output);*/
				$.each(json["cd"], function(index,element){
					$('body').append($('<div>',{text: element.title + " : " + element.year}));
					console.log(index);
				});		
			}
		});
		return false;
	});
});