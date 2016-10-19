/*gongshun MX  2016.1.23 chan ping list JS */
var dthisnum = 0;
//var istablet = 0;
$(function(){
	var xtips = $(".list-filter-noresult-tooltip");
	 $('.list-slides')
    	.css('height', (810 * $(document).width() / 1920) | 0)
    	.flexslider({
      	animation: 'slide',
      	animationLoop: true,
      	controlNav: true,
      	directionNav: false,
      	slideshow: false,
      	pauseOnHover: false,
      	manualControls: '.list-slide-nav li',
      	namespace: 'list-slide-'
    });
    

    var scrollTimeout,
	$list = $('.list-items'),
	$compare = $('.list-compare'),
	listOffset,
	listHeight,
	breadcumbHeight = $('.list-main .cbg-nav').height(),
	mainNavHeight = $('#cbg-main-nav-wrapper').height();
  	$(window).on('scroll', function () {
    	clearTimeout(scrollTimeout);
    	scrollTimeout = setTimeout(scroll, 300);
  	}).on('resize', function () {
    	listOffset = $list.offset();
    	listHeight = $list.height();
  	}).trigger('resize');
    function scroll() {
    	var t = 0;
    	var st = (document.body.scrollTop || document.documentElement.scrollTop);
    	st = st;
    	var d = $("#cbg-footer-nav").height();
    	var oft = $list[0] ? $list.offset().top : 0;
    	var  h = $compare.height();
    	if(h==357){
    		st = st + 150;
    		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());      
			if (($(document).height()-200) <= totalheight){ 
				st = st-0;
			}
    	}
    	if(h==501){
    		st = st+300;
    		var wh = $(window).height();
    		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());      
			if (($(document).height()-100) <= totalheight){ 
				if(wh>1000){
					st = st-30;
				}else{
					st = st-140;
				}
			}
    	}
    	oft = (oft+h)-$("#cbg-footer-nav").height();
    	var t = Math.max(st - oft, 0);
    	if ( t  > st) {
      		t = listHeight - $compare.height();
    	}
		$compare.stop(true, true).animate({ 'margin-top': t }, 500);
  	}
    var cls_filter = 'list-filter-val-selected',
    cls_compare = 'list-item-compare-selected',
    buyTimeout,
    tooltip;
    $(document).on('click', '.list-item-compare', function (e) {
      	var $compareText = $(this).find('.compare-text');
      	if ($(this).hasClass(cls_compare)) {
        	$(this).removeClass(cls_compare);
        	$compareText.text($compareText.data('compare-text'));
        	$(document).trigger('compare', [false, e.target]);
      	}else {
        	if ($('.list-compare-body').find('.list-compare-item').length >= 3) {
          		if (tooltip) {
            		tooltip.hide();
          		}
          	
          	tooltip = $(this).find('.list-item-compare-tooltip').show();
          	e.stopPropagation();
          	return;
        	}
        	$(this).addClass(cls_compare);
        	$compareText.attr('data-compare-text', $.trim($(this).find('.compare-text').text()));
        	$compareText.text($compareText.data('cancel-text'));
        	$(document).trigger('compare', [true, e.target]);
      	}
    }) 
    .on('click', function () {
      if(tooltip) {
        tooltip.hide();
      }
      $(".list-filter-noresult-tooltip").hide();
    })
    .on('click', '.list-filter-val', function (e) {
     	dthisnum = $(this).position().top-5;
     	setTimeout(function () { doFilter(this )}, 100);
     	$(this).toggleClass(cls_filter);
     	//if('list-filter-val list-filter-val-selected'==$(this).attr("class")){
     	if('list-filter-val list-filter-val-selected'!=$(this).attr("class")){
     		$(".list-filter-noresult-tooltip").hide();
     	}
     	index = 0;
     	var f = $(".list-fiter-line");
     	var p = ""
     	var ade ="";
     	for(var i = 0; i < f.length; i++){
     		if(f.eq(i).find("a").find("span").hasClass("list-filter-val-selected")){
     			ade = "#"+ f.eq(i).attr("id")+" .list-filter-val-selected";	
     			var des =$(ade);
     			var nvals="[";
     			for(var d=0;d<des.length;d++){
     				nvals += "$"+$(des[d]).attr("id")+"$,"
     			}
     			if(nvals!=null&&nvals.indexOf(",")>0){
     				nvals = nvals.substring(0,nvals.length-1);
     			}
     			nvals += "]"
     			var screen = nvals;
     			if(screen != ""){
     				if(screen.indexOf(",")<0){
     					screen = screen.replace(/\[/g,"");
     					screen = screen.replace(/\]/g,"");
     				}	
					var strscreen = screen;
					screen = screen.replace(/\'/g,"@(-9)@");
					screen = screen.replace(/</g,"&lt;");
					screen = screen.replace(/\>/g,"&gt;");
					screen = screen.replace(/\$/g,"'");
				}
				p+= "'" + f.eq(i).attr("id") + "':" + screen + ","
     		}
     	}
     	if(p==""||p.length<2){
     		 var win_url = window.location.href.substring(0,window.location.href.indexOf("?"));
     		 var n_url = win_url+"?new=1";
     		 location.replace(n_url); 
     	}else{
     		//var parms = "{"+ p +"'xWebsites':'"+ SITE_CODE  +"'}";
     		var parms = "{"+ p +"'xWebsites':'consumer"+ SITE_CODE  +"','xHW_PBI1_LT':'31','dDocType':'ProductSpecification','structured_field_75':'1'}";
			parms = parms.replace(/&/g,"@(-7)@");   		
    		getPhonesByFilter(parms);
     	}
    })
    .on('compare', function (e, add, target) {
      target = $(target).closest('.list-item');
      var dDocName = target.attr("dDocName");
      if (!add) {
        $('.list-compare').find('[dDocName="' + dDocName + '"]').remove();
      } else {
        $('<div class="list-compare-item" dDocName="' + dDocName + '"><a class="list-compare-cancel" href="#">&nbsp;</a>' +
              '<img src="' + target.find('.list-item-image').prop('src') + '"/>' +
              '<div class="list-compare-name"><div class="list-compare-mask"></div><div class="list-compare-pname">' + target.find('.list-item-title').html() +
              '</div></div>' + '</div>'
            ).attr("dDocName", dDocName).appendTo('.list-compare-body');
      }
      var compare = $('.list-compare-body').children('.list-compare-item').length;
      if (compare > 1) {
        $('.list-compare-btn').show();
      } else {
        $('.list-compare-btn').hide();
      }
      $('.list-compare')[compare ? 'show' : 'hide']();
      scroll();
    })
    .on('click', '.list-compare-cancel', function (e) {
      var dDocName = $(this).closest('.list-compare-item').remove().attr("dDocName");
      $('.list-items').find('[ddocname="' + dDocName + '"] .list-item-compare').click();
      var compare = $('.list-compare-body').children('.list-compare-item').length;
      $('.list-compare-btn')[compare > 1 ? "show" : "hide"]();
      $('.list-compare')[compare ? 'show' : 'hide']();
      scroll();
      e.preventDefault();
    })
    .on('mouseenter', '.list-item-images', function (e) {
		$(this).find('.list-item-bg').stop(true, true).css('opacity', 0).animate({
       		opacity: 1
     	}, 1000)
     	.parent().siblings().find(".list-item-image").stop(true, true).css('opacity', 1).animate({
         	opacity: 0
       	}, 1000);
     	e.stopPropagation();
    })
    //qie huan tu pian JS out 
    .on('mouseleave', '.list-item-images', function (e) {
      	$(this).find(".list-item-image").stop(true, true).css('opacity', 0).animate({
       		opacity: 1
     	}, 1000)
       	.parent().siblings().find(".list-item-bg").stop(true, true).css('opacity',1).animate({
         	opacity: 0
       	}, 1000);
     	e.stopPropagation();
    });
    /*//shang cheng JS  over 
    .on('mouseenter', '.list-item-buy', function (e) {
      clearTimeout(buyTimeout);
      var $buyIcon = $(this);
      buyTimeout = setTimeout(function () {
      	$(e.target).closest('.list-item-footer').find('.list-item-place').css("width","100%");
        $(e.target).closest('.list-item-footer').find('.list-item-place').show();
        $buyIcon.addClass('cbg-icon-cart-large active');
      }, 200);
      e.stopPropagation();
    })
    //shang cheng JS  out
    .on('mouseleave', '.list-item-footer', function (e) {
      clearTimeout(buyTimeout);
      $(this).find('.list-item-place').hide();
      $(this).find('.list-item-buy').removeClass('cbg-icon-cart-large active');
      e.stopPropagation();
    });*/
    // mouseover to buy-link
    /*var buyItem;
  	$(document).on('mouseenter', '.list-slide-buy-toggle', function (e) {
    	if (buyItem) {
      	buyItem.stop(true, false).fadeOut();
    	}
    	buyItem = $(e.target).siblings('.list-slide-buy-item').stop(true, false).fadeIn();
    	e.stopPropagation();
  	})
  	.on('mouseleave', '.list-slide-btn', function (e) {
    	if (buyItem) {
      	buyItem.fadeOut();
    	}
  	});*/
    
  $(window).on('resize', function () {
    $('.minisite-banner img').css('height', (810 * $(document).width() / 1920) | 0)
  });
  $('.minisite-banner img')
    .css('height', (810 * $(document).width() / 1920) | 0)
    .flexslider({
      animation: 'slide',
      animationLoop: true,
      controlNav: true,
      directionNav: true,
      slideshow: true,
      pauseOnHover: true,
      manualControls: '.list-slide-nav li',
      namespace: 'list-slide-'
    });

  // Adjust list item margin
  $(window).on('resize', function () {
	   UpdateLR();
  });
  
  // list buy track event
  listTrackEvent();
});
$(document).ready(function () {	
	$(".list-filter-val").click(function () {
    });
	$(".list-compare-btn").click(function () {
      var p = "";
      $(".list-compare-item").each(function (idx) {
        p += "pro" + (idx + 1) + "=" + $(this).attr("dDocName") + "&";
      });
      if ($(".list-compare-item").size() > 1) {
        document.location.href = dburl + p.replace(/&$/, "")
      };
    });
});
function getPhonesByFilter(parms){
	$.ajax({
		type:"GET",
		async: false,
		url: iwcmbaseService + "getDeviceFilterCombin?sysNum=5824170&params=" + parms,	   
		dataType:"jsonp",
		jsonp:jsoncallback
	});
}
var index = 0;
var datas ;
var iwcmproducts = new Array()
var parms = ""
var ebool = true;
function jsoncallback(jdata){
	datas = eval('('+decodeURIComponent(jdata.jsonData)+')');
	if(datas.list.length>0){
		getUcmData(datas);
	}else{
		 var xtips = $(".list-filter-noresult-tooltip");
		 xtips.show();
		 xtips.css("top",dthisnum+"px");
		 $(".list-items").html("<div class='list-clear'></div>");
		 $(".list-compare-body").empty();
		 var compare = $('.list-compare-body').children('.list-compare-item').length;
     	 $('.list-compare-btn')[compare > 1 ? "show" : "hide"]();
     	 $('.list-compare')[compare ? 'show' : 'hide']();
     	 data.length = 0;
	}
}

/*end*/
var data = [];
function getUcmData(_datas){
	var quickSearchText = ""
	var vdatas = _datas.list;
	var end = (index+1)*6 <= vdatas.length?vdatas.length:(index+1)*6;
	data = [];
	var nbool = false;
	if(vdatas.length>0&&vdatas[0].ddocname!=undefined){
		for(var i = 0; i < vdatas.length; i++){
		nbool= false;
		if(vdatas[i]!=undefined){
			for(var ai=0;ai<allphones.length;ai++){
				if(vdatas[i].ddocname==allphones[ai].dDocName){
					nbool = true;
					data.push(allphones[ai]);
				}
			}
			if(!nbool){
				var p = {}
				p.dDocName 	= vdatas[i].ddocname;
				p.dDocTitle = vdatas[i].ddocname;
				p.xHW_Secret_Level_T = '1';
				data.push(p);
			}
		}
	}
	}
	if(data.length<=0){
		 var xtips = $(".list-filter-noresult-tooltip");
		 xtips.show();
		 xtips.css("top",dthisnum+"px");
		 $(".list-items").html("<div class='list-clear'></div>");
		 $(".list-compare-body").empty();
		 var compare = $('.list-compare-body').children('.list-compare-item').length;
     	 $('.list-compare-btn')[compare > 1 ? "show" : "hide"]();
     	 $('.list-compare')[compare ? 'show' : 'hide']();
	}
	showProduct(data);
}
function doFilter(t) {
    var xtips = $(".list-filter-noresult-tooltip");
}

function showProduct(dlist){
	var type = "mobile-phones";
	var vdatas = dlist;
	if(vdatas.length>0&&index==0){
		ebool = true;
	}
	if(vdatas.length>0&&ebool){
		 $(".list-items").empty();
	}
	var dend = (index+1)*6 <= vdatas.length?(index+1)*6:vdatas.length;
	var ibeg = index*6;
	for(var l = ibeg; l < dend; l++){
		if(dlist[l]!=undefined){
			 if(dlist[l]["dDocName"] != '' && dlist[l]["xHW_Secret_Level_T"] > 0){
				if(type == "mobile-phones"){
						setUcmPhoneData(dlist[l],type,"shaixuan")
				}else if(type.indexOf("home-media") > -1){
				}else if(type.indexOf("solutions") > -1){
				}	
			}	
		}else{
			setUcmPhoneData(vdatas[l],type,"shaixuan");
		}
	}
	if(vdatas.length>0){
		var divHtml = "<div class='list-clear' id='list-clear'></div>";  
  		$(".list-items").append(divHtml);
  		UpdateLR();
  		whertobyClass()
	}
} 


function strToDate(str){	
	if(str != null && str != ""){
		var strs = str.split("+");
		var dates = strs[0].split("/");
		var year = parseInt("20"+dates[2]);
		var month = dates[0]<10?"0"+dates[0]:dates[0];
		var day = dates[1]<10?"0"+dates[1]:dates[1];
		return new Date(year+"/"+month+"/"+day);
	}
	return "";
}

function setUcmPhoneData(pro,type,bztype){
	var xEventEndDate = strToDate(pro["xEVENT_END_DATE"]);	
	var currentDate = new Date();
	var title = pro["dDocTitle"];
	var _url = pro["url"];
	var xPImage = pro["xProductImage"];
	var xPColor = pro["xProductColor"];
	var img1,img2;
	if(xPImage!=undefined&&xPImage.indexOf(";")>1){
		img1 = xPImage.substring(0,xPImage.indexOf(";"));
	 	img2 = xPImage.substring(xPImage.indexOf(";")+1,xPImage.length-1);
	}else{
		img1 = "";
		img2 = "";
	}
	var comm = pro["xComments"]==undefined?"":pro["xComments"];
	
	if(xEventEndDate != ""){
		if(currentDate < xEventEndDate){
			title= title + "<sup style='font-size:10px;padding-bottom:4px' class='new_sign'>NEW</sup>";
		}
	}
	var divHtml =""; 
	divHtml += " <div class='list-item' data-class='' dDocName='"+pro["dDocName"]+"'>";
	divHtml += " <div class='list-item-images'>";
	if(img1=="img_con_mx_mbphone_none.jpg"){
		divHtml += "  <a href='#'><img class='list-item-bg' src='"+$("#ucmimgurl").val()+img2+"' alt=''></a>";
		divHtml += "  <a href='#'><img class='list-item-image' src='"+$("#ucmimgurl").val()+img1+"' alt=''></a>";
	}else{
		divHtml += "  <a href='"+_url+"'><img class='list-item-bg' src='"+imgpre+img2+"' alt=''></a>";
		divHtml += "  <a href='"+_url+"'><img class='list-item-image' src='"+imgpre+img1+"' alt=''></a>";
	}
	divHtml += " </div>";
	divHtml += " <div class='list-item-detail'>";
	divHtml += "  <div class='list-item-icon list-none'></div>";
	divHtml += " 	<div class='list-item-title'>"+pro["dDocTitle"]+"</div>";
	divHtml += " 	<div class='list-item-desc'>"+comm+"</div>";
	divHtml += " </div>";
	
	divHtml += " <div class='list-item-colorcompare'>";
	divHtml += "   <div class='list-item-colors'>";
	var strColor=[];
	if(pro["xProductColor"]!=undefined&&pro["xProductColor"].length>1){
		strColor = pro["xProductColor"].split(";");
	}
	var color1;
	for(var c=0;c<strColor.length;c++){
		color1 = strColor[c].substring(strColor[c].indexOf(":")+1,strColor[c].length);
		if(color1!=null && color1.length>0){
			divHtml += " <div class='list-item-color-sel'>";
			if(color1=="#ffffff"){
				divHtml += "<div class='list-item-color' style='background-color:"+color1+";border:#ccc solid 1px;'></div></div>";
			}else{
				divHtml += "<div class='list-item-color' style='background-color:"+color1+"'></div></div>";
			}
		}
	}		
    divHtml += "   </div>";
  	if(type!="wearables"&&type!="mobile-broadband"){
  		if(img1=="img_con_mx_mbphone_none.jpg"){
    	 divHtml += "   <div style='float: right;height: 35px;text-align: center;padding-left: 0px;padding-top: 10px;'>";
    	}else{
    	 	divHtml += "   <div class='list-item-compare' data-pros-id='"+pro["dDocTitle"]+"'>";
    	}
    	divHtml += "     <span class='list-item-compare-icon cbg-icon cbg-icon-plus'></span>";
    	divHtml += "     <span class='compare-text' data-cancel-text=" + LAG_CON_COMPARE_REMOVE + ">"+ LAG_CON_COMPARE +"</span>";
    	divHtml += "   </div>";
  	}
    
    divHtml += "   <div class='list-item-compare-tooltip'>";
    divHtml += "    <i>&nbsp;</i>" + LAG_CON_THAN_3;
    divHtml += "   </div>";
    divHtml += " </div>";
    divHtml += " <div class='list-clear'></div>";
    divHtml += " <div class='list-item-footer'>";    
    
    divHtml += "  <div class='list-item-operation'>";
    
    var xOneStore = pro["xOnlineStore"];
    	divHtml += "    <a class='list-item-more' onclick='javascript:seemorega(this)' href='"+_url+"'>"+LAG_CON_LEARN_MORE+"</a>";
    	
    	 if(xOneStore!=null && xOneStore.indexOf("HUAWEI_SHOP")>-1 ){
    	 	var sxOneStore = xOneStore.substring(xOneStore.indexOf("HUAWEI_SHOP:")+12,xOneStore.length); 
    	 	var url = sxOneStore.substring(0,sxOneStore.indexOf("@@"))
			divHtml += "<a href='"+url+"' target='_blank' class='list-item-buy cbg-icon cbg-icon-cart-small'>&#31435;&#21363;&#36141;&#20080;</a>";
    	 }else{
				divHtml += "<a style='display:none;' class='list-item-buy cbg-icon cbg-icon-cart-small'>&#31435;&#21363;&#36141;&#20080;</a>";
    	 }
    	 
    divHtml += "  </div>";
		
	/*	
	divHtml += "<div class='list-item-place' style='display: none;'><div class='line line1'><div class='item'><ul>";
	if(xOneStore!=null && xOneStore.length>0){
		var soneArry  = xOneStore.split("@@");
	}else{
			var soneArry  = [];	
	}	
		var allarry;
		var urlimg;
		var shname;
		for(var x=0;x<soneArry.length;x++){
			allarry = soneArry[x];
			shname += ","+allarry.substring(0,allarry.indexOf(":"));
			urlimg += "||"+allarry.substring(allarry.indexOf(":")+1,allarry.length);
		}
		if(shname != null && shname.split(",")[1] == "VMALL_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[1]+"' data-t-act='vmall' data-key2='vmall' target='_blank'>VMALL</a></li>";
		}else{
			divHtml += "<li class='x-disabled'><a href='javascript:void(0)' data-t-act='vmall' data-key2='vmall' target='_blank'>VMALL</a></li>";
		}
		if(shname != null && shname.split(",")[2] == "JD_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[2]+"' data-t-act='jd' data-key2='jd' target='_blank'>&#20140;&#19996;</a></li>";
		}else if(shname != null && shname.split(",")[1] == "JD_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[1]+"' data-t-act='jd' data-key2='jd' target='_blank'>&#20140;&#19996;</a></li>";
		}else{
			divHtml += "<li class='x-disabled'><a href='javascript:void(0)' data-t-act='jd' data-key2='jd' target='_blank'>&#20140;&#19996;</a></li>";
		}
		if(shname != null && shname.split(",")[3] == "TMALL_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[3]+"' data-t-act='tmall' data-key2='tmall' target='_blank'>&#22825;&#29483;</a></li>";
		}else if(shname != null && shname.split(",")[2] == "TMALL_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[2]+"' data-t-act='tmall' data-key2='tmall' target='_blank'>&#22825;&#29483;</a></li>";
		}else if(shname != null && shname.split(",")[1] == "TMALL_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[1]+"' data-t-act='tmall' data-key2='tmall' target='_blank'>&#22825;&#29483;</a></li>";
		}else{
			divHtml += "<li class='x-disabled'><a href='javascript:void(0)' data-t-act='tmall' data-key2='tmall' target='_blank'>&#22825;&#29483;</a></li>";
		}
		if(shname != null && shname.split(",")[4] == "SN_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[4]+"' data-t-act='sn' data-key2='sn' target='_blank'>&#33487;&#23425;</a></li>";
		}else if(shname != null && shname.split(",")[3] == "SN_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[3]+"' data-t-act='sn' data-key2='sn' target='_blank'>&#33487;&#23425;</a></li>";
		}else if(shname != null && shname.split(",")[2] == "SN_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[2]+"' data-t-act='sn' data-key2='sn' target='_blank'>&#33487;&#23425;</a></li>";
		}else if(shname != null && shname.split(",")[1] == "SN_CN"){
			divHtml += "<li><a href='"+urlimg.split("||")[1]+"' data-t-act='sn' data-key2='sn' target='_blank'>&#33487;&#23425;</a></li>";
		}else{
			divHtml += "<li class='x-disabled'><a href='javascript:void(0)' data-t-act='sn' data-key2='sn' target='_blank'>&#33487;&#23425;</a></li>";
		}
	divHtml += "</ul></div></div>"

		divHtml += "<div class='line line2'>";
			divHtml += "<div class='item'>";
				divHtml += "<ul>";
				divHtml += "<li><a href='http://consumer.huawei.com/cn/support/where-to-buy/store-location/index.htm'><i>&nbsp;</i>&#26597;&#25214;&#38646;&#21806;&#21830;&#24215;</a></li>";
				divHtml += "</ul>";
			divHtml += "</div>";
		divHtml += "</div>";
	*/
	divHtml += "</div>";
	divHtml += " </div>";
  	$(".list-items").append(divHtml);
}

function loadDataList(){	
	if(data!=""&&data!=undefined){
		index++;
		ebool = false;
		showProduct(data);
	}	
}

function UpdateLR(){
	var width = $('.list-items').width(),
	perWidth = 320,
	count = width / perWidth,
	perLine = Math.min(count | 0, 4),
	margin = (((width / perLine - perWidth) | 0) / 2) | 0;
	$('.list-item').css({'margin-left': margin,'margin-right': margin});		
	if(typeof(istablet)!='undefined' && istablet == 1){
		var tblist = $(".list-item")
		var d = margin*0.9
		for(var i = 0; i<tblist.length; i++){
			if(i%3==0)	tblist.eq(i).css({'margin-left': margin+d,'margin-right': margin-d})
			if(i%3==2)	tblist.eq(i).css({'margin-left': margin-d,'margin-right': margin+d})
		}
	}
}


function listTrackEvent(){
    $('.list-item-buy').on('click', function(){
    	var $item = $(this).closest('.list-item');
    	var name = $.trim($item.find('.list-item-title').text());
    	trackEvent('Entrance > BuyNow', name, 'ProductListPage');
    });
    
    $('#buy_now').on('click', function(){
    	var name;
    	var $this = $(this);
    	var label = $(this).attr('data-page');
    	
    	if(label === 'sup'){
    		name = $.trim($this.attr('data-proname'));
    		label = 'SupportDetailNavi';
    	}else{
    		name = $.trim($('#iptProName').val());
    		label = 'ProductDetailPage';
    	}
    	
    	name && trackEvent('Entrance > BuyNow', name, label);
    });
}
