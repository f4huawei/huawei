if(portUrl=="" || portUrl==null || portUrl=="null"){
	var portUrl = "http://www.huawei.com/";
}
if(webTestUrl=="" || webTestUrl==null || webTestUrl=="null"){
	var webTestUrl = "http://www.huawei.com/";
}
if(webUatUrl=="" || webUatUrl==null || webUatUrl=="null"){ 
	var webUatUrl = "http://consumer.huawei.com/";
} 
//var webTestUrl = "http://webtest-sit.huawei.com/";
//var webUatUrl = "http://consumer.huawei.com/"
//var webUatUrl = "http://nkweb-uat.huawei.com/";

var searchProductUrl = portUrl + "iwcmmarketing/support_searchProduct.action";
var AllSearchUrl = portUrl + "iwcmmarketing/consumer_isearch.action";
var iwcmbaseService = webTestUrl + "iwcmcustom/"; 
var baseurlCmkt = webUatUrl + "cmkt/services/";  
var baseurl = webUatUrl + "support/services/"; 
var baseServletUrl = webUatUrl + "support/servlet/";
var baseServletUrlCmkt = webUatUrl + "cmkt/servlet/";  
var searchNewsUrl= portUrl + "iwcmmarketing/support_searchNews.action";
var isearchUrl = webUatUrl + "support/services/service/isearch/open/list";
var searchSolutionUrl = "http://www.huawei.com/iwcmmarketing/support_searchSolutionOrCase.action";

var contactUsProvienceService = "base/place/country/china";
var filterService = "getDeviceFilter?sysNum=5824170&params=";
var productIDSevice = "service/product/list";
var productTypeService = "service/product/category";
var fileListService = "service/file/list";
var fileVersionService = "service/file/version/list"
var fileInfoService = "service/file/info"; 
var faqlistService =  "service/faq/list"; 
var faqinfoService = "service/faq/info"
var faqAppraise = "service/material/feedback/save"
var languageInfoService = "service/file/languageInfo";
var allSupportService = "service/search/list";
var availabilityNotice = "service/bulletin/active";
var bulletininfoService = "service/bulletin/info";
var conutryService = "base/place/country/site"
var cityService = "base/place/list"; 
var addressListService = "service/network/list";
var addressInfoService = "service/network/info"; 
var copyrightListService ="service/copyright/list";
var serviceCopyrightInfo ="service/copyright/info";
var bulletinListService ="service/bulletin/active";
var newsletterSubscribe = "service/newsletter/subscribe";
var newsletteruUnsubscribe = "service/newsletter/unsubscribe"; 
var basemailSupportsave = "base/mailSupport/save";			
var addstatistics = "service/score/ucm/statistics";
var getstatistics = "service/score/ucm/count";
var categoryService = "base/mailSupport/category";
var productSubjectService = "base/mailSupport/subject";
var chianprovince = "base/place/country/site";
var sparePartsPrice = "service/parts/list";
var sparePartsCategory = "service/parts/category";
var spareProduct = "service/parts/product/category";
var spareProductByID = "service/parts/product/list";
var changeFLag = true;
var sendAddressService = "service/sms/send";
var queryRepair	= "service/repair/queryRepair";
var searchYanBao = "service/warranty/info";
var searchStatusCheck = "service/warranty/detail/list";
var salesListService = "service/salespoint/list";
var faqTypeList = "service/faq/type/list";
var faqToThreeList="service/isearch/open/findThirdLevelList";
var faqToFourList="service/isearch/open/findFourLevelList";
//var prodTypeIDMap={mobile:"1000",tablet:"1539", mWifi:"1391", dCard:"1273", wingle:"1249", cpe:"6185"};
var prodTypeIDMap={mobile:"4903",tablet:"5442", mWifi:"5294", dCard:"5176", wingle:"5152", cpe:"6185"};
var networkProList = "service/network/problem/list";
var networkReserve = "service/network/reserve";
var networkModify = "service/tcsReservation/reservation/update";
var networkInfo = "service/network/reservation/info";
var netserviceInfo = "service/product/info";
var networkList = "service/network/reservation/list";
var networkSms = "service/network/reservation/sms";
var networkUpdate = "services/service/tcsReservation/reservation/repeal";
var nethotlineDetail = "service/network/reservation/hotline/detail";
var networkRights = "service/extuser/member/rights";
var networkcategory = "service/network/reservation/product/category";
var networkreserveadd = "service/tcsReservation/reserve";
var findreservationinfo = "service/tcsReservation/findReservationByReservationNo";
var networkreserveList = "service/tcsReservation/reservation/checkIsOrNotReservation";
var reservetimerange = "service/tcsReservation/reservation/time";
var reservationquery = "service/tcsReservation/findReservationByReservationNo";
var networkreservationUpdate = "service/tcsReservation/reservation/repeal";
var network_info = "service/tcsReservation/reservation/list";
var relproservice = "service/product/info/list"
var apkrelproservice = "service/safety/active";
var isearchapkUrl = "service/isearch/open/list";
//jixiu
var expressprovince = "base/place/country/service";
var expresscity = "base/place/list/child";
var expresscounty = "base/place/list/child";
var getexpresscenter = "service/tcsMailedRepair/findMailedRepairPartner";
var expressupdate = "service/tcsMailedRepair/mailedRepair/update";
var networkexpress = "service/tcsMailedRepair/mailedRepairApply";
var networkexpressInfo = "service/tcsMailedRepair/findReservationByMailedRepairNo";
var checkisServiceArea = "service/tcsMailedRepair/findAddressIsInServiceArea";
var checkexpressstatus = "service/warranty/info/list";
//yqx
var network_msgs = "service/policy/list";
var carryService = "service/warranty/info/findAllWarrantyInfo";
var baseHotlineInfo = "base/hotline/info";
var apkchecksupport = "service/safety/info";
var getRsDay = "service/tcsReservation/reservation/findReservateDate"; 
var sessionCode ="service/commonService/sessionuuid";
var sessionImg  ="http://nkweb-uat.huawei.com/cmkt/servlet/authMage";
var sessionConfirmation ="service/commonService/verification";


function getProductByID(typeid){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + productIDSevice,		  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{ "productId":typeid,"siteCode":SITE_CODE},
			success: function(data){
				var str = "<select name='c' id='support-select-2'><option value='0'> "+LAG_CON_SELECT_PRODUCT+" </option> ";		
				for(var i = 0; i<data.length; i++){
					var proname = ""
					if(data[i].productTypeName){
						proname = data[i].productTypeName;
					}else{
						proname = data[i].productCode
					}
					str += "<option value='" + data[i].productCode + "'> "+ proname + "</option>";
				}	
				str += "</select>";
				$("#pro_name").empty().show().append(str).show(1000);
				var property={
					id:"",
					name:"",
					type:"basic",
					readOnly:false,
					width:157,
					bgimg:$("#select_bg_02").val(),
					selectHeight:268,
					input:"",
					autoLoad:false,
					haveIcon:false
				};	
			},
			error: function(){}
	});	
}


function getProductTypes(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+productTypeService,	
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){
				var sData = new Array(14);
				for(var j = 0; j<data.length; j++){ 
					sData[j] = data[j];
				}				
				str = "<select id='support-select-1' onchange='getProductByID(this.value)'><option value='0'>"+LAG_CON_SELECT_TYPE+"</option>";
				for(var i = 0; i<sData.length; i++){
					if( null != sData[i]){
						str = str + "<option value="+sData[i].productId+">"+sData[i].productTypeName+"</option>";
					}	
				}
				str = str + "</select>";
				$("#pro_type").empty().append(str).show(1000);
				var property={
					id:"",
					name:"",
					type:"basic",
					readOnly:false,
					width:157,
					bgimg:$("#select_bg_02").val(),
					selectHeight:268,
					input:"",
					autoLoad:false,
					haveIcon:false
				};	
				var combo3=$.createGooCombo(document.getElementById("support-select-1"),property,10);
				
				combo3.selectValue(0);	
			},
			error: function(){}
	});
	
}
/*------Server Center Products--------*/
function getAllProductTypes(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + productTypeService ,	
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){	
				var p = new Array()
				for(var i = 0; i<data.length; i++){
					p.length = 0;
					p[0] = data[i].productId;
					p[1] = data[i].productTypeName;
					c4.addItem(i+1,p);
				}	
			},
			error: function(){}
	});
	
}
/*----------------------------*/
function getProductTypes1(){
	$(".cate-wrap").empty();	
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + productTypeService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){
				var sData = new Array(14);
				for(var j = 0; j<data.length; j++){ 
					sData[j] = data[j];
				}
				var str="";			
				for(var i = 0; i<sData.length; i++){
					if( null != sData[i]){
						str = str + "<a onclick='getProductByIDx2("+sData[i].productId+")'><p value="+sData[i].productId+">"+sData[i].productTypeName+"<p/></a>";
					}	
				}
				$(".cate-wrap").append(str);	
								
			},
			error: function(){}
	});
	
}
	
function  getTeachManuals(_data){
	$("#product-support-manuals-ul").empty();
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + fileListService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:_data,
			success: function(data){ 
				if(data.length < 1){
				  	$("#product-support-manuals-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{ 
					page_generation(data[0].totalRows,_data.curPage,_data.pageSize);
					var manual = "";
				  	for(var i = 0; i < data.length; i++){		 		
				 		var laninfo = "";	 
						for(var j = 0; j < data[i].languageList.length; j++){	
							laninfo = laninfo + "<option value="+data[i].languageList[j].languageId+">"+data[i].languageList[j].languageName+"</option>";
						}
						manual = manual+ "<li class='li' id='manual_" + data[i].fileId + "'>" +
						"<a class='view-bnt' target='_blank' href='" + data[i].downloadUrl + "&view=true'><strong>"+LAG_CON_VIEW_NOW+"</strong></a>" +
						"<h2 class='h2'><strong><a href='"+ durl+"?id="+data[i].fileInfoId + "&pro=" + _data.productCode+"'>" + data[i].fileName + "</a></strong></h2>" + 
						"<p class='p-1 clearfix'><span class='span-1 fl'>"+ getDateFormat(data[i].releaseDate) +"</span><span class='span-2 fl'>" + data[i].fileSize +"</span></p>" +
						"<p class='p-2'><select id='man-lan-" + i + "' name='" + data[i].fileId + "' onchange='changeManualLanguage(this)'>" + laninfo +"</select></p></li>";
				  	}
				  	$("#product-support-manuals-ul").empty().append(manual);
				 	for(var i = 0; i < data.length; i++){
						$("#man-lan-"+i).selectbox("","selectbox");	
					}
				  	if(typeof(_data.keywords)!="undefined" ){
				   		if(_data.keywords!=""){highlightSearchTermsManualsDown(_data.keywords,"","","","","product-support-manuals-ul");	}
					}
				  }
			},
			error: function(){}
	});	
}	
//get manual detail
function getMaunalinfo(proid){
	$.ajax({
		 	type:"GET",
			async: false,
			url: baseurl + fileInfoService, 		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileInfoId":proid,"siteCode":SITE_CODE},
			success: function(data){
				if(data.returnCode == 0 || data.returnCode == "0"){
					$(".detail-left-01 h2 strong").text(data.fileName);
					$(".detail-left-03").html(data.fileInfo);
					$(".li-1 .span-2").text(getDateFormat(data.releaseDate));
					$(".li-2 .span-2").text(data.fileSize);
					$(".view-bnt-02").attr("href",data.downloadUrl);
					$(".detail-right .ul .li-4").attr("name",data.fileId);
					$(".view-bnt-02").click(function(){
						trackEvent("manuals",data.fileName,"sup-downloads");
						var source_url = $(this).attr("href")
						var source_name = $(".detail-left-01 h2 strong").text()
						_bfd_Download(source_url,source_name,source_type)
					});
					
					if(data.languageList){
						for(var j = 0; j < data.languageList.length; j++){
				  			var laninfo = "<option value="+data.languageList[j].languageId+">" + data.languageList[j].languageName + "</option>";
				  			$("#support-manuals-lan").append(laninfo);
						}
					}
					$(".manual_detail").show();
					$("#support-manuals-lan").selectbox("","selectbox");
					document.title= data.fileName +" - "+LAG_CON_HW_BG;;
				}
			},
			error: function(){
				//window.location = $("#errorpage").attr("href");
			}		
	});
}
//change manual list language
function changeManualLanguage(obj){
	var langid = $(obj).val();
	var fileid = $(obj).attr("name");
	var p = "#manual_"+fileid;
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + languageInfoService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileId":fileid,"languageId":langid},
			success: function(data){
				$(p).find(".h2 strong a").text(data.fileName); 
			},
			error: function(){}
	});	
}
//change manual info language
function changeManualinfoLanguage(obj){
	var langid = $(obj).val();
	var fileid = $(".detail-right .ul .li-3").attr("name");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + languageInfoService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileId":fileid,"languageId":langid},
			success: function(data){
				$(".detail-left-01 h2 strong").text(data.fileName);
				$(".detail-left-03").text(data.fileInfo);
			},
			error: function(){}
	});		
}

function getTeachFAQs(_data){
	$("#product-support-faq-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + faqlistService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:_data,
			success: function(data){
			  $("#waite_all_product").hide();
				if(data.length < 1){ 
				  	$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				 }else{	
				 	var faq = "";
				 	page_generation(data[0].totalRows,_data.curPage,_data.pageSize);
				 	for(var i = 0 ; i < data.length; i++){
				 		var faqdurl = durl +"?pro=" + _data.productCode + "&id="+ data[i].faqId
						faq= faq + "<li class='li-0'><div class=anchor><a name=anchor-1></a></div>" + 
						"<div class='div-01 clearfix'><h2 class=p1 fl'><a class='a-1' onclick=window.open('"+faqdurl+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><strong>"+ data[i].title +"</strong></a></H2>" +
						"<p class='p2 fr'>ID:"+ data[i].faqCode +"</p></div></li>"			
				 	}
				 	$("#product-support-faq-ul").append(faq)
				 }
				 if(typeof(_data.keywords)!="undefined"  && _data.keywords!=""){
				  	highlightSearchTerms(_data.keywords,"","","","","product-support-faq-ul");
				 } 
			},
			error: function(){}
	});	
}
// get faq info	
function getFaqInfo(proid){
	$("#product-support-faq-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + faqinfoService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"faqId":proid},
			success: function(data){ 
				if(data.returnCode == "0"){
					$(".support-current").text(data.title);
					$(".div-03 .left .left-01").html(data.answer);
					$(".faq-feedback").show();
					document.title= data.title+" - "+LAG_CON_HW_BG;
				}else{
					$(".faq-feedback").empty().append("<div align='center'>Wrong FaqID</div>").show();
				}
			},
			error: function(){}
	});	
}

//set faq view Appraise	
function setFaqAppraise(appraise){
	$("#product-support-faq-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + faqAppraise,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:appraise,
			success: function(data){},
			error: function(){}
	});	
}

//get  software
function getTeachSoftware(_data){
	$(".product-support-downloads ul").empty();
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + fileListService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:_data,
			success: function(data){
				if(data.length < 1){
				  	$(".product-support-downloads ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{	
					var soft = ""
					
					page_generation(data[0].totalRows,_data.curPage,_data.pageSize);
				  	for(var i = 0; i < data.length; i++){
				  		soft = soft +"<li class='li'>" + 
						"<a class='download-bnt' href='" + data[i].downloadUrl +"'><strong>"+LAG_CON_DOWNLOAD_NOW+"</strong></a>" + 
						"<h2 class='h2'><strong><a href='" + durl+"?id="+data[i].fileInfoId + "&pro="+ _data.productCode +"'>" + data[i].fileName + "</a></strong></h2>" + 
						"<p class='p-1'>" + (data[i].fileIntroduce==null?'':data[i].fileIntroduce) + "</p>" + 
						"<p class='p-2 clearfix'><span class='span-1 fl'>" + getDateFormat(data[i].releaseDate) + "</span><span class='span-2 fl'>" + data[i].fileSize + "</span></p></li>";
				  	}
				  	$("#product-support-downloads-ul").append($(soft)).show();
				   if(_data.keywords!="" && typeof(_data.keywords)!="undefined" ){
				   		highlightSearchTerms(_data.keywords,"","","","","product-support-downloads-ul")
				  }
				 
				}
			},
			error: function(){}	
	});	
}
//get software detail
function getSoftinfo(proid){
	$.ajax({
		 	type:"GET",
			async: false,
			url:  baseurl + fileInfoService,			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileInfoId":proid,"siteCode":SITE_CODE},
			success: function(data){
				$(".product-support-downloads").attr("name",data.fileId)
				$(".detail-left .detail-left-01 .fl strong").text(data.fileName);
				$(".detail-left .detail-left-03").html(data.fileInfo);
				if(data.supportLanguage){
					$(".detail-left .detail-left-07").text(data.supportLanguage.replace(/\/{1}/g,", "));
				}
				$(".detail-right .ul .li-2 strong").text(getDateFormat(data.releaseDate));
				$(".detail-right .ul .li-4 strong").text(data.fileVersion);
				$(".detail-right .ul .li-6 strong").text(data.fileSize);
				if(data.languageList){
					for(var j = 0; j < data.languageList.length; j++){
				  		var laninfo = "<option value="+data.languageList[j].languageId+">" + data.languageList[j].languageName + "</option>";
				  		$("#support-download-lan").append(laninfo);
					}	
				}
				$(".detail-right .download-bnt").attr("href",data.downloadUrl);
				$(".detail-right .download-bnt").click(function(){
					trackEvent("downloads",data.fileName,"sup-downloads")
					var source_url = $(this).attr("href")
					var source_name = $(".detail-left-01 h2 strong").text()
					_bfd_Download(source_url,source_name,source_type)
				});
				$(".product-support-downloads").show();
				$("#support-download-lan").selectbox("","selectbox-3");	
				document.title= data.fileName+" - "+LAG_CON_HW_BG;
			},
			error: function(){
				window.location = $("#errorpage").attr("href");
			}		
	});
}


//change software detail language
function changeSoftinfoLanguage(obj){
	var fileid = $(".product-support-downloads").attr("name");
	var langid = $(obj).val();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + languageInfoService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileId":fileid,"languageId":langid},
			success: function(data){
				$(".detail-left .detail-left-01 .fl strong").text(data.fileName);
				$(".detail-left-03").html(data.fileInfo);	
			},
			error: function(){}
	});	
}


function Search_notice(nturl){
	$.ajax({
			type:"GET",
			async: false,
			url:baseurl + bulletinListService,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE},
			success: function(data){
				if(data.length > 0){
					$(".n_title").attr("href",nturl+"?id="+data[0].afficheId)
					$(".n_title").text(data[0].title) 
					$(".n_data").text(getDateFormat2(data[0].publishDate))
				}
				data.length > 1?$('#cbg-announcement .cbg-cta').show():$('#cbg-announcement .cbg-cta').hide()
			},
			error: function(){}
	});
}

function getDateFormat2(milliseconds){
	 var time= new Date(milliseconds);  
     var year=time.getFullYear();  
     var month=time.getMonth() +1;
     if(month < 10)	month = "0" + month;
     var day=time.getDate(); 
     if(day < 10)	day= "0" + day;
     var nowTime=year + "-" + month + "-" + day;
     return nowTime;
}
/*yqx notice detail*/
function Search_notice_detail(id){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + bulletininfoService,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"afficheId":id},
			success: function(data){
			    var timeShows = getDateFormat(data.publishDate).split("-");
				var $notice = $("#cbg-notice-article"); 
				//timeShows[1] = timeShows[1] > 9 ? timeShows[1] : "0"+timeShows[1];
				timeShows[2] = timeShows[2] > 9 ? timeShows[2] : "0"+timeShows[2];
				$notice.find(".y-contanttitle h1").text(data.title);
				$notice.find(".cbg-month").text(timeShows[0] +" "+ return_month(timeShows[1]));
				$notice.find(".cbg-day").text(timeShows[2]);
				$notice.find("#det-contant").html(data.content);
				/*
				$notice.find("span strong").text(data.title);
				$notice.find(".detail-time").text(getDateFormat(data.publishDate));
				$notice.find(".detail-content").html(data.content);
				*/
				$notice.show();
				document.title= data.title+" - "+LAG_CON_HW_BG;
			},
			error: function(){alert(LAG_CON_NO_INFOMATION);}
	});
}

//Search_notice_list by zuohaifeng
function Search_notice_list(params,nturl){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + bulletinListService,				  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:params,
			success: function(data){
				$("#waite_all_product").hide();
				$(".search-result-others").remove()
				if(data.length < 1){
				  		$(".press-mediacoverage-content").prepend("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,params.curPage,params.pageSize)
					for(var i = 0; i<data.length; i++){
						var description = data[i].description=="null"?data[i].description:"";
						var notice = "<li class=''><h2 class='h2'><a href='"+nturl+"?id="+data[i].afficheId+"'><strong>"+data[i].title+"</strong></a></h2>"
						+"<p class='p-1'>"+getDateFormat3(data[i].publishDate)+"</p>"
						+"<p class='p-2'>"+description+"</p>"
						+"<p class='p-3'><a href='"+nturl+"?id="+data[i].afficheId+"'>"+LAG_CON_MORE+"</a></p></li>";	
						$("#support-notice-list").append(notice);
					}		
				}
			},
			error: function(){
			}
	});
}
// getCopyrightProductByID by zuohaifeng
function getCopyrightProductByID(typeid){
	if(typeid == "0"){
		var params={"siteCode":SITE_CODE,"pageSize":"5","curPage":"1"};
		getCopyrightnotice(params,durl);
		$.ajax({
				type:"GET",
				async: false,
				url: baseurl + productIDSevice,			  		  
				dataType:"jsonp",
				jsonp:"jsonp",
				data:{ "siteCode":SITE_CODE,"productId":typeid},
				success: function(data){
					var str = "<script> $(document).ready(function(){});</script><select name='c' id='m2m-contact-2' onchange='hideValue(this.value)'><option value='0'> "+LAG_CON_SELECT_PRODUCT+" </option>";
					for(var i = 0; i<data.length; i++){
						str += "<option value="+data[i].productId+"> "+data[i].productCode+" </option>";
					}	
					str += "</select>";
					$("#pro_name").empty().append(str).show(1000);
					var property={id:"",name:"",type:"basic",readOnly:false,width:254,bgimg:$("#select_bg_05").val(),selectHeight:268,input:"",autoLoad:false,haveIcon:false};
					var getCopyrightProductByID = $.createGooCombo(document.getElementById("m2m-contact-2"),property,10);
					getCopyrightProductByID.selectValue(0);	
				},
				error: function(){}
		});	
	
	}
}


//getCopyrightProductTypes by zuohaifeng
function getCopyrightProductTypes(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + productTypeService ,	
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){
				for(var i = 0; i<data.length; i++){
					$("#m2m-contact-1").append("<option value="+data[i].productId+"> "+data[i].productCode+" </option>");
				}
				var property={id:"",name:"",type:"basic",readOnly:false,width:254,bgimg:$("#select_bg_05").val(),selectHeight:268,input:"",autoLoad:false,haveIcon:false};
				var CopyrightProductTypes = $.createGooCombo(document.getElementById("m2m-contact-1"),property,10);
				CopyrightProductTypes.selectValue(0);			
			},
			error: function(){}
	});
	
}
//getCopyrightnoticelist by zuohaifeng
function getCopyrightnotice(params,durl){
	$("#copyrightnotice-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + copyrightListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:params,
			success: function(data){
			$("#copyrightnotice-ul").empty();
				if(data.length < 1){
				  	$("#copyrightnotice-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,params.curPage,params.pageSize);
					for(var i = 0; i<data.length; i++){
						var $copyright = $("#fon_clone").clone();	
						$copyright.removeAttr("id");
						$copyright.find(".view-bnt").attr("href",durl+"?id="+data[i].noticeId);
				  		$copyright.find(".h2 strong a").text(data[i].title);
				  		$copyright.find(".h2 strong a").attr("href",durl+"?id="+data[i].noticeId);
				  		$copyright.find(".span-1").text(getDateFormat(data[i].publishDate));
				 		$copyright.find(".span-2").text(data[i].fileSize);
						$copyright.show();
						$copyright.appendTo("#copyrightnotice-ul");
					}
				}
			},
			error: function(){
			}
	});
}

//Search_copyright_detail by zuohaifeng
function Search_copyright_detail(id){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + serviceCopyrightInfo,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"noticeId":id},
			success: function(data){
				var $notice = $("#for_copyright_detail").clone();
				$notice.removeAttr("id");
				$notice.find("h2 strong").text(data.title);
				$notice.find(".detail-time").text(getDateFormat(data.publishDate));
				$notice.find(".detail-content").html(data.content);
				$notice.show();
				$notice.appendTo(".press-news-detail");
			},
			error: function(){
			}
	});
}




//get default fixplace
function getDefaultList(city){
	var _data = "{'siteCode':'"+SITE_CODE+"','placeId':" + city +"','pageSize:'" + pageSize +",'curPage':" +curPage +"'}";
	getAddressInfo(eval('('+_data+')'));
}
	
//get address info
function getAddressInfo(networkId){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + addressInfoService,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"networkId":networkId},
			success: function(data){
				$("#map_canvas").empty();
				$("#map_canvas").append("<div>networkName:"+data.networkName+"</div>");
				$("#map_canvas").append("<div>phone:"+data.phone+"</div>");
			},
			error: function(){}
	});			
}
	
//show page list
function page_generation2(rows,curPage,pageSize){
	var pages = Math.ceil(rows/parseInt(pageSize));
	var p = Math.ceil(curPage/4);
	var x = p*4;
	if(x > pages  ){
		x = pages;
	}	
	if(x>1){
		$(".page").show()
		if(curPage == 1){
			$(".page").append("<a class='prev1' ></a>"); 
		}else{
			$(".page").append("<a class='prev' onclick='changePage(this)' id="+(curPage-1)+"></a>");
		}
		if(x > 1){
			for(var i = (p-1)*4 + 1; i <= x; i++){
				if(curPage == i){
					$(".page").append("<a class='a-2' onclick='changePage(this)' id=" + i + "></a>");
				}else{
					$(".page").append("<a class='a-1' onclick='changePage(this)' id=" + i + "></a>");
				}
			}
		}
		if(curPage == pages){
			$(".page").append("<a class='next1'></a>");			
		}else{
			$(".page").append("<a class='next' onclick='changePage(this)' id="+(parseInt(curPage)+1)+"></a>");
		}		
	}
		
}

//Goabal date format
function getDateFormat(milliseconds){
	 var time= new Date(milliseconds);  
     var year=time.getFullYear();  
     var month=time.getMonth() +1;  
     var day=time.getDate();  
     var nowTime=year + "-" + month + "-" + day;
     return nowTime;
}
/*
function getDateFormat2(milliseconds){
	 var time= new Date(milliseconds);  
     var year=time.getFullYear();  
     var month=time.getMonth() +1;  
     	if(month.length<10){
     		month=+"0";
     	}else{
     		return month;
     	}
     var day=time.getDate();  
     	if(day.length<10){
     		day=+"0";
     	}else{
     		return day;
     	}
     var nowTime=year + "-" + month + "-" + day;
     return nowTime;
}
*/
function getDateFormat3(milliseconds){
	 var time= new Date(milliseconds);  
     var year=time.getFullYear();  
     var month=time.getMonth() +1;  
     var day=time.getDate();  
     var nowTime=year + "-" + month + "-" + day;
     return nowTime;
}
function getMonth(month){
	var english_month = "";
	switch (month) {
   		case 1 :
       		english_month = "January";
       		break;
   		case 2 :
       		english_month = "February";
       		break;
   		case 3 :
       		english_month = "March";
       		break;
       	case 4 :
       		english_month = "April";
       		break;
       	case 5 :
       		english_month = "May";
       		break;
       	case 6 :
       		english_month = "June";
       		break;
       	case 7 :
       		english_month = "July";
       		break;
       	case 8 :
       		english_month = "Augst";
       		break;
       	case 9 :
       		english_month = "September";
       		break;  		
       	case 10 :
      		english_month = "October";
       		break;
       	case 11 :
       		english_month = "November";
       		break;
       	case 12 :
       		english_month = "December";
       		break;
      	}
	return english_month;
} 
// height light keyword
jQuery.fn.highlight = function(pat) {
 function innerHighlight(node, pat) {
  var skip = 0;
  if (node.nodeType == 3) {
   var pos = node.data.toUpperCase().indexOf(pat);
   if (pos >= 0) {
    var spannode = document.createElement('font');
    spannode.className = 'highlight';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
   }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
   for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerHighlight(node.childNodes[i], pat);
   }
  }
  return skip;
 }
 return this.each(function() {
  innerHighlight(this, pat.toUpperCase());
 });
};

jQuery.fn.removeHighlight = function() {
 return this.find("font.highlight").each(function() {
  this.parentNode.firstChild.nodeName;
  with (this.parentNode) {
   replaceChild(this.firstChild, this);
   normalize();
  }
 }).end();
};
// subscribeNewsletter by zuohaifeng 2013-3-7
function subscribeNewsletter(params){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + newsletterSubscribe,
			dataType:"jsonp",
			jsonp:"jsonp",
			data:params,
			success: function(data){
				alert(LAG_CON_SUBSCRIBE);
			},
			error: function(){
			}	
	});	
}
// unsubscribeNewsletter by zuohaifeng 2013-3-7
function UnsubscribeNewsletter(params){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + newsletteruUnsubscribe,
			dataType:"jsonp",
			jsonp:"jsonp",
			data:params,
			success: function(data){
				alert(LAG_CON_UNSUBSCRIBE);
			},
			error: function(){
			}	
	});	
}
//chooose popular or recent products by zkf57466 2013-3-14
function changeSection(obj){
	window.location.href = $(obj).val();
}
//hightlight keywords
function highlightSearchTerms(searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag,myid)
{
  var searchArray =  searchText.split(" ");
  if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert(LAG_CON_PAGE_UNAVAILABLE);
    }
    return false;
  }
  var bodyText = "";
  bodyText = document.getElementById(myid).innerHTML;
  for (var i = 0; i < searchArray.length; i++) {
    bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
  }
  document.getElementById(myid).innerHTML = bodyText;
  return true;
}

function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='color:#bf1000;'>";
    highlightEndTag = "</font>";
  }
  
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}


//hightlight keywords
function highlightSearchTermsManualsDown(searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag,myid)
{
  var searchArray =  searchText.split(" ");
  if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert(LAG_CON_PAGE_UNAVAILABLE);
    }
    return false;
  }
  var bodyText = "";
  bodyText = document.getElementById(myid).innerHTML;
  for (var i = 0; i < searchArray.length; i++) {
    bodyText = doHighlightManualsDown(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
  }
  document.getElementById(myid).innerHTML = bodyText;
  return true;
}

//&#25628;&#32034;&#39029;&#38754;&#20851;&#38190;&#23383;&#39640;&#20142;&#26041;&#27861;
function doHighlightManualsDown(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='color:#FF9900;'>";
    highlightEndTag = "</font>";
  }
  
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}


//just for support/manuals keywords height start by zwx171617 
function heightManualKeywords(sourceID,keywords){
	var keys = keywords.split(" ");
	var newText = "";
	$("#" + sourceID).find("li .h2 strong a").each(function(){
		newText = $(this).text();
		for(var b = 0; b< keys.length; b++){
			newText = setHeightLight(newText,keys[b]);
		}
		$(this).empty().append(newText);
	});
}
function setHeightLight(oldText,key){
	var s=oldText;
	var k = s.toLowerCase();
	var s1=key.toLowerCase();
	var ar = [];
	var i = 0;
	var sk = 0;
	while(sk != -1){
		sk = k.indexOf(s1,sk);
		if(sk>-1){
			ar[i] = sk;
			sk++;
			i++;	
		}
	}
	var ss = ar.length - 1;
	for(var j=ss; j>-1; j--){
		s = s.substring(0,ar[j]) + "<font style='color:#FF9900;'>" + s.substring(ar[j],ar[j] + s1.length) +"</font>" + s.substring(ar[j]+s1.length,s.length);	
	}
	return s;	
}

//contact-us product
function Search_product_subject(){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+ productSubjectService,				  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE},
		success: function(data){
		
			
			var productSubject = new Array()
			for(var i = 0; i<data.length; i++){
				productSubject.length = 0;
				productSubject[0] = data[i].subjectId;
				productSubject[1] = data[i].subjectName;
				select6.addItem(i,productSubject);
			}
			$("#contact-select-6").bind("change",selectCategory)
		},
		error: function(){}
	});
}

function selectCategory(){
	var subjectId = $("#contact-select-6").val()
	select7.clearItems()
	var defaultCategory = new Array()
	defaultCategory[0] = "0"
	defaultCategory[1] = "Select a Category"
	select7.addItem(0,defaultCategory)
	select7.selectValue(0);	
	if(subjectId > 0){
		$.ajax({
			type:"GET",
			async: false,
			url: baseurl+ categoryService,				  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE,"subjectId":subjectId},
			success: function(data){	
				var categoryInfo =  new Array();
				for(var i = 0; i<data.length; i++){
					categoryInfo.length = 0
					categoryInfo[0] = data[i].categoryId
					categoryInfo[1] = data[i].categoryName
					select7.addItem(i+1,categoryInfo)	
				}	
			},
			error: function(){}
		});	
	}
}

function search_ApplicationGuides(){

	var ugHref =$("#forsspu1").attr("href");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+fileListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE,"pageSize":10,"curPage":1,"fileType":"solutions","productCode":productCode,"subFileType":"applicationguides"},
			success: function(data){
				$("#waite_all_product,#iwcm_page").hide();
				if(data.length < 1){
					$("#sup_userGuides").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,1,10);
					for(var i = 0; i<data.length; i++){
						var $UserGuides = $("#ug_list").clone();
						$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
						$UserGuides.find(".h2 strong a").text(data[i].fileName);
						$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
						$UserGuides.find(".p-1").text(data[i].fileIntroduce);
						$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
						$UserGuides.find("#sup_size").text(data[i].fileSize);
						$UserGuides.appendTo("#sup_userGuides");
				 		$UserGuides.show();
					}
				}
			},
			error: function(){}
	});
}
function search_Certifications(){
	var ugHref =$("#forsspu1").attr("href");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+fileListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE,"pageSize":10,"curPage":1,"fileType":"solutions","productCode":productCode,"subFileType":"certifications"},
			success: function(data){
				$("#waite_all_product,#iwcm_page").hide();
				if(data.length < 1){
					$("#sup_userGuides").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,1,10);
					for(var i = 0; i<data.length; i++){
						var $UserGuides = $("#ug_list").clone();
						$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
						$UserGuides.find(".h2 strong a").text(data[i].fileName);
						$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
						$UserGuides.find(".p-1").text(data[i].fileIntroduce);
						$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
						$UserGuides.find("#sup_size").text(data[i].fileSize);
						$UserGuides.appendTo("#sup_userGuides");
				 		$UserGuides.show();
					}
				}
			},
			error: function(){}
	});
}
function search_Datasheets(){
	var ugHref =$("#forsspu1").attr("href");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+fileListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE,"pageSize":10,"curPage":1,"fileType":"solutions","productCode":productCode,"subFileType":"datasheets"},
			success: function(data){
				$("#waite_all_product,#iwcm_page").hide();
				if(data.length < 1){
					$("#sup_userGuides").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,1,10);
					for(var i = 0; i<data.length; i++){
						var $UserGuides = $("#ug_list").clone();
						$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
						$UserGuides.find(".h2 strong a").text(data[i].fileName);
						$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
						$UserGuides.find(".p-1").text(data[i].fileIntroduce);
						$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
						$UserGuides.find("#sup_size").text(data[i].fileSize);
						$UserGuides.appendTo("#sup_userGuides");
				 		$UserGuides.show();
					}
				}
			},
			error: function(){}
	});
}
function search_UserGuides(){
	var ugHref =$("#forsspu1").attr("href");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+fileListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":SITE_CODE,"pageSize":10,"curPage":1,"fileType":"solutions","productCode":productCode,"subFileType":"userguides"},
			success: function(data){
				$("#waite_all_product,#iwcm_page").hide();
				if(data.length < 1){
					$("#sup_userGuides").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					page_generation(data[0].totalRows,1,10);
					for(var i = 0; i<data.length; i++){
						var $UserGuides = $("#ug_list").clone();
						$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
						$UserGuides.find(".h2 strong a").text(data[i].fileName);
						$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
						$UserGuides.find(".p-1").text(data[i].fileIntroduce);
						$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
						$UserGuides.find("#sup_size").text(data[i].fileSize);
						$UserGuides.appendTo("#sup_userGuides");
				 		$UserGuides.show();
					}
				}
			},
			error: function(){}
	});
}
function getUserGuides(id){
		$.ajax({
		 	type:"GET",
			async: false,
			url: baseurl+fileInfoService,			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"fileInfoId":id},
			success: function(data){
				$(".detail-left-01 h2 strong").text(data.fileName);
				$(".detail-left-03").text(data.fileInfo);
				$("#m2m_date strong").text(getDateFormat(data.releaseDate));
				$("#m2m_size strong").text(data.fileSize);
				$(".view-bnt-02").attr("href",data.downloadUrl);
				$(".detail-left").show();
				$(".detail-right").show();
				document.title= data.fileName+" - "+LAG_CON_HW_BG;
			},
			error: function(){
				
			}		
		});
	}
function search_UserGuidesPage(_data){
	$("#sup_userGuides").empty();
	$(".page").empty();
	var ugHref =$("#forsspu1").attr("href");
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+fileListService ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:$.parseJSON(_data),
			success: function(data){
				page_generation(data[0].totalRows,$.parseJSON(_data).curPage,10);
				for(var i = 0; i<data.length; i++){
					var $UserGuides = $("#ug_list").clone();
					$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
					$UserGuides.find(".h2 strong a").text(data[i].fileName);
					$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
					$UserGuides.find(".p-1").text(data[i].fileIntroduce);
					$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
					$UserGuides.find("#sup_size").text(data[i].fileSize);
					$UserGuides.appendTo("#sup_userGuides");
				 	$UserGuides.show();
				}
			},
			error: function(){}
	});
}
// add by xWX83293 2013-6-8
function coverStringLength(pram){
	    var myParam=pram;
	    if(myParam.indexOf("<img")>0){
	    	myParam = myParam.substring(0,myParam.indexOf("<img"));	
	    	if(myParam.length > 140){
	    		for(var i = 0 ; i < 100 ;i++){
					if(myParam.substring(140 + i,142 + i) == '</'){	
						for(var j=0; j<20 ; j++){
							if(myParam.substring(142 + i+j,143 + i+j) == ">"){
								myParam = myParam.substring(0,143 + i+j)+'...';
								return myParam;
							}
						}					
					}
				}
				for(var i = 0 ; i < 100 ;i++){  
					if(myParam.substring(140 + i,141 + i) == '>'){
						myParam = myParam.substring(0,141 + i)+'...';
						return myParam;
					}
				}
				for(var i = 0 ; i < 20 ;i++){
					if(pram.substring(140 + i,141 + i) == ' '){
						myParam = pram.substring(0,140 + i)+'...';
					}
				}	
				
			}else{
				myParam = myParam+"...";
			}
	    }
	    else if(myParam.length > 140){
	    	for(var i = 0 ; i < 100 ;i++){  
				if(myParam.substring(140 + i,142 + i) == '</'){	
					for(var j=0; j<20 ; j++){
						if(myParam.substring(142 + i+j,143 + i+j) == ">"){
							myParam = myParam.substring(0,143 + i+j)+'...';
							return myParam;
						}
					}					
				}
			}
			for(var i = 0 ; i < 100 ;i++){  
				if(myParam.substring(140 + i,141 + i) == '>'){
					myParam = myParam.substring(0,141 + i)+'...';
					return myParam;
				}
			}
			for(var i = 0 ; i < 20 ;i++){
				if(pram.substring(140 + i,141 + i) == ' '){
					myParam = pram.substring(0,140 + i)+'...';
				}
			}	
		}
		return myParam;
	}
	
	
function waitSeconds(numberMillis){
	var now = new Date(); 
	var exitTime = now.getTime()+numberMillis; 
	while(true){ 
		now = new Date(); 
		if(now.getTime() > exitTime) {
			return; 
		}
	}
} 

function simulaByName(productCode,simurl,flag,nodeID){	
		$.ajax({
			async:false,
			type:"GET",
			url:baseurl + "service/simulator/info",
			data:{"siteCode":SITE_CODE,"productCode":productCode},
			dataType:"jsonp",
			jsonp:"jsonp",
			success:function(data){
				if(data.url==null){
				}else{
					$("#id_sim_parent").removeClass("p-widen");
					var str="";
					if(flag=="1"){
						str+="<a id='id_sim' class='a-4-on' href='"+simurl+"'><strong>"+LAG_CON_SIMULATOR+"</strong></a>";
					}else {
						str+="<a id='id_sim' class='a-4' href='"+simurl+"'><strong>"+LAG_CON_SIMULATOR+"</strong></a>";
					}
					$("#id_sim_parent").prepend(str);		
				}
				$("#id_sim_parent").show();
			},
			error:function(){}
		});
	}

function supSimulaByName(productCode){
		$.ajax({
			async:false, 
			type:"GET",
			url:baseurl + "service/simulator/info",
			data:{"siteCode":SITE_CODE,"productCode":productCode},
			dataType:"jsonp",
			jsonp:"jsonp",
			success:function(data){
				if(data.url==null){
				}else{
					$("#id_sim_parent").prepend("<a id='id_sim' class='a-5'><strong>"+LAG_CON_SIMULATOR+"</strong></a>");	
					$("#id_sim").attr("href",$("#sim_url").attr("href"));
				}
				$("#id_sim_parent").show();
			},
			error:function(){}
		});
	}
function getSupSection(type){
	if(type == '31'){
		return  "mobile-phones"
	}else if(type == '36'){
		return"mobile-phones"
	}else if(type == '33'){
		return"smart-home"
	}else if(type == '32'){
		return"mobile-broadband"
	}else if(type == '37'){
		return"wearables"
	}
	return ''
}

function setSearchData(_data){	
	s=1;
	var spro  = _data
	var $spro = $("#cbg-featured-product")
	$spro.find(".cbg-searhch-pro-img").attr("src","http://consumer.huawei.com/cn" + spro[0].RESERVE_FIELD32)
	$spro.find(".cbg-searhch-pro-title").text(spro[0].autn_title)
	$spro.find(".cbg-btn").attr("href",spro[0].DOC_URL)
	getProforSearch(spro[0].DOC_ID)
	if(spro.length >1){
		$spro.find(".cbg-related-products").empty().show()
		$spro.find(".cbg-related-products").append("<h3>&#30456;&#20851;&#20135;&#21697;</h3>")
		for(var i = 1; i <spro.length; i++){
			var p =  "<div class='cbg-item'><img src='http://consumer.huawei.com/cn"+spro[i].RESERVE_FIELD32 +"' /> <a href='"+ spro[i].DOC_URL+"' class='cbg-dark'>"+spro[i].autn_title+"</a></div>"
        	$spro.find(".cbg-related-products").append(p)
		}
	}else{
		$spro.find(".cbg-related-products").empty().hide()
	}
	$("#search_prolist").show();
}



function returnVariable (field){
	if(field){
	 	return field;
 	}
 	return "";
}

function addStatistics(type,objectId){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurlCmkt + addstatistics,			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE,"type":type,"objectId":objectId},
		success: function(data){},
		error: function(){}
	});	
}

function getVideosViewTimes(_data,idx){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurlCmkt + "service/score/ucm/countcache"/*getstatistics*/,			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:_data,
		success: function(data){
		    for(var i=0;i<data.length;i++){
		        var times = data[i].visitedTimes;
		        if(typeof times != "number"){
				   times  = 0;
			    }
			    if(data[i].objectId){
				    var _d = data[i].objectId; 
				    $("#x-press-list").children("div").each(function(){
				        if($(this).attr("video") == _d){
				           $(this).find(".show-times").text(setText(times));
				           return false;
				        }
				    })
				}    
				    
			    	//$(".scrollable_demo>div").eq(i+idx).find(".show-times").text(setText(times))
		    }
		   /* 
			var times = data.visitedTimes
			if(typeof times != "number"){
				times  = 0
			}
			
			if(_data.option == 0 || _data.option == -1){
				$("#videoviews").text(setText(times))
			}
			if(_data.objectId == $("#contentShower").find(".poster").attr("video")){
			    $("#videoviews").text(setText(times))
			}else{
			    $(".scrollable_demo>div").eq(_data.option).find(".show-times").text(setText(times))
			}*/
		},
		error: function(){}
	});	
}

function getVideoViews(videoid){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurlCmkt + "service/score/ucm/countcache",			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE,"type":"video","objectIdList":videoid},
		success: function(data){
		    for(var i=0;i<data.length;i++){
			   var times = data[i].visitedTimes
			   if(typeof times != "number"){
				   times  = 0
			   }
			   $("#videoviews").text(setText(times)) 
			}
		},
		error: function(){}
	});	
}


function searchServiceCent(_data){
	$("#service_center").empty();
	$(".page").empty();
	$.ajax({
		 	type:"GET",
			async: false,
			url: baseurl+addressListService,			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:_data,
			success: function(data){
				$("#waite_all_product").hide();			
				if(data.length < 1){	
				  	$("#service_center").empty();
				  	$("#service_center").html("<div class='search-result-others clearfix'><h2 style='border-bottom:none'>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}else{
					$("#waite_all_product").hide();
					page_generation(data[0].totalRows,_data.curPage,_data.pageSize);
					for(var i = 0; i<data.length; i++){
						var $searchResult = $("#service_li").clone();
						$searchResult.attr("class","");
						if(i%2==0){
							$searchResult.attr("class","mrcs");
						}
						$searchResult.find("h2").text(data[i].networkName);
						$searchResult.find(".a-1").text(data[i].address);
						$searchResult.find(".a-2").text(data[i].category);
						if(data[i].phone != null && data[i].phone != ""){
							$searchResult.find(".a-3").text(data[i].phone);
						}else{
							$searchResult.find(".a-3").remove();
						}
						if(null != data[i].url && "" != data[i].url){
							$searchResult.find(".a-4").html("<a target='_blank' href='"+data[i].url+"'>Website</"+"a"+">");
						}
						$searchResult.appendTo("#service_center");
						$searchResult.show();
					}
				}	
			},
			error: function(){}		
	});
}
/**@desc: manual list by isearch*/
function callback_manual_is(data){
	$(data).each(function(i,item){
		var alllist = item.list[i]['alllist'];
		if(alllist != null && alllist.length>0){
			page_generation(item.list[0].tagValue.all,item.list[0].mcCurPage,5);
			for(var i = 0; i < alllist.length; i++){
				var laninfo = ""
				var languageList = alllist[i]['RESERVE_FIELD38'];
				for(var j = 0; j < languageList.length; j++){
					laninfo += "<option value="+languageList[j].id+">"+getValue(languageList[j].name)+"</option>";
				} 
				var manualStr = "<li class='li' id='manual_" + getValue(alllist[i].DOC_ID) + "'>" + 
					"<a class='view-bnt' href='" + getValue(alllist[i].RESERVE_FIELD33) + "&view=true'><strong>"+LAG_CON_VIEW_NOW+"</strong></a>" +
					"<h2 class='h2'><strong><a href='"+getValue(alllist[i].DOC_URL)+"'>" + getValue(alllist[i].DRETITLE) + "</a></strong></h2>" +
					"<p class='p-1 clearfix'><span class='span-1 fl'>"+ getValue(alllist[i].RESERVE_FIELD11) +"</span><span class='span-2 fl'>" + getValue(alllist[i].RESERVE_FIELD37) +"</span></p>" +
					"<p class='p-2'>" +
					"<select id='man-lan-" + i + "' name='" + getValue(alllist[i].DOC_ID) + "' onchange='changeManualLanguage(this)'>"+laninfo+"</select>" +
					"</p></li>";
					var $manual = $(manualStr);
					$manual.appendTo("#product-support-manuals-ul");	
					$manual.show();
					$manual.find("#man-lan-"+i).selectbox("","selectbox");
					$manual.find(".view-bnt").click(function(){
						var title = $(this).next().text();
						trackEvent('manuals',title,'sup-viewnow');
						var source_url = $(this).attr("href")
						var source_name = $(this).next().find("strong").text()
						_bfd_Download(source_url,source_name,source_type)		
					});
			}
			if(typeof(v_data.data.ssUserText)!="undefined" && v_data.data.ssUserText!=""){
				heightManualKeywords("product-support-manuals-ul",v_data.data.ssUserText)
			}
		}else{
			$("#product-support-manuals-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	})
}
/**@desc: manual list by db-search*/
function callback_manual_db(data){
	if(data.length < 1){
		$("#product-support-manuals-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{ 
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		for(var i = 0; i < data.length; i++){
			var laninfo = ""
			for(var j = 0; j < data[i].languageList.length; j++){
				laninfo = "<option value="+data[i].languageList[j].languageId+">"+data[i].languageList[j].languageName+"</option>";
			} 
			var manualStr = "<li class='li' id='manual_" + data[i].fileId + "'>" + 
			"<a class='view-bnt' href='" + data[i].downloadUrl + "&view=true' onclick=javascript:trackEvent('manuals','"+ encodeURI(data[i].fileName) +"','sup-viewnow')><strong>"+LAG_CON_VIEW_NOW+"</strong></a>" +
			"<h2 class='h2'><strong><a href='"+ durl+"?id="+data[i].fileInfoId + "'>" + data[i].fileName + "</a></strong></h2>" +
			"<p class='p-1 clearfix'><span class='span-1 fl'>"+ getDateFormat(data[i].releaseDate) +"</span><span class='span-2 fl'>" + data[i].fileSize +"</span></p>" +
			"<p class='p-2'>" +
			"<select id='man-lan-" + i + "' name='" + data[i].fileId + "' onchange='changeManualLanguage(this)'>"+laninfo+"</select>" +
			"</p></li>"
			var $manual = $(manualStr);
			$manual.appendTo("#product-support-manuals-ul");	
			$manual.show();
			$manual.find("#man-lan-"+i).selectbox("","selectbox");
			$manual.find(".view-bnt").click(function(){
				var title = $(this).next().text();
				trackEvent('manuals',title,'sup-viewnow');
				var source_url = $(this).attr("href")
				var source_name = $(this).next().find("strong").text()
				_bfd_Download(source_url,source_name,source_type)	
			});	
		}
		if(typeof(v_data.data.ssUserText)!="undefined" && v_data.data.ssUserText!=""){
			heightManualKeywords("product-support-manuals-ul",v_data.data.ssUserText)
		}
	}		
}
/**@desc: software list by isearch*/
function callback_software_is(data){
	$(data).each(function(i,item){
		var alllist = item.list[i]['alllist'];
		var soft = "";
		if(alllist != null && alllist.length>0){	
			page_generation(item.list[0].tagValue.all,item.list[0].mcCurPage,5);
			for(var i = 0; i < alllist.length; i++){
				  	soft = soft + "<li class='li'>" + 
					"<a class='download-bnt' href='" + alllist[i].RESERVE_FIELD33 +"'><strong>"+LAG_CON_DOWNLOAD_NOW+"</strong></a>" + 
					"<h2 class='h2'><strong><a href='" + alllist[i].DOC_URL + "'>" + alllist[i].DRETITLE + "</a></strong></h2>" + 
					"<p class='p-1'>" + (alllist[i].DOC_DESCRIPTION==null?'':alllist[i].DOC_DESCRIPTION) + "</p>" + 
					"<p class='p-2 clearfix'><span class='span-1 fl'>" + alllist[i].RESERVE_FIELD11 + "</span><span class='span-2 fl'>" + alllist[i].RESERVE_FIELD37 + "</span></p></li>";
				}
				$("#product-support-downloads-ul").append($(soft));
				$("#product-support-downloads-ul").find(".download-bnt").click(function(){
					var _title = $(this).next().text();
					trackEvent('downloads',_title,'sup-downloads');
					var source_url = $(this).attr("href")
					_bfd_Download(source_url,_title,source_type)	
				});
			if(typeof(item.list[0].keywords)!="undefined" ){
				   	if(item.list[0].keywords!=""){highlightSearchTermsManualsDown(item.list[0].keywords,"","","","","product-support-downloads-ul");	}
			}
		}else{
			$(".product-support-downloads ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	})
}
/**@desc: software list by db-search*/
function callback_software_db(data){
	if(data.length < 1){
		$(".product-support-downloads ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{	
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		var soft = "";
		for(var i = 0; i < data.length; i++){
			soft = soft + "<li class='li'>" + 
			"<a class='download-bnt' href='" + data[i].downloadUrl +"' onclick=javascript:trackEvent('downloads','"+ encodeURI(data[i].fileName) +"','sup-downloads') ><strong>"+LAG_CON_DOWNLOAD_NOW+"</strong></a>" + 
			"<h2 class='h2'><strong><a href='" + durl +"?id="+data[i].fileInfoId + "'>" + data[i].fileName + "</a></strong></h2>" + 
			"<p class='p-1'>" + (data[i].fileIntroduce==null?'':data[i].fileIntroduce) + "</p>" + 
			"<p class='p-2 clearfix'><span class='span-1 fl'>" + getDateFormat(data[i].releaseDate) + "</span><span class='span-2 fl'>" + data[i].fileSize + "</span></p></li>";
		}
		$("#product-support-downloads-ul").append($(soft));
		if(typeof(v_data.data.ssUserText)!="undefined" ){
			if(v_data.data.ssUserText!=""){highlightSearchTermsManualsDown(v_data.data.ssUserText,"","","","","product-support-downloads-ul");	}
		}
		$(".download-bnt").click(function(){
			var source_url = $(this).attr("href")
			var source_name = $(this).next().find("a").text()
			_bfd_Download(source_url,source_name,source_type);
		});
	}
}
function getFAQContentType(val){
	return val == "video" ? LAG_CON_VIDEO : LAG_CON_PIC_CONTENT;
}
function setFAQStatisticsResult(val){
	$("#x-result").empty().text(LAG_CON_SEARCH_RESULT + " ( " + val + " )");
}
function setFAQStatisticsAll(val){
	$("#x-cnt-all").empty().text(" ( " + val + " )");
}
function setFAQStatisticsVideo(val){
	$("#x-cnt-video").empty().text(" ( " + val + " )");
}
function setFAQStatisticsText(val){
	$("#x-cnt-pic").empty().text(" ( " + val + " )");
}
function setFAQStatistics(counter){
	setFAQStatisticsResult(counter.all);
	setFAQStatisticsAll(counter.all);
	setFAQStatisticsVideo(counter.video);
	setFAQStatisticsText(counter.text);
}

/**@desc: faqs list by isearch*/
function callback_faqs_is1(data){
	$(data).each(function(i,item){
		var alllist = item.list[i]['alllist'];
		if(alllist != null && alllist.length>0){
			page_generation(item.list[0].tagValue.all,v_data.data.mcCurPage,v_data.data.pageSize);
			var faq = "",displayType = "";
			for(var i = 0; i < alllist.length; i++){
				displayType = alllist[i].RESERVE_FIELD25;
				faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+returnVariable(alllist[i].DOC_URL)+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getValue(alllist[i].DRETITLE) +"</a></li>";
			}
			$("#product-support-faq-ul2").append(faq);
			if(typeof(v_data.data.ssUserText)!="undefined"  && v_data.data.ssUserText!=""){
				highlightSearchTerms(item.list[0].keywords,"","","","","product-support-faq-ul2");
			}
		}else{
			$("#product-support-faq-ul2").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	});
}
/**@desc: faqs list by isearch*/
function callback_faqs_is(data){
	$(data).each(function(i,item){
		var alllist = item.list[i]['alllist'];
		var tagValue = item.list[0].tagValue;
		tagValue = tagValue || {all:0, video:0, text: 0};
		if(alllist != null && alllist.length>0){
			page_generation(tagValue.all,v_data.data.mcCurPage,v_data.data.pageSize);
			var faq = "",displayType = "";
			for(var i = 0; i < alllist.length; i++){
				displayType = alllist[i].RESERVE_FIELD25;
				faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+returnVariable(alllist[i].DOC_URL)+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getValue(alllist[i].DRETITLE) +"</a></li>";
			}
			$("#product-support-faq-ul").append(faq);
		}else{
			$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}

		var displayType = getDisplayType();
		if(displayType == ""){
			setFAQStatistics(tagValue);
		}else if(displayType == "video"){
			setFAQStatisticsResult(tagValue[displayType]);
			setFAQStatisticsVideo(tagValue.video);
		}else if(displayType == "text"){
			setFAQStatisticsResult(tagValue[displayType]);
			setFAQStatisticsText(tagValue.text);
		}

	});
}
/**@desc: faqs list by db-search*/
function callback_faqs_db(data){
	if(data.length < 1){ 
		$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{	
		var faq = "", displayType = "";
		var faqs_db = new Array();
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		for(var i = 0 ; i < data.length; i++){
			faqs_db[i] = durl +"?id="+ getValue(data[i].faqId);
			displayType = data[i].displayType;
			faq= faq + "<li class='clearfix'><a class='a-1' href='"+faqs_db[i]+"' target='_blank' ><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getEtcText(data[i].title, 120) +"</a></li>";
		}
		$("#product-support-faq-ul").append(faq);
	}
	if(typeof(v_data.data.ssUserText)!="undefined"  && v_data.data.ssUserText!=""){
		highlightSearchTerms(v_data.data.ssUserText,"","","","","product-support-faq-ul");
	}
}

/**@desc: faqs list*/
function callback_faq_db2(data){
	if(data.length < 1){ 
		$("#product-support-faq-ul2").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{
		var faq = "",faqdurl="",displayType="";
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		for(var i = 0 ; i < data.length; i++){
			faqdurl = durl +"?id="+ data[i].faqId ;
			displayType = data[i].displayType;
			faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+faqdurl+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getEtcText(data[i].title, 100) +"</a></li>"			
		}
		$("#product-support-faq-ul2").append(faq);
	}
}
/**@desc: service-center list by db-search*/
function callback_service_db(data){	
	if(data.length < 1){	
		$("#service_center").html("<div class='search-result-others clearfix'><h2 style='border-bottom:none'>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		var $searchResult = $("#service_li");
		for(var i = 0; i<data.length; i++){			
			$searchResult = $searchResult.clone();
			$searchResult.attr("class","");
			if(i%2==0){
				$searchResult.attr("class","mrcs");
			}
			$searchResult.find("h2").text(data[i].networkName);
			$searchResult.find(".a-1").text(data[i].address);
			$searchResult.find(".a-2").text(data[i].category);
			if(data[i].phone != null && data[i].phone != ""){
				$searchResult.find(".a-3").text(data[i].phone);
			}else{
				$searchResult.find(".a-3").remove();
			}
			if(null != data[i].url && "" != data[i].url){
				$searchResult.find(".a-4").html("<a target='_blank' href='"+data[i].url+"'>"+LAG_CON_WEBSITE+"</"+"a"+">");
			}
			$searchResult.appendTo("#service_center");
			$searchResult.show();
	}
}	
}
/**@desc: tech-spec list by isearch*/
function callback_tech_is(data){
	$(data).each(function(i,item){
		var alllist = item.list[i]['alllist'];
		if(v_data.data.IsearchFlag == "byKey"){
			if(alllist !=null && alllist.length>0){
				page_generation(item.list[0].tagValue.all,item.list[0].mcCurPage,12);
				$(".search-result-others").remove();
				for(var j = 0; j < alllist.length; j++){
					$("#ucm_list").append("<li><a class='img-a' href='"+ returnVariable(alllist[j].DOC_URL)+"'><img src='"+ returnVariable(alllist[j].RESERVE_FIELD32) +"' alt='"+ returnVariable(alllist[j].DRETITLE) +"' title='' width='164' height='133'/></a>"+
					"<h2><a href='"+ returnVariable(alllist[j].DOC_URL) +"' class='a-1'>"+ returnVariable(alllist[j].DRETITLE) +"</a></h2></li>");
				}
			}else{
				$("#iwcm_page").empty();
				$("#ucm_list").append("<div class='search-result-others'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>")
			}
		}else if(v_data.data.IsearchFlag == "byCode"){
			if(item.list[0].totalNum > 0){
				window.location = returnVariable(alllist[0].DOC_URL);
			}else{
				window.location  = $("#support_product").attr("href") + "?pro=" + v_data.data.ssUserText;
			}
		}
	});
}
/**@desc: yqx notice list by return pages*/
function return_pageaction(_datas){
   if(_datas.listLng > _datas.pageList){
     // var times = Math.ceil(_datas.listLng/_datas.pageList);
      var _t = _datas.showlist + parseInt(_datas.pageList); 
      for(var i=_datas.showlist;i<_t;i++){
         $(_datas.objs).find("li").eq(i).addClass("y-info").fadeIn(600);
      }
      if($(".y-info").length < _datas.listLng){
         $("#y-cbg-main").find(".load-more").show();
      }else{
         $("#y-cbg-main").find(".load-more").hide();
      }
   }else{
       for(var i=0; i < _datas.pageList; i++){
         $(_datas.objs).find("li").eq(i).addClass("y-info").fadeIn(600);
       }
   }
}

/**@desc: yqx notice list by db-search*/
function callback_notice(data){
	if(data.length < 1){
		$("#support-notice-list").prepend("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	    $(".load-more").hide();
	}else{
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize)
		for(var i = 0; i<data.length; i++){
			var description = data[i].description   ="null"?data[i].description:"";
			var notice = "<li class='clearfix' style='margin-top:0px;display:none;'><div class='cbg-date'><span class='cbg-month'></span><span class='cbg-day'></span></div>"+
                         "<div class='cbg-text'><h2><a href='"+nturl+"?id="+data[i].afficheId+"'>"+data[i].title+"</a></h2><p class='p-4 y-p-content' style='font-size:14px' title="+description+">"+description+"</p>"+
                         "<div class='y-seemore'><a href='"+nturl+"?id="+data[i].afficheId+"' class='cbg-btn'>"+LAG_CON_READ_MORE+"</a></div></div>"+
                         "</li>";	
			$("#support-notice-list").append(notice);
			var _contant = $(".y-p-content").eq(i).text();
			var _timeshow = getDateFormat3(data[i].publishDate).split("-");
            //_timeshow[1] = _timeshow[1]>9 ? _timeshow[1] : "0"+_timeshow[1];
            _timeshow[2] = _timeshow[2]>9 ? _timeshow[2] : "0"+_timeshow[2];
            $(".cbg-month").eq(i).text(return_month(_timeshow[1]));
            $(".cbg-day").eq(i).text(_timeshow[2]);
            if(_contant.length > 200){
               $(".y-p-content").eq(i).text($(".y-p-content").eq(i).text().substring(0,195)+"...");
            }
		}	
		var _datas = {
		     "listLng":$("#support-notice-list .clearfix").length,
		     "objs":"#support-notice-list",
		     "showlist":$(".y-info")?$(".y-info").length:0,
		     "pageList":"5"};
		return_pageaction(_datas);
		if(typeof(v_data.data.keywords)!="undefined"  && v_data.data.keywords!=""){
			highlightSearchTerms(v_data.data.keywords,"","","","","support-notice-list");
		}	
		$("#support-notice-list").find("li").css("opacity","");	
	}	
}

function getKeywords(num,key){
  return LAG_CON_PRESS_SEARCH1+"\""+decodeURIComponent(key)+"\""+LAG_CON_PRESS_SEARCH2+num+LAG_CON_PRESS_SEARCH3;
}

/**@desc: press-news info list by isearch*/
function callback_press_news(data){
	var otherlist='';
	var totalNum='';
	var _dataTitle = [];
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	//$("#x-press-list").parent().removeClass().addClass("press-news-search");	
	$(".load-more").hide();
	if(otherlist == null || otherlist.length==0){
		if($(".clearfix").length < 5){	
			$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	} else {
		if(totalNum>0 && $(".clearfix").length < 5) {
			$("#x-press-list").append("<p class='p-1'></p>");
			$("#x-press-list").find(".p-1").text(LAG_CON_SEARCH_ABOUT_1+" "+totalNum+" "+LAG_CON_SEARCH_ABOUT_2+" '"+decodeURIComponent(decodeURI(v_data.data.ssUserText))+"'.");
		    $(".load-more").hide();
		}
		for(var b=0;b<otherlist.length;b++) {
			var RESERVE_FIELD11 = getDateFormat2(otherlist[b].RESERVE_FIELD11);
			$("#x-press-list").append("<li class='clearfix'>"+"<div class='cbg-date'><span class='cbg-month'>"+RESERVE_FIELD11.split('-')[1]+"</span><span class='cbg-day'>"+RESERVE_FIELD11.split('-')[2]+"</span></div>"+
				"<div class='cbg-text'><h2><a href='"+returnVariable(otherlist[b]['DOC_URL'])+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</a></h2>"+
				"<p class='p-3' title='"+subTitle(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"'>"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</p>"+
				"</div>"+
			"</li>");
			_dataTitle.push(returnVariable(otherlist[b]['RESERVE_FIELD11']));
		}	
		var _this =$("#x-press-list").find("li");
		//_init(totalNum,_this);
		totalNum < PAGE_LIST_SIZE+1 ? $(".load-more").hide():$(".load-more").show();
		totalNum < $("#x-press-list").find(".clearfix").length+1?$(".load-more").hide():$(".load-more").show();
		getTimeDatas(_dataTitle);
	}
	//page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);
}
/**@desc: press-media info list by isearch*/
function callback_press_media(data){
	var otherlist='';
	var totalNum='';
	var _dataTitle = [];
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	$(".load-more").hide();
	if(otherlist == null || otherlist.length==0){
		if($(".clearfix").length < 4){	
			$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	} else {
		if(totalNum>0 && $(".clearfix").length < 4) {
			$("#x-press-list").append("<p class='p-1'></p>");
			$("#x-press-list").find(".p-1").text(LAG_CON_SEARCH_ABOUT_1+" "+totalNum+" "+LAG_CON_SEARCH_ABOUT_2+" '"+decodeURIComponent(decodeURI(v_data.data.ssUserText))+"'.");
		    $(".load-more").hide();
		}
		for(var b=0;b<otherlist.length;b++) {
			var RESERVE_FIELD11 = getDateFormat2(otherlist[b].RESERVE_FIELD11);
			$("#x-press-list").append("<li class='clearfix'>"+
			"<div class='cbg-date'><span class='cbg-month'>"+RESERVE_FIELD11.split('-')[1]+"</span><span class='cbg-day'>"+RESERVE_FIELD11.split('-')[2]+"</span></div>"+
			"<div class='cbg-text'><h2><a target='_blank' href='"+returnVariable(otherlist[b]['RESERVE_FIELD33'])+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</a></h2>"+
			"<p class='p-3'>"+returnVariable(otherlist[b]['DOC_DESCRIPTION'])+"</p>"+
			"</div>"+
			"</li>");
			_dataTitle.push(returnVariable(otherlist[b]['RESERVE_FIELD11']));
		}
		var _this =$("#x-press-list").find("li");
		//_init(totalNum,_this);
		totalNum < PAGE_LIST_SIZE+1 ? $(".load-more").hide():$(".load-more").show();
		totalNum < $("#x-press-list").find(".clearfix").length+1?$(".load-more").hide():$(".load-more").show();
		getTimeDatas(_dataTitle);
	}
	//page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);
}
/**@desc: press-award info list by isearch*/
function callback_press_award(data){
	var otherlist='';
	var totalNum='';
	var _dataTitle = [];
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	$(".load-more").hide();
	$("#x-press-list").parent().removeClass().addClass("press-awards-content");	
	if(otherlist == null || otherlist.length==0){
		$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	} else {
		if(totalNum>0) {
			$("#x-press-list").append("<p class='y-p-1'>" + setsetSearchResults(totalNum,decodeURI(v_data.data.ssUserText)) + ".</p>");
		}
		for(var b=0;b<otherlist.length;b++) {
			if((b+1)%4==0){
				$("#x-press-list").append("<li class='last li' style='display:none;'>"+
					"<p class='p-1'><img src='"+returnVariable(otherlist[b]['RESERVE_FIELD32'])+"'/></a>"+
					"<h2 class='h2' title='"+subTitle(returnVariable(otherlist[b]['DRETITLE']))+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</h2>"+
					"<div class='desc' title='"+subTitle(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"'><p class='p-4'>"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</p></div>"+
					"<p class='p-5'><strong>"+LAG_CON_AWARD_COUNTRY+" :"+returnVariable(otherlist[b]['RESERVE_FIELD36'])+"</strong></p>"+
					"<div class='date'><div class='right'><div class='awards-day'><span class='awards-day-span'></span></div></div>"+
		            "<div class='right'><div class='awards-year'></div><div class='awards-month'></div></div></div>"+
				"</li>");
				_dataTitle.push(returnVariable(otherlist[b]['RESERVE_FIELD11']));
			}else{ 
			  $("#x-press-list").append("<li class='li' style='display:none;'>"+
				"<p class='p-1'><img src='"+returnVariable(otherlist[b]['RESERVE_FIELD32'])+"'/></a>"+
				"<h2 class='h2' title='"+subTitle(returnVariable(otherlist[b]['DRETITLE']))+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</h2>"+
				"<div class='desc' title='"+subTitle(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"'><p class='p-4'>"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</p></div>"+
				"<p class='p-5' ><strong>"+LAG_CON_AWARD_COUNTRY+" :"+returnVariable(otherlist[b]['RESERVE_FIELD36'])+"</strong></p>"+
				"<div class='date'><div class='right'><div class='awards-day'><span class='awards-day-span'></span></div></div>"+
		            "<div class='right'><div class='awards-year'></div><div class='awards-month'></div></div></div>"+
				"</li>");
				_dataTitle.push(returnVariable(otherlist[b]['RESERVE_FIELD11']));
			}
		}
		var _this =$("#x-press-list").find("li");
		_init(totalNum,_this);
		getTimeDatas(_dataTitle,_this.length);	
	}
	//page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);	
}
/**@desc: press-event info list by isearch*/
function callback_press_event(data){
	var otherlist='';
	var totalNum='';
	var _dataTitle = [];
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	$(".load-more").hide();
	$("#x-press-list").parent().removeClass().attr("class","cbg-news-list cbg-wrapper cbg-narrow");	
	if(otherlist == null || otherlist.length==0){
		$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	} else {
		if(totalNum>0) {
			$("#x-press-list").append("<p class='p-1'>" + setsetSearchResults(totalNum,decodeURI(v_data.data.ssUserText)) + ".</p>");
		}
		for(var b=0;b<otherlist.length;b++) {			
			$("#x-press-list").append("<li class='clearfix' style='display:none;'>"+
            "<div class='cbg-date'><span class='cbg-month'></span><span class='cbg-day'></span></div>"+
			"<div class='cbg-text'><a class='a-1' target='_blank' href='"+returnVariable(otherlist[b]['RESERVE_FIELD33'])+"'><img alt='"+returnVariable(otherlist[b]['DRETITLE'])+"' src='"+otherlist[b]['RESERVE_FIELD32']+"'/></a><h2 title='"+subTitle(returnVariable(otherlist[b]['DRETITLE']))+"'><a target='_blank' href='"+returnVariable(otherlist[b]['RESERVE_FIELD33'])+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</a></h2>"+
			"<p class='p-3' title='"+subTitle(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"'>"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</p>"+
			"</div>"+
			"</li>");
			_dataTitle.push(returnVariable(otherlist[b]['RESERVE_FIELD11']));
		}
		var _this =$("#x-press-list").find("li"); 
		getTimeDatas(_dataTitle,_this.length);
	}
	//page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);
}
/**@desc: press-video info list by isearch*/
function callback_press_video(data){
	var otherlist='';
	var totalNum='';
	var _dataTitle = [];
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	$(".press-video-list .p-1:first").remove();
	$("#videos_list .search-result-others").remove();
	$("#press-video").empty();	
	$(".load-more").hide();
	if(otherlist == null || otherlist.length==0){
		//$(".press-video-content").hide();
		//$("#contentShower").parents(".video-big").hide();
		$("#x-press-list").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	} else {
		if(totalNum>0) {
			$("#press-video").append("<p class='p-1'></p>").show().css("margin-bottom","8px");
			$("#press-video").find(".p-1").text(getKeywords(totalNum,decodeURI(v_data.data.ssUserText))+".");
		}
		//$("#videos_list .press-video-content").show();
		var $l = $('#x-press-list').find('.y-lists').length;
		for(var b=0;b<otherlist.length;b++) {
			var RESERVE_FIELD11 = getDateFormat2(otherlist[b].RESERVE_FIELD11);
			var DRETITLE = otherlist[b]['DRETITLE'].replace(/'/g, '')
			$("#x-press-list").append(
				"<div class='video-item y-lists' did='"+returnVariable(otherlist[b]['DOC_ID'])+"' video='"+returnVariable(otherlist[b]['RESERVE_FIELD32'])+"' >"+
				"<input type='hidden' id='videotitle' value='"+returnVariable(DRETITLE)+"'>"+
				"<div class='cbg-date'><span class='cbg-month'></span><span class='cbg-day'></span></div>"+
				"<div class='cbg-text y-list-item'><div class='information'>"+
				"<div class='y-viseo-img'><a class='a-2 img_link poster' name='"+returnVariable(otherlist[b]['RESERVE_FIELD33'])+"' alt='"+returnVariable(otherlist[b]['RESERVE_FIELD32'])+"' class='a-2 img_link' onclick=''><img  width='156' height='86'src='"+returnVariable(otherlist[b]['RESERVE_FIELD33'])+"' complete='complete'/><div class='play'></div></a></div>"+
				"<div id='y-video-item'><div class='title'><span class='a-3 img_link2' title='"+subTitle(returnVariable(DRETITLE))+"' style='text-overflow:ellipsis;overflow:hidden; white-space:nowrap;'>"+returnVariable(otherlist[b]['DRETITLE'])+"</span>"+
				"<p style='display:none' class='p-2 y-numdate-show'>"+RESERVE_FIELD11+"</p>"+
				"<div class='dadie description' title="+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+">"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</div></div>"+
				"<div id='y-cbg-share'>"+
				"<div class='times show-times'></div><div class='share'>"+LAG_CON_VIDEO_SHARE+"<a class='y-press-sinaBtn' href='javascript:void(0)'><img src='"+IMG_CON_SHARE_BOTTON1+"' title='"+LAG_CON_VIDEO_SHARESINA+"' style='width:25px;height:20px;'></a>"+  
				"<a class='y-press-qqBtn' href='javascript:void(0)'><img src='"+IMG_CON_SHARE_BOTTON2+"' title='"+LAG_CON_VIDEO_SHAREQQ+"' style='width:25px;height:20px;'></a></div></div>"+
				"</div></div></div>");
				
		}
		getWindowMessage();
		getTimeDatas($l,$('#x-press-list').find('.y-lists').length,"#x-press-list");
		mousemove_change_color("#scrollable .a-2","#scrollable .a-3","#000000");
		$("#cbg-main .video-list .video-item .poster").click(function(){
		   onClickVideo($(this));
		})
		
		$(".y-press-sinaBtn").click(function(){
   			getshareinfo($(this));
   			sinaBtn();
		})
		$(".y-press-qqBtn").click(function(){
   			getshareinfo($(this));
   			qqBtn();
		})
		//bindclick($("#x-press-list .video-item a"));		
		$("#x-press-list .y-lists").each(function(){
			//$(this).append('<span class="show-times"></span>');
			var obj = $(this).find(".show-times");
			var dID = $(this).attr("did");			
			showViewTimes(dID, obj);
		});	
		$("#x-press-list li:first a").click();	
		totalNum < PAGE_LIST_SIZE+1 ? $(".load-more").hide():$(".load-more").show();
		totalNum < $("#x-press-list").find(".y-lists").length+1?$(".load-more").hide():$(".load-more").show();
	}
	//page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);	
} 

function subTitle(title){
         var cc = replaceAll(title,"</font>","")
         return replaceAll(cc,"<font color=red>","");
}

function replaceAll(text,replacement,target){      
         if(text==null || text=="") return text;
         if(replacement==null || replacement=="") return text;
         if(target==null) target="";   
         var returnString="";
         var index=text.indexOf(replacement);
         while(index!=-1)       
         {
                   returnString+=text.substring(0,index)+target;
                   text=text.substring(index+replacement.length);
                   index=text.indexOf(replacement);    
         }        
         if(text!="") returnString+=text;
    return returnString;
}

function sendVideo(url, data, _callback){
	$.ajax({
		type:"GET", async: false,
		url: url,	
		data: data,
		dataType:"jsonp", jsonp:"jsonp", 
		success: function(data){
			_callback(data);
		},
		error: function(){}
	});
}
function showViewTimes(dID, obj){
	var url = baseurlCmkt + getstatistics;
	var data = {"siteCode": SITE_CODE, "type":"video", "objectId":dID};
	var fn = function(data){
		var times = data.visitedTimes
		if(typeof times != "number"){
			times = 0;
		}
		obj.html(LAG_CON_VIDEO_VIDEO_PLAY+times + LAG_CON_VIEWS);
	};
	sendVideo(url, data, fn);
}

function updateViewTimes(dID){
	var url = baseurl + addstatistics;
	var data = {"siteCode": SITE_CODE, "type":"video", "objectId":dID};
	var fn = function(){};
	sendVideo(url, data, fn);
}

/**@desc: search info list by isearch*/
function callback_search(data){
	$(data).each(function(i,item){
		$(".search-nav .ul-1 li a font").text("");
		$("#keywords").val(item.list[0]['keywords']);
		var products = item.list[i]['productlist'];
		var alllist = item.list[i]['alllist'];
		var _all =( item.list[0].tagValue && item.list[0].tagValue.all) ? item.list[0].tagValue.all:0;
		var _consumer_product=( item.list[0].tagValue && item.list[0].tagValue. consumer_product) ? parseInt( item.list[0].tagValue.consumer_product):0;	
		var _support=( item.list[0].tagValue && item.list[0].tagValue.support) ? parseInt(item.list[0].tagValue.support):0;
		var _consumer_press=( item.list[0].tagValue && item.list[0].tagValue.consumer_press) ? parseInt(item.list[0].tagValue.consumer_press):0;
		var _support_product=( item.list[0].tagValue && item.list[0].tagValue.support_product) ? parseInt(item.list[0].tagValue.support_product):0;
		var _consumer_events=( item.list[0].tagValue && item.list[0].tagValue.consumer_events) ? parseInt(item.list[0].tagValue.consumer_events):0;
		var _consumer_video=( item.list[0].tagValue && item.list[0].tagValue.consumer_video) ? parseInt(item.list[0].tagValue.consumer_video):0;
		if(queryType =="consumer_product"){
			page_generation(_consumer_product,item.list[i].mcCurPage,10);
		}else if(queryType =="support" || v_data.data.contentTypes =="support_product"){
			page_generation((_support+_support_product),item.list[i].mcCurPage,10);
		}else if(queryType =="consumer_press" || v_data.data.contentTypes =="consumer_events" || v_data.data.contentTypes =="consumer_video"){
			page_generation(_all,item.list[i].mcCurPage,10);
		}else{
			page_generation(_all,item.list[i].mcCurPage,10);
		}
			
		if( products != null && products.length>0){
			$("#ucm_prolist").hide();
			if(s==0) setSearchData(products)
		}else{
			$("#search_prolist").empty().hide();
			$("#ucm_prolist").show();
		}
		if(alllist != null && alllist.length>0){	
			$(".press-news-search").show();
			var _doc_url ;
			for(var j=0; j<alllist.length; j++){
				_doc_url = ((returnVariable(alllist[j].RESERVE_FIELD2) && returnVariable(alllist[j].RESERVE_FIELD2.toLowerCase()) == "consumer_press"  && returnVariable(alllist[j].RESERVE_FIELD22) && returnVariable(alllist[j].RESERVE_FIELD22.toLowerCase()) == "consumer_media_coverage")||(returnVariable(alllist[j].RESERVE_FIELD2) && returnVariable(alllist[j].RESERVE_FIELD2.toLowerCase()) == "consumer_events")) ? returnVariable(alllist[j].RESERVE_FIELD33) : returnVariable(alllist[j].DOC_URL);
				if(alllist[j].RESERVE_FIELD22 == "faqs"){
					$("#show_list").append("<li><h2><a class='a-1' href='"+_doc_url+"' target='_blank'>" + returnVariable(alllist[j].DRETITLE) +"</a></h2><span>" + returnVariable(alllist[j].RESERVE_FIELD11) +"</"+"span"+"><p>"+ coverStringLength(returnVariable(alllist[j].DOC_DESCRIPTION)) + "</p></li>");
				}else if(alllist[j].RESERVE_FIELD22 == "software" || alllist[j].RESERVE_FIELD22 == "manual" )
					$("#show_list").append("<li class='all_search'><a class='download_btn' href='"+ alllist[j].RESERVE_FIELD33 +"'>&#31435;&#21363;&#19979;&#36733;</a><h2><a class='a-1' target='_blank'><strong>" + returnVariable(alllist[j].DRETITLE) +"</"+"str"+"ong"+"></a></h2><span>" + returnVariable(alllist[j].RESERVE_FIELD11) +"</span></li>");
				else{
					var _url = 
					$("#show_list").append("<li><h2><a target='_blank' href='" + _doc_url + "' class='a_list'>" + returnVariable(alllist[j].DRETITLE) +"</a></h2><span>" + returnVariable(alllist[j].RESERVE_FIELD11) +"</"+"span"+"><p>"+ coverStringLength(returnVariable(alllist[j].DOC_DESCRIPTION)) + "</p></li>");
				}
			}				
		}else{
			$("#show_list").html("<div class='search-result-others'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
		$(".search-nav").css("position","");
	});
}
/**@desc: support search*/ 
function callback_support_search(data){
	$(data).each(function(i,item){
		$("#search_num5,#search_num4,#search_num2").empty()
		$("#search_num5,#search_num4,#search_num2").prev("a").css("color","")
		$("#keywords").val(item.list[0]['keywords']);
		$(".search-nav .ul-1 li span").text("");		
		var products = item.list[i]['productlist'];
		var alllist = item.list[i]['alllist'];	
		if( products != null && products.length>0){
			$("#search_prolist").empty().show();
			$("#ucm_prolist").hide();
			for(var j=0;j<products.length; j++){
				var strsearch="<li class='clearfix'><a target='_blank' href";
    			if(j == (products.length-1)){
     				strsearch+="='"+ products[j].DOC_URL +"'><img src";
    				strsearch+="='" + returnVariable(products[j].RESERVE_FIELD32) + "' width='164' height='133' alt='"+ returnVariable(products[j].autn_title) +"' title=''/></a>" +
    				"<div><h2><a target='_blank' href";
    				strsearch+="='" +  products[j].DOC_URL  +"' class='title'>"+ returnVariable(products[j].autn_title) +"</a></h2></div></li>";   				
    			}else{
    				strsearch+="='"+  products[j].DOC_URL  +"'><img src";
    				strsearch+="='" + returnVariable(products[j].RESERVE_FIELD32) + "' width='164' height='133' alt='"+ returnVariable(products[j].autn_title) +"' title=''/></a>" +
    				"<div><h2><a target='_blank' href";
    				strsearch+="='" +  products[j].DOC_URL  +"' class='title'>"+ returnVariable(products[j].autn_title) +"</a></h2></div></li><li class='li-border'></li>";
    			}	
				$("#search_prolist").append(strsearch);	
				mousemove_change_color2(".search-recommend-prolist img",".search-recommend-prolist h2 a","#000000");
			}
		}else{
			$("#search_prolist").empty().hide();
			$("#ucm_prolist").show();
		}
		if(alllist != null){
			var faqs= ( item.list[0].tagValue && item.list[0].tagValue.all) ? item.list[0].tagValue.faqs:0;
			var software= ( item.list[0].tagValue && item.list[0].tagValue.all) ? item.list[0].tagValue.software:0;
			var manual= ( item.list[0].tagValue && item.list[0].tagValue.all) ? item.list[0].tagValue.manual:0;
			$("#search_num5").text("(" + faqs + ")");
			$("#search_num4").text("(" + software + ")");
			$("#search_num2").text("(" + manual + ")");
			if(queryType == "faqs"){
				page_generation(faqs,item.list[i].mcCurPage,10);
				$("#search_num5").prev("a").css("color","red")
			}else if(queryType == "software"){
				page_generation(software,item.list[i].mcCurPage,10);
				$("#search_num4").prev("a").css("color","red")
			}else if(queryType == "manual"){
				page_generation(manual,item.list[i].mcCurPage,10);
				$("#search_num2").prev("a").css("color","red")
			}	
		    $(".press-news-search").show()
			$("#show_list").empty().show();
			for(var j=0; j<alllist.length; j++){
				if(alllist[j].RESERVE_FIELD22 == "faqs"){	
					$("#show_list").append("<li><h2><a class='a-1' href='"+returnVariable(alllist[j].DOC_URL)+"' target='_blank'><strong>" + returnVariable(alllist[j].DRETITLE) +"</"+"str"+"ong"+"></a></h2><span>" + returnVariable(alllist[j].RESERVE_FIELD11) +"</"+"span"+"><p>"+ coverStringLength(returnVariable(alllist[j].DOC_DESCRIPTION)) + "</p></li>");
				}else{
					var str = "<li><a class='download_btn' href='"+returnVariable(alllist[j].RESERVE_FIELD33) +"'><strong>&#31435;&#21363;&#19979;&#36733;</strong></a><h2><a class='a_list'><strong>"+ returnVariable(alllist[j].DRETITLE) +"</strong></a></h2>" +
					"<span>"+ returnVariable(alllist[j].RESERVE_FIELD11)  +"</span></li>"
					$("#show_list").append(str)
				}		
			}	
		}else{
			$("#show_list").html("<div class='search-result-others'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
			$("#show_list .search-result-others h2").css("color","#999999")
		}
		
		
	});
}

/**@desc: manual list*/
function callback_manual_list(data){
	if(data.length < 1){
		$("#product-support-manuals-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{ 
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		var p_code="";
		if(v_data.data.flag&&v_data.data.flag=="tech"){
			p_code="&ptid="+ptid+"&pname="+pname+"&pcode="+pcode;
		}
		for(var i = 0; i < data.length; i++){
			var laninfo = ""
			for(var j = 0; j < data[i].languageList.length; j++){
				laninfo = "<option value="+data[i].languageList[j].languageId+">"+data[i].languageList[j].languageName+"</option>";
			} 
			var manualStr = "<li class='li' id='manual_" + data[i].fileId + "'>" + 
			"<a class='view-bnt' href='" + data[i].downloadUrl + "&view=true' onclick=javascript:trackEvent('manuals','"+encodeURI(data[i].fileName)+"','sup-viewnow')><strong>"+LAG_CON_VIEW_NOW+"</strong></a>" +
			"<h2 class='h2'><strong><a href='"+ durl +"?id="+data[i].fileInfoId + p_code + "'>" + data[i].fileName + "</a></strong></h2>" +
			"<p class='p-1 clearfix'><span class='span-1 fl'>"+ getDateFormat(data[i].releaseDate) +"</span><span class='span-2 fl'>" + data[i].fileSize +"</span></p>" +
			"<p class='p-2'>" +
			"<select id='man-lan-" + i + "' name='" + data[i].fileId + "' onchange='changeManualLanguage(this)'>"+laninfo+"</select>" +
			"</p></li>"
			var $manual = $(manualStr);
			$manual.appendTo("#product-support-manuals-ul");	
			$manual.show();
			$manual.find("#man-lan-"+i).selectbox("","selectbox");
			$manual.find(".view-bnt").click(function(){
				var source_url = $(this).attr("href")
				var source_name = $(this).next().find("a").text()
				_bfd_Download(source_url,source_name,source_type)
			});
		}
	}
}

/**@desc: faqs list*/
function callback_faq_list(data){
	if(v_data == d_data){
		if(data.length < 1){ 
			$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}else{	
			var faq = "",faqdurl="",displayType="";
			page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
			for(var i = 0 ; i < data.length; i++){
				faqdurl = durl +"?id="+ data[i].faqId ;
				displayType = data[i].displayType;
				faq= faq + "<li class='clearfix'><a class='a-1' href='"+faqdurl+"')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getEtcText(data[i].title, 100) +"</a></li>"			
			}
			$("#product-support-faq-ul").append(faq);
		}	
	}else{
		$(data).each(function(i,item){
			var alllist = item.list[i]['alllist'];
			if(alllist != null && alllist.length>0){
				page_generation(item.list[0].tagValue.all,v_data.data.mcCurPage,v_data.data.pageSize);
				var faq = "",displayType = "";
				for(var i = 0; i < alllist.length; i++){
					displayType = alllist[i].RESERVE_FIELD25;
					faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+returnVariable(alllist[i].DOC_URL)+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" + getValue(alllist[i].DRETITLE) +"</a></li>";
				}
				$("#product-support-faq-ul").append(faq);
				if(typeof(v_data.data.ssUserText)!="undefined"  && v_data.data.ssUserText!=""){
					highlightSearchTerms(item.list[0].keywords,"","","","","product-support-faq-ul");
				}
			}else{
				$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
			}
		});	
	}
}
/**@desc: download list*/
function callback_download_list(data){
	if(data.length < 1){
		$(".product-support-downloads ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{	
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		var p_code="";
		if(v_data.data.flag&&v_data.data.flag=="tech"){
			p_code="&ptid="+ptid+"&pcode="+pcode+"&pname="+pname;
		}		
		var soft = "";
		for(var i = 0; i < data.length; i++){
			soft = soft + "<li class='li'>" + 
			"<a class='download-bnt' href='" + data[i].downloadUrl +"' onclick=javascript:trackEvent('downloads','" + encodeURI(data[i].fileName) + "','sup-downloads')><strong>"+LAG_CON_DOWNLOAD_NOW+"</strong></a>" + 
			"<h2 class='h2'><strong><a href='" + durl +"?id="+data[i].fileInfoId + p_code + "'>" + data[i].fileName + "</a></strong></h2>" + 
			"<p class='p-1'>" + (data[i].fileIntroduce==null?'':data[i].fileIntroduce) + "</p>" + 
			"<p class='p-2 clearfix'><span class='span-1 fl'>" + getDateFormat(data[i].releaseDate) + "</span><span class='span-2 fl'>" + data[i].fileSize + "</span></p></li>";
		}
		$("#product-support-downloads-ul").append($(soft));	
		$(".download-bnt").click(function(){
				concole.log(4)
				var source_url = $(this).attr("href")
				var source_name = $(this).next().find("a").text()
				_bfd_Download(source_url,source_name,source_type);
		});	
	}
}
/**@desc: solution app-guide list*/
function callback_solution_ag_list(data){
	var ugHref =$("#forsspu1").attr("href");
	if(data.length < 1){
		$("#sup_userGuides").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	}else{
		page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
		for(var i = 0; i<data.length; i++){
			var $UserGuides = $("#ug_list").clone();
			$UserGuides.find(".view-bnt-cus-1").attr("href",data[i].downloadUrl + "&view=true");
			$UserGuides.find(".h2 strong a").text(data[i].fileName);
			$UserGuides.find(".h2 strong a").attr("href",ugHref+"?id="+data[i].fileInfoId);
			$UserGuides.find(".p-1").text(data[i].fileIntroduce);
			$UserGuides.find("#sup_date").text(getDateFormat(data[i].releaseDate));
			$UserGuides.find("#sup_size").text(data[i].fileSize);
			$UserGuides.appendTo("#sup_userGuides");
			$UserGuides.show();
		}
	}
} 
/**@desc: solution user-guide list*/
function callback_solution_ug_list(data){
	callback_solution_ag_list(data);
}
/**@desc: solution certification list*/
function callback_solution_cf_list(data){
	callback_solution_ag_list(data);
}
/**@desc: solution datasheet list*/
function callback_solution_ds_list(data){
	callback_solution_ag_list(data);
}
var AJAX_PARAMS;
/**@desc: ajax for case: jsonp:"callback" */
function callback(data) {
	if(AJAX_PARAMS.delay){
		xpageTool.hide();
		$(Ext.xmask.renderTo).empty();
		AJAX_PARAMS.callback(data);
		Ext.xmask.hide();
	}else{
		AJAX_PARAMS.callback(data);
	}	
}
/**@desc: ajax */
function send(data){
	AJAX_PARAMS = data;
	$.ajax({type:"GET",async:true,dataType:"jsonp",jsonp:"jsonp",
		url: data.url, 				  
		data: data.data,
		success: function(data){
			callback(data);
		},
		error: function(resp){if(resp.status!="200"){};Ext.xmask.hide();}
	});
}
/**@desc: ajax - delay*/
function sendDelay(params){
	Ext.xmask.show();
	AJAX_PARAMS = params;
	AJAX_PARAMS.delay = true;	
	setTimeout("send(AJAX_PARAMS)", SYS_DELAY_SECS);
}
//show page list
function page_generation(rows,curPage,pageSize){	
	xpageTool.show({"total":rows, "page":curPage, "pageSize":pageSize});
	
}

//for footer choose sales center
function addProviences(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + chianprovince ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':'cn'},
			success: function(data){
				if(data.length>0){
					$("#footer-select-1").bind("change",{selectID:'#footer-select-1'},addSaleCities)
					var provience = new Array();
					for(var i=0; i<data.length; i++){
						provience.length = 0;
						provience[0] = data[i].placeId
						provience[1] = data[i].placeName		
						getFooterPro.addItem(i+1,provience)
					}
				}
			},
			error: function(){}
	});	
}

function addSaleCities(event){
	var provinec = $(event.data.selectID).val()
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + cityService,
		dataType:"jsonp",
		jsonp:"jsonp",
        data:{"siteCode":"cn","placeId":provinec,"serviceType":"sales"},
		success: function(data){
			var str = "<select name='c' id='footer-select-2' ><option value='0'> "+ LAG_CON_SELECT_CITY +" </option> ";
			for(var i = 0; i < data.length; i++){
				str += "<option value="+data[i].placeId+">"+data[i].placeName+"</option>";			
			}
			str += "</select>";
			$("#footer_china_city").empty().append(str);
			var getCitiescoo = $.createGooCombo(document.getElementById("footer-select-2"),property_short,5);
			getCitiescoo.selectValue(0);
		},
		error: function(){}
	});
}

//set faq view Appraise	
function setFaqAppraise(appraise,judgment){
	$("#product-support-faq-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + faqAppraise,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:appraise,
			success: function(data){
				if(!judgment){
			    	alert(LAG_CON_SUBMIT_SUCC);
			  	} 
			},
			error: function(){}
	});	
}
//contact-us page function start
//get provience
function getChinaPorvienceContact(){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + contactUsProvienceService,
		dataType:"jsonp",
		jsonp:"jsonp",
		success: function(data){
			var proinfo = new Array()
			for(var i = 0; i < data.length; i++){
				proinfo.length = 0
				proinfo[0] = data[i].placeId
				proinfo[1] = data[i].placeName
				select1.addItem(i+1,proinfo)
			}	
		},
		error: function(){}
	});
	
}

function changeContactCity(proid){
	if(proid < 1) return
	select2.clearItems()
	var catinfo = new Array()
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + cityService,
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":"cn","placeId":proid},
			success: function(data){
				catinfo.length = 0
				catinfo[0] = 0
				catinfo[1] = LAG_CON_SELECT_CITY
				select2.addItem(0,catinfo);	
				for(var i = 0; i<data.length; i++){
					catinfo[0] = data[i].placeId
					catinfo[1] = data[i].placeName
					select2.addItem(i+1,catinfo);
				}
				select2.selectValue(0);
			},
			error: function(){}
		});	
}

function SearchProductSubject(){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+"base/mailSupport/subject",		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn"},
		success: function(data){
			var subjectinfo = new Array()
			for(var i = 0; i<data.length; i++){
				subjectinfo.length = 0
				subjectinfo[0]=data[i].subjectId
				subjectinfo[1]=data[i].subjectName
				select6.addItem(i+1,subjectinfo)
			}
		},
		error: function(){}
	}); 
}

function changeProductCategory(subjectID){
	select7.clearItems()
	var catinfo = new Array()
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+"base/mailSupport/category",				  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":"cn","subjectId":subjectID},
			success: function(data){		
				catinfo[0] = 0
				catinfo[1] = LAG_CON_SELECT_CATEGORY
				select7.addItem(0,catinfo);
				catinfo.length = 0
				for(var i = 0; i<data.length; i++){
					catinfo[0] = data[i].categoryId
					catinfo[1] = data[i].categoryName
					select7.addItem(i+1,catinfo);
				}
				select7.selectValue(0);
			},
			error: function(){}
		});	
}

function basemailSupportsend(params){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+"base/mailSupport/send" ,					  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:params,
		success: function(data){
			$("#contact-prompt-4").html("&#21457;&#36865;&#37038;&#20214;&#25104;&#21151;");
			clearSupllyInfo()	
		},
		error: function(){}
	});			
} 


//contact-us page function end
/*function replaceOptions($select) {
  while ($select.get(0).options.length > 1) {
    $select.get(0).options.remove($select.get(0).options.length -1);
  }
  $select.selectbox('detach').selectbox('attach');
}*/
function getSpareProductTypes(){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + spareProduct,					  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{'siteCode':'cn'},
		success: function(data){							
			var protypes = document.getElementById("cbg-selectbox-protypes")
			for(var i = 0; i < data.length; i++){
				var _value = data[i].productId;
				var _name = data[i].productTypeName==null?data[i].productCode:data[i].productTypeName;	
				protypes.options[protypes.length] = new Option(_name, _value)	
			}
			$("#cbg-selectbox-protypes").selectbox('detach').selectbox('attach');
		},
		error: function(){}
	});
}

function getSpareProductByID(obj){
	var typeid = $(obj).val();
	//replaceOptions($("#cbg-selectbox-products"))
	if(typeid>0 && $("#cbg-selectbox-products").get(0).options.length == 1){
		$.ajax({
			type:"GET",
			async: false,
			url: baseurl + "service/parts/validateList",			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{ "productId":typeid,"siteCode":"cn"},
				success: function(data){
					var products = document.getElementById("cbg-selectbox-products")
					for(var i = 0; i < data.length; i++){
						var _value = data[i].productCode;
						var _name = data[i].productTypeName==null?data[i].productCode:data[i].productTypeName;	
						products.options[products.length] = new Option(_name, _value)	
					}
					$("#cbg-selectbox-products").selectbox('detach').selectbox('attach');		
				},
			error: function(){}
		});
	}
}

if(!String.prototype.trim)String.prototype.trim=function(){return this.replace(/^\s*/, '').replace(/\s*$/, '')} ;
function getSelectedName(sid){
	var selectIndex = document.getElementById(sid).selectedIndex;
	var selectText = document.getElementById(sid).options[selectIndex].text 
	return 	selectText
}

function getSparepartsCategory(_data){
	setProTitle();
	$("#remark").empty();
	$(".cbg-heading").empty();
	$(".cbg-price").empty();	
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + "service/parts/findPartsPriceListByProduct",
		dataType:"jsonp",
		jsonp:"jsonp",
        data:{"siteCode":SITE_CODE,"productId":_data.productId},
		success: function(data){
		/*if(data[0].returnCode==8||data[0].returnCode==9){
		  	alert(LAG_CON_WRITE_VALIDATECODE);
		  	sessionId1();
		 	return false;
		}
			sessionId1();*/
			$("#cbg-query-result").show();
			$("#proname").attr("colspan",data.length);
			for (var i=0; i<data.length;i++){
				$(".cbg-heading").append("<td>"+data[i].partsType+"</td>");
				if(data[i].price){
					$(".cbg-price").append("<td>"+data[i].price+"</td>");					
				}else{
					$(".cbg-price").append("<td>-</td>");					
				}	
			}
			$("#remark").append(data[0].priceDescription);	
			$(".cbg-result-table td").css("width",100/(data.length)+"%");						
	 },
		/*complete:function(){
			getPriceList(_data);
		},*/
		error: function(){}
	});
} 

function getPriceList(_data){	
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + sparePartsPrice,
		dataType:"jsonp",
		jsonp:"jsonp",
        data:{"siteCode":SITE_CODE,"productCode":_data.productCode},
		success: function(data){		
			var desc = '';			
			for (var i=0; i<data.length;i++){				
				$("#sortIndex"+data[i].sortIndex).text(data[i].price);
				if(data[i].priceDescription) desc = data[i].priceDescription	
			}			
			$("#remark").append(desc);
		},
		error: function(){}
	});
}


function getNetWorkPorvience(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + chianprovince,
			dataType:"jsonp",
			data:{"siteCode":"cn","serviceType":"network"},
			jsonp:"jsonp",
			success: function(data){
				if(data.length > 0){									
					var _provience = document.getElementById("network_provience") 
					for(var i = 0; i < data.length; i++){
						_provience.options[_provience.length] = new Option(data[i].placeName, data[i].placeId) 
					}
					$("#network_provience").selectbox('detach').selectbox('attach')
				}
			},
			error: function(){}
	});	
}

function getNetworkCities(obj){
	var provinec = $(obj).val()
	var _city = document.getElementById("network_city");
	_city.length = 1;
	if(provinec>0){
		try 
		{ 
			$.ajax({
				type:"GET",
					async: false,
					url: baseurl + cityService,
					dataType:"jsonp",
					jsonp:"jsonp",
            		data:{"siteCode":"cn","placeId":provinec,"serviceType":"network"},
					success: function(data){
						for(var i = 0; i < data.length; i++){
							_city.options[_city.length] = new Option(data[i].placeName, data[i].placeId) 
						}
						$("#network_city").selectbox('detach').selectbox('attach');
						if(data.length==1)	_city[0].selected = true;
						
						if(bc == 1){
							bc = 0;
							for(var j = 0; j < _city.length; j++){
								if(city == _city.options[j].value){
									_city[j].selected = true;
									$("#network_city").selectbox('detach').selectbox('attach');
									$(_city).change();
									break;
								}
							}	
						}
					},
					error: function(){}
			});
		}catch (e) {
		}
		
	}
}

function getNetworkArea(obj){
	var city = $(obj).val()
	var _area = document.getElementById("network_area");
	_area.length = 1;
	if(city>0){
		$.ajax({
			type:"GET",
			async: false,
			url: baseurl + cityService,
			dataType:"jsonp",
			jsonp:"jsonp",
    		data:{"siteCode":"cn","placeId":city,"serviceType":"network"},
			success: function(data){
				for(var i = 0; i < data.length; i++){
					_area.options[_area.length] = new Option(data[i].placeName, data[i].placeId) 
				}
				if(data.length==1)	_area[0].selected = true;
					
				if(ba == 1){
						ba = 0;
						 for(var j = 0; j < _area.length; j++){
							if(area == _area.options[j].value){
								_area[j].selected = true;
								//$("#network_area").selectbox('detach').selectbox('attach');
								break;
							}
						} 	
				}
				$("#network_area").selectbox('detach').selectbox('attach')
			},
			error: function(){}
		});
	}
}

function getNetWorkProTypes(protype){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+productTypeService,	
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{'siteCode':SITE_CODE},
		success: function(data){
			var _protypes = document.getElementById("network_protypes");
			for(var i = 0; i<data.length; i++){
				if(data[i].productTypeName == "null"  || data[i].productTypeName == null){
					proname = data[i].productCode
				}else{
					proname = data[i].productTypeName
				}
				_protypes.options[_protypes.length] = new Option(proname, data[i].productId) 
			}
			if(bg == 0){
				bg=1;
				if(protype>0){
					for(var j = 0; j<data.length; j++){
						if(protype == _protypes.options[j].value){
							_protypes[j].selected = true;
							break;
						}
					}
				}
			}
			$("#network_protypes").selectbox('detach').selectbox('attach');
		},
		error: function(){}
	});
}

function setDefaultNetWorkProvince(proid,areaid,countyid){
	c1.clearItems();
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + chianprovince,
		dataType:"jsonp",
		data:{"siteCode":"cn","serviceType":"network"},
		jsonp:"jsonp",
		success: function(data){
				var Info = new Array();	
				var j = 0;
				for(var i = 0; i < data.length; i++){
					if(proid == data[i].placeId){
						j=i;
					}
					Info.length = 0;
					Info[0] = data[i].placeId;
					Info[1] = data[i].placeName;
					c1.addItem(i,Info);
				}
				c1.selectValue(j);	
		},
		complete:function(){
			$("#network_province").bind("change",getNetworkCities);
			setDefaultNetWorkArea(proid,areaid,countyid);
		},
		error: function(){}
	});
}

function setDefaultNetWorkArea(proid,areaid,countyid){
	c2.clearItems();
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + cityService,
		dataType:"jsonp",
		jsonp:"jsonp",
        data:{"siteCode":"cn","placeId":proid,"serviceType":"network"},
		success: function(data){
			var Info = new Array();	
				var j = 0;
				for(var i = 0; i < data.length; i++){
					if(areaid == data[i].placeId){
						j=i;
					}
					Info.length = 0;
					Info[0] = data[i].placeId;
					Info[1] = data[i].placeName;
					c2.addItem(i,Info);
				}
				c2.selectValue(j);
			changeFLag = false;			
		},complete:function(){
			$("#network_city").bind("change",getNetworkCounty);
			setDefaultNetWorkCounty(areaid,countyid);
		},
		error: function(){}
	});
}

function setDefaultNetWorkCounty(areaid,countyid){
	c3.clearItems();
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + cityService,
		dataType:"jsonp",
		jsonp:"jsonp",
        data:{"siteCode":"cn","placeId":areaid,"serviceType":"network"},
		success: function(data){
			var Info = new Array();	
			Info[0] = "All"
			Info[1] = "&#21487;&#36873;&#39033;&#65306;&#36873;&#25321;&#21306;&#65288;&#21439;&#65289;"
			c3.addItem(0,Info);
			var j = 0;
			for(var i = 0; i < data.length; i++){
				if(countyid == data[i].placeId){
					j=i+1;
				}
				Info.length = 0;
				Info[0] = data[i].placeId;
				Info[1] = data[i].placeName;
				c3.addItem(i+1,Info);
			}
			c3.selectValue(j);
			changeFLag = true;	
		},
		error: function(){}
	});
}

var adrs ;
//get netWork list
function getAddressList(_data){
    var points,s1;
    $("#reslut-adr").empty();
    $("#hiddendiv").empty();
    var cknum = 0;
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + addressListService,
			dataType:"jsonp",
			jsonp:"jsonp",
            data:_data,
			success: function(data){	
				if(data.length > 0){				 
				    $(".search-summary").show();  
				    var local1 = new BMap.LocalSearch(data[0].placeCode, {renderOptions:{map: map}});
				   	var ni = 0;
					for(var i = 0; i < data.length; i++){
						var adr = data[i].address;
						ni = i+1;
						var addressArr =data[i].placeCode.split(",");
						var adr1 = (addressArr[1]=="null" || addressArr[1]==null)?"":addressArr[1];
						var adr2 = (addressArr[2]=="null" || addressArr[2]==null)?"":addressArr[2];
						var adr3 = (addressArr[3]=="null" || addressArr[3]==null)?"":addressArr[3];
						if(adr1==adr2||adr2==adr3){
					 		adr = adr1+adr3+data[i].address;
						} else {
					 		adr = adr1+ adr2+adr3+data[i].address;
						}
						if(adr!=""&&adr!=undefined){
							adr = adr.length<=43?adr:adr.substring(0,41)+"...";
						}
						adrs = adr1+adr2+adr3;
						var phone = (data[i].phone == null || data[i].phone =="null")?"":data[i].phone;
						var netname = data[i].networkName.length<=24?data[i].networkName:data[i].networkName.substring(0,21)+"...";
						var xing= "";
						var xingnum =3;
						if(1==data[i].typeCode){
					 		xing="center-detail-xing x5";
					 		xingnum = 5;
						}else if (2==data[i].typeCode){
					 		xing="center-detail-xing x4";
					 		xingnum = 4;
						}else {
					 		xing="center-detail-xing x3";
						}
				    	s1 = "<div class='center-info' onclick=popMapMessage("+ni+","+xingnum+")";
				    	s1+= "><p class='center-detail clearfix'><span class='bdmap-logo'>"+ni+"</span><span class='center-sum-r'><span class='center-name'>"+netname+"</span>";
				    	s1+= "<span class='"+xing+"'></span></span></p><p class='center-detail'><span class='center-addr'></span> ";
				    	if(data[i].address!=null&&data[i].address.length>0){
				    		s1+= "<span class='center-detail-txt1'>"+data[i].address+"</span></p><p class='center-detail'>";
				    	}
						if(data[i].phone!=null&&data[i].phone.length>0){
							s1+= "<span class='center-phone'></span><span class='center-detail-txt'>"+data[i].phone+"</span>";
						}	
						if(data[i].workingHours!=null&&data[i].workingHours.length>0){
							s1+= "</p><p class='center-detail'><span class='center-time'></span><span class='center-detail-txt'>"+data[i].workingHours+"</span></p>";	
						}
						if(data[i].category!=null&&data[i].category.length>0){
							s1+= "<p class='center-detail'><span class='center-opr'></span> <span class='center-detail-txt'>"+data[i].category+"</span></p>";
						}
						s1+= "</div>";
						$("#reslut-adr").append(s1);
						s1 = "";
						var titleval = data[i].networkCode;
						if(titleval!=null){titleval = titleval.replace(/\ /g,"_");}
						
						var sContent =  "<div class='info_baidu'><div class='baidu_map_bg'> </div><div class='baidu_map_fenxiang' onclick='sinaBlog()'></div><div class='info_baidu_main'> " ;
						sContent+= "<span class='baidubilogo'  id='bdmap-logo'>"+ni+"</span>";
        			    sContent+= "<p class='baidunetname'  >"+data[i].networkName+"</p>";
        			   	sContent+= "<p class='center-detail-xing x3' id='xingjip'></p><p class='center-detail-txt'>"+data[i].address+"</p>";
        			   	sContent+= "<div class='baidu_map_div1'><input type='text' placeholder='&#36215;&#28857;' id='qidian"+i+"' class='start-input'/>"
        			   	sContent+= "<input type='button' value='&#20844;&#20132;' class='bus' onclick=searchBus('"+data[i].address+"',"+i+",'0') >";
        			   	sContent+= "<input type='button' value='&#39550;&#36710;' class='car' onclick=searchCar('"+data[i].address+"',"+i+")>";
        			   	sContent+= "</div><div class='baidu_map_div2'><div style='margin:5px 0;' class='baidu_open_div'><input type='text' name='user_phone' id='user_phone' class='start-input baidmap-phone' ";
        			   	sContent+= " placeholder='&#36755;&#20837;&#25163;&#26426;&#21495;&#30721;&#21457;&#36865;&#26381;&#21153;&#20013;&#24515;&#20449;&#24687;' >";
        			   	sContent+= "<input type='button' value='&#21457;&#36865;&#21040;&#25163;&#26426;' onclick=faSongPhone('"+data[i].networkId+"','"+titleval+"','0086') class='cell-phone'><br>";
        		 		sContent+= "<input type='text' name='captcha' id='captcha' maxlength='4' class='validate-input'  placeholder='&#36755;&#20837;&#39564;&#35777;&#30721;' />";
        		 		sContent+= "<span class='cbg-captcha1 validate-span'  id='baidumap_code'></span></div></div>";	
        			    //sContent+="<input type='button' value='&#20998;&#20139;&#33267;' class='share' onclick='sinaBlog()'>";
        			   	sContent+= "</div></div>";
						var opts1 = {
							width : 351, //  she zhi biao zhu xin xi de kuan du
							//height: 230, //  she zhi biao zhu xin xi de gao du
							//title : netname // //  she zhi biao zhu xin xi de biaoti
						}		
						var  re = /,/g;
						var longitude = data[i].longitude;
						var latitude = data[i].latitude;
						if(longitude!=null&&latitude!=null){
							setPointAddrToLat(longitude,latitude,cknum,xingnum);
						}else{
							changeAddrToLat((data[i].placeCode + data[i].address).replace(re, ""),cknum,xingnum)
						}
						cknum++;
						var infoWindow = new BMap.InfoWindow(sContent,opts1);
						infoWindowArr[i] = infoWindow/**/
					}		
				}else{
					maps.centerAndZoom(csmap, 8);	
					maps.addControl(new BMap.NavigationControl());
					$(".search-summary").show();
					$("#reslut-adr").empty().html('<span style="display: block; padding: 15px 10px; line-height: 1.6;">'+ titlecz +'</span>');
				}	
		  },
		  error: function(){alert("error");}
	});
}
var testhid = "";
//beg &#20511;&#29992;&#22238;&#25910;&#26041;&#27861;
function changeAddrToLat(address,index,xing){
	var myGeo = new BMap.Geocoder();
	var index2 = index;
	myGeo.getPoint(address , function(point){
 		if (point) {			
  				var icon = new BMap.Icon(baseimg+(index+1)+ ".png", new BMap.Size(22, 38));
				var marker = new BMap.Marker(point,{icon: icon });
				lat_lng[index] = point
				maps.addOverlay(marker);
				markerArr[index] = marker;
		   		testhid += "<input type='hidden' id='hiddval"+index+"' value='"+point.lng+","+point.lat+"'/>";
		   		$("#hiddendiv").html(testhid);
		    	marker.addEventListener("click", function(e){
		   			popMapMessage(index+1,xing);
		   		});
		   		   		
		   		if(index==0){
		   			if($("#network_area").val()=='0'||$("#network_area").val()==''){
					 	maps.centerAndZoom(point , 12);
					}else{
						maps.centerAndZoom(point , 15);
					}		
		   		}
  		}else{
  				markerArr[index] = 0	
  		}
	});
}
function setPointAddrToLat(x,y,index,xing){
	var point = new BMap.Point(x,y);
	var icon = new BMap.Icon(baseimg+(index+1)+ ".png", new BMap.Size(22, 38));
	var marker = new BMap.Marker(point,{icon: icon });
	lat_lng[index] = point
	maps.addOverlay(marker);
	markerArr[index] = marker;
	testhid += "<input type='hidden' id='hiddval"+index+"' value='"+point.lng+","+point.lat+"'/>";
	$("#hiddendiv").html(testhid);
	marker.addEventListener("click", function(e){
		popMapMessage(index+1,xing);
	});	
	if(index==0){
		if($("#network_area").val()=='0'||$("#network_area").val()==''){
			maps.centerAndZoom(point , 12);
		}else{
			maps.centerAndZoom(point , 15);
		}		
	}
}
function popMapMessage(i,xing){
	if(markerArr[i-1] != 0){
		markerArr[i-1].openInfoWindow(infoWindowArr[i-1]);
		maps.centerAndZoom(lat_lng[i-1] , 18);
		refurCode($("#baidumap_code"));//&#35774;&#32622;&#39564;&#35777;&#30721;	
		var img_obj = $("img[src='http://api0.map.bdimg.com/images/iw_close1d3.gif']");
		img_obj.css("top","22px");
		img_obj.css("width","15px");
		img_obj.css("height","17px");
		img_obj.addClass("baidu_map_close1");
		if(xing==4){
			$("#xingjip").removeClass();
			$("#xingjip").addClass("center-detail-xing x4");
		}
		if(xing==5){
			$("#xingjip").removeClass();
			$("#xingjip").addClass("center-detail-xing x5");
		}
		var urlimg = img_obj.css("backgroundImage");
		if(urlimg!=undefined&&urlimg.length>10){
			urlimg = urlimg.substring(4,urlimg.length-1);
			img_obj.removeClass("baidu_map_close1");
			if(urlimg.substring(0,1)=="\""){
				urlimg = urlimg.substr(1,urlimg.length-2)
			}
			img_obj.attr("src",urlimg);
		}
	}
}
$(document).ready(function (){
	//search-summary
	var nScrollHight = 0; 
    var nScrollTop = 0;   
   
   

});
$('#reslut-adr').on('scroll', function(){
	/*var reslutdiv = $('#reslut-adr');
	if( reslutdiv.height() + reslutdiv[0].scrollTop >= reslutdiv[0].scrollHeight - 60 ) { 
		alert('111');
	}else{
	}*/
	
});


//end
function TGDialogSpop1(e,salesId,smsType){
	event.cancelBubble=true; 
	$("#pop1 #salesId").val(salesId);
	var radoms = radomCode();
	$("#sys_validate_code").text(radoms);
	showDialog1.show({id:e,bgcolor:"#000000",opacity:5});
	$("#pop1").css("margin-right","1000px;");
	$("#pop1 #sendMsg").attr("name",smsType);	
}

function getLessStr(str,count){
	var realLength = 0,len = str.length,charCode = -1;
	for(var i = 0; i < len; i++){
		if(realLength > (count - 3)){
			return str.substring(0,i)+"...";
		}
		charCode = str.charCodeAt(i);
		if(charCode >= 0 && charCode <= 128){
			realLength += 1;
		}else{
			realLength += 2;
		}
	}
	return str;
}


function sendNetWorkAddressInfo(obj){
	var $p = $(obj).parent().parent();
	var networkId = $p.find("#salesId").val();
	var mobile =trim($("#surul").val());
	if(info == mobile || ""==mobile ){
		alert(info6);
		return ;
	}else{
		var f = checkPhone(mobile);
		if(f == "-1"){
			alert(info5);
			return;
		}
	}
	var code =  trim($p.find(".span-code").text());
	if(""==$p.find("#suru2").val() || info1==$p.find("#suru2").val()){
		alert(info7);
		return ;
	}else {
		if($p.find("#suru2").val() != code){
			alert(info2);
			$p.find(".span-code").text(radomCode());
		}else{
			$p.find("#suru2").val(info1);
			$p.find(".span-code").text(radomCode());
			$.ajax({
					type:"GET",
					async: false,
					url: baseurl + sendAddressService,
					dataType:"jsonp",
					jsonp:"jsonp",
            		data:{ "networkId":networkId,"siteCode":"cn","countryCode":"0086","mobile":mobile},
					success: function(data){
						if(data.returnCode == "0"){
							alert(info3);
							showDialog.hide();
						}else if(data.returnCode == "6"){
							alert(info4);
						}else {
							alert(info8)
						}
					},
				error: function(){alert("error");}
			});	
		}
	}
}

function is_initHomeMap(i){
	var _networkName0 = $("#networkName"+i).val();
	if(""!=_networkName0 && null!=_networkName0 && "null" != _networkName0){
		map.clearOverlays();
		setDefaultMap();
		var icon = new BMap.Icon(listArr[i][5], new BMap.Size(22, 38));
		var sContent ='<div class="info_baidu" style="padding-top:5px;"><div class="info_baidu_main"><p class="title"><span class="color-1" style="color:#F00;padding-right: 2px;">'+(i+1)+'.</span>'+listArr[i][4]+'</p><p class="address">'+listArr[i][8]+'</p><p class="tel">'+listArr[i][3]+'</p></div></div>';
		var marker = new BMap.Marker(caList[i],{icon: icon });
		markerArr[0]=marker;
		map.addOverlay(marker);           
		var infoWindow = new BMap.InfoWindow(sContent);
		infoWindowArr[0]=infoWindow;
		marker.addEventListener("click", function(){this.openInfoWindow(infoWindowArr[0]);});
		markerArr[0].openInfoWindow(infoWindowArr[0]);
	}	
}

function page_generation3(rows,curPage,pageSize){
	xpageTool.show({"total":rows, "page":curPage, "pageSize":pageSize});	
}

// for baidu map
function setLngLat(){
	for(var i = 0; i < listArr.length; i++){
		if(listArr[i][0] !="null" || listArr[i][1] !="null"){
			caList[i] = new BMap.Point(listArr[i][1],listArr[i][0]);
		}else{
			changeAddress(listArr[i][8],i);
		}
	}
	setTimeout("initMap()",2000);
}  
function changeAddress(address,i){
	var myGeo = new BMap.Geocoder();
	myGeo.getPoint(address, function(point){
		if(point) {
			caList[i] = point;
		}else{	
			caList[i] = new BMap.Point(0, 0);			
		}									  
	}); 
}
function setDefaultMap(){
	var j = -1;	
	for(var i = 0; i < caList.length; i++ ){
		if(caList[i].lat !="0" && caList[i].lng !="0"){
			j = i;	
			hasaddress[i] ="y";
		}
	}
	if(j == -1){
		map.centerAndZoom(new BMap.Point(105, 38), 5); 
		
	}else{
		map.centerAndZoom(caList[j], 12); 
	}
}
function makeBaiduMap(){ 
	map.clearOverlays();	//clear all marker
	setDefaultMap();
    for (var i = 0; i <= listArr.length-1; i++) {
		var icon = new BMap.Icon(listArr[i][5], new BMap.Size(22, 38));
	 	var sContent ='<div class="info_baidu" style="padding-top: 6px;"><div class="info_baidu_main"><p class="title"><span class="color-1" style="color:#F00;padding-right: 2px;">'+(listArr[i][9])+'.</span>'+listArr[i][4]+'</p><p class="address">'+listArr[i][8]+'</p><p class="tel">'+listArr[i][3]+'</p></div></div>';
	 	var marker = new BMap.Marker(caList[i],{icon: icon });
	    markerArr.push(marker);
	    map.addOverlay(marker);           
	    var infoWindow = new BMap.InfoWindow(sContent);
	    infoWindowArr.push(infoWindow);
	    if(i==0){
		   marker.addEventListener("click", function(){
		    map.zoomTo(18)
		   	this.openInfoWindow(infoWindowArr[0]);
		   });
	    }else if(i==1){
		  marker.addEventListener("click", function(){
		    map.zoomTo(18)
		  	this.openInfoWindow(infoWindowArr[1]);
		  });
		}else if(i==2){
		  marker.addEventListener("click", function(){
		    map.zoomTo(18)
		  	this.openInfoWindow(infoWindowArr[2]);
		  });
		}else if(i==3){
		  marker.addEventListener("click", function(){
		  	map.zoomTo(18)
		  	this.openInfoWindow(infoWindowArr[3]);
		  });
		}   
	} 
}

function showMessage(obj) {
	var number = $(obj).attr("id");
	if(hasaddress[number] == "y"){
		map.zoomTo(18)
		markerArr[number].openInfoWindow(infoWindowArr[number]);
	}
}

function initMap(){
	makeBaiduMap();
}

//ckeck cellphone format
function checkPhone(phone){
	var RegPhone = /^1[0-9]{10}?$/;
    return phone.search(RegPhone);	
}

function callback_m2m_news(data){
	var otherlist='';
	var totalNum='';
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	 
	$("#x-press-list").parent().removeClass().addClass("press-news-search");	
	if(otherlist == null || otherlist.length==0){
		$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	} else {
		if(totalNum>0) {
			if(trim(v_data.data.ssUserText) !=""){
				$("#x-press-list").append("<p class='p-1'>"+ setSearchKeys(decodeURIComponent(v_data.data.ssUserText)) +"</p>");
			}else{
				$("#x-press-list").append("<p class='p-1'>"+ setSearchKeys(v_data.data.subContents) +"</p>");
			}	
		} 
		for(var b=0;b<otherlist.length;b++) {
			$("#x-press-list").append("<li>"+
				"<h2><a href='"+returnVariable(otherlist[b]['DOC_URL'])+"'>"+returnVariable(otherlist[b]['DRETITLE'])+"</a></h2>"+
				"<span>"+returnVariable(otherlist[b]['RESERVE_FIELD11'])+"</span>"+
				"<p>"+returnVariable(otherlist[b]['DOC_DESCRIPTION'])+"</p>"+
			"</li>");
		}	
	}	 
	page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);
}

function setDefaultArea(){
	setDefaultprovince()
	setSalesType1()
}
function setDefaultprovince(){
		
	$.ajax({
		type:"GET",
		async: false,
		url: baseurlCmkt + "service/place/country/site",
		dataType:"jsonp",
		data:{"siteCode":"cn","serviceType":"sales"},
		jsonp:"jsonp",
		success: function(data){
			var property={
				id:"",
				name:"",
				type:"basic",
				readOnly:false,
				width:254,
				bgimg:$("#select_bg_05").val(),
				selectHeight:268,
				input:"",
				autoLoad:false,
				haveIcon:false
			};	
			var pro = -1;
			var def = "<option value='0'> &#36873;&#25321;&#30465;&#20221; </option>";
			var str = "<select name='c' id='salesprovince' onchange='delaycity()'>"+def;
			for(var i = 0; i < data.length; i++){
				if(proid == data[i].placeId){
					pro = i;
				}
				str += "<option value="+data[i].placeId+">"+data[i].placeName+"</option>"
			}
			str += "</select>";
			$("#sales_province").empty().append(str);
			g2= $.createGooCombo(document.getElementById("salesprovince"),property,10);
			if(pro>=0){
				g2.$list.find("a:eq(0)").remove();
				g2.selectValue(pro);
			}else{
				g2.selectValue(0);
			}
			//defaultcity = 1
		},
		error: function(){}
	});
}
function delaycity(){
	setTimeout("setDefaultcity()",500)
}
function setDefaultcity(){
	var placeId = g2.$defaultInput;
	var property={
		id:"",
		name:"",
		type:"basic",
		readOnly:false,
		width:254,
		bgimg:$("#select_bg_05").val(),
		selectHeight:268,
		input:"",
		autoLoad:false,
		haveIcon:false
	};	
	if(placeId > 0){
		$.ajax({
			type:"GET",
			async: false,
			url: baseurlCmkt + "service/place/list",
			dataType:"jsonp",
			jsonp:"jsonp",
        	data:{"siteCode":"cn","placeId":placeId,"serviceType":"sales"},
			success: function(data){	
				var j = 0;
				var str = "<select name='c' id='salescity'><option value='0'> &#36873;&#25321;&#22478;&#24066; </option> ";
				for(var i = 0; i < data.length; i++){
			 		if(data[i].placeId == areaid){
			 			j = i;
			 		}
					str += "<option value="+data[i].placeId+">"+data[i].placeName+"</option>";		
				}
				str += "</sclect>";
				$("#china_city1").empty().append(str);
				g1 = $.createGooCombo(document.getElementById("salescity"),property,10);
				if(j>0 || data.length >= 1){
					g1.$list.find("a:eq(0)").remove();
					g1.selectValue(j);
				}else{
					g1.selectValue(0);
				}
			},
			error: function(){}
		});
	}else{
		var str1 = "<select name='c' id='salescity'><option value='0'> &#36873;&#25321;&#22478;&#24066; </option> </select>";
		$("#china_city1").empty().append(str1);
		g1 = $.createGooCombo(document.getElementById("salescity"),property,10);
		g1.selectValue(0);	
	}
}
function setSalesType1(){
	var typeid = 0
	if(type == "All" || type == "all"){
		typeid = 0
	}else if(type == "A1"){
		typeid = 1
	}else if(type == "A2"){
		typeid = 2
	}else if(type == "Others"){
		typeid = 3
	}
	 
	g3.selectValue(typeid);
}


//get city's sale list
function getSalesList(_data,twoDimensionalCode){
	$(".page").empty().show();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurlCmkt + salesListService,
			dataType:"jsonp",
			jsonp:"jsonp",
            data:_data,
			success: function(data){
			if(twoDimensionalCode&&data.length==0){
				$(".y-tishi").show()
				$("#iwcm_page").empty()
			}else if(twoDimensionalCode&&data.length>0){
				$(".y-tishi").hide()
				$("#code-window").hide() 
				$("#iwcm_page").empty()	
			}		
				if(data.length > 0){
					var address = "";			
					for(var i = 0; i < data.length; i++){	
						var addressInfo = {}	
					 	var phone = (data[i].phone == null || data[i].phone =="null")?" ":data[i].phone
					 	var lng = (data[i].longitude != null && data[i].longitude != 'null')?data[i].longitude: -1
					 	var lat = (data[i].latitude != null && data[i].latitude != 'null')?data[i].latitude: -1
					 	var sname = data[i].salesName
					 	if(sname.length>24){
					 		sname=sname.substring(0,23)+"...";
					 	}
					 	var saddress = data[i].address
					 	if(saddress.length>43){
					 		saddress=saddress.substring(0,42)+"...";
					 	}
						addressInfo.title = data[i].salesName
						addressInfo.phone = phone
						addressInfo.address = saddress
						addressInfo.lng = lng
						addressInfo.lat = lat
						addressInfo.flg = i + 1
						addressList[i] = addressInfo													
						address = address + "<a href='javascript:void(0)' class='aa' style='height:175px;' onClick='showMessage1(this)' id='"+ i +"'>" +
    					"<ul class='ul-1'>" +
    						"<li class='li-1 color-black font-14'><strong><span style='color:#BF1000;'>"+(i+1)+".&nbsp;</span>"+sname+"</strong></li>" +
    						"<li class='li-2 clearfix'><span class='span-1 mypng'><img src='"+adimg1+"'></span><span class='span-2'>"+saddress+"</span></li>" +
    						"<li class='li-2 clearfix'><span class='span-1 mypng'><img src='"+phimg1+"'></span><span class='span-2'>"+phone+"</span></li>" +
    						"<li class='li-4 clearfix'>" +
								"<span class='span-1'><input type='text' name='email' class='w170 fl txt-h24-3 txt-h24-4' value='&#36755;&#20837;&#25163;&#26426;&#21495;&#30721;&#21457;&#36865;&#38376;&#24215;&#20449;&#24687;' /></span>" +
							"</li>" +
    						"<li class='li-4 clearfix'>" + 	
								"<span class='span-1'><input type='text' name='email' class='w102 txt-h24  fl' style='width:60px;' value='&#36755;&#20837;&#39564;&#35777;&#30721;' /></span>" + 
								"<span class='span-code' style='margin-left:10px;'>"+radomCode()+"</span>" +
								"<span class='span_2'><input type='image' class='send_info' src='"+sendimg1+"' class='email-btn' onClick='sendAddressInfo(this)'/></span>"+
								"<input type='hidden' class='salesId' value='"+ data[i].salesId+"' />" + 
							"</li>" + 
						"</ul></a>";
					}	
					$("#wait_img").hide();
					$(".div").empty().append(address);	
					page_generation3(data[0].totalRows,_data.curPage,_data.pageSize);	
					checkInfo(addressList)				
					$(".send_info").mouseover(function(){
						submit_mouseover(this,sendimg2)
					});
					$(".send_info").mouseout(function(){
						submit_mouseout(this,sendimg1)
					});
					$(".w170").blur(function(){
						txt_blur(this);
						if(trim($(this).val()) == ""){
							$(this).val(info);
							return
						}
					});	
					$(".w170").focus(function(){				
						if(trim($(this).val()) == info){
							$(this).val("");
							return
						}
					});
					$(".w102").blur(function(){
						txt_blur(this);
						if(trim($(this).val()) == ""){
							$(this).val(info1);
							return
						}
					});
					$(".w102").focus(function(){				
						if(trim($(this).val()) == info1){
							$(this).val("");
							return
						}
					});
				}else{
					$(".div_find_shop").empty().append(LAG_CON_NO_RESULTS)
					map.centerAndZoom(new BMap.Point(105, 38), 4);
				}
		  },
		  error: function(){}
	});
}	


//-----for google map start-----
function setLan_Lat(){
	for(var i = 0; i < listArr.length; i++){
		if(listArr[i][0] !="null" || listArr[i][1] !="null"){
			caList[i]=new google.maps.LatLng(listArr[i][0], listArr[i][1]);
		}else{
			getGoogleAddress(listArr[i][8],i);			
		}
	}
	setTimeout("makeGoogleMap()",1500);
}
function getGoogleAddress(address,i){
	if(address == "null"){
		caList[i]="";
	}else{
		geocoder.geocode({'address': address},
			function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					caList[i]=results[0].geometry.location
				}else{
					caList[i]="";
				}
		    }
		);
	}
}
function setGoogleInitMap(address){
	geocoder.geocode(
  	{'address': address},
  	function(results, status) {
  		if (status == google.maps.GeocoderStatus.OK) {
	  		var myOptions = {
				zoom: 14,
				center: results[0].geometry.location,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
	  		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   		}
	}
 );	 
}
function makeGoogleMap(){
	var f = -1;
	for (var i = 0; i < caList.length; i++) {
		if(caList[i] !=""){
			f = i;
			hasaddress[i] = "y";
		}
	}
	if(f != -1){
		var myOptions = {
    		zoom: 14,
    		center: caList[f],
   			mapTypeId: google.maps.MapTypeId.ROADMAP
 		}
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	}else{
		setGoogleInitMap("beijing");
	}
	for (var i = 0; i < listArr.length; i++) {
		var a=caList[i]
		if (a==""){
			a= new google.maps.LatLng(0, 0)
		}
	    lttitle.push(listArr[i][2]);
	    message[i]= "<div style='width:280px;'><span><strong>"+listArr[i][4]+"</strong></span><br/>"+"<span>"+listArr[i][8]+"</span><br/>";
	    if(listArr[i][3] != "" ){
	    	message[i] = message[i] + "<span>"+listArr[i][3]+"</span>";
	    }
	    message[i] = message[i] + "</div>";
		var marker = new google.maps.Marker({
			position: a, 
			map: map,
			icon: listArr[i][5]
		});
		marker.setTitle(lttitle[i]);
		markersry.push(marker);
		attachSecretMessage(marker, i);
	}		
}

function attachSecretMessage(marker, number) {
  var infowindow = new google.maps.InfoWindow(
      { content:message[number],
        size: new google.maps.Size(50,50)
      });
  infowindowarr.push(infowindow);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
	for(var i=0; i<=listArr.length-1; i++){
		if(i!= number){
			infowindowarr[i].close();
		}
	}
  });
}
function showGoogleMessage(obj) {
	var number = $(obj).attr("id");
    infowindowarr[number].open(map,markersry[number]);
    for(var i=0; i<=listArr.length-1; i++){
		if(i!= number || hasaddress[i] == "n" ){
			infowindowarr[i].close();
		}
	}	
}

/*weixiujinduchaxun start*/
function searchRepair(type,tel){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+"service/repair/validateQueryRepair",			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn","type":type,"inputStr":tel,"sessionuuid":$("#sessionuuid3").text(),"validationCode":$("#user_code").val()},
		success: function(data){
	if(data[0].returnCode==8||data[0].returnCode==9){
		alert(LAG_CON_WRITE_VALIDATECODE);
		sessionId3();
		return false;
	}
		sessionId3();		
		if(data.length > 0){
			for(var i = 0; i < data.length; i++){
				if(data[i].returnCode == 0){
					window.location.href = $("#seaSuccess").val()+"?type="+type+"&tel="+tel;
				}else{
					window.location.href = $("#seaError").val();
				}
			}
		}else{
			alert(failedquery);	
		}
		},
		error: function(){
		}
	});	
}
function searchDetail(params){
		$.ajax({
		type:"GET",
		async: false,
		url: baseurl+queryRepair,			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:params,
		success: function(data){
			if(data[0].returnCode != 0){
				window.location.href = $("#seaError").val();
			}else{
				for(var i = 0; i < data.length; i++){
					if(data[i].sn ==""&&data[i].imei ==""){
						var SnImei = "";
					}else if(data[i].sn !=""&&data[i].imei ==""){
						var SnImei = data[i].sn;
					}else if(data[i].sn ==""&&data[i].imei !=""){
						var SnImei = data[i].imei;
					}else if(data[i].sn !=""&&data[i].imei !=""){
						var SnImei = data[i].imei+"/"+data[i].sn
					}
					if(data[i].repairState == 1){
						var repair = "&#32500;&#20462;&#20013;";
					}else if(data[i].repairState == 2){
						var repair = "&#32500;&#20462;&#23436;&#25104;";
					}else if(data[i].repairState == 3){
						var repair = "&#24050;&#21462;&#26426;";
					}else if(data[i].repairState == 4){
						var repair = "&#21457;&#21378;&#32500;&#20462;&#65288;&#32500;&#20462;&#20013;&#65289;";
					}else if(data[i].repairState == 5){
						var repair = "&#21457;&#21378;&#32500;&#20462;&#23436;&#25104;";
					}
					var status = "<tr><td>"+data[i].repairUnitsName+"</td><td>"+data[i].repairUnitsTelephone+"</td><td>"+SnImei+"</td><td>"+data[i].acceptTime+"</td><td>"+repair+"</td><td>"+data[i].takeTime+"</td></tr>"
					$("#repare_record").append(status);
				}
			}
		},
			error: function(){}
		});	
	
	}
	
	/*yanbao start*/
function searchWarranty(proName){
	$.ajax({ 
			type:"GET",
			async: false,
			url: baseurl+searchYanBao,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"sn":proName},
			success: function(data){
				if(data.returnCode == 0){
					window.location.href = $("#warrantyHref").val();
				}else{
					window.location.href = $("#warrantyError").val();
				} 
			},
			error: function(){}
	});
} 


function sendAddressInfo(obj){
	var $p = $(obj).parent().parent();
	var salesId = $p.find(".salesId").val();
	var mobile =$p.prev(".li-4").find(".w170").val();
	var f = checkPhone(mobile);
	if(f == "-1"){
		alert(info5);
		return
	}
	var code =  $p.find(".span-code").text();
	if($p.find(".span-1 .w102").val() != code){
		alert(info2);
		$p.find(".span-code").text(radomCode());
	}else{
		$p.find(".span-1 .w102").val(info1);
		$p.find(".span-code").text(radomCode());
		$.ajax({
				type:"GET",
				async: false,
				url: baseurl + sendAddressService,
				dataType:"jsonp",
				jsonp:"jsonp",
            	data:{ "salesId":salesId,"siteCode":"cn","countryCode":"0086","mobile":mobile},
				success: function(data){
					if(data.returnCode == "0" || data.returnCode == "0" ){
						alert(info3)
					}else if(data.returnCode == "6"){
						alert(info4)
					}else{
						alert(info6)
					}
				},
			error: function(){alert(info4);}
		});	
	}
}

/*weixiuzhuangtaichaxun*/
function searchRepairStatus(telsn){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+carryService,			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn","sn":telsn},
		success: function(data){
			var tel = telsn;
			if (data.length > 0){
				for(var i = 0; i < data.length; i++){
					if(data[i].returnCode == 0){
						window.location.href = $("#seaSuccess").val()+"?tel=" + tel;
					}else{
						window.location.href = $("#seaError").val()+"?tel=" + tel;
					}
				}
			}
			else{
				//window.location.href = $("#seaError").val()+"?tel=" + tel;
			    searchRepairimeiStatus(telsn);
			}
		},
		error: function(){}
	});	
}
//---
function searchRepairimeiStatus(telsn){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl+carryService,			  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn","imei":telsn},
		success: function(data){
			var tel = telsn;
			if (data.length > 0){
				for(var i = 0; i < data.length; i++){
					if(data[i].returnCode == 0){
						window.location.href = $("#seaSuccess").val()+"?tel=" + tel;
					}else{
						window.location.href = $("#seaError").val()+"?tel=" + tel;
					}
				}
			}
			else{
				window.location.href = $("#seaError").val()+"?tel=" + tel;
			}
		},
		error: function(){}
	});	
}
//sn-inquire
function searchDetailStatus(inputVal){
		$.ajax({
		type:"GET",
		async: false,		  		  
		url:baseurl + carryService,
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE,"sn":inputVal}, 
		success: function(data){
			var tel = inputVal;
			var carryTime;			
			if (data.length > 0){
				for(var i = 0; i < data.length; i++){
					if(data[i].returnCode != 0){
						window.location.href = $("#seaError").val()+"?tel=" + tel;
					}else{
					    carryTime = data[0].delayTime==null?LAG_CON_SUPPORT_CARRY_ERROR:data[0].delayTime+LAG_CON_SUPPORT_CARRY_SECCUS;
						$("#pro-code").text(data[0].productCode);
						$("#pro-ybday").text(data[0].warrantyEndTime);
						$("#pro-yb").text(carryTime);
						if(data[i].accidentType == 1){
							switch(data[i].accidentStatus){
								case "1":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+fail+"<br/>"+usedata+data[i].accidentInsuranceDate.split(" ")[0]);
									break;
								case "2":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+old);	
									break;
								case "3":
									$("#yiwaibao").html(tuiding);	
									break;
								case "4":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+keyong);	
									break;		
								case "5":
									$("#yiwaibao").html(change);	
									break;
							}
						}else if(data[i].accidentType == null || data[i].accidentType == "null"){
							$("#yiwaibao").html("&#26080;");
						}else if(data[i].accidentType == 2){
							switch(data[i].accidentStatus){
								case "1":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+fail+"<br/>"+usedata+data[i].accidentInsuranceDate.split(" ")[0]);
									break;
								case "2":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+old);	
									break;
								case "3":
									$("#yiwaibao").html(tuiding);	
									break;
								case "4":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+keyong);	
									break;		
								case "5":
									$("#yiwaibao").html(change);	
									break;
							}
						}
						if(data[0].accidentType == 1){
							$("#pro-yb-other").text(spb)
						}else if(data[0].accidentType == 2){
							$("#pro-yb-other").text(zjb)
						}else{
							$("#pro-yb-other").text(wb)
						}
					}
				}
			}
			else{
				searchImeiStatus(inputVal);
			}
		},
			error: function(){}
		});	
	
	}
	
	//imei-inquire
	function searchImeiStatus(inputVal){
		$.ajax({
		type:"GET",
		async: false,
		//url: baseurl+searchStatusCheck,			  		  
		url:baseurl + carryService,
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE,"imei":inputVal}, 
		success: function(data){
			var tel = inputVal;
			var carryTime;
			if (data.length > 0){
				for(var i = 0; i < data.length; i++){
					if(data[i].returnCode != 0){
						window.location.href = $("#seaError").val()+"?tel=" + tel;
					}else{
					    carryTime = data[0].delayTime==null?LAG_CON_SUPPORT_CARRY_ERROR:data[0].delayTime+LAG_CON_SUPPORT_CARRY_SECCUS;
						$("#pro-code").text(data[0].productCode);
						$("#pro-ybday").text(data[0].warrantyEndTime);
						$("#pro-yb").text(carryTime);
						if(data[i].accidentType == 1){
							switch(data[i].accidentStatus){
								case "1":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+fail+"<br/>"+usedata+data[i].accidentInsuranceDate.split(" ")[0]);
									break;
								case "2":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+old);	
									break;
								case "3":
									$("#yiwaibao").html(tuiding);	
									break;
								case "4":
									$("#yiwaibao").html(pmb+data[i].accidentEndDate.split(" ")[0]+"<br/>"+keyong);	
									break;		
								case "5":
									$("#yiwaibao").html(change);	
									break;
							}
						}else if(data[i].accidentType == null || data[i].accidentType == "null"){
							$("#yiwaibao").html("&#26080;");
						}else if(data[i].accidentType == 2){
							switch(data[i].accidentStatus){
								case "1":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+fail+"<br/>"+usedata+data[i].accidentInsuranceDate.split(" ")[0]);
									break;
								case "2":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+old);	
									break;
								case "3":
									$("#yiwaibao").html(tuiding);	
									break;
								case "4":
									$("#yiwaibao").html(zjbx+data[i].accidentEndDate.split(" ")[0]+"<br/>"+keyong);	
									break;		
								case "5":
									$("#yiwaibao").html(change);	
									break;
							}
						}
						if(data[0].accidentType == 1){
							$("#pro-yb-other").text(spb)
						}else if(data[0].accidentType == 2){
							$("#pro-yb-other").text(zjb)
						}else{
							$("#pro-yb-other").text(wb)
						}
					}
				}
			}
			else{
				window.location.href = $("#seaError").val()+"?tel=" + tel;
			}
		},
			error: function(){}
		});	
	
	}



function getProductTypesx(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkcategory ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){
				if(data.length > 0){									
					var Info = new Array();	
					for(var i = 0; i < data.length; i++){
						Info.length = 0
						Info[0] = data[i].productId
						Info[1] = data[i].productTypeName
						p1.addItem(i+1,Info)
								
					}
				}	
			},
			error: function(){}
	});
	
}
function setProductTypesx(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkcategory ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE},
			success: function(data){
				if(data.length > 0){									
					var Info = new Array();	
					var j = 0;
					for(var i = 0; i < data.length; i++){
						if(_data.parentIdparentId==data[i].productId){
							j=i+1;
						}
						Info.length = 0
						Info[0] = data[i].productId
						Info[1] = data[i].productTypeName
						p1.addItem(i+1,Info)
								
					}
					p1.selectValue(j);
				}	
			},complete:function(){
				setProductByIDx(_data);	
			},
			error: function(){}
	});
	
}

function setProductTypesx1(_data){
	p1.clearItems()
	var cityInfo = new Array();
	cityInfo[0] = "0"
	cityInfo[1] = "&#36873;&#25321;&#22478;&#24066;"
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkcategory ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE,'businessType':'YY'},
			success: function(data){
				if(data.length > 0){								
					var Info = new Array();	
					var j = 0;
					for(var i = 0; i < data.length; i++){
						if(_data.parentId==data[i].superProblemId){
							j=i;
						}
						Info.length = 0
						Info[0] = data[i].superProblemId
						Info[1] = data[i].superProblemName
						p1.addItem(i,Info)
								
					}
					$("#"+p1.$id).unbind("change");
					p1.selectValue(j);
				}	
			},complete:function(){
				setProductByIDx1(_paramsSetProduct);	
			},
			error: function(){}
	});
}

function setProductByIDx(_data){
	p2.clearItems()
	var cityInfo = new Array();
	cityInfo[0] = "0" ;
	cityInfo[1] = _data.productCode ;
	p2.addItem(0,cityInfo)
	p2.selectValue(0);
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + productIDSevice,			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{ "productId":_data.parentId,"siteCode":SITE_CODE},
			success: function(data){
				if(data.length > 0){
					var j = 0;
					for(var i = 0; i < data.length; i++){
						var proname = ""
						if(data[i].productTypeName){
							proname = data[i].productTypeName + "(" + data[i].productCode +")"
						}else{
							proname = data[i].productCode;
						}
						if(_data.productCode==data[i].productCode){
							j=i;
						}
						cityInfo.length = 0;
						cityInfo[0] = data[i].productId;
						cityInfo[1] = proname;
						p2.addItem(i+1,cityInfo);
					}
					p2.selectValue(j);
				}
			},
			error: function(){}
	});
}





/*TJW RS get day 2015-05-26*/
function getServerTime(params){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + getRsDay,
			dataType:"jsonp",
			data:{networkCode:params},
			jsonp:"jsonp",
			success: function(data){
				if(data.length>0){
					$("#xingqi").html("")
					for (var i = 0;i<data.length;i++){
						if(data[i].appointmentDateType =="2"){
							$("#xingqi li").eq(i).addClass("Isover")
						}
						if($("#xingqi li").length < 5){
							$("#xingqi").append("<li><label class='cbg-btn cbg-btn-label'><input type='radio' name='service-date' class='cbg-btn-input'></input></label></li>");
							$("#xingqi label").eq(i).text(getLastDate(data[i].canAppointmentDate.replace(/-/g, "/")))
							$("#xingqi label").eq(i).attr("day",data[i].canAppointmentDate)
						}
					}	
				}else{
					alert(null_resercenter);
					return false;
				}				
			},
			complete: function(){
				if(typeof(firstday) !="undefined" && firstday == 1){
					firstday = 0;
					for(var i = 0; i < 5 ; i++){
						if($("#xingqi label").eq(i).attr("day") == result_info.reservationDate){
							$("#xingqi label").eq(i).addClass("cbg-btn-listlx");
							setReservationTime(_data);
							break;
						}
					}
				}else{
					for(var i = 0; i < 5 ; i++){
						$("#xingqi label").eq(i).removeClass("cbg-btn-listlx");
						$("#cbg-wrapper-ul").html("");
					}
				}
				$("#xingqi li").not(".Isover").click(function(){
					if(!$(this).find("label").hasClass("cbg-btn-listlx")){
						var _all_day = $(this).text();
						_params.reservationDate = _all_day.split("  ")[0];
						$(this).siblings().find("label").removeClass("cbg-btn-listlx");	
						$(this).find("label").addClass("cbg-btn-listlx");	
						setReservationTime(_params);
					}
				});
				
			},
			error: function(){}
	});	
}

function getLastDate(_day){
	var time= new Date(new Date(_day));
	var year=time.getFullYear();  
	var month=time.getMonth() +1;  
	month = (month.toString().length==1)?"0"+month:month;
	var date=time.getDate(); 
	date = (date.toString().length==1)?"0"+date:date;		
	var day = getDay(time.getDay()) ;
	var nowTime=year + "-" + month + "-" + date + "  " + day ;
	return nowTime;
}

/*END TJW */

function getProductTypesx1(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkcategory ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE,'businessType':'YY'},
			success: function(data){
				if(data.length > 0){									
					var yyprotype = document.getElementById("yyselect") 
					for(var i = 0; i < data.length; i++){
						if(data[i].productLineId){
							var _pid = data[i].superProblemId+"|"+data[i].productLineId;
							var _pname = data[i].superProblemName; 
							yyprotype.options[yyprotype.length] = new Option(_pname, _pid)
						}		
					}
					
				}
				if(typeof(firstprotype) != "undefined" && firstprotype == 1){
					firstprotype = 0
					var typecode = 0
					for(var i = 1; i < yyprotype.length; i++){
						typecode = yyprotype[i].value.split("|")[0]
						setDefYYprotype(typecode,result_info.offeringCode,i)
					}
				}
				$("#yyselect").selectbox('detach').selectbox('attach')
			},
			error: function(){}
	});
}

function setDefYYprotype(typecode,offeringCode,index){
	$.ajax({
	type:"GET",
	async: false,
	url: baseurl + "service/product/reservation/list",			  		  
	dataType:"jsonp",
	jsonp:"jsonp",
	data:{ "problemId":typecode,"siteCode":"cn"},
	success: function(data){
		if(data.length > 0){
			for(var i = 0; i < data.length; i++){
				if(trim(data[i].offeringCode) == trim(offeringCode)){
					document.getElementById("yyselect")[index].selected= true;
					$("#yyselect").change()
					var yyproduct = document.getElementById("yyproductcode") 
					break;
				}
			}
		}
		$("#yyselect").selectbox('detach').selectbox('attach')
	},
	error: function(){}
});
}

function getProductByIDx2(productTypeId){
	$(".product-wrap a").remove()
	$(".product-wrap img").show()
	waitSeconds(500)
	data_array.length = 0
	if(productTypeId>0){
		$.ajax({
				type:"GET",
				async: false,
				url: baseurl + productIDSevice,			  		  
				dataType:"jsonp",
				jsonp:"jsonp",
				data:{ "productId":productTypeId,"siteCode":SITE_CODE},
				success: function(data){	
					$(".product-wrap img").hide();
					if(data.length > 0){
						for(var i = 0; i < data.length; i++){
							var j_product = {}
							var proname = data[i].productTypeName?data[i].productTypeName:data[i].productCode
							var $pl = $(".for_pro_list").clone().removeClass()
							$pl.text(proname).attr("value",data[i].productCode)
							$(".product-wrap").append($pl);
							j_product.pcode = data[i].productCode
							j_product.pname = proname
							data_array.push(j_product)
						}		
					}
				},
				error: function(){}
		});
	}
}

function getProductByIDx1(obj,source){
	var problemId= $(obj).val().split("|")[0];
	if(typeof spareProductCache === 'undefined'){
		spareProductCache = {};
	}
	if(!spareProductCache[problemId]){
		spareProductCache[problemId] = [];
		cache = true;
	}
		$.ajax({
				type:"GET",
				async: false,
				url: baseurl + "service/product/reservation/list",			  		  
				dataType:"jsonp",
				jsonp:"jsonp",
				data:{ "problemId":problemId,"siteCode":"cn"},
				success: function(data){
					if(data.length > 0){ 
						$("#support-select-2").focus();
						$("#support-select-a").find("ul").html("");
						for(var i = 0; i < data.length; i++){
							var proname = ""
							if(data[i].productTypeName){
								proname = data[i].productTypeName;
							}else{
								proname = data[i].productCode;
							}
							if(""!=data[i].offeringCode && data[i].offeringCode!=null && "null"!=data[i].offeringCode){ 
								$("#support-select-a").find("ul").append("<li><a rel='"+data[i].offeringCode+"|"+data[i].productId+"' class='selection_a'>"+proname+"</a></li>")
								$("#support-select-a").show();
								$("#support-select-a").find("ul").css("border","solid 1px #ccc");
								$("#support_arrow").addClass("sbToggleOpen");
							}
							if(cache){
								spareProductCache[problemId].push({
									n: proname,
									pid: data[i].productId,
									ocode: data[i].offeringCode
								});
							}
						}
						if($("#support-select-2").attr("rel") == undefined){
						
						}else{
							getExpressProblemListByCode($("#support-select-2").attr("rel"));
						}
					}
					
					if($("#support-select-2").val().length > 1 && source == "Application"){
						$("#support-select-2").val("");
					}
				},
				error: function(){}
		});
}

function getProductByIDYY(obj,source){
	var problemId= obj.split("|")[0];
	var cache = false;
	if(typeof spareProductCache === 'undefined'){
		spareProductCache = {};
	}
	if(!spareProductCache[problemId]){
		spareProductCache[problemId] = [];
		cache = true;
	}
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + "service/product/reservation/list",			  		  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{ "problemId":problemId,"siteCode":"cn"},
			success: function(data){
				if(data.length > 0){ 
					$("#support-select-2").focus();
					$("#support-select-a").find("ul").html("");
					for(var i = 0; i < data.length; i++){
						var proname = ""
						if(data[i].productTypeName){
							proname = data[i].productTypeName;
						}else{
							proname = data[i].productCode;
						}
						if(""!=data[i].offeringCode && data[i].offeringCode!=null && "null"!=data[i].offeringCode){ 
							$("#support-select-a").find("ul").append("<li><a rel='"+data[i].offeringCode+"|"+data[i].productId+"' class='selection_a'>"+proname+"</a></li>")
							$("#support-select-a").show();
							$("#support-select-a").find("ul").css("border","solid 1px #ccc");
							$("#support_arrow").addClass("sbToggleOpen");
						}
						if(cache){
							spareProductCache[problemId].push({
								n: proname,
								pid: data[i].productId,
								ocode: data[i].offeringCode
							});
						}
					}
					
				}
				if(typeof(firstproduct) != "undefined" && firstproduct == 1){
				firstproduct = 0	
				for(var i = 0; i < $("#support-select-a li").length; i++){
					if($("#support-select-a li").eq(i).find("a").attr("rel").split("|")[0] == result_info.offeringCode){
						var rel_off = $("#support-select-a li").eq(i).find("a").attr("rel");
						$("#support-select-2").val($("#support-select-a li").eq(i).find("a").text());
						$("#support-select-2").attr("rel",rel_off);
						$("#support-select-a").hide();
						$("#support_arrow").removeClass("sbToggleOpen");
						getProblemListByCode1();
					}
				}
			}
			if($("#support-select-2").val().length > 1 && source == "Application"){
				$("#support-select-2").val("")
			}
			},
			error: function(){}
	});
}

/*function getProductByIDx(_data){
	var provinec = $("#support-select-1").val();
	p2.clearItems()
	var cityInfo = new Array();
	cityInfo[0] = "0" ;
	cityInfo[1] = LAG_CON_SELECT_PRODUCT ;
	cityInfo[2] = "0";
	p2.addItem(0,cityInfo)
	p2.selectValue(0);
		$.ajax({
				type:"GET",
				async: false,
				url: baseurl + "service/product/reservation/list",			  		  
				dataType:"jsonp",
				jsonp:"jsonp",
				data:{ "problemId":provinec,"siteCode":"cn"},
				success: function(data){
					if(data.length > 0){
						for(var i = 0; i < data.length; i++){
							var proname = ""
							if(data[i].productTypeNameproductTypeName){
								proname = data[i].productTypeName;// + "(" + data[i].productCode +")"
							}else{
								proname = data[i].productCode;
							}
							cityInfo.length = 0;
							//cityInfo[0] = data[i].productId;
							cityInfo[0] = data[i].productCode;
							cityInfo[1] = proname;
							p2.addItem(i+1,cityInfo);
						}
						if(data.length==1){
							p2.selectValue(0);
							$("#support-select-2 option:eq(1)").attr('selected','selected');
						}
					}
				},
				error: function(){}
		});
}*/



function getReservationPorvience(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + chianprovince,
			dataType:"jsonp",
			data:{"siteCode":"cn","serviceType":"network","isReservation":"1"},
			jsonp:"jsonp",
			success: function(data){
				var yyprotype2 = document.getElementById("yysheng")
				for(var i = 0; i < data.length; i++){
					if(data[i].placeCode!=null && ""!=data[i].placeCode){
						var _pid2 = data[i].placeCode + "|" + data[i].placeId;
						var _pname2 = data[i].placeName; 
						yyprotype2.options[yyprotype2.length] = new Option(_pname2, _pid2) 	
					}
					$("#yysheng").selectbox('detach').selectbox('attach')
				}
				if(typeof(firstprovience) != "undefined" && firstprovience == 1){
					firstprovience = 0
				}
			},
			error: function(){}
	});	
}

function getReservationCities(provineyy){
	provineyy = provineyy.split("|")[1];
	var yycity = document.getElementById("yyuser_city")
	yycity.length = 1;
	var yycounty = document.getElementById("yyuser_county")
	yycounty.length = 1;
	$("#yyuser_county").selectbox('detach').selectbox('attach')
	var cityValue = "";
		$.ajax({
			type:"GET",
				async: false,
				url: baseurl + cityService,
				dataType:"jsonp",
				jsonp:"jsonp",
            	data:{"siteCode":"cn","placeId":provineyy,"serviceType":"network","isReservation":"1"},
				success: function(data){
				for(var i = 0; i < data.length; i++){
					if(data[i].placeCode!=null && ""!=data[i].placeCode){
						var _pid2 = data[i].placeCode + "|" + data[i].placeId;
						var _pname2 = data[i].placeName; 
						yycity.options[yycity.length] = new Option(_pname2, _pid2) 
					}	
				}
				if(data[0].placeCode=="CN-11-001" || data[0].placeCode=="CN-31-001"){
					cityValue = data[0].placeCode + "|" + data[0].placeId;
					$("#yyuser_city").val(cityValue);
				}
				$("#yyuser_city").selectbox('detach').selectbox('attach')
			},
			error: function(){},
			complete: function(){
				getReservationCounty(cityValue)
			}
	});
}

function getReservationCounty(yycityid){
  	yycityid = yycityid.split("|")[1];
	var yycounty = document.getElementById("yyuser_county")
	yycounty.length = 1;
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + cityService,
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn","placeId":yycityid,"serviceType":"network","isReservation":"1"},
		success: function(data){
		for(var i = 0; i < data.length; i++){
			if(data[i].placeCode!=null && ""!=data[i].placeCode){
				var _pid2 = data[i].placeCode + "|" + data[i].placeId;
				var _pname2 = data[i].placeName; 
				yycounty.options[yycounty.length] = new Option(_pname2, _pid2) 
			}
		}
		$("#yyuser_county").selectbox('detach').selectbox('attach');
		address_search();
		},
		error: function(){}
	});
}
/* TJW 2015-05-26
function getLastDate(index){
	var dateArray=[];
	for (var i =1; i<index+1; i++){
		var time= new Date(new Date() - (-1000*60*60*24*i));  
		var year=time.getFullYear();  
		var month=time.getMonth() +1;  
		month = (month.toString().length==1)?"0"+month:month;
		var date=time.getDate(); 
		date = (date.toString().length==1)?"0"+date:date;		
		var day = getDay(time.getDay()) ;
		var nowTime=year + "-" + month + "-" + date + "  " + day ;
		dateArray[i-1]=nowTime;
	}
	return dateArray;
}
*/

function getProblemListByCode(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkProList,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if(data.length>0){
					var str="";
					for (var i =0 ;i<data.length;i++){
						str+="<a href='javascript:void(0);' id='" + data[i].problemId + "'>"
							 + data[i].problemName + "</a>"
					}
					$("#t-question").empty().append(str);
					$("#t-question a").bind("click",function(){
						if(!$(this).hasClass("cur")){
							_params.problemId = $(this).attr("id");
							_params.faultDesc = $(this).text();
							$(this).addClass("cur").siblings().removeClass("cur");
							if($("#t-question a:last").hasClass("cur")){
								_flag_miaoshu = 1;
								$(".pro-miaosu").slideDown();
								setHeight();
							}else{
								if(_flag_miaoshu==1){
									_flag_miaoshu = 0;
									$(".pro-miaosu").slideUp();
									setHeight();
								}
							}
						}
					});
					$("#t-question a").each(function(){
						if($(this).text()==_data.faultDesc){
							$(this).addClass("cur");
						}
					});
				}
			},complete:function(){
				var height3 = $(".service_appoint_ab:eq(2)").outerHeight(true);
				$(".relative").height(height3);
			},
			error: function(){}
	});	
}

function getProblemListByCode1(){
	var _paramsProduct = {};
	_paramsProduct.businessType="YY";
	_paramsProduct.siteCode="cn";
	_paramsProduct.productid=$("#support-select-2").attr("rel").split("|")[1];
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkProList,
			dataType:"jsonp",
			data:_paramsProduct,
			jsonp:"jsonp",
			success: function(data){
				if(data.length>0){
					$("#yyproblem").empty();
					for (var i =0 ;i<data.length;i++){
						$("#yyproblem").append("<li><label class='cbg-btn'><input type='radio' name='service-type' value='"+data[i].problemId+"'> "+data[i].problemName+"</label></li>");
					}	
				}
			},
			complete:function(){
				$("#yyproblem li").click(function(){
					$(this).siblings().find("label").removeClass("cbg-btn-listlx")
					$(this).find("label").addClass("cbg-btn-listlx")
					$("#cbg-service-type-description").hide();
					$($("#yyproblem li")[$("#yyproblem li").length-1]).click(function(){
						$("#cbg-service-type-description").show();
					})
				});
				if(typeof(firstproblem) !="undefined" && firstproblem == 1){
					firstproblem = 0
					var p = $("#yyproblem label")
					var other = 1
					for(var i = 0; i < p.length - 1; i++){
						if(trim(result_info.faultDesc) == trim(p.eq(i).text())){
							other = 0
							p.eq(i).addClass("cbg-btn-listlx")
							break
						}
					}
					if(other == 1){
						p.eq(p.length-1).addClass("cbg-btn-listlx")
						$("#cbg-service-type-description").show()
						$("#cbg-service-type-description textarea").val(result_info.faultDesc)	
					}
				}
			},
			error: function(){}
	});	
}
/* TJW 2015-05-26
//&#33719;&#21462;&#39044;&#32422;&#26102;&#38388;&#27573;
function getTimeRangeByCode(_data){
	$.ajax({
		type:"GET",
		async:false,
		url:baseurl+reservetimerange,
		dataType:"jsonp",
		data:_data,
		jsonp:"jsonp",
		success:function(data){
			if(data.length>0){
				var str="";
				for (var i=0;i<data.length;i++){
					if((i+1)%3==0){
						str = str + "<a href='javascript:void(0);' style='margin-right:0px;' atp='" + data[i].atpCode +
						      "' type='" + data[i].timeRange + "'>" + data[i].timeRange + "<span>&#65288;&#31354;&#38386;&#26102;&#27573;&#65289;</span></a>"; 
					}else{
						str = str + "<a href='javascript:void(0);' atp='" + data[i].atpCode + "' type='" + data[i].timeRange + 
							  "'>" + data[i].timeRange + "<span>&#65288;&#31354;&#38386;&#26102;&#27573;&#65289;</span></a>";
					}
				}
				$("#t-time").empty().append(str);
				$("#t-time a").each(function(){
					if($(this).text()==_data.timeRange){
						$(this).addClass("cur");
					}
				});
				$("#t-time a").bind("click",function(){
					if(!$(this).hasClass("cur")){
						_params.appointTimeCode = $(this).attr("atp");
						_params.timeRange = $(this).attr("type");
						$(this).addClass("cur").siblings().removeClass("cur");
					}
				});
			}	
		},
		error:function(){}
	});
}

function getTimeRangeByCode1(_data){
	$.ajax({
		type:"GET",
		async:false,
		url: baseurl + reservetimerange,
		dataType:"jsonp",
		data:_data,
		jsonp:"jsonp",
		success:function(data){
			if(data.length>0){
				var str="";
				for (var i=0;i<data.length;i++){
					if((i+1)%3==0){
						str = str + "<a href='javascript:void(0);' style='margin-right:0px;' atp='" + data[i].atpCode +
						      "' type='" + data[i].timeRange + "'>" + data[i].timeRange + "<span>&#65288;&#31354;&#38386;&#26102;&#27573;&#65289;</span></a>"; 
					}else{
						str = str + "<a href='javascript:void(0);' atp='" + data[i].atpCode + "' type='" + data[i].timeRange + 
							  "'>" + data[i].timeRange + "<span>&#65288;&#31354;&#38386;&#26102;&#27573;&#65289;</span></a>";
					}
				}
				$("#t-time").empty().append(str);
				$("#t-time a").each(function(){
					var timerangesub = $(this).text().substring(0,$(this).text().indexOf("&#65288;"));	
					if(timerangesub == _data.timeRange){
						$(this).addClass("cur");
						_params.appointTimeCode = $(this).attr("atp");
						_params.timeRange = $(this).attr("type");
					}
				});
				$("#t-time a").bind("click",function(){
					if(!$(this).hasClass("cur")){
						_params.appointTimeCode = $(this).attr("atp");
						_params.timeRange = $(this).attr("type");
						$(this).addClass("cur").siblings().removeClass("cur");
					}
				});
			}	
		},
		error:function(){}
	});
}
*/

//&#28155;&#21152;&#39044;&#32422;
function addReservation(params){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + networkreserveadd,
		dataType:"jsonp",
		data:params,
		jsonp:"jsonp",
		success: function(data){
			var id = data.returnCode;
			if(id==0){
				window.location = failurl+"?type="+data.failureReason;
			}else if(id==1){
				window.location = sucurl+"?id="+data.reservationNo+"&phone="+params.mobile+"&type=add";
			}else if(id==11){
				window.location = failurl+"?type=1";
			}else if(id==2){
				window.location = failurl+"?type=2";
			}else if(id==91){
				alert(nosend);
				$("#user_code").val("");
				$("#yysubmit").css("background-color","#c52525");
				return false;
			}else if(id==92){
				alert(wrongcode);
				$("#user_code").val("");
				$("#yysubmit").css("background-color","#c52525");
				return false;
			}else if(id==93){
				alert(overtimecode);
				$("#user_code").val("");
				$("#yysubmit").css("background-color","#c52525");
				return false;
			}else{
				window.location = failurl+"?type=3";
			}
		},
		error: function(){}
	});	
}

//&#20462;&#25913;&#39044;&#32422;
function updateReservationInfox(_params){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkModify,
			dataType:"jsonp",
			data:_params,
			jsonp:"jsonp",
			success: function(data){
				if("1"==data.returnCode){
					window.location = sucurl+"?id="+_params.reservationNo+"&phone="+_params.mobile+"&type=update";
				}else if("0"==data.returnCode){
					window.location = failurl+"?type="+data.failureReason;
				}else if("11"==data.returnCode){
					window.location = failurl+"?type=1";
				}else if("2"==data.returnCode){
					window.location = failurl+"?type=2";
				}else if("91"==data.returnCode){
					alert(nosend);
					$("#user_code").val("");
					return false;
				}else if("92"==data.returnCode){
					alert(wrongcode);
					$("#user_code").val("");
					return false;
				}else if("93"==data.returnCode){
					alert(overtimecode);
					$("#user_code").val("");
					return false;
				}else{
					window.location = failurl+"?type=3";
				}
			},
			error: function(){}
	});	
}

function getReserAddressList(_data){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + addressListService,
		dataType:"jsonp",
		jsonp:"jsonp",
    	data:_data,
		success: function(data){
			if(data.length > 0){
				if($("#yyzhongxin tbody").find("tr").length > 0){
					$("#yyzhongxin tbody").empty();
				}	
				for(var i = 0; i < data.length; i++){
					if(data[i].phone == null || data[i].phone =="null"){
						var phone = "";
					}else{
						var phone = data[i].phone;
					}
					if(1==data[i].typeCode){
						var xing="*****";
						var cl = "cbg-rank-stars-5"
					}else if (2==data[i].typeCode){
						var xing="****";
						var cl = "cbg-rank-stars-4"
					}else {
						var xing="***";
						var cl = "cbg-rank-stars-3"
					}	
					var add = data[i].address;
					var addressArr =data[i].placeCode.split(",");
					var adr1 = (addressArr[1]=="null" || addressArr[1]==null)?"":addressArr[1];
					var adr2 = (addressArr[2]=="null" || addressArr[2]==null)?"":addressArr[2];
					var adr3 = (addressArr[3]=="null" || addressArr[3]==null)?"":addressArr[3];
					if(adr1==adr2||adr2==adr3){
						add = adr1+adr3+data[i].address;
					} else {
						add = adr1+ adr2+adr3+data[i].address;
					}
					var aclass = i%2==0?"":" class='cbg-alternate' ";
					var ades1 = data[i].networkName ;
					ades1 =  ades1.trim();
					var ades2='';
					if(ades1.indexOf(" ")>0){
						ades2 = ades1.substr(0,ades1.indexOf(" "));
						ades2 += "-"+ades1.substr(ades1.indexOf(" ")+1,ades1.length);
					}else{
						ades2 = ades1;
					}
					
					$("#yyzhongxin").append("<tr "+aclass+"><td><label><input type='radio' name='service-center'"+
						"ncode='"+data[i].networkCode+"' id='"+data[i].networkId+"'>"+data[i].networkName+"</input></label>"+
						"</td><td><span class='cbg-rank-stars "+cl+"'>"+xing+"</span></td><td   onclick=openWindowStart('"+ades2+"','"+add+"')><a class='create_icon'></a>"+add+"</td><td>"+phone+"</td></tr>");
				}
			}	
			$("input[name=service-center]").bind("change",setjxMsgYY);
		},complete:function(){
			var height1 = $(".service_appoint_ab:eq(0)").outerHeight(true) + 20 + "px";
			$(".relative").height(height1);
		},
		error: function(){}
	});
}

function getProductParent(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + netserviceInfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				_params.parentId = data.parentId;
			},complete:function(){
				setProductTypesx(_params);
			},
			error: function(){}
	});	
}

function getProductParent1(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + netserviceInfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				_paramsSetProduct.parentId = data.parentId;
			},complete:function(){
				setProductTypesx1(_paramsSetProduct);
			},
			error: function(){}
	});	
}
/*
function setResDefaultNetwork(id){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + addressInfoService,
			dataType:"jsonp",
			data:{"siteCode":"cn","networkId":id},
			jsonp:"jsonp",
			success: function(data){
				if(data.phone == null || data.phone =="null"){
					 		var phone = "";
					 	}else{
					 		var phone = data.phone;
					 	}
					 	if(1==data.typeCode){
					 		var xing="<span></span><span></span><span></span><span></span><span></span>";
					 	}else if (2==data.typeCode){
					 		var xing="<span></span><span></span><span></span><span></span>";
					 	}else {
					 		var xing="<span></span><span></span><span></span>";
					 	}
					 	var add = data.address;
					 	var addressArr =data.placeCode.split(",");
					 	var adr1 = (addressArr[1]=="null" || addressArr[1]==null)?"":addressArr[1];
					 	var adr2 = (addressArr[2]=="null" || addressArr[2]==null)?"":addressArr[2];
					 	var adr3 = (addressArr[3]=="null" || addressArr[3]==null)?"":addressArr[3];
					 	if(adr1==adr2||adr2==adr3){
					 		add = adr1+adr3+data.address;
					 	} else {
					 		add = adr1+ adr2+adr3+data.address;
					 	}
						var address = 
							"<li><span class='check'><input type='radio' checked='checked' name='radio1' id='"+data.networkId+"'></input></span>" +
                            "<div class='infor'><h3>"+data.networkName+"</h3>"+
                            "<p>"+add+"</p><p>"+phone+"</p>" +
                            "<div class='icon_x'> "+xing+"</div>"+
                            "</div></li>" ;
					$("#netWork").empty().append(address);
			},
			error: function(){}
	});	
}
*/
//&#26597;&#35810;&#24182;&#22635;&#20805;&#39044;&#32422;&#25968;&#25454;
function setDefaultReservationInfo(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+findreservationinfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				_params.reservationNo = data.reservationNo;
				_params.productCode = data.productCode;
				_params.serviceType = data.serviceType;
				_params.userName = data.userName;
				_params.mobile = data.mobile;
				_params.imei = data.imei;
				_params.appointTimeCode = data.appointTimeCode;
				updateTime = data.appointTimeCode;
				_params.reservationDate = data.reservationDate;
				updateDay=data.reservationDate;
				_params.faultDesc = data.faultDesc;
				//_params.problemId = data.problemId;
				$("#t-check").attr("checked",true);
				$("#t-step2 a:[type='"+_params.serviceType+"']").addClass("cur");
				$("#t-userName").val(_params.userName);
				$("#phone").val(_params.mobile).prop("disabled",true);
				$("#t-imei").val(_params.imei);
				_params.networkId =data.networkId;
				preNetWorkId = data.networkId;
			},complete:function(){
				getProductParent(_params);
				setResDefaultNetwork(_params.networkId);
			},
			error: function(){}
	});	
}

function setDefaultReservationInfo1(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + findreservationinfo,	
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if(data.appointfrom==1){
					_params.appointfrom="1";
				}else if(data.appointfrom==2){
					_params.appointfrom="2";
				}
				_params.reservationNo = data.reservationNo;
				_paramsSetProduct.productCode = data.productCode;
				_params.serviceType = data.serviceType;
				_params.userName = data.userName;
				_params.mobile = data.mobile;
				_params.imei = data.imei;
				_params.appointTimeCode = data.appointTimeCode;
				updateTime = data.appointTimeCode;
				_params.reservationDate = data.reservationDate;
				updateDay=data.reservationDate;
				_params.faultDesc = data.faultDesc;
				_paramsProduct.faultDesc = data.faultDesc;
				_params.networkName = data.networkName;
				_params.networkContact = data.networkContact;
				_params.networkCode = data.networkCode;
				_params.address = data.address;
				_params.timeRange = data.timeRange;
				$("#phone").val(_params.mobile);
				$("#t-step2 a:[type='"+_params.serviceType+"']").addClass("cur");
				$("#t-userName").val(_params.userName);
				$("#t-imei").val(_params.imei);
				preNetWorkId = data.networkCode;
			},complete:function(){
				getProductParent1(_paramsSetProduct);
				setResDefaultNetwork(_params);
			},
			error: function(){}
	});	
}

function getReservationInfo(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkInfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				$("#t-pingz").text(data.reservationNo);
				$("#t-contact li p").each(function(i){
          	  	if(0==i){
          	  		$(this).text(data.userName);
          	  	}else if(1==i){
          	  		$(this).text(data.mobile);
          	  	}else if(2==i){
          	  		$(this).text(data.productCode);
          	  	}else if(3==i){
          	  		$(this).text(data.problemName);
          	  	}else if(4==i){
          	  		$(this).text(data.networkName);
          	  	}else if(5==i){
          	  		$(this).text(data.address);
          	  	}else if(6==i){
          	  		$(this).text(data.networkContact);
          	  	}else if(7==i){
          	  		$(this).text(data.reservationDate+" "+data.timeRange);
          	  	}
          	});
			},
			error: function(){}
	});	
}

function sendReservationMessage(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkSms,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if("0"==data.returnCode){
					alert(LAG_CON_SENDSUCC);
				}else {
					alert(LAG_CON_SENDUNSUCC);
				}
			},
			error: function(){}
	});	
}

function queryReservationInfo(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkInfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if("0"==data.returnCode){
					window.location=succurl+"?id="+data.reservationNo+"&phone="+data.mobile;
				}else {
					alert(errorInfo);
				}
			},
			error: function(){}
	});	
}

function updateReservation(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkUpdate,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if("0"==data.returnCode){
					if("2"==_data.reservationStatus){
						alert(LAG_CON_CANCELSUCC);
						window.location.reload();
					}
				}
			},
			error: function(){}
	});	
}

function queryReservationInfoDtPre(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkInfo,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){		
				$("#t-contact tr td:nth-child(2)").each(function(i){
          	  	if(0==i){
          	  		$(this).text(data.reservationNo);
          	  	}else if(1==i){
          	  		var status = "" ;
          	  		switch (Number(data.reservationStatus)){
          	  			case 1 :
          	  				status = LAG_CON_APPLY_READY;
          	  				break;
          	  			case 2 :
          	  				status = LAG_CON_SHOP_CONFIRM;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  			case 3 :
          	  				status = LAG_CON_FIXED_DONE;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  			case 4 :
          	  				status = LAG_CON_POSTING;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  			case 5 :
          	  				status = LAG_CON_RECIEVED;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  			case 6 :
          	  				status = LAG_CON_APPLY_BACK;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  			case 7 :
          	  				status = LAG_CON_TIME_OUT;
          	  				$("#t-button-div").hide();
          	  				$("#query_close").show();
          	  				break;
          	  		}
          			$(this).text(status);
          	  	}else if(2==i){
          	  		$(this).text((data.serviceType=="maintenance")?LAG_CON_REPAIR:LAG_CON_CHECKMP);
          	  	}else if(3==i){
          	  		$(this).text(data.userName);
          	  	}else if(4==i){
          	  		$(this).text(data.mobile);
          	  	}else if(5==i){
          	  		$(this).text(data.productCode);
          	  	}else if(6==i){
          	  		$(this).text(data.faultDesc);
          	  	}else if(7==i){
          	  		$(this).text(data.networkName);
          	  		//networkCode
          	  	}else if(8==i){
          	  		$(this).text(data.reservationDate+" "+data.timeRange);
          	  	}else if(9==i){
          	  		$(this).text(data.address);
          	  	}else if(10==i){
          	  		$(this).text(data.networkContact);
          	  	}
          	  	});	
          	},
			error: function(){}
	});	
}

function setRangeByDay(_datax){
	$("#tr_date td:eq("+_index+")").text(dayArray[_index-1]);
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkList,
			dataType:"jsonp",
			data:_datax,
			jsonp:"jsonp",
			success: function(data){
				for (var i = 0;i<data.length;i++){
					if(data[i].reservationList.length>0){
						var arr = data[i].reservationList;
						var str = "";
						for (var j=0;j<arr.length;j++){
							if(j==arr.length-1){
								str+=arr[j].productCode+arr[j].problemName;
							}else {
								str+=arr[j].productCode+arr[j].problemName+"<br>";
							}
							
						}
						$("table tr[type='"+data[i].timeRange+"'] td:eq("+_index+")").html(str);	
					}
						
				}
			},
			complete:function(){
				_index++;
				if(_index<5){
					_data.reservationDate = dayArray[_index-1];
					setRangeByDay(_datax);
				}
			},
			error: function(){}
	});	
}

function getAllReservationAddressList(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + addressListService,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if(data.length < 1){
					$("#address_list").html("<div class='search-result-others clearfix'>"+LAG_CON_NO_RESULTS+"</div>");
				}else{	
					page_generation(data[0].totalRows,_data.curPage,_data.pageSize);
					var str = "";
					var networkId=0;
					for(var i = 0; i < data.length; i++){
						networkId=data[i].networkId;
						networkName=data[i].networkName;
						str = str + "<li>" + 
						"<a href='" + _url +"?id="+networkId+"' target='_blank'>"+networkName+"</a>" + 
						"</li>";
					}
				}
				$("#address_list").empty().append(str);
			},
			error: function(){}
	});	
}

//&#25764;&#38144;&#39044;&#32422;
function updateReservation(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkUpdate,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if("0"==data.returnCode){
					alert(LAG_CON_DOSUCESS);
					window.location.reload();
				}else{
					alert(LAG_CON_DOUNSUCESS);
				}
			},
			error: function(){}
	});	
}

function queryReservationInfoDt(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + nethotlineDetail,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){		
				$("#t-contact tr td:nth-child(2)").each(function(i){
          	  	if(0==i){
          	  		$(this).text(data.reservationNo);
          	  	}else if(1==i){
          	  		var status = "" ;
          	  		switch (Number(data.reservationStatus)){
          	  			case 1 :
          	  				status = LAG_CON_ALREADYRES;
          	  				break;
          	  			case 2 :
          	  				status = LAG_CON_ALREADYCANCEL;
          	  				$("#t-button-div").hide();
          	  				$(".submit_b").show();
          	  				break;
          	  			case 3 :
          	  				status = LAG_CON_ALREADYHERE;
          	  				$("#t-button-div").hide();
          	  				$(".submit_b").show();
          	  				break;
          	  			case 4 :
          	  				status = LAG_CON_ALREADYOK;
          	  				$("#t-button-div").hide();
          	  				$(".submit_b").show();
          	  				break;
          	  		}
          			$(this).text(status);
          	  	}else if(2==i){
          	  		$(this).text((data.serviceType=="maintenance")?LAG_CON_REPAIR:LAG_CON_CHECKMP);
          	  	}else if(3==i){
          	  		$(this).text(data.userName);
          	  	}else if(4==i){
          	  		$(this).text(data.mobile);
          	  	}else if(5==i){
          	  		$(this).text(data.productCode);
          	  	}else if(6==i){
          	  		$(this).text(data.problemName);
          	  	}else if(7==i){
          	  		$(this).text(data.networkName);
          	  	}else if(8==i){
          	  		$(this).text(data.reservationDate+" "+data.timeRange);
          	  	}else if(9==i){
          	  		$(this).text(data.address);
          	  	}else if(10==i){
          	  		$(this).text(data.networkContact);
          	  	}
          	  	});	
          	},
			error: function(){}
	});	
}

function queryReservationInfo(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + network_info,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if("0"==data.returnCode){
					window.location=succurl+"?id="+data.reservationNo+"&phone="+data.mobile;
				}else {
					alert(errorInfo);
				}
			},
			error: function(){alert(LAG_CON_SEARCHERROR)}
	});	
}

function searchLevel(userAccount){
	$.ajax({
		type:"GET",
		async:false,
		url:baseurl + networkRights,
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":SITE_CODE,"userAccount":userAccount},
		success:function(data){
			var str="";
			if(data.length>0){
				str+="<table width='85%' border='1' align='center' cellpadding='0' cellspacing='0' bordercolor='#d2d2d2'>"+
				 		"<tr>"+
				 		"<td width='20%' height='30' align='center'  class='fruit_td_bj'><p>user ID </p></td>"+
				 		"<td width='20%' height='30' align='center' class='fruit_td_bj'>&#20250;&#21592;&#31561;&#32423;</td>"+
				 		"</tr>";
				 		
				for (var i =0;i<data.length;i++){
					var _lv = "";
					if("100000" ==data[i].rightsID){
						_lv = "&#20250;&#21592;&#26222;&#36890;&#31561;&#32423;";
					}else if("100100" ==data[i].rightsID){
						_lv = "&#20250;&#21592;&#38134;&#21345;&#31561;&#32423;";
					}else if("100200" ==data[i].rightsID){
						_lv = "&#20250;&#21592;&#37329;&#21345;&#31561;&#32423;";
					}
					
					str+= "<tr>"+
				 			"<td height='30' align='center'>"+ data[i].memberUserID +"</td>"+
				 			"<td height='30' align='center'>"+ _lv +"</td>"+
				 		  "</tr>";
				}
				str +="</table>";
			}else{
				str+="<span><p class='p_ts'>&#19981;&#23384;&#22312;&#30340;&#20250;&#21592;&#21495;</p></span>";
			}
			$("#search_result").empty().append(str);
		},
		error:function(){} 
	});
}


function getRecycleAddressList(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + recyclelist,
			dataType:"jsonp",
			jsonp:"jsonp",
            data:_data,
			success: function(data){	
				$("#wait_img").hide();		
				if(data.length > 0){
					page_generation3(data[0].totalRows,_data.curPage,_data.pageSize);
					var addresslist = "<script> var listArr = new Array();";
					var address = "";
					for(var i = 0; i < data.length; i++){
					 	if(data[i].phone == null || data[i].phone =="null"){
					 		var phone = "";
					 	}else{
					 		var phone = data[i].phone;
					 	}
					 	if(1==data[i].typeCode){
					 		var xing="&#9733;&#9733;&#9733;&#9733;&#9733;";
					 	}else if (2==data[i].typeCode){
					 		var xing="&#9733;&#9733;&#9733;&#9733;";
					 	}else {
					 		var xing="&#9733;&#9733;&#9733;";
					 	}
					 	var add = data[i].address;
					 	var addressArr =data[i].placeCode.split(",");
					 	var adr1 = (addressArr[1]=="null" || addressArr[1]==null)?"":addressArr[1];
					 	var adr2 = (addressArr[2]=="null" || addressArr[2]==null)?"":addressArr[2];
					 	var adr3 = (addressArr[3]=="null" || addressArr[3]==null)?"":addressArr[3];
					 	
					 	if(adr1==adr2||adr2==adr3){
					 		add = adr1+adr3+data[i].address;
					 	} else {
					 		add = adr1+ adr2+adr3+data[i].address;
					 	}
					 	var fullAddress = add;
					 	if(add.length>43){
					 		add=add.substring(0,42)+"...";
					 	}
					 	var infoAddress = fullAddress;
					 	if(infoAddress.length>35){
					 		infoAddress = infoAddress.substring(0,35)+"&nbsp;&nbsp;&nbsp;<br>"+infoAddress.substring(35,infoAddress.length);
					 	}
					 	var netname = data[i].networkName;
					 	if(netname.length>24){
					 		netname=netname.substring(0,23)+"...";
					 	}
					 	var workStr = "";
					 	if(data[i].workingHours == "null" || data[i].workingHours == null){
					 		data[i].workingHours = "";
					 	}else{
					 		workStr = getLessStr(trim(data[i].workingHours),60);
					 	}
					 	var tcategory = data[i].category;
					 	if(""!=tcategory && tcategory != null && "null" != tcategory){
					 		if(tcategory.length>14){
					 			tcategory=tcategory.substring(0,12)+"...";
					 		}
					 	}else {
					 		tcategory = "";
					 	}
					 	var index = (data[i].curPage-1)*3+i+1;
						var img = flgimg1+(index)+".png";																				
						addresslist += "listArr["+i+"]=new Array('" + data[i].latitude+"','" +data[i].longitude+"','" + data[i].placeCode +"','"+ phone +"','"+data[i].networkName +"','"+ img +"','"+ data[i].email+"','"+data[i].url+ "','"+ infoAddress + "','"+index+"');";
						address = address + "<a href='javascript:void(0)' class='aa' onclick='showMessage(this)' id='" + i + "'>" +
						"<ul class='ul-1'>" +
						"<li class='li-1 color-black font-14 clearfix'><span class='w-title'><span class='w-1'>"+ (index)+".</span><span class='w-2' title='"+data[i].networkName+"'>"+netname +"</span></span><span class='xing'></span></li>" +
						"<li class='li-2 clearfix'><span class='span-1 mypng'><img src="+adimg1+"  width='15' height='15' /></span><span class='span-2' id='google_address_2' title='"+fullAddress+"'>"+ add +"</span></li>" +
						"<li class='li-2 clearfix'><span class='span-1 mypng'><img src="+phimg1+"  width='15' height='15' /></span><span class='span-2'>&nbsp;"+ phone +"</span></li>" +
						"<li class='li-3 clearfix'><span class='span-1 clearfix' title='" + data[i].workingHours + "'><img src=" + timeimg1+" width='15' height='15' /><span class='span-deta'>" + workStr + "</span></span><span class='span-2'" +
						" onClick=javascript:TGDialogSpop1(pop1,'" + data[i].networkId + "','" + data[i].smsType + "')><img src=" + phoneimg1 + ">&#21457;&#36865;&#21040;&#25163;&#26426;</span></li><li class='li-4 clearfix'><img src=" + catimg1 + " width='15' height='15'>" + tcategory + "</li>" +
						"</ul></a>";
					}
					$(".div").empty().append(address);
					addresslist = addresslist + "</" + "script>";
					if(tcategory.length == 0){
						$(".slides_container .div .li-4").hide();
					}
					$("#for_maplist").empty().append(addresslist);
					setLngLat();
				}else{
					$(".div").empty().append("<p style='padding:60px 0 0 20px; font-size:18px;'>"+$("#no_resluts").val()+"</p>");	
				}	
		  },
		  error: function(){
		  
		  }
	});
}

function updateExpressInfox(jxparams){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + expressupdate,
			dataType:"jsonp",
			data:jxparams,
			jsonp:"jsonp",
			success: function(data){
				if("1"==data.returnCode){
					window.location = sucurl+"?id="+jxparams.reservationNo+"&phone="+jxparams.mobile+"&type=update";
				}else if("0"==data.returnCode){
					window.location = failurl+"?type="+data.failureReason;
				}else if("11"==data.returnCode){
					window.location = failurl+"?type=1";
				}else if("2"==data.returnCode){
					window.location = failurl+"?type=2";
			    }else if(data.returnCode == 91){
					alert(nosend);
					$("#user_code").val("");	
					$("#jxtijiao").css("background-color","#c52525");
				    return false;
				}else if(data.returnCode == 92){
					alert(wrongcode);	
					$("#user_code").val("");
					$("#jxtijiao").css("background-color","#c52525");
					return false;
				}else if(data.returnCode == 93){
					alert(overtimecode);
					$("#user_code").val("");	
					$("#jxtijiao").css("background-color","#c52525");
					return false;
				}else {
					window.location = failurl+"?type=3";
				}
			},
			error: function(){}
	});	
}

function addExpress(jxparams){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl +networkexpress,
		dataType:"jsonp",
		data:jxparams,
		jsonp:"jsonp",
		success: function(data){
			var id = data.returnCode;
			if(id==0){
				window.location = failurl+"?type="+data.failureReason;
			}else if(id==1){
				window.location = sucurl+"?id="+data.reservationNo+"&phone="+jxparams.mobile+"&type=add";
			}else if(id==11){
				window.location = failurl+"?type=1";
			}else if(id == 91){
				alert(nosend);
				$("#user_code").val("");	
				$("#jxtijiao").css("background-color","#c52525");
				return false;
			}else if(id == 92){
				alert(wrongcode);	
				$("#user_code").val("");
				$("#jxtijiao").css("background-color","#c52525");
				return false;
			}else if(id == 93){
				alert(overtimecode);
				$("#user_code").val("");	
				$("#jxtijiao").css("background-color","#c52525");
				return false;
			}else{
				window.location = failurl+"?type=3";
			}
		},
		error: function(){}
	});	
}

function getJxProductType(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkcategory ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':SITE_CODE,'businessType':'JX'},
			success: function(data){
				if(data.length > 0){									
					var protype = document.getElementById("support-select-1") 
					for(var i = 0; i < data.length; i++){
						if(data[i].productLineId){
							var _pid = data[i].superProblemId+"|"+data[i].productLineId;
							var _pname = data[i].superProblemName; 
							protype.options[protype.length] = new Option(_pname, _pid) 
							protypes.push(data[i].superProblemId)
						}		
					}
					$("#support-select-1").selectbox('detach').selectbox('attach')
				}
			},
			error: function(){}
	});
}

function getExpressPorvience(){
	var protype3 = document.getElementById("user_province")
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + expressprovince,
		dataType:"jsonp",
		data:{"siteCode":"cn","serviceType":"network"},
		jsonp:"jsonp",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				if(data[i].placeCode!=null && data[i].placeCode != "" && data[i].placeName != taiwan)	protype3.options[protype3.length] = new Option(data[i].placeName, data[i].placeCode + "|" + data[i].placeId)
			}
			$(protype3).selectbox('detach').selectbox('attach')
		},
		error: function(){}
	});	
}

function getExpressCities(provinec){
	provinec = provinec.split("|")[1];
	var protype4 = document.getElementById("user_city")
	protype4.length = 1
	var protype5 = document.getElementById("user_county")
	protype5.length = 1
	$(protype4).selectbox('detach').selectbox('attach')
	$(protype5).selectbox('detach').selectbox('attach')
	var cityValue = "";
			$.ajax({
				type:"GET",
					async: false,
					url: baseurl + expresscity,
					dataType:"jsonp",
					jsonp:"jsonp",
            		data:{"siteCode":"cn","placeId":provinec,"serviceType":"network"},
					success: function(data){
						for(var i = 0; i < data.length; i++){
							if(data[i].placeCode!=null && ""!=data[i].placeCode){
								var _pid2 = data[i].placeCode + "|" + data[i].placeId;
								var _pname2 = data[i].placeName; 
								protype4.options[protype4.length] = new Option(_pname2, _pid2) 
							}
						}
						
						if(data[0].placeCode == "CN-11-001" || data[0].placeCode == "CN-31-001"){
							cityValue = data[0].placeCode+"|"+data[0].placeId;
							$("#user_city").val(cityValue);								
						}
						
						if(typeof(firstcity) !="undefined" && firstcity == 1){	
							firstcity = 0
							for(var i = 1; i < protype4.length; i++){
								if(protype4[i].value.split("|")[0] == result_info.cityCode){
									protype4[i].selected = true
									$(protype4).change()
									break;
								}
							}
						}
						$(protype4).selectbox('detach').selectbox('attach');						
					},
					error: function(){},
					complete: function(){
						getExpressCounty(cityValue);
					}
			});
}

function getExpressCounty(cityid){
	getQueryExpressCenter();
	cityid = cityid.split("|")[1];
	var protype4 = document.getElementById("user_county");
	protype4.length=1;
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + expresscounty,
		dataType:"jsonp",
		jsonp:"jsonp",
    	data:{"siteCode":"cn","placeId":cityid,"serviceType":"network"},
		success: function(data){
			for(var i = 0; i < data.length; i++){
				if(data[i].placeCode!=null && ""!=data[i].placeCode){
					var _pid2 = data[i].placeCode + "|" + data[i].placeId;
					var _pname2 = data[i].placeName; 
					protype4.options[protype4.length] = new Option(_pname2, _pid2) 
					if(typeof(firstcounty) !="undefined" && firstcounty == 1){	
						if(trim(result_info.district) == trim(data[i].placeCode))	{
							firstcounty = 0
							protype4[protype4.length-1].selected = true
						}
					}	
				}
			}
			$(protype4).selectbox('detach').selectbox('attach')	
		},
		error: function(){}
	});
}

function getQueryExpressCenter(){
	var _data = {"siteCode":"cn"};
	_data.provinceCode = $("#user_province").val().split("|")[0];
	_data.cityCode = $("#user_city").val().split("|")[0];
	_data.productLineId = $("#support-select-1").val().split("|")[1];	
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + getexpresscenter,
		dataType:"jsonp",
		data:_data,
		jsonp:"jsonp",
		success: function(data){
			jxparams.networkCode = data.networkCode;
			receiveAddress = "";
			$(".cbg-2cols dd .pro-input").val("")
			$("#noNetWork").hide();
			if("0"==data.returnCode){
				jxparams.networkCode = data.networkCode
				receiveAddress = data.address;
				$(".cbg-2cols dd .pro-input").eq(0).val(data.networkName);
				$(".cbg-2cols dd .pro-input").eq(1).val(data.address);
				$(".cbg-2cols dd .pro-input").eq(2).val(data.recipientsName);
				$(".cbg-2cols dd .pro-input").eq(3).val(data.networkContact);
			}else if("2"==data.returnCode){
				alert(wufugai);
			}else if("22"==data.returnCode){
				alert(moreone);
			}
		},
		error: function(){}
	});	
}

function getExpressProblemListByCode(id){
	id= id.split("|")[1]
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkProList,
			dataType:"jsonp",
			data:{"siteCode":SITE_CODE,"businessType":"JX","productId":id},
			jsonp:"jsonp",
			success: function(data){
				if(data.length>0){
					$("#promblemxxx").empty();
					$("#cbg-service-type-description").find("textArea").val("");
					$("#cbg-service-type-description").hide();
					for(var i = 0; i < data.length; i++){
						$("#promblemxxx").append("<li><label class='cbg-btn'><input type='radio' name='service-type' value='"+data[i].problemId+"'> "+data[i].problemName+"</label></li>");
					}
				}
				
				
			},
			complete:function(){
				$("#promblemxxx li").click(function(){
					$(this).siblings().find("label").removeClass("cur_problem")
					$(this).find("label").addClass("cur_problem")
					$("#cbg-service-type-description").hide();
					$("#promblemxxx li").last().click(function(){
						$("#cbg-service-type-description").show();
					})
				});
				if(typeof(firstproduct)!='undefined' && firstproduct == 1){
					var $pb = $("#promblemxxx label")
					var pbl = $pb.length  - 1
					var _last = 1
					for(var i = 0 ; i < pbl; i++){
						if($pb.eq(i).text() == result_info.faultDesc){
							$pb.eq(i).addClass("cur_problem")
							_last = 0
							break
						}
					}
					if(_last == 1){
						$("#promblemxxx label").last().addClass("cur_problem")
						$("#cbg-service-type-description").show().find("textarea").val(result_info.faultDesc);
					}
					firstproduct = 0
				}
			},
			error: function(){}
	});	
}

function nextcheckExpressStatus(){	
	var o = document.getElementById("tishi");
	var imeidata = trim($("#imeihao").val());
	var isNext = true;
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + "service/warranty/info/findAllWarrantyInfo",				  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":"cn","imei":imeidata},
			success: function(data){
				if (data.length > 0){
					var _height = $(".service_appoint_ab:eq(1)").outerHeight(true);
					$(".service_appoint_ab").eq(1).fadeIn("fast").siblings().fadeOut("fast");
					$(".relative_send").height(_height+30);
				}else{
					nextcheckExpressStatusBySn();
				}
			},
			error: function(){}
	});
}
function nextcheckExpressStatusBySn(){	
	var o = document.getElementById("tishi");
	var imeidata = trim($("#imeihao").val());
	var isNext = true;
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + "service/warranty/info/findAllWarrantyInfo",				  
			dataType:"jsonp",
			jsonp:"jsonp", 
			data:{"siteCode":"cn","sn":imeidata},
			success: function(data){
				if (data.length > 0){
					var _height = $(".service_appoint_ab:eq(1)").outerHeight(true);
					$(".service_appoint_ab").eq(1).fadeIn("fast").siblings().fadeOut("fast");
					$(".relative_send").height(_height+30);
				}else{
					isNext = false;
					o.innerHTML = msg.IMEINONE;
				}
			},
			error: function(){}
	});
}

function setExpressDefaultValue(_data){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + networkexpressInfo,
		dataType:"jsonp",
		data:_data,
		jsonp:"jsonp",
		success: function(data){
		if(data.appointfrom==1){
			_params.appointfrom="1";
		}else if(data.appointfrom==2){
			_params.appointfrom="2";
		}
			_paramsSetProduct = data
			_params.reservationNo = data.reservationNo;
			_setProblem.productCode = data.productCode;
			_setProblem.faultDesc = data.faultDesc;
			_params.faultDesc = data.faultDesc;
			_params.provinceCode = data.provinceCode;
			_params.cityCode = data.cityCode;
			_params.district = data.district;
			_params.serviceType = data.serviceType;
			_params.offeringCode = data.offeringCode;
			_params.networkCode = data.networkCode;
			_params.pickupByDoor = data.pickupByDoor;
			_params.logisticType = data.logisticType;
			_params.productLineId = data.productLineId;
			ProductSource = data.productSource;
			ProductTypeName = data.productTypeName;
			$("#imeihao").val(data.imei);
			$("#imeihao").css("color","#333");
			$("#x-userName").val(data.userName);
			$("#phone").val(data.mobile);
			if(_params.pickupByDoor){
				$("#phone").attr("disabled",true);
				$("#support_keywords2").attr("disabled",true);
				$("#x-userName").attr("disabled",true);
				$(".span-1 .Combo .text input").attr("disabled",true);
			}
			$("#support_keywords2").val(data.fromAddress);
			if(_params.serviceType>0){
				//p3.selectValue(_params.serviceType);
				//p3.delItem(0);
				if(_params.serviceType==1){
					$(".warranty-type")[0].checked=true;
				}else if(_params.serviceType==2){
					$(".warranty-type")[1].checked=true;
				}else if(_params.serviceType==3){
					$(".warranty-type")[2].checked=true;
				}
			}
			$(".send2-pro-infor li .pro-input").each(function(i){
          	  	if(0==i){
          	  		$(this).text(data.networkName);
          	  	}else if(1==i){
          	  		$(this).text(data.address);
          	  	}else if(2==i){
          	  		$(this).text(data.recipientsName);
          	  	}else if(3==i){
          	  		$(this).text(data.networkContact);
          	  	}
			});
		},complete:function(){
			getProductParentJx(_paramsSetProduct);
			setExpressProblemListByCode(_setProblem)
			setDefaultServiceType();
			setDefaultRecycleProvince(_params.provinceCode,_params.cityCode,_params.district);
		},
		error: function(){}
	});	
}


function setExpressProblemListByCode(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + networkProList,
			dataType:"jsonp",
			data:_data,
			jsonp:"jsonp",
			success: function(data){
				if(data.length>0){
					var str="";
					for (var i =0 ;i<data.length;i++){
						str+="<a href='javascript:void(0);' id='" + data[i].problemId + "' >"
							 + data[i].problemName + "</a>";						
					}
					$("#exp-step2").empty().append(str);
					$("#exp-step2 a").bind("click",function(){
						if(!$(this).hasClass("cur")){
							_params.problemId = $(this).attr("id");
							_params.faultDesc = $(this).text();
							$(this).addClass("cur").siblings().removeClass("cur");
							if($("#exp-step2 a:last").hasClass("cur")){
								flag_miaosu = 1;
								$(".pro-miaosu").slideDown();
								setHeight();
							}else{
								if(flag_miaosu==1){
									flag_miaosu = 0;
									$(".pro-miaosu").slideUp();
									setHeight();
								}
							}
						}
					});
					$("#exp-step2 a").each(function(){
						if($(this).text()==_data.faultDesc){
							_params.problemId = $(this).attr("id");
							$(this).addClass("cur");
						}
					});
					
					if(!$("#exp-step2 a").hasClass("cur")){
						flag_miaosu = 1;
						$("#exp-step2 a:last").addClass("cur");
						$(".pro-miaosu").slideDown();
						$("#describe").val(_data.faultDesc);
						setHeight();
					}
					
				}
			},complete:function(){},
			error: function(){}
	});	
}

function setDefaultServiceType(){
	var o = document.getElementById("jxserver");
	if("0" == _params.logisticType){
		o.innerHTML = jxtype.both;
		$("#jxserver").attr("value","0")
	}else if("1" == _params.logisticType){
		o.innerHTML = jxtype.none;
		$("#jxserver").attr("value","1")
	}else if("2" == _params.logisticType){
		o.innerHTML = jxtype.single;
		$("#jxserver").attr("value","2")
	}else{
		o.innerHTML = "";
		$("#jxserver").attr("value","")
	}
}

function setResDefaultNetwork(data){
	var address = 
	"<li><span class='check'><input type='radio' checked='checked' id='radio1' name='radio1' ncode='"+data.networkCode+"'></span>" +
	"<div class='infor'><h3>"+data.networkName+"</h3>"+
	"<p>"+data.address+"</p><p>"+data.networkContact+"</p>" +
	"</div></li>" ;
	$("#netWork").empty().append(address);
	$("input[name=radio1]").attr("checked",true);
}
//support yqx
function setFindWork(_data){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + network_msgs,
			dataType:"jsonp",
			data:{siteCode:"cn",superTypeCode:"23",subTypeCode:"90"},
			jsonp:"jsonp",
			success: function(data){
				if(data.length > 0){
					$(".unlock-Agreement").html(data[0].content);
					$(".unlock-Agreement").append($(".juzhong"));
				}
			},
			error: function(){}
	});	
}
//yqx network
function setFactWork(){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + network_msgs,
			dataType:"jsonp",
			data:{siteCode:"cn",superTypeCode:"45",subTypeCode:"89"},
			jsonp:"jsonp",
			success: function(data){
				if(data.length > 0){
					$("#containers-text").html(data[0].content);
					
				}
			},
			error: function(){}
	});	
}
function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        window.event.cancelBubble = true;
    }
}

function HeightProKey(txt,key){
	var str = txt
	var _keys = key
	var k_index = str.toLowerCase().indexOf(_keys.toLowerCase())
	if( k_index > -1){
		if(k_index == 0){
			var str1 = '<span style="color:red">' + str.substring(0, _keys.length) + '</span>'
			var str2 = str.substring(_keys.length, str.length)
			var str3 = ''
		}else{
			var str1 = str.substring(0, k_index)
			var str2 = '<span style="color:red">' + str.substring(k_index, _keys.length + k_index) + '</span>'
			var str3 = str.substring(_keys.length + k_index, txt.length)
		}
		str  = str1 + str2 + str3;
	}	
	return str
}
function HeightProKeyapk(txt,key){
	var str = txt
	var _keys = key
	var k_index = str.toLowerCase().indexOf(_keys.toLowerCase());
	if( k_index > -1){
		if(k_index == 0){
			var str1 = '<span style="color:red">' + str.substring(0, _keys.length) + '</span>'
			var str2 = str.substring(_keys.length, str.length)
			var str3 = ''
		}else{
			var str1 = str.substring(0, k_index)
			var str2 = '<span style="color:red">' + str.substring(k_index, _keys.length + k_index) + '</span>'
			var str3 = str.substring(_keys.length + k_index, txt.length)
		}
		str  = str1 + str2 + str3;
	}	
	return str
}
// get products by keywords
function getRelProapk(r_text){
	var relproparams = {}
	relproparams.siteCode = SITE_CODE
	relproparams.pageSize = 6
	relproparams.curPage = 1
	relproparams.safetyType="APKNOTICE"
	relproparams.keywords = r_text	
	$(".apkrel_prodocuts").empty()
  	$.ajax({
  		type: 'GET',
  		async:false,
  		url:baseurl + apkrelproservice,
  		contentType: "application/x-www-form-urlencoded; charset=utf-8",
  		 data:relproparams,
  		dataType: 'jsonp', 
  		jsonp: 'jsonp', 
        success: function(data) {   	
        	if(data.length > 0){
        		$(".apkrel_prodocuts").empty()
        		for(var i = 0; i < data.length; i++){
        			if(data[i].safetyName){
						var txt = data[i].safetyName 
					}else{				  
						var txt = data[i].keywords
					}	
        			$(".apkrel_prodocuts").show().append("<a onMouseDown=apkisearchByPcode("+i+") keywords="+data[i].keywords+">"+ HeightProKeyapk(txt, relproparams.keywords)+"</a>") 		
        			$(".apkrel_prodocuts").append("<span id='searchtxt_"+i+"' style='display:none'>"+txt+"</span>");
        		}	
        	}else{
        		$(".apkrel_prodocuts").empty().hide()
        	}	
        },
  	    error: function(msg){}
	});	
}
function getRelPro(r_text){
	var relproparams = {}
	relproparams.productCode = r_text
	relproparams.siteCode = SITE_CODE
	relproparams.pageSize = 6
	relproparams.curPage = 1
	$(".rel_prodocuts").empty()
  	$.ajax({
  		type: 'GET',
  		async:false,
  		url:baseurl + relproservice,
  		contentType: "application/x-www-form-urlencoded; charset=utf-8",
  		data:relproparams,
  		dataType: 'jsonp', 
  		jsonp: 'jsonp', 
        success: function(data) {   	
        	if(data.length > 0){
        		$(".rel_prodocuts").empty()
        		for(var i = 0; i < data.length; i++){
        			if(data[i].productTypeName){
						var txt = data[i].productTypeName
					}else{
						var txt = data[i].productCode
					}
        			$(".rel_prodocuts").show().append("<a onclick='isearchByPcode(this)' productCode='" +data[i].productCode+"' parentId ='" + data[i].parentId+"'>"+ HeightProKey(txt,relproparams.productCode)+"</a>") 
        		}	
        	}else{
        		$(".rel_prodocuts").empty().hide()
        	}	
        },
  	    error: function(msg){}
	});	
}


function buy(){
	$("#fenxiang").hide();
	$("#xiang").removeClass("inedrua");
	$("#tow_lujin").show();
	$("#buy_now").addClass("inedru");
}

function hidee(){
	$("#fenxiang").hide();
	$("#tow_lujin").hide();
	$("#buy_now").removeClass("inedru");
}

function showaa(){
	$("#xiang").addClass("inedrua");
	$("#tow_lujin").hide();
	$("#buy_now").removeClass("inedru");
	$("#fenxiang").show();	
}

function hideaa(){
	$("#xiang").removeClass("inedrua");
	$("#tow_lujin").hide();
	$("#fenxiang").hide();	
}

function checkExpressStatus(imei){
	if(""!=imei){
		$.ajax({
			type:"GET",
			async: false,
			url: baseurl + carryService,				  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{"siteCode":"cn","countryCod":"CN","imei":imei}, 
			success: function(data){
				if (data.length > 0){
					$('#next_setup').removeClass().addClass('cbg-btn')
					if(data[0].warrantyJudge == 2){	
						pstatue =2
						$("#exp-free").hide()	
					}else if(data[0].warrantyJudge == 3){
						pstatue =3
						$("#exp-free").hide()
					}else if(data[0].warrantyModels == -1){
						pstatue = -1
						$("#exp-free").hide()
					}else{
						pstatue = 1
						$("#exp-free").show()
					}
				}else{
					checkExpressStatusBySn(imei);
				}
			},
			error: function(){}
		});
	}
}
function checkExpressStatusBySn(imei){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + carryService,				  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:{"siteCode":"cn","sn":imei,"countryCod":"CN"},
		success: function(data){
			if (data.length > 0){
				$('#next_setup').removeClass().addClass('cbg-btn')
				if(data[0].warrantyJudge == 2){	
					apstatue =2
					$("#exp-free").hide()	
				}else if(data[0].warrantyJudge == 3){
					pstatue =3
					$("#exp-free").hide()
				}else if(data[0].warrantyModels == -1){
					pstatue = -1
					$("#exp-free").hide()
				}else{
					pstatue = 1
					$("#exp-free").show()
				}
			}else{
				pstatue = 0
				$("#exp-free").hide()
			}
		},
		error: function(){}
	});
}

function checkExtType(){
	var _data={};
	var myprovice = $("#user_province option:selected").text().trim();
	var mycity = $("#user_city option:selected").text().trim();
	var mycounty = $("#user_county option:selected").text().trim();
	if(""!=_params.reservationNo && null!=_params.reservationNo){
		_data.address = $("#address").val()+$("#user_address").val().trim();
	}else{
		_data.address = myprovice+mycity+mycounty+$("#user_address").val().trim();
	}
	_data.fromAddress = receiveAddress;
	$.ajax({
		type:"GET",
		async: false,
		url: baseurl + checkisServiceArea,
		dataType:"jsonp",
		data:_data,
		jsonp:"jsonp",
		success: function(data){
			$("#w-load").hide();
			clearTimeout(_t);
			
			if("2" == data.queryResult){
				if($("#jxserver").val() == 1){
					_params.pickupByDoor = "1";
					$("#jxtijiao").css({"background":"#999","border":"none"});
					//$("#jxtijiao").unbind("click")
					addExpress();
				}else{			
					TGDialogS("pop5");
				}
			}else{ 
				_params.pickupByDoor = "0";
				fengzhuang();
			}
		},
		error: function(){}
	});	
}


function getRecycleAddressList(_data){
	$("#address_list").empty()	
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + recyclelist,
			dataType:"jsonp",
			jsonp:"jsonp",
            data:_data,
			success: function(data){	
				$("#wait_img").hide();	
				$("#address_list").empty()	
				if(data.length > 0){
					page_generation3(data[0].totalRows,_data.curPage,_data.pageSize);
					for(var i = 0; i < data.length; i++){
						var address = ''
						if(data[i].phone == null || data[i].phone =="null"){
					 		var phone = "";
					 	}else{
					 		var phone = data[i].phone;
					 	}	
					 	if(data[i].workingHours == "null" || data[i].workingHours == null){
					 		var workStr = "";
					 	}else{
					 		var workStr = data[i].workingHours
					 	}
					 	if(data[i].category == "null" || data[i].category == null){
					 		var category = "";
					 	}else{
					 		var category = data[i].category
					 	}
					 	address+= "<li class='adr' onclick='popMapMessage("+(i+1)+")'><p>" + data[i].networkName + "</p>"
					 	address+= "<ul><li><span class='adr_bg'></span>" + data[i].address + "</li>"
						address+= "<li><span class='phn_bg'></span>"+ phone + "</li>"
                		address+= "<li>"+ workStr + "</li>"
                		address+= "<li>"+ category + "</li></ul></li>"
						$("#address_list").append(address);
						var icon = new BMap.Icon(baseimg+(i+1)+ ".png", new BMap.Size(22, 38));
						var sContent =  "<div class='info_baidu' style='padding-top:5px;'><div class='info_baidu_main'>" +
							"<p class='title'><span class='color-1' style='color:#F00;padding-right: 2px;'>"+(i+1)+".</span>"+data[i].networkName +"</p>" +
							"<p class='address'>"+data[i].address+"</p><p class='tel'>"+data[i].phone+"</p></div></div>";	
						var  re = /,/g;   
						changeAddrToLat((data[i].placeCode + data[i].address).replace(re, ""),i)	
						var infoWindow = new BMap.InfoWindow(sContent);
						infoWindowArr[i] = infoWindow
					}
				}else{
					$("#address_list").empty().text(errtxt);	
				}	
		  },
		  error: function(){alert("error");}
	});
}
/**@desc: faqs list*/
function callback_faq_list2(data){
	if(v_data == d_data){
		if(data.length < 1){ 
			$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}else{	
			var faq = "",faqdurl="",displayType="";
			page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
			for(var i = 0 ; i < data.length; i++){
				faqdurl = durl +"?id="+ data[i].faqId ;
				displayType = data[i].displayType;
				faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+faqdurl+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" +getEtcText(data[i].title, 100)+"</a></li>"			
			}
			$("#product-support-faq-ul").append(faq);
		}	
	}else{
		$(data).each(function(i,item){
			var alllist = item.list[i]['alllist'];
			if(alllist != null && alllist.length>0){
				page_generation(item.list[0].tagValue.all,v_data.data.mcCurPage,v_data.data.pageSize);
				var faq = "",displayType = "";
				for(var i = 0; i < alllist.length; i++){
					displayType = alllist[i].RESERVE_FIELD25;
					faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+returnVariable(alllist[i].DOC_URL)+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>"+getValue(alllist[i].DRETITLE)+"</a></li>";
				}
				$("#product-support-faq-ul").append(faq);
				if(typeof(v_data.data.ssUserText)!="undefined"  && v_data.data.ssUserText!=""){
					highlightSearchTerms(item.list[0].keywords,"","","","","product-support-faq-ul");
				}
			}else{
				$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
			}
		});	
	}
}

/*m2m product faqs*/
function showFAQTypes(productCode,isExist){
  $.ajax({
	 async:false, 
	 type:"GET",
	 url:baseurl + "service/faq/type/list",
	 data:{"siteCode":SITE_CODE, "productCode": productCode},
	 dataType:"jsonp", jsonp:"jsonp",
	 success:function(data){
	   var tName = null, tCode = null, tId = null,activeObj; 
	   $("#y-faqs-types").find("li:gt(0)").remove();
	   if(data.length > 0){
		  for(var i=0; i<data.length; i++){
			  tName = getValue(data[i].faqTypeName);
			  tCode = getValue(data[i].faqTypeCode);
			  tId = getValue(data[i].faqTypeId);
			  activeObj = getTypeMap()[tName];
			  $(".y-list-typeCode").append("<li class='y-faq-li-"+tId+" active' tcode='"+tCode+"' tid='"+tId+"'>"+
				"<span>"+tName+"</span></li>");
			  if(activeObj){
				 activeObj.addClass("active").attr("tcode", tCode);
				 activeObj.addClass("active").attr("tid", tId);
				 activeObj.click(function(){
					chooseTypeProcess($(this).attr("tid"));
				 });
			  }
		  }
		  $(".y-list-typeCode").find("li").click(function(){
			 chooseTypeProcess($(this).attr("tid"));
		  })
	   }
	   hoverFAQType();
	   chooseTypeProcess("");
	 }
  })
}

function arrowchange(){
	if($("#support-select-a").css("display") == "none"){
		$("#support-select-a").show();
		$("#support_arrow").addClass("sbToggleOpen");
		$(".sbOptions").hide();
		$(".sbToggle").eq(0).removeClass("sbToggleOpen");
	}else{
		$("#support-select-a").hide();
		$("#support_arrow").removeClass("sbToggleOpen");
	}
}

function show_product(obj){
	$("#support-select-2").attr("placeholder",place);
	$("#support-select-2").val("");
	if($(obj).val() == pro){	
		$(obj).val("");
		$(obj).attr("placeholder",place);
	}	
	var t = trim($(obj).val())
	if(t.length < 2 || t == pro){
		$("#support-select-a").show();
		getSpareProductByID($("#cbg-selectbox-protypes"));
	}else{
		getproductcode(t);
	}
} 

function gotoInfo1Close(){
	$("#gotobaodimap").hide();
}

function yzm_checking(){
var checking = {};
checking.mobile = $("#jxuser_phone").val().trim();
checking.countryCode = 0086;
checking.businessType = "JX";
$.ajax({
		type:"GET",
		async: false,
		url: baseurl + "service/sms/checking",
		dataType:"jsonp",
		data:checking,
		jsonp:"jsonp",
		success: function(data){
			if(checkPhone($("#jxuser_phone").val().trim())){
				return false;
			}
			if(data.returnCode == 0){
				
			}else if(data.returnCode == 1){
				return false;
			}else if(data.returnCode == 11){
				return false;
			}else if(data.returnCode == 3){
				return false;
			}else if(data.returnCode == 4){
				alert(toomuch);
				return false;
			}else if(data.returnCode == 6){
				alert(toofrequent);
				return false;
			}
		},
		error:function(){}
	})
}	

function yzm_checkingYY(){
var yyphone = $("#gerenxinxi").find("dd:eq(1) input").val();
var checking = {};
checking.mobile = yyphone;
checking.countryCode = 0086;
checking.businessType = "YY";
$.ajax({
		type:"GET",
		async: false,
		url: baseurl + "service/sms/checking",
		dataType:"jsonp",
		data:checking,
		jsonp:"jsonp",
		success: function(data){
			var yyphone = $("#gerenxinxi").find("dd:eq(1) input").val();
			if(checkPhone(yyphone)){
				return false;
			}	
			if(data.returnCode == 0){
				
			}else if(data.returnCode == 1){
				
			}else if(data.returnCode == 11){
				
			}else if(data.returnCode == 3){
				
			}else if(data.returnCode == 4){
				alert(toomuch);
				return false;
			}else if(data.returnCode == 6){
				alert(toofrequent);
				return false;
			}
		},
		error:function(){}
	})
}	

/*m2m product faqs start*/
function setKeyColor(key){
    if(key.indexOf(trim($("#x-input-key").val()))>=0)
       key = key.replace(trim($("#x-input-key").val()),"<span  style='color:red'>"+$('#x-input-key').val()+"</span>");
    return key;
}
function callback_faq_list3(data){
		if(data.length < 1){ 
			$("#product-support-faq-ul").html("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}else{	
			var faq = "",faqdurl="",displayType="";
			page_generation(data[0].totalRows,v_data.data.curPage,v_data.data.pageSize);
			for(var i = 0 ; i < data.length; i++){
				faqdurl = durl +"?id="+ data[i].faqId ; 
				displayType = data[i].displayType;
				faq= faq + "<li class='clearfix'><a class='a-1' onclick=window.open('"+faqdurl+"','FAQS','width=845px,height=840px,scrollbars=yes,resizable=yes')><span class='fwb'>[" + getFAQContentType(displayType) + "]</span>" +setKeyColor(data[i].title)+"</a></li>"			
			}
			$("#product-support-faq-ul").append(faq);
		}	
}

function showFAQTypes2(){
    $.ajax({
	 async:false, 
	 type:"GET",
	 url:baseurl + faqTypeList,
	 data:{"siteCode":SITE_CODE, "productCode": productCode,"type":"1"},
	 dataType:"jsonp", jsonp:"jsonp",
	 success:function(data){
	   var tName = null, tCode = null, tId = null,activeObj; 
	   $("#x-faq-type").find("li:gt(0)").remove();
	   if(data.length > 0){
		  for(var i=0; i<data.length; i++){
			  tName = getValue(data[i].faqTypeName);
			  tCode = getValue(data[i].faqTypeCode);
			  tId = getValue(data[i].faqTypeId);
			  activeObj = getTypeMap()[tName];
			  $(".y-list-typeCode").append("<li class='y-faq-li-"+tId+" active' tcode='"+tCode+"' tid='"+tId+"'>"+
				"<span>"+tName+"</span></li>");
			  if(activeObj){
				 activeObj.addClass("active").attr("tcode", tCode);
				 activeObj.addClass("active").attr("tid", tId);
				 activeObj.click(function(){
					chooseTypeProcess($(this).attr("tid"));
				 });
			  }
		  }
		  $(".y-list-typeCode").find("li").click(function(){
			 chooseTypeProcess($(this).attr("tid"));
		  })
	   }
	   hoverFAQType();
	   chooseTypeProcess("");
	 }
  })
}
function setM2mFaqAppraise(appraise){
	$("#product-support-faq-ul").empty();	
	$(".page").empty();
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + faqAppraise,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:appraise,
			success: function(data){},
			error: function(){}
	});		
}
/*m2m product faqs end*/
function whertobyClass(){
	$(".list-item-place").each(function(i){ 
	var n = $(this).find("li").length;
		if(n<=2){
			$(this).addClass("item02")
		}else 	if(n > 4){
			//$(this).css("top","-132px")
		}
	})
}

function showHotline(site){
	$.ajax({
  		type: 'GET',
  		async:false,
  		url: baseurl + baseHotlineInfo,
  		contentType: "application/x-www-form-urlencoded; charset=utf-8",
  		data:{"siteCode":site},
  		dataType: 'jsonp', 
  		jsonp: 'jsonp', 
  	    success: function(data) {
			if(data!=null){
  	    		$("#x-line").text(getValue(data.hotline));
  	    		$("#x-supportLanguage").text(getValue(data.supportLanguage));
  	    		$("#x-time").text(getValue(data.supportTime));
  	    		if(data.remark!=null){
  	    			if(data.remark.length>100){
  	    				$("#x-remark").text(getValue(data.remark.substring(0,100))+"...");	
  	    				$("#x-remark").attr("title",getValue(data.remark));
  	    			}else{
  	    				$("#x-remark").text(getValue(data.remark));
  	    			}	
  	    			$("#x-remark").show();
  	    		}else{
  	    			$("#x-remark").hide();
  	    		}
  	    	}
  	    },
  	    error: function(msg){}
	});	
}

/*begin support pro list gs*/
function setDatas(keys){
	var _key0 ="",_key1 ="",_key2 ="",_key4 ="";
	var v_data = {
		"url": isearchUrl,
		"data":{"siteCode":SITE_CODE, "APP_NUM":APP_NUM,"templateType":"global","queryMatch":"support_product:"+$("#support_product").val(),"IsearchFlag":"byKey","tagMatch":"same","topFlag":"n","mcCurPage":"1","pageSize":"120","filterFlag":"n"}
	};
	var keywords = keys;
    if(keywords!=null&&keywords.length>0){
      	_key4 = keywords;
		var _value = '{"con_key3":"tech-specs","con_key4":"'+_key4+'","con_key5":"supisearch"}'; 
		trackEvent("tech-specs",keywords,"supisearch",_value);
		v_data.data.ssUserText = encodeURIComponent(keywords);
		v_data.data.mcCurPage = 1;
		supportProSend(v_data);
     }
}
function selTypeList(key1,key2){
	$("#support_product").val(key1+","+key2)
	var v_data = {
		"url": isearchUrl,
		"data":{"siteCode":SITE_CODE, "APP_NUM":APP_NUM,"templateType":"global","queryMatch":"support_product:"+key1+","+key2+"","IsearchFlag":"byKey","tagMatch":"same","topFlag":"n","mcCurPage":"1","pageSize":"120","filterFlag":"n"}
	};
	var _value = '{"con_key3":"tech-specs","con_key5":"supisearch"}';
	trackEvent("supisearch",_value);
	v_data.data.mcCurPage = 1;
	supportProSend(v_data);
}
function supportProSend(data){
	$.ajax({
		type:"GET",
		async:false,
		dataType:"jsonp",
		jsonp:"jsonp",
		url: data.url, 				  
		data: data.data,
		success: function(data){	
			setSerachList(data.list);
		},
		error: function(resp){if(resp.status!="200"){alert("Error!")};}
	});
}
function setSerachList(datas){
	var prolist;
	if(datas!=null && datas!="null" && datas.length>0){
		datas = datas[0].alllist;
		$("#supportlist").empty();
		if(datas!=null&&datas.length>0){
			for(var i=0;i<datas.length;i++){
				prolist = datas[i];
				if(prolist!=null){
					var suppdat = "<div> <a href='"+prolist.DOC_URL+"' class='support-product-thumbnail'> ";
					suppdat += " <img src='"+prolist.RESERVE_FIELD32+"'  alt='"+prolist.autn_title+"' /><p>"+prolist.autn_title+"</p> </a></div>";
					$("#supportlist").append(suppdat);
				}else{
					$("#supportlist").append("<div class='search-result-others'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
				}
			}
		}else{
			$("#supportlist").append("<div class='search-result-others'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
		}
	}
}
/*end support pro list gs*/

function chooseSearch(tags,$this,a,b){
   $this.next("div").children().first().addClass("sbToggle2");
   $("#y-cbg-main").find("#keywords").val("");
   var KeyText=$this.val();
   var _value = '{"con_key0":"'+KeyText+'","con_key3":a,"con_key5":b}';
   search_by_years(tags,KeyText, "byYear");
}
function getAddressNewsList(_data,code_Verification){
    var points,s1;
    $("#reslut-adr").empty();
    $("#hiddendiv").empty();
    var cknum = 0;
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + addressNewListService,
			dataType:"jsonp",
			jsonp:"jsonp",
            data:_data,
			success: function(data){	
				if(data.length > 0){				 
				    $(".search-summary").show();  
				    var local1 = new BMap.LocalSearch(data[0].placeCode, {renderOptions:{map: map}});
				   	var ni = 0;
					for(var i = 0; i < data.length; i++){
						var adr = data[i].address;
						ni = i+1;
						var addressArr =data[i].placeCode.split(",");
						var adr1 = (addressArr[1]=="null" || addressArr[1]==null)?"":addressArr[1];
						var adr2 = (addressArr[2]=="null" || addressArr[2]==null)?"":addressArr[2];
						var adr3 = (addressArr[3]=="null" || addressArr[3]==null)?"":addressArr[3];
						if(adr1==adr2||adr2==adr3){
					 		adr = adr1+adr3+data[i].address;
						} else {
					 		adr = adr1+ adr2+adr3+data[i].address;
						}
						if(adr!=""&&adr!=undefined){
							adr = adr.length<=43?adr:adr.substring(0,41)+"...";
						}
						adrs = adr1+adr2+adr3;
						var phone = (data[i].phone == null || data[i].phone =="null")?"":data[i].phone;
						var netname = data[i].networkName.length<=24?data[i].networkName:data[i].networkName.substring(0,21)+"...";
						var xing= "";
						var xingnum =3;
						if(1==data[i].typeCode){
					 		xing="center-detail-xing x5";
					 		xingnum = 5;
						}else if (2==data[i].typeCode){
					 		xing="center-detail-xing x4";
					 		xingnum = 4;
						}else {
					 		xing="center-detail-xing x3";
						}
			
				    	s1 = "<div class='center-info' onclick=popMapMessage("+ni+","+xingnum+")";
				    	s1+= "><p class='center-detail clearfix'><span class='bdmap-logo'>"+ni+"</span><span class='center-sum-r'><span class='center-name'>"+netname+"</span>";
				    	s1+= "<span class='"+xing+"'></span></span></p><p class='center-detail'><span class='center-addr'></span> ";
						s1+= "<span class='center-detail-txt1'>"+data[i].address+"</span></p><p class='center-detail'>";
						if(data[i].phone!=null&&data[i].phone.length>0){
							s1+= "<span class='center-phone'></span><span class='center-detail-txt'>"+data[i].phone+"</span>";
						}	
						if(data[i].workingHours!=null&&data[i].workingHours.length>0){
							s1+= "</p><p class='center-detail'><span class='center-time'></span><span class='center-detail-txt'>"+data[i].workingHours+"</span></p>";	
						}
						if(data[i].category!=null&&data[i].category.length>0){
							s1+= "<p class='center-detail'><span class='center-opr'></span> <span class='center-detail-txt'>"+data[i].category+"</span></p>";
						}
						s1+= "</div>";
						$("#reslut-adr").append(s1);
						s1 = "";
						var titleval = data[i].networkCode;
						if(titleval!=null){titleval = titleval.replace(/\ /g,"_");}
						
						var sContent =  "<div class='info_baidu'><div class='baidu_map_bg'> </div><div class='baidu_map_fenxiang' onclick='sinaBlog()'></div><div class='info_baidu_main'> " ;
						sContent+= "<span class='baidubilogo'  id='bdmap-logo'>"+ni+"</span>";
        			    sContent+= "<p class='baidunetname'  >"+data[i].networkName+"</p>";
        			   	sContent+= "<p class='center-detail-xing x3' id='xingjip'></p><p class='center-detail-txt'>"+data[i].address+"</p>";
        			   	sContent+= "<div class='baidu_map_div1'><input type='text' placeholder='&#36215;&#28857;' id='qidian"+i+"' class='start-input'/>"
        			   	sContent+= "<input type='button' value='&#20844;&#20132;' class='bus' onclick=searchBus('"+data[i].address+"',"+i+",'0') >";
        			   	sContent+= "<input type='button' value='&#39550;&#36710;' class='car' onclick=searchCar('"+data[i].address+"',"+i+")>";
        			   	sContent+= "</div><div class='baidu_map_div2'><div style='margin:5px 0;' class='baidu_open_div'><input type='text' name='user_phone' id='user_phone' class='start-input baidmap-phone' ";
        			   	sContent+= " placeholder='&#36755;&#20837;&#25163;&#26426;&#21495;&#30721;&#21457;&#36865;&#26381;&#21153;&#20013;&#24515;&#20449;&#24687;' >";
        			   	sContent+= "<input type='button' value='&#21457;&#36865;&#21040;&#25163;&#26426;' onclick=faSongPhone('"+data[i].networkId+"','"+titleval+"','0086') class='cell-phone'><br>";
        		 		sContent+= "<input type='text' name='captcha' id='captcha' maxlength='4' class='validate-input'  placeholder='&#36755;&#20837;&#39564;&#35777;&#30721;' />";
        		 		sContent+= "<span class='cbg-captcha1 validate-span'  id='baidumap_code'></span></div></div>";	
        			    //sContent+="<input type='button' value='&#20998;&#20139;&#33267;' class='share' onclick='sinaBlog()'>";
        			   	sContent+= "</div></div>";
						var opts1 = {
							width : 351, //  she zhi biao zhu xin xi de kuan du
							//height: 230, //  she zhi biao zhu xin xi de gao du
							//title : netname // //  she zhi biao zhu xin xi de biaoti
						}		
						var  re = /,/g;
						var longitude = data[i].longitude;
						var latitude = data[i].latitude;
						if(longitude!=null&&latitude!=null){
							setPointAddrToLat(longitude,latitude,cknum,xingnum);
						}else{
							changeAddrToLat((data[i].placeCode + data[i].address).replace(re, ""),cknum,xingnum)
						}
						cknum++;
						var infoWindow = new BMap.InfoWindow(sContent,opts1);
						infoWindowArr[i] = infoWindow/**/
					}		
				}else{
					maps.centerAndZoom(csmap, 8);	
					maps.addControl(new BMap.NavigationControl());
					$(".search-summary").show();
					$("#reslut-adr").empty().html('<span style="display: block; padding: 15px 10px; line-height: 1.6;">'+ titlecz +'</span>');
					if(code_Verification){$(".y-tishi").show()}
				}	
		  },
		  error: function(){alert("error");}
	});
}

/*begin gs product_dt faq js*/
 function analysisData(data){
	if(data.list[0].totalNum == 0){
		$(".help-detail-cont").html("<p style='text-align:center;font-size:16px'>"+LAG_CON_NO_RESULTS+"</p>");
		$(".help-detail .help-detail-pagenum").empty();
		return false
	}
	var allsize = 0;
	if(data.list[0]['alllist'].length){				
		$(data).each(function(i,item){
			alllist = item.list[i]['alllist'];
			allsize = item.list[i]['totalNum'];
			if(alllist != null && alllist.length>0){
				$(".help-detail .help-detail-cont").empty();
				var faq = "",displayType = "";
				for(var i = 0; i < pagenum; i++){
					if(alllist[i]!=null){
						displayType = alllist[i].RESERVE_FIELD25;
						faq = faq + "<li class='item1'><i class='g-ico g-ico-23'></i><a href='"+returnVariable(alllist[i].DOC_URL)+"'>["+getFAQContentType(displayType)+"]"+getValue(alllist[i].DRETITLE)+"</a></li>";
					}
				}
				$(".help-detail .help-detail-cont").append(faq);
			}
		});	
		faqpagesize = allsize%pagenum==0?allsize/pagenum:Math.ceil(allsize/pagenum);
		pageindex = 1;
		$(".help-detail .help-detail-pagenum").empty();
		$(".help-detail .help-detail-pagenum").append("<li class='chend'><font>&lt&lt;</font></li>");
		$(".help-detail .help-detail-pagenum").append("<li class='chend'><font>&lt;</font></li>");
		var endpn = faqpagesize>7?7:faqpagesize;
		for(var l=1;l<=endpn;l++){
			if(l==1){
				$(".help-detail .help-detail-pagenum").append("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class='dauf'><font>"+l+"</font></li>")
			}else{
				$(".help-detail .help-detail-pagenum").append("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class=''><font>"+l+"</font></li>")
			}	
		}
		if(faqpagesize>1){
			if(pageindex==1){
				$(".help-detail .help-detail-pagenum").append("<li onclick='loadPageFaqList(0,this)'><font>&gt;</font></li>");
				$(".help-detail .help-detail-pagenum").append("<li onclick='loadPageFaqListFL(1,this)'><font>&gt&gt;</font></li>");
			}
			
		}else{
			$(".help-detail .help-detail-pagenum").append("<li onclick='loadPageFaqList(0,this)' class='chend'><font>&gt;</font></li>");
			$(".help-detail .help-detail-pagenum").append("<li onclick='loadPageFaqListFL(1,this)' class='chend'><font>&gt&gt;</font></li>");
		}
		if(endpn==1){
			$(".help-detail-pagenum li").removeAttr("onclick")
		}
	}	
}
function addInfo(data,type){
	if(".cbg-labeled-icon-list.doc" == type){
		supportlist = data;
		$(".cbg-labeled-icon-list.doc").empty()
	}	
	if(".cbg-labeled-icon-list.down" == type){
		supportdown = data;
		$(".cbg-labeled-icon-list.down").empty()
	}
	for(var i = 0; i < data.length; i++){
		if(data[i]!=null){
			var _list = "";
			var dli_double = "<li>";
			if(i%2 == 0){
				dli_double = "<li class='dli_double'>";
			}
			if(".cbg-labeled-icon-list.down" == type){
				_list = dli_double + "<div><i class='g-ico g-ico-33'></i> <span class='title' title='"+ data[i].DRETITLE +"'>"+ data[i].DRETITLE +"</span><span class='date'><span class='hidden-xs'> | </span><span>";
			}else{
				_list = dli_double + "<div><i class='g-ico g-ico-27'></i> <span class='title' title='"+ data[i].DRETITLE +"'>"+ data[i].DRETITLE +"</span><span class='date'><span class='hidden-xs'> | </span><span>";
			}
			_list += data[i].RESERVE_FIELD11+"</span><span> | </span><span>"+data[i].RESERVE_FIELD37+"</span></span> </div>"+
			"<p class='des'>"+returnVariable(data[i].DOC_DESCRIPTION)+"</p> <div class='text-right'>" ;
			if(data[i].DOC_DESCRIPTION!=null && data[i].DOC_DESCRIPTION.length>1){
				_list += "<a class='more' href='javascript:void(0);'><i class='g-ico g-ico-28'></i>"+LAG_CON_MORE+"</a> ";
			}
			_list += "</div> <div class='download-btn'><a href='"+ data[i].RESERVE_FIELD33 +"'><i class='g-ico g-ico-25'></i></a></div>";
			$(type).append(_list);
		}	
	}
	$(type).show();
}
/*sup faq page*/
 function loadPageFaqList(index,t){
	if(index>0){
		$(t).attr("class","dauf")
	}
	var beginSize=0,endinSize=0;
	var bool = false;
	if(index>0){
		pageindex = index-1;
		bool = true;
	}else{
		if(index==0){
			pageindex++;
			if(faqpagesize>pageindex){
				$(".help-detail-pagenum .dauf").next().attr("class","dauf");
				$(".help-detail-pagenum .dauf").eq(0).attr("class","");	
				if(faqpagesize == pageindex){pageindex --}
				bool = true
			}else{pageindex=faqpagesize;}
		}else{
			if(0<pageindex){
				pageindex --
				bool = true
			}
		}
	}
	if(pageindex>=0&&pageindex<=faqpagesize){	
		$(".help-detail-pagenum li").attr("class","");
		if(index>0){
			loadPageListCount(pageindex+1);
		}else{
			if(index==0&&pageindex==1){pageindex++}
			if(pageindex>0){
				bool = true;
				loadPageListCount(pageindex);
			}
		}
	}
	if(index<=0){
		var eqdat = pageindex+2;
		if($(".help-detail-pagenum .dauf").length<1){
			$(".help-detail-pagenum li").eq(eqdat).attr("class","dauf")
		}
	}
	var pageindex1 = pageindex-1;
	pageindex1 = pageindex1<0?0:pageindex1;
	if(pageindex1>=0){
		beginSize = pagenum*pageindex1;
		endinSize = pagenum*(pageindex1+1)<=faqpagesize?pagenum*(pageindex1+1):faqpagesize;
		beginSize = beginSize>endinSize?(endinSize-pagenum):beginSize;
		var page_max = Math.ceil(alllist.length/pagenum)-1;
		if(pageindex==faqpagesize){
			var eqcount = $(".help-detail-pagenum li[name='pagecount']").length+2;
			$(".help-detail-pagenum li").eq(eqcount).attr("class","chend");
			$($(".help-detail-pagenum li").last()[0]).attr("class","chend");
		}
		if(pageindex1==0){
			$(".help-detail-pagenum li").eq(0).attr("class","chend");
			$(".help-detail-pagenum li").eq(1).attr("class","chend");
		}
		getFaqTypeDataListPage('all',pageindex);
	}
}
//clike page
function loadPageListCount(pageNum){
	if(pageNum==1){
		$(".help-detail-pagenum li:eq(0),.help-detail-pagenum li:eq(1)").removeAttr("onclick");	
	}else{
		$(".help-detail-pagenum li").eq(0).attr("onclick","loadPageFaqListFL(0,this)");	
		$(".help-detail-pagenum li").eq(1).attr("onclick","loadPageFaqList(-1,this)");
	}
	if(faqpagesize==pageNum){
		$(".help-detail-pagenum li").eq((2+faqpagesize)).removeAttr("onclick");
		$(".help-detail-pagenum li").eq((3+faqpagesize)).removeAttr("onclick");
	}else{
		$(".help-detail-pagenum li").eq((2+faqpagesize)).attr("onclick","loadPageFaqList(0,this)");
		$(".help-detail-pagenum li").eq((3+faqpagesize)).attr("onclick","loadPageFaqListFL(1,this)");
	}
	if(pageNum>6){
		pageindex = pageNum;
		$(".help-detail-pagenum .dauf").removeClass()
		var kenpage = pageNum-3;
		var endpage = pageNum+3;
		if(endpage>faqpagesize){
			endpage = faqpagesize;
		}
		if(faqpagesize%pageNum<=7){
			kenpage = endpage-6;
		}
		$("li[name='pagecount']").remove();
		for(var l=endpage;l>=kenpage;l--){
			if(endpage<=faqpagesize){
				if(l==pageNum){
					$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class='dauf'><font>"+l+"</font></li>")
				}else{
					$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class=''><font>"+l+"</font></li>")
				}	
			}	
		}
	}else{
		var ipagename = pageNum;
		pageindex = pageNum;
		$(".help-detail-pagenum .dauf").removeClass()
		var kenpage = pageNum-3;
		var endpage = pageNum+3;
		if(pageNum<=4){
			var endpn = faqpagesize>7?7:faqpagesize;
			pageNum = 1;
			endpage = endpn;
		}
		if(endpage>faqpagesize){
			endpage = faqpagesize;
		}
		if(faqpagesize%pageNum<=7){
			kenpage = endpage-6;
			kenpage = kenpage<=0?1:kenpage;
		}
		$("li[name='pagecount']").remove();
		for(var l=endpage;l>=kenpage;l--){
			if(endpage<=faqpagesize){
				if(l==ipagename){
					$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class='dauf'><font>"+l+"</font></li>")
				}else{
					$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class=''><font>"+l+"</font></li>")
				}	
			}
		}
	}
}
 function getFaqTypeDataListPage(typecode,mcCurPage){
	if(mcCurPage==1&&false){
		$("#productFaq li").removeClass("active")
		$(".help-filter-close ul,.help-detail-cont").empty();
	}
	var querycode = "support:faqs";
	var faqcodelist = $("#faqTypeCode").val();
	var ajaxval = faqToThreeList;
	if(faqcodelist!=null&&faqcodelist.length>0){
		var list = faqcodelist.split(",");
		querycode = "support:faqs@#"+list[0];
		for(var n=1;n<list.length;n++){
			querycode+= "@-"+list[n];
		}
		if(list.length>0) ajaxval = faqToFourList;
	}else{
		querycode = "support:faqs";
	}
	typecode = $(".help-filter-close p .active").attr("tcode");
	if(typecode!=null&&typecode=="text"){
		querycode += "@@text";
	}
	if(typecode!=null&&typecode=="video"){
		querycode += "@@video";
	}
	var param_faq = {}
		param_faq.siteCode = SITE_CODE;
		param_faq.APP_NUM = APP_NUM;
		param_faq.pageSize	= "10";
		param_faq.tagMatch = "same";
		param_faq.topFlag = "n";
		param_faq.isTop = 1;
		param_faq.mcCurPage = mcCurPage;
		param_faq.queryMatch = querycode;
		param_faq.productCode = $("#productSelect").val();
		$.ajax({ 
			async:false, 
			type:"GET",
			url: baseurl + ajaxval,
			data:param_faq,
			dataType:"jsonp", 
			jsonp:"jsonp",
			success:function(data){		
				if(data.list[0]['alllist'].length){				
					$(data).each(function(i,item){
						alllist = item.list[i]['alllist'];
						if(alllist != null && alllist.length>0){
							$(".help-detail .help-detail-cont").empty();
							var faq = "",displayType = "";
							for(var i = 0; i < pagenum; i++){
								if(alllist[i]!=null){
									displayType = alllist[i].RESERVE_FIELD25;
									faq = faq + "<li class='item"+i+"'><i class='g-ico g-ico-23'></i><a href='"+returnVariable(alllist[i].DOC_URL)+"'>["+getFAQContentType(displayType)+"]"+getValue(alllist[i].DRETITLE)+"</a></li>";
								}
							}
							$(".help-detail .help-detail-cont").append(faq);
						}
					});	
				}	
			},
			error:function(){}
		});	
}
//last page - first page
function loadPageFaqListFL(index,t){
	if(index==0){
		pageindex = 1;
		loadPageFaqList(1,t);
		var endpn = faqpagesize>7?7:faqpagesize;
		$("li[name='pagecount']").remove();
		for(var l=endpn;l>=1;l--){
			if(l==1){
				$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class='dauf'><font>"+l+"</font></li>")
			}else{
				$(".help-detail-pagenum li").eq(1).after("<li name='pagecount' onclick='loadPageFaqList("+l+",this)' class=''><font>"+l+"</font></li>")
			}	
		}
	}else{
		$(".help-detail-pagenum li").eq(0).attr("class","");
		$(".help-detail-pagenum li").eq(1).attr("class","");
		var eqcount = $(".help-detail-pagenum li[name='pagecount']").length+2;
		$(".help-detail-pagenum li").eq(eqcount).attr("class","chend");
		$($(".help-detail-pagenum li").last()[0]).attr("class","chend");
		pageindex = faqpagesize;
		loadPageFaqList(pageindex,t);
		loadPageListCount(faqpagesize);
	}
}
/*end product_dt*/
