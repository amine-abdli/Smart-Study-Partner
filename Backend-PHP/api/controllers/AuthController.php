<?php
 require_once '../config/database.php';
 class AuthCo{
    public function register($name,$password,$email){
        global $conn;
        $hash= password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$hash')";
        return $conn->query($sql);
    }
    public function login($email,$password){
        global $conn;
        $sql = "SELECT * FROM users WHERE email='$email'";
        $res = $conn->query($sql);
        if($res->num_rows>0){
   $user=$res->fetch_assoc();
   if(password_verify($password,$user['password'])){
    return $user;
   }
  }
            return false;
        }
    
 }

?>