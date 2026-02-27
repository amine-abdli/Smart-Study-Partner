<?php
require_once "../services/AIService.php";

$ai = new AIService();
$data = json_decode(file_get_contents("php://input"),true);

if($_GET['action']=="ask"){
 echo json_encode([
   "response"=>$ai->askAI($data['question'])
 ]);
}
?>