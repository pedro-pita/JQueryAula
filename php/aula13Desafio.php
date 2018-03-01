<?php
$host = $_SERVER['HTTP_HOST'];
$uri=rtrim(dirname($_SERVER['PHP_SELF']),"/\\");
$extra="../aula_13Desafio.php";
if(!'HOME_URI')
    define('HOME_URI',"http://$host$uri/$extra");

$connection=mysqli_connect('localhost','root','','epcc') or trigger_error(mysql_error());

insertForm();

function insertForm(){
    global $connection;
    
    $nome=$_POST['nome'];
    $email=$_POST['email'];
    $idade=$_POST['idade'];
    $sexo=$_POST['sexo'];
    $descricao=$_POST['cidade'];
    $cidade=$_POST['assinante'];
    $date=$_POST['date'];
    $email=$_POST['email'];
    
    $sql="INSERT INTO `formulario` (nome, email, idade, sexo, cidade, email, date) VALUES ('$nome','$email','$idade','$sexo','$cidade','$email','$date')";
    
    if($connection->query($sql) === TRUE){
        echo "<p>Adicionado com sucesso</p>";
    }else{
        echo "Error: ".$sql."</br>".$connection->error;
        return;
    }
}

}