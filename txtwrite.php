<?php
if(isset($_POST['btn'])){
    $num=$_POST['number'];
    $txt=$_POST['txt'];
    exec("echo \".$txt.\">TEXT/".$num.".txt");
    echo '<script>alert("Text write successful")</script>';
  }
?>