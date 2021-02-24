<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$text = $_POST['text'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Vitalynov3@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'fhy-3W6-sA7-wRG'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Vitalynov3@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('td.arena1@yandex.ru');     // Кому будет уходить письмо 

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта: tda77.ru (Обратный звонок)';
$mail->Body    = 'Заявка от: <br> Имя: ' .$name . '<br> Телефон: ' .$phone. '<br>Почта: ' .$email. '<br>Текст: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
	
	//header('location:thank-you.html');
}
?>



