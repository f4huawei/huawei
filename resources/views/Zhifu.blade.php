<!DOCTYPE html>
<html><head><iframe style="display: none;" src="javascript:false"></iframe><script src="/pay/ha.js" async="" id="ha"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="X-UA-Compatible" content="IE=edge; charset=utf-8">
<script async="" src="/pay/analytics.js"></script><script>
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

<title>订单创建成功华为</title>
<link rel="shortcut icon" href="http://www.vmall.com/favicon.ico">
<link href="/pay/ec.css" rel="stylesheet" type="text/css">
<link href="/pay/css_con_cn_ht_share_002.css" rel="stylesheet" type="text/css">

<link href="/pay/main.css" rel="stylesheet" type="text/css">
<link href="/pay/css_con_cn_ht_share.css" rel="stylesheet" type="text/css">
<script src="/pay/jsapi.js" namespace="ec"></script><!--[if lte IE 6]><script>ol.isIE6=true;</script><![endif]--><!--[if IE 7]><script>ol.isIE7=true;</script><![endif]--><!--[if IE 8]><script>ol.isIE8=true;</script><![endif]-->
<!--[if lt IE 9 ]>
<script type="text/javascript" src="http://www.huawei.com/Assets/CBG/js/respond.min.js"></script>
<![endif]-->
<script src="/pay/script_dev_en_jquery_min.js"></script>
<script src="/pay/ec_002.js"></script> 
<script src="/pay/ec.js"></script> 
<!--[if lt IE 9]><script src="http://shopcn-res.huaweistatic.com/integration/js/common/html5shiv.js"></script> <![endif]-->
<script src="/pay/script_con_cn_ht_share.js"></script>
<script src="/pay/pc-g-analytics.js"></script>

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
<script src="/pay/base.js"></script>
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
<div class="order-header">
	<div class="g">
    	<div class="fl">
            <h1 id="headerWord">成功提交订单</h1>
        </div>
        <div class="fr">
            <!--步骤-两步骤 -->
            <div class="progress-area progress-area-2">
                <!--核对订单 -->
                <div id="progress-confirm" class="progress-co-area hide">填写核对订单信息</div>
                <!--成功提交订单 -->
                <div id="progress-submit" class="progress-sso-area hide" style="display: block;">成功提交订单</div>
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
$("#progress-submit").show();
</script>
<form action="/payment/process" id="pay-go-form" method="post" target="_blank" class="hide">
	<input name="orderCodes" value="51090007889|" type="hidden">
	<input name="paymentMethod" id="order-paymentMethod" value="" type="hidden">	
	<input name="paymentType" id="order-paymentType" value="" type="hidden">
	<input name="state" value="0" type="hidden">
</form>


<div class="layout">
	<!-- 20131130-订单-确认-鼠标悬停增加ClassName： order-confirm-expand -->
    <div class="order-confirm" id="order-confirm-detail">
		<div class="h">
			<s class="icon-success-7"></s>
			<h3>订单提交成功，请您尽快付款！</h3>	
			<p name="order-pay-info" ordertype="">订单号：&nbsp;&nbsp;51090007889&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;付款金额（元）：&nbsp;&nbsp;<b>
				1599.00
			</b>&nbsp;<b>元</b></p>
			<div class="tips">请您在&nbsp;&nbsp;<b id="lastPayTime">2016-10-19 20:09</b>&nbsp;完成支付，否则订单将自动取消。</div>
			<div class="hr-5"></div>
		</div>
		<div class="b">
			<table cellspacing="0" cellpadding="0" border="0">
				<tbody>
				
					<tr>
						<th>订单编号：</th>
						<td><span>51090007889</span></td>
					</tr>
					<tr>
						<th>订单金额：</th>
						<td>
							1599.00元	
						</td>
					</tr>
					
					<tr>
						<th>收货信息：</th>
						<td>
							北京北京昌平区回龙观地区育荣教育园区兄弟连&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							刘士林&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							13930443781
						</td>
					</tr>

					
					<tr>
						<th>购买日期：</th>
						<td>2016-10-18 20:09:05</td>
					</tr>
					<tr>
						<th>配送方式：</th>
						<td>
							由默认快递公司配送&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							运费￥0.00							
						</td>
					</tr>
					<tr>
						<th>发票信息：</th>
						<td>个人</td>
					</tr>
					
				</tbody>
			</table>
		</div>
		<div class="f"><a href="javascript:;" onclick="$('#order-confirm-detail').toggleClass('order-confirm-expand')">订单详情<i></i><s></s><b></b></a></div>
	</div><!-- 20131130-订单-确认-end -->

	<!--订单-表单-支付方式-20121012 -->
<!--订单-表单-支付方式-20121012 -->
<div class="order-form-area">
<div class="order-payment" id="order-payment-mod">
	<h3 class="title">选择支付方式
		<b>[&nbsp;<a title="重新选择支付方式" href="javascript:;" onclick="ec.order.payment.edit()">重新选择</a>&nbsp;]</b>
	</h3>
    <div class="order-payment-list" id="order-payment-list">
	    <dl>
		<dd>
			<div class="order-payment-area">
				<div class="h"><b>第三方支付平台</b></div>
				<div class="b clearfix" id="payment-bank-list-other"><!--bankList start-->  <ul class="clearfix"><li><div class="payment-area"><input id="input-ALIPAY-1" value="ALIPAY" class="radio vam" name="bankName-input" data-type="1" seed="payment_3_1" type="radio"><!-- 支付宝扫码支付活动链接 --><div style="position:absolute;left: 30px;top: -20px;" class="hide"><a href="http://shopcn.huawei.com/notice-857" target="_blank" style="color:red"><span style="color:red;">最高赢3180元&gt;</span></a></div><label for="input-ALIPAY-1" class="vam"><img disabled="" title="支付宝" alt="支付宝" src="/pay/alipay_logo1.png" class="vam pointer"><i style="background:#FF8502;color: #FFF;">推荐</i></label></div></li><li><div class="payment-area"><input id="input-WECHAT-17" value="WECHAT" class="radio vam" name="bankName-input" data-type="17" seed="payment_3_1" type="radio"><!-- 支付宝扫码支付活动链接 --><label for="input-WECHAT-17" class="vam"><img disabled="" title="微信支付" alt="微信支付" src="/pay/wechat_logo.gif" class="vam pointer"></label></div></li><li><div class="payment-area"><input id="input-TENPAY-7" value="TENPAY" class="radio vam" name="bankName-input" data-type="7" seed="payment_3_1" type="radio"><!-- 支付宝扫码支付活动链接 --><label for="input-TENPAY-7" class="vam"><img disabled="" title="财付通支付" alt="财付通支付" src="/pay/tenpay_logo.gif" class="vam pointer"></label></div></li></ul><!--bankList end--></div>
		    </div>
			<div class="order-payment-area">
				<div class="h"><b>银行网银</b><em>支持以下各银行储蓄卡及信用卡</em><span>[<a href="http://consumer.huawei.com/cn/help/quick-pay/index.htm" target="_blank" title="查看支付限额">查看支付限额</a>]</span></div>
				<div class="b clearfix" id="payment-bank-list-bank"><!--bankList start-->  <ul class="clearfix"><li><div class="payment-area"><input id="input-C_M_B-2" value="C_M_B" class="radio vam" name="bankName-input" data-type="2" seed="payment_1_1" type="radio"><label for="input-C_M_B-2" class="vam"><img disabled="" title="招商银行" alt="招商银行" src="/pay/CMB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（专业版），信用卡单笔最高限额5000元（专业版单笔无限额）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-ICBC-7" value="ICBC" class="radio vam" name="bankName-input" data-type="7" seed="payment_1_2" type="radio"><label for="input-ICBC-7" class="vam"><img disabled="" title="中国工商银行" alt="中国工商银行" src="/pay/ICBC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（U盾客户），信用卡单笔无限额（U盾客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-CCB-1" value="CCB" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_3" type="radio"><label for="input-CCB-1" class="vam"><img disabled="" title="中国建设银行" alt="中国建设银行" src="/pay/CCB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额100万元（证书客户），信用卡单笔最高限额100万元（证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-COMM-1" value="COMM" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_4" type="radio"><label for="input-COMM-1" class="vam"><img disabled="" title="交通银行" alt="交通银行" src="/pay/COMM_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额50000元（证书客户），信用卡单笔最高限额10000元（证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-ABC-1" value="ABC" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_5" type="radio"><label for="input-ABC-1" class="vam"><img disabled="" title="中国农业银行" alt="中国农业银行" src="/pay/ABC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（K宝证书客户），信用卡单笔无限额（K宝证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-0302-2" value="0302" class="radio vam" name="bankName-input" data-type="2" seed="payment_1_6" type="radio"><label for="input-0302-2" class="vam"><img disabled="" title="中信银行" alt="中信银行" src="/pay/CITIC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（证书客户），信用卡单笔最高限额500元（证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-SPDB-1" value="SPDB" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_7" type="radio"><label for="input-SPDB-1" class="vam"><img disabled="" title="上海浦东发展银行" alt="上海浦东发展银行" src="/pay/SPDB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（证书客户），信用卡单笔无限额（证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-BOCB2C-1" value="BOCB2C" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_8" type="radio"><label for="input-BOCB2C-1" class="vam"><img disabled="" title="中国银行" alt="中国银行" src="/pay/BOC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额10000.00元，信用卡单笔最高限额5000.00元</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-GDB-1" value="GDB" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_9" type="radio"><label for="input-GDB-1" class="vam"><img disabled="" title="广东发展银行" alt="广东发展银行" src="/pay/GDB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（数字证书客户），信用卡单笔最高限额1500.00元（数字证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-0309-2" value="0309" class="radio vam" name="bankName-input" data-type="2" seed="payment_1_11" type="radio"><label for="input-0309-2" class="vam"><img disabled="" title="兴业银行" alt="兴业银行" src="/pay/CIB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>兴业银行-储蓄卡单笔无限额（证书客户），信用卡单笔无限额</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-CEB-7" value="CEB" class="radio vam" name="bankName-input" data-type="7" seed="payment_1_12" type="radio"><label for="input-CEB-7" class="vam"><img disabled="" title="光大银行" alt="光大银行" src="/pay/CEB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额20万元（阳光网盾），信用卡单笔最高限额20万元（阳光网盾）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-POSTGC-1" value="POSTGC" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_13" type="radio"><label for="input-POSTGC-1" class="vam"><img disabled="" title="中国邮政储蓄银行" alt="中国邮政储蓄银行" src="/pay/PSBC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额3000元（签约用户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-0410-2" value="0410" class="radio vam" name="bankName-input" data-type="2" seed="payment_1_14" type="radio"><label for="input-0410-2" class="vam"><img disabled="" title="平安银行" alt="平安银行" src="/pay/SPABANK_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额50000元（网银高级用户），信用卡单笔最高限额5000元</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-HZCBB2C-1" value="HZCBB2C" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_15" type="radio"><label for="input-HZCBB2C-1" class="vam"><img disabled="" title="杭州银行" alt="杭州银行" src="/pay/HZCB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔无限额（证书客户），信用卡单笔最高限额500元（证书客户）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-CMBC-7" value="CMBC" class="radio vam" name="bankName-input" data-type="7" seed="payment_1_16" type="radio"><label for="input-CMBC-7" class="vam"><img disabled="" title="中国民生银行" alt="中国民生银行" src="/pay/CMBC_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额50万元（U宝），信用卡单笔最高限额50万元（U宝）</p><s></s></div></label></div></li><li><div class="payment-area"><input id="input-BJRCB-1" value="BJRCB" class="radio vam" name="bankName-input" data-type="1" seed="payment_1_17" type="radio"><label for="input-BJRCB-1" class="vam"><img disabled="" title="北京农村商业银行" alt="北京农村商业银行" src="/pay/BJRCB_OUT.gif" class="vam pointer"><div class="bank-tips"><p>储蓄卡单笔最高限额20万元（证书客户），信用卡单笔最高限额20万元（证书客户）</p><s></s></div></label></div></li></ul><!--bankList end--></div>
			</div>
			<div class="order-payment-area">
				<div class="h"><b>信用卡快捷支付</b><em>无需网银</em></div>
				<div class="b clearfix" id="payment-bank-list-shortcut"><!--bankList start-->  <ul class="clearfix"><li><div class="payment-area"><input id="input-CMB_FP-5" value="CMB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_1" type="radio"><label for="input-CMB_FP-5" class="vam"><img disabled="" title="招商银行" alt="招商银行" src="/pay/CMB_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-ICBC_FP-5" value="ICBC_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_2" type="radio"><label for="input-ICBC_FP-5" class="vam"><img disabled="" title="中国工商银行" alt="中国工商银行" src="/pay/ICBC_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-CCB_FP-5" value="CCB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_3" type="radio"><label for="input-CCB_FP-5" class="vam"><img disabled="" title="中国建设银行" alt="中国建设银行" src="/pay/CCB_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-ABC_FP-5" value="ABC_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_4" type="radio"><label for="input-ABC_FP-5" class="vam"><img disabled="" title="中国农业银行" alt="中国农业银行" src="/pay/ABC_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-CEB_FP-5" value="CEB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_6" type="radio"><label for="input-CEB_FP-5" class="vam"><img disabled="" title="中国光大银行" alt="中国光大银行" src="/pay/CEB_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-BOC_FP-5" value="BOC_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_7" type="radio"><label for="input-BOC_FP-5" class="vam"><img disabled="" title="中国银行" alt="中国银行" src="/pay/BOC_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-PAB_FP-5" value="PAB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_1_8" type="radio"><label for="input-PAB_FP-5" class="vam"><img disabled="" title="平安银行" alt="平安银行" src="/pay/SPABANK_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-CMBC_FP-5" value="CMBC_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_undefined" type="radio"><label for="input-CMBC_FP-5" class="vam"><img disabled="" title="中国民生银行" alt="中国民生银行" src="/pay/CMBC_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-CIB_FP-5" value="CIB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_undefined" type="radio"><label for="input-CIB_FP-5" class="vam"><img disabled="" title="兴业银行" alt="兴业银行" src="/pay/CIB_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-CITIC_FP-5" value="CITIC_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_undefined" type="radio"><label for="input-CITIC_FP-5" class="vam"><img disabled="" title="中信银行" alt="中信银行" src="/pay/CITIC_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li><li><div class="payment-area"><input id="input-GDB_FP-5" value="GDB_FP" class="radio vam" name="bankName-input" data-type="5" seed="payment_undefined" type="radio"><label for="input-GDB_FP-5" class="vam"><img disabled="" title="广东发展银行" alt="广东发展银行" src="/pay/GDB_OUT.gif" class="vam pointer"><i>快捷</i></label></div></li></ul><!--bankList end--></div>
			</div>
		</dd>
	    </dl>
		<div class="order-payment-action-area">
			<a class="button-style-5 button-confirm-payment" href="javascript:;" onclick="ec.order.payment.submit()">确认支付方式</a>
			<div class="huabei-tips-stages" id="huabei_nochoicegroup" hidden="">
				<div><label class="label-error"></label><p>您还没选定具体的分期数，<br>请先选定分期数.</p></div>
				<div class="f">
					<s class="icon-arrow-down"></s>
				</div>
			</div>
		</div>
    </div>
	<!--订单-表单-支付方式列表结束 -->
        <!--订单确认页跳转过来的-->
	<!--订单-表单-支付方式确认-20121016 -->
    <div class="order-payment-define-area hide" id="order-payment-define-area">
		<div class="b">
			<dl>
				<dd>
					<div class="payment-area vam">
						<input class="radio vam" id="set-bank-input" type="radio"><label class="vam current" for="set-bank-input"><img id="set-bank-img" class="vam" alt="#"><i id="set-bank-i">快捷</i></label>
						<em class="vam" id="set-bank-youhui"></em>
						<div class="bank-event-tips" id="bank-event-tips">
								<p>温馨提示：储蓄卡单笔无限额（专业版网银），信用卡单笔最高限额5000元</p>
								<s></s>
						</div>
					</div>
					<div class="inline-block vam"><span class="order-payment-price">支付&nbsp;<b><span id="payValue">1599.00</span></b>&nbsp;<b>元</b></span></div><br><div class="bank-tips" id="set-bank-tips"><p></p><s></s></div>
				</dd>
			</dl>
			<ul id="instalment-description">
			
			</ul>
			<div class="payment-wechat clearfix hide" id="payment-wechat">
				<div class="payment-wechat-code">
					<div class="payment-wechat-img">
						<img src="/pay/createcart_002.htm" id="payment-wechat-img" alt="">
					</div>
					<div class="payment-wechat-tips">
						<i></i>
						<p>请使用微信扫一扫</p>
						<p>扫描二维码支付</p>
					</div>
				</div>
				<div class="payment-wechat-banner">
					<img src="/pay/payment_wechat_banner.jpg" alt="请使用微信扫一扫">
				</div>
			</div>
			<div class="payment-wechat clearfix hide" id="payment-105" style="width:600px; height:300px;">
				<iframe id="payment-105-img" src="/pay/createcart_002.htm" name="iframepage" scrolling="no" height="100%" frameborder="0" width="100%">
				</iframe>
			</div>
		</div>
		<div class="f">
		<a href="http://shopcn.huawei.com/payment/process?orderCodes=51090007889%7C&amp;paymentMethod=ALIPAY&amp;paymentType=1&amp;state=0" class="button-style-5 button-confirm-payment" id="go2pay" target="_blank">立即支付</a>
		</div>
    </div>

	<!--订单-表单-支付方式确认结束 -->

	</div>
</div>
<div class="hr-50"></div>
    <!-- 订单支付金额  -->
  <input id="orderCashPay" name="cashPay" value="1599.00" type="hidden">


<!-- 银行列表模板 -->
<textarea id="bank-list-tpl" class="hide">&lt;!--#macro bankList 
data--&gt;  
	
	&lt;ul class="clearfix"&gt;
		&lt;!--#list data.list as lst--&gt;
			&lt;!--#if (lst_index == 21) --&gt;
		    &lt;/ul&gt;
		    &lt;ul class="clearfix hide"&gt;
		    &lt;!--/#if--&gt;
			&lt;li&gt;
				&lt;!--#if (data.id == 'other') --&gt;
				&lt;div class="payment-area"&gt;
					&lt;input type="radio" id="input-{#lst[1]}-{#lst[0]}" 
value="{#lst[1]}" class="radio vam" name="bankName-input" 
data-type="{#lst[0]}" seed="payment_{#lst[5]}" /&gt;
					&lt;!-- 支付宝扫码支付活动链接 --&gt;
					&lt;!--#if (lst[2] == '支付宝') --&gt;&lt;div 
style="position:absolute;left: 30px;top: -20px;" class="hide"&gt;&lt;a 
href="/notice-857" target="_blank" style="color:red"&gt;&lt;span 
style="color:red;"&gt;最高赢3180元&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;&
lt;!--/#if--&gt;
					&lt;label for="input-{#lst[1]}-{#lst[0]}" class="vam"&gt;
						&lt;img disabled title="{#lst[2]}" alt="{#lst[2]}" 
src="http://shopcn-res.huaweistatic.com/integration/pimages{#lst[3]}" 
class="vam pointer" /&gt;
						&lt;!--#if (lst[2] == '支付宝') --&gt;
						&lt;i style="background:#FF8502;color: #FFF;"&gt;推荐&lt;/i&gt;
						&lt;!--/#if--&gt;
						&lt;/label&gt;						
					&lt;/label&gt;
					&lt;!--#if (lst[4]) --&gt;
						&lt;div class="bank-event-tips"&gt;{#lst[4]}&lt;/div&gt;
					&lt;!--/#if--&gt;
				&lt;/div&gt;	
				
				&lt;!--#else--&gt;
				
				&lt;div class="payment-area"&lt;!--#if (lst[6]) --&gt; 
data-tip="{#lst[6]}"&lt;!--/#if--&gt;&gt;
					&lt;input type="radio" id="input-{#lst[1]}-{#lst[0]}" 
value="{#lst[1]}" class="radio vam" name="bankName-input" 
data-type="{#lst[0]}" seed="payment_{#lst[5]}" /&gt;

					&lt;label for="input-{#lst[1]}-{#lst[0]}" class="vam"&gt;
						&lt;img disabled title="{#lst[2]}" alt="{#lst[2]}" 
src="http://shopcn-res.huaweistatic.com/integration/pimages{#lst[3]}" 
class="vam pointer" /&gt;
						&lt;!--#if (data.id == 'shortcut') 
--&gt;&lt;i&gt;快捷&lt;/i&gt;&lt;!--/#if--&gt;
						&lt;!--#if (lst[4]) --&gt;
							&lt;div 
class="bank-tips"&gt;&lt;p&gt;{#lst[4]}&lt;/p&gt;&lt;s&gt;&lt;/s&gt;&lt;/div&gt;

						&lt;!--/#if--&gt;
					&lt;/label&gt;

				&lt;/div&gt;
				&lt;!--/#if--&gt;
			&lt;/li&gt;

		&lt;!--/#list--&gt;
	&lt;/ul&gt;
	&lt;!--#if (data.list.length &gt; 21) --&gt;
	&lt;div class="f"&gt;&lt;a class="button-style-4" href="javascript:;" 
onclick="ec.order.payment.more(this)" data-type="0" 
seed="payment_more"&gt;查看更多&lt;/a&gt;&lt;/div&gt;
	&lt;!--/#if--&gt;
	
&lt;!--/#macro--&gt;
</textarea>
<!-- 银行列表 end-->
<!--订单-表单-支付方式结束 -->
<script>
ec.pkg("ec.order");
//支付方式相关事件
ec.order.payment = {
	cashPay : 1599.00,
	queryVoucherUrl : "https://cds.vmall.com/gateway/queryBalance",
	//微信查询次数
	wechatCount : 50,
	//微信查询定时器
	wechatTimer : null,
	//代金券支付方式
	voucherType : 66,
	voucherMethod : "BALANCE",
	hoverObj : null,
	// 1：支付宝；2：网银支付；3：货到付款(暂时屏蔽)；4：退换货(暂时屏蔽)；5：快捷支付 6：分期付款
	bankList : [
		{"id":"other", "list" : [
			[1, "ALIPAY","支付宝","/bankLogo/alipay_logo1.png", "", "3_1"],
			[17, "WECHAT", "微信支付","/bankLogo/wechat_logo.gif", "", "3_1"],
			[7, "TENPAY","财付通支付","/bankLogo/tenpay_logo.gif", "", "3_1"]
		]},
		{"id":'bank', "list" : [
			// 网上银行列表
			[2,"C_M_B","招商银行","/bankLogo/CMB_OUT.gif","储蓄卡单笔无限额（专业版），信用卡单笔最高限额5000元（专业版单笔无限额）", "1_1"],
			[7,"ICBC","中国工商银行","/bankLogo/ICBC_OUT.gif","储蓄卡单笔无限额（U盾客户），信用卡单笔无限额（U盾客户）", "1_2"],
			[1,"CCB","中国建设银行","/bankLogo/CCB_OUT.gif","储蓄卡单笔最高限额100万元（证书客户），信用卡单笔最高限额100万元（证书客户）", "1_3"],
			[1,"COMM","交通银行","/bankLogo/COMM_OUT.gif","储蓄卡单笔最高限额50000元（证书客户），信用卡单笔最高限额10000元（证书客户）", "1_4"],
			[1,"ABC","中国农业银行","/bankLogo/ABC_OUT.gif","储蓄卡单笔无限额（K宝证书客户），信用卡单笔无限额（K宝证书客户）", "1_5"],
			[2,"0302","中信银行","/bankLogo/CITIC_OUT.gif","储蓄卡单笔无限额（证书客户），信用卡单笔最高限额500元（证书客户）", "1_6"],
			[1,"SPDB","上海浦东发展银行","/bankLogo/SPDB_OUT.gif","储蓄卡单笔无限额（证书客户），信用卡单笔无限额（证书客户）", "1_7"],
			[1,"BOCB2C","中国银行","/bankLogo/BOC_OUT.gif","储蓄卡单笔最高限额10000.00元，信用卡单笔最高限额5000.00元", "1_8"],
			[1,"GDB","广东发展银行","/bankLogo/GDB_OUT.gif","储蓄卡单笔无限额（数字证书客户），信用卡单笔最高限额1500.00元（数字证书客户）", "1_9"],
			/*[1,"SDB","深圳发展银行","/bankLogo/SDB_OUT.gif","储蓄卡单笔无限额（证书客户），信用卡单笔无限额（证书客户）", "1_10"],  */ 
			[2,"0309","兴业银行","/bankLogo/CIB_OUT.gif","兴业银行-储蓄卡单笔无限额（证书客户），信用卡单笔无限额", "1_11"],
			[7,"CEB","光大银行","/bankLogo/CEB_OUT.gif","储蓄卡单笔最高限额20万元（阳光网盾），信用卡单笔最高限额20万元（阳光网盾）", "1_12"],
			[1,"POSTGC","中国邮政储蓄银行","/bankLogo/PSBC_OUT.gif","储蓄卡单笔最高限额3000元（签约用户）", "1_13"],
			[2,"0410","平安银行","/bankLogo/SPABANK_OUT.gif","储蓄卡单笔最高限额50000元（网银高级用户），信用卡单笔最高限额5000元", "1_14"],
			[1,"HZCBB2C","杭州银行","/bankLogo/HZCB_OUT.gif","储蓄卡单笔无限额（证书客户），信用卡单笔最高限额500元（证书客户）", "1_15"],
			[7,"CMBC","中国民生银行","/bankLogo/CMBC_OUT.gif","储蓄卡单笔最高限额50万元（U宝），信用卡单笔最高限额50万元（U宝）", "1_16"],			
			[1,"BJRCB","北京农村商业银行","/bankLogo/BJRCB_OUT.gif","储蓄卡单笔最高限额20万元（证书客户），信用卡单笔最高限额20万元（证书客户）", "1_17"]		
			/*[1,"abc1003","VISA","/bankLogo/VISA_OUT.gif", "", "1_1"],
			[1,"abc1004","Master","/bankLogo/MASTER_OUT.gif", "", "1_1"]
			[1,"NBBANK","宁波银行","/bankLogo/NBBANK_OUT.gif","储蓄卡单笔无限额（USBKEY移动证书）", "1_1"],
			[1,"SHBANK","上海银行","/bankLogo/SHBANK_OUT.gif","暂无提示信息", "1_1"],			
			[1,"FDB","富滇银行","/bankLogo/FDB_OUT.gif","暂无提示信息"],*/
		]},
		{"id":"shortcut","list":[
			//快捷支付 
			[5,"CMB_FP","招商银行","/bankLogo/CMB_OUT.gif", "", "1_1"],
			[5,"ICBC_FP","中国工商银行","/bankLogo/ICBC_OUT.gif", "", "1_2"],			
			[5,"CCB_FP","中国建设银行","/bankLogo/CCB_OUT.gif", "", "1_3"],			
			[5,"ABC_FP","中国农业银行","/bankLogo/ABC_OUT.gif", "", "1_4"],
			/*[5,"SDB","深圳发展银行","/bankLogo/SDB_OUT.gif", "", "1_5"],*/
			[5,"CEB_FP","中国光大银行","/bankLogo/CEB_OUT.gif", "", "1_6"],
			[5,"BOC_FP","中国银行","/bankLogo/BOC_OUT.gif", "", "1_7"],
			[5,"PAB_FP","平安银行","/bankLogo/SPABANK_OUT.gif", "", "1_8"],
			
			[5,"CMBC_FP","中国民生银行","/bankLogo/CMBC_OUT.gif"],
			[5,"CIB_FP","兴业银行","/bankLogo/CIB_OUT.gif"],
			[5,"CITIC_FP","中信银行","/bankLogo/CITIC_OUT.gif"],
			[5,"GDB_FP","广东发展银行","/bankLogo/GDB_OUT.gif"]

		]}
	],
	//获取和绑定支付列表事件
	bind : function () {
		var template =  new ec.template(gid("bank-list-tpl").value),
			paymentType = gid('order-paymentType').value,
			paymentMethod = gid('order-paymentMethod').value,
			_this = ec.order.payment;
		
		for(var i = 0; i< this.bankList.length; i+=1) {
			var n = this.bankList[i].id;
			$("#payment-bank-list-"+n).html(template.parse("bankList", this.bankList[i]));

		}
		
		$("#order-payment-list dd input").click(function () {
			var _thix = $(this),
			thisType = _thix.attr('data-type'),
			thisValue = _thix.attr('value');
			if(_this.hoverObj) _this.hoverObj.next('label').removeClass('current');
			ec.order.payment.hoverObj = _thix;
			_thix.next('label').addClass('current');
			if((thisType == 1 && thisValue == 'ALIPAY') || (thisType == 1 && thisValue == 105) || thisType == 17){
				_this.submit();
			}
			//花呗分期
			if(thisType == 1 && thisValue == "HB"){
				ec.order.payment.queryHuaBeiInstalment() ;
			}else{
				$("#instalment-huabei").hide();
				$("#huabei_tips").hide();
				$("#huabei_nochoicegroup").hide();
			}
			this.blur();
		});
		
		
		$("#order-payment-list .payment-area").hover(function () {
			$(this).find('label').addClass('current');
		}, function () {
			if($(this).children('input').attr('checked')) return;
			$(this).find('label').removeClass('current');
		});
		
		//如果有值就自动选中
		if(paymentType && paymentMethod) {
			ec.order.payment.hoverObj = $('#input-'+ paymentMethod +'-'+ paymentType);
			$('#input-'+ paymentMethod +'-'+ paymentType).attr('checked', true).next('label').addClass('current');
			this.submit();
		}
	},
	//确定支付方式
	submit : function () {
		if(!this.hoverObj) {
			alert('请先选择一个支付方式');
			return false;
		}
		
		var payType = ['支付宝','银行网银','货到付款',0,'信用卡快捷支付',0,'财付通', '分期付款','微信'];
		var $thixInput = this.hoverObj,
			thisVal = $thixInput.val(),
			thisType = $thixInput.attr('data-type'),
			thisValue = $thixInput.attr('value'),
			
			
			$imgObj = $thixInput.next('label').children('img'),			
			alt = $imgObj.attr('alt'),
			
			$checkLi = $thixInput.parent(),			
			payName = payType[thisType-1],
			dataYouhui = $checkLi.attr('data-tip'),
			dataTips = $checkLi.find('.bank-tips p').html(),
			dataTips1 = $checkLi.find('.bank-event-tips').html(),
	
			title = $('#onlinePay').attr('checked') ? '在线支付':'货到付款',
			title = title+'[' + payName +']';
			title = title+'：' + alt;
			
		var displayId = $("input[name='bankName-input']:checked").siblings(".displayId").val();
		
		if(!(thisType == 1 && thisValue == 'HB')){
			ec.order.payment.queryBank(displayId);
		}else{ //判断是否选择了花呗
			var val=$('input:radio[name="hbGroupNum"]:checked').val();
			if(val == null){
				$("#huabei_nochoicegroup").show();
				return ;
			}
		}
		
		//重新计算花呗分期需要支付的订单金额
		var orderCashPay= $("#orderCashPay").val();
		if(thisType == 1 && thisValue == 'HB'){
			var rateValue = $("input[name='hbGroupNum']:checked").attr("title2") ;
			var offRate =  $("input[name='hbGroupNum']:checked").attr("percent") ;
			var rateFee = (parseFloat(orderCashPay)*parseFloat(rateValue)/100*parseFloat(100-offRate)/100).toFixed(2);
			orderCashPay = (parseFloat(orderCashPay) + parseFloat(rateFee)).toFixed(2) ;
		}
		$("#payValue").html(orderCashPay) ;
		
		//设置当前选中的银行代码		
		$("#order-paymentType").val(thisType);
		if($("#order-paymentMethod").val() !== thisVal) {
			$("#order-paymentMethod").val(thisVal);
			if(ec.order.resetCoupon) ec.order.resetCoupon();
		}
		
		
		//设置当前选中银行的相关提示信息和LOGO
		if(thisType == 5) { //快捷支付标志
			$("#set-bank-i").show();
		} else {
			$("#set-bank-i").hide();
		}
		if(thisType == 17) { //微信扫码支付
		 	var imgSrc = "/payment/getWxImg?orderCodes=" + $('input[name="orderCodes"]').val()
							+ "&paymentMethod=" + $('input[name="paymentMethod"]').val()
							+ "&paymentType=" + $('input[name="paymentType"]').val()
							+ "&state=" + $('input[name="state"]').val() ;		
			$("#payment-wechat-img").attr("src",imgSrc);
			$("#payment-105").hide();
			$("#payment-wechat").show();
			$("#go2pay").hide();
			
			ec.order.payment.wechatCount = 50;
			setTimeout('ec.order.payment.wechatStartTimer()',5000);
            
		} else if((thisType == 1 && thisValue == 105)) { //支付宝扫码支付
			$("#payment-105-img").remove();
			var newNode;
                newNode = document.createElement("iframe");
        		newNode.id= "payment-105-img";
        		newNode.width= "100%";
        		newNode.height= "100%";
				newNode.frameBorder= 0;
				$("#payment-105")[0].appendChild(newNode);

			var imgSrc = "/payment/process?orderCodes=" + $('input[name="orderCodes"]').val()
							+ "&paymentMethod=" + $('input[name="paymentMethod"]').val()
							+ "&paymentType=" + $('input[name="paymentType"]').val()
							+ "&state=" + $('input[name="state"]').val() ;
			$("#payment-105-img").attr("src",imgSrc);
			$("#payment-wechat").hide();
			$("#payment-105").show();
			$("#go2pay").hide();
		} else {
			$("#payment-wechat").hide();
			$("#payment-105").hide();
			$("#go2pay").show();
		}
		if(thisType == 58 || thisType == 59)
		{
			$("#instalment-description").show();
			$("#bank-event-tips").show();
		}
		else
		{
			$("#instalment-description").hide();
			$("#bank-event-tips").hide();
		}
		$("#set-pay-name").html(title);
		var imghref=$("[name='bankName-input']:checked~label>img").attr("src");
		
		$("#set-bank-img").attr({"src":imghref, "data-code": thisVal, "alt": alt}).show();
		if(dataYouhui && dataYouhui.length > 0) {
			$("#set-bank-youhui").html('('+ dataYouhui +')');
		} else {
			$("#set-bank-youhui").hide();
		}
		if(dataTips && dataTips.length > 0) {
			$("#set-bank-tips").show().find('p').html(dataTips);
		} else {
			$("#set-bank-tips").hide();
		}
		if(dataTips1 && dataTips1.length > 0) {
			$("#bank-event-tips").show().html(dataTips1);
		} else {
			$("#bank-event-tips").hide();
		}

		$("#set-bank-input").attr('checked', true);

		$("#order-payment-list").hide();
		$("#order-payment-define-area").show();

		ec.ui.scrollTo("#order-payment-mod");
		
		// 设置支付URL
		var payUrl = "/payment/process?orderCodes=" + $('input[name="orderCodes"]').val()
							+ "&paymentMethod=" + $('input[name="paymentMethod"]').val()
							+ "&paymentType=" + $('input[name="paymentType"]').val()
							+ "&state=" + $('input[name="state"]').val() ;
		$("#go2pay").attr("href", payUrl);
		
		if (thisType == 1 && thisValue == 'ALIPAY')
		{
			$("#go2pay").click();
			window.open(payUrl);
		}

		if(thisType == 1 && thisValue == 'HB'){
			payUrl += "&num=" + $("input[name='hbGroupNum']:checked").val()
			+"&rate=" + $("input[name='hbGroupNum']:checked").attr("title")
			+"&percent=" + $("input[name='hbGroupNum']:checked").attr("percent") ;
			
			$("#go2pay").attr("href", payUrl);
			$("#go2pay").click();
			window.open(payUrl);
		}
	},
	//修改支付方式
	edit : function () {
		//取消微信定时查询
		if(ec.order.payment.wechatTimer)
		{
			clearInterval(ec.order.payment.wechatTimer);
		}
		$("#order-payment-list").show();
		$("#order-payment-define-area").hide();
	},
	more : function (obj) {
	   var b = ($(obj).attr('data-type')==1) ? 0 : 1,
          text = b ? '收起' : '查看更多';
         
       $(obj).attr('data-type', b).html(text)
         .parent().prev().toggle();
         
	},
	
	queryBank : function (id) {
	if($("[id*='intalment-']:checked ").length==0){
	   return ;
	}
		new ec.ajax().get({
		
			url : "/bankInstalment/" + id + ".json",
			timeout : 10000,
			timeoutFunction : function() {
				alert("读取超时，请重试！");
			},
			successFunction : function(json) {
					if (json.success) {
					//定义分期的 名称数组
					var name=[];
					//定义分期的期数数组
					var groupNum=[];
					//定义分期的利率数组
					var rateValue=[];
					//获取返回来的 所选银行的 可供选择的数据信息
					var BankInstalmentList=json.selectedBankInstalmentList;
					//定义此订单的支付总金额
					var orderCashPay= $("#orderCashPay").val();
					
					//定义 分期付款的html内容样式
					var htmlContent='<li class="p-stages"><span>选择分期：</span>';
						for(var i=0; i<BankInstalmentList.length;i++){
						   name[i]=BankInstalmentList[i].name;
						   groupNum[i]=BankInstalmentList[i].value;
						   rateValue[i]=BankInstalmentList[i].rate;   
						   
						    if(i==0){
						       htmlContent= htmlContent+'<input type="radio" name="groupNum" title="'+ rateValue[i] +'" checked="true" value="'+groupNum[i]+'"/>'+name[i]+'&nbsp;&nbsp;';
						   }else{
						   
						   htmlContent= htmlContent+'<input type="radio" name="groupNum" title="'+ rateValue[i] +'" value="'+groupNum[i]+'"/>'+name[i]+'&nbsp;&nbsp;&nbsp;&nbsp;';
						}
						}
						//定义手续费
						var rateFee=(parseFloat(orderCashPay)*parseFloat(rateValue[0])/100).toFixed(2);
						
						//定义总费用
						var totalFee=(parseFloat(orderCashPay)+parseFloat(rateFee)).toFixed(2);
						htmlContent=htmlContent+'</li><li class="p-amount"><label>支付总金额：</label><b><span id="totalCashPay">'+totalFee +'</span></b>元=<b>'+orderCashPay+'</b>（商品金额）+<b><span id="ratePay">'+ rateFee +'</span></b>(分期付款手续费以银行收取为准)</li><li class="p-rule"><label>还款规则：</label>分<b><span id="numValue">' + groupNum[0] +  '</span></b>期，每期<b><span id="cashFee">'+(totalFee/groupNum[0]).toFixed(2)+'</span></b>元</li>';
						
						$("#instalment-description").html(htmlContent);
						//显示分期付款支付内容
						$("#order-payment-define-area").show();
						$("#instalment-description").show();
						$("#set-bank-tips").html('<p>温馨提示：储蓄卡单笔无限额（专业版网银），信用卡单笔最高限额5000元</p><s></s>');
					    $("#set-bank-tips").show();
	
					  // 设置支付URL
					   var href=$("#go2pay").attr("href");
					  if(href.indexOf("paymentInstalmentValue")==-1){
	                    //如果之前没有设置paymentInstalmentValue参数
	                    $("#go2pay").attr("href",href+"&paymentInstalmentValue=" + groupNum[0]);
	                    }else{
	                       $("#go2pay").attr("href", href.substring(0,href.indexOf("&paymentInstalmentValue")) +"&paymentInstalmentValue=" + groupNum[0]);
	                      }
					}
					if (!json.success) {
					
						ec.showError(json);
						return;
					}
			}
		});
	},
    
    //微信查询启动定时器
    wechatStartTimer : function() {
    	ec.order.payment.wechatTimer = setInterval('ec.order.payment.queryWechatOrder()', 2000);
    },
    
	//微信查询
    queryWechatOrder: function () {
      ec.order.payment.wechatCount--;
      if (ec.order.payment.wechatCount == 1)
      {
        clearInterval(ec.order.payment.wechatTimer);
      }
      new ec.ajax().get({
        url: '/wechat/order/query/' + $('input[name="orderCodes"]').val() + '.json',
        successFunction: function (json) {
          if (json.success) {
          	if(ec.order.payment.wechatTimer)
          	{
            	clearInterval(ec.order.payment.wechatTimer);
            }
            var url = '/wechat/order/pay/success?orderCode=' + json.orderCode + '&cashPay=' + json.cashPay + '&antiFraudTipText='
            + json.antiFraudTipText + '&photoPath=' + json.photoPath + '&photoName=' + json.photoName + '&productId=' + json.productId
            + '&showWBShare=' + json.showWBShare + '&rulesTxt4Share=' + json.rulesTxt4Share + '&defaultTitle4Share=' + json.defaultTitle4Share
            + '&buttonTxt4Share=' + json.buttonTxt4Share + '&prdName=' + json.prdName + '&maxOrderCode=' + json.maxOrderCode;
            window.location.href = url;
          }
        }
      }
      );
    },
	
	//花呗分期
	queryHuaBeiInstalment : function () {
		new ec.ajax().get({
		
			url : "/huabeiInstalment" + ".json",
			timeout : 10000,
			timeoutFunction : function() {
				alert("读取超时，请重试！");
			},
			successFunction : function(json) {
				if (json.success) {
					//定义分期的 名称
					var name="";
					//定义分期的期数
					var groupNum="";
					//定义分期的利率,用户承担费率
					var rateValue="";
					//定义分期的利率,商户承担费率
					var rateValue4vendor="";
					//商户承担利率的比例
					var offRate = "" ;
					//获取返回来的 所选银行的 可供选择的数据信息
					var selectedHuaBeiInstalmentList=json.selectedHuaBeiInstalmentList;
					//定义此订单的支付总金额
					var orderCashPay= $("#orderCashPay").val();
					//使用花呗的起始额度
					var hbStartValue = "" ;
					
					var flag = false ;
					
					//定义 分期付款的html内容样式
					var htmlContent=[];
					
					var tips = [] ;
					
					for(var i=0; i<selectedHuaBeiInstalmentList.length;i++){
							
					    name=selectedHuaBeiInstalmentList[i].installmentName;
					    groupNum=selectedHuaBeiInstalmentList[i].installmentPeriods;
					    rateValue=selectedHuaBeiInstalmentList[i].commissionRate;
					    rateValue4vendor=selectedHuaBeiInstalmentList[i].commissionRate4vendor;
					    offRate=selectedHuaBeiInstalmentList[i].vendorAffordRate;
					    hbStartValue = selectedHuaBeiInstalmentList[i].installmentThreshold ;
					    
					    if(parseFloat(orderCashPay) < 
								parseFloat(hbStartValue)){
							continue ;
						}
					    
					    flag = true ;
					  	//定义手续费 每期手续费=订单金额×每期费率×用户承担比例
						var rateFee=(parseFloat(orderCashPay)*parseFloat(rateValue)/100*parseFloat(100-offRate)/100).toFixed(2);
						//定义总费用
						var totalFee=(parseFloat(orderCashPay)+parseFloat(rateFee)).toFixed(2);
					    
						htmlContent.push('<dt class="p-stages">') ;
						//radio按钮
					   	htmlContent.push('<input type="radio" class="radio vam" name="hbGroupNum" title2="'+rateValue+'" title="'+ rateValue4vendor +'" value="'+groupNum+'" percent="'+offRate+'"></input>') ;
					   	//分期数
					   	htmlContent.push('<label class="vam">' + '<b>'+groupNum+'</b>' + '&nbsp;期</label>') ;
					   	//每期需要交费x期数
					   	htmlContent.push('<a class="p-amount"><b>¥ '+(parseFloat(totalFee)/groupNum).toFixed(2)+'</b>&nbsp;x&nbsp;<a>'+groupNum+'</a>') ;
					   	htmlContent.push('<span>(') ;
					   	//促销语
					   	if(selectedHuaBeiInstalmentList[i].promoDesc != null 
								&& selectedHuaBeiInstalmentList[i].promoDesc != ''){
					   		htmlContent.push('<b>'+selectedHuaBeiInstalmentList[i].promoDesc+"</b>，") ;
						}
					   	//是否免手续费
						if(offRate < 100){
							htmlContent.push('含手续费'+(parseFloat(rateFee)/groupNum).toFixed(2)+'元/期，费率'+parseFloat(rateValue).toFixed(2)+'%，') ;
						}
						htmlContent.push('共计 <span>'+parseFloat(totalFee).toFixed(2)+'</span>元)</span></a></dt>') ;
					}
					
					if(!flag){
						tips.push('<div>') ;
						tips.push('<label class="label-error"></label><p>待支付金额低于花呗分期起始额度（￥'+hbStartValue+'）</p>') ;
						tips.push('</div>') ;
						tips.push('<div class="f">') ;
						tips.push('<s class="icon-arrow-down"></s>') ;
						tips.push('</div>') ;
						$("#huabei_tips").html(tips.join(""));	
						$("#huabei_tips").show();
						
					}else{
						htmlContent.push('<dd class="p-rule "><p>花呗分期是什么？<br><span>花呗分期是蚂蚁金服（支付宝公司）提供的先消费后分期还款的赊购服务。</span></p></dd>') ;
						$("#instalment-huabei").html(htmlContent.join(""));
						//显示分期付款支付内容
						$("#instalment-huabei").show();
						
						//增加点击事件
						$(".p-stages").click(function(){
							  
							$(this).children("input.radio").attr('checked','true') ;
						});
						
						$("input[name=hbGroupNum]").click(function(){
							$("#huabei_nochoicegroup").hide() ;
						}) ;
					}
					
				}
				if (!json.success) {
					ec.showError(json);
					return;
				}
			}
		});
	}
}; 
//加载支付方式
ec.order.payment.bind();


// 绑定立即支付事件
$("#go2pay").bind("click",function(){
  ec.order.gopay();
});

//绑定分期选中事件
$("#instalment-description").delegate(":input","click",function(){
  //获取订单的支付金额
  var cashPay= parseFloat($("#orderCashPay").val());
  //获取当前选择的期数
  var groupNum=parseFloat($(this).val());
  //获取当前的利率
  var currentRate=parseFloat($(this).attr("title"));
   //如果总的期数大于1
  if($("[name='groupNum']").length>1 ){
    //总费用
    $("#totalCashPay").html((cashPay+cashPay*currentRate/100).toFixed(2));
   //手续费（利息）
    $("#ratePay").html((cashPay*currentRate/100).toFixed(2));
    //分的期数
    $("#numValue").html(groupNum);
    //每期还多少钱
     $("#cashFee").html(((cashPay+cashPay*currentRate/100)/groupNum).toFixed(2));
     
	// 设置支付URL
	 var href=$("#go2pay").attr("href");
	 
	 
	  
	  if(href.indexOf("paymentInstalmentValue")==-1){
	    //如果之前没有设置paymentInstalmentValue参数
	   $("#go2pay").attr("href",href+"&paymentInstalmentValue=" + groupNum);
	 }else{
	      $("#go2pay").attr("href", href.substring(0,href.indexOf("&paymentInstalmentValue")) +"&paymentInstalmentValue=" + groupNum);
	 }
	
  }
  
});

</script>
	
</div>





<!--提交订单-已付款 -->
<textarea id="box-content" class="hide">&lt;div 
class="order-paid-area-2" id="order-pay-tips"&gt;
	&lt;table cellspacing="0" cellpadding="0" border="0"&gt;
		&lt;tbody&gt;
			&lt;tr&gt;&lt;td class="vat"&gt;&lt;s 
class="icon-tips-2"&gt;&lt;/s&gt;&lt;/td&gt;
			&lt;td&gt;
				&lt;h5&gt;请您在新打开的页面上完成付款&lt;/h5&gt;
				&lt;p&gt;付款完成前请不要关闭此窗口&lt;/p&gt;
				&lt;p&gt;完成付款后请根据您的情况点击下面的按钮&lt;/p&gt;
				&lt;div class="popup-button-area"&gt;
				&lt;a title="付款遇到问题" class="button-go-payhelp" href="javascript:;" 
onclick="ec.order.toggleFaqList()"&gt;&lt;span&gt;付款遇到问题&lt;/span&gt;&
lt;/a&gt;
				&lt;a title="已完成付款" class="button-paid-2 box-ok" href="javascript:;"
 onclick="return 
false;"&gt;&lt;span&gt;已完成付款&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
				 &lt;div class="order-paid-link-area"&gt;&lt;a class="fcn box-ok" 
title="返回选择其他支付方式" 
onclick="ec.order.payment.edit()"&gt;&lt;&lt;&nbsp;返回选择其他支付方式&lt;/a&gt;&
lt;/div&gt;
			&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
	&lt;/table&gt;
&lt;/div&gt;
&lt;div class="order-paid-faq-area hide" 
id="pay-faqList"&gt;&lt;/div&gt;
</textarea>
<!--提交订单-支付-常见问题-20121017 -->
<textarea id="pay-faqList-tpl" class="hide">
	&lt;div class="h"&gt;&lt;h5&gt;常见问题：&lt;/h5&gt;&lt;a 
href="javascript:;" title="隐藏" 
onclick="ec.order.toggleFaqList()"&gt;隐藏&lt;/a&gt;&lt;/div&gt;
	&lt;div class="b"&gt;
		&lt;dl&gt;
			&lt;dt&gt;1、	华为的付款流程是怎样的？&lt;/dt&gt;
			&lt;dd&gt;&lt;s class="arrow"&gt;&lt;/s&gt;
				
&lt;p&gt;华为目前支持网上银行（包括开通了网银功能的储蓄卡和信用卡）付款与支付宝付款，请在支付方式处选择适合您的方式。您提交订单后，页面
会提示您“立即支付”，请单击立即支付按钮，页面会自动进入支付宝或对应银行的网银支付界面，按照网页提示进行操作便可成功付款。&lt;/p&gt;
			&lt;/dd&gt;
		&lt;/dl&gt;
		&lt;dl&gt;
			&lt;dt&gt;2、	支付时提示我超过支付限额怎么办？&lt;/dt&gt;
			&lt;dd&gt;&lt;s class="arrow"&gt;&lt;/s&gt;
				
&lt;p&gt;如果您使用银行卡支付，不同的银行都有不同的支付限额，建议您拨打银行客服热线提高支付限额；您也可以使用第三方支付平台，将钱分批存
入第三方支付平台后进行支付。&lt;/p&gt;
			&lt;/dd&gt;
		&lt;/dl&gt;
		&lt;dl&gt;
			&lt;dt&gt;由于网络原因暂时无法完成支付，请问我购买的商品多久后还能继续支付？&lt;/dt&gt;
			&lt;dd&gt;&lt;s class="arrow"&gt;&lt;/s&gt;
				
&lt;p&gt;一般情况下，您的订单会被保留24小时，24小时内您都可以进行支付。在商品促销（降价、秒杀等）情况下，订单保留时间会缩短，建议您
及时进行支付。&lt;/p&gt;
			&lt;/dd&gt;
		&lt;/dl&gt;
	&lt;/div&gt;
	&lt;div class="f"&gt;&lt;a target="_blank" class="fcn" 
href="http://consumer.huawei.com/cn/help/payments/index.htm" 
title="更多问题"&gt;更多问题&nbsp;&gt;&gt;&lt;/a&gt;&lt;/div&gt;

</textarea>
<!--提交订单-支付-常见问题结束 -->

<script>
//立即支付
ec.pkg("ec.order");
ec.load("ec.box" , {loadType : "lazy"});
ec.load("ajax");
ec.load("ec.md5");

(function () {
	var _isClickOne = false;
	ec.order.delCart = function () {
		try {
			var sbs = "975001680";
			var types = "1";

			if (sbs && types)
			{
				var typeArray = types.split(",");
				var sbArray = sbs.split(",");
				for (var i = typeArray.length - 1; i >= 0; i--)
				{
					if (typeArray[i] === "6"||typeArray[i] === "7")
					{
						typeArray.splice(i, 1);
						sbArray.splice(i, 1);
					}
				}
				var data = {};
				data.sbs = sbArray.join(",");
				data.types = typeArray.join(",");
				ec.cart.del(data, null, true);
			}
		}
		catch(err) {}
	}
	
	ec.order.gopay = function (dom) {
		//BI统计
		_paq.push(['trackLink','订单提交成功-去支付', 'link', ' ']);
		ec.code.addAnalytics({hicloud:true});

		var content = $("#box-content").val();
			
		new ec.box(content, {
			boxid : "gopay-box",
			showButton : false,
			boxclass : "ol_box_3",
			title : "",
			width : 702,
			onok : function (box) {
				box.close();
			},
			onclose : function () {
				_isClickOne = false;
			}
		}).open();
		// 提交请求移到payment.ftl中处理
		//setTimeout(function (){gid("pay-go-form").submit();}, 500);

		
	};
	//显示隐藏支付常见问题
	ec.order.toggleFaqList = function () {
		var faqListHtml, $faqListObj = $("#pay-faqList");
		if (!_isClickOne) {
			faqListHtml = $("#pay-faqList-tpl").val();
			$("#gopay-box").css({"height":"auto", "top":"200px"});
			$faqListObj.html(faqListHtml);
			_isClickOne = true;
		}
		
		$faqListObj.toggle();
		$('#order-pay-tips').toggle();
	}

	//获取最后支付时间
	var lastPayTime = "2016-10-19 20:09";
	$('#lastPayTime').html(lastPayTime);
})();
ec.ready(function(){
	ec.order.delCart();
	//bi统计用
	ec.order.orderCode = "51090007889";

	var t = $("#bank-hove").find('.bank-tips').find('p').html() ? true : false;
	if(t) {
		$("#bank-hove").hover(function () {
			$(this).find('label').addClass('hover');
		}, function () {
			$(this).find('label').removeClass('hover');
		});
	}
	//--------删除掉页面代金券展示，及请求----如需恢复请查看SVN记录，edit at 20160706-----【官网一体化需求】
});
document.getElementById("headerWord").innerHTML="成功提交订单";
</script><script id="jsapi_loader0" loadtype="insert" type="text/javascript" src="/pay/jquery.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader0');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader0 fail!');} return; }ol._setLoadStatus("jquery.form","complete");})();</script><script id="jsapi_loader1" loadtype="insert" type="text/javascript" src="/pay/ajax.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader1');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader1 fail!');} return; }ol._setLoadStatus("ajax","complete");})();</script><script id="jsapi_loader2" loadtype="insert" type="text/javascript" src="/pay/md5-min.js"></script><iframe style="display: none;" src="javascript:false"></iframe><script src="/pay/dmpa-min.js" async="" id="dmpa_f_script"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader2');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader2 fail!');} return; }ol._setLoadStatus("md5/md5-min.js","complete");})();</script>
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


<div id="AutocompleteContainter_7dd0f" style="position: absolute; z-index: 9999; top: 0px; left: 0px;"><div class="autocomplete-w1"><div class="autocomplete" id="Autocomplete_7dd0f" style="display: none; width: 0px; max-height: 400px;"></div></div></div></body></html>