<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "2088150361:AAF2dk8Zyo9dZPgMqtEEeyYhbourbigCxhc";
$chat_id = "-757158961";
$arr = array(
  'Name: ' => $name,
  'Telephone: ' => $phone,
  'Email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."";
};

$website="https://api.telegram.org/bot".$token;
  $params=[
      'chat_id'=>$chat_id, 
      'text'=> $txt,
  ];
  $ch = curl_init($website . '/sendMessage');
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch);
  curl_close($ch);
  echo $result;

?>