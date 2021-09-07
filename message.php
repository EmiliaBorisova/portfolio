<?php
   $name = $_POST['name'];
   $email= $_POST['email'];
   $message=$_POST['message'];

   if(!empty($email) && !empty($message) && !empty($message)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = eboris@uw.edu;
        $subject = "From: $name <$email>";
        $body = "Name: $name\nName: $email\nEmail: $message\nMessage: "
        $sender = "From: $email";
        if(mail($receiver, $subject, $body)) {
            echo "Your message has been sent!";
        } else {
            echo "Sorry, failed to send your message!";
        }
    } else {
        echo "Plese enter a valid email address!"
    }
   } else {
     echo "All fields are required!"
   }
?>