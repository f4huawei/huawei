<!DOCTYPE html>
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="X-UA-Compatible" content="IE=edge; charset=utf-8">
<iframe style="display: none;" src="javascript:false"></iframe><script src="/cancel/ha.js" async="" id="ha"></script><script async="" src="/cancel/analytics.js"></script><script>
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

<title>我的订单_个人中心_华为</title>
<link rel="shortcut icon" href="http://www.vmall.com/favicon.ico">
<link href="/cancel/ec.css" rel="stylesheet" type="text/css">
<link href="/cancel/css_con_cn_ht_share.css" rel="stylesheet" type="text/css">

<link href="/cancel/main.css" rel="stylesheet" type="text/css">
<link href="/cancel/css_con_cn_ht_share.css" rel="stylesheet" type="text/css">
<script src="/cancel/jsapi.js" namespace="ec"></script><!--[if lte IE 6]><script>ol.isIE6=true;</script><![endif]--><!--[if IE 7]><script>ol.isIE7=true;</script><![endif]--><!--[if IE 8]><script>ol.isIE8=true;</script><![endif]-->
<!--[if lt IE 9 ]>
<script type="text/javascript" src="http://www.huawei.com/Assets/CBG/js/respond.min.js"></script>
<![endif]-->
<script src="/cancel/script_dev_en_jquery_min.js"></script>
<script src="/cancel/ec_002.js"></script> 
<script src="/cancel/ec.js"></script> 
<!--[if lt IE 9]><script src="http://shopcn-res.huaweistatic.com/integration/js/common/html5shiv.js"></script> <![endif]-->
<script src="/cancel/script_con_cn_ht_share.js"></script>
<script src="/cancel/pc-g-analytics.js"></script>

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
</script>
</head>



<body class="wide /cancel cbg insert-cbg-header">

<input id="casLoginUrl" name="casLoginUrl" value="https://hwid1.vmall.com/CAS/remoteLogin?loginChannel=27000000&amp;reqClientType=27&amp;loginUrl=http%3A%2F%2Fconsumer.huawei.com%2Fcn%2Faccount%2Flogin%2Findex.htm&amp;service=http%3A%2F%2Fshopcn.huawei.com%2Faccount%2Fcaslogin%3Furl%3D" type="hidden">
<script src="/cancel/base.js"></script>
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
<script>document.body.className = "wide /cancel cbg insert-cbg-header";</script>
<!-- 导航 -->
<div class="g-main">
	<div class="g">
		<div class="breadcrumb-area">
			
	        <em id="personCenter"><a href="{{ URL('/myroom') }}" title="个人中心">个人中心</a></em>
	        <em id="pathPoint">&gt;&nbsp;</em><span id="pathTitle">我的订单</span>
    	</div>
	</div>
</div>



<div class="hr-20"></div>
<div class="g">
    <div class="fr u-4-5"><!-- 20141212-栏目-start -->
<div class="section-header">
    <div class="fl">
        <h2><span>我的订单</span></h2>
    </div>
    
</div>
<!-- 20141212-栏目-end -->
<!-- 20141222-我的订单-订单类别-start -->
<div class="myOrder-cate" id="myOrder-cate">
	<ul>
		
		<li class="current"><a href="javascript:;" onclick="ec.member./cancelList.check(this,'unpaid');"><span>待支付<em id="count-seltime-2" data-num="1">1</em></span></a></li>
		
	</ul>
</div>
<!-- 20141222-我的订单-订单类别-end -->
<!-- 20141222-我的订单-列表-start -->
<div class="myOrder-record" id="myOrders-list-content">
	<!-- 20141222-我的订单-列表-订单合并-start -->
	<div class="myOrder-control">
		<label class="inputbox" for="checkAllBox">
			<!-- <input class="checkbox" id="checkAllBox" name="checkAllBox" type="checkbox"><span>全选</span> -->
		</label>
		<!-- <a href="javascript:;" class="button-operate-merge-pay" id="topButton" onclick="ec.member./cancelList.mergePay();"><span>合并支付</span></a> -->
	</div>
	<!-- 20141222-我的订单-列表-订单合并-end -->
	<div class="list-group-title">
		<table cellspacing="0" cellpadding="0" b/cancel="0">
			<thead>
				<tr>
					<th class="col-pro">商品</th>
					<th class="col-price">单价/元</th>
					<th class="col-quty">数量</th>
					<th class="col-pay">实付款/元</th>
					<th class="col-operate">订单状态及操作</th>
				</tr>
			</thead>
		</table>
	</div>
	
  <div class="list-group" id="list-group">
   <div class="list-group-item">
    <div class="o-info">
     <div class="col-info">
      <!-- <input class="checkbox" name="payCheck" paymentstatus="2" value="51090007872" type="checkbox" /> -->
      <!-- <span class="o-date">2016-10-18&nbsp;&nbsp;14:14</span> -->
     </div>
     <div class="col-state">
      审核通过&nbsp;|&nbsp;待支付
     </div>
    </div>
    @foreach($list as $ov)
    <div class="o-pro">
     <table cellspacing="0" cellpadding="0" b="" ancel="0">
      <tbody>
       <tr>
        <td class="col-pro-img">
        	<p class="p-img">
        		<a title="{{ $ov->xgoodsName }}" href="链接" target="_blank"><img class="nocomment-86011101010000501" alt="{{ $ov->xgoodsName }}" src="{{ asset('phoneImg') }}/{{ $ov->goodsPic }}" />

        		</a>
        	</p>
        </td>
        <td class="col-pro-info">
        	<p class="p-name">
        		<a title="title" target="_blank" class="nocomment-86011101010000501" href="链接">{{ $ov->xgoodsName }} {{ $ov->goodsColor }} {{ $ov->goodsMassage }}
        		</a>
        	</p>
        </td>
        <td class="col-price"><em>￥</em><span>{{ $ov->goodsPrice }}</span></td>
        <td class="col-quty">{{ $ov->goodsnumber }}</td>
        <td rowspan="1" class="col-pay"><p><em>￥</em><span>{{ $ov->goodsnumber*$ov->goodsPrice }}</span></p></td>
        <!-- 状态开始 -->
        <td rowspan="1" class="col-operate">
        	<p class="p-button">
        		{{ ($ov->state==1)?"已付款":"待付款" }}
        		<!-- $ov->state==1   已付款
        		$ov->state==0   待付款 -->

        		<!-- $y = {{ $ov->state==1 }} -->
        		<!-- echo $y; -->
        		<!-- if( {{ $ov->state }}=1 ){
	    			<a href="">{{ ($ov->state==1)?"已付款":"待付款" }}</a>
		        	}else{
		        	<a href="">{{ ($ov->state==0)?"已付款":"待付款" }}</a>
		        } -->
        	</p>

        </td>
        <!-- 状态结束 -->
       </tr>

      </tbody>
     </table>
    </div>
    @endforeach
   </div>
  </div>
  
	
	<!-- 20141222-我的订单-列表-订单合并-start -->
	<div class="myOrder-control " id="myOrder-control-bottom">
		<label class="inputbox" id="bottomCheckBoxDiv" name="bottomCheckBoxDiv">
			<!-- 20140819-我的订单-合并付款-start -->
				<!-- <input class="checkbox" id="bottomCheckAllBox" name="bottomCheckAllBox" type="checkbox"><span>全选</span> -->
			<!-- 20140819-我的订单-合并付款-end -->
		<!-- </label> -->
		<!-- <a href="javascript:;" class="button-operate-merge-pay" id="bottomButton" onclick="ec.member./cancelList.mergePay();"><span>合并支付</span></a> -->
	</div>
	<!-- 20141222-我的订单-列表-订单合并-end -->
	<div class="list-group-page">
		<div class="pager" id="list-pager" style="display: none;"></div>
	</div>
</div>
<!-- 20141222-我的订单-列表-end -->
<input id="colid" value="0" type="hidden">
<input id="checkid" value="unpaid" type="hidden">
<form action="#" method="get" id="gotoUrl"></form>
<textarea id="delAlert-tpl" class="hide">	&lt;div class="box-tips-area"&gt;
		&lt;p&gt;1：取消订单将作退款处理，一旦取消，不能恢复。&lt;/p&gt;
		&lt;p&gt;2：取消日起5个工作日内退款完成，是否确定操作。&lt;/p&gt;
	&lt;/div&gt;&lt;!-- 20140722-退换货-延保tips-end --&gt;
	&lt;div class="box-button"&gt;
		&lt;a class="box-ok" href="javascript:;"&gt;&lt;span&gt;确定&lt;/span&gt;&lt;/a&gt;
	    &lt;a class="box-/cancel" href="javascript:;"&gt;&lt;span&gt;取消&lt;/span&gt;&lt;/a&gt;
	&lt;/div&gt;
</textarea>

<!-- 物流信息模板 -->
<textarea id="interface-tpl" class="hide">	&lt;!--#macro interface data--&gt;
		&lt;table cellspacing="0" cellpadding="0" b/cancel="0"&gt;
			&lt;thead&gt;
				&lt;tr&gt;
					&lt;th class="col-log-date"&gt;处理时间&lt;/th&gt;
					&lt;th class="col-log-info"&gt;处理信息&lt;/th&gt;
				&lt;/tr&gt;
			&lt;/thead&gt;
			&lt;tbody&gt;
				&lt;!--#list data as lst--&gt;
					&lt;tr&gt;
						&lt;td class="col-log-date"&gt;{#new Date(parseInt(lst.logTime)).format("yyyy-MM-dd HH:mm:ss")}&lt;/td&gt;
						&lt;td class="col-log-info"&gt;{#lst.logDescription}&lt;/td&gt;
					&lt;/tr&gt;
				&lt;!--/#list--&gt;
			&lt;/tbody&gt;
		&lt;/table&gt;
	&lt;!--/#macro--&gt;
</textarea>

<textarea id="exchange-timeout" class="hide">	&lt;div class="box-prompt-error-area"&gt;
		&lt;div class="h"&gt;
			&lt;i&gt;&lt;/i&gt;
		&lt;/div&gt;
		&lt;div class="b"&gt;
			&lt;p&gt;对不起，您已经超过规定的退换货有效期，目前不能进行退换货操作！&lt;/p&gt;&lt;br/&gt;
			&lt;p&gt;温馨提示：如果您是在网店更换过机器或者在华为换过机器，请您凭网店或者商品提供的检测单联系华为客服，在后台给你下换机申请单。&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="box-custom-button"&gt;
		&lt;a class="box-ok box-button-style-1" href="javascript:;"&gt;&lt;span&gt;确定&lt;/span&gt;&lt;/a&gt;
	&lt;/div&gt;
</textarea>

<textarea id="exchange-agreement" class="hide">		&lt;!-- 
20140828-对话框-协议-退换货办理协议-start --&gt;
		&lt;div class="box-agreement-area"&gt;
			&lt;p&gt;&lt;b&gt;尊敬的用户：&lt;/b&gt;&lt;/p&gt;
			&lt;p style="text-indent:2em;"&gt;您可选择以下方式进行退换货&lt;/p&gt;
			&lt;p 
style="text-indent:2em;"&gt;&lt;b&gt;一、寄回华为仓库进行检测退换货&lt;/b&gt;&lt;/p&gt;
			&lt;ul&gt;
				&lt;li style="text-indent:2em;"&gt;您好，寄回商品检测前，请您仔细阅读以下条款。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;1、寄回检测需要您先自行垫付寄回运费，待检测符合退换条件后，华为会返还您的运费。&lt;
/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;2、请确保寄回商品无人为损坏，否则无法办理退换货。人为损坏包括但不限于：未经授权的维修、
外力造成的碰撞破损、进液以及外观刮花划伤、掉漆等。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;3、退换货申请审核通过仅表示华为受理您的退换货申请，但不代表同意您的退换货，您可寄回华为
进行检测，具体判断有赖于商品是否有质量问题的检测结果以及其他退换货条件的满足。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;4、寄回检测换货，请确保将商品主机、完整标配、完整原厂包装一次性寄回，如缺少标配配件等将
无法更换。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;5、寄回检测退货，请确保将商品主机、完整标配、完整原厂包装、发票原件、赠品一次性寄回。&
lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;6、寄回检测后，不符合退换货规定的商品将原路到付寄回，运费将由您承担。&lt;/li&
gt;
			&lt;/ul&gt;
			&lt;p 
style="text-indent:2em;"&gt;&lt;b&gt;二、当地售后服务网点检测，并换货&lt;/b&gt;&lt;/p&
gt;
			&lt;ul&gt;
				&lt;li 
style="text-indent:2em;"&gt;您好，网点检测故障属实后，您可以选择直接在售后服务网点进行换机服务。&lt;/li&
gt;
				&lt;li 
style="text-indent:2em;"&gt;1、前往售后服务网点前请您拨打网点电话咨询是否可受理。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;2、请您将发票、故障商品携带齐全前往售后服务网点进行检测换货。&lt;/li&gt;
			&lt;/ul&gt;
			&lt;p 
style="text-indent:2em;"&gt;&lt;b&gt;三、当地售后服务网点开具检测报告，寄回华为退换货&lt;/b&gt;&
lt;/p&gt;
			&lt;ul&gt;
				&lt;li 
style="text-indent:2em;"&gt;您好，您可直接到当地就近华为售后服务网点进行检测，开具检测报告后寄回华为仓库进行退换
货。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;1、前往售后服务网点前请您拨打网点电话咨询是否可受理。&lt;/li&gt;
				&lt;li 
style="text-indent:2em;"&gt;2、请您将发票、故障商品携带齐全前往售后服务网点进行检测换货。&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;&lt;!-- 20140828-对话框-协议-退换货办理协议-end --&gt;
</textarea>
<textarea id="box-confirm" class="hide">&lt;!-- 20140722-退换货-延保tips-start --&gt;
	&lt;div class="box-tips-area"&gt;
		&lt;p&gt;请您收到货后，再确认收货。&lt;/p&gt;
	&lt;/div&gt;&lt;!-- 20140722-退换货-延保tips-end --&gt;
	&lt;div class="box-button"&gt;
		&lt;a class="box-ok" href="javascript:;"&gt;&lt;span&gt;确定&lt;/span&gt;&lt;/a&gt;
	    &lt;a class="box-/cancel" href="javascript:;"&gt;&lt;span&gt;取消&lt;/span&gt;&lt;/a&gt;
	&lt;/div&gt;
</textarea>
<textarea id="box-pj" class="hide">&lt;!-- 20140722-退换货-延保tips-start 
--&gt;
&lt;div class="box-tips-area"&gt;
	&lt;p&gt;此次购物是否让您满意？给个评价吧！&lt;/p&gt;
&lt;/div&gt;
&lt;div class="box-custom-button"&gt;
	&lt;a class="box-/cancel box-button-style-2" 
href="/member/prdRemarkView.html" 
target="_blank"&gt;&lt;span&gt;去评价&lt;/span&gt;&lt;/a&gt;
    &lt;a class="box-/cancel box-button-style-1" 
href="javascript:;"&gt;&lt;span&gt;关闭&lt;/span&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;!-- 20140722-退换货-延保tips-end --&gt;
</textarea>
<script src="/cancel//cancelList.js"></script><script id="jsapi_loader0" loadtype="insert" type="text/javascript" src="/cancel/jquery.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader0');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader0 fail!');} return; }ol._setLoadStatus("jquery.form","complete");})();</script><script id="jsapi_loader1" loadtype="insert" type="text/javascript" src="/cancel/ajax.js" charset="utf-8"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader1');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader1 fail!');} return; }ol._setLoadStatus("ajax","complete");})();</script><script id="jsapi_loader2" loadtype="insert" type="text/javascript" src="/cancel/movebar.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader2');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader2 fail!');} return; }ol._setLoadStatus("jquery.movebar/movebar.min.js","complete");})();</script>
<script src="/cancel/add.js"></script><script id="jsapi_loader3" loadtype="insert" type="text/javascript" src="/cancel/rater-star.js"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader3');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader3 fail!');} return; }ol._setLoadStatus("RaterStar/rater-star.js","complete");})();</script>
<script>
ec.load("ec.pager");
</script><script id="jsapi_loader4" loadtype="insert" type="text/javascript" src="/cancel/pager-min.js" charset="gbk"></script><iframe style="display: none;" src="javascript:false"></iframe><script src="/cancel/dmpa-min.js" async="" id="dmpa_f_script"></script><script>(function(){var time = 0,el = document.getElementById('jsapi_loader4');if(!el || (el.readyState && 'complete' != el.readyState)){ if(time<10){ setTimeout(arguments.callee,30); time++; }else{ logger.error('load the script of id jsapi_loader4 fail!');} return; }ol._setLoadStatus("ec.pager/pager-min.js","complete");})();</script></div>
	<div class="fl u-1-5">
    	

<!--左边菜单 -->
<div class="mc-menu-area">
	<!--<div class="h"><a href="/member?t=1476771296570" class="button-go-mc" title="我的商城"><span>我的商城</span></a></div> -->
    <div class="b">
        <ul>
        	<li class="b-item-list">
        		<h3>
        			<em class="b-icon1"></em>
        			<span>订单中心</span>
        		</h3>
            	<ol>
                	<li id="li-/cancel" class="current"><a href="http://shopcn.huawei.com/member//cancel?t=1476771296570" title="我的订单"><span>我的订单<em>1</em></span></a></li>
                </ol>
            </li>
            
        </ul>
    </div>
    <div class="f"></div>
</div>
    </div>
</div>
<div class="hr-80"></div>

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


<div id="AutocompleteContainter_dcef4" style="position: absolute; z-index: 9999; top: 0px; left: 0px;"><div class="autocomplete-w1"><div class="autocomplete" id="Autocomplete_dcef4" style="display: none; width: 0px; max-height: 400px;"></div></div></div><div id="ec_ui_loading" class="ec_ui_loading" style="display: none;"></div></body></html>