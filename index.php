<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<style>
  
.button {
     background-color: #1877f2 !important;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    width: 100%;
    color:white;
}
.animated-button:hover {
 
  cursor: pointer;
  animation: pulsate 2s ease-in-out infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
span {
  color: #1877f2;
}
input[type=text] {
 
  border: 1px solid #1877f2 !important;
 
  color: #1877f2 !important;
}
input[type=password] {
 
 border: 1px solid #1877f2 !important;

 color: #1877f2 !important;
}
</style>
<body  style="    background-color: #1b1b1b;">
  <div class="wrapper">
    <section class="form signup">
    <header style="text-align: center;color:white">Live Chat Application</header>
      
      <div class="container">
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
      <div class="row justify-content-md-center">
					
					<div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
											<div class="login-screen" style="    max-width: 100%;">
							<div class="login-box">

        <div class="error-text  form-group"></div>
        <div class="name-details">
          <div class="field input">
            <label>First Name</label>
            <input type="text" class="form-control" name="fname" placeholder="First name" required>
          </div>
          <div class="field input form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" name="lname" placeholder="Last name" required>
          </div>
        </div>
        <div class="field input form-group">
          <label>Email Address</label>
          <input type="text" class="form-control" name="email" placeholder="Enter your email" required>
        </div>
        <div class="field input form-group">
          <label>Password</label>
          <input type="password" class="form-control" name="password" placeholder="Enter new password" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field image form-group">
          <label>Select Image</label>
          <input type="file" class="form-control" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
        </div>
        <div class="field  form-group">
          <input type="submit" name="submit" class="button animated-button" value="Continue to Chat">
        </div>

        <div class="link" style="color:black;text-align:center">
                      Already signed up? <a href="login.php" style="color:black;text-align:center">
                      Login now</a></div>    
              </div>
                   
            </div>
                     
          </div>
          
      </form>
     
      </div>
    </section>
  </div>

  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>

</body>
</html>
