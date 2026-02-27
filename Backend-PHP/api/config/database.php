<?php
  $conn = new mysqli("localhost", "root", "", "smart-study-partner");

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
?>