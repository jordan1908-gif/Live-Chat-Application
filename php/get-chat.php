<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $outgoing_id = $_SESSION['unique_id'];
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        $output = "<ul style=' height: 90%;
        overflow: auto;
        display: flex;
        flex-direction: column-reverse;'>";
        $sql = "SELECT * FROM messages LEFT JOIN users ON users.unique_id = messages.outgoing_msg_id
                WHERE (outgoing_msg_id = {$outgoing_id} AND incoming_msg_id = {$incoming_id})
                OR (outgoing_msg_id = {$incoming_id} AND incoming_msg_id = {$outgoing_id}) ORDER BY msg_id DESC";
        $query = mysqli_query($conn, $sql);
        if(mysqli_num_rows($query) > 0){
            while($row = mysqli_fetch_assoc($query)){
                $dat=explode(' ',$row['date_msg']);
                $time=substr($dat[1],0,5);
                if($row['outgoing_msg_id'] === $outgoing_id){
                    $output .= '
                <li class="chat-right">
                    <div class="chat-text">
                    <p>'. $row['msg'] .'</p>
                        <div class="chat-hour">'.$time.' <span class="icon-done_all"></span></div>
                    </div>
                    <div class="chat-avatar">
                    <img src="php/images/'.$row['img'].'" alt="">
                        <div class="chat-name">'.$row['fname']. "  ".$row['lname'].'</div>
                    </div>
                </li>';
                }else{
                    $output .= '<li class="chat-left">
                    <div class="chat-avatar">
                    <img src="php/images/'.$row['img'].'" alt="">
                        <div class="chat-name">'.$row['fname']. "  ".$row['lname'].'</div>
                    </div>
                    <div class="chat-text">
                    <p>'. $row['msg'] .'</p>
                    <div class="chat-hour">08:55 <span class="icon-done_all"></span></div>
                    </div>
                </li>';
                }
            }
            $output.="</ul>
           ";
        }else{
            $output .= '<div class="text">No messages are available. Once you send message they will appear here.</div>';
        }
        echo $output;
    }else{
        header("location: ../login.php");
    }

?>

