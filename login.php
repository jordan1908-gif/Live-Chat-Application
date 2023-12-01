<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }



include("header.php");
?>
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
<body style="    background-color: #1b1b1b;">

<div >
  <div class="wrapper">
    <section class="form login">
      <header style="text-align: center;color:white">Live Chat Application</header>
      

      <div class="container">
			
			<form method="POST" enctype="multipart/form-data" autocomplete="off">
				<div class="row justify-content-md-center">
					
					<div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
											<div class="login-screen">
							<div class="login-box">
								
								
								
                <div class="error-text"></div>
        <div class="field input form-group">
          <label>Email Address</label>
          <input type="text" name="email" class="form-control" placeholder="Enter your email" required>
        </div>
        <div class="field input form-group">
          <label>Password</label>
          <input type="password" name="password" class="form-control" placeholder="Enter your password" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field ">
          <input type="submit" name="submit" class="form-control button animated-button" value="Continue to Chat">
        </div>
        <div class="link" style="text-align: center;color:black">Not yet signed up? <a href="index.php" style="text-align: center;color:black">Signup now</a></div>
    	
							</div>
						</div>
					</div>
				</div>
			</form>
      
		</div>

     </section>
  </div>
  
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/login.js"></script>
</div>
</body>
</html>
