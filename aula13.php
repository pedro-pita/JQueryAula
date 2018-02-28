<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>JSQ 13</title>
	<link rel="stylesheet" type="text/css" href="./css/home.css" />	
	<link rel="stylesheet" type="text/css" href="./css/jquery-ui.min.css"/>
	<script type="text/javascript" src="./js/jquery-3.3.js"></script>
	<script type="text/javascript" src="./js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="./js/aula_13.js"></script>
	<style type="text/css">
	</style>
</head>
<body>
	<div id="boxes">
		<div id="dialog" class="window">
			<a href="#" class="close">Fechar[X]</a>
			<form  action="<?php echo 'send.php';?>" method="post" id="newsletter" name="newsletter">
			<input type="text" name="nome" id="nome" class="obrigatorio" placeholder="Insira o nome"/>
			<input type="email" name="email" id="email" class="obrigatorio" value="" placeholder="Insira o email"/>
			<p>
				<select name="idade" id="idade">
					<?php
						for($i=16;$i<99;$i++)
							echo "<option value=".$i.">".$i."</option>";
					?>
				</select>
			</p>
			<fieldset id="sexo">
				<legend>Sexo:</legend>
				<label for="cMasc">Masculino
					<input type="radio" name="tSexo" id="cMasc" checked="checked" value="M"/>
				</label>
				<label for="cFem">Feminino
					<input type="radio" name="tSexo" id="cFem" value="F"/>
				</label>
			</fieldset>
			<p>
				<input type="text" name="tCid" id="cCid" maxlength="40" size="20" placeholder="Insira a cidade" list="cidades"/>
			</p>
			<datalist id="cidades">
				<option value="Abrantes"></option>
				<option value="Agualva-Cacém"></option>
				<option value="Águeda"></option>
				<option value="Albergaria-a-Velha"></option>
				<option value="Albufeira"></option>
				<option value="Alcácer do Sal"></option>
				<option value="Alcobaça"></option>
				<option value="Alfena"></option>
				<option value="Almada"></option>
				<option value="Almeirim"></option>
				<option value="Alverca do Ribatejo"></option>
				<option value="Amadora"></option>
				<option value="Amarante"></option>
				<option value="Amora"></option>
				<option value="Anadia"></option>
				<option value="Angra do Heroísmo"></option>
				<option value="Aveiro"></option>
				<option value="Barcelos"></option>
				<option value="Barreiro"></option>
				<option value="Beja"></option>
				<option value="Borba"></option>
				<option value="Braga"></option>
				<option value="Bragança"></option>
				<option value="Caldas da Rainha"></option>
				<option value="Câmara de Lobos"></option>
				<option value="Caniço"></option>
				<option value="Cantanhede"></option>
				<option value="Cartaxo"></option>
				<option value="Castelo Branco"></option>
				<option value="Chaves"></option>
				<option value="Coimbra"></option>
				<option value="Costa da Caparica"></option>
				<option value="Covilhã"></option>
				<option value="Elvas"></option>
				<option value="Entroncamento"></option>
				<option value="Ermesinde"></option>
				<option value="Esmoriz"></option>
				<option value="Espinho"></option>
				<option value="Esposende"></option>
				<option value="Estarreja"></option>
				<option value="Estremoz"></option>
				<option value="Évora"></option>
				<option value="Fafe"></option>
				<option value="Faro"></option>
				<option value="Fátima"></option>
				<option value="Felgueiras"></option>
				<option value="Figueira da Foz"></option>
				<option value="Fiães"></option>
				<option value="Freamunde"></option>
				<option value="Funchal"></option>
				<option value="Fundão"></option>
				<option value="Gafanha da Nazaré"></option>
				<option value="Gandra"></option>
				<option value="Gondomar"></option>
				<option value="Gouveia"></option>
				<option value="Guarda"></option>
				<option value="Guimarães"></option>
				<option value="Horta"></option>
				<option value="Ílhavo"></option>
				<option value="Lagoa"></option>
				<option value="Lagoa"></option>
				<option value="Lagos"></option>
				<option value="Lamego"></option>
				<option value="Leiria"></option>
				<option value="Lisboa"></option>
				<option value="Lixa"></option>
				<option value="Loulé"></option>
				<option value="Loures"></option>
				<option value="Lourosa"></option>
				<option value="Macedo de Cavaleiros"></option>
				<option value="Machico"></option>
				<option value="Maia"></option>
				<option value="Mangualde"></option>
				<option value="Marco de Canaveses"></option>
				<option value="Marinha Grande"></option>
				<option value="Matosinhos"></option>
				<option value="Mealhada"></option>
				<option value="Mêda"></option>
				<option value="Miranda do Douro / Miranda de l Douro"></option>
				<option value="Mirandela"></option>
				<option value="Montemor-o-Novo"></option>
				<option value="Montijo"></option>
				<option value="Moura"></option>
				<option value="Odivelas"></option>
				<option value="Olhão da Restauração"></option>
				<option value="Oliveira de Azeméis"></option>
				<option value="Oliveira do Bairro"></option>
				<option value="Oliveira do Hospital"></option>
				<option value="Ourém"></option>
				<option value="Ovar"></option>
				<option value="Paços de Ferreira"></option>
				<option value="Paredes"></option>
				<option value="Penafiel"></option>
				<option value="Peniche"></option>
				<option value="Peso da Régua"></option>
				<option value="Pinhel"></option>
				<option value="Pombal"></option>
				<option value="Ponta Delgada"></option>
				<option value="Ponte de Sor"></option>
				<option value="Portalegre"></option>
				<option value="Portimão"></option>
				<option value="Porto"></option>
				<option value="Póvoa de Santa Iria"></option>
				<option value="Póvoa de Varzim"></option>
				<option value="Praia da Vitória"></option>
				<option value="Quarteira"></option>
				<option value="Queluz"></option>
				<option value="Rebordosa"></option>
				<option value="Reguengos de Monsaraz"></option>
				<option value="Ribeira Grande"></option>
				<option value="Rio maior"></option>
				<option value="Rio Tinto"></option>
				<option value="Sabugal"></option>
				<option value="Sacavém"></option>
				<option value="Samora Correia"></option>
				<option value="Santa Comba Dão"></option>
				<option value="Santa Cruz"></option>
				<option value="Santa Maria da Feira"></option>
				<option value="Santana"></option>
				<option value="Santarém"></option>
				<option value="Santiago do Cacém"></option>
				<option value="Santo Tirso"></option>
				<option value="São João da Madeira"></option>
				<option value="São Mamede de Infesta"></option>
				<option value="São Pedro do Sul"></option>
				<option value="São Salvador de Lordelo"></option>
				<option value="Seia"></option>
				<option value="Seixal"></option>
				<option value="Senhora da Hora"></option>
				<option value="Serpa"></option>
				<option value="Setúbal"></option>
				<option value="Silves"></option>
				<option value="Sines"></option>
				<option value="Tarouca"></option>
				<option value="Tavira"></option>
				<option value="Tomar"></option>
				<option value="Tondela"></option>
				<option value="Torres Novas"></option>
				<option value="Torres Vedras"></option>
				<option value="Trancoso"></option>
				<option value="Trofa"></option>
				<option value="Valbom"></option>
				<option value="Vale de Cambra"></option>
				<option value="Valença"></option>
				<option value="Valongo"></option>
				<option value="Valpaços"></option>
				<option value="Vendas Novas"></option>
				<option value="Viana do Castelo"></option>
				<option value="Vila Baleira"></option>
				<option value="Vila do Conde"></option>
				<option value="Vila Franca de Xira"></option>
				<option value="Vila Nova de Famalicão"></option>
				<option value="Vila Nova de Foz Côa"></option>
				<option value="Vila Nova de Gaia"></option>
				<option value="Vila Nova de Santo André"></option>
				<option value="Vila Real"></option>
				<option value="Vila Real de Santo António"></option>
				<option value="Viseu"></option>
				<option value="Vizela"></option>
			</datalist>
			<select name="tipoassinante"id="assinante">
				<option value="0">Assinante</option>
				<option value="Particular">Particular</option>
				<option value="Empresa">Empresa</option>
				<option value="Organizacao">Organização</option>
			</select>
			<input type="submit" value="Subscreva"/>
			<span class="arrow">Campos de preenchimento obrigatorio.</span>
			</form>
		</div>
	</div>
	<!-- Mascara para cobrir a tela-->
	<div id="mask"></div>
	<span id="item_newsletter">Subscrever Newsletter</span>
</body>
</html>
<!--
	
-->