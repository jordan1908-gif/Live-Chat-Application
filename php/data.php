<?php
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
        <li class="person" data-chat="person4">
                                                            <div class="user">
                                                            <a href="chatusers.php?user_id='. $row['unique_id'] .'" >
                                                             <img src="php/images/'. $row['img'] .'" alt=""  >
                                                                <span class="status '. $offline .'"></span>
                                                                </a>
                                                            </div>
                                                            <p >
                                                            <a href="chatusers.php?user_id='. $row['unique_id'] .'" style="padding-bottom: 0px;
                                                            margin-bottom: 0px;
                                                            padding-right: 0px;
                                                            border-bottom-color: transparent;">
                                                             <span class="name" style="    font-size: 18px;
                                                             font-weight: 700;">'.  ucfirst($row['fname']). " " .  ucfirst($row['lname']) .'</span>
                                                            

                                                             </a>
                                                             <span class="time">'.$row['status'].'</span>
                                                            </p>
                                                            </li>
    ';
    }
?>
