<?php
if(isset($_POST["boton"])){
    if(strlen($_POST["nombre"]) >= 3 && strlen($_POST["mail"]) >= 3 && strlen($_POST["mensaje"]) >= 3){
        $nombre = strtolower($_POST["nombre"]);
        $mail = strtoLower($_POST["mail"]);
        $mensaje = strtoLower($_POST["mensaje"]);


        $nombreSanitizado = strip_tags($nombre);
        $mailSanitizado = filter_var($mail, FILTER_SANITIZE_EMAIL);
        $mensajeSanitizado = strip_tags($mensaje);


        if(filter_var($mailSanitizado, FILTER_VALIDATE_EMAIL)){
            $destinatario = "axelnoguera667@gmail.com";
            $asunto = "";
            $mensaje = $nombreSanitizado . " está interesado en sus productos." . "\r\n" . "su correo electrónico es: " . $mailSanitizado . "\r\n" . "ÉL LES ENVÍA ESTE MENSAJE: " . $mensajeSanitizado; 

 
            $header = "From: Ventas@inrom.mx" . "\r\n";
            $header .= "Reply-To: " . $mailSanitizado . "\r\n";
            $header .= "X-Mailer: PHP/ " . phpversion();


            $mailEnviado = mail($destinatario,$asunto,$mensaje,$header);
        };


    };


};


?>