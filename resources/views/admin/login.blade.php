<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>登录</title>

<link rel="stylesheet" href="{{ asset('admins/css/font-awesome.min.css') }}"/>
<link rel="stylesheet" href="{{ asset('admins/css/loginMy.css') }}"/>

<style>
html,body{width:100%;}
</style>

</head>
<body>

<div class="main">

	<div class="center">
		<form action="{{ URL('admin/dologin') }}" id="formOne" method="post"onsubmit="return submitB()" >
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
      <!-- 图标 -->
      <center>
      <img src="{{ asset('admins/image/logo.png') }}">
      </center>
      <br/>
       @if(session('msg'))
           <p>{{ session('msg') }}</p>
        @else

        @endif
      <!-- 用户名输入框 -->
			<i class="fa fa-user Cone">  | </i>
			<input type="text" name="user" id="user" placeholder="用户名"onblur="checkUser()"/>
      <span id="user_pass" ></span>
			<br/>
      <!-- 密码框 -->
			<i class="fa fa-key Cone" >  | </i>
			<input type="password" name="passwd" id="pwd" placeholder="密码"onblur="checkUser1()"/>
			<span id="pwd_pass" ></span>
			<br/>
      <!-- 验证码输入框 -->
      <i class="fa fa-folder-open Cone">  | </i>
      <input type="text" style="width:15%;" name="code" id="surePwd" placeholder="验证码"onblur="checkUser2()"/>
      <!-- 验证码图片 -->
      <img src="{{ URL('admin/captcha/time()') }}" onclick="this.src='{{ URL('admin/captcha') }}/'+Math.random()">
			<span id="surePwd_pass" ></span>
      <br/>

			<input type="submit" value="登录" id="submit" name="submit">
			<br/>
		</form>
	</div>
	
</div>


<script type="text/javascript" src="{{ asset('admins/js/loginMy.js') }}"></script>
<div style="text-align:center;">
</div>
</body>
</html>