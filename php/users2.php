<?php

session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    $sql = "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id} ORDER BY user_id DESC";
    $query = mysqli_query($conn, $sql);
    $output = "";
    if(mysqli_num_rows($query) == 0){
        $output .= "No users are available to chat";
    }elseif(mysqli_num_rows($query) > 0){
        
    while($row = mysqli_fetch_assoc($query)){
        $sql2 = "SELECT * FROM messages WHERE (incoming_msg_id = {$row['unique_id']}
                OR outgoing_msg_id = {$row['unique_id']}) AND (outgoing_msg_id = {$outgoing_id} 
                OR incoming_msg_id = {$outgoing_id}) ORDER BY msg_id DESC LIMIT 1";
        $query2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($query2);
        (mysqli_num_rows($query2) > 0) ? $result = $row2['msg'] : $result ="No message available";
        (strlen($result) > 28) ? $msg =  substr($result, 0, 28) . '...' : $msg = $result;
        if(isset($row2['outgoing_msg_id'])){
            ($outgoing_id == $row2['outgoing_msg_id']) ? $you = "You: " : $you = "";
        }else{
            $you = "";
        }
        ($row['status'] == "Offline now") ? $offline = "offline" : $offline = "";
        ($outgoing_id == $row['unique_id']) ? $hid_me = "hide" : $hid_me = "";

        $output .= '
        <div class="col-lg-2 person" data-chat="person4">
                                                            <div class="user">
                                                            <a href="messaging.php?user_id='. $row['unique_id'] .'" >
                                                             <img src="php/images/'. $row['img'] .'" alt=""  >
                                                                <span class="status '. $offline .'"></span>
                                                                </a>
                                                            </div>
                                                            <p >
                                                            <a href="messaging.php?user_id='. $row['unique_id'] .'" style="padding-bottom: 0px;
                                                            margin-bottom: 0px;
                                                            padding-right: 0px;
                                                            border-bottom-color: transparent;">
                                                             <span class="name" style="    font-size: 18px;
                                                             font-weight: 700;">'.  ucfirst($row['fname']). " " .  ucfirst($row['lname']) .'</span>
                                                            

                                                             </a>
                                                            
                                                            </p>
                                                            </div>
    ';
    }

    }
    echo $output;
?>
