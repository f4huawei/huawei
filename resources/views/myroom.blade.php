@foreach($list as $user)
<!DOCTYPE html>
<html>
<head>
<title>{{ $user->userName }}的主页</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Mungo Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="{{ asset('myRooms/css/bootstrap.css') }}" rel="stylesheet" type="text/css" media="all" />
<link href="{{ asset('myRooms/css/style.css') }}" rel="stylesheet" type="text/css" media="all" />
<!--fonts-->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Berkshire+Swash' rel='stylesheet' type='text/css'>
<!--/fonts-->
<!-- js -->
<script src="{{ asset('myRooms/js/jquery.min.js') }}"> </script>
<script src="{{ asset('myRooms/js/bootstrap.js') }}"></script>
<!-- //js -->
<!-- start-smoth-scrolling -->
<script type="text/javascript" src="{{ asset('myRooms/js/move-top.js') }}"></script>
<script type="text/javascript" src="{{ asset('myRooms/js/easing.js') }}"></script>
<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
</script>
<style>
	.banner-info{
    background: url(URL('myRooms/userImg/user.jpg'))no-repeat 0px 0px;
    width: 500px;
    height: 400px;
    margin: 17.5% auto 0;
}
</style>
<!-- start-smoth-scrolling -->
</head>
<body>
	<div class="header">
		<div class="container">
				<div class="logo">
					<a href="#"><h2>{{ $user->userName }}</h2>的主页</a>
				</div>
		<div class="navigation">
			<nav class="navbar navbar-default">
				<div class="navbar-header">
					  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"> </span>
						<span class="icon-bar"> </span>
						<span class="icon-bar"> </span>
					  </button>
					</div>
					<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
						<nav class="cl-effect-7" id="cl-effect-7">
					  <ul class="nav navbar-nav">
						<li class="active"><a class="scroll" href="#home">我的主页<span class="sr-only">(current)</span></a></li>
						<li><a class="scroll" href="#about">个人简介</a></li>
						<li><a class="scroll" href="#contact">我的信息</a></li>
						<li><a  href="/Theorder/{{ session('user')->id }}">我的订单</a></li>
					  </ul>
					  </nav>
			  <div class="clearfix"> </div>
			</div><!-- /.navbar-collapse -->
		</nav>
	</div>
	
	<div class="clearfix"> </div>
	</div>
</div>
<div class="banner">
	<div class="container">
		<div class="banner-info">
			<div class="banner-text">
				<h1>尊敬的{{ $user->userName }}</h1>
				<h2>{{ $user->userPhone }}</h2>
				<a href="#about" class="hvr-bounce-to-right">查　看　我　的　信　息</a>
			</div>
		</div>
	</div>
</div>
<!--about-->
<div id="about" class="about">
			<div class="container">
				<!-- head-section -->
				<div class="head-section text-center">
					<h2>我的简介</h2>
					<span> </span>
				</div>
				<!-- head-section -->
				<!-- about-grids -->
				<div class="about-grids">
					<div class="col-md-6 about-left-grid">
						<h3>介绍一下自己</h3>
						<span>您是个怎样的的人呢？</span>
						<p>{{ $user->userAbout }}</p>
						<p class="p-text">哈哈哈</p>
					</div>
					<div class="col-md-6 about-right-grid">
						<a class="popup-with-zoom-anim" href="#small-dialog"><img src="{{ URL('myRooms/userImg') }}/{{ $user->userPhoto }}" title="Designer_girl"></a>
					</div>
					<div class="clearfix"> </div>
				</div>
				<!-- about-grids -->
			</div>
			<div class="clearfix"> </div>
		</div>
	
			<!--//fea-video-->
<!--/about-->

<!--contact-->
<div class="contact" id="contact">
	<div class="container">
		<div class="contact-info text-center">
			<h3>信息修改</h3>
			<span> </span>
		</div>
		<div class="contact-grids">
			<div class="col-md-5 contact-left">
				<h3>您的信息</h3>
				<div class="stripb"> </div>
				<ul>
					<br/>
					<li>用户名</li>
					<br/>
					<li>密码</li>
					<li>性别</li>
					<li>联系电话</li>
					<br/><br/>
					<li>上传头像</li>
					<br/>
					<li>收货地址</li>
					
				</ul>
			</div>
			<div class="col-md-7 contact-right">
				<h3>。</h3>
				<div class="stripb"> </div>
				<form enctype="multipart/form-data" action="{{ URL('myroom/') }}/{{ $user->id }}" method="post">
					<input type="hidden" name="_method" value="put">
					<input type="text" value="{{ $user->userName }}" name="userName" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '{{ $user->userName }}';}" required=""><br>
					<br/>
					<input type="password"  value="{{ $user->userPass }}" name="userPass" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '{{ $user->userPass }}';}" required="">
					<br><br/><br/>
					<input type="radio" name="userSex" value="1" {{ ($user->userSex==1)? "checked":"" }}>男


                        <input type="radio" name="userSex" value="0" {{ ($user->userSex==0)? "checked":"" }}>女
					<br><br/>
					<input type="text"  name="userPhone" value="{{ $user->userPhone }}" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '{{ $user->userPhone }}';}" required="">
					<br>
					<input type="file" name="userPhoto">
					<br>
					
					<br>
					<textarea type="text" name="userAddress" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '{{ $user->userAbout }}';}" required="">{{ $user->userAbout }}</textarea>
					<input type="hidden" name="_token" value="{{csrf_token()}}">
					<input type="submit" value="确认修改">
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
</div>
<!--/contact-->


<div class="footer">
	<div class="copy">
		<div class="container">
		<p>Copyright &copy; 2015.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">华为首页</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">用户维权</a></p>
   </div>
</div>
   <script type="text/javascript">
						$(document).ready(function() {
							/*
							var defaults = {
					  			containerID: 'toTop', // fading element id
								containerHoverID: 'toTopHover', // fading element hover id
								scrollSpeed: 1200,
								easingType: 'linear' 
					 		};
							*/
							
							$().UItoTop({ easingType: 'easeOutQuart' });
							
						});
					</script>
				<a href="#" id="toTop" style="display: block;"><span id="toTopHover"></span><span id="toTopHover"></span> <span id="toTopHover" style="opacity: 1;"> </span></a>
</div>
</body>
</html>
@endforeach