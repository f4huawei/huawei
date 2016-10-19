@extends("base")
@section('content')
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="{{asset('shop/bootstrap/css/bootstrap.min.css') }}">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="zh-cn" />
<meta http-equiv="X-UA-Compatible" content="IE=edge; charset=utf-8"/>
<meta name="csrf-token" content="{{ csrf_token() }}">
<script>
var domainMain = 'http://shopcn.huawei.com';
var domainWap = 'http://m.vmall.com';
var domainCart = 'http://shopcn-cart.huawei.com';
var domainRemark = 'http://remark.vmall.com';
var domainShoppingConfig = 'http://shopcn-addr.huawei.com';
var imagePath = 'http://shopcn-res.huaweistatic.com/integration/images';
var domainAccount = 'http://shopcn.huawei.com';
var isUseAccount = 'false';
var upBindPhoneAddr = 'http://hwid1.vmall.com:8080/oauth2/userCenter/bindAccount/bindMobileAccount_1.jsp?lang=zh-cn&amp;themeName=cloudTheme&amp;reqClientType=26';
</script>

<!-- 
<script>
(function(){
	try
	{
		cookieGet=function(a){var f=null;if(document.cookie&&document.cookie!=""){var d=document.cookie.split(";");for(var c=0;c<d.length;c++){var b=(d[c]||"").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"");if(b.substring(0,a.length+1)==(a+"=")){var e=function(i){i=i.replace(/\+/g," ");var h='()<>@,;:\\"/[]?={}';for(var g=0;g<h.length;g++){if(i.indexOf(h.charAt(g))!=-1){if(i.startWith('"')){i=i.substring(1)}if(i.endWith('"')){i=i.substring(0,i.length-1)}break}}return decodeURIComponent(i)};f=e(b.substring(a.length+1));break}}}return f};
		var uri = location.href;
		//增加产品详情页判断 
		var prodReg=/\/\d+\.html/;
		var isProDetail =prodReg.test(uri);
		if(uri == domainMain || uri == (domainMain + "/index.html") || uri == (domainMain + "/")||isProDetail) {
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
				var redirectWap = cookieGet("redirectWap");
				
				if(!redirectWap == "1" && !isProDetail) {
					window.location.href = domainWap;
				}else if(!redirectWap == "1" && isProDetail)
				{
					var wapUri =domainWap+uri.substring(uri.indexOf("/product")); 
					window.location.href=wapUri; 
				}
			}
		}
	}
	catch (err){}
})();
</script> -->
<title>【HUAWEI P9】_华为</title>
<meta name="keywords" content="华为,HUAWEI P9" />
<meta name="description" content="【HUAWEI P9】!华为提供HUAWEI P9正品行货，全国价格最低，并包括HUAWEI P9网购指南，以及HUAWEI P9图片、HUAWEI P9参数、HUAWEI P9评论、HUAWEI P9心得、HUAWEI P9技巧等信息，网购HUAWEI P9手机上华为,放心又轻松 "/>
<link rel="shortcut icon" href="http://www.vmall.com/favicon.ico" />
<link href="{{ asset('shop/Content/ec.core.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('shop/Content/css_con_cn_ht_share.css') }}" rel="stylesheet" type="text/css">

<link href="{{ asset('shop/Content/main.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('shop/Content/css_con_cn_ht_share.css') }}" rel="stylesheet" type="text/css">
<script src="{{ asset('shop/Scripts/jsapi.js') }}" namespace="ec"></script>
<!--[if lt IE 9 ]>
<script type="text/javascript" src="{{ asset('shop/Scripts/respond.min.js') }}"></script>
<![endif]-->
<script src="{{ asset('shop/Scripts/script_dev_en_jquery_min.js') }}"></script>
<script src="{{ asset('shop/Scripts/ec.core.js') }}"></script> 
<script src="{{ asset('shop/Scripts/ec.business.js') }}"></script> 
<!--[if lt IE 9]><script src="{{ asset('shop/Scripts/html5shiv.js') }}"></script> <![endif]-->
<script src="{{ asset('shop/Scripts/script_con_cn_ht_share.js') }}"></script>
<script src="{{ asset('shop/Scripts/pc-g-analytics.js') }}"></script>
<script src="{{ asset('shop/Scripts/jquery-1.8.3.min.js') }}"></script>

<script>
function titleSearch() {
    var $k = $('.cbg-search-form input[type=text]')
    var p = $k.attr("placeholder")
    var k = $.trim($k.val())
    if (k == "") {
        window.location.href =  "http://consumer.huawei.com/cn/search/index.htm?keywords=" + encodeURIComponent(p)
    } else {
        if (k.length == 1) {
            alert('至少输入2个关键字')
            return false
        }
        if (k.length > 90) {
            alert('输入的关键字数不能超过90' || $k.data('prompt-keyword-too-long') || "Key length of input cannot be longer than 90.");
            return false
        }
        window.location.href = "http://consumer.huawei.com/cn/search/index.htm?keywords=" + encodeURIComponent(k)
    }
}
$(function () {
    $("#head_search_submit").click(function () {
        titleSearch();
    })
});
</script></head>



<body>

<input type="hidden" id="casLoginUrl" name="casLoginUrl" value="https://hwid1.vmall.com/CAS/remoteLogin?loginChannel=27000000&reqClientType=27&loginUrl=http%3A%2F%2Fconsumer.huawei.com%2Fcn%2Faccount%2Flogin%2Findex.htm&service=http%3A%2F%2Fshopcn.huawei.com%2Faccount%2Fcaslogin%3Furl%3D"/>
<script src="{{ asset('shop/Scripts/base.min.js') }}"></script>
<script>
ec.mediaPath = "http://shopcn-res.huaweistatic.com/integration/pimages";
//document.write('<script src="shop/Scripts/1ac17344839a410492e8e2fcf197c473.js'+(new Date()).getTime()+'"></s' + 'cript>');
/**
*功能：给鼠标移动到s-dropdown上面的时候，记得给他多添加一个hover类样式
*目的是兼容ie6
*@author 王昊
*/
$(function(){
	$(".js-header-menu").hover(function(){
		$(this).addClass("hover");
		ec.base.getCartNum();
		ec.base.getOrderNum();
	},function(){
		$(this).removeClass("hover");
	});
});
</script>
<script>document.body.className = "wide order cbg insert-cbg-header";</script>
<!-- 导航 -->
<div class="g-main">
	<div class="g">
		<div id="bread-pro-name" class="breadcrumb-area fcn">
			@foreach($na as $aaa) {{ $aaa }} @endforeach
		</div>
	</div>
</div>
</div>

<script>
$("body").addClass("cbg insert-cbg-header sc detail");
</script>


<div class="hr-10"></div>
<div class="layout"> 
	<!--商品简介 -->
	<div class="pro-summary-area clearfix" id="pro-summary-area">
    	<div class="right-area">
        	<!--商品简介-属性 -->
        	<div class="pro-property-area clearfix">
                <div class="pro-meta-area">
                	<!-- 自己写html写在这里 -->
					<br/><br/><br/><br/><br/>
					<!-- 获取商品ID -->
					@foreach($shos as $shosid)
					<input type="hidden" value="{{ $shosid }}" id="hidden">
					@endforeach
                	<h1>@foreach($na as $aaa) {{ $aaa }} @endforeach</h1>
                	选择颜色：<br/>
                	@foreach($attr as $good)
                		<input type="hidden" value="{{ $good }}" id="colorui"/>
                		<button class="CheckColor btn btn-info btn-lg"  >{{ $good }}</button>
                	@endforeach
                	<br/>
                	选择容量：<br/>
                	<div id='zs' class="Checksize2"></div><br/><br/>
                	选择版本:<br/>
                	<div id='bb'>
                		全网通
                	</div>
	            </div>
			    <div class="hr-10"></div>
			    <div class="line"></div>
			    <div class="hr-10"></div>
	            <!--商品简介-SKU -->
	            <div id="pro-skus" class="pro-sku-area">加载中...</div>
			    <div id="pro-gift-list" class="hide"></div>
					<div class="pro-sku-area hide" id="contractLst">
						<!-- 联通合约机套餐 -->	
						<dl class="pro-sku-text clearfix " >
								<dt>合&nbsp;&nbsp;约&nbsp;&nbsp;机：</dt>
								<dd id="contractList-ol">
								</dd>
						</dl>
						<form action="/contract/choose-{id}" id="contractForm" class="hide"></form>
					</div>
					<!-- 20140710-商品简介-延保-start -->
					<div class="pro-ew-area hide">
						<dl class="pro-sku-text clearfix">
							<dt>购买服务：</dt>
							<dd>
								<ol class="clearfix">
									<!-- 鼠标悬停追加ClassName： hover，选中追加Class Name：selected -->
									<li id="extendProtected" class="sku-select">
										<!-- 取数据字节最长的div.sku的宽度赋值给所有div.sku -->
										<div class="sku">
										   <a href="javascript:;" title="延保服务">华为延保商品A类服务
										   </a><i></i><s></s>
										</div>
										<ul >
								
										</ul>
									</li>
									<li id="accidentProtected" class="sku-select">
										<!-- 取数据字节最长的div.sku的宽度赋值给所有div.sku -->
										<div class="sku">
										      <a href="javascript:;" title="意外保服务">华为意外保商品B类服务
										      </a><i></i><s></s>
										</div>
										<ul>
											
										</ul>
										<div class="pro-sku-tips">
								
										</div>
									</li>
								</ol>
							</dd>
						</dl>
					</div><!-- 20140710-商品简介-延保-end -->
					<input id="pro-quantity" type="text" class="vam text" style="display: none;" value="1" autocomplete="off" />                    
                    <!--  商品简介-购买数量
					<div id="pro-quantity-area" class="pro-stock-area" style="display: none;">购买数量：
    					<span class="stock-area">
						<input id="pro-quantity" type="text" class="vam text" value="1" autocomplete="off" />
   						</span>
					</div>
                      -->
		        <!-- 搭配推荐 新-->
		        <div class="pro-suit-parts-list" id="tab-comb">
				    <dt>您选择了以下产品：<span id='span1'><!-- @foreach($list as $Name){{$Name->goodsName}}@endforeach --></span><span id='span2'></span><span id="span3"></span><span id='span4'></span></dt>
                    <div class="pro-suit-parts-area" id="comb-pro-area">
                    	<h1>
                    		<b>全网通</b>&nbsp;&nbsp;<b id="cl"></b>&nbsp;&nbsp;<b id="sz"></b>
							<em id="pro-name"><!-- @foreach($list as $Name){{$Name->goodsName}}@endforeach --></em>
							<span id="pro-price"><div id="llalal"></div><sup >￥</sup><em>元</em></span>
						</h1>
				    </div>
				</div>
				<br/><br/><br/><br/><br/><br/>
				<!-- 获取详情id -->
				<div id="gid" style="display:none"></div>
				<a disable width="300px;" class="btn btn-warning btn-lg " id='gwc' href="{{  }}" >加入购物车</a>
				&nbsp;
				<a style="display:none" disable width="300px;" class="btn btn-warning btn-lg" id='dxid' href="/" >下单</a>
                <!-- dbank温馨提示 -->
                <div class="pro-tips-area"  id="pro-msg" style="display: none;" >
                	<div class="tips-style-2 tips-area">
                		<i></i>
                		 <div class="tips-text"><p><span>温馨提示：</span><span id="pro-msg-title">本套餐只适用于华为网盘标准和VIP用户购买，至尊VIP用户请勿购买。</span></p></div>
					</div>
				</div><!-- 20131218-商品简介-tips-end -->
            </div><!--end pro-meta-area-->
                
		<!--商品简介-提交操作 -->
		<form id="order-confirm-form" method="post" class="hide" action="/order/nowConfirmcart"></form>
		<!--延保单独购买提交form -->
		<form id="order-confirm-extend-form" method="post" class="hide" action="/order/extendConfirm"></form>
		<form id="order-shoppingCart-form" method="get" class="hide" action="http://shopcn-cart.huawei.com/cart/cart.html"></form>
		<!--预付订金form -->
		<form id="order-confirm-deposit-form" method="post" class="hide" action="/order/confirmDeposit"></form>
		<input id="isPriority" name="isPriority" type="hidden" value="0"/>
		<script src="{{ asset('shop/Scripts/detail.min.js') }}"></script>
        <script type="text/javascript">
        	function addCar()
        </script>        
<!--商品简介-提交操作 -->
<div class="pro-fixed-action">
    <div id="pro-select-sku" class="pro-selected clearfix"></div>
    <div class="hr-50"></div>
    <div id="pro-operation" class="pro-action-area clearfix"></div>
    <div class="pro-agreement-area hide" id="pro-agreement-area">
		<input class="vam" checked type="checkbox" id="pro-agreement-area-check"><label for="" class="vam">同意</label>&nbsp;<a href="javascript:;" class="vam" onclick="ec.product.showDepositAgreement()">订金支付协议</a>
	</div>
</div>
<!--弹出层-成功添加到购物车 -->
<div id="cart-tips" class="pro-popup-area hide">
    <div class="h">
		</span></a>
    </div>
    <div class="b">
		<div class="pro-add-success">
			<dl>
			<dt><s></s></dt>
				<dd>
					<p>HUAWEI P9</p>
					<div class="pro-add-success-msg">成功加入购物车!</div>
					<div class="pro-add-success-total">购物车中共&nbsp;<b id="cart-total">0</b>&nbsp;件商品，金额合计&nbsp;<b  id="cart-price">¥&nbsp;0</b></div>
					<div class="pro-add-success-button"><a href="javascript:;" class="button-style-1 button-go-cart" title="去购物车结算" onclick="ec.product.gotoshoppingCart()">去结算</a><a class="button-style-4 button-walking" href="javascript:;" title="继续逛逛" onclick="$('#cart-tips').hide()">继续逛逛&nbsp;>></a></div>									
				</dd>
			</dl>					
		</div>
    </div>
</div>
<!--弹出层-提示信息 -->
<div id="popup-tips" class="pro-popup-area hide">
    <div class="h">
	<a href="javascript:;" class="pro-popup-close" title="关闭" onclick="$('#popup-tips').hide()"><span>关闭</span></a>
    </div>
    
    <div class="b">
		<div class="pro-add-error">
			<div class="pro-add-error-msg" id="popup-tips-msg" >非常抱歉！该商品不能单独销售！</div>
			<div class="pro-add-error-button"><a class="button-style-1 button-par-define" href="javascript:;" onclick="$('#popup-tips').hide()" title="知道了">知道了</a></div>
		</div>
    </div>
</div>
<!-- 20130913-弹出层-购买延保-start -->
<div id="popup-extend" class="pro-popup-area hide">
	<div class="h">
		<a href="javascript:;" class="pro-popup-close" title="关闭" onclick="$('#popup-extend').hide()">关闭</a>
	</div>
	
	<div class="b">
		<div class="pro-extend-area">
				<h3>购买延保</h3>
				<div class="pro-extend-search">
					<div class="form-edit-area">
						<form action="javascript:;" id="checkExtend-ID" onsubmit="return ec.product.checkExtend()">
							<input type="hidden" id="extendSkuId" />
							<input type="text" class="text vam" id="extend-text" maxlength="50" /><input class="button-style-4 button-extend-search vam" type="submit" value="查看可购买的延保" />
						</form>
					</div>
				</div>
			
				<div class="pro-extend-result hide"  id="pro-extend-result-id">
					<div id="extend-msg-succuss" class="hide"></div>
					<div id="extend-msg-error" class="hide"></div>
				</div>
				
				<div class="pro-extend-tips">温馨提示：IMEI/SN/MEID号可在产品外包装上找到，可拆卸电池的手机可将电池拆掉电池下面的标签上可以看到，手机上输入*#06#也可以显示。</div>
				<div class="pro-extend-button">
					<a id="button-extend" class="button-style-disabled-1 button-go-extend-checkout-disabled" href="javascript:;" title="提交订单" onclick="ec.product.extendBuy(this)"><span>提交订单</span></a>
				</div>
		</div>
	</div>
</div><!-- 20130913-弹出层-购买延保-end -->
<!-- Baidu Button BEGIN -->
<div class="pro-bdShare-area">
	<div id="bdshare" class="bdShare bdshare_t bds_tools get-codes-bdshare" data="{'url':'http://shopcn.huawei.com/item/154411301.html'}">
	</div>
</div>
<form action="#" id="gotourl" method="get"></form>
<script>
	ec.code.addShare({
		title : "我在@华为 发现了一个非常不错的商品：HUAWEI P9 4GB 64GB 全网通版（琥珀金） 华为价：￥ 3688.00。分享一下："
	});

	//去结算
	ec.product.gotoshoppingCart = function(){
		//BI统计
		_paq.push(['trackLink','加入购物车-去支付', 'link', ' ']);
		ec.code.addAnalytics({hicloud:true});
		setTimeout(function () {
			//var url = '/order/shoppingCart';
			var url = 'http://shopcn-cart.huawei.com/cart/cart.html';
			$('#gotourl').attr('action', url).submit();
		}, 500);
	};
</script>
<!-- Baidu Button END -->           
	</div>
        </div>
        
        <div class="left-area">
        	<!--商品简介-图片画廊 -->
        	<div class="pro-gallery-area">
        		<!-- 左边大照片 -->
            	<div class="pro-gallery-img" id="pro-gallery-img">
            			<br/><br/><br/><br/>
					<p id="product-img" >
						@foreach($pic as $pc)
						<img id="img" src="{{ asset('phoneImg') }}/{{ $pc }}" alt="HUAWEI P9"/>
						@endforeach
					</p>
				</div>
				<!-- 左边大照片结束 -->
            </div>
        </div>
    </div>
</div>
<div class="hr-85"></div>
<!--到货通知弹出框-->
<textarea id="product-arrival-html" class="hide">
	<div class="arrival-remind-area">
		<ul class="clearfix">
			<li id="arrival-email">
				<p class="a-title">邮件通知</p>
				<p id="account-email" class="a-txt">xxxxxxxxxxxxxxxxxxxx@huawei.com</p>
			</li>
			<li id="arrival-mobile">
				<p class="a-title">短信通知</p>
				<p id="account-mobile" class="a-txt">185&nbsp;6644&nbsp;5856</p>
			</li>		
		</ul>
	</div>
	<div class="box-custom-button">
		<input type="submit" class="box-ok box-button-style-1" value="提交"/>
	</div>
	<div id="arrival-error" class="box-form-tips hide">
		<span class="icon-error">输入有误</span>
	</div>
</textarea>
<!-- 20150331-咨询提交成功提示-start -->
<textarea id="product-counsel-html" class="hide">
    <div class="box-prompt-success-area">
		<div class="h">
		<i></i>
		</div>
		<div class="b">
			<p>咨询提交成功，请耐心等待客服人员的答复。</p>
			<p id="counsel-success-msg">回复将发送到您的安全邮箱，您还未绑定，请先绑定安全邮箱。</p>
		</div>
	</div>
	<div id="counsel-bind-email" class="box-custom-button">
	    <a href="javascript:;" class="box-change box-button-style-2" target="_blank" onclick="ec.product.secEmailOper()"><span>去绑定</span></a>
	</div>
</textarea>  	
<textarea id="product-attention-html" class="hide">
<!-- 20130423-表单-关注-start -->
<div class="form-interest-area">
	<div class="form-edit-area">
		<form method="post" onsubmit="return false;">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody><tr>
				<th>邮箱地址</th>
				<td><input class="text vam span-300" maxlength="50" name="email" value="" type="text"></td>
			</tr>
			<tr>
				<th>手机号码</th>
				<td><input class="text vam span-300" maxlength="12" name="mobile" value="" type="text"></td>
			</tr>
		</tbody></table>
		</form>
	</div>
	<div class="form-edit-action"><input class="button-action-submit-2 box-ok" value="" type="submit"></div>
</div><!-- 20130423-表单-关注-end -->
</textarea>                    
<script type="text/javascript">
	function addCart(goodsId){
		alert('lll');
	}
</script>
<script src="{{ asset('shop/Scripts/07cc059a7ed741a3a8805405e7cfc979.js') }}"></script>
<script>
	(function(){
	var hash = location.hash, skuId = 0, virId = 0,
		cateList = [];


	if(hash.length > 1) {
		var skuInfo = hash.split('#', 2)[1];
		skuId = (skuInfo.length > 1) ? (parseInt(skuInfo.split(',', 2)[0], 10) || 0) : 0;
		virId = (skuInfo.length > 1) ? (parseInt(skuInfo.split(',', 2)[1], 10) || 0) : 0;
	} 

	if(virId > 0) {
		$.get('/category.json', {}, function (json) {
			if(!json.success) return;
			var lst = [];
			for (var i = 0; i < json.virtualList.length; i += 1) {
				lst = json.virtualList[i];
				cateList[lst.id] = lst.text;
			}
			$('#bread-pro-name').before(cateList[virId]);
		}, 'json');
		
	}
</script>
<script>
//��֤�Ƿ��п�棨ʵ����Ʒ��
ec.product.setType("normal");
ec.track99click({
	cid : "",
	id : "154411301"
});
</script><script>
(function () {
	//验证是否有库存（实体商品）
	ec.product.execute("renderInventory", [ec.product.inventory.haveInventory(ec.product.setSkuId || 555188138)]);
	
	// 自适配PC和客户端
	var wapUrl = window.location.href;	
	wapUrl = wapUrl.replace("www", "m");
	$("meta[name=mobile-agent]").attr('content', "format=xhtml;url=" + wapUrl);
})();
ec.load("ec.pager");
ec.ready(function(){
	 ec.product.allrenderPage({
		pageNumber : 1,
		totalPage : 1,
		recordCount : 0
	 });
	 ec.product.prdrenderPage({
		pageNumber : 1
	 });
	 ec.product.payrenderPage({
		pageNumber : 1
		});
	 ec.product.transrenderPage({
		pageNumber : 1
		});
	 ec.product.serrenderPage({
		pageNumber : 1
		});
	 ec.product.quesrenderPage({
		pageNumber :1 
		});
});
</script>

<script>
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var heightHeader=$("#pro-summary-area").offset().top;
		var heightArea=$("#pro-summary-area").height();
		var heightImg=$("#pro-gallery-img").height();
		var imgTop=heightArea-heightImg-20;
		var height=heightHeader+imgTop-100;
			
		if(_scrollTop >= heightHeader - 70){
			$("#pro-gallery-img").css("position","fixed").css("top",100);
			if( _scrollTop >= height){
			$("#pro-gallery-img").css("position","absolute").css("top",imgTop);
			}
		}
		else{
		$("#pro-gallery-img").css("position","absolute").css("top",27)
		}
	};
</script>

<div class="g-foot-able cbg-centered">
        <div class="cbg-wrapper able-outer">
            <ul class="able-inner">
                <li class="able-item able-item-service">
                    <span class="tit">服务热线<i></i></span>
                    <div class="intro">
                        <p class="tel">400-830-8300 / 800-830-8300（座机）</p>
                        <p class="time">普通话 7*24小时</p>
                    </div>
                </li>
                <li class="line"></li>
                <li class="able-item able-item-wx"><a class="tit" href="javascript:;">微信客服<i></i><span class="qrcode"><b></b></span></a></li>
                <li class="line"></li>
                <li class="able-item able-item-online"><a class="tit" href="http://robotim.vmall.com/live800/chatClient/chatbox.jsp?companyID=8922&configID=37&policyId=1&location=B_001&chatfrom=web&enterurl=http://consumer.huawei.com/cn/support/index.htm&pagereferrer=http://consumer.huawei.com/cn/support/index.htm" rel="nofollow"target="_blank">在线客服<i></i><span class="qrcode"><b></b></span></a></li>
                <li class="line"></li>
                <li class="able-item able-item-retail"><a class="tit" href="http://consumer.huawei.com/cn/support/where-to-buy/index.htm" target="_blank">查找零售店<i></i></span></a></li>
            </ul>
        </div>
</div>

    <div id="cbg-footer-nav" class="cbg-centered cbg-dark" data-auto-tracking="true" data-t-act="footer">
        <div class="cbg-overlay"></div>
        <div class="cbg-wrapper">
            <ul class="cbg-inline web-links">
                <li class="col-1">
                    <h3>购买产品</h3>
                    <ul>
                        <li><a href="http://consumer.huawei.com/cn/mobile-phones/index.htm">智能手机</a></li>
                        <li><a href="http://consumer.huawei.com/cn/tablets/index.htm">笔记本&平板</a></li>
                        <li><a href="http://consumer.huawei.com/cn/wearables/index.htm">智能穿戴</a></li>
                        <li><a href="http://consumer.huawei.com/cn/mobile-broadband/mobile-wifi/index.htm">移动宽带</a></li>
                        <li><a href="http://consumer.huawei.com/cn/smart-home/index.htm">智能家居</a></li>
                        <li><a href="http://consumer.huawei.com/cn/accessories/index.htm">配件</a></li>
                    </ul>
                </li>
                <li class="col-2">
                    <h3>购物支持</h3>
                    <ul>
                        <li><a href="http://consumer.huawei.com/cn/help/purchase/index.htm">购买指南</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/quick-pay/index.htm">快捷支付</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/shpping-area/index.htm">配送范围与费用</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/search-order/index.htm">查询订单</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/certification/index.htm">实名认证</a></li>
                    </ul>
                </li>
                <li class="col-3">
                    <h3>服务与支持</h3>
                    <ul>
                        <li><a href="http://consumer.huawei.com/cn/support/warranty-policy/mobile-phone/index.htm">保修政策</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/returns/index.htm">退换货政策</a></li>
                        <li><a href="http://consumer.huawei.com/cn/help/shipping-status/index.htm">物流查询</a></li>
                        <li><a href="http://consumer.huawei.com/cn/support/reservation/index.htm">预约服务</a></li>
                        <li><a href="http://consumer.huawei.com/cn/support/express-repair/index.htm">寄修服务</a></li>
                    </ul>
                </li>

                <li class="col-2">
                    <h3>关于我们</h3>
                    <ul>
                        <li><a href="http://consumer.huawei.com/cn/about-us/index.htm">关于我们</a></li>
                        <li><a href="http://www.vmall.com/huawei#cid=10023" target="_blank">华为商城</a></li>
                        <li><a href="http://e.huawei.com/cn" target="_blank">企业业务</a></li>
                        <li><a href="http://www.huawei.com/cn/carrier/" target="_blank">运营商网络</a></li>
                        <li><a href="http://www.huaweimarine.com/marine/" target="_blank">华为海洋</a></li>
                        <li><a href="http://www.huawei.com/cn/" target="_blank">华为集团</a></li>
                        <li><a href="http://career.huawei.com/recruitment/" target="_blank">加入华为</a></li>
                    </ul>
                </li>
                <li class="col-4">
                    <h3>新闻中心</h3>
                    <ul>
                        <li><a href="http://consumer.huawei.com/cn/press/news/index.htm">华为新闻</a></li>
                        <li><a href="http://consumer.huawei.com/cn/press/media-coverage/index.htm">媒体报道</a></li>
                        <li><a href="http://consumer.huawei.com/cn/press/video/index.htm">华为视频</a></li>
                    </ul>
                </li>
                <li class="col col-5 cbg-last m-share">
                    <dl class="share-us">
                        <dt class="dt">关注我们</dt>
                        <dd class="dd clearfix">
                            <a class="ico-item ico-item-sina" href="http://t.sina.com.cn/huaweidevice" target="_blank"><i class="ico-sina">新浪微博</i></a>
                            <a class="ico-item ico-item-wx" href="javascript:;" target="_blank">
                                <i class="ico-wx">微信</i>
                                <span class="qrcode"><b></b></span>
                            </a>
                        </dd>
                    </dl>
                    <dl class="share-club">
                        <dt class="dt">关注花粉俱乐部</dt>
                        <dd class="dd clearfix">
                            <a class="ico-item" href="http://club.huawei.com/" target="_blank"><i class="ico-club">EMUI</i></a>
                            <a class="ico-item ico-item-wx" id="footWXTar" href="javascript:;" target="_blank">
                                <i class="ico-wx cbg-icon-wechat">微信</i>
                                <span class="qrcode"><b></b></span>
                            </a>
                            <a class="ico-item" href="http://weibo.com/huafans" target="_blank"><i class="ico-sina">新浪微博</i></a>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>

    <div id="cbg-footer-links" class="cbg-centered cbg-dark">
        <div class="cbg-clearfix cbg-wrapper">
            <ul class="cbg-inline">
                <li><a href="http://consumer.huawei.com/cn/site-map/index.htm">网站地图</a></li>
                <li><a href="http://consumer.huawei.com/cn/contact-us/index.htm">联系我们</a></li>
                <li><a href="http://consumer.huawei.com/en/certification/index.htm">版权申明</a></li>
                <li><a href="http://consumer.huawei.com/cn/terms-of-use/index.htm">法律声明</a></li>
                <li><a href="http://consumer.huawei.com/cn/privacy-policy/index.htm">隐私政策</a></li>
            </ul>
            <p class="copyright">
                版权所有 © 华为技术有限公司 1998-2016。保留一切权利。
                <a href="http://www.miitbeian.gov.cn/" target="_blank">粤A2-20044005号</a>
                <a href="http://consumer.huawei.com/cn/worldwide/index.htm" class="cbg-icon-flag cbg-icon-flag-china"
                   title="选择语言/地区">中国</a>
            </p>
        </div>
    </div>

<!--确认对话框-->
<div id="ec_ui_confirm" class="popup-area popup-define-area hide">
    <div class="b">
        <p id="ec_ui_confirm_msg"></p>
        <div class="popup-button-area"><a id="ec_ui_confirm_yes" href="javascript:;" class="button-action-yes" title="是"><span>是</span></a><a id="ec_ui_confirm_no" href="javascript:;" class="button-action-no" title="否"><span>否</span></a></div>
    </div>
    <div class="f"><s class="icon-arrow-down"></s></div>
</div>

<!--新确认对话框-->
<div id="ec_ui_confirm_new" class="popup-area-new hide">
	<div class="b">
		<p id="ec_ui_confirm_new_msg"></p>
		<div class="popup-button-area"><a id="ec_ui_confirm_new_yes" href="javascript:;" class="box-button-style-1" title="是"><span>是</span></a><a id="ec_ui_confirm_new_no" href="javascript:;" class="box-button-style-1" title="否"><span>否</span></a></div>
	</div>
	<div class="f"><s class="icon-arrow-down-new"></s></div>
</div>

<!--提示对话框-->
<div id="ec_ui_tips" class="popup-area popup-define-area hide">
    <div class="b">
        <p id="ec_ui_tips_msg" class="tac"></p>
        <div class="popup-button-area tac"><a id="ec_ui_tips_yes" href="javascript:;" class="button-action-yes" title="确定"><span>确定</span></a></div>
    </div>
    <div class="f"><s class="icon-arrow-down"></s></div>
</div>

<div id="globleParameter" class="hide" context="" stylePath="http://shopcn-res.huaweistatic.com/integration/cssHuawei" scriptPath="http://shopcn-res.huaweistatic.com/integration/js" imagePath="http://shopcn-res.huaweistatic.com/integration/images" mediaPath="http://shopcn-res.huaweistatic.com/integration/pimages" ></div>

</body>
<!-- 自己写的jq -->
<script type="text/javascript">
	$.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    //点击颜色
	$(".CheckColor").click(function(){
		var colors = $(this).html();
		//获取节点写入购买商品处的颜色
		var col = document.getElementById("cl");
		//赋值
		col.innerHTML = colors;
		var pid = $("#hidden").val();
		$.ajax({
			type:"get",
			data:{goodsColor:colors,goodsId:pid},
			url:"{{ url('/color') }}",
			dataType:'json',
			success:function(data)
            {
            	$("#zs>button").remove();
            	for (var i = 0; i < data.length; i++) {
            		$("#zs").append('<button class="btn  btn-success btn-lg" onclick="clickFunc(this);">'+data[i].goodsMassage+"</button>&nbsp;");
            	};
            	
            },
            error:function()
            {
                alert('异常1');
            },     
		});		
	});
	function clickFunc(_this)
	{
        var size = $(_this).html();
        var color = $("#colorui").val();
        var pid = $("#hidden").val();
        $.ajax({
            type:"get",
            data:{goodsColor:color,goodsId:pid,goodsMassage:size},
            url:"{{ url('/massage') }}",
            dataType:'json',
			success:function(data)
            {
            	// alert(data.id);	//商品id
            	$("#llalal>p").remove();
            	$("#sz>b").remove();
            	$("#llalal").append('<p >'+data.goodsPrice+"</p>");
            	$("#sz").append('<b>'+size+"</b>");
            	$("#gid").append('<p>'+data.id+"</p>");
            		// 显示"加入购物车"和"下单"
            		$("#dxid").attr("style","display:brack");
            		//把商品详情表的id带到下个页面
           			$("#gwc").attr("href","{{ URL('/lo/') }}/"+data.id);
           			$("#dxid").attr("href","{{ URL('/lo/') }}/"+data.id);
            		
            },
            error:function(data)
            {
                alert('异常2');
            },     
        });     
    }
</script>

</html>
@endsection
