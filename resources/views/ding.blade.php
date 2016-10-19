
<!DOCTYPE html>
<html><head><iframe src="javascript:false" style="display: none;"></iframe><script id="ha" async="" src="list/ha.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="X-UA-Compatible" content="IE=edge; charset=utf-8">
<script src="list/analytics.js" async=""></script><script>
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
<title>确认订单华为</title>
<link rel="shortcut icon" href="http://www.vmall.com/favicon.ico">
<link href="list/ec.css" rel="stylesheet" type="text/css">
<link href="list/css_con_cn_ht_share_002.css" rel="stylesheet" type="text/css">

<link href="list/main.css" rel="stylesheet" type="text/css">
<link href="list/css_con_cn_ht_share.css" rel="stylesheet" type="text/css">
<script src="list/jsapi.js" namespace="ec"></script><!--[if lte IE 6]><script>ol.isIE6=true;</script><![endif]--><!--[if IE 7]><script>ol.isIE7=true;</script><![endif]--><!--[if IE 8]><script>ol.isIE8=true;</script><![endif]-->
<!--[if lt IE 9 ]>
<script type="text/javascript" src="http://www.huawei.com/Assets/CBG/js/respond.min.js"></script>
<![endif]-->
<script src="list/script_dev_en_jquery_min.js"></script>
<script src="list/ec_002.js"></script> 
<script src="list/ec.js"></script> 
<!--[if lt IE 9]><script src="http://shopcn-res.huaweistatic.com/integration/js/common/html5shiv.js"></script> <![endif]-->
<script src="list/script_con_cn_ht_share.js"></script>
<script src="list/pc-g-analytics.js"></script>

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



<body class="wide order cbg insert-cbg-header">

<input id="casLoginUrl" name="casLoginUrl" value="https://hwid1.vmall.com/CAS/remoteLogin?loginChannel=27000000&amp;reqClientType=27&amp;loginUrl=http%3A%2F%2Fconsumer.huawei.com%2Fcn%2Faccount%2Flogin%2Findex.htm&amp;service=http%3A%2F%2Fshopcn.huawei.com%2Faccount%2Fcaslogin%3Furl%3D" type="hidden">
<script src="list/base.js"></script>
<script>
ec.mediaPath = "http://shopcn-res.huaweistatic.com/integration/pimages";
//document.write('<script src="/account/status?'+(new Date()).getTime()+'"></s' + 'cript>');
/**
*功能：给鼠标移动到s-dropdown上面的时候，记得给他多添加一个hover类样式
*目的是兼容ie6
*@author 李峰
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

<!--头部 -->

<div class="order-header" style="margin-top:40px;">
	<div class="g">
    	<div class="fl">
            <h1 id="headerWord">填写核对订单</h1>
        </div>
        <div class="fr">
            <!--步骤-两步骤 -->
            <div class="progress-area progress-area-2">
                <!--核对订单 -->
                <div style="display: block;" id="progress-confirm" class="progress-co-area hide">填写核对订单信息</div>
                <!--成功提交订单 -->
                <div id="progress-submit" class="progress-sso-area hide">成功提交订单</div>
            </div>
        </div>
    </div>
</div>
<script>ec.code.addService({showService : true , showTools : true});</script>

<textarea class="hide" id="ec-binding-phone">	&lt;div 
id="ec-binding-phone-1" class="ec-binding-phone-box hide"&gt;
		&lt;!-- 20141011-绑定安全手机号提示-start --&gt;
		&lt;div class="safetyPhone-prompt-area"&gt;
			&lt;div class="h"&gt;
				&lt;i&gt;&lt;/i&gt;
			&lt;/div&gt;
			&lt;div class="b"&gt;
				
&lt;p&gt;为了给您提供更好的服务，建议您将登录的邮箱帐号进行手机号码绑定，绑定后邮箱帐号和绑定的手机号码都可以作为登录帐号，&lt;em
 style="font-color:red;"&gt;不绑定将不能提交订单。&lt;/em&gt;&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="box-custom-button"&gt;
			&lt;a class="box-button-style-3" href="javascript:;" 
id="ec-binding-phone-url-1"&gt;&lt;span&gt;立即绑定&lt;/span&gt;&lt;/a&gt;&
lt;/a&gt;
		&lt;/div&gt;
		&lt;!-- 20141011-绑定安全手机号提示-end --&gt;
	&lt;/div&gt;
	&lt;div id="ec-binding-phone-2" class="ec-binding-phone-box hide"&gt;
		&lt;!-- 20141424-绑定安全手机号提示-start --&gt;
		&lt;div class="safetyPhone-prompt-area"&gt;
			&lt;div class="h"&gt;
				&lt;i&gt;&lt;/i&gt;
			&lt;/div&gt;
			&lt;div class="b"&gt;
				&lt;p&gt;请您在新打开的页面中完成绑定安全手机号操作。&lt;/p&gt;
				&lt;p&gt;完成绑定后请根据您的情况点击下面的按钮。&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="box-custom-button"&gt;
			&lt;a class="box-button-style-3" href="javascript:;" 
onclick="ec.binding.resetShow()"&gt;&lt;span&gt;绑定成功&lt;/span&gt;&lt;/a&
gt;&lt;a class="box-change box-button-style-3" href="javascript:;" 
target="_blank" 
id="ec-binding-phone-url-2"&gt;&lt;span&gt;重新绑定&lt;/span&gt;&lt;/a&gt;
		&lt;/div&gt;
		&lt;!-- 20141424-绑定安全手机号提示-end --&gt;
	&lt;/div&gt;
	&lt;div id="ec-binding-phone-3" class="ec-binding-phone-box hide"&gt;
		&lt;!-- 20141424-安全手机号绑定提示失败-start --&gt;
		&lt;div class="box-prompt-error-area"&gt;
			&lt;div class="h"&gt;
				&lt;i&gt;&lt;/i&gt;
			&lt;/div&gt;
			&lt;div class="b"&gt;
				&lt;p class="tal f12"&gt;对不起，您未成功绑定手机号。&lt;/p&gt;
				&lt;p class="tal f12 
black"&gt;为了您在华为正常购物、保护您的权益，请您绑定一个手机号码以享受华为的所有服务。&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="box-custom-button"&gt;
			&lt;a href="javascript:;" class="box-button-style-3" 
onclick="ec.binding.showOk()" id="ec-binding-phone-url-3" 
&gt;&lt;span&gt;立即绑定&lt;/span&gt;&lt;/a&gt;
		&lt;/div&gt;
		&lt;!-- 20141424-安全手机号绑定提示失败-end --&gt;
	&lt;/div&gt;
	&lt;div id="ec-binding-phone-4" class="ec-binding-phone-box hide"&gt;
		&lt;!-- 20150824-手机号绑定未绑定-start --&gt;
		&lt;div class="safetyPhone-prompt-area"&gt;
			&lt;div class="h"&gt;
				&lt;i&gt;&lt;/i&gt;
			&lt;/div&gt;
			&lt;div class="b"&gt;
				&lt;p class="tal 
f12"&gt;为了给您提供更好的服务，建议您将登录的邮箱帐号进行手机号码绑定，绑定后邮箱帐号和绑定的手机号码都可以作为登录帐号；&lt;em 
style="font-color:red;"&gt;自&lt;/em&gt;&lt;em id="bindEndDate4State4" 
style="font-color:red;"&gt;&lt;/em&gt;&lt;em 
style="font-color:red;"&gt;号起，若不绑定将不能提交订单。&lt;/em&gt;&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div&gt;&nbsp;&lt;/div&gt;
		&lt;div class="box-custom-button"&gt;
			&lt;a class="box-change box-button-style-3" href="javascript:;" 
id="ec-binding-phone-url-4"&gt;&lt;span&gt;立即绑定&lt;/span&gt;&lt;/a&gt;
			&lt;a class="box-button-style-1" href="javascript:;" 
onclick="ec.binding.closeState4();"&gt;&lt;span&gt;下次再说&lt;/span&gt;&lt;
/a&gt;
		&lt;/div&gt;
		&lt;!-- 20150824-安全手机号绑定提示失败-end --&gt;
	&lt;/div&gt;
	&lt;div id="ec-binding-phone-5" class="ec-binding-phone-box hide"&gt;
		&lt;!-- 20141424-安全手机号绑定提示失败-start --&gt;
		&lt;div class="box-prompt-error-area"&gt;
			&lt;div class="h"&gt;
				&lt;i&gt;&lt;/i&gt;
			&lt;/div&gt;
			&lt;div class="a"&gt;
				&lt;p class="tal 
f12"&gt;您输入的手机已被注册，你可以选择使用手机号重新登录或者重新绑定手机！&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div&gt;&nbsp;&lt;/div&gt;
		&lt;div class="box-custom-button"&gt;
			&lt;a class="box-button-style-3" 
href="http://shopcn.huawei.com/account/login" 
id="ec-binding-phone-reLogin-5"&gt;&lt;span&gt;重新登录&lt;/span&gt;&lt;/a&
gt;')
			&lt;a class="box-change box-button-style-3" href="javascript:;" 
id="ec-binding-phone-url-5"&gt;&lt;span&gt;重新绑定&lt;/span&gt;&lt;/a&gt;
		&lt;/div&gt;
		&lt;!-- 20141424-安全手机号绑定提示失败-end --&gt;
	&lt;/div&gt;
</textarea><script>
$("#progress-confirm").show();
</script>

<script>window._to = { start: new Date() };</script>
<script>document.body.className = "wide order cbg insert-cbg-header";</script>

<div class="layout order">
	<!--栏目 -->

	<!--订单-表单 -->
	<div class="order-form-area">

     <!-- ************************【start 新的地址  edit by wangshaohua  】******************************************************************  -->		
	    	<!-- 20140813-订单-表单-地址-start -->
    	<div class="order-address" id="order-address-mod">
    	
			<h3 class="title">收货人信息<b>[<a id="addAddress" href="javascript:;" onclick="ec.order.myAddress.add()">使用新地址</a>]</b></h3>
			<div style="display: none;" class="order-address-list" id="order-address-list">
				<ol>
				</ol>
			</div>
			<!-- 20140813-订单-表单-地址-空数据-start -->
			<div class="order-address-empty" id="order-address-empty">您还没有收货地址，马上&nbsp;<a id="creatAddress" href="javascript:;" onclick="ec.order.myAddress.add()">添加</a>&nbsp;吧！</div><!-- 20140813-订单-表单-地址-空数据-end -->
			<div id="address-more" class="hide">
				<a href="javascript:;" class="address-expand">更多地址<i></i></a>
			</div>
			<input name="orderDistrict" id="order-district" type="hidden">
            </div><!-- 20140813-订单-表单-地址-end -->
	<!--  *******************************【end 新的地址 】************************************************************  -->
		
		<!--订单-表单-配送方式-20121012 
		<div class="order-delivery">
			<h3 class="title">配送方式</h3>
			<div class="order-form-tips" id="order-delivery-tips">
				<p>请先选择并确认收货人信息！</p>
				<s></s><b></b>
			</div>
			<ul class="order-delivery-list" id="order-delivery-list">
			</ul>
		</div>
		订单-表单-配送方式结束 -->
		
		<!-- 20160413-订单-表单-备注-start
        <div class="order-invoice">
        	<h3 class="title">订单备注</h3>
        	<input id="note-input" name="note-input" type="text" placeholder="仅对特定商品有效，不可修改" class="text">
        	<span id="orderNoteError"></span>
        </div> -->
        <!-- 20160413-订单-表单-备注-end -->
		
		<!--     新的发票信息     【start】      --><!--modify by l00222000 增加支持电子发票 20150320-->
				<div class="order-invoice">
        	<h3 class="title">发票信息<em>（请谨慎选择发票抬头，订单出库后不能修改）</em></h3>
			<div class="order-invoice-list" id="order-invoice-area">
				<ul class="clearfix">
					<li>
						<div class="invoice-main">
							<input name="titleType" id="titleType-per" class="radio" value="1" checked="checked" seed="Invoice_1" type="radio"><label for="titleType-per">个人</label>
						</div>
					</li>
					<li>
						<div class="invoice-main">
							<input name="titleType" id="titleType-com" class="radio" value="2" type="radio"><label for="titleType-com">单位</label>
						</div>
						<div class="invoice-sub">
							<label><input style="" id="invoiceTitle-com" placeholder="请输入单位名称，勿填无关信息" class="text vam" seed="Invoice_content" disabled="disabled" type="text"><span id="companyError"></span></label>
						</div>
					</li>
					
                    <!-- 灰色状态className " invoice-main-disabled " -->
					<input id="selfAllSkuIds" value="555188138" type="hidden">
					<input id="huaweiTerminalName" name="huaweiTerminalName" value="华为终端有限公司" type="hidden">
				</ul>
			</div>
			<p class="tips"><em>注意：</em>如果商品由第三方卖家销售，发票内容由其卖家决定，发票由卖家开具并寄出</p>
        </div>
		<!--    新的发票信息【End】            --><!--modify by l00222000 增加支持电子发票 20150320-->
		
		<form id="order-confirm-form" action="/order/createcart" autocomplete="off" method="post">
			<input name="consigneeAddressId" id="order-address" type="hidden">
			<input name="deliveryMethod" id="order-deliveryMethod" value="1" type="hidden">
			<input name="paymentMethod" id="order-paymentMethod" value="" type="hidden">
			<input name="paymentType" id="order-paymentType" value="" type="hidden"> 
			<input name="invoiceTitle" id="order-invoiceTitle" type="hidden">
			<input name="titleType" id="order-titleType" type="hidden">
			<input name="custMessage" id="order-custMessage" type="hidden">
			<input name="couponCode" id="order-couponCode" type="hidden">
			<input name="activityId" id="order-activityId" value="" type="hidden"> 
			<input name="state" id="order-state" value="0" type="hidden">
			<input name="paramExtra" id="order-paramExtra" value="" type="hidden"> 
			<input name="skuIds" value="555188138" type="hidden">
			
			
			<input name="answer" id="answer" type="hidden">
			<input name="petalNumber" id="order-huaban" type="hidden">
			<!-- 团购所需参数 -->
			<input id="orderTag" name="orderTag" value="" type="hidden">
			<input name="sbs" value="555188138" type="hidden">
			<input name="types" value="1" type="hidden">
			<input name="qtys" value="1" type="hidden">
			<input name="ess" value="" type="hidden">
			<input name="ass" value="" type="hidden">
			<input name="orderNote" id="order-note" type="hidden">
			<input name="_sf" value="c3b4d1ea759d1b8de6760df873d12958" type="hidden">
		</form>
	</div>
	<div class="sc-area">
	<!--如果有自营商品，展示自营商品-->
	<!--购物车 -->
	<!--兼容秒杀订单-->
	  <h3 class="title">以下商品由&nbsp;&nbsp;<b>华为</b>&nbsp;&nbsp;选择合作快递配送</h3>
	  <div class="dt-order-area">
		<!-- 20140630-自营商品订单-start -->
	    <div class="order-pro-list" id="order-pro-list">
			<!--购物车-商品列表-20121016 start-->
			<div class="order-pro-list">
				<!--订单-商品-标题 -->
				<div class="order-pro-title-area">
					<div class="b">
						<table border="0" cellpadding="0" cellspacing="0">
							<thead>
								<tr>
									<th class="tr-pro">商品</th>
									<th class="tr-price">单价（元）</th>
									<th class="tr-quantity">数量</th>
									<th class="tr-subtotal">小计（元）</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
				<!--订单-商品-标题 -->
			<!--订单-商品-套餐-->
				<!--订单-商品-套餐  End-->
				
				<!--订单-商品-普通商品-->
				<div class="order-pro-area">
					<table border="0" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td class="tr-pro">
									<ul class="pro-area-2">
										<li>
										  <a title="{{ URL('goodsqiname') }} {{ URL('goodsMassage') }} {{ URL('doogsTypes') }} {{ (URL('goodsColor')) }}" target="_blank" href="http://shopcn.huawei.com/item/154411301.html#555188138" seed="item-name">{{ URL('goodsqiname') }} {{ URL('goodsMassage') }} {{ URL('doogsTypes') }} {{ (URL('goodsColor')) }}</a>
										</li> 
									 </ul>
								 </td>
								<!-- 预付订金商品的价格为空 -->
								<td class="tr-price">¥{{ URL('goodsPrice') }}</td>
								<td class="tr-quantity">1</td>
								<td rowspan="1" class="tr-subtotal">
								<p><b>¥3688.00</b></p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- 预付订金 start-->
				<!-- 预付订金 end-->
				<!--订单-商品-普通商品 End-->
			</div><!--购物车-商品列表-20121016 end-->
		</div>
		<!--购物车-自营商品列表结束 -->
		<!-- 20140627-商品结算-start -->
		<div class="order-pro-total clearfix">
		   	<div class="fl">
				   <!-- 20140628-订单-表单-花瓣-start -->
				<!--  20140628-订单-表单-花瓣-end --> 
				 </div>
				 <div class="fr">
					<!-- 20140630-订单-金额-start -->
					<div class="order-cost-area">
						<table border="0" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td class="tal">商品总金额：</td>
								<td class="tar">&nbsp;¥&nbsp;
								   <em id="order-cost-area" data-oldval=" 3688.00">3688.00</em>
								</td>
							</tr>
							<tr>
								<td class="tal">运费：</td>
								<td class="tar">&nbsp;¥&nbsp;
									   <em id="order-deliveryCharge">0.00</em> 
								</td>
							</tr>
							<tr>
								<td class="tal">商家活动：
								</td>
								<td class="tar">-&nbsp;¥&nbsp;<em>0.00</em>
								</td>
							</tr>
						</tbody>
					</table>
						<p class="order-cost-total">
						  <span class="p-subtotal-price"> 应付金额：<b class="total">¥</b><b class="total" id="order-price" data-oldval="3688.00">3688.00</b></span>
					    </p>
					</div><!-- 20140630-订单-金额-end -->
				</div>
		    </div>
		    <!-- 20140627-商品结算-end -->
		    
		    		
			<!--自营订单-赠品   -start-->
			<div id="order-gift-area" class="order-gift-area hide">
				
					<div id="premiumsList" class="hide"></div>
			</div>
			<!--自营订单-赠品-end-->
			
			
		  </div>
		
		
		<!--展示代销商品 start-->
		 <!-- 代销商品展示结束 -->
		 
	    	<!-- 提交订单start-->
			<div class="order-action-area tar">
				<!-- 20140630-订单-下单验证-start -->
				<div class="order-protect">
				</div>
				<!-- 20140630-订单-下单验证-end -->
				   <span class="p-subtotal-price">应付总额：<b>¥<span id="payableTotal"></span></b></span>
				<a href="javascript:;" onclick="ec.order.submit();" class="button-style-1 button-submit-order" title="提交订单" seed="checkout-submit"><span>提交订单</span></a>
			</div>
		  <!-- 提交订单end-->
	</div>
</div>
<div class="hr-45"></div>
<!-- 优惠活动列表 -->
<textarea id="order-promoPremiums-tpl" class="hide">	&lt;!--#macro promoPremiums data--&gt;
	&lt;table cellspacing="0" cellpadding="0" border="0"&gt;
		&lt;tbody&gt;
	&lt;!--#list data as lst--&gt;
		&lt;tr&gt;
				&lt;td class="tal"&gt;
		&lt;dl&gt;
			&lt;dt&gt;{#lst.premiumsName}&lt;/dt&gt;
			&lt;dd&gt;商家活动：{#lst.promoCampaignName} &lt;/dd&gt;
		&lt;/dl&gt;
		&lt;/td&gt;
		&lt;td class="tr-span-3"&gt;&lt;em&gt;1个&lt;/em&gt;
				&lt;/td&gt;
		&lt;td class="tr-span-4"&gt;&nbsp;&lt;/td&gt;
		&lt;/tr&gt;
	&lt;!--/#list--&gt;
	&lt;/tbody&gt;
	&lt;/table&gt;
	&lt;!--/#macro--&gt;
</textarea>

<!-- 优惠卷列表 -->
<textarea id="order-coupon-tpl" class="hide">	&lt;!--#macro orderCoupon data--&gt;
	&lt;!--#list data as lst--&gt;
	&lt;option value="{#lst.couponCode}"&gt;{#lst.couponName}&lt;/option&gt;
	&lt;!--/#list--&gt;
	&lt;!--/#macro--&gt;
</textarea>

<!-- 快递列表 -->
<textarea id="order-delivery-tpl" class="hide">	&lt;!--#macro orderDeliveryTpl data--&gt;
		&lt;!--#list data as lst--&gt;
		&lt;li&gt;
			&lt;input type="radio" name="deliveryMethod" class="radio vam"
		id="deliver-{#lst.id}" value="{#lst.id}"
		data-price="{#lst.deliveryCharge}" /&gt;
			&lt;label for="deliver-{#lst.id}" class="vam"&gt;
				{#lst.name}
				&lt;span class="vam"&gt;运费&nbsp;&nbsp;¥{#lst.deliveryCharge.toFixed(2)}&lt;/span&gt;
			&lt;/label&gt;
			&lt;!--#if (lst.freeBase) --&gt;
				&lt;span class="icon-over vam"&gt;买满{#lst.freeBase}元免运费&lt;/span&gt;
			&lt;!--/#if--&gt;
		&lt;/li&gt;
		&lt;!--/#list--&gt;
	&lt;!--/#macro--&gt;
</textarea>

<!--收货人地址 start-->
<textarea id="order-address-template" class="hide">	&lt;!--#macro 
defaultInfo data--&gt;
	&lt;div class="form-detail-area"&gt;	
	&lt;table cellspacing="0" cellpadding="0" border="0"&gt;
		&lt;tbody&gt;
			&lt;tr&gt;
				&lt;th&gt;收&nbsp;&nbsp;货&nbsp;&nbsp;人：&lt;/th&gt;
				&lt;td&gt;{#data.consignee?html}&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;th&gt;收货地址：&lt;/th&gt;
				&lt;td&gt;
					
{#data.provinceName}{#data.cityName}{#data.districtName}{#data.streetName}&nbsp;{#data.address?html}

				&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;th&gt;邮政编码：&lt;/th&gt;
				&lt;td&gt;{#(data.zipCode || "")?html}&lt;/td&gt;
			&lt;/tr&gt;
			&lt;!--#if (data.mobile) --&gt;
			&lt;tr&gt;
				&lt;th&gt;手机号码：&lt;/th&gt;
				&lt;td&gt;{#data.mobile?html}&lt;/td&gt;
			&lt;/tr&gt;
			&lt;!--#else--&gt;
			&lt;tr&gt;
				&lt;th&gt;备选号码：&lt;/th&gt;
				&lt;td&gt;{#data.phone?html}&lt;/td&gt;
			&lt;/tr&gt;
			&lt;!--/#if--&gt;


		&lt;/tbody&gt;
	&lt;/table&gt;
	&lt;p&gt;
			&lt;a href="javascript:;" class="icon-edit fcn" title="更改收货人信息"
				
onclick="ec.order.myAddress.change()"&gt;更改收货人信息&nbsp;&gt;&gt;&lt;/a&gt;
		&lt;/p&gt;
    &lt;/div&gt;
	&lt;!--/#macro--&gt;

	&lt;!--#macro addressList data--&gt;
	&lt;dt&gt;常用地址：&lt;/dt&gt;
	&lt;!--#list data as lst--&gt;	
	&lt;dd id="myAddress-{#lst.id}"
		&lt;!--#if (lst.id == ec.order.myAddress.defaultId) --&gt; 
class="current"&lt;!--/#if--&gt;&gt;
		&lt;div class="fl"&gt;
			&lt;input &lt;!--#if (lst.id == ec.order.myAddress.defaultId) 
--&gt;checked &lt;!--/#if--&gt;type="radio" class="radio vat" 
name="myAddress" id="input-myAddress{#lst.id}" 
data-district="{#lst.district}" data-id="{#lst.id}" 
onclick="ec.order.myAddress.edit({#lst.id})" /&gt;
			&lt;label for="input-myAddress{#lst.id}"&gt;
				&lt;b&gt;{#lst.consignee?html}&lt;/b&gt;
				
&lt;i&gt;{#lst.provinceName}{#lst.cityName}{#lst.districtName}&nbsp;
{#lst.address?html}，&lt;/i&gt;
				&lt;span&gt;收货人：{#lst.consignee?html}，&lt;/span&gt;
				&lt;span&gt;电话：
					&lt;!--#if (lst.mobile) --&gt;
						{#lst.mobile?html}
					&lt;!--#else--&gt;
						{#lst.phone?html}
					&lt;!--/#if--&gt;
				&lt;/span&gt;
			&lt;/label&gt;
			&lt;em class="status vat tip"&gt;
				&lt;!--#if (lst.id ==ec.order.myAddress.defaultId) --&gt;
				默认地址&nbsp;&nbsp;&nbsp;
				&lt;!--#else--&gt;				
				&lt;a href="javascript:;" title="设为默认地址"
				onclick="ec.order.myAddress.setDetault({#lst.id})"&gt;
					设为默认地址
				&lt;/a&gt;
				&lt;!--/#if--&gt;
			&lt;/em&gt;
		&lt;/div&gt;
		
		&lt;div class="fr"&gt;

		&lt;em class="vat" id="address-del-{#lst.id}"&gt;
		&lt;!--#if (lst.id != ec.order.myAddress.defaultId) --&gt;
		&lt;a href="javascript:;" title="删除"
				
onclick="ec.order.myAddress.del({#lst.id})"&gt;删除&lt;/a&gt;&nbsp;&nbsp;&
nbsp;
		&lt;!--/#if--&gt;
		&lt;/em&gt;
		
		&lt;/div&gt;
		
	&lt;/dd&gt;
	&lt;!--/#list--&gt;
	

	&lt;!--QQ彩贝收货人地址 --&gt;
	&lt;!--#macro caibeiAddressList data--&gt;
	&lt;dt&gt;您是QQ彩贝用户，以下是您在QQ彩贝保存的地址：&lt;/dt&gt;
	&lt;!--#list data as lst--&gt;	
	&lt;dd id="myAddress-{#lst.id}"&gt;
		&lt;div class="fl"&gt;
			&lt;input type="radio" class="radio vat" name="myAddress"
				id="input-myAddress{#lst.id}" data-district="{#lst.district}"
				data-id="{#lst.id}" onclick="ec.order.myAddress.edit({#lst.id})" 
/&gt;
			&lt;label for="input-myAddress{#lst.id}"&gt;
				&lt;b&gt;{#lst.consignee?html}&lt;/b&gt;
				
&lt;i&gt;{#lst.provinceName}{#lst.cityName}{#lst.districtName}&nbsp;
{#lst.address?html}，&lt;/i&gt;
				&lt;span&gt;收货人：{#lst.consignee?html}，&lt;/span&gt;
				&lt;span&gt;电话：
					&lt;!--#if (lst.mobile) --&gt;
						{#lst.mobile?html}
					&lt;!--#else--&gt;
						{#lst.phone?html}
					&lt;!--/#if--&gt;
				&lt;/span&gt;
			&lt;/label&gt;
		&lt;/div&gt;
	&lt;/dd&gt;
	&lt;!--/#list--&gt;
	&lt;!--/#macro--&gt;
</textarea>
<!--收货人地址 end-->


<!-- 【新地址改造：添加地址修改地址    确认，删除  start】   -->
<div class="ol_box_4" style="width: 690px; display: none;" id="addAddressBox">
    <div class="box-ct">
        <div class="box-header">
            <div class="box-tl"></div>
            <div class="box-tc">
                <div class="box-tc1"></div>
                <div class="box-tc2"><a class="box-close" style="right:-20px;" title="关闭" onclick="return false;" href="javascript:;"></a><span class="box-title">添加地址</span></div>
            </div>
            <div class="box-tr"></div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td class="box-cl"></td>
                    <td class="box-cc">
                    	<div>
                        	<!-- 20140815-表单-地址-start -->
							<form action="" id="order-address-add-form" name="order-address-add-form">
								<div class="form-address-area">
									<div class="form-edit-area">
										<div class="form-edit-table">
											<table border="0" cellpadding="0" cellspacing="0">
												<tbody>
												<!--
													 <tr>
														<th>&nbsp;</th>
														<td><a href="javscript:;" title="您现在可以直接调用支付宝帐户的收货地址"><img class="vam" alt="使用支付宝地址" src="/images/echannel/btn/btn14.png"/></a></td>
													</tr> -->
													<tr>
														<th><span class="required">*</span><label for="">收货人：</label></th>
														<td><input name="consignee" class="text vam span-140" type="text"><span id="consigneeError"> </span></td>
													</tr>
													<tr>
														<th rowspan="2" class="vat"><span class="required">*</span><label for="">收货地址：</label></th>
                                                        <td name="myAddress-add-region" id="myAddress-add-region">
                                                         </td>
                                                        
													<td> </td>
													</tr>
													<tr>
														<td><textarea class="textarea span-500" placeholder="详细地址" name="address" seed="adress-detail"></textarea><span id="addressDetailError"></span> </td>
													</tr>
													<tr>
														<th><label for="">邮编：</label></th>
														<td><input name="zipCode" class="text vam span-80 ime-disabled" type="text"><span id="zipCodeError"></span>
														</td>
													</tr>
													<tr>
														<th><span class="required">*</span><label for="">手机号码：</label></th>
														<td><div class="vam inline-block"><input name="mobile" class="text span-140 ime-disabled" type="text"></div>&nbsp;&nbsp;
														    <label for="" class="vam">或固定电话：&nbsp;</label><div class="vam inline-block"><input name="phone" class="text  span-150 ime-disabled" placeholder="区号-主机-分机号" type="text"></div><span id="phone-msg"> </span></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="box-button">
									<a href="javascript:;" class="box-ok"><span>确定</span></a>
									<a href="javascript:;" class="box-cancel"><span>取消</span></a>
								</div>
								<div>
									<span id="validateAddressMsg"></span>
								</div>
								<input name="randomFlag" id="randomFlag" value="a6aa557bf39ab804c05d11b9f9cdd038" type="hidden">
								<input name="id" id="address-edit-id" type="hidden">
							</form>

							<!-- 20140815-表单-地址-end -->
                        </div>
                    </td>
                    <td class="box-cr"></td>
                </tr>
            </tbody>
        </table>
        <div class="box-bottom">
            <div class="box-bl"></div>
            <div class="box-bc"></div>
            <div class="box-br"></div>
        </div>
    </div>
</div>

<div style="display: none;" class="ol_box_4" id="delAddressBox">
    <div class="box-ct">
        <div class="box-header" style="width:400px">
            <div class="box-tl"></div>
            <div class="box-tc" style="width:400px">
                <div class="box-tc1"></div>
                <div class="box-tc2"><a class="box-close" title="关闭" onclick="return false;" href="javascript:;"></a><span class="box-title"></span></div>
            </div>
            <div class="box-tr"></div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td class="box-cl"></td>
                    <td class="box-cc">
                    	<div class="box-content">
							<!-- 20140815-删除地址tips-start -->
							<div class="box-confirm-area">
								<p>您确定要删除此地址吗？</p>
							</div>
							<div class="box-button">
								<a href="javascript:;" class="box-ok"><span>确定</span></a>
								<a href="javascript:;" class="box-cancel"><span>取消</span></a>
							</div>
							<!-- 20140815-删除地址tips-end -->
                        </div>
                    </td>
                    <td class="box-cr"></td>
                </tr>
            </tbody>
        </table>
        <div class="box-bottom">
            <div class="box-bl"></div>
            <div class="box-bc"></div>
            <div class="box-br"></div>
        </div>
    </div>
</div>
<!-- 【新地址改造：添加地址修改地址   确认，删除   END】     -->

<textarea id="invoice-ftl" class="hide">	&lt;table&gt;
		&lt;tr&gt;
			&lt;th&gt;单位名称：&lt;/th&gt;
			&lt;td id="invoiceInfo-company"&gt;&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;注册号：&lt;/th&gt;
			&lt;td id="invoiceInfo-id"&gt;&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;纳税人识别号：&lt;/th&gt;
			&lt;td id="invoiceInfo-pid"&gt;&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;开户银行：&lt;/th&gt;
			&lt;td id="invoiceInfo-bank"&gt;&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;银行账号：&lt;/th&gt;
			&lt;td id="invoiceInfo-bankId"&gt;&lt;/td&gt;
		&lt;/tr&gt;
    &lt;/table&gt;
</textarea>
<script src="list/confirm.js"></script><script id="jsapi_loader0" loadtype="insert" type="text/javascript" src="list/box-min.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader0');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader0 fail!');} return; }ol._setLoadStatus("ec.box/box-min.js","complete");})();</script><script id="jsapi_loader1" loadtype="insert" type="text/javascript" src="list/bigInt.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader1');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader1 fail!');} return; }ol._setLoadStatus("dh/bigInt.min.js","complete");})();</script><script id="jsapi_loader2" loadtype="insert" type="text/javascript" src="list/aes.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader2');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader2 fail!');} return; }ol._setLoadStatus("aes/aes.js","complete");})();</script><script id="jsapi_loader3" loadtype="insert" type="text/javascript" src="list/aesUtil.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader3');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader3 fail!');} return; }ol._setLoadStatus("aes/aesUtil.js","complete");})();</script><script id="jsapi_loader4" loadtype="insert" type="text/javascript" src="list/pbkdf2.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader4');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader4 fail!');} return; }ol._setLoadStatus("aes/pbkdf2.js","complete");})();</script><script id="jsapi_loader5" loadtype="insert" type="text/javascript" src="list/rc4.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader5');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader5 fail!');} return; }ol._setLoadStatus("crypt/rc4.js","complete");})();</script><script id="jsapi_loader6" loadtype="insert" type="text/javascript" src="list/region-min.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader6');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader6 fail!');} return; }ol._setLoadStatus("linkSelect/region-min.js","complete");})();</script>

<script>
ec.load("ajax");
	ec.order.isDeliveryFree = 0;
	ec.order.price = 3688;
	ec.order.totalPrice = 3688;
	ec.order.enterpriseTotalPrice = 0;
	ec.order.discountTotalPrice = 0;
	ec.order.weight = parseInt("100");
	ec.order.deliveryFree = 0;

		ec.order.petalFlagTotalPrice = ec.order.totalPrice - ec.order.enterpriseTotalPrice;
		ec.order.balancePrice = 0;
		ec.order.realTotalPrice = 0;
    ec.order.total=3688.00 <!--应付总金额-->
document.getElementById("headerWord").innerHTML="填写核对订单";
</script><script id="jsapi_loader7" loadtype="insert" type="text/javascript" src="list/jquery.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader7');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader7 fail!');} return; }ol._setLoadStatus("jquery.form","complete");})();</script><script id="jsapi_loader8" loadtype="insert" type="text/javascript" src="list/ajax.js" charset="utf-8"></script><iframe src="javascript:false" style="display: none;"></iframe><script id="dmpa_f_script" async="" src="list/dmpa-min.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader8');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader8 fail!');} return; }ol._setLoadStatus("ajax","complete");})();</script>

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
                <li class="able-item able-item-online"><a class="tit" href="http://robotim.vmall.com/live800/chatClient/chatbox.jsp?companyID=8922&amp;configID=37&amp;policyId=1&amp;location=B_001&amp;chatfrom=web&amp;enterurl=http://consumer.huawei.com/cn/support/index.htm&amp;pagereferrer=http://consumer.huawei.com/cn/support/index.htm" rel="nofollow" target="_blank">在线客服<i></i><span class="qrcode"><b></b></span></a></li>
                <li class="line"></li>
                <li class="able-item able-item-retail"><a class="tit" href="http://consumer.huawei.com/cn/support/where-to-buy/index.htm" target="_blank">查找零售店<i></i></a></li>
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
                        <li><a href="http://consumer.huawei.com/cn/tablets/index.htm">笔记本&amp;平板</a></li>
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
                <a href="http://consumer.huawei.com/cn/worldwide/index.htm" class="cbg-icon-flag cbg-icon-flag-china" title="选择语言/地区">中国</a>
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

<div id="globleParameter" class="hide" context="" stylepath="http://shopcn-res.huaweistatic.com/integration/cssHuawei" scriptpath="http://shopcn-res.huaweistatic.com/integration/js" imagepath="http://shopcn-res.huaweistatic.com/integration/images" mediapath="http://shopcn-res.huaweistatic.com/integration/pimages"></div>


<div id="AutocompleteContainter_dfff1" style="position: absolute; z-index: 9999; top: 0px; left: 0px;"><div class="autocomplete-w1"><div class="autocomplete" id="Autocomplete_dfff1" style="display: none; width: 0px; max-height: 400px;"></div></div></div></body></html>

