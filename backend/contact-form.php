<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/PHPMailer/src/Exception.php';
require 'vendor/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/src/SMTP.php';


function loadEnv($path) {
    if (!file_exists($path)) {
        return;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        if (!array_key_exists($key, $_ENV)) {
            $_ENV[$key] = $value;
        }
    }
}
loadEnv(__DIR__ . '/.env');    

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$raw_input = file_get_contents("php://input");
error_log("Raw input: " . $raw_input);
$data = json_decode($raw_input, true);

error_log("Decoded data: " . print_r($data, true));

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Žádná data nebyla přijata", "raw_input" => $raw_input]);
    exit;
}

if ($_SERVER['CONTENT_TYPE'] !== 'application/json') {
    echo json_encode(["status" => "error", "message" => "Neplatný typ požadavku"]);
    exit;
}

$name = isset($data["name"]) ? htmlspecialchars($data["name"]) : '';
$email = isset($data["email"]) ? filter_var($data["email"], FILTER_VALIDATE_EMAIL) : '';
$message = isset($data["message"]) ? htmlspecialchars($data["message"]) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Všechna pole musí být vyplněná"]);
    exit;
}

if (!$email) {
    echo json_encode(["status" => "error", "message" => "Neplatný e-mail"]);
    exit;
}

// Odeslání potvrzení přijatých dat (status success)
echo json_encode(["status" => "success", "received" => $data]);
exit; // Tady končíme a neprocházíme odesláním e-mailu, pokud nepotřebujeme čekat na odpověď na odeslání e-mailu.

// Nyní přichází část pro odeslání e-mailu, která bude zpracována samostatně, pokud je potřeba
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $_ENV["SMTP_HOST"];
    $mail->SMTPAuth = true;
    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";
    $mail->SMTPDebug = 3; // Zkuste zvýšit debug level pro lepší výstup
    $mail->Debugoutput = 'echo';
    $mail->Debugoutput = 'error_log';

    $mail->Username = $_ENV["SMTP_USER"];
    $mail->Password = $_ENV["SMTP_PASS"];
    $mail->SMTPSecure = $_ENV["SMTP_SECURE"];
    $mail->Port = $_ENV["SMTP_PORT"];

    $mail->setFrom($_ENV["SMTP_USER"]);
    $mail->addAddress($_ENV["SMTP_USER"]);
    $mail->Subject = "Vyplněn formulář na webu";
    $mail->Body = "Jméno: {$name}\nEmail: {$email}\nZpráva: {$message}";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "E-mail byl úspěšně odeslán"]);
} catch (Exception $e) {
    error_log("Chyba při odesílání e-mailu: " . $e->getMessage());
    echo json_encode(["status" => "error", "message" => "Chyba při odesílání: " . $mail->ErrorInfo]);
}
