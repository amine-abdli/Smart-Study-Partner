<?php
require_once "../controllers/AuthController.php";

$auth = new AuthController();

$data=json_decode(file_get_contents("php://input"),true);

if($_GET['action']=="register"){
 echo json_encode($auth->register($data['name'],$data['email'],$data['password']));
}

if($_GET['action']=="login"){
 echo json_encode($auth->login($data['email'],$data['password']));
}
?>