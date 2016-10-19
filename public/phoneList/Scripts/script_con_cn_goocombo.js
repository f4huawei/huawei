function GooCombo(dom,property,defaultLen){
	if(dom.tagName=="SELECT"){
	    if(dom.length<=defaultLen){
		  property.selectHeight = "auto";
		}
	}
	this.$first_option=property.first_option;
	this.$div=null;
	this.$id=null;
	this.$name=null;
	this.$width=property.width;
	this.$bgimg=property.bgimg
	this.$haveIcon=property.haveIcon||false;
	//this.$input=$("<input type='text' value='' "+(property.readOnly? " readonly='readonly'" : "" )+(this.$haveIcon? " style='margin-left:20px;width:"+(this.$width-39)+"px'" : "" )+"/>");//&#19979;&#25289;&#26694;&#25511;&#20214;&#20013;&#22987;&#32456;&#26174;&#31034;&#30340;&#25991;&#26412;&#26694;INPUT
	this.$input=$("<input type='text' value='' readonly='readonly'/>");
	this.$btn=$("<div class='btn_up'></div>");
	this.$data=[];
	this.$type="basic";
	this.$selectHeight=property.selectHeight||0;
	this.$list=$("<ul style='width:"+(this.$width-2)+"px;height:"+property.selectHeight+"px;'></ul>");
	this.$lastSelect=null;
	this.$select=null;
	this.$selectedValue="null";
	this.$autoLoad=false;
	this.$alreadyLoad=false;
	this.$defaultInput="0";
	this.setAutoLoad=function(bool){
		this.$autoLoad=bool;
	};
	if(property.autoLoad) this.setAutoLoad(property.autoLoad);
	this.$ajaxType=null;
	this.setAjaxType=function(json){
		this.$ajaxType.url=json.url;
		this.$ajaxType.type=json.type;
		this.$ajaxType.para=json.para;
		this.$ajaxType.dataType=json.dataType;
	};
	if(property.ajaxType)	this.setAjaxType(property.ajaxType);

	if(dom.tagName=="SELECT"){
		var temp="";
		for(var i=0;i<dom.length;i++){
			if(i==0){
				this.$data[i]=[(dom.options[i].value||dom.options[i].text),dom.options[i].text,""];
			    temp+="<a href='#' class='first_option'><p "+"value='"+this.$data[i][0]+"'>"+this.$data[i][1]+"</p></a>";
			}else if(i==(dom.length-1)){
				this.$data[i]=[(dom.options[i].value||dom.options[i].text),dom.options[i].text,""];
			    temp+="<a style='border:none;' href='#'><p "+"value='"+this.$data[i][0]+"'>"+this.$data[i][1]+"</p></a>";
			}else{
			this.$data[i]=[(dom.options[i].value||dom.options[i].text),dom.options[i].text,""];
			temp+="<a href='#'><p "+"value='"+this.$data[i][0]+"'>"+this.$data[i][1]+"</p></a>";
			}
		}
		this.$list.append(temp);
		this.$id=dom.id;
		this.$name=dom.name;
		if(dom.multiple) this.$type="multiple";
		this.$select=$(dom);
		this.$select.wrap("<div class='Combo' id='Combo_"+this.$id+"'></div>")
		this.$div=this.$select.parent(".Combo");
	}
	else{
		this.$div=$(dom);
		this.$div.addClass("Combo");
		this.$select=$("<select></select>");
		this.$div.append(this.$select);
	}
	this.$div.css({width:this.$width+"px"});
	this.$div.css("background-image","url("+this.$bgimg+")");
	this.$div.append("<div class='text' style='width:"+(this.$width)+"px;'></div>").append(this.$btn).append(this.$list);
	this.$div.children("div:eq(0)").append("<div class='top_border'></div>").append(this.$input);
	
	if(property.id)		{this.$id=property.id;this.$select.attr("id",property.id);}
	if(property.name)	{this.$name=property.name;this.$select.attr("name",property.name);}
	if(property.type){
		this.$type=property.type;
		if(property.type=="multiple") {
			this.$select.attr("size",1);this.$select.attr("multiple",property.type);
		}else	this.$select.removeAttr("multiple");
	}
	this.loadListData=function(data){
		this.$data=[];
		if(this.$list.children("a").length>0){
			this.$list.empty();
			this.$select.empty();
		}
		temp="",temp2="";
		for(i=0;i<data.length;++i){
			this.$data[i]=[data[i][0],data[i][1],data[i][2]||""];
			if(this.$type!="filter")
				temp+="<a href='#'><p "+(this.$haveIcon? "style='text-indent:19px;background:"+this.$data[i][2]+"' " : "")+"value='"+this.$data[i][0]+"'>"+this.$data[i][1]+"</p></a>";
			temp2+="<option value='"+this.$data[i][0]+"'>"+this.$data[i][1]+"</option>";
		}
		if(this.$type!="filter")
			this.$list.append(temp);
		this.$select.append(temp2);
		this.$alreadyLoad=true;
		
		$(".Combo ul a").css({width:this.$width+"px"});
	    $(".Combo ul a p").css({width:this.$width-22+"px"});
	};
	if(property.data)	this.loadListData(property.data);
	this.loadListDataAjax=function(){
		var inthis=this;
		$.ajax({
			   type:this.$ajaxType.type,
			   url:this.$ajaxType.url,
			   dataType:this.$ajaxType.dataType,
			   data:this.$ajaxType.para,
		success:function(data){
			inthis.loadListData(data);
		}});
		
	};
	this.$input.bind("focus",{inthis:this,hsp:'F'},function(e){
		if ( e && e.preventDefault )	e.preventDefault();
		else	window.event.returnValue = false;
		var inthis=e.data.inthis;
		if(inthis.$select.val() == -100 && e.data.hsp == "F"){
			e.data.hsp = "T"
			addProviences(inthis.$list)//@date: 2015/1/16 add args
		}
		if(!inthis.$alreadyLoad&&inthis.$autoLoad){
			if(inthis.$ajaxType){
				inthis.loadListDataAjax();
			} 
			else if(inthis.$data&&inthis.$data[0]){
				inthis.loadListData(inthis.$data);
			}
		}
		var list=inthis.$list;
		var height=inthis.$selectHeight;
		var width=inthis.$width;
		list.css("display","block");
		/**@date:2015/1/15*/
		if(list.text()==""){
			list.css("display","none");
		}
		$(document).bind("mouseup",function(e){
			var locate=getElCoordinate(list.get(0));
			var ev=mousePosition(e);
			if(locate.left+width<ev.x||locate.left>ev.x||locate.top-22>ev.y||locate.top+height+2<ev.y){
				list.css("display","none");
			}
			this.onmouseup=null;
			return false;
		});
		return false;
	});
	if(!this.$readOnly){
		if(this.$type=="filter"){
			this.$input.bind("change",{inthis:this},function(e){
				var inthis=e.data.inthis;
				var text=""+this.value;
				var data=inthis.$data;
				var temp="";

				if(inthis.$ajaxType){
					inthis.$ajaxType.para["search"]=text;
					inthis.loadListDataAjax();
				}
				else{
					for(var i=0;i<data.length;++i){
						if(data[i][1].indexOf(text)==0)
							temp+="<a href='#'><p "+(inthis.$haveIcon? "style='text-indent:19px;background:"+data[i][2]+"' " : "")+"value='"+data[i][0]+"'>"+data[i][1]+"</p></a>";
					}
					inthis.$list.empty();
					inthis.$list.append(temp);
				}
			});
		}
		else{
			this.$input.bind("change",{inthis:this},function(e){
				var text=this.value;
				var inthis=e.data.inthis;
				var data=e.data.inthis.$data;
				for(var i=0;i<data.length;++i){
					if(data[i][1]==text){
						if(inthis.$lastSelect)
							inthis.$lastSelect.removeClass("active");
						inthis.$lastSelect=inthis.$list.children("a:eq("+i+")").addClass("active");
						now=inthis.$list.children("a:eq("+i+")").children("p");
						inthis.$select.val(data[i][0]);
						if(inthis.$haveIcon){
							$(this).parent(".text").css({
							background:now.css("background"),
							"background-image":"url(codebase/img/combo_icon.gif)",
							"background-position":now.css("background-position"),
							"background-repeat":now.css("background-repeat")	
							});
						}
						break;
					}
				}
			});
		}
		var once=null;
		this.$input.bind("keyup",{input:this.$input,list:this.$list},function(e){
			if(!e)	e=window.event;
			if(e.keyCode==13)
				e.data.list.css("display","none");
			else if(e.keyCode==40){
				var temp=e.data.list.children("a:eq(0)");
				temp.focus();
				temp.toggleClass("focus");
			}
			else{
				once=null;
				once=setTimeout(function(){e.data.input.change();},1000);
			}
		});
	}
	this.$btn.bind("mousedown",function(){
		inthis=$(this);
		inthis.removeClass("btn_up");
		inthis.addClass("btn_down");
	});
	this.$btn.bind("mouseup",{input:this.$input},function(e){
		inthis=$(this);
		inthis.removeClass("btn_down");
		inthis.addClass("btn_up");
		e.data.input.focus();
	});
	this.selectValue=function(index){
		if(index>=0&&index<this.$data.length){
			var p=this.$list.children("a:eq("+index+")");
			this.$selectedValue= p.find("p").attr("value");
			if(this.$lastSelect){
				this.$lastSelect.removeClass("active");
			}	
			this.$lastSelect=p;
			this.$defaultInput = p.find("p").attr("value");
			p.click();
		}
	};
	
	this.$list.bind("click",{inthis:this},function(e){
		if ( e && e.preventDefault ){
			e.preventDefault();
		}else{
			window.event.returnValue = false;
		}	
		if(!e) e=window.event;
		var clicked=$(e.target);
		var inthis=e.data.inthis;
		if(e.target.tagName=="A"){
			clicked=clicked.children("p");
		}else if(e.target.tagName=="UL"){
			this.style.display="none";
			return;
		}
		if(inthis.$haveIcon){
			inthis.$input.parent(".text").css({
			background:clicked.css("background"),
			"background-image":"url(codebase/img/combo_icon.gif)",
			"background-position":clicked.css("background-position"),
			"background-repeat":clicked.css("background-repeat")	
			});
		}
		
		if(inthis.$type!="multiple"){
			if(inthis.$lastSelect){
				inthis.$lastSelect.removeClass("active");
			}	
			inthis.$lastSelect=clicked.parent("a").addClass("active");
			this.style.display="none";
			inthis.$select.val(clicked.attr("value"));
			inthis.$input.val(clicked.text());
			if(typeof(clicked.attr("value")) !="undefined")	{
				inthis.$defaultInput = clicked.attr("value");
			}
			/*@date20150115*/
			if(clicked.attr("value") <= 0){
				clicked.parent().remove();
			}
		}else{
			clicked.parent("a").toggleClass("active");
			var optionList=inthis.$select.get(0).options;
			for(var i=0;i<optionList.length;++i){
				if(optionList[i].value==clicked.attr("value")){
					optionList[i].selected=!optionList[i].selected;
					break;
				}
			}
			inthis.$input.val(clicked.text()+" , &#8230;&#8230;");
			
		}
		inthis.$select.change();
		return false;
	});
	this.$list.bind("mouseover",{list:this.$list},function(e){
		if(!e) e=window.event;
		var clicked=$(e.target);
		if(e.target.tagName=="P")	clicked=clicked.parent("a");
		else if(e.target.tagName=="UL"){
			return;
		}
		clicked.focus();
		clicked.addClass("focus");
	});
	this.$list.bind("mouseout",{list:this.$list},function(e){
		if(!e) e=window.event;
		var clicked=$(e.target);
		if(e.target.tagName=="P")	clicked=clicked.parent("a");
		else if(e.target.tagName=="UL")	return;
		clicked.removeClass("focus");
	});
	this.$list.bind("keydown",{inthis:this},function(e){
		if(!e) e=window.event;
		var inthis=e.data.inthis;
		if(e.keyCode==13){
			if ( e && e.preventDefault )	e.preventDefault();
			else	window.event.returnValue = false;
			var clicked=$(e.target);
			if(e.target.tagName=="P")	clicked=clicked.parent("a");
			else if(e.target.tagName=="UL")	return;
			clicked.focus();
			clicked.click();
			return false;
		}
		else if(e.keyCode==40){
			var clicked=$(e.target);
			if(e.target.tagName=="P")	clicked=clicked.parent("a");
			else if(e.target.tagName=="UL")	return;
			var now=$(e.target);
			var next=$(e.target).next("a:eq(0)");
			if(next.length>0){
				now.removeClass("focus");
				next.addClass("focus");
				next.focus();
			}
		}
		else if(e.keyCode==38){
			var clicked=$(e.target);
			if(e.target.tagName=="P")	clicked=clicked.parent("a");
			else if(e.target.tagName=="UL")	return;
			var now=$(e.target);
			var prev=$(e.target).prev("a");
			if(prev.length>0){
				now.removeClass("focus");
				prev.addClass("focus");
				prev.focus();
			}
		}
	});
	this.getValue=function(){
		return this.$select.val();
	};
	this.bindValueChange=function(Fn){
		this.$select.bind("change",Fn);
	};
	this.delItem=function(index){
		if(index>-1&&index<this.$data.length){
			this.$data.splice(index,1);
			this.$select.get(0).options.remove(index);
			this.$list.children("a:eq("+index+")").remove();
		}
	};
	this.addItem=function(index,Item){
		if(index==this.$data.length){
			this.$data[index]=Item;
			this.$list.append("<a href='#'><p "+(this.$haveIcon? "style='text-indent:19px;background:"+Item[2]+"' " : "")+"value='"+Item[0]+"'>"+Item[1]+"</p></a>");
		}
		else{
			this.$data.splice(index,0,Item);
			this.$list.children("a:eq("+index+")").before("<a href='#'><p "+(this.$haveIcon? "style='text-indent:19px;background:"+Item[2]+"' " : "")+"value='"+Item[0]+"'>"+Item[1]+"</p></a>");
		}
		if(index > defaultLen){
			if(defaultLen==10){
				this.$list.css("height","268px")	
			}else{
				this.$list.css("height","134px")
			}				
		}else{
			this.$list.css("height","auto")
		}
		this.$select.get(0).options.add(new Option(Item[1], Item[0]));
	};
	this.clearItems=function(){
		this.$input.val("");
		this.$data=null;
		this.$data=[];
		this.$list.empty();
		this.$select.get(0).options.length=0;
		this.$select.empty();
		this.$alreadyLoad=false;
	};
	
}

jQuery.extend({
	createGooCombo: function(dom,property,defaultLen) {
		return new GooCombo(dom,property,defaultLen);
  }
}); 

function getElCoordinate(dom) {
  var t = dom.offsetTop;
  var l = dom.offsetLeft;
  dom=dom.offsetParent;
  while (dom) {
    t += dom.offsetTop;
    l += dom.offsetLeft;
	dom=dom.offsetParent;
  }; return {
    top: t,
    left: l
  };
}
function mousePosition(ev){
	if(!ev) ev=window.event;
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.documentElement.scrollTop  - document.body.clientTop
    };
}
Date.prototype.format = function(format)   
{   
   var o = {   
      "M+" : this.getMonth()+1, //month  
      "d+" : this.getDate(),    //day  
      "h+" : this.getHours(),   //hour  
      "m+" : this.getMinutes(), //minute  
      "s+" : this.getSeconds(), //second  &#8216;
      "q+" : Math.floor((this.getMonth()+3)/3), 
      "S" : this.getMilliseconds() //millisecond  
   }   
   if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)if(new RegExp("("+ k +")").test(format))   
      format = format.replace(RegExp.$1,   
        RegExp.$1.length==1 ? o[k] :    
          ("00"+ o[k]).substr((""+ o[k]).length));   
    return format;   
 }  
function addProviences(obj){
	$.ajax({
			type:"GET",
			async: false,
			url: baseurl + chianprovince ,					  
			dataType:"jsonp",
			jsonp:"jsonp",
			data:{'siteCode':'cn','serviceType':'sales'},
			success: function(data){
				if(data.length>0){
					$("#footer-select-1").bind("change",{selectID:'#footer-select-1'},addSaleCities)
					var provience = new Array();
					for(var i=0; i<data.length; i++){
						provience.length = 0;
						provience[0] = data[i].placeId
						provience[1] = data[i].placeName		
						getFooterPro.addItem((i+1),provience)
					}
					obj.show();
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
			var str = "<select name='c' id='footer-select-2' ><option value='0'> &#36873;&#25321;&#22478;&#24066; </option> ";
			for(var i = 0; i < data.length; i++){
				str += "<option value="+data[i].placeId+">"+data[i].placeName+"</option>";			
			}
			str += "</select>";
			$("#footer_china_city").empty().append(str);
			var property={
				id:"",
				name:"",
				type:"basic",
				readOnly:false,
				width:117,
				bgimg:$("#select_bg_09").val(),
				selectHeight:134,
				input:"",
				autoLoad:false,
				haveIcon:false
			};	
			var getCitiescoo = $.createGooCombo(document.getElementById("footer-select-2"),property,5);
			getCitiescoo.selectValue(0);
		},
		error: function(){}
	});
}
