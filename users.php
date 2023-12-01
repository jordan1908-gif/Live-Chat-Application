<?php 
  session_start();
  include_once "php/config.php";
  if(!isset($_SESSION['unique_id'])){
    header("location: login.php");
  }
?>
<?php include_once "header.php"; ?>


	<body>

		<!-- Loading starts -->
		<div id="loading-wrapper">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<!-- Loading ends -->


		<!-- Page wrapper start -->
		<div class="page-wrapper pinned">
			
			<!-- Sidebar wrapper start -->
			
			<!-- Sidebar wrapper end -->

			<!-- Page content start  -->
			<div class="page-content">

				<!-- Header start -->
				<header class="header">
					<div class="toggle-btns">
						
					</div>
					<div class="header-items">
						<!-- Custom search start -->
						<div class="custom-search">
							
						</div>
						<!-- Custom search end -->

						<!-- Header actions start -->
						<ul class="header-actions">
							<li class="dropdown">
								
							</li>
							<li class="dropdown">
								
								
							</li>
							<li class="dropdown">
              <?php 
            $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
            if(mysqli_num_rows($sql) > 0){
              $row = mysqli_fetch_assoc($sql);
            }
          ?>
								<a href="#" id="userSettings" class="user-settings" data-toggle="dropdown" aria-haspopup="true">
									<span class="user-name"><?php echo $row['fname']. " " . $row['lname'] ?></span>
									<span class="avatar">
										<img src="php/images/<?php echo $row['img']; ?>" alt="avatar">
										<span class="status <?php if($row['status']=='Active now') echo "online" ; else echo "busy"; ?>"></span>
									</span>
								</a>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
									<div class="header-profile-actions">
                 
										<div class="header-user-profile">
											<div class="header-user">
												<img src="php/images/<?php echo $row['img']; ?>" alt="Admin Template">
											</div>
											<h5><?php echo $row['fname']. " " . $row['lname'] ?></h5>
											
										</div>
									
										<a href="php/logout.php?logout_id=<?php echo $row['unique_id']; ?>"><i class="icon-log-out1"></i> Déconnexion</a>
									</div>
								</div>
							</li>
						</ul>						
						<!-- Header actions end -->
					</div>
				</header>
				<!-- Header end -->

				<!-- Page header start -->
				<div class="page-header">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="users.php">Utilisateur</a>
						</li>
						
					</ol>

					<ul class="app-actions">
						<li>
							<?php date_default_timezone_set('Africa/Tunis');
echo date("Y-m-d H:i"); ?>
						</li>
						<li>
						
						</li>
					</ul>
				</div>
				<!-- Page header end -->
				
				<!-- Main container start -->
				<div class="main-container">

					<!-- Row start -->
					<div class="row gutters">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="chat-section">
								<!-- Row start -->
								<div class="row no-gutters">
									<div class="col-lg-12" >
										<div class="users-container">
											<div class="chat-search-box">
												<div class="input-group search">
													<input class="form-control" placeholder="Chercher vos ami(e)s ici ....." style="    border: none;"/>
													<div class="input-group-btn">
														
													</div>
												</div>
											</div>
											<div class="usersContainerScroll">
												<ul class="row users users-list">

                       
                        </ul>
												
											</div>
										</div>
									</div>
									
								</div>
								<!-- Row end -->
							</div>
						</div>
					</div>
					<!-- Row end -->

				</div>
				<!-- Main container end -->

			</div>
			<!-- Page content end -->

		</div>
		<!-- Page wrapper end -->

		<!--**************************
			**************************
				**************************
							Required JavaScript Files
				**************************
			**************************
		**************************-->
		<!-- Required jQuery first, then Bootstrap Bundle JS -->
		<script src="javascript/users2.js"></script>
		 
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/moment.js"></script>


		<!-- *************
			************ Vendor Js Files *************
		************* -->
		<!-- Slimscroll JS -->
		<script src="vendor/slimscroll/slimscroll.min.js"></script>
		<script src="vendor/slimscroll/custom-scrollbar.js"></script>

		<!-- Daterange -->
		<script src="vendor/daterange/daterange.js"></script>
		<script src="vendor/daterange/custom-daterange.js"></script>


		<!-- Main JS -->
		<script src="js/main.js"></script>

	</body>
</html>