<?php 
date_default_timezone_set('Africa/Tunis');
$datemsg=date("Y-m-d H:i:s");
    session_start();
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $outgoing_id = $_SESSION['unique_id'];
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        if(!empty($message)){
            $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg,date_msg)
                                        VALUES ({$incoming_id}, {$outgoing_id}, '{$message}','{$datemsg}')") or die();
        }
    }else{
        header("location: ../login.php");
    }


    
?>