<?php
      ini_set("display_errors","1");
      error_reporting(E_ALL);
	  	$email = $_POST['email'];
         $to = "Renukap.uid@gmail.com";
         $subject = " Mail From Renuka";
         
         $message = "HI message from Renuka<br/>";
         $message .= "Name:".$_POST['name']."<br/>";
         $message .= "Email:".$_POST['email']."<br/>";
         $message .= "Mobile:".$_POST['phone']."<br/>";
         $message .= "Message:".$_POST['message']."<br/>";
         $message .= "Thanking you <br/>";
         
         $header = "From:".$email." \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
             header("Location:index.html?status=success");
      ?>
      