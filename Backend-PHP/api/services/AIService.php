<?php
// class AIService {

//   private $apiKey = "YOUR";
//  public function askAI($question){
//   $data = [
//    "model" => "gpt-3.5-turbo",
//    "messages" => [
//      ["role"=>"user","content"=>$question]
//    ]
//   ];

//   $ch = curl_init("https://api.openai.com/v1/chat/completions");
//   curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//   curl_setopt($ch,CURLOPT_HTTPHEADER,[
//    "Content-Type: application/json",
//    "Authorization: Bearer ".$this->apiKey
//   ]);
//   curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($data));

//   $res = curl_exec($ch);
//   curl_close($ch);

//   $resData = json_decode($res,true);
//   return $resData['choices'][0]['message']['content'] ?? "No response";
//  }
// }
?>