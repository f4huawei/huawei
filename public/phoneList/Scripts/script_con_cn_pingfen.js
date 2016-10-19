if(webUatUrl=="" || webUatUrl==null || webUatUrl=="null"){
	var webUatUrl = "http://consumer.huawei.com/";
}
var scoresService = webUatUrl + "support/services/service/score/" ; 
var commentService = webUatUrl + "support/services/service/evaluate/";
var productService = webUatUrl + "support/services/service/evaluate/product";

// set radom num betwen 0000 - 9999
function radomCode(){
	var r = "";
	for(var i = 0 ; i < 4 ; i++){
		r = r + Math.round(Math.random()*9);
	}
	return r;
}

//check isEmail
function isEmail(str){
	var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;  
	return re.test(trim(str));  
}

//check isDate
function isDate(str) {  
	var rel = /^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/;
	return rel.test(str);  
}

//check validate Code
function validateCode(usercode,syscode){
	if(usercode == syscode) return true;
	return false;
}

//set validate Code
function setValidateCode(target){ 	
	var radoms = radomCode();
	$(target).text(radoms);
}
function refurCode(obj){
	var radoms = radomCode();
	$(obj).text(radoms);
}
//get content length
function getLength(str){
	var returnValue = str.replace(/[\u4E00-\u9fa5]/g,"   ");
    return returnValue.length;
} 

//pingfen
function pingfen(myid,mycss){
	$(myid).children("span").each(function(){	
	   	    $(this).click(function(){ 
			$(this).removeClass(mycss+"-star-1");
			$(this).addClass(mycss+"-star-2");
			$(this).prevAll("span").removeClass(mycss+"-star-1");
			$(this).prevAll("span").addClass(mycss+"-star-2");
			$(this).nextAll("span").removeClass(mycss+"-star-2");
			$(this).nextAll("span").addClass(mycss+"-star-1");
			var num = $(myid +" ."+ mycss +"-star-2").size();
			$(myid+"_num").val(num);
		});

		$(this).mouseover(function(){
			$(this).removeClass(mycss+"-star-1");
			$(this).addClass(mycss+"-star-2");
			$(this).prevAll("span").removeClass(mycss+"-star-1");
			$(this).prevAll("span").addClass(mycss+"-star-2");
			$(this).nextAll("span").removeClass(mycss+"-star-2");
			$(this).nextAll("span").addClass(mycss+"-star-1");
		});
		$(this).mouseout(function(){
			$(this).removeClass(mycss+"-star-2"); 
			$(this).addClass(mycss+"-star-1");
			$(this).prevAll("span").removeClass(mycss+"-star-2");
			$(this).prevAll("span").addClass(mycss+"-star-1");
			$(this).nextAll("span").removeClass(mycss+"-star-2");
			$(this).nextAll("span").addClass(mycss+"-star-1");
		});
	});
	$(myid).mouseout(function(){
		 var myValue = $(myid+"_num").val();
		 if(myValue =="0"){
		   $(myid).children("span").removeClass(mycss+"-star-2");
		   $(myid).children("span").addClass(mycss+"-star-1");
		 }else{
		    $(myid).children("span").each(function(index){
				if(index < myValue) {
					$(this).removeClass(mycss+"-star-1");
					$(this).addClass(mycss+"-star-2");
				}
			}); 
		 }
	});
}

//send scorce to support-d
function sendSupportScore(score,service){
	$.ajax({
			type:"get",
			async: true,
			url:scoresService + service ,		 		  
			dataType:"jsonp",
			jsonp:"jsonp",
		 	data:score,
			success: function(data){},
			error: function(){alert(LAG_CON_CAN_NOT_SUB);}
	}); 	
}

//send comment to support
function sendSupportComment(comment,service){
	$.ajax({
			type:"get",
			async: true,
			url:commentService + service ,		 		  
			dataType:"jsonp",
			jsonp:"jsonp",
		 	data:comment,
			success: function(data){alert(LAG_CON_SUBMIT_SUCC);},
			error: function(){}
	}); 	
}


//send feedback or product comment
function saevProductComment(_data){
	$.ajax({
		type:"get",
		async: true,
		url: productService,		 		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:_data,
		success: function(data){
			$("#contact-prompt-5").text(LAG_CON_SEND_EMAIL_SUCC);
			clearFeedbackData()
		},
		error: function(){$("#contact-prompt-5").text(LAG_CON_SEND_EMAIL_FAIL);}
	}); 	
}
function getCommentData(){
	var comments = {}
	comments.siteCode = SITE_CODE;
	comments.productCode = getSelectProName();
	comments.lastName = " ";
	comments.firstName = $("#feedback_name").val();
	comments.email = $("#feedback_email").val();
	comments.featuresScore = "5"
	comments.overallScore = "5"
	comments.softwareScore = "5"
	comments.specScore = "5"
	comments.evaluateContent = $("#feedback_question").val();
	return comments
}


function validateFeedbackData(){
	if(getLength(trim($("#feedback_question").val())) == 0){
	 	$("#contact-prompt-5").text(LAG_CON_ENTER_QUESTION);
	 	$("#feedback_question").focus();
	 	return false;
   	}else if(getLength(trim($("#feedback_question").val())) > 1000){
		$("#contact-prompt-5").text(LAG_CON_MOST_1000);
	 	$("#feedback_question").focus();
	 	return false;
	}
	if(trim($("#feedback_name").val()) == "" ){
		$("#contact-prompt-5").text(LAG_CON_WRITE_NAME);
		$("#feedback_name").focus();
		return false
	}
	if(!isEmail($("#feedback_email").val())){
		$("#contact-prompt-5").text(LAG_CON_WRITE_EMAIL);
		$("#feedback_email").focus();
		return false
	}	
	return true
}
//send email to huawei start
function validateEmailData(){
     if($("#contact-select-7").val()== 0){
	 	$("#contact-prompt-1").html(LAG_CON_PLE_SEL_CATEGORY);
	 	return false;
     }
     var qlength = getLength(trim($("#question").val()))
     if(qlength == 0){
     	$("#contact-prompt-1").html(LAG_CON_INTER_Q);
	 	$("#question").focus();
	 	return false;
     }else if(qlength > 1000){
     	$("#contact-prompt-1").html(LAG_CON_MOST_1000);
	 	$("#question").focus();
	 	return false;
     }
	  if(trim($("#email").val()) == ""){
	 	$("#contact-prompt-1").html(LAG_CON_ENTER_EMAIL_ADDRESS);
	    $("#email").focus();
	    return false;
	 }
	  if(!isEmail($("#email").val())){
	 	$("#contact-prompt-1").html(LAG_CON_EMAIL_FORMAT_INCORRECT);
	    $("#email").focus();
	    return false;
	 }
	 if($("#contact-select-1").val()<1){
	 	$("#contact-prompt-1").html("&#35831;&#36873;&#25321;&#30465;&#20221;");
	    $("#contact-select-1").focus();
	    return false;
	 }
	 if($("#contact-select-2").val()<1){	 	
	 	if($("#contact-select-2 option").length > 1){
	 		$("#contact-prompt-1").html(LAG_CON_PLE_SELECT_CITY);
	    	$("#contact-select-1").focus();
	    	return false;
	    }
	}
    if(trim($("#model").val()) == ""){
	 	$("#contact-prompt-1").html(LAG_CON_ENTER_MODEL);
	 	$("#model").focus();
	 	return false;
    }
    if(!isDate($("#purchase_date").val())){
	   $("#contact-prompt-1").html(LAG_CON_DATE_FORMAT_INCORRECT);
	   $("#purchase_date").focus();
	   return false;
	}
	var usercode = trim($("#user_input_code").val());
	var syscode = $("#sys_validate_code").text();
	if(!validateCode(usercode,syscode)){
		$("#contact-prompt-1").html(LAG_CON_VALIDATE_CODE_ERROR);
	    $("#user_input_code").focus();
		setValidateCode("#sys_validate_code");
		return false; 
	}
	return true
}
function getEmailData(){
	var emaildata = {}
	emaildata.siteCode = SITE_CODE ;
	emaildata.subjectId = $("#contact-select-6").val();
	emaildata.categoryId = $("#contact-select-7").val();
	emaildata.productName = trim($("#model").val());
	emaildata.placeId = $("#contact-select-2").val();
	var inputname = trim($("#username").val())
	emaildata.username = inputname!=""?inputname:"anonymous";
	emaildata.email = trim($("#email").val());
	emaildata.mailContent = trim($("#question").val());
	emaildata.purchaseDate = trim($("#purchase_date").val());
	return emaildata
}

function clearEmailInfo(){
	$("#question").val("");
	$("#model").val("");
	$("#username").val("")
	$("#email").val("")
	$("#purchase_date").val(LAG_CON_DATA_FORMAT);
	$("#user_input_code").val(LAG_CON_VCODE)
	setValidateCode("#sys_validate_code");
	select6.selectValue(0);
	select1.selectValue(0);	
}

function clearEmailData(){
	$("#x_name").val("");
	$("#Phone").val("");
	$("#email").val("");
	$("#purchase_date").val("");
	$("#purchase_date1").val("");
	$("#purchase_test").val("");
	$("#question").val("");
	select1.addItem(0,[0,"&#36873;&#25321;&#30465;"]); 
	select2.addItem(0,[0,"&#36873;&#25321;&#22478;&#24066;"]);
	select3.addItem(0,[0,"&#36873;&#25321;&#21306;"]);
	select6.addItem(0,[0,"&#36873;&#25321;&#20027;&#39064;"]);
	select7.addItem(0,[0,"&#36873;&#25321;&#31867;&#21035;"]);
	select8.addItem(0,[0,"&#36873;&#25321;&#20135;&#21697;&#31867;&#21035;"]);
	select9.addItem(0,[0,"&#36873;&#25321;&#20135;&#21697;&#22411;&#21495;"]);
	if($(".fuwu").css("display") == "block"){
		select12.addItem(0,[0,"&#36873;&#25321;&#32500;&#25252;&#20013;&#24515;"]);
		select12.selectValue(0);
	}
	select1.selectValue(0);
	select2.selectValue(0);
	select3.selectValue(0);
	select6.selectValue(0);
	select7.selectValue(0);
	select8.selectValue(0);
	$("#exp_check").attr("checked",false);
}

function clearSupllyInfo(){
	$("#contact-supplier .w242").val("")
	$("#contact-supplier .h52").val("")
	$("#contact-supplier .textarea-1").val("")
	$("#user_input_code2").val(LAG_CON_VCODE)
	setValidateCode("#sys_validate_code2");
	contact3.selectValue(0);
}


//send email to huawei end
function clearFeedbackData(){
	$("#feedback_question").val("")
	$("#feedback_name").val(""); 
	$("#feedback_email").val("")
	$("#user_input_code1").val(LAG_CON_VCODE)
	setValidateCode("#sys_validate_code1")
}
//send feed back start
function saveFeedback(params){
	$.ajax({
		type:"GET",
		async: false,
		url: baseurlCmkt+"service/feedback/validateWebsite/save" ,					  		  
		dataType:"jsonp",
		jsonp:"jsonp",
		data:params,
		success: function(data){	
		  if(data.returnCode==8||data.returnCode==9){
		  	$("#contact-prompt-5").text(LAG_CON_WRITE_VALIDATECODE);
			sessionId5();
		  }else{
			$("#contact-prompt-5").text(LAG_CON_SEND_EMAIL_SUCC);
			sessionId5();
			clearFeedbackData()	
		  }	
	
		},
		error: function(){$("#contact-prompt-5").text(LAG_CON_SEND_EMAIL_FAIL)}
	});			
} 
function sendFeedback(){
	if(validateFeedbackData()){
		var _data = getFeedbackData()
		trackPageview("/contact-us/feedback"); 
		saveFeedback(_data)
	}	
}
function getFeedbackData(){
	var p =  {}
	p.siteCode = SITE_CODE;
	p.feedbackContent = $("#feedback_question").val()
	p.email = $("#feedback_email").val()
 	p.userName = $("#feedback_name").val()
 	p.sessionuuid = $("#sessionuuid5").text()
 	p.validationCode = $("#user_input_code1").val()
 	return p
}
function sendProductComment(){
	if(validateFeedbackData()){
		var _data = getCommentData();
		trackPageview("/contact-us/feedback");
		saevProductComment(_data);
	}
	
}
//send feed back end
//send supplier info to huawei start
  $("#Supplier_02_pre").click( function (){
	  $(".contact-us-6").fadeOut();
	  $(".contact-us-5").fadeIn();
	  $("#contact-supplier").css("background","url(" + $("#contact_us_img2").val() +") no-repeat center top");
  });

  $("#Supplier_03_pre").click( function (){
	  $(".contact-us-7").fadeOut();
	  $(".contact-us-6").fadeIn();
	  $("#contact-supplier").css("background","url(" + $("#contact_us_img2").val() +") no-repeat center top");
  });
  function validateSupplier_01(){
  	  if($("#register_name").val()==""){
		 $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#21517;&#31216;&#65288;&#20840;&#21517;&#65289;&#12290;");
		 $("#register_name").focus();
	  }else if($("#register_address").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#27880;&#20876;&#22320;&#22336;&#12290;");
		 $("#register_address").focus();
	   }else if($("#register_person").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#32852;&#31995;&#20154;&#30340;&#22995;&#21517;&#12290;");
		 $("#register_person").focus();
	   }else if($("#register_email").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#30005;&#23376;&#37038;&#31665;&#22320;&#22336;&#12290;");
		 $("#register_email").focus();
	   }else if(($("#register_email").val()!="") && !checkemail($("#register_email").val())){
	     $("#contact-prompt-2").html("&#30005;&#23376;&#37038;&#31665;&#22320;&#22336;&#26684;&#24335;&#19981;&#27491;&#30830;&#12290;");
		 $("#register_email").focus();
	   }else if($("#register_phone").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#32852;&#31995;&#30005;&#35805;&#12290;");
		 $("#register_phone").focus();
	   }else if($("#register_time").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#25104;&#31435;&#30340;&#26102;&#38388;&#12290;");
		 $("#register_time").focus();
	   }else if($("#register_orientation").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#24847;&#24895;&#21512;&#20316;&#26041;&#21521;&#12290;");
		 $("#register_orientation").focus();
	   }else if($("#register_products").val()==""){
	     $("#contact-prompt-2").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20027;&#27969;&#20135;&#21697;&#12290;");
		 $("#register_products").focus();
	   }else if($("#contact-select-3").val()==0){
	     $("#contact-prompt-2").html("&#35831;&#36873;&#25321;&#20844;&#21496;&#30340;&#24615;&#36136;&#12290;");
	   }else{ 
	   $(".contact-us-5").fadeOut();
	   $(".contact-us-6").fadeIn();
	   $("#contact-supplier").css("background","url(" + $("#contact_us_img1").val() +") no-repeat center top");
	   $("#contact-prompt-2").html("");
	  }	
  }
	function validateSupplier_02(){
		if($("#register_capital").val()==""){
		 $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#27880;&#20876;&#36164;&#37329;&#12290;");
		 $("#register_capital").focus();
	  }else if($("#register_size").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20154;&#21592;&#35268;&#27169;&#12290;");
		 $("#register_size").focus();
	   }else if($("#register_email_2").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#30005;&#23376;&#37038;&#31665;&#22320;&#22336;&#12290;");
		 $("#register_email_2").focus();
	   }else if(($("#register_email_2").val()!="") && !checkemail($("#register_email_2").val())){
	     $("#contact-prompt-3").html("&#37038;&#31665;&#22320;&#22336;&#26684;&#24335;&#19981;&#27491;&#30830;&#12290;");
		 $("#register_email_2").focus();
	   }else if($("#register_person_2").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#32852;&#31995;&#20154;&#30340;&#22995;&#21517;&#12290;");
		 $("#register_person_2").focus();
	   }else if($("#register_sssets").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#36164;&#20135;&#35268;&#27169;&#12290;");
		 $("#register_sssets").focus();
	   }else if($("#register_position").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#36130;&#21153;&#29366;&#20917;&#12290;");
		 $("#register_position").focus();
	   }else if($("#register_revenue").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#24180;&#24230;&#33829;&#19994;&#25910;&#20837;&#12290;");
		 $("#register_revenue").focus();
	   }else if($("#register_customers").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20027;&#35201;&#23458;&#25143;&#12290;");
		 $("#register_customers").focus();
	   }else if($("#register_production").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20135;&#21697;&#20135;&#33021;&#19982;&#36135;&#26399;&#12290;");
		 $("#register_production").focus();
	   }else if($("#register_prospects").val()==""){
	     $("#contact-prompt-3").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#21457;&#23637;&#21069;&#26223;&#12289;&#35268;&#21010;&#12290;");
		 $("#register_prospects").focus();
	   }else{								  
	   $(".contact-us-6").fadeOut();
	   $(".contact-us-7").fadeIn();
		  $("#contact-supplier").css("background","url(" + $("#contact_us_img3").val() +") no-repeat center top");
		  $("#contact-prompt-3").html("");
	   }	
	}
	function validateSupplier_03(){
		if($("#register_quality").val() == 0){
	 		$("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20135;&#21697;&#36136;&#37327;&#21450;&#20854;&#31649;&#29702;&#20307;&#31995;&#12290;");
	 		$("#register_quality").focus();
	 		return false;
   		}
   		if($("#register_environmental").val() == ""){
	 		$("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20135;&#21697;&#29615;&#20445;&#21450;&#20854;&#31649;&#29702;&#20307;&#31995;&#12290;");
	 		$("#register_environmental").focus();
	 		return false;
   		}
   		if($("#register_certification").val() == ""){
	 		$("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#31038;&#20250;&#36131;&#20219;&#20307;&#31995;&#35748;&#35777;&#24773;&#20917;&#12290;");
	 		$("#register_certification").focus();
	 		return false;
   		}
		var usercode = trim($("#user_input_code2").val())
		var syscode = $("#sys_validate_code2").text()
   		if(!validateCode(usercode,syscode)){
			$("#contact-prompt-4").html(LAG_CON_VALIDATE_CODE_ERROR);
			$("#user_input_code2").focus();
			var radoms = radomCode();
			$("#sys_validate_code2").text(radoms);
			return false;
		}	
		return true
	}

function getSupplierInfo(){
	var supplierinfo = {}
	var register_name = trim($("#register_name").val());	
	var register_address = trim($("#register_address").val());   
	var register_person = trim($("#register_person").val());   
	var register_email = trim($("#register_email").val());
	var register_phone = trim($("#register_phone").val());
	var register_time = trim($("#register_time").val());
	var register_orientation = trim($("#register_orientation").val());
	var register_products= trim($("#register_products").val());
	var corporation_nature = trim($("#contact-select-3").val());	
	var register_capital = trim($("#register_capital").val());
	var register_size = trim($("#register_size").val());
	var register_email_2 = trim($("#register_email_2").val()); 
	var register_person_2 = trim($("#register_person_2").val());
	var register_sssets = trim($("#register_sssets").val());
	var register_position = trim($("#register_position").val());
	var register_revenue = trim($("#register_revenue").val());
	var register_status = trim($("#register_status").val());
	var register_experience = trim($("#register_experience").val());
	var register_customers = trim($("#register_customers").val());
	var register_production= trim($("#register_production").val());
	var register_prospects = trim($("#register_prospects").val());
	var register_license = trim($("#register_license").val());
	var register_intellectual = trim($("#register_intellectual").val());
	var register_technology = trim($("#register_technology").val());
 	var register_quality = trim($("#register_quality").val());
 	var register_service = trim($("#register_service").val());
 	var register_environmental = trim($("#register_environmental").val());
 	var register_certification = trim($("#register_certification").val());
 	var d1="Corporation Name:"+register_name+"<br/>Corporation Registered Address:"+register_address+"<br/>Person to Contact:"+register_person+"<br/>E-mail Address:"+register_email+"<br/>Phone Number:"+register_phone+"<br/>Founding Time:"+register_time+"<br/>Cooperation Orientation:"+register_orientation+"<br/>Mainstream Products:"+register_products+"<br/>Corporation Nature:"+corporation_nature+"<br/>";
 	var d2="Registered Capital:"+register_capital+"<br/>Staff Size:"+register_size+"<br/>Person to Contact:"+register_person_2+"<br/>E-mail Address:"+register_email_2+"<br/>Phone Number(Including Fixed&Mobile):"+register_sssets+"<br/>Financial Position(Asset-liability Ratio&Income) :"+register_position+"<br/>Annual Revenue(Recent 3 Years):"+register_revenue+"<br/> Industry Status:"+register_status+"<br/>Industry Experience:"+register_experience+"<br/>Major Customers(Top 3 by Sales Amount):"+register_customers+"<br/>Product Production Capacity&Delivery:"+register_production+"<br/> Development Prospects:"+register_prospects+"<br/>Export License (For Abroad):"+register_license+"<br/>  Intellectual Property Rights:"+register_intellectual+"<br/>";
 	var d3="Product Technology Management System:"+register_technology+"<br/>Product Quality Management System:"+register_quality+"<br/>Product Service Response System:"+register_service+"<br/>Product Environmental Management System:"+register_environmental+"<br/>Corporate Social Responsibility Certification:"+register_certification;	
 	supplierinfo.mailContent=d1+d2+d3;
 	supplierinfo.subjectName= suplly_tip
 	supplierinfo.email = "dulimin@huawei.com,haozhang.zhanghao@huawei.com";
 	return supplierinfo
}

//send supplier info to huawei end
function basecontactmailSupportsave(params){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl+basemailSupportsave,			  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:params,
			success: function(data){		
				$("#contact-prompt-1").html(LAG_CON_SEND_EMAIL_SUCC);
				clearEmailInfo()
			},
			error: function(){
				$("#contact-prompt-1").html(LAG_CON_SEND_EMAIL_FAIL);
			}
	});			
} 



