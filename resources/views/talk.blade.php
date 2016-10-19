@if(session('user'))
<html>
<head>
	<meta charset="utf-8">
	<title>客户服务</title>
	<style>
		.talk{
			margin-left:0px;
			border:3px solid red;
			width:80%;
			height:150px;
		}
		.name{
			border:1px solid red;
			width:99%;
			height:40px;
			font-size:23px;
		}
		body{
			background-color:black;
			color:white;
			
		}
		#text{
			width:80%;
			height:200px;
		}
		
	</style>
	<script src="{{ asset('shop/Scripts/script_dev_en_jquery_min.js') }}"></script>
	<script>
		window.onload = function(){
	var time = setInterval(function(){	
				$.ajax({
			type:"get",
			// data:{},
			url:"{{ url('/talkwith') }}",
			dataType:'json',
			success:function(data)
            {
            	$('.talk').remove();
            	$('name').remove();
            	for(var i = 0; i < data.length; i++){
            		
            		// $('#ddiv').append(data[i].text);
            		$('#wai').append("<div class='talk'><div class='name'>"+data[i].name+'</div>'+data[i].text+"</div>");
            	}
            	
            	
            },
            error:function()
            {
                alert('异常1');
            },     
		});	},1000)
		}

	</script>
</head>
<body>
	<center><h1>在线话题讨论</h1></center>
	<div id="wai">

	</div>
		
	<form  method="post" action="/talkup">
		<input type="hidden" name="_token" value="{{csrf_token()}}">
		<input type="hidden" name="id" value="{{ session('user')->id }}">
		<input type="hidden" name="name" id="nn" value="{{ session('user')->userName }}">
		<textarea id="text" name="text">ssdada</textarea>
		<button id="btn">发送</button>
	</form>
	
</body>
</html>
@else
<h1>请登录</h1>
@endif