var hwsc_url= new Array();
var productNum = -1;
var httpRelativeWebRoot = g_HttpRelativeWebRoot;//(isBeta() == 1) ? "/ucmf" : "/ucmb"; 
var img_con_common = httpRelativeWebRoot + "/groups/public/documents/webasset/img_con_cn_common_jpg.jpg";
var img_con_sup_bg1 = httpRelativeWebRoot + "/groups/public/documents/webasset/img_dev_en_con_sup_01_bg.jpg";
var img_con_sup_bg2 = httpRelativeWebRoot + "/groups/public/documents/webasset/img_dev_en_con_sup_02_bg.jpg";
var img_con_sup_bg3 = httpRelativeWebRoot + "/groups/public/documents/webasset/img_dev_en_con_sup_03_bg.jpg";
var img_con_url = httpRelativeWebRoot + "/groups/public/documents/webasset/img_dev_en_support_0";
function head_click(){
	change_region();
	mobile_phones(); 
	tablets();
	products();
	//wearables();
	service();
	head_close();
    follow_Us();
	//$("#returnTop").returntop();
} 
  
function trim(str){   
	return !str?"":str.replace(/(^\s*)|(\s*$)/g, "");
}
function txt_focus(mythis){
	$(mythis).removeClass("txt-h24");
	$(mythis).removeClass("txt-h24-4");
	$(mythis).addClass("txt-h24-2");
}
function txt_blur(mythis){
	if($(mythis).val()==""){
		$(mythis).removeClass("txt-h24-3");
		$(mythis).removeClass("txt-h24-2");
		$(mythis).addClass("txt-h24");
		$(mythis).addClass("txt-h24-4");
	}else{
		$(mythis).removeClass("txt-h24");
		$(mythis).removeClass("txt-h24-4");
		$(mythis).addClass("txt-h24-3");
	}
}
function txt_else_blur(mythis){
	$(mythis).removeClass("txt-h24-2");
	$(mythis).addClass("txt-h24-4");
}

function change_region(){
	var height, size, maxSize = 0;
	/*$("#region dl").each(function(){
		size = $(this).find("dd").size();
		maxSize =  size > maxSize ? size : maxSize;
	});*/
	for(var i = 0; i < $("#region dl").length; i++){
		size = $("#region dl").eq(i).find("dd").size();
		maxSize =  size > maxSize ? size : maxSize;
	}
	height = maxSize * 18 + 58; 
	$("#top_wrap").css("height", height + "px");
	$("#change_region").click(
		 function(){
			 var value = $("#region").css("display");
			 var wrapValue = $("#top_wrap").css("display");
			 if(wrapValue=="none"){
			 	 $("#top_wrap").css("height", height + "px");
				 $("#top_wrap").slideDown(300);
				 $("#region").fadeIn(300);
				 $("#header_nav").removeClass("header-nav");
				 $("#header_nav").addClass("header-nav-on");
				 $("#change_region img").hide(); 
				  trackPageview("/change-region");
			 }else{
			   if(value=="none"){
			   	   $("#top_wrap").css("height", height + "px");
				   $("#region").fadeIn(300);
				   $("#header_nav").removeClass("header-nav");
				  $("#header_nav").addClass("header-nav-on");
				   $("#change_region img").hide();
			   }else{
				   $("#change_region img").show();
				   $("#header_nav").removeClass("header-nav-on");
				   $("#header_nav").addClass("header-nav");
				   $("#region").fadeOut(300);
				   $("#top_wrap").slideUp(300);
			   }
			} 
		}
	  );
}

function mobile_phones(){
	$("#mobile_phones").click(
	 function(){
	 	 $("#sales_box").hide();
		 $("#tablets_box").hide();
		 $("#products_box").hide();
		 $("#service_box").hide();
		 $("#wearables_box").hide()
		 $("#tablets").children("img").animate( {'top' : '64px' },	300 );
		 $("#products").children("img").animate( {'top' : '64px' },300 );
		 $("#service").children("img").animate( {'top' : '64px' },	300 );
		 $("#wearables").children("img").animate( {'top' : '64px' },	300 );
		 var value = $("#mobile_phones_box").css("display");
		 var wrapvalue = $("#submenu_wrap").css("display");
		 if(wrapvalue=="none"){
			 $("#submenu_wrap").slideDown(300);
				 var help_value = $("#help_triangle").css("display");
				 if(help_value=="none"){
					 $("#mobile_phones").children("img").animate( {'top' : '75px' });
					 $("#help_triangle").css({'display':'none','left':'296px'});
					 setTimeout(function(){$("#help_triangle").show()},400);
				 }else{
					 $("#help_triangle").animate({'left':'296px'},300);
				 }
			 $("#mobile_phones_box").fadeIn(300);
			trackPageview("/mobile-phones");
		 }else{
			 if(value=="none"){
				 var help_value = $("#help_triangle").css("display");
			     if(help_value=="none"){
					$("#mobile_phones").children("img").animate( {'top' : '75px' });
					$("#help_triangle").css({'display':'none','left':'296px'});
					 setTimeout(function(){$("#help_triangle").show()},400);
				}else{
					 $("#mobile_phones").children("img").css( {'display' : 'none','top' : '75px' });
					 setTimeout(function(){$("#mobile_phones").children("img").show()},400);
					$("#help_triangle").animate({'left':'296px'},300);
				}
				$("#mobile_phones_box").fadeIn(300);
				trackPageview("/mobile-phones");
			 }else{
				$("#mobile_phones_box").fadeOut(300); 
				$("#submenu_wrap").slideUp(300); 
				$("#mobile_phones").children("img").css({'display':'block'});
				$("#mobile_phones").children("img").animate( {'top' : '64px' },300 );
				$("#help_triangle").css({'display':'none'});
			 }
		 }
	} 
  );
}


function tablets(){
	$("#tablets").click(
	 function(){
		 $("#mobile_phones_box").hide();
		 $("#products_box").hide();
		 $("#sales_box").hide();
		 $("#service_box").hide();
		 $("#wearables_box").hide()
		 $("#mobile_phones").children("img").animate( {'top' : '64px' },	300 );
		 $("#products").children("img").animate( {'top' : '64px' },	300 );
		 $("#service").children("img").animate( {'top' : '64px' },	300 );
		 $("#wearables").children("img").animate( {'top' : '64px' },	300 );
		 var value = $("#tablets_box").css("display");
		 var wrapvalue = $("#submenu_wrap").css("display");
		 if(wrapvalue=="none"){
			 $("#submenu_wrap").slideDown(300);
				 var help_value = $("#help_triangle").css("display");
				 if(help_value=="none"){
					 $("#tablets").children("img").animate( {'top' : '75px' });
					 $("#help_triangle").css({'display':'none','left':'388px'});
					 setTimeout(function(){$("#help_triangle").show()},400);
				 }else{
					 $("#help_triangle").animate({'left':'388px'},300);
				 }
			 $("#tablets_box").fadeIn(300);
			 trackPageview("/tablets");
		 }else{
			 if(value=="none"){
					 var help_value = $("#help_triangle").css("display");
					 if(help_value=="none"){
						 $("#tablets").children("img").animate( {'top' : '75px' });
						 $("#help_triangle").css({'display':'none','left':'388px'});
					 	 setTimeout(function(){$("#help_triangle").show()},400);
					 }else{
						 $("#tablets").children("img").css( {'display' : 'none','top' : '75px' });
					 	 setTimeout(function(){$("#tablets").children("img").show()},400);
						 $("#help_triangle").animate({'left':'388px'},300);
					 }
				 $("#tablets_box").fadeIn(300);
				 trackPageview("/tablets");
			 }else{
				$("#tablets_box").fadeOut(300); 
				$("#submenu_wrap").slideUp(300);
				$("#tablets").children("img").css({'display':'block'});
				$("#tablets").children("img").animate( {'top' : '64px' },300 );
				$("#help_triangle").css({'display':'none'});
			 }
		 }
	}
  );
}


function products(){
  $("#products").click(
	   function(){
	   	   $("#sales_box").hide();
		   $("#tablets_box").hide();
		   $("#mobile_phones_box").hide();
		   $("#service_box").hide();
		   $("#wearables_box").hide()
		   $("#tablets").children("img").animate( {'top' : '64px' },	300 );
		   $("#mobile_phones").children("img").animate( {'top' : '64px' },	300 );
		   $("#service").children("img").animate( {'top' : '64px' },	300 );
		   $("#wearables").children("img").animate( {'top' : '64px' },	300 );
		   var value = $("#products_box").css("display");
		   var wrapvalue = $("#submenu_wrap").css("display");
		   if(wrapvalue=="none"){
			 $("#submenu_wrap").slideDown(300);
				 var help_value = $("#help_triangle").css("display");
				 if(help_value=="none"){
					 $("#products").children("img").animate( {'top' : '75px' });
					 $("#help_triangle").css({'display':'none','left':'560px'});
					 setTimeout(function(){$("#help_triangle").show()},400);
				 }else{
					 $("#help_triangle").animate({'left':'560px'},300);
				 }
			 $("#products_box").fadeIn(300);
			 trackPageview("/more-products");
		 }else{
			 if(value=="none"){
					 var help_value = $("#help_triangle").css("display");
					 if(help_value=="none"){
						 $("#products").children("img").animate( {'top' : '75px' });
						 $("#help_triangle").css({'display':'none','left':'560px'});
					 	 setTimeout(function(){$("#help_triangle").show()},400);
					 }else{
						 $("#products").children("img").css( {'display' : 'none','top' : '75px' });
					 	 setTimeout(function(){$("#products").children("img").show()},400);
						 $("#help_triangle").animate({'left':'560px'},300);
					 }
				 $("#products_box").fadeIn(300);
				 trackPageview("/more-products");
			 }else{
			    $("#products_box").fadeOut(300); 
				$("#submenu_wrap").slideUp(300);
				$("#products").children("img").css({'display':'block'});
				$("#products").children("img").animate( {'top' : '64px' },300 );
				$("#help_triangle").css({'display':'none'});
			 }
		 } 
	  }
	);
}


function service(){
	$("#service").click(
	 function(){
	 	 $("#sales_box").hide();
		 $("#mobile_phones_box").hide();
		 $("#tablets_box").hide();
		 $("#products_box").hide();
		 $("#wearables_box").hide()
		 $("#tablets").children("img").animate( {'top' : '64px' },	300 );
		 $("#mobile_phones").children("img").animate( {'top' : '64px' },	300 );
		 $("#products").children("img").animate( {'top' : '64px' },300 );
		 $("#wearables").children("img").animate( {'top' : '64px' },	300 );
		 var value = $("#service_box").css("display");
		 var wrapvalue = $("#submenu_wrap").css("display");
		 if(wrapvalue=="none"){
			 $("#submenu_wrap").slideDown(300);
				 var help_value = $("#help_triangle").css("display");
				 if(help_value=="none"){
					 $("#service").children("img").animate( {'top' : '75px' });
					 $("#help_triangle").css({'display':'none','left':'649px'});
					 setTimeout(function(){$("#help_triangle").show()},400);
				 }else{
					 $("#help_triangle").animate({'left':'649px'},300);
				 }
			 $("#service_box").fadeIn(300);
			 trackPageview("/cloud-service");
		 }else{
			 if(value=="none"){
					 var help_value = $("#help_triangle").css("display");
					 if(help_value=="none"){
						 $("#service").children("img").animate( {'top' : '75px' });
						 $("#help_triangle").css({'display':'none','left':'649px'});
					 	 setTimeout(function(){$("#help_triangle").show()},400);
					 }else{
						 $("#service").children("img").css( {'display' : 'none','top' : '75px' });
					 	 setTimeout(function(){$("#service").children("img").show()},400);
						 $("#help_triangle").animate({'left':'649px'},300);
					 }
				 $("#service_box").fadeIn(300);
				 trackPageview("/cloud-service");
			 }else{
				$("#service_box").fadeOut(300); 
				$("#submenu_wrap").slideUp(300); 
				$("#service").children("img").css({'display':'block'});
				$("#service").children("img").animate( {'top' : '64px' },300 );
				$("#help_triangle").css({'display':'none'});
			 }
		 }
	}
  );
}

function wearables(){
	$("#wearables").click(
	 function(){
		 $("#sales_box").hide();
		 $("#mobile_phones_box").hide();
		 $("#tablets_box").hide();
		 $("#products_box").hide();
		 $("#service_box").hide();
		 $("#tablets").children("img").animate( {'top' : '64px' },	300 );
		 $("#mobile_phones").children("img").animate( {'top' : '64px' },	300 );
		 $("#products").children("img").animate( {'top' : '64px' },300 );
		 $("#service").children("img").animate( {'top' : '64px' },	300 );
		 var value = $("#wearables_box").css("display");
		 var wrapvalue = $("#submenu_wrap").css("display");
		 if(wrapvalue=="none"){
			 $("#submenu_wrap").slideDown(300);
				 var help_value = $("#help_triangle").css("display");
				 if(help_value=="none"){
					 $("#wearables").children("img").animate( {'top' : '75px' });
					 $("#help_triangle").css({'display':'none','left':'472px'});
					 setTimeout(function(){$("#help_triangle").show();},400);
				 }else{
					 $("#help_triangle").animate({'left':'472px'},300);
				 }
			 $("#wearables_box").fadeIn(300);
			 trackPageview("/wearables");
		 }else{ 
			 if(value=="none"){
					 var help_value = $("#help_triangle").css("display");
					 if(help_value=="none"){
						 $("#wearables").children("img").animate( {'top' : '75px' });
						 $("#help_triangle").css({'display':'none','left':'472px'});
					 	 setTimeout(function(){$("#help_triangle").show()},400);
					 }else{ 
						 $("#wearables").children("img").css( {'display' : 'none','top' : '75px' });
					 	 setTimeout(function(){$("#wearables").children("img").show()},400);
						 $("#help_triangle").animate({'left':'472px'},300);
					 }
				 $("#wearables_box").fadeIn(300);
				 trackPageview("/wearables");
			 }else{
				$("#wearables_box").fadeOut(300); 
				$("#submenu_wrap").slideUp(300);
				$("#wearables").children("img").css({'display':'block'});
				$("#wearables").children("img").animate( {'top' : '64px' },300 );
				$("#help_triangle").css({'display':'none'});
			 
			 }
		 }
	}
  );
}


function pro_compare(mythis){	
	var imgvalue = $(mythis).parent("li").children("a").children("img").attr("src");
	var productname = $(mythis).parent().attr("id");
	if($(mythis).attr("class")=="a-3"){
	    if($("#compare_product .img-2").size() =="0"){
		   alert(LAG_CON_THAN_4);
		}
	    else{
		  $(mythis).removeClass("a-3");
          $(mythis).addClass("a-2");
		  $("#compare_product .img-2").eq(0).attr("src",imgvalue) ;
		  $("#compare_product .img-2").eq(0).attr("name",productname);
		  $("#compare_product .img-2").eq(0).addClass("img-1");
		  $("#compare_product .img-2").eq(0).removeClass("img-2");
		}
	}else{
		$(mythis).removeClass("a-2");
        $(mythis).addClass("a-3"); 
		$("#compare_product img").each(function(){
			var smallimg = $(this).attr("src");
			if(imgvalue==smallimg){
				$(this).attr("src",compareimg);
				$(this).removeAttr("name");
				$(this).addClass("img-2");
				$(this).removeClass("img-1");
			}
		});
	}
	
}

function mousemove_change_color(parame1,parame2,mycolor){
	$(parame1).each(function(){
		$(this).mousemove(function(){
			$(this).css({"border-color":"#F1655E"});
			$(this).next().children("a").css({"color":"#df1000"});	
		});
		$(this).mouseout(function(){
			$(this).css({"border-color":"#cccccc"});
			$(this).next().children("a").css({"color":mycolor});
		});
	});
	$(parame2).each(function(){
		$(this).mousemove(function(){
			$(this).css({"color":"#df1000"});
			$(this).parent().prev("a").css({"border-color":"#F1655E"});	
		});
		$(this).mouseout(function(){
			$(this).css({"color":mycolor});
			$(this).parent().prev("a").css({"border-color":"#cccccc"});
		});
	});
}

function mousemove_change_color_2(parame1,parame2,mycolor){
	$(parame1).each(function(){
		$(this).mousemove(function(){
			$(this).css({"border-color":"#F1655E"});
			$(this).next().css({"color":"#df1000"});	
		});
		$(this).mouseout(function(){
			$(this).css({"border-color":"#cccccc"});
			$(this).next().css({"color":mycolor});
		});
	});
	$(parame2).each(function(){
		$(this).mousemove(function(){
			$(this).css({"color":"#df1000"});
			$(this).parent().prev("a").css({"border-color":"#F1655E"});	
		});
		$(this).mouseout(function(){
			$(this).css({"color":mycolor});
			$(this).parent().prev("a").css({"border-color":"#cccccc"});
		});
	});
}

function mousemove_change_color2(parame1,parame2,mycolor){
	$(parame1).each(function(){
		$(this).mousemove(function(){
			$(this).parent("a").next("div").children("h2").children("a").css({"color":"#df1000"});	
		});
		$(this).mouseout(function(){
			$(this).parent("a").next("div").children("h2").children("a").css({"color":mycolor});	
		});
	});
	$(parame2).each(function(){
		$(this).mousemove(function(){
			$(this).css({"color":"#df1000"});
		});
		$(this).mouseout(function(){
			$(this).css({"color":mycolor});
		});
	});
}
function mousemove_change_color_03(parame1,parame2,mycolor){
	$(parame1).each(function(index){
        var index = index +1;                        
        $(this).mousemove(function(){
            if(index==1 || index==2 || index==3 || index==4 || index==5){
            	url = img_con_url+index+"_on.jpg"; 	
            }
            $(this).parent().prev().children("a").css({"color":"#df1000"}); 
            $(this).children("img").attr("src",url);
        });
        $(this).mouseout(function(){
        	if(index==1 || index==2 || index==3 || index==4 || index==5){
        		url2 = img_con_url+index+".jpg";
            }    
            $(this).parent().prev().children("a").css({"color":mycolor});
            $(this).children("img").attr("src",url2);
        });
    });
    
    $(parame2).each(function(index){
        var index = index +1;                        
        $(this).mousemove(function(){
           if(index==1 || index==2 || index==3 || index==4 || index==5){
            	url = img_con_url+index+"_on.jpg"; 	
            }             
            $(this).css({"color":"#df1000"});
            $(this).parent().next().children("a").children("img").attr("src",url);
        });
        $(this).mouseout(function(){
           if(index==1 || index==2 || index==3 || index==4 || index==5){
        		url2 = img_con_url+index+".jpg";
            }                
            $(this).css({"color":mycolor});
            $(this).parent().next().children("a").children("img").attr("src",url2);
        });
    });	
}
function mousemove_change_color4(parame1,parame2,mycolor){
	$(parame1).each(function(){
		$(this).mousemove(function(){
			$(this).next("div").children(".p-0").children("a").css({"color":"#df1000"});	
		});
		$(this).mouseout(function(){
			$(this).next("div").children(".p-0").children("a").css({"color":mycolor});	
		});
	});
	$(parame2).each(function(){
		$(this).mousemove(function(){
			$(this).css({"color":"#df1000"});
		});
		$(this).mouseout(function(){
			$(this).css({"color":mycolor});
		});
	});
}


function is_check(mythis){
	if($(mythis).attr("class")=="check-span-1"){
		$(mythis).removeClass("check-span-1");
        $(mythis).addClass("check-span-2");
	}else{
		$(mythis).removeClass("check-span-2");

        $(mythis).addClass("check-span-1");
	}
}

function is_check_02(mythis,addid,delid){
	if($(mythis).attr("class")=="check-span-1"){
		$(mythis).removeClass("check-span-1");
        $(mythis).addClass("check-span-2");
		$(addid).val("1");
		$(delid).val("0");
		$(mythis).prevAll("span").removeClass("check-span-2");
		$(mythis).prevAll("span").addClass("check-span-1");
		$(mythis).nextAll("span").removeClass("check-span-2");
		$(mythis).nextAll("span").addClass("check-span-1");
	}else{
		$(mythis).removeClass("check-span-2");
        $(mythis).addClass("check-span-1");
		$(addid).val("0");
		$(delid).val("1");
	}
}


function is_check_03(mythis,myid){
	if($(mythis).attr("class")=="check-span-1"){
		$(mythis).removeClass("check-span-1");
        $(mythis).addClass("check-span-2");
		$(myid).val("1");
	}else{
		$(mythis).removeClass("check-span-2");
        $(mythis).addClass("check-span-1");
		$(myid).val("0");
	}
}


function is_check_04(mythis){
	if($(mythis).attr("class")=="check-span-1"){
		$(mythis).removeClass("check-span-1");
        $(mythis).addClass("check-span-2");
		$("#Agreement-tips").hide();
	}else{
		$(mythis).removeClass("check-span-2");

        $(mythis).addClass("check-span-1");
		$("#Agreement-tips").show();
	}
}

function changeBigImg(){
	$("#smallImage img").each(function(index){
		$(this).click(function(){
			var imgvalue = $(this).attr("src");
			$("#bigImage").attr("src",imgvalue);
			$(this).parent("a").addClass("a-current");
			$(this).parent("a").parent("li").nextAll("li").children("a").removeClass("a-current");
			$(this).parent("a").parent("li").prevAll("li").children("a").removeClass("a-current");
		});
	});
}



function head_close(){
	$(".banner").click(function(){
		$("#change_region img").show();
		 $("#header_nav").removeClass("header-nav-on");
		 $("#header_nav").addClass("header-nav");
		$("#top_wrap").slideUp(300);
		$("#submenu_wrap").slideUp(300);
		$("#mobile_phones").children("img").animate({"top":"64px"},300);
		$("#tablets").children("img").animate({"top":"64px"},300);
		$("#products").children("img").animate({"top":"64px"},300);
		$("#service").children("img").animate({"top":"64px"},300);
		$("#help_triangle").css({'display':'none'});
	});
	$("article").click(function(){
		$("#change_region img").show();
		 $("#header_nav").removeClass("header-nav-on");
		 $("#header_nav").addClass("header-nav");
		$("#top_wrap").slideUp(300);
		$("#submenu_wrap").slideUp(300);
		$("#mobile_phones").children("img").animate({"top":"64px"},300);
		$("#tablets").children("img").animate({"top":"64px"},300);
		$("#products").children("img").animate({"top":"64px"},300);
		$("#service").children("img").animate({"top":"64px"},300);
		$("#help_triangle").css({'display':'none'});
	});
	$("footer").click(function(){
		$("#change_region img").show();
		 $("#header_nav").removeClass("header-nav-on");
		 $("#header_nav").addClass("header-nav");
		$("#top_wrap").slideUp(300);
		$("#submenu_wrap").slideUp(300);
		$("#mobile_phones").children("img").animate({"top":"64px"},300);
		$("#tablets").children("img").animate({"top":"64px"},300);
		$("#products").children("img").animate({"top":"64px"},300);
		$("#service").children("img").animate({"top":"64px"},300);
		$("#help_triangle").css({'display':'none'});
	});
	$(".header-menu").click(function(){
		$("#change_region img").show();
		 $("#header_nav").removeClass("header-nav-on");
		 $("#header_nav").addClass("header-nav");
		$("#top_wrap").slideUp(300);
	});
	$(".header-nav").click(function(){
		$("#submenu_wrap").slideUp(300);
		$("#mobile_phones").children("img").animate({"top":"64px"},300);
		$("#tablets").children("img").animate({"top":"64px"},300);
		$("#products").children("img").animate({"top":"64px"},300);
		$("#service").children("img").animate({"top":"64px"},300);
		$("#help_triangle").css({'display':'none'});
	});
}


function submit_mouseover(mythis,imgValue){
	$(mythis).attr("src",imgValue);
}
function submit_mouseout(mythis,imgValue){
	$(mythis).attr("src",imgValue);
}
function pointer_mouseover(mythis){
    $(mythis).css("cursor","pointer");  
}

function pointer_mouseoverr(k){
	$(mythis).css("cursor","pointer"); 
}
function compare_nav(){
	var num1 = "0 -1657px";
	var num2 = "0 -1769px";
	var num3 = "0 -1881px";
	var num4 = "-380px 0";
	var num5 = "-380px -112px";
	var onNum1 = "0 -1713px";
	var onNum2 = "0 -1825px";
	var onNum3 = "0 -1937px";
	var onNum4 = "-380px -56px";
	var onNum5 = "-380px -168px";
	$("#compare_nav").children("li").each(function(index){
		$(this).hover( function () {
			var num = index + 1;
			if(num == 1){
				num = onNum1;
			}else if(num == 2){
				num = onNum2;
			}else if(num == 3){
				num = onNum3;
			}else if(num == 4){
				num = onNum4;
			}else if(num == 5){
				num = onNum5;
			}
			$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#df1000"});
		  },
		  function () {
			var num = index + 1;
			if(num == 1){
				num = num1;
			}else if(num == 2){
				num = num2;
			}else if(num == 3){
				num = num3;
			}else if(num == 4){
				num = num4;
			}else if(num == 5){
				num = num5;
			}
			var dispaly = $(this).children("dl").css("display");
			var iscur = $(this).children("dl").children("dd").hasClass("cur");
			if(dispaly == "none" && !iscur){
				$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#636363"});
			}
		  });
		$(this).click(function(){
			var dis = $(this).children("dl").css("display");
			if(dis == "none"){
				for(i=0;i<5;i++){
					j=i+1;
					if(index==i){
						if(j == 1){
							j = onNum1;
						}else if(j == 2){
							j = onNum2;
						}else if(j == 3){
							j = onNum3;
						}else if(j == 4){
							j = onNum4;
						}else if(j == 5){
							j = onNum5;
						}
						$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#df1000"});
					}else{
						if(j == 1){
							j = num1;
						}else if(j == 2){
							j = num2;
						}else if(j == 3){
							j = num3;
						}else if(j == 4){
							j = num4;
						}else if(j == 5){
							j = num5;
						}
						var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
						if(!iscur){
							$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
						}
					}
				}
				$(this).children("dl").css("display","block");
				$(this).prevAll("li").children("dl").css("display","none");
				$(this).nextAll("li").children("dl").css("display","none");
				$(this).children("dl").children("dd").each(function(){
					$(this).mouseover(function(){
						$(this).css({"color":"#636363","background-color":"#f0f0f0"});
					});
					$(this).mouseout(function(){					 
						if($(this).attr("class") != "cur"){
						  $(this).css({"color":"#949494","background-color":"#fdfdfd"});
						}
					});
				});
			}else{
				$(this).children("dl").css("display","none");
			   }
		});
	});
	$("#filter_nav .ul-2").click(function(){
		$("#compare_nav dl").css("display","none");
		for(i=0;i<5;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}else if(j == 4){
				j = num4;
			}else if(j == 5){
				j = num5;
			}
			var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("#filter_nav").nextAll("section").click(function(){
		$("#compare_nav dl").css("display","none");
		for(i=0;i<5;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}else if(j == 4){
				j = num4;
			}else if(j == 5){
				j = num5;
			}
			var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("#filter_nav").prevAll("section").click(function(){
		$("#compare_nav dl").css("display","none");
		for(i=0;i<5;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}else if(j == 4){
				j = num4;
			}else if(j == 5){
				j = num5;
			}
			var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("header").click(function(){
		$("#compare_nav dl").css("display","none");
		for(i=0;i<5;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}else if(j == 4){
				j = num4;
			}else if(j == 5){
				j = num5;
			}
			var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("footer").click(function(){
		$("#compare_nav dl").css("display","none");
		for(i=0;i<5;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}else if(j == 4){
				j = num4;
			}else if(j == 5){
				j = num5;
			}
			var iscur = $("#compare_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#compare_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
}


function mobile_filters(mythis){
	if($(mythis).attr("class")=="cur"){
		$(mythis).removeClass("cur");
		xfilterTool.removeItem($(mythis).parent().parent().attr("id"));
	}else{
		$(mythis).addClass("cur");
		$(mythis).prevAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).nextAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).prevAll("dd").removeClass("cur");
		$(mythis).nextAll("dd").removeClass("cur");
		xfilterTool.selectItem({
			id:$(mythis).parent().parent().attr("id"),
			val:$(mythis).text()
		});
	}
}

function media_device_nav(){
	var num1 = "0 -1052px";
	var num2 = "0 -1164px";	
	var onNum1 = "0 -1108px";
	var onNum2 = "0 -1220px";
	$("#media_device_nav").children("li").each(function(index){
		$(this).hover( function () {
			var num = index + 1;
			if(num == 1){
				num = onNum1;
			}else if(num == 2){
				num = onNum2;
			}
			$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#df1000"});
		  },
		  function () {
			var num = index + 1;
			if(num == 1){
				num = num1;
			}else if(num == 2){
				num = num2;
			}
			var dispaly = $(this).children("dl").css("display");
			var iscur = $(this).children("dl").children("dd").hasClass("cur");
			if(dispaly == "none" && !iscur){
				$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#636363"});
			}
		  });
		$(this).click(function(){
			var dis = $(this).children("dl").css("display");
			if(dis == "none"){
				for(i=0;i<2;i++){
					j=i+1;
					if(index==i){
						if(j == 1){
							j = onNum1;
						}else if(j == 2){
							j = onNum2;
						}
						$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#df1000"});
					}else{
						if(j == 1){
							j = num1;
						}else if(j == 2){
							j = num2;
						}
						var iscur = $("#media_device_nav li").eq(i).children("dl").children("dd").hasClass("cur");
						if(!iscur){
							$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
						}
					}
				}
				$(this).children("dl").css("display","block");
				$(this).prevAll("li").children("dl").css("display","none");
				$(this).nextAll("li").children("dl").css("display","none");
				$(this).children("dl").children("dd").each(function(){
					$(this).mouseover(function(){
						$(this).css({"color":"#636363","background-color":"#f0f0f0"});
					});
					$(this).mouseout(function(){					 
						if($(this).attr("class") != "cur"){
						  $(this).css({"color":"#949494","background-color":"#fdfdfd"});
						}
					});
				});
			}else{
				$(this).children("dl").css("display","none");
			   }
		});
	});
	$("#media_device_filter_nav").nextAll("section").click(function(){
		$("#media_device_nav dl").css("display","none");
		for(i=0;i<2;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}
			var iscur = $("#media_device_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});			
			}
		}
	});
	$("#media_device_filter_nav").prevAll("section").click(function(){
		$("#media_device_nav dl").css("display","none");
		for(i=0;i<2;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}
			var iscur = $("#media_device_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("header").click(function(){
		$("#media_device_nav dl").css("display","none");
		for(i=0;i<2;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}
			var iscur = $("#media_device_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("footer").click(function(){
		$("#media_device_nav dl").css("display","none");
		for(i=0;i<2;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}
			var iscur = $("#media_device_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#media_device_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
}


function media_device_filters(mythis){
	if($(mythis).attr("class")=="cur"){
		$(mythis).removeClass("cur");
	}else{
		$(mythis).addClass("cur");
		$(mythis).prevAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).nextAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).prevAll("dd").removeClass("cur");
		$(mythis).nextAll("dd").removeClass("cur");
	}
}
function getSTBFilterParm(){
	var transmission = $("#transmission_standard").find(".cur a").text();
	var resolution = $("#resolution").find(".cur a").text();
	var parms = "";
	if(transmission == "" && resolution == ""){
		return "";
	}else{
		if(transmission != ""){
			parms = "'structured_field_56':'[" + trim(transmission).replace(/\s/g,"") + "]'," + parms;
		}
		if(resolution != ""){
			parms = "'structured_field_57':'[" + trim(resolution) + "]'," + parms;
		}
		parms = parms +"'xWebsites':'consumercn',"
	return parms;
	}
}
function m2m_solutions_nav(){
	var num1 = "0 -1276px";
	var num2 = "0 -1388px";
	var num3 = "0 -1500px";
	var onNum1 = "0 -1332px";
	var onNum2 = "0 -1444px";
	var onNum3 = "0 -1556px";
	$("#m2m_solutions_nav").children("li").each(function(index){
		$(this).hover( function () {
			var num = index + 1;
			if(num == 1){
				num = onNum1;
			}else if(num == 2){
				num = onNum2;
			}else if(num == 3){
				num = onNum3;
			}
			$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#df1000"});
		  },
		  function () {
			var num = index + 1;
			if(num == 1){
				num = num1;
			}else if(num == 2){
				num = num2;
			}else if(num == 3){
				num = num3;
			}
			var dispaly = $(this).children("dl").css("display"); 
			var iscur = $(this).children("dl").children("dd").hasClass("cur");
			if(dispaly == "none" && !iscur){   
				$(this).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+num,"color":"#636363"});
			}
		  });
		$(this).click(function(){
			var dis = $(this).children("dl").css("display");
			if(dis == "none"){
				for(i=0;i<3;i++){
					j=i+1;
					if(index==i){
						if(j == 1){
							j = onNum1;
						}else if(j == 2){
							j = onNum2;
						}else if(j == 3){
							j = onNum3;
						}
						$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#df1000"});
					}else{
						if(j == 1){
							j = num1;
						}else if(j == 2){
							j = num2;
						}else if(j == 3){
							j = num3;
						}else if(j == 4){
							j = num4;
						}else if(j == 5){
							j = num5;
						}
						var iscur = $("#m2m_solutions_nav li").eq(i).children("dl").children("dd").hasClass("cur");
						if(!iscur){
							$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
						}
					}
				}
				$(this).children("dl").css("display","block");
				$(this).prevAll("li").children("dl").css("display","none");
				$(this).nextAll("li").children("dl").css("display","none");
				$(this).children("dl").children("dd").each(function(){
					$(this).mouseover(function(){
						$(this).css({"color":"#636363","background-color":"#f0f0f0"});
					});
					$(this).mouseout(function(){					 
						if($(this).attr("class") != "cur"){
						  $(this).css({"color":"#949494","background-color":"#fdfdfd"});
						}
					});
				});
			}else{
				$(this).children("dl").css("display","none");
			   }
		});
	});
	$("#m2m_solutions_filter_nav").nextAll("section").click(function(){
		$("#m2m_solutions_nav dl").css("display","none");
		for(i=0;i<3;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}
			var iscur = $("#m2m_solutions_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("#m2m_solutions_filter_nav").prevAll("section").click(function(){
		$("#m2m_solutions_nav dl").css("display","none");
		for(i=0;i<3;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}
			var iscur = $("#m2m_solutions_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("header").click(function(){
		$("#m2m_solutions_nav dl").css("display","none");

		for(i=0;i<3;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}
			var iscur = $("#m2m_solutions_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
	$("footer").click(function(){
		$("#m2m_solutions_nav dl").css("display","none");
		for(i=0;i<3;i++){
			j=i+1;
			if(j == 1){
				j = num1;
			}else if(j == 2){
				j = num2;
			}else if(j == 3){
				j = num3;
			}
			var iscur = $("#m2m_solutions_nav li").eq(i).children("dl").children("dd").hasClass("cur");
			if(!iscur){
				$("#m2m_solutions_nav li").eq(i).css({"background":"url(" + $("#bg_common_1").val() +") no-repeat "+j,"color":"#636363"});
			}
		}
	});
}


function m2m_solutions_filters(mythis){
	if($(mythis).attr("class")=="cur"){
		$(mythis).removeClass("cur");
	}else{
		$(mythis).addClass("cur");
		$(mythis).prevAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).nextAll("dd").css({"color":"#949494","background-color":"#fdfdfd"});
		$(mythis).prevAll("dd").removeClass("cur");
		$(mythis).nextAll("dd").removeClass("cur");
	}
}


function coverStringLength(pram){
	var myParam=pram;
	if(pram.length > 340){
		for(var i = 0 ; i < 20 ;i++){
			if(pram.substring(340 + i,341 + i) == ' '){
				myParam = pram.substring(0,340 + i)+'...';
			}
		}
	}
	return myParam;
}


function changeAlpha(){
	var timoutid;
	var timeInid;
	$(".index-recommend li").each(function(i){
	   $(this).mouseover(function(){
			var liNode = $(this);
		     timoutid = setTimeout(function(){							  
			 liNode.children("a").children("img").fadeTo(300, 1);
		     liNode.nextAll("li").children("a").children("img").fadeTo(300, 0.7);
		     liNode.prevAll("li").children("a").children("img").fadeTo(300, 0.7);						  
			},300);
		}).mouseout(function(){
			clearTimeout(timoutid);	
		});
	   
	    $(this).mouseout(function(){
			var liNode = $(this);
			timeInid = setTimeout(function(){
				liNode.children("a").children("img").fadeTo(300, 1);
		   		liNode.nextAll("li").children("a").children("img").fadeTo(300, 1);
		   		liNode.prevAll("li").children("a").children("img").fadeTo(300, 1);						   
			},300);
		}).mouseover(function(){
			clearTimeout(timeInid);	
		});
		
	});

}

function follow_Us(){}
(function ($) {
$.fn.extend({
Scroll: function (opt, callback) {
var _page = $(opt.page);
var _pageleft = $(_page.children(".prev"));
var _pageright = $(_page.children(".next"));;
var timerID;
var _this = this.eq(0).find("ul").eq(0);
var _thisPage = _page.eq(0).find("div").eq(1);
var liSize = _this.find("li").size(); 
speed = opt.speed ? parseInt(opt.speed, 10) : 500;
timer = opt.timer ? parseInt(opt.timer, 10) : 3000;
var pageSpanNum = Math.ceil(liSize/5);
  for(i=1; i<= pageSpanNum; i++){
	  if(i==1){
	  	_thisPage.append("<span class='a-2'></span>");
	  }else{
		_thisPage.append("<span class='a-1'></span>");  
	  }
  }
	_thisPage.children("span").each(function(index){
	$(this).click(function(){
		var scrollwidth = 0 - (1000 * index);
		$(this).removeClass("a-1");
		$(this).addClass("a-2");
		$(this).prevAll("span").removeClass("a-2");
		$(this).nextAll("span").removeClass("a-2");
		$(this).prevAll("span").addClass("a-1");
		$(this).nextAll("span").addClass("a-1");
		if (!_this.is(":animated")) {
			_this.animate({left: scrollwidth}, speed, function () {});
		}
	});
});
var scrollLeft = function () {
	if (!_thisPage.is(":animated")) {
		var spanSize = _thisPage.children("span").size();
		var pageLeftWidth = _thisPage.css("left").replace("px","");
		var scrollWidth = parseInt(pageLeftWidth , 10) + (-72);
		var maxlength = -((Math.ceil(spanSize/4))*72);
		if(maxlength != scrollWidth){
		 _thisPage.animate({left: scrollWidth}, speed, function () {});
		}
	}
}
var scrollRight = function () {
	if (!_thisPage.is(":animated")) {
		var pageLeftWidth = _thisPage.css("left").replace("px","");
		var scrollWidth = parseInt(pageLeftWidth , 10) + (72);
		if(scrollWidth != 72){
			_thisPage.animate({left: scrollWidth}, speed, function () {});
		}
	}
} 
_pageleft.click(scrollRight);
_pageright.click(scrollLeft);
}
})

$.fn.extend({
Scrolltime: function (opt, callback) {
var _page = $(opt.page);
var _pageleft = $(_page.children(".prev"));
var _pageright = $(_page.children(".next"));;
var timerID;
var _this = this.eq(0).find("ul").eq(0);
var _thisPage = _page.eq(0).find("div").eq(1);
var liSize = _this.find("li").size(); 
speed = opt.speed ? parseInt(opt.speed, 10) : 500;
timer = opt.timer ? parseInt(opt.timer, 10) : 3000; 
var pageSpanNum = Math.ceil(liSize/5);
  for(i=1; i<= pageSpanNum; i++){
	  if(i==1){
	  	_thisPage.append("<span class='a-2'></span>");
	  }else{
		_thisPage.append("<span class='a-1'></span>");  
	  }
  }
	_thisPage.children("span").each(function(index){
	$(this).click(function(){
		var scrollwidth = 0 - (950 * index);
		$(this).removeClass("a-1");
		$(this).addClass("a-2");
		$(this).prevAll("span").removeClass("a-2");
		$(this).nextAll("span").removeClass("a-2");
		$(this).prevAll("span").addClass("a-1");
		$(this).nextAll("span").addClass("a-1");
		if (!_this.is(":animated")) {
			_this.animate({left: scrollwidth}, speed, function () {});
		}
	});
});

var scrollLeft = function () {
	if (!_thisPage.is(":animated")) {
		var spanSize = _thisPage.children("span").size();
		var pageLeftWidth = _thisPage.css("left").replace("px","");
		var scrollWidth = parseInt(pageLeftWidth , 10) + (-72);
		var maxlength = -((Math.ceil(spanSize/4))*72);
		if(maxlength != scrollWidth){
		 _thisPage.animate({left: scrollWidth}, speed, function () {});
		}
	}
}
var scrollRight = function () {
	if (!_thisPage.is(":animated")) {
		var pageLeftWidth = _thisPage.css("left").replace("px","");
		var scrollWidth = parseInt(pageLeftWidth , 10) + (72);
		if(scrollWidth != 72){
			_thisPage.animate({left: scrollWidth}, speed, function () {});
		}
	}
} 

_pageleft.click(scrollRight);
_pageright.click(scrollLeft);
}


})

})(jQuery);

(function(a) {
    a.fn.extend({
        returntop: function() {
			$("#returnTop").click(function() {
					$("html, body").animate({ scrollTop: 0 }, 120);
			}),
			$backToTopFun = function() {
				var st = $(document).scrollTop(), winh = $(window).height();
				(st > 0)? $("#returnTop").show(): $("#returnTop").hide();
				if (!window.XMLHttpRequest) {
					$("#returnTop").css("top", st + winh - 166);
				}
			};
			$(window).bind("scroll", $backToTopFun);
        }
    })
})(jQuery);


function loadImage(url, callback) {
    var img = new Image();
     img.src = url;
    if (img.complete) { 
         callback.call(img);
        return;
     }
     img.onload = function () { 
         callback.call(img);
     };
};


var imgReady = (function () {
	var list = [], intervalId = null,
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},
	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};
	return function (url, ready, load, error) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();
		    img.src = url;
		if (img.complete) {
			ready.call(img);
			load && load.call(img);
			return;
		};	
		width = img.width;
		height = img.height;
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height ||newWidth * newHeight > 1024) {
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
	
		img.onload = function () {
			!onready.end && onready();
			load && load.call(img);
			img = img.onload = img.onerror = null;
		};
		if (!onready.end) {
			list.push(onready);
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();


(function(a) {
    a.fn.extend({
        autoHeight: function() {
			var max_ul = $("#auto_height .ul-2").size();
			var listArr = new Array();
			var h2Arr = new Array();
			var max_height = 0;
			var h2_max_height = 0;
			for(j=0;j<19;j++){
				for(i=0; i < max_ul; i++){
					listArr[i] = $("#auto_height .ul-2").eq(i).children("li").eq(j).height();
					if(j==0){
						h2Arr[i] = $("#auto_height .ul-2").eq(i).children("li").eq(j).children("h2").height();
					}
				}
				if(j==0){
					h2_max_height = Math.max.apply(null,h2Arr);
					for(i=0; i < max_ul; i++){
						$("#auto_height .ul-2").eq(i).children("li").eq(0).children("h2").height(h2_max_height)
					}
				}
				max_height = Math.max.apply(null,listArr);
				$("#auto_height").children("ul").eq(0).children("li").eq(j).height(max_height);
				$("#auto_height").children("ul").eq(1).children("li").eq(j).height(max_height);
				$("#auto_height").children("ul").eq(2).children("li").eq(j).height(max_height);
				$("#auto_height").children("ul").eq(3).children("li").eq(j).height(max_height);
				$("#auto_height").children("ul").eq(4).children("li").eq(j).height(max_height);
				listArr.splice(0,listArr.length);  
			}
			$autoHeightFun = function() {
				var max_ul = $("#auto_height .ul-2").size();
				var listArr = new Array();
				var h2Arr = new Array();
				var max_height = 0;
				var h2_max_height = 0;
				for(j=0;j<19;j++){
					for(i=0; i < max_ul; i++){
						listArr[i] = $("#auto_height .ul-2").eq(i).children("li").eq(j).height();
						if(j==0){
							h2Arr[i] = $("#auto_height .ul-2").eq(i).children("li").eq(j).children("h2").height();
						}
					}
					if(j==0){
						h2_max_height = Math.max.apply(null,h2Arr);
						for(i=0; i < max_ul; i++){
							$("#auto_height .ul-2").eq(i).children("li").eq(0).children("h2").height(h2_max_height)
						}
					}
					max_height = Math.max.apply(null,listArr);
					$("#auto_height").children("ul").eq(0).children("li").eq(j).height(max_height);
					$("#auto_height").children("ul").eq(1).children("li").eq(j).height(max_height);
					$("#auto_height").children("ul").eq(2).children("li").eq(j).height(max_height);
					$("#auto_height").children("ul").eq(3).children("li").eq(j).height(max_height);
					$("#auto_height").children("ul").eq(4).children("li").eq(j).height(max_height);
					listArr.splice(0,listArr.length);  
				}
			};
			$("#auto_height").bind("change", $autoHeightFun);
        }
    })
})(jQuery);


(function(a) {
    a.fn.extend({
        pro_autoHeight: function() {
			var max_li = $("#product_list li").size();
			var listArr = new Array();
			var listArr_1 = new Array();
			var listArr_2 = new Array();	
			var listArr_3 = new Array();
			for(i=0; i < max_li; i++){
				listArr[i] = $("#product_list li").eq(i).children("h2").height();
			}
			for(i=0; i<4; i++){
				listArr_1[i] = listArr[i];
				listArr_2[i] = listArr[i+4];
				listArr_3[i] = listArr[i+8];
			}
			for(i=0; i < max_li; i++){
				if( i < 4 ){
					$("#product_list li").eq(i).children("h2").height(Math.max.apply(null,listArr_1));
				}
				if(3 < i && i< 8 ){
					$("#product_list li").eq(i).children("h2").height(Math.max.apply(null,listArr_2));
				}
				if(7 < i && i< 12 ){
					$("#product_list li").eq(i).children("h2").height(Math.max.apply(null,listArr_3));
				}
			}
			if(max_li > 4){
				var bg_height = $("#product_list li").eq(0).height()+60;
				$("#product_list").css("background-position","0 "+bg_height+"px");
				var bg_height2 = $("#product_list li").eq(4).height()+60+bg_height;
				$("#product_list").parent("div").css("background-position","0 "+bg_height2+"px");
			}else{
				var bg_height = $("#product_list li").eq(0).height()+60;
				$("#product_list").css("background-position","0 "+bg_height+"px");
			}
        }
    })
})(jQuery);
 

function changeAlpha_02(){
	var timoutid;
	var timeInid;
	$(".support-bottom-left-ul li").each(function(){
	   $(this).mouseover(function(){
			var liNode = $(this);
		   timoutid = setTimeout(function(){							  
			 liNode.children("a").children("img").fadeTo(300, 1);
		     liNode.nextAll("li").children("a").children("img").fadeTo(300, 0.7);
		     liNode.prevAll("li").children("a").children("img").fadeTo(300, 0.7);						  
			},300);
		}).mouseout(function(){
			clearTimeout(timoutid);	
		});
	   
	    $(this).mouseout(function(){
			var liNode = $(this);
			timeInid = setTimeout(function(){
				liNode.children("a").children("img").fadeTo(300, 1);
		   		liNode.nextAll("li").children("a").children("img").fadeTo(300, 1);
		   		liNode.prevAll("li").children("a").children("img").fadeTo(300, 1);						   
			},300);
		}).mouseover(function(){
			clearTimeout(timeInid);	
		});
		
	});

}


function contact_Us_fun(){

$("#send_email").click( function (){
	  $(".pro-subject").hide()
	  var value2 = $(".contact-us-2").css("display");
	  var value = $("#contact-supplier").css("display");
	  var value11 = $(".contact-us-11").css("display");
	  if(value2 == "block"){
		$(".contact-us-2").slideUp();	
		$(".contact-us-1").css("border-bottom","1px solid #EBEBEB");
	  }else{	  	  
	  	$(".contact-us-2").slideDown("normal",function(){$(".pro-subject").show()});	
		$(".contact-us-1").css("border-bottom","none");
	  }
	  if(value == "block"){
		$("#contact-supplier").fadeOut();	
	  }
	  if(value11 == "block"){
		$(".contact-us-11").fadeOut();	
	  }	
  });
 

  $("#fill_register").click( function (){
  	  $(".pro-supply").hide()
	  var value2 = $(".contact-us-2").css("display");
	  var value = $("#contact-supplier").css("display");
	  var value11 = $(".contact-us-11").css("display"); 
	  if(value == "block"){
		$("#contact-supplier").slideUp();	
		$(".contact-us-4").css("border-bottom","1px solid #EBEBEB");
	  }else{
		$("#contact-supplier").slideDown("normal",function(){$(".pro-supply").show()});
		$(".contact-us-4").css("border-bottom","none");
	  }
	  if(value2 == "block"){
		$(".contact-us-2").fadeOut();	
	  }
	  if(value11 == "block"){
		$(".contact-us-11").fadeOut();	
	  }
	
  });

    $("#give_feedback").click( function (){
    $(".pro-feedback").hide()
	  var value2 = $(".contact-us-2").css("display");
	  var value = $("#contact-supplier").css("display");
	  var value11 = $(".contact-us-11").css("display");
	  if(value11 == "block"){
		$(".contact-us-11").slideUp();
		$(".contact-us-10").css("border-bottom","1px solid #EBEBEB");
	  }else{
		$(".contact-us-11").slideDown("normal",function(){$(".pro-feedback").show()});	
		$(".contact-us-10").css("border-bottom","none");
	  }
	  if(value2 == "block"){
		$(".contact-us-2").fadeOut();	
	  }
	  if(value == "block"){
		$("#contact-supplier").fadeOut();	
	  }				  
	
  });

  $("#Supplier_01_next").click( function (){						  
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
	   $("#contact-supplier").css("background","url(" + img_con_sup_bg2 + ") no-repeat center top");
	   $("#contact-prompt-2").html("");
	  }							  
  });
  $("#Supplier_02_pre").click( function (){
	  $(".contact-us-6").fadeOut();
	  $(".contact-us-5").fadeIn();
	  $("#contact-supplier").css("background","url("+img_con_sup_bg1+") no-repeat center top");
  });
  $("#Supplier_02_next").click( function (){
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
		  $("#contact-supplier").css("background","url(" + img_con_sup_bg3 + ") no-repeat center top");
		  $("#contact-prompt-3").html("");
	   }
  });
  $("#Supplier_03_pre").click( function (){
	  $(".contact-us-7").fadeOut();
	  $(".contact-us-6").fadeIn();
	  $("#contact-supplier").css("background","url(" + img_con_sup_bg2 + ") no-repeat center top");
  });
  

  
}

function my_account_fun(){
  $("#myaccount-select-1").selectbox("","selectbox-5");
  $("#myaccount-select-2").selectbox("","selectbox-5");
  $("#myaccount-select-birth-1").selectbox("","selectbox-6");
  $("#myaccount-select-birth-2").selectbox("","selectbox-6");
  $("#myaccount-select-birth-3").selectbox("","selectbox-6");
  $("#change_password").click( function (){
	  var value = $(".myaccount-password").css("display");
	  if(value == "block"){
		$(".myaccount-password").slideUp();
		$(".myaccount-detail").css("border-bottom","1px solid #EBEBEB");
	  }else{
		$(".myaccount-password").slideDown();	
		$(".myaccount-detail").css("border-bottom","none");
	  }
	
  });
}

function kong(){}

function award_height_auto(){
	var total = $(".press-awards-content .ul-01 .li").children("h2").length;
	if(total > 2){
      gao = $(".press-awards-content .ul-01 .li").eq(0).children("h2").height();
	  for(i=0;i<4;i++){
		if($(".press-awards-content .ul-01 .li").eq(i).children("h2").height() > gao){
		  gao = $(".press-awards-content .ul-01 .li").eq(i).children("h2").height();
		}
	  }
	  for(i=0;i<4;i++){
		$(".press-awards-content .ul-01 .li").eq(i).children("h2").height(gao);
	  } 
	}
	if(total > 5){
      gao = $(".press-awards-content .ul-01 .li").eq(4).children("h2").height();
	  for(i=4;i<8;i++){
		if($(".press-awards-content .ul-01 .li").eq(i).children("h2").height() > gao){
		  gao = $(".press-awards-content .ul-01 .li").eq(i).children("h2").height();
		}
	  }
	  for(i=4;i<8;i++){
		$(".press-awards-content .ul-01 .li").eq(i).children("h2").height(gao);
	  } 
	}
	if(total > 9){
      gao = $(".press-awards-content .ul-01 .li").eq(8).children("h2").height();
	  for(i=8;i<12;i++){
		if($(".press-awards-content .ul-01 .li").eq(i).children("h2").height() > gao){
		  gao = $(".press-awards-content .ul-01 .li").eq(i).children("h2").height();
		}
	  }
	  for(i=8;i<12;i++){
		$(".press-awards-content .ul-01 .li").eq(i).children("h2").height(gao);
	  } 
	}
	if(total > 13){
      gao = $(".press-awards-content .ul-01 .li").eq(12).children("h2").height();
	  for(i=12;i<16;i++){
		if($(".press-awards-content .ul-01 .li").eq(i).children("h2").height() > gao){
		  gao = $(".press-awards-content .ul-01 .li").eq(i).children("h2").height();
		}
	  }
	  for(i=12;i<16;i++){
		$(".press-awards-content .ul-01 .li").eq(i).children("h2").height(gao);
	  } 
	}
	
  
}

(function ($) {
$.fn.extend({
m2m_Scroll: function (opt, callback) {
if (!opt) var opt = {};
var _page = $(opt.page);
var timerID;
var _this = this.eq(0).find("ul").eq(0);
var _thisPage = this.find(".img_test_02").eq(0);
var liSize = _this.find("li").size(); 
speed = opt.speed ? parseInt(opt.speed, 10) : 500; 
timer = opt.timer ? parseInt(opt.timer, 10) : 3000;
_this.children("li").eq(0).show();
var pageSpanNum = Math.ceil(liSize);
  for(i=1; i<= pageSpanNum; i++){
	  if(i==1){
	  	_thisPage.append("<span class='a-112'></span>");
	  }else{
		_thisPage.append("<span class='a-11'></span>");  
	  }
  }
	_thisPage.children("span").each(function(index){
	$(this).click(function(){
		$(this).removeClass("a-11");
		$(this).addClass("a-112");
		$(this).prevAll("span").removeClass("a-112");
		$(this).nextAll("span").removeClass("a-112");
		$(this).prevAll("span").addClass("a-11");
		$(this).nextAll("span").addClass("a-11");
		_this.children("li").eq(index).prevAll("li").hide();
		_this.children("li").eq(index).nextAll("li").hide();
		_this.children("li").eq(index).fadeIn();

	});
});
function autoChange(){
  	var index_on = _thisPage.children("span").index($('.a-112')[0]);
	index_next = index_on + 1;
	if(index_next == liSize){
		index_next = 0;
	}
	_thisPage.children("span").eq(index_next).removeClass("a-11");
	_thisPage.children("span").eq(index_next).addClass("a-112");
	_thisPage.children("span").eq(index_next).prevAll("span").removeClass("a-112");
	_thisPage.children("span").eq(index_next).nextAll("span").removeClass("a-112");
	_thisPage.children("span").eq(index_next).prevAll("span").addClass("a-11");
	_thisPage.children("span").eq(index_next).nextAll("span").addClass("a-11");
	_this.children("li").eq(index_next).prevAll("li").hide();
	_this.children("li").eq(index_next).nextAll("li").hide();
	_this.children("li").eq(index_next).fadeIn();
};

	h=setInterval(autoChange,timer);
	$("#img_test-1").hover(function () {
		clearInterval(h);
	},function () {
		h=setInterval(autoChange,timer)
	});

}
})
})(jQuery);

function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
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
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
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
function highlightSearchTerms(searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag)
{
  if (treatAsPhrase) {
    searchArray = [searchText];
  } else {
    searchArray = searchText.split(" ");
  }
  if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
    }
    return false;
  }
  
  var bodyText = document.getElementById('press-news-search').innerHTML;
  for (var i = 0; i < searchArray.length; i++) {
    bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
  }
  
  document.getElementById('press-news-search').innerHTML = bodyText;
  return true;
}

function unlock_agreement(x){
  $(".unlock-agreement-btn").click(function(){
	var value = $("#Agreement-tips").css("display");
	if(value == "block"){
	   alert("&#35831;&#25509;&#21463;&#35299;&#38145;&#21327;&#35758;");
	}else{
		location.href = x;
	}
    
  })
}


	
function cheak_send_a_email(){
  with(document.send_email_form){
   if(subject.value == 0){
	 $("#contact-prompt-1").html("&#35831;&#36873;&#25321;&#20135;&#21697;&#20998;&#31867;&#12290;");
	 return false;
   }
   if(category.value == 0){
	 $("#contact-prompt-1").html("&#35831;&#36873;&#25321;&#20135;&#21697;&#23376;&#20998;&#31867;&#12290;");
	 return false;
   }
   if(question.value == ""){
	 $("#contact-prompt-1").html("&#35831;&#36755;&#20837;&#24744;&#30340;&#38382;&#39064;&#12290;");
	 $("#question").focus();
	 return false;
   }
   if(email.value == ""){
	 $("#contact-prompt-1").html();
	 $("#contact-prompt-1").html("&#35831;&#36755;&#20837;&#30005;&#23376;&#37038;&#31665;&#22320;&#22336;&#12290;");
	 $("#email").focus();
	 return false;
   }else if(!checkemail(email.value)){
	   $("#contact-prompt-1").html("&#37038;&#31665;&#22320;&#22336;&#26684;&#24335;&#19981;&#27491;&#30830;&#12290;");
	   $("#email").focus();
	   return false;
	}
	if(national.value == 0){
	 $("#contact-prompt-1").html("&#35831;&#36873;&#25321;&#22269;&#23478;&#25110;&#22320;&#21306;&#12290;");
	 return false;
   }
	if(model.value == ""){
	 $("#contact-prompt-1").html("&#35831;&#36755;&#20837;&#20135;&#21697;&#22411;&#21495;&#12290;");
	 $("#model").focus();
	 return false;
   }
   if(purchase_date.value == ""){
	 $("#contact-prompt-1").html("&#35831;&#36755;&#20837;&#36141;&#20080;&#26085;&#26399;&#12290;");
	 $("#purchase_date").focus();
	 return false;
   }
   if(question.value == ""){
	 $("#contact-prompt-1").html("Please enter a model.");
	 $("#question").focus();
	 return false;
   }
	
  }
  
}
function cheak_send_register_form(){
  with(document.send_register_form){
   if(register_quality.value == 0){
	 $("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20135;&#21697;&#36136;&#37327;&#21450;&#20854;&#31649;&#29702;&#20307;&#31995;&#12290;");
	 $("#register_quality").focus();
	 return false;
   }
   if(register_environmental.value == ""){
	 $("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#20135;&#21697;&#29615;&#20445;&#21450;&#20854;&#31649;&#29702;&#20307;&#31995;&#12290;");
	 $("#register_environmental").focus();
	 return false;
   }
   if(register_certification.value == ""){
	 $("#contact-prompt-4").html("&#35831;&#36755;&#20837;&#20844;&#21496;&#30340;&#31038;&#20250;&#36131;&#20219;&#20307;&#31995;&#35748;&#35777;&#24773;&#20917;&#12290;");
	 $("#register_certification").focus();
	 return false;
   }
   
  }
  return true;
}
function check_contact_send_feedback(){
  with(document.contact_send_feedback){
   if(feedback_question.value == 0){
	 $("#contact-prompt-5").html("&#35831;&#36755;&#20837;&#24744;&#30340;&#38382;&#39064;&#12290;");
	 $("#feedback_question").focus();
	 return false;
   }
   if(feedback_email.value == ""){
	 $("#contact-prompt-5").html("&#35831;&#36755;&#20837;&#24744;&#30340;&#30005;&#23376;&#37038;&#31665;&#22320;&#22336;&#12290;");
	 $("#feedback_email").focus();
	 return false;
   }else if(!checkemail(feedback_email.value)){
	   $("#contact-prompt-5").html("&#37038;&#31665;&#22320;&#22336;&#26684;&#24335;&#19981;&#27491;&#30830;&#12290;");
	   $("#feedback_email").focus();
	   return false;
	}
   
  }
  return true;
}

function checkemail(email)
{
var pattern_cn = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
if(pattern_cn.test(email)) return true;
return false;
}
$(document).ready(function(){
	$("#bigImage").attr("src",$("#smallImage img").first().attr("src"));
	changeBigImg();
	
	$('.buy_now').click(function(){
		if(!$(this).find('p').is(':animated')){
			$(this).find('p').slideToggle(250);
			$(this).addClass("buy_now_ie")
		}
	});
	$('.buy_now').mouseleave(function(){
		$(this).find('p').slideUp(250);
	});
});

function check_service_inquiry(){
  with(document.service_inquiry){
   if(service_rate.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#30005;&#35805;&#21495;&#30721;&#25110;SN&#25110;IMEI&#12290;");
	 $("#service_rate").focus();
	 return false;
   }
    if(service_code.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#39564;&#35777;&#30721;&#12290;");
	 $("#service_code").focus();
	 return false;
   }
  }
  return true;
}

function check_service_remind(){
  with(document.service_remind){
   if(remind_name.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#22995;&#21517;&#12290;");
	 $("#remind_name").focus();
	 return false;
   }
   if(remind_phone.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#32852;&#31995;&#30005;&#35805;&#12290;");
	 $("#remind_phone").focus();
	 return false;
   }
   if(serviodel.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#36865;&#20462;&#22411;&#21495;&#12290;");
	 return false;
   }
   if(remind_repair.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#27491;&#30830;&#30340;&#32500;&#20462;&#21830;&#21517;&#31216;&#12290;");
	 $("#remind_repair").focus();
	 return false;
   }
   if(remind_tel.value == 0){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#27491;&#30830;&#30340;&#32500;&#20462;&#21830;&#30005;&#35805;&#12290;");
	 $("#remind_tel").focus();
	 return false;
   }
  }
  return true;
}

//<div> remind
function check_service_remind1(){
   if(trim($("#remind_name").val()) == ""){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#22995;&#21517;&#12290;");
	 $("#remind_name").focus();
	 return false;
   }
   if(trim($("#remind_phone").val()) == ""){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#32852;&#31995;&#30005;&#35805;&#12290;");
	 $("#remind_phone").focus();
	 return false;
   }
  	if(trim($("#unlock-select-1_input").val()) == ""){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#36865;&#20462;&#22411;&#21495;&#12290;");
	 $("#unlock-select-1_input").focus();
	 return false;
   }
   if(trim($("#remind_repair").val()) == ""){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#27491;&#30830;&#30340;&#32500;&#20462;&#21830;&#21517;&#31216;&#12290;");
	 $("#remind_repair").focus();
	 return false;
   }
   if(trim($("#remind_tel").val()) == ""){
	 $("#service-prompt-1").html("&#35831;&#36755;&#20837;&#27491;&#30830;&#30340;&#32500;&#20462;&#21830;&#30005;&#35805;&#12290;");
	 $("#remind_tel").focus();
	 return false;
   }
  return true;
}

function isBeta(){
	var isbeta = 0;
	var _host = window.location.host;
	if(_host.indexOf("consumer-beta.huawei.com")>-1 || _host.indexOf("consumer.huawei.com")>-1 ){
		isbeta = 1 ;
	}
	return isbeta;
}
function getHost(){
	var _host = window.location.host;
	var thost = "";
	if(_host.indexOf("consumer-beta.huawei.com")>-1 || _host.indexOf("consumer.huawei.com")>-1 ){
		thost ="http://" + _host +"/cn/";
	}else{
		thost = "http://" + _host +"/consumercn/";
	}
	return thost;
}
function isEmail(str){
	var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;  
	return re.test(str);  
}
function strToDate(str)
{	
	if(str != null && str != "")
	{
		var strs = str.split("+");
		var dates = strs[0].split("/");
		var year = parseInt("20"+dates[2]);
		var month = dates[0]<10?"0"+dates[0]:dates[0];
		var day = dates[1]<10?"0"+dates[1]:dates[1];
		return new Date(year+"/"+month+"/"+day);
	}
	return "";
}

function getProductByName(proName,obj){
		var $a=$(obj);
		$.ajax({
			type:"GET",
			async: false,
			url: iwcmbaseService + "getDeviceList?sysNum=5824170&dDocName=" + proName,	 
			dataType:"jsonp",
			jsonp:jsoncallback,
			complete:function(){
				productNum++;
				if(hwsc_url[productNum]!=""){
					$a.attr("href",hwsc_url[productNum]);
					$a.attr("target","_blank");
				}else{
					$a.attr("href",$("#hwsc_url").val());
				}
			}
		});	
	}

function getProductcallback(datas){
	if(datas.list && datas.list.length > 0 && datas.list[0].structured_field_77!=null){
		var _url = trim(repalceSpace(datas.list[0].structured_field_77))==""?"":datas.list[0].structured_field_77
		hwsc_url.push(_url);
	}else{
		hwsc_url.push("");
	}
}

function sinaBlog(){
	void ((function(s, d, e) {
			try {
			} catch (e) {}
			var f = 'http://v.t.sina.com.cn/share/share.php?', u = d.location.href, p = ['url=', e(u), '&title=', e(d.title), '&appkey=330242870' ].join('');
			function a() {
				if (!window.open([ f, p ].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width - 620) / 2, ',top=',(s.height - 450) / 2 ].join('')))u.href = [ f, p ].join('');
			};
			if (/Firefox/.test(navigator.userAgent)) {
				setTimeout(a, 0)
			} else {
				a()
			}
		})(screen, document, encodeURIComponent));
}
function qqBlog(){
	window.open('http://shuqian.qq.com/post?from=3&title='
			+ encodeURIComponent(document.title) + '&uri='
			+ encodeURIComponent(document.location.href)
			+ '&jumpback=2&noui=1','favit','width=930,height=470,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,resizable=yes,left='
			+ (screen.width - 930) / 2 + ',top='
			+ (screen.height - 470) / 2);
}

function showminisite(){
	var minisieturl = trim($("#phones_banner").text());
	var bannerurl = trim($("#product_banner_url").text())
	var bannerid = trim($("#product_banner_id").text())
	if(minisieturl.length > 0){
		var minisiet = "<iframe src='"+ minisieturl + "' width='965' height='500' frameborder='0' scrolling='no'></iframe>"
		$("#showminisite").append(minisiet)
	}else if(bannerid.length > 0){	
		bannerid ="http://" +  window.location.host + "/ilink" + g_HttpRelativeWebRoot + "groups/public/documents/webasset/" + bannerid.toLowerCase()
		var banner = "<img height='500' width='965' border='0' usemap='#Map' src='" + bannerid +"' />";
		if(bannerurl.length > 0){
			bannerurl  = "<area shape='rect' coords='0,0,964,499' target='_blank' href='"+ bannerurl +"'>"
		}else{
			bannerurl = "";
		}	
		banner = banner + "<map name='Map'>"  + bannerurl  + "</map>"
		$("#showminisite").append(banner)
	}
}
 
    
// for filter phones
function getProductUrl(product,type){
	var beta = isBeta();
	var _host = getHost();
	var _url = "#"
	if(beta == "0"){
		if(type.indexOf("mobile-phones")>-1 || type.indexOf("home-media")>-1 ||  type.indexOf("tablets")>-1){
			_url = _host + type + "/features/" + product;	
		}else if(type.indexOf("solutions")>-1){
			_url = _host + type  + product;
		}		
	}else{			
		if(type.indexOf("mobile-phones")>-1 || type.indexOf("home-media")>-1 ||  type.indexOf("tablets")>-1){
			if(product.indexOf("HW_") > -1){
				var re = new RegExp("_","g") 
				_url = _host + type + "/features/" + product.toLowerCase().replace(re,"-") +".htm";	
			}else{
				_url = _host + type + "/features/" + product.toLowerCase() +".htm";	
			}			
		}else if(type.indexOf("solutions")>-1){
			if(product.indexOf("HW_") > -1){
				var re = new RegExp("_","g") 
				_url = _host + type + product.toLowerCase().replace(re,"-") +".htm";	
			}else{
				_url = _host + type + product.toLowerCase() +".htm";
			}		
		}
	}
	return _url 	
}
function setM2MData(iwcmproducts,totalRows,mallUrl,pages,curPage,pageSize,type){
	var data = []
	var nodata = []
	var _n = 0
	for(var j = 0; j < iwcmproducts.length; j++){
		_n = 0
		for(var i = 0; i < pArray.length; i++){
			if(pArray[i].name == iwcmproducts[j]){
				_n = 1
				data.push(pArray[i])
				break;
			}
		}
		if(_n == 0) nodata.push(iwcmproducts[j])
	}
	addFilterData(data,nodata)
	page_generation(totalRows,curPage,pageSize);
	Ext.xmask.hide();	
}

function addFilterData(data,nodata){
	$("#product_list").empty()
	for(var i = 0 ; i < data.length; i ++){
		var title = data[i].title
		var name = data[i].name
		var xEventEndDate = strToDate(data[i].time);	
		var currentDate = new Date()
		var _url = "http://consumer.huawei.com/cn/solutions/m2m-solutions/products/tech-specs/" + name.toLowerCase() + ".htm"
		var _img = "http://consumer.huawei.com/" + data[i].url
		if(xEventEndDate != ""){
			if(currentDate < xEventEndDate){
				title= title + "<sup style='font-size:10px;padding-bottom:4px' class='new_sign'>NEW</sup>";
			}
		}		
		var p ="<li id='"+ name +"' pname='pname'>" +
			"<a class='img-a' href='" + _url + "'><img  width='164' height='133' src='"+ _img +"'/></a>" +
			"<h2><a class='a-1' href='" + _url + "'>" + title + "</a></h2>" +
		"</li>"
		$("#product_list").append(p);
	}
	for(var j=0; j<nodata.length; j++){
		var nopro="<li>" +
			"<a class='img-a' href='#'><img  src='"+ noproduct +"'/></a>" +
			"<h2><a class='a-1' href='#'>" + nodata[j].name + "</a></h2>" +
			"<p class='pl70 clearfix'></p>" + 
			"</li>"
		$("#product_list").append(nopro);
	}
}


function addSpaceData(iwcmproducts){
	for(var k = 0; k < iwcmproducts.length; k++){
		if(iwcmproducts[k][0] !=""){
			var nopro="<li>" +
			"<a class='img-a' href='#'><img  src='"+ noproduct +"'/></a>" +
			"<h2><a class='a-1' href='#'>" + iwcmproducts[k][0] + "</a></h2>" +
			"<p class='pl70 clearfix'></p>" + 
			"</li>"
			$("#product_list").append(nopro);
		}
	}
}


//filter end
function setTabletCompareData(_data,_url,imgurl){
	var product = "<ul class='ul-2'>" +
		"<li class='pro_0 li-0'>"  +
			"<a href='"+ _url +"' class='a-2'><img class='img-1' src='"+ imgurl +"' width='164' height='133' alt='tablet'/></a>"  +
			"<h2><a href='"+ _url +"' class='a-2'></a></h2>" +
            "<span class='a-1' onMouseOver='pointer_mouseover(this)'  onClick='reomvePhone(this)'>[ &#31227;&#38500; ]</span>"  +
		"</li>"  +
		"<li class='pro_1  li-1' name='name'><div><p>"+ repalceSpace(_data.structured_field_72) +"</p></div></li>"  +
		"<li class='pro_2 li-1' name='color'><div><p>"+ repalceSpace(_data.structured_field_19) +"</p></div></li>"  +
		"<li class='pro_3 li-1' name='size'><div><p>"+ repalceSpace(_data.structured_field_1) + " x " + repalceSpace(_data.structured_field_2) + " x " + repalceSpace(_data.structured_field_3) +"</p></div></li>"  +
		"<li class='pro_4 li-1' name='weight'><div><p>"+ repalceSpace(_data.structured_field_4) +"</p></div></li>"  +
		"<li class='pro_5 li-3' name='display'><div><p>"+ repalceSpace(_data.structured_field_5) +"</p></div></li>"  +
		"<li class='pro_6 li-1' name='cpu'><div><p>"+ repalceSpace(_data.structured_field_6) +"</p></div></li>"  +
		"<li class='pro_7 li-2' name='system'><div><p>"+ repalceSpace(_data.structured_field_7) +"</p></div></li>"  +
		"<li class='pro_8 li-2' name='memory'><div><p>"+ repalceSpace(_data.structured_field_8) +"</p></div></li>"  +
		"<li class='pro_9 li-3' name='network'><div><p>"+ repalceSpace(_data.structured_field_9) +"</p></div></li>"  +
        "<li class='pro_10 li-3' name='gps'><div><p>"+ repalceSpace(_data.structured_field_10) +"</p></div></li>"  +
       	"<li class='pro_11 li-5' name='connectivity'><div><p>"+ repalceSpace(_data.structured_field_11) +"</p></div></li>"  +
       	"<li class='pro_12 li-3' name='sensors'><div><p>"+ repalceSpace(_data.structured_field_12) +"</p></div></li>"  +
        "<li class='pro_13 li-8' name='camera'><div><p>"+ repalceSpace(_data.structured_field_13) +"</p></div></li>"  +
        "<li class='pro_14 li-6' name='audio'><div><p>"+ repalceSpace(_data.structured_field_14) +"</p></div></li>"  +
        "<li class='pro_15 li-3' name='video'><div><p>"+ repalceSpace(_data.structured_field_15) +"</p></div></li>"  +
        "<li class='pro_16 li-5' name='cloud_service'><div><p>"+ repalceSpace(_data.structured_field_16) +"</p></div></li>"  +
        "<li class='pro_17 li-4' name='battery'><div><p>"+  repalceSpace(_data.structured_field_17)+"</p></div></li>"  +
        "<li class='pro_18 li-9' name='in_the_box'><div><p>"+  repalceSpace(_data.structured_field_18)+"</p></div></li>"  +
	"</ul>" ;
	$(".comparison-content").append(product)		
}
function setPhoneCompareData(_data,_url,imgurl){
	var product = "<ul class='ul-2'>" +
		"<li class='pro_0 li-0'>" +
			"<a href='"+ _url +"' class='a-2'><img class='img-1' src='"+ imgurl +"' width='164' height='133' alt='mobile phone' /></a>" +
			"<h2><a href='"+ _url +"' class='a-2'></a></h2>" +
            "<span class='a-1' onMouseOver='pointer_mouseover(this)'  onClick='reomvePhone(this)'>[ &#31227;&#38500; ]</span>" +
		"</li>" + 
		"<li class='pro_1  li-1' name='name'><div><p>"+ repalceSpace(_data.structured_field_72) +"</p></div></li>" +
		"<li class='pro_2 li-1'  name='color'><div><p>"+ repalceSpace(_data.structured_field_19) +"</p></div></li>" +
		"<li class='pro_3 li-1'  name='size'><div><p>"+ repalceSpace(_data.structured_field_1) + " x " + repalceSpace(_data.structured_field_2) + " x " + repalceSpace(_data.structured_field_3) +"</p></div></li>" +
		"<li class='pro_4 li-1'  name='weight'><div><p>"+ repalceSpace(_data.structured_field_4) +"</p></div></li>" +
		"<li class='pro_5 li-3'  name='display'><div><p>"+ repalceSpace(_data.structured_field_5) +"</p></div></li>" +
		"<li class='pro_6 li-1'  name='cpu'><div><p>"+ repalceSpace(_data.structured_field_6) +"</p></div></li>" +
		"<li class='pro_7 li-2'  name='system'><div><p>"+ repalceSpace(_data.structured_field_7) +"</p></div></li>" +
		"<li class='pro_8 li-2'  name='memory'><div><p>"+ repalceSpace(_data.structured_field_8) +"</p></div></li>" +
		"<li class='pro_9 li-3'  name='network'><div><p>"+ repalceSpace(_data.structured_field_9) +"</p></div></li>" +
     	"<li class='pro_10 li-3' name='gps'><div><p>"+ repalceSpace(_data.structured_field_10) +"</p></div></li>" +
       	"<li class='pro_11 li-5' name='connectivity'><div><p>"+ repalceSpace(_data.structured_field_11) +"</p></div></li>" +
       	"<li class='pro_12 li-3' name='sensors'><div><p>"+ repalceSpace(_data.structured_field_12) +"</p></div></li>" +
      	"<li class='pro_13 li-8' name='camera'><div><p>"+ repalceSpace(_data.structured_field_13) +"</p></div></li>" +
       	"<li class='pro_14 li-6' name='audio'><div><p>"+ repalceSpace(_data.structured_field_14) +"</p></div></li>" +
       	"<li class='pro_15 li-3' name='video'><div><p>"+ repalceSpace(_data.structured_field_15) +"</p></div></li>" +
       	"<li class='pro_16 li-5' name='cloud_service'><div><p>"+ repalceSpace(_data.structured_field_16) +"</p></div></li>" +
        "<li class='pro_17 li-4' name='battery'><div><p>"+ repalceSpace(_data.structured_field_17) +"</p></div></li>" +
        "<li class='pro_18 li-9' name='in_the_box'><div><p>"+ repalceSpace(_data.structured_field_18) +"</p></div></li>" +
	"</ul>";
	$(".comparison-content").append(product);
}

function getSelectProName(){
	var obj=document.getElementById("support-select-2");
	var proname = ""
	for(i=0;i<obj.length;i++){
   		if(obj[i].selected==true){
    		proname = trim(obj[i].innerHTML); 
    		if(proname.indexOf("(") > 1){
             	proname = proname.substring(proname.indexOf("(")+1,proname.indexOf(")"))
              }
  	 	} 	
	}
	return proname
}
function getSelectProType(){
	var obj=document.getElementById("support-select-1");
	var protype = ""
	for(i=0;i<obj.length;i++){
   		if(obj[i].selected==true){
    		protype = trim(obj[i].innerHTML); 	
  	 	} 	
	}
	return protype
}
function getSelectM2M(){
	var obj=document.getElementById("video_search");
	var protype = ""
	for(i=0;i<obj.length;i++){
   		if(obj[i].selected==true){
    		protype = trim(obj[i].innerHTML); 	
  	 	} 	
	}
	return protype
}
function setDefaultPro(){
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
	var combo1=$.createGooCombo(document.getElementById("support-select-1"),property);
	combo1.selectValue(0); 
	var combo2=$.createGooCombo(document.getElementById("support-select-2"),property);
	combo2.selectValue(0); 	
}

function headerSearch(){
	var keys = trim($("#top_keywords").val());  	
    if(keys.length>90){
    	alert(LAG_CON_LENGTH_90);
    	return false;		
    }else if(keys.length<2){
    	alert(LAG_CON_LENGTH_2);
    	return false;
    }else{
    	window.location = $("#search_url").attr("href") + "?keywords=" + encodeURIComponent(keys);  		
  	}
}
    
    
function footerSearchCity(){
    if($("#footer-select-2").val() > 0){
    		window.location = $("#salelist_url").attr("href") + "?proid=" + $("#footer-select-1").val() +"&areaid=" + $("#footer-select-2").val() + "&curpage=1&type=All";
    }else{
    	alert(LAG_CON_SELECT_CITY);
    }
}

function getPhonesFilterParm(){
	var sysetm = $("#system").find(".cur a").text();
	var network = $("#network").find(".cur a").text();
	var style = $("#style").find(".cur a").text();
	var screen = $("#screen").find(".cur a").text();
	var camera = $("#camera").find(".cur a").text();
	var parms = "";
	if(sysetm == "" && network == "" && screen == "" && camera == "" && style == ""  ){
		return "";	
	}else{
		if(sysetm != ""){
			parms = "'structured_field_41':'[" + sysetm + "]'," + parms;
		}
		if(network != ""){
			parms = "'structured_field_42':'[" + network + "]'," + parms;
		}
		if(style != ""){
			parms = "'structured_field_43':'[" +  style +"]'," + parms;
		}
		if(screen != ""){
			parms = "'structured_field_44':'[" +  screen.replace(/\'/g,"@(-9)@") +"]'," + parms;
		}
		if(camera != ""){
			parms = "'structured_field_45':'[" +  camera +"]'," + parms;
		}
		parms = parms +"'xWebsites':'consumercn',"
		parms = parms.replace(/&/g,"@(-7)@");	
		return parms;
	}
}

function getSupportKeys(){
	var key = {}
	key.keys = ""
	key.id=""
	key.name=""
	var _url = decodeURIComponent(window.location.href);
	if(_url.lastIndexOf("index.htm?keyword=") > 1){
		key.keys = decodeURIComponent(_url.substring(_url.lastIndexOf("keyword=")+8,_url.length));
	}else if(_url.indexOf("index.htm?id=") > 1){
		var par = _url.substring(_url.indexOf("?id=")+4,_url.length).split("&");
		key.id = par[0]
		if(_url.lastIndexOf("name=") > 1){
			key.name =decodeURIComponent(_url.substring(_url.indexOf("name=")+5,_url.length));
		}
	}
	return key
}

/**@desc: convert null to empty*/
function getValue(val){
	if(val){return val;}else{return "";}
}    
 
function getQueryString(name) {    
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));	
   	if(arr != null) return decodeURIComponent(unescape(arr[2]));    	   
	return "anonymous";		 
} 	
function logout(){	
	killCookie("UserAccount","/","huawei.com");
    location.href = logoutUrl;
}
function killCookie(name,path,domain) {      
    document.cookie = name + "=" +(path?(";path="+path):"") +(domain?(";domain="+domain):"") +"; expires=Thu, 01-Jan-70 00:00:01 GMT";
}


function change_country(region_val){
	$(".distributors-ul-01").hide();
	if(region_val=="nodis"){
		$(".distributors-ul-01").hide();
	}else{
		$(".distributors-ul-01 li").hide();
		$(".distributors-ul-01 li").each(function(){
			if($(this).attr("value") == region_val) $(this).show()
		});
		$(".distributors-ul-01").show();
	}	
}
/**@desc: get url param value by param-name*/
function getURLParam(name) {
	var m = decodeURIComponent(window.location.href).match(new RegExp("[?&]" + name + "=([^=&]*)(&|$)"));
	return m ? m[1]: null;
}
/**@desc: cut off the long text*/
function getEtcText(txt, len) {
	var text = $("<span>" + txt + "</span>").text();
	return text.length > len ? text.substring(0, len) + "..." : txt;
}

function getURLParms(url){
	var parms = [];
	if(url.indexOf("index.htm?")>0){
		var start = url.indexOf("index.htm?") + 10
		var end = url.length
		var s = url.substring(start,end)
		parms = s.split("&")
		for(var i = 0; i < parms.length; i++){
			parms[i] = parms[i].substring(parms[i].indexOf("=")+1, parms[i].length)
		}
	}
	return parms
}

function getCategory (pbi2){
	var pbis = pbi2.split(",");
	var pbi = (pbis.length>1)?trim(pbis[1]):trim(pbis[0]);
	if ("31001" == pbi || "31002" == pbi){
		return "mobile-phones";
	}else if ("36001" == pbi){
		return "tablets" ;
	}else if ("32001" == pbi){
		return "mobile-wifi";
	}else if ("32002" == pbi){
		return "dongles";
	}else if ("32003" == pbi){
		return "wingles";
	}else if ("33001" == pbi){
		return "gateways";
	}else if ("33002" == pbi){
		return "broadband-modems";
	}else if ("33003" == pbi){
		return "plcs";
	}else if ("33004" == pbi){
		return "wi-fi-repeaters";
	}else if ("33005" == pbi){
		return "fixed-wireless-phones";
	}else if ("33006" == pbi){
		return "3g-routers";
	}else if ("33007" == pbi){
		return "4g-lte-routers";
	}else if ("33008" == pbi){
		return "home-innovation-products";
	}else if ("34001" == pbi){
		return "stb";
	} else if ("34002" == pbi){
		return "dpf";
	} else{
		return "accessories";
	}
}

function getCategorys (pbi2){
	var pbis = pbi2.split(",");
	var pbi = (pbis.length>1)?trim(pbis[1]):trim(pbis[0]);
	if ("31001" == pbi){
		return "Mobile Phones/Smartphones";
	}else if("31002" == pbi){
		return "Mobile Phones/Feature Phones";
	}
	else if ("36001" == pbi){
		return "Tablets_T/Tablets" ;
	}else if ("32001" == pbi){
		return "Mobile Broadband/Mobile WiFi";
	}else if ("32002" == pbi){
		return "Mobile Broadband/Dongles";
	}else if ("32003" == pbi){
		return "Mobile Broadband/Wingles";
	}else if ("33001" == pbi){
		return "Home Internet/Gateways";
	}else if ("33002" == pbi){
		return "Home Internet/Broadband Modems";
	}else if ("33003" == pbi){
		return "Home Internet/PLC";
	}else if ("33004" == pbi){
		return "Home Internet/WIFI Repeaters";
	}else if ("33005" == pbi){
		return "Home Internet/Fixed Wireless Terminals";
	}else if ("33006" == pbi){
		return "Home Internet/3G Routers";
	}else if ("33007" == pbi){
		return "Home Internet/LTE Router";
	}else if ("33008" == pbi){
		return "Home Internet/Home Innovation Products";
	}else if ("34001" == pbi){
		return "Home Media Device/Set-top Boxes";
	} else if ("34002" == pbi){
		return "Home Media Device/Digital Photo Frames";
	} else if("37002" == pbi){
		return "Accessories/Wearable Device";
	}else {
		return "Accessories/Others";
	}
}

function getCategorysp(pbi){
	if ("4903" == pbi || "5003" == pbi){
		return "mobile-phones";
	}else if ("5442" == pbi){
		return "tablets" ;
	}else if ("10021" == pbi){
		return "Wearables" ;
	}else if ("5294" == pbi){
		return "mobile-wifi";
	}else if ("5176" == pbi){
		return "dongles";
	}else if ("5152" == pbi){
		return "wingles";
	}else if ("6661" == pbi){
		return "plcs";
	}else if ("6523" == pbi){
		return "wi-fi-repeaters";
	}else if ("5778" == pbi){
		return "MediaQ";
	}else if ("5496" == pbi){
		return "Wireless Routers";
	} else{
		return "Accessories";
	}
}



function getCategorysps(pbi){
	if ("4903" == pbi){
		return "Mobile Phones/Smartphones";
	}else if("5003" == pbi){
		return "Mobile Phones/Feature Phones";
	}else if("5442" == pbi){
		return "Tablets_T/Tablets" ;
	}else if ("10021" == pbi){
		return "Wearables_T/Wearables" ;
	}else if ("5294" == pbi){
		return "Home Internet/mobile-wifi";
	}else if ("5176" == pbi){
		return "Mobile Broadband/dongles";
	}else if ("5152" == pbi){
		return "Mobile Broadband/wingles";
	}else if ("6661" == pbi){
		return "Home Internet/plcs";
	}else if ("6523" == pbi){
		return "Home Internet/wi-fi-repeaters";
	}else if ("5778" == pbi){
		return "Home Internet/MediaQ";
	}else if ("5496" == pbi){
		return "Home Internet/Wireless Routers";
	} else{
		return "Accessories/Others";
	}
}

/*m2m-solutions news*/
function callback_m2m_press_news(data){
	var otherlist='';
	var totalNum='';
	$(data).each(function(i,item){
	 	otherlist=item.list[0]['alllist']; 
	    totalNum=item.list[0]['totalNum'];
	});
	//$("#x-press-list").parent().removeClass().addClass("press-news-search");	
	if(otherlist == null || otherlist.length==0){
		$("#x-press-list").append("<div class='search-result-others clearfix'><h2>"+LAG_CON_NO_RESULTS+"</h2></div>");
	} else {
		if(totalNum>0) {
			$("#x-press-list").append("<p class='p-1'>"+setsetSearchResults(totalNum,decodeURI(v_data.data.ssUserText))+".</p>");
		}
		for(var b=0;b<otherlist.length;b++) {
			$("#x-press-list").append("<li class='clearfix'>"+"<div class='left'><a href='"+returnVariable(otherlist[b]['DOC_URL'])+"'><img width='394' height='222' src='"+otherlist[b]['RESERVE_FIELD32']+"'></img></a></div>"+
				"<div class='right' style='width:500px; height:252px; float:right; padding-right:30px; display:inline;'><h2><a href='"+returnVariable(otherlist[b]['DOC_URL'])+"'><strong>"+returnVariable(otherlist[b]['DRETITLE'])+"</strong></a></h2>"+
				"<p class='p-2'>"+returnVariable(otherlist[b]['RESERVE_FIELD11'])+"</p>"+
				"<p class='p-3' title='"+subTitle(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"'>"+coverStringLength(returnVariable(otherlist[b]['DOC_DESCRIPTION']))+"</p>"+
				"<p class='p-4'><a href='"+returnVariable(otherlist[b]['DOC_URL'])+"'>"+LAG_CON_READ_MORE+"</a></p></div>"+
			"</li>");
		}	
	}
	page_generation(totalNum,v_data.data.mcCurPage,v_data.data.pageSize);
}
/*maquee*/
function titleAction(md_data){
   	md_data.s--;
   	if(md_data.s < 0){
      	if(md_data.scroll_end.offsetWidth - md_data.scroll_div.scrollLeft <= -md_data.scroll_m){ 
  	     	md_data.scroll_div.scrollLeft -= md_data.scroll_begin.offsetWidth + md_data.scroll_m;
	  	}else{ 
  	     	md_data.scroll_div.scrollLeft++; 
	  	}
   	}
}
function press_banner_maquee(){
    var $img = $(".img-banner");
    var ti,scroll_begin,scroll_end,scroll_div;
   	$img.find(".press-video-content").css({"padding-top":"0px","padding-bottom":"0px"});
   	$img.hover(function(){
      	$(this).find(".banner-value,.play").show(); 
      	$(this).css({"opacity":"0.9","background-color":"#ffffff"});
      	if($(this).find(".y-maquee span").width() > $(this).find(".y-maquee").width()){
      	    var $m = $(this).find(".y-maquee");
         	var its = $m.children().clone();
         	$m.attr("id","marquee").append(its);
         	$m.children(":eq(0)").attr("id","scroll_begin");
         	$m.children().last().attr("id","scroll_end");
         	scroll_begin = document.getElementById("scroll_begin");
         	scroll_end = document.getElementById("scroll_end");
         	scroll_div = document.getElementById("marquee");
         	$("#scroll_end").css("margin-left",$(this).find(".y-maquee").width()/2+"px");
         	md_data = {
         	  "scroll_begin":scroll_begin,
         	  "scroll_end":scroll_end,
         	  "scroll_div":scroll_div,
         	  "s":20,
         	  "scroll_m":$(this).find(".y-maquee").width()/2
         	}
         	ti=setInterval("titleAction(md_data)","60");
      	}
   	},function(){
      	if($(this).find(".y-maquee span").width() > $(this).find(".y-maquee").width()){
      		clearInterval(ti);
      		scroll_div.scrollLeft=0;
      		$("#scroll_end").remove();
      		$(".y-maquee").attr("id","").children(":eq(0)").attr("id","");
      	}
      	$(this).find(".banner-value,.play").hide();
      	$(this).css({"opacity":"","background-color":""});
   	})

}
/*data loading info*/
function callback_data(data,tag) {
    $(".x-mask-com").hide();
	if(AJAX_PARAMS.delay == true){
	    $(tag).empty();
		AJAX_PARAMS.callback(data);
	}else{
		AJAX_PARAMS.callback(data);
	}	
}
function send_ajax(data){
	AJAX_PARAMS = data;
	$.ajax({type:"GET",async:false,dataType:"jsonp",jsonp:"jsonp",
		url: data.url, 				  
		data: data.data,
		success: function(data){		 
			callback_data(data,AJAX_PARAMS.tag);
		},
		error: function(resp){if(resp.status!="200"){alert("Error!");$(".data-load").hide();}}
	});
}                            
function getLoad(tag){
    var d_left, d_top;
    $(tag).append("<div class='x-mask-com data-load'><div class='d-load-img x-waite'></div></div>").css("position","relative");
    $(".data-load").css({"width":$(tag).width(),"height":$(tag).height()==0?300:$(tag).height()}).show();
    d_left = ($(".data-load").width()-$(".d-load-img").width()/2) / 2;
    d_top = ($(".data-load").height()-$(".d-load-img").height()/2) / 2;
    $(".d-load-img").css({"top":d_top,"left":d_left});
}
function sendDate(params){
	AJAX_PARAMS = params;
	AJAX_PARAMS.delay = true;
	getLoad(AJAX_PARAMS.tag); 
	setTimeout("send_ajax(AJAX_PARAMS)", SYS_DELAY_SECS);
}
function search_by_years($tag,txt, flag){
    v_data.data.mcCurPage="1";
	v_data.data.isearchFlag=flag;  
	v_data.data.ssUserText=encodeURI(txt);
	v_data.tag = $tag;
	sendDate(v_data);
}
function search_text(tags){
    var warn="Please write keywords";
	var KeyText = $("#keywords").val();
	if(trim(KeyText)== "" || trim(KeyText)== "Enter keywords"){
		alert(warn);
	}else if(trim(KeyText).length < 2){
	    alert(LAG_CON_ENTER_MORE_TERM);
	}else{
	    search_by_years(tags,KeyText, "byKey");	
	}
}
/*press page*/
function getUcmList(page,all_list){
    var d_list;
    switch(page){
        case 'news':
           d_list = "<li class='clearfix y-lists'>"+
 					"<div class='cbg-date'>"+
 					"<span class='cbg-month'>"+all_list.time.split('-')[1]+"</span><span class='cbg-day'>"+all_list.time.split('-')[2]+"</span>"+
 					"</div>"+
 					"<div class='cbg-text'>"+
 					"<h2><a href='"+all_list.link+"'>"+all_list.title+"</a></h2><p class='p-3' title=''>"+all_list.text+"</p>"+
 		   		"</div></li>"
             break;
        case 'sponsorships':
             break;
        case 'media-coverage':
           d_list = "<li class='clearfix'>"+
						"<a name='forsspu' target='_blank' style='display:none' href='"+all_list.link+"' ></a>"+
						"<div class='cbg-date'>"+
							"<span class='cbg-month'>"+all_list.time.split('-')[1]+"</span><span class='cbg-day'>"+all_list.time.split('-')[2]+"</span>"+
						"</div>"+
						"<div class='cbg-text'>"+
							"<h2><a href='"+all_list.link+"'>"+all_list.title+"</a></h2>"+
							"<p class='p-3'>"+all_list.text+"</p>"+
						"</div>"+
					"</li>"	
             break;
        case 'awards':
             break;
        case 'events':
             break;
        case 'video':
           d_list = "<div class='video-item y-lists' name='"+all_list.name+"' video='"+all_list.video+"' did='"+all_list.video+"'>"+
                    "<div class='cbg-date'><span class='cbg-month'></span><span class='cbg-day'></span></div>"+
                    "<div class='cbg-text y-list-item' old='"+all_list.old+"'><div class='information'><div class='y-viseo-img'>"+
                    "<a class='a-2 img_link poster' name='"+all_list.img_name+"' alt='"+all_list.a_alt+"'><img width='156' height='86' src='"+all_list.img_src+"' alt='"+all_list.img_alt+"' complete='complete'><div class='play'></div></a>"+
                    "</div><div class='y-video-item'><div class='title'><span class='a-3 img_link2' name='title'>"+all_list.title+"<input type='hidden' id='videotitle' value='"+all_list.tit_val+"'></span>"+
                    "<p class='p-2 y-numdate-show'>"+all_list.time+"</p><div class='dadie description' title='"+all_list.text_tit+"'>"+all_list.text+"</div>"+
                    "</div><div class='y-cbg-share'><div class='times show-times'></div><div class='share'>&#20998; &#20139;&#65306;"+
                    "<a target='_blank' href='javascript:void(0)' class='y-press-sinaBtn'><img src='"+all_list.share_img1+"' style='width:25px;height:20px;' title='&#26032;&#28010;&#24494;&#21338;'></a>"+
                    "<a target='_blank' href='javascript:void(0)' class='y-press-qqBtn'><img src='"+all_list.share_img2+"' style='width:25px;height:20px;' title='&#33150;&#35759;&#24494;&#21338;'></a>"+
                    "</div></div></div></div></div></div>";
             break;
    }
    return d_list;
}
function setPressData(objs,page_list,page){
    var idx = times * page_list;
    ++times;
    var num = times * page_list <= allnews.length ? times * page_list : allnews.length;
    for(idx; idx<num; idx++){
        $(objs).append(getUcmList(page,allnews[idx]));
    }
    if(idx > allnews.length - 1) $(".load-more").hide();
}
