<?php
   $name = $_POST['name'];
   $email= $_POST['email'];
   $message=$_POST['message'];

   if(!empty($email) && !empty($message) && !empty($message)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "emilia.borisova0127@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $sender = "From: $email";
        
        $subject2 = "CONFIRMATION: You sent a message to Emilia Borisova";
        $body2 = "Hi $name!\n\nThank you for sending me a message. This is just a confirmation that I've received it. Here's what you sent me:\n$message";
        if(mail($receiver, $subject, $body)) {
            mail($email, $subject2, $body2);
            echo "Your message has been sent!";
        } else {
            echo "Sorry, failed to send your message!";
        }
    } else {
        echo "Plese enter a valid email address!";
    }
   } else {
     echo "All fields are required!";
   }
?>
