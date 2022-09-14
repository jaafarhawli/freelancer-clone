<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

include("connection.php");

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO contact_info(full_name, email_address,phone_number,message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email,$phone,$message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>