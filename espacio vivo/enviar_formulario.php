
<?php
if($_server["REQUEST_METHOD"] == "POST"){
$class = $_POST["class"];
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$mail = $_POST["mail"];
$age = $_POST["age"];
$birthday = $_POST["birthday"];
$phonenumber = $_POST["phonenumber"];
$nameContact = $_POST["nameContact"];
$phonenumber1 = $_POST["phonenumber1"];
$observations = $_POST["observations"];


$destinatario = "espaciovivo@hotmail.com";
$asunto = "Nueva solicitud de formulario";


$cuerpo .="clase:" .$class."\n";
$cuerpo .="Nombre:" .$name."\n";
$cuerpo .="Apellido:" .$lastname."\n";
$cuerpo .="Email:" .$mail."\n";
$cuerpo .="Edad:" .$age."\n";
$cuerpo .="Fecha de nacimiento:" .$birthday."\n";
$cuerpo .="Telefono:" .$phonenumber."\n";
$cuerpo .="Persona de Emergencia:" .$nameContact."\n";
$cuerpo .="Telefono de emergencia: " .$phonenumber1."\n";
$cuerpo .="Observaciones:" .$observations."\n";


$headers .="From:$email\r\n";

mail($deatinatario,$asunto,$cuerpo,$headers);

echo "¡El formulario ha sido enviado!";

}
?>
