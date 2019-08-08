<?php

if((isset($_POST['email']))&&(isset($_POST['fullname'])&&$_POST['message']!="")){
    $to = "kosmina.gregor@gmail.com";
    $subject = 'Novo sporočilo';

    $email = $_POST['email'];
    $date = date("Y-m-d");
    $time = date('H:i');
    $msg = $_POST['message'];


    $message = "Preko spletne strani www.avtowelt.com, vam je bilo poslano sporočilo.    
    <br><br>
    $date.' '.$time<br>    
    Vsebina: $msg";

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From: '" . $email . "'" . "\r\n";

    mail($to,$subject, $message, $headers);

    echo json_encode(array('status' => 'success'));
} else {
    echo json_encode(array('status' => 'error'));
}



?>
