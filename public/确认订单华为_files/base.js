ec.pkg("ec.account");ec.load("jquery.autocomplete",{loadType:"lazy",callback:function(){$("#search-kw").autocomplete({serviceUrl:"/search_keywords",minChars:1,maxHeight:400,deferRequestBy:100})}});function gid(a){return document.getElementById(a)}ec.account.isLogin=function(){return ec.account.id&&ec.account.loginName};ec.account.getStatus=function(a){$.ajax({url:domainAccount+"/status.json?t="+new Date().getTime(),dataType:"jsonp",timeout:10000,jsonop:"callback",type:"get",success:function(c){if(c&&c.id>0){ec.account.id=c.id;ec.account.uid=c.uid;ec.account.name=c.name;ec.account.nickName=c.nickName;ec.account.loginName=c.loginName;ec.account.email=c.email;ec.account.mobile=c.mobile;ec.account.isQueue=c.isQueue;ec.account.custGrade=c.custGrade;ec.account.custPrivilege=c.custPrivilege;ec.account.custPoint=c.custPoint;ec.account.userState=c.userState;ec.account.isAuthCust=c.isAuthCust;var b=ec.util.cookie.get("ifl_v");if(b=="1"){$.ajax({url:"/account/load",type:"POST"})}}a()}})};ec.account.getAccountStatus=function(a,c,b){if(a){if(b){ec.load({url:domainMain+"/account/status?"+(new Date()).getTime(),type:"js",onload:c})}else{ec.load({url:domainMain+"/account/status?"+(new Date()).getTime(),type:"js",loadType:"lazy",onload:c})}}};ec.account.getLoginInfo=function(g,d){var a=ec.util.cookie.get("ac_li");var c=ec.util.cookie.get("uid");var b=ec.util.cookie.get("isValCas");try{if(c&&b&&"false"==b){ec.account.id=ec.util.cookie.get("uid");ec.account.uid=ec.util.cookie.get("uid");ec.account.name=ec.util.cookie.get("user");ec.account.nickName=ec.util.cookie.get("name");ec.account.loginName=ec.util.cookie.get("user");ec.account.isValCas="false";$.ajax({url:"/account/load?uid="+c,async:false,type:"POST"});ec.account.getAccountStatus(c,g,d);ec.account.isValCas=ec.util.cookie.get("isValCas");g();return}if(a&&c){ec.account.id=ec.util.cookie.get("uid");ec.account.uid=ec.util.cookie.get("uid");ec.account.name=ec.util.cookie.get("user");ec.account.nickName=ec.util.cookie.get("name");ec.account.loginName=ec.util.cookie.get("ac_loNa");ec.account.email=ec.util.cookie.get("ac_lel");ec.account.mobile=ec.util.cookie.get("ac_lmi");ec.account.isQueue=ec.util.cookie.get("ac_liq");ec.account.custGrade=ec.util.cookie.get("ac_lgc");ec.account.custPrivilege=ec.util.cookie.get("ac_cp");ec.account.custPoint=ec.util.cookie.get("ac_ltp");ec.account.userState=ec.util.cookie.get("ac_lus");g();return}}catch(f){}ec.account.getAccountStatus(c,g,d)};(function(){var c=function(){setTimeout(function(){if(ec.account.isLogin()){var h=ec.util.escapeHtml(ec.account.nickName)||ec.util.escapeHtml(ec.account.name)||ec.account.loginName;if(h.length>10){h=h.substring(0,10)+"..."}$("#customer_name").html(h);if($("#cart_unlogin_info")[0]){$("#cart_unlogin_info p").html('<a href="/member?t='+new Date().getTime()+'">'+h+"</a>")}$("#login_status,#cart_login_info").show();$("#up_user_center").show();$("#unlogin_status,#cust_login_info").hide();ec.account.showVipInfo();var f=ec.util.cookie.get("isAuthCust");if("true"==f){$("#authentication").html("");$("#authentication").html('<i class="icon-authentication icon-authentication-success"></i>&nbsp;')}else{$("#authentication").html("");$("#authentication").html('<i class="icon-authentication icon-authentication-not"></i>&nbsp;')}var g=ec.util.cookie.get("caibeiShowMsg"),d=ec.util.cookie.get("caibeiHeadShow"),e=ec.util.cookie.get("caibeiJifenUrl");if(g!=undefined&&g!=null&&g.length>0){$("#HeadShow").html(d);if(e!=undefined&&e!=null&&e.length>0){g=g+"<b>|</b><a href='"+e+"' title='\u6211\u7684\u5f69\u8d1d\u79ef\u5206' target='_blank'>\u6211\u7684\u5f69\u8d1d\u79ef\u5206</a>"}$("#ShowMsg").html(g);$("#caibeiMsg").show()}}},200)};var a=function(i){var h="callback"+new Date().getTime(),e="/account/login?type=frame&url="+encodeURIComponent("/account/upCallback.html?"+h),d="up-iframe-"+(new Date()).getTime(),f='<iframe class="boxIframe" width="100%" height="100%" frameborder="0" name="'+d+'" src="about:blank" scrolling="no"></iframe><script>setTimeout(function(){window["'+d+'"].location.href="'+e+'";} ,100);<\/script>';var g=new ec.box(f,{boxid:"ec_login",title:" ",remember:false,width:500,height:470,showButton:false,onclose:function(j){try{delete window[h]}catch(k){window[h]=null}j.find("iframe").each(function(){this.contentWindow.close();jQuery(this).remove()})}}).open();window[h]=function(){if(typeof isUseAccount!="undefined"&&isUseAccount=="true"){ec.account.getStatus(c)}else{ec.account.getLoginInfo(c,false);ec.util.cookie.get("ifl_v")}i();g.close()}};var b=function(){var e=$("#casLoginUrl").val(),d=e+encodeURIComponent(encodeURIComponent(window.location.href));window.location.href=d};ec.account.afterLogin=function(d){if(ec.account.isLogin()){d()}else{b()}};if(typeof isUseAccount!="undefined"&&isUseAccount=="true"){ec.account.getStatus(c)}else{ec.account.getLoginInfo(c,true)}ec.ready(function(){ec.base.getTotal()})})();ec.account.showVipInfo=function(){if(ec.account.userState&&ec.account.userState=="1"){$("#vip-inActive").hide();$("#vip-Active i").removeClass().addClass("icon-vip-level-"+ec.account.custGrade);$("#vip-Active").attr("title","VMALL V"+ec.account.custGrade+"\u4f1a\u5458");$("#vip-Active").show();var a=[];a.push('<em class="vip-state" id="vip-info">&nbsp;&nbsp;&nbsp;&nbsp;');a.push('<a href="/member/point" title="VMALL V'+ec.account.custGrade+'\u4f1a\u5458" id="vip-Active" ><i class="icon-vip-level-'+ec.account.custGrade+'"></i></a>');a.push("</em>");$("#cart_unlogin_info p").append(a.join(""))}else{if(ec.account.isValCas&&"false"==ec.account.isValCas){$("#vip-inActive").hide();$("#vip-Active").hide()}else{$("#cart_unlogin_info p").append('&nbsp;&nbsp;<em class="vip-state"><a class="link-noAct" href="/member/account" id="vip-inActive" title="\u8bf7\u5b8c\u5584\u4e2a\u4eba\u4fe1\u606f\uff0c\u5373\u523b\u4eab\u53d7\u4f1a\u5458\u7279\u6743">\u53bb\u6fc0\u6d3b</a></em>');$("#vip-inActive").show();$("#vip-Active").hide()}}};ec.pkg("ec.minicart");ec.minicart.del=function(c,d,a){var b={sbs:d.toString(),types:a.toString()};ec.cart.del(b,function(){$(c).parents("li").remove()})};ec.pkg("ec.product");ec.product.history={load:function(c,b,a){$.ajax({url:"/product/browsed/query.json",data:{size:b?b:undefined,pid:a?a:undefined},dataType:"json",success:function(d){if(!d.success){return}c(d.list||[])}})},add:function(b){var a=new Image();a.src="/product/browsed/add?id="+b+"&_t="+(new Date()).getTime();a=null},clear:function(b){var a=new Image();a.src="/product/browsed/clear?_t="+(new Date()).getTime();a=null;if(b){b()}}};ec.product.inventory={_data:{},set:function(b,a){this._data[b]=a},haveInventory:function(a){return this._data[a]}};ec.pkg("ec.cart");ec.cart.add=function(b,a,d){if(b.type==1){ec.code.addAnalytics({hicloud:false,operate:true,optype:1,skuIds:b.skuIds,bundleIds:[],custBundleIds:[],custSkuIds:[]})}else{if(b.type==2){ec.code.addAnalytics({hicloud:false,operate:true,optype:1,skuIds:[],bundleIds:b.skuIds,custBundleIds:[],custSkuIds:[]})}}var c={};c.sbs=b.skuIds.join(",");c.type=b.type.join(",");c.qty=b.quantity.join(",");if(b.extendSkuIds&&b.extendSkuIds.length>0){c.ess=b.extendSkuIds.join(",")}$.ajax({url:domainMain+"/order/shoppingCart/addcart.json",dataType:"jsonp",timeout:30000,traditional:true,data:c,success:function(f){if(!f.success){if(a.errorFunction){a.errorFunction(f)}return}if(a.successFunction){c.qty=b.quantity.join(",");var e=new Date();c.t=e.getTime();$.ajax({url:domainCart+"/cart/add.json",dataType:"jsonp",timeout:30000,traditional:true,data:c,success:function(g){if(!g.success){if(a.errorFunction){a.errorFunction(g)}return}if(a.successFunction){a.successFunction(g)}},error:function(j,i,h){if(a.errorFunction){var g={};g.msg=i;a.errorFunction(g)}}})}},error:function(i,h,g){if(a.errorFunction){var f={};f.msg=h;a.errorFunction(f)}}})};ec.cart.getCartItemsInternal=function(b,a){$.ajax({url:domainCart+"/cart/shoppingCart.json?t="+new Date().getTime(),dataType:"jsonp",timeout:10000,success:function(c){if(c.cart&&c.cart.length>0){b(c.cart,a)}else{b(null,a)}}})};ec.cart.getCartItems=function(d,a){var c=ec.util.cookie.get("cartId");if(c&&c.length>0){var b=ec.util.cookie.get("isValCas");if(b&&"false"==b){$.ajax({url:"/account/load",type:"POST"})}$.ajax({url:domainCart+"/cart/cache2cart.json?t="+new Date().getTime(),dataType:"jsonp",timeout:10000,cache:false,success:function(e){ec.cart.getCartItemsInternal(d,a)}})}else{ec.cart.getCartItemsInternal(d,a)}};ec.cart.buildQueryData=function(e){var h=[];var g=[];var b=[];var c=[];for(var f=0;f<e.length;f++){var a=e[f];if(a.skuId){h.push(a.skuId)}else{if(a.bundleId){h.push(a.bundleId)}else{continue}}g.push(a.productType);b.push(a.quantity);if(a.mainSkuId){c.push(a.mainSkuId)}else{c.push("")}}var d=new Date();return{sbs:h.join(","),types:g.join(","),qtys:b.join(","),ess:c.join(","),t:d.getTime()}};ec.cart.getOnceCartInfo=function(a,d,b){var c=ec.cart.buildQueryData(a);$.ajax({url:domainMain+"/order/shoppingCart/cart.json",dataType:"jsonp",timeout:10000,traditional:true,data:c,success:function(e){if(b!=null){d(e,b)}else{if(!e.success||!e.cartInfo){return}else{d(e)}}},error:function(){if(b!=null){var e={};e.success=false;d(e,b)}}})};ec.cart.batchCount=50;ec.cart.getCartInfo=function(e,o){if(!e||e.length==0){o({});return}if(e.length<=ec.cart.batchCount){ec.cart.getOnceCartInfo(e,o)}else{var n=[];var a=[];var d=[];outer:for(var h=0;h<e.length;h++){var b=e[h];if(b.productType==1){d.push(b);if(d.length==ec.cart.batchCount){n.push(d);d=[]}}else{if(b.productType==6){for(var f=0;f<n.length;f++){var g=n[f];if(g[0].productType==1){for(var c=0;c<g.length;c++){if(g[c].skuId==b.mainSkuId){g.push(b);continue outer}}}}for(var f=0;f<d.length;f++){if(d[f].skuId==b.mainSkuId){d.push(b)}}}else{a.push(b);if(a.length==ec.cart.batchCount){n.push(a);a=[]}}}}if(a.length>0){if(a.length+d.length<=ec.cart.batchCount){a.push(d);n.push(a)}else{n.push(a);n.push(d)}}else{if(d.length>0){n.push(d)}}var m={};m.cartInfo={};m.cartInfo.bundlerList=[];m.cartInfo.productList=[];m.cartInfo.couponList=[];m.cartInfo.premiumsList=[];m.cartInfo.totalOriginalPrice=0;m.cartInfo.totalPrice=0;m.limitstock=[];m.understock=[];var l=0;for(var h=0;h<n.length;h++){var g=n[h];ec.cart.getOnceCartInfo(g,function(j,k){l+=1;if(j.success&&j.cartInfo){if(j.cartInfo.bundlerList&&j.cartInfo.bundlerList.length>0){m.cartInfo.bundlerList=m.cartInfo.bundlerList.concat(j.cartInfo.bundlerList)}if(j.cartInfo.productList&&j.cartInfo.productList.length>0){m.cartInfo.productList=m.cartInfo.productList.concat(j.cartInfo.productList)}if(j.cartInfo.couponList&&j.cartInfo.couponList.length>0){m.cartInfo.couponList=m.cartInfo.couponList.concat(j.cartInfo.couponList)}if(j.cartInfo.premiumsList&&j.cartInfo.premiumsList.length>0){m.cartInfo.premiumsList=m.cartInfo.premiumsList.concat(j.cartInfo.premiumsList)}m.cartInfo.totalOriginalPrice+=j.cartInfo.totalOriginalPrice;m.cartInfo.totalPrice+=j.cartInfo.totalPrice;if(j.limitstock&&j.limitstock.length>0){m.limitstock=m.limitstock.concat(j.limitstock)}if(j.understock&&j.understock.length>0){m.understock=m.understock.concat(j.understock)}}if(l==n.length){o(m)}},h)}}};ec.cart.getCart=function(a){ec.cart.getCartItems(ec.cart.getCartInfo,a)};ec.cart.getCartBaseInfo=function(a,c){if(a&&a.length>0){var b=ec.cart.buildQueryData(a);$.ajax({url:"/page/baseInfo.json",type:"POST",dataType:"json",data:b,success:function(d){c(d)}})}else{c({cartInfo:{totalNumber:0,totalPrice:0}})}};ec.cart.getCartBase=function(a){ec.cart.getCartItems(ec.cart.getCartBaseInfo,a)};ec.cart.getTotal=function(){ec.cart.getCartBase(function(r){var q=r.cartInfo,a=r.shopInfo,s=$("#minicart-pro-empty"),l=$("#minicart-pro-list-block"),n=$("#minicart-pro-settleup");if(ec.minicart.microCartTpl){$("#header-cart-total,#micro-cart-total").html(q.totalNumber||0);if(q.totalNumber>0){var i=0;var c=0;var o=0;for(var p=0;p<q.bundlerList.length;p++){var k=q.bundlerList[p];i+=k.originalPrice*k.quantity;o+=k.preferentialPrice}for(var h=0;h<q.productList.length;h++){var b=q.productList[h];var e=b.quantity;i+=b.ecshopPrice*e;o+=(b.ecshopPrice-b.skuPrice)*e;if(b.extendList.length>0){for(var g=0;g<b.extendList.length;g++){var t=b.extendList[g];var m=t.skuPrice;i+=m*e}}if(b.accidentList.length>0){for(var f=0;f<b.accidentList.length;f++){var d=b.accidentList[f];var m=d.skuPrice;i+=m*e}}}c=i-o;$("#micro-cart-totalPrice").html("&yen;&nbsp;"+parseFloat(c).toFixed(2));$("#minicart-pro-list").html(ec.minicart.microCartTpl.parse("microCartList",q));l.show();n.show();s.hide();if((q.productList.length+q.bundlerList.length)>5){l.addClass("minicart-pro-list-scroll")}else{l.removeClass("minicart-pro-list-scroll")}}else{s.show();l.hide();n.hide()}if(a){$("#toolbar-orderWaitingHandleCount").html(a.orderWaitingHandleCount).attr("class",(a.orderWaitingHandleCount<=0)?"hide":"");$("#toolbar-couponCount").html(a.couponCount).attr("class",(a.couponCount<=0)?"hide":"");$("#toolbar-newMsgCount").html(a.newMsgCount).attr("class",(a.newMsgCount<=0)?"hide":"")}}if(r.enterpriseUser){$("#preferential").html('<a  href="'+domainMain+'/member/enterprise" title="\u4f18\u60e0\u5185\u8d2d" rel="nofollow">\u4f18\u60e0\u5185\u8d2d</a>').show();$("#li-enterprise").html('<a href="'+domainMain+'/member/enterprise" title="\u4f18\u60e0\u5185\u8d2d"><span>\u4f18\u60e0\u5185\u8d2d</span></a>').show()}})};ec.cart.del=function(f,k,d){var j=f.types.split(",");var l=[];var g=[];var a=f.sbs.split(",");var h=a.length;for(var e=0;e<h;e++){if(j[e]==1){l.push(a[e])}else{if(j[e]==2){g.push(a[e])}}}ec.code.addAnalytics({hicloud:false,operate:true,optype:0,skuIds:l,bundleIds:g,custBundleIds:[],custSkuIds:[]});if(!d){ec.ui.loading.show({modal:false})}var b=new Date();f.t=b.getTime();var c={data:f,dataType:"jsonp",timeout:10000,timeoutFunction:function(){ec.ui.loading.hide();alert("\u64cd\u4f5c\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},successFunction:function(i){if(!i.success){ec.ui.loading.hide();ec.showError(i);return}if(k){k(i)}ec.ui.loading.hide();return}};c.url=domainCart+"/cart/del.json";new ec.ajax().get(c)};ec.cart.setRecover=function(a){ec.util.cookie.set("cart-recover",a,{domain:".vmall.com",path:"/"})};ec.cart.removeSkuFromRecover=function(b,d){var a=ec.util.cookie.get("cart-recover");if(a){var c=new RegExp(","+b+";\\d+,");a=a.replace(c,",");ec.cart.setRecover(a)}if(d){d(a)}};ec.cart.jumpToConfirm=function(a,f){var d=[];var b=[];var c=[];var e=[];a.each(function(){var g=$(this).closest("tbody");var l=this.value;var k=$("#quantity-"+l,g).val();var i=$("#quantity-"+l,g).attr("data-type");if(k){d.push(l);b.push(i);c.push(k);e.push("");var j=$('input[name="extendIds"]',g).val();if(j){d.push(j);b.push(6);c.push(k);e.push(l)}var h=$('input[name="accidentIds"]',g).val();if(h){d.push(h);b.push(7);c.push(k);e.push(l)}}});f.each(function(){var g=$(this).closest("tbody");var j=this.value;var i=$("#quantity-bundle-"+j,g).val();var h=$("#quantity-bundle-"+j,g).attr("data-type");if(i){d.push(j);b.push(h);c.push(i);e.push("")}});setTimeout(function(){ec.cart.confirm(1,d.join(","),b.join(","),c.join(","),e.join(","))},500)};ec.cart.confirm=function(h,f,c,e,g,b,d){var a=$('<form action="'+domainMain+'/order/confirmcart" method="post"></form>');a.append('<input name="sbs" type="hidden" value="'+f+'" />');a.append('<input name="types" type="hidden" value="'+c+'" />');a.append('<input name="qtys" type="hidden" value="'+e+'" />');a.append('<input name="ess" type="hidden" value="'+g+'" />');if(h){a.append('<input name="state" type="hidden" value="'+h+'" />')}if(b){a.append('<input name="orderTag" type="hidden" value="'+b+'" />')}if(d){a.append('<input name="groupRecordId" type="hidden" value="'+d+'" />')}$("body").append(a);a.submit()};ec.pkg("ec.base");ec.base.getTotal=function(){$.ajax({url:domainMain+"/page/totalInfo.json",dataType:"jsonp",success:function(b){if(b.enterpriseUser){$("#preferential").html('<a href="'+domainMain+'/member/enterprise" title="\u4f18\u60e0\u5185\u8d2d" rel="nofollow">\u4f18\u60e0\u5185\u8d2d</a>').show();$("#li-enterprise").html('<a href="'+domainMain+'/member/enterprise" title="\u4f18\u60e0\u5185\u8d2d"><span>\u4f18\u60e0\u5185\u8d2d</span></a>').show()}if(ec.account.isLogin()){var a=ec.util.cookie.get("isAuthCust");if("true"==a){$("#authentication").html("");$("#authentication").html('<i class="icon-authentication icon-authentication-success"></i>&nbsp;')}else{$("#authentication").html("");$("#authentication").html('<i class="icon-authentication icon-authentication-not"></i>&nbsp;')}}}})};function search(b){var a=$("#search-kw").val();if(ec.util.isEmpty(a)){a=$("#default-search").val();if(ec.util.isEmpty(a)){return false}}window.location.href="/search?keyword="+encodeURIComponent(a);return false}(function(){var a;ec.ready(function(){$("#ec_ui_confirm_no").unbind("click").click(function(){$("#ec_ui_confirm").hide()});$("#ec_ui_confirm_new_no").unbind("click").click(function(){$("#ec_ui_confirm_new").hide()});$("#ec_ui_tips_yes").unbind("click").click(function(){$("#ec_ui_tips").hide()})});ec.ui.confirm=function(h,d){var c=ec.ui.confirm.caller,b=c.arguments;if(a!=null&&b[b.length-1]==a){a=null;return true}$("#ec_ui_confirm_msg").html(d);var m=$(h),f=$("#ec_ui_confirm"),j=m.offset(),o=j.top-f.outerHeight(true)-5,e=j.left-f.outerWidth(true)/2,n=[],g=b.length,l=b.callee.length;for(var k=0;k<g;k++){n.push(b[k])}n[l]=(a=(new Date()).getTime());$("#ec_ui_confirm_yes").unbind("click").click(function(){$("#ec_ui_confirm").hide();c.apply(this,n);n=null});f.css({top:o,left:e,position:"absolute"}).show();return false};ec.ui.confirmNew=function(k,d,f,p){var c=ec.ui.confirmNew.caller,b=c.arguments;if(a!=null&&b[b.length-1]==a){a=null;return true}$("#ec_ui_confirm_new_msg").html(d);if(f){$("#ec_ui_confirm_new_yes").attr("title",f);$("#ec_ui_confirm_new_yes").html("<span>"+f+"</span>")}if(p){$("#ec_ui_confirm_new_no").attr("title",p);$("#ec_ui_confirm_new_no").html("<span>"+p+"</span>")}var n=$(k),g=$("#ec_ui_confirm_new"),j=n.offset(),q=j.top-g.outerHeight(true)-5,e=j.left-g.outerWidth(true)/9,o=[],h=b.length,m=b.callee.length;for(var l=0;l<h;l++){o.push(b[l])}o[m]=(a=(new Date()).getTime());$("#ec_ui_confirm_new_yes").unbind("click").click(function(){$("#ec_ui_confirm_new").hide();c.apply(this,o);o=null});g.css({top:q,left:e,position:"absolute"}).show();return false};ec.ui.tips=function(h,g){$("#ec_ui_tips_msg").html(g);var c=$(h),b=$("#ec_ui_tips"),f=c.offset(),e=f.top-b.outerHeight(true)-5,d=f.left-b.outerWidth(true)/2;b.css({top:e,left:d,position:"absolute"}).show()}})();$.extend(ec.form.validator.defaults,{errorClass:"error",autoFocus:false,errorFunction:function(c,a){var b="icon-error",d=a.msg[a.type]||a.msg["default"];d=(d.length<=0)?"&nbsp;":d;switch(a.type){case"require":b="icon-warn";break}if(a.msg_ct){$(a.msg_ct).html("<span class='vam "+b+"'>"+d+"</span>")}else{var e=(c.attr("id")||c.attr("name"))+"-msg";$("#"+e).remove();c.after("<span id='"+e+"' class='vam "+b+"'>"+d+"</span>")}if(a.autoFocus){c.focus()}},successFunction:function(b,a){if(a.msg_ct){$(a.msg_ct).html("")}else{$("#"+(b.attr("id")||b.attr("name"))+"-msg").remove()}}});ec.form.validator.register("mobile",function(b,a){if(a.allowEmpty&&ec.util.isEmpty(b)){return true}if(b.length<11){return false}return/^(\+|00)?((86)?(1[34578])[0-9]{9}|852[965][0-9]{7})$/.test(b)});ec.form.validator.register("phone",function(b,a){if(a.allowEmpty&&ec.util.isEmpty(b)){return true}if(b.length<7){return false}return/^((0[0-9]{2,3}\-)?[2-9][0-9]{6,7}|((00852|\+852)\-)?([2-3][0-9]{7}))+(\-[0-9]{1,4})?$/.test(b)});ec.form.validator.register("mobleOrPhone",function(b,a){if(a.allowEmpty&&ec.util.isEmpty(b)){return true}if(b.length<11){return false}return/(^((0[0-9]{2,3}\-)?[2-9][0-9]{6,7}|((00852|\+852)\-)?([2-3][0-9]{7}))+(\-[0-9]{1,4})?$)|(^(\+|00)?((86)?(1[34578])[0-9]{9}|852[965][0-9]{7})$)/.test(b)});ec.form.validator.register("forbidChar",function(b,a){if(a.allowEmpty&&ec.util.isEmpty(b)){return true}b=b.replace("*","@"),b=b.replace("--","@"),b=b.replace("/","@"),b=b.replace("+","@"),b=b.replace("'","@"),b=b.replace("\\","@"),b=b.replace("$","@"),b=b.replace("^","@"),b=b.replace(".","@"),b=b.replace(";","@"),b=b.replace("<","@"),b=b.replace(">","@"),b=b.replace('"',"@"),b=b.replace("=","@"),b=b.replace("{","@"),b=b.replace("}","@");b=b.replace("%","@");b=b.replace("~","@");b=b.replace("&","@");if(b.search(new RegExp("@"))!=-1){return false}return true});ec.ui.number=function(a,b){var c={max:null,min:null,showButton:true,minusBtn:'<a title="\u51cf" class="icon-minus vam" href="javascript:;"><span>-</span></a>',plusBtn:'<a title="\u52a0" class="icon-plus vam" href="javascript:;"><span>+</span></a>'},d=$(a),b=$.extend(c,b),e=function(f){var h=f.which,g=parseInt(this.value,10),i=(g<1)?1:g;if((h<37||h>40)&&h!=8&&h!=46){if(i>b.max||i<b.min){f.preventDefault();return false}else{if((h<48||h>57)&&(h<96||h>105)&&h!=9){f.preventDefault();return false}}}};d.each(function(){var h=$.extend({},b),f=$(this).css("ime-mode","disabled");var g=f.attr("max");if(g){b.max=h.max=parseInt(g,10)||h.max}g=f.attr("min");if(g){b.min=h.min=parseInt(g,10)||h.min}if(h.showButton){var j=$(h.minusBtn).click(function(){var k=f.val()||0,l=parseInt(k,10)-1;if(typeof(h.min)=="number"&&l<h.min){return}f.val(l).trigger("blur")}),i=$(h.plusBtn).click(function(){var k=f.val()||0,l=parseInt(k,10)+1;if(typeof(h.max)=="number"&&l>h.max){return}f.val(l).trigger("blur")});f.after(i).before(j)}f.data("ovalue",f.val()||0).keydown(e).keyup(function(){var k=parseInt(this.value||0);if(typeof(h.min)=="number"&&k<h.min){this.value=h.min;return}else{if(typeof(h.max)=="number"&&k>h.max){this.value=h.max;return}}}).blur(function(){if(typeof h.onchange==="function"){var k=f.data("ovalue"),l=this.value||0,m=parseInt(l,10)-parseInt(k,10);if(m==0){return}f.data("ovalue",l);h.onchange.call(this,l,m)}})})};ec.ui.countdown=function(d,l){var f=$(d),b=f.data("countdown"),k=0,i,j,e=l.now.getTime()-new Date().getTime(),c=0,h=function(){if(k>=l.times.length){return false}i=l.times[k];k++;return true},g=function(){c=Math.round((i.parseDate("yyyy-MM-dd HH:mm:ss").getTime()-new Date().getTime()-e)/1000);c=c<=0?0:c;return c},a=function(){c--;if(c<=0){c=0}j={day:Math.floor(c/(24*60*60)),hour:(l.html.indexOf("{#day}")>=0)?Math.floor(c/60/60)%24:Math.floor(c/60/60),minute:Math.floor(c/60)%60,second:c%60};var m=l.html.replace(/{#day}/g,j.day).replace(/{#hours}/g,j.hour>9?j.hour:"0"+j.hour).replace(/{#minutes}/g,j.minute>9?j.minute:"0"+j.minute).replace(/{#seconds}/g,j.second>9?j.second:"0"+j.second);f.html(m);return(c<=0)?false:true};if(!l.times){l.times=[l.endTime]}clearInterval(b);while(h()){if(g()<=0){continue}break}if(!a()){return}b=setInterval(function(){if(!a()){if(l.callback){l.callback(l)}if(!h()){clearInterval(b)}else{g()}}},1000);f.data("countdown",b)};(function(){var b=$(window),i=false,a=document.compatMode=="CSS1Compat"?document.documentElement:document.body,f=0,c=0,g,d=[],e,h=function(j){var k=j.offset().top,l=k+j.height();if((k>=f&&k<=c)||(l>=f&&l<=c)){j.attr("src",j.attr("data-lazy-src"));j.removeAttr("data-lazy-src");return true}return false};_bindEvent=function(){var j=function(){clearTimeout(e);e=setTimeout(function(){f=b.scrollTop();c=f+g;var l;for(var m=0;m<d.length;m++){l=d[m];if(h(l)){d.splice(m,1);m--}}if(!d||d.length==0){b.unbind("scroll",j);b.unbind("resize",k)}},100)},k=function(l){g=a.clientHeight};b.bind("scroll",j);b.bind("resize",k);g=a.clientHeight;f=b.scrollTop();c=f+g};ec.ui.lazyLoad=function(j){if(!i){_bindEvent();i=true}$(j).each(function(){if(this.tagName!="IMG"){return}var k=$(this);if(k.attr("data-lazy-src")){if(!h(k)){k.attr("src",ol.libPath+"../../images/echannel/loading/mask.png");d.push(k)}}})}})();ec.ready(function(){ec.ui.lazyLoad($("body").children(".layout,.g").find("img"));ec.ui.hrefSetTime()});ec.showError=function(a){if(a.code=="login"){alert("\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55");location.reload();return false}alert(a.msg)};ec.load("ajax",{loadType:"lazy"});(function(){var a=function(){var e=ec.form.validator.bind,d=$("#surveryContent"),b=$("#surveryContact"),c=$("#surveryVerify");e(d,{type:["require","length","forbidChar"],validOnChange:true,msg_ct:"#errMsg",max:200,min:5,msg:{require:"\u60a8\u8fd8\u6ca1\u6709\u8f93\u5165\u53cd\u9988\u4fe1\u606f\u54e6",length:"\u53cd\u9988\u4fe1\u606f\u5185\u5bb9\u8bf7\u63a7\u5236\u57285~200\u4e2a\u5b57\u7b26\u4e4b\u95f4",forbidChar:"\u53cd\u9988\u4fe1\u606f\u91cc\u5305\u542b\u975e\u6cd5\u5b57\u7b26"}});e(b,{type:["length"],validOnChange:true,msg_ct:"#errMsg",min:2,max:100,msg:{length:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u65b9\u5f0f"}});e(c,{type:["require"],validOnChange:true,msg_ct:"#errMsg",msg:{require:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}});if(ec.account.isLogin()){b.val(ec.util.escapeHtml(ec.account.email)||ec.util.escapeHtml(ec.account.mobile)||ec.account.loginName)}ec.form.input.label(b,"\u9009\u586b\uff0c\u90ae\u7bb1\u6216\u8005\u8d26\u6237");ec.form.input.label(d,"\u8c22\u8c22\u60a8\u7684\u5b9d\u8d35\u5efa\u8bae\uff0c\u6211\u4eec\u5c06\u4e0d\u65ad\u6539\u8fdb")};ec.survery={open:function(){if(a){a();a=null}ol.ui.masker.mask({css:{opacity:0.4}});ec.survery.reloadCode();$("#survery-box").show()},close:function(){ol.ui.masker.unmask();$("#survery-box").hide()},submit:function(c){if(!ec.form.validator(c,true)){return false}var b=this.box;new ec.ajax().submit({form:c,url:"/feedback.json",timeout:10000,timeoutFunction:function(){alert("\u4fdd\u5b58\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},successFunction:function(d){if(!d.success){$("#errMsg").html('<span class="error">\u63d0\u4ea4\u5931\u8d25\uff0c'+d.msg+"</span>");return}alert("\u63d0\u4ea4\u6210\u529f\uff0c\u534e\u4e3a\u611f\u8c22\u60a8\u7684\u5b9d\u8d35\u5efa\u8bae\uff01");ec.survery.close();$("#surveryContent,#surveryVerify").val("");return}});return false},reloadCode:function(){gid("surveryVerifyImg").src="/feedback/randomCode?_t="+(new Date()).getTime()}}})();$(function(){var c=$(window),d,b=$("#hungBar-top"),a=function(){b.stop();if(c.scrollTop()>50){b.fadeTo(5000,1)}else{b.fadeOut(5000)}d=null};c.scroll(function(){d=setTimeout(a,50)});a()});(function(){ec.ui.hrefSetTime=function(){var b=(new Date()).getTime();try{$("a[timeType=timestamp]").each(function(){var c=$(this);c.attr("href",c.attr("href").replace(/timestamp/g,b))})}catch(a){console.log(a)}}})();ec.pkg("ec.encipher");ec.encipher.base=10;ec.encipher.bigPowMod=function(f,e,g){f=str2bigInt(f,ec.encipher.base);e=str2bigInt(e,ec.encipher.base);g=str2bigInt(g,ec.encipher.base);var d=powMod(f,e,g);d=bigInt2str(d,ec.encipher.base);return d};ec.encipher.randomInt=function(b){var a=randBigInt(b,0);return bigInt2str(a,ec.encipher.base)};ec.encipher.getServerKey=function(){$.ajax({type:"get",url:"/system/getKey.json?t="+new Date().getTime(),async:false,dataType:"json",timeout:10000,success:function(a){if(!(a.success)){return}ec.util.cookie.set("sc_p",a.pubkey)}})};ec.encipher.getEncryptData=function(a,d,j){var l="";var g="13232376895198612407547930718267435757728527029623408872245156039757713029036368719146452186041204237350521785240337048752071462798273003935646236777459223",k="5421644057436475141609648488325705128047428394380474376834667300766108262613900542681289080713724597310673074119355136085795982097390670890367185141189796",i=ec.encipher.randomInt(128),c=ec.encipher.bigPowMod(k,i,g),e=ec.util.cookie.get("sc_p"),h,f;if(d==""||d==null){f=a+"?pubkey="+c+"&seType=r&t="+new Date().getTime()}else{f=a+"?argument="+d+"&pubkey="+c+"&seType=r&t="+new Date().getTime()}$.ajax({type:"get",url:f,dataType:"json",async:false,timeout:10000,success:function(b){if(!b.success){return}h=ec.encipher.bigPowMod(e,i,g);l=j(b.data,h)}});return l};ec.encipher.getKey=function(g){var d="13232376895198612407547930718267435757728527029623408872245156039757713029036368719146452186041204237350521785240337048752071462798273003935646236777459223",e="5421644057436475141609648488325705128047428394380474376834667300766108262613900542681289080713724597310673074119355136085795982097390670890367185141189796",a=ec.encipher.randomInt(128),f=ec.encipher.bigPowMod(e,a,d),c;$.ajax({type:"get",url:domainShoppingConfig+"/member/smyAddresses.json?pubkey="+f+"&seType=r&t="+new Date().getTime(),dataType:"jsonp",async:true,timeout:10000,success:function(b){if(!b.success){return}ec.util.cookie.set("sc_p",b.pubkey);c=ec.encipher.bigPowMod(b.pubkey,a,d);g(b.shoppingConfigList,b.randomFlag,c)}})};ec.encipher.encrypt=function(h){var d="13232376895198612407547930718267435757728527029623408872245156039757713029036368719146452186041204237350521785240337048752071462798273003935646236777459223",g="5421644057436475141609648488325705128047428394380474376834667300766108262613900542681289080713724597310673074119355136085795982097390670890367185141189796",a=ec.encipher.randomInt(128),i=ec.encipher.bigPowMod(g,a,d),e=ec.util.cookie.get("sc_p"),c=ec.encipher.bigPowMod(e,a,d);if(c.length>16){c=c.substring(0,16)}var f=rc4_str_base64(c,h);return{val:f,pubkey:i}};ec.encipher.decrypt=function(b,a){if(a.length>16){a=a.substring(0,16)}return rc4_base64_str(a,b)};ec.pkg("ec.addr");ec.addr.save=function(b,d){var k=$(b);var q=k.find("input[name=id]").val();var f="/member/smyAddresses.json?_method=post";var m="post";var a=k.find("select[name=province]").val();var s=k.find("select[name=city]").val();var r=k.find("select[name=district]").val();var l=k.find("select[name=street]").val();if(!a||!s||!r){k.find("#myAddress-msg").addClass("icon-error label-error");return}else{if(l==""){k.find("#myAddress-msg").addClass("icon-error label-error");return}else{k.find("#myAddress-msg").removeClass("icon-error label-error")}}var i=k.find("input[name=mobile]");var n=k.find("input[name=phone]");if(i.hasClass("error")||n.hasClass("error")){return false}if(!ec.form.validator(k,false)){return false}var c=$.trim(k.find("input[name=mobile]").val());var g=$.trim(k.find("input[name=phone]").val());if(ec.util.isEmpty(c)){return false}if(d.afterCheck){d.afterCheck(q)}if(d.type!="add"){f="/member/smyAddresses/"+q+".json?_method=put"}var h=k.find("input[name=consignee]").val();var e=k.find("input[name=address],textarea[name=address]").val();var j=k.find("input[name=zipCode]").val();var p=k.find("input[name=randomFlag]").val();var v={};v.consignee=h;v.province=a;v.city=s;v.district=r;v.street=l;v.address=e;v.zipCode=j;v.mobile=c;v.phone=g;v.randomFlag=p;var u=k.find("input[name=defaultFlag]");if(u.length==1&&u[0].checked&&!u[0].disabled){v.defaultFlag=u.val()}v.t=new Date().getTime();var t=ec.lang.json.stringify(v);t=ec.encipher.encrypt(t);var o=t.pubkey;t=encodeURIComponent(t.val);new ec.ajax().get({url:domainShoppingConfig+f+"&pubkey="+o+"&encryptedData="+t+"&seType=r&t="+new Date().getTime(),dataType:"jsonp",timeout:20000,timeoutFunction:function(){alert("\u4fdd\u5b58\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},beforeSendFunction:ec.ui.loading.show,afterSendFunction:ec.ui.loading.hide,successFunction:function(w){if(!w.success){ec.showError(w);return}if(d.successFunction){d.successFunction(w.shoppingConfigList,b)}}});return false};ec.addr.setDefault=function(c,a){var b=ec.util.cookie.get("sc_b");new ec.ajax().get({url:domainShoppingConfig+"/member/myAddresses/default.json?id="+c+"&_method=PUT&t="+new Date().getTime(),dataType:"jsonp",timeout:20000,timeoutFunction:function(){alert("\u64cd\u4f5c\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},beforeSendFunction:function(){ec.ui.loading.show({modal:false})},afterSendFunction:ec.ui.loading.hide,successFunction:function(d){if(!d.success){ec.showError(d);return}if(a.successFunction){a.successFunction(c)}}})};ec.addr.getAll=function(a){new ec.ajax().get({url:domainShoppingConfig+"/member/myAddresses.json",dataType:"jsonp",timeout:20000,timeoutFunction:function(){alert("\u64cd\u4f5c\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},beforeSendFunction:function(){ec.ui.loading.show({modal:false})},afterSendFunction:ec.ui.loading.hide,successFunction:function(b){if(!b.success){ec.showError(b);return}if(a.successFunction){a.successFunction(b)}}})};ec.addr.del=function(b,a){new ec.ajax().get({url:domainShoppingConfig+"/member/myAddresses/"+b+".json?_method=delete",dataType:"jsonp",timeout:10000,timeoutFunction:function(){alert("\u8bfb\u53d6\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5\uff01")},beforeSendFunction:ec.ui.loading.show,afterSendFunction:ec.ui.loading.hide,successFunction:function(c){if(!c.success){ec.showError(c);if(c.code=="default"){if(a.deleteDefault){a.deleteDefault(b)}}return}if(a.successFunction){a.successFunction(b)}}})};function base64_encode(e){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var c,b="",d=e.length;for(c=0;c<d-2;c+=3){b+=a.charAt(e.charCodeAt(c)>>>2);b+=a.charAt(((e.charCodeAt(c)&3)<<4)|(e.charCodeAt(c+1)>>>4));b+=a.charAt(((e.charCodeAt(c+1)&15)<<2)|(e.charCodeAt(c+2)>>>6));b+=a.charAt(e.charCodeAt(c+2)&63)}if(d%3===2){b+=a.charAt(e.charCodeAt(c)>>>2);b+=a.charAt(((e.charCodeAt(c)&3)<<4)|(e.charCodeAt(c+1)>>>4));b+=a.charAt(((e.charCodeAt(c+1)&15)<<2));b+="="}else{if(d%3===1){b+=a.charAt(e.charCodeAt(c)>>>2);b+=a.charAt(((e.charCodeAt(c)&3)<<4));b+="=="}}return b}function rc4_key(f){var d=Array(256);var e=Array(256);var c,a,b;for(c=0;c<256;c++){d[c]=f.charCodeAt(c%f.length);e[c]=c}for(c=0,a=0;c<256;c++){a=(a+e[c]+d[c])%256;b=e[c];e[c]=e[a];e[a]=b}return e}function rc4_do(g,f){var e=0,c=0,d;for(var a=0;a<g.length;a++){var e=(e+1)%256;var c=(c+f[e])%256;d=f[e];f[e]=f[c];f[c]=d;var b=(f[e]+(f[c]%256))%256;g[a]=g[a]^f[b]}return g}function rc4_str(e,d){d=decodeURIComponent(d);var b=rc4_key(e);var c=Array(d.length);for(var a=0;a<d.length;a++){c[a]=d.charCodeAt(a)}rc4_do(c,b);for(var a=0;a<c.length;a++){c[a]=String.fromCharCode(c[a])}return encodeURIComponent(c.join(""))}function rc4_str_base64(e,d){d=encodeURIComponent(d);var b=rc4_key(e);var c=Array(d.length);for(var a=0;a<d.length;a++){c[a]=d.charCodeAt(a)}rc4_do(c,b);for(var a=0;a<c.length;a++){c[a]=String.fromCharCode(c[a])}return base64_encode(c.join(""))}function base64_decode(h){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,b,a,m,l,k,j,n,g=0,o=0,e="",f=[];if(!h){return h}h+="";do{m=d.indexOf(h.charAt(g++));l=d.indexOf(h.charAt(g++));k=d.indexOf(h.charAt(g++));j=d.indexOf(h.charAt(g++));n=m<<18|l<<12|k<<6|j;c=n>>16&255;b=n>>8&255;a=n&255;if(k==64){f[o++]=String.fromCharCode(c)}else{if(j==64){f[o++]=String.fromCharCode(c,b)}else{f[o++]=String.fromCharCode(c,b,a)}}}while(g<h.length);e=f.join("");return e.replace(/\0+$/,"")}function rc4_base64_str(e,d){d=base64_decode(d);var b=rc4_key(e);var c=Array(d.length);for(var a=0;a<d.length;a++){c[a]=d.charCodeAt(a)}rc4_do(c,b);for(var a=0;a<c.length;a++){c[a]=String.fromCharCode(c[a])}return decodeURIComponent(c.join("").replace(/\+/g,"%20"))}ec.base.getCartNum=function(){$.ajax({url:domainCart+"/cart/shoppingCart/number",dataType:"jsonp",timeout:10000,jsonp:"callback",type:"get",success:function(a){if(a&&a.success){$("#header-cart-total").html(a.cartNumber||0)}}})};ec.base.getOrderNum=function(){$.ajax({url:domainMain+"/member/consumer/orderCount",dataType:"jsonp",timeout:10000,jsonp:"callback",type:"get",success:function(a){if(a&&a.success){$("#header-order-total").html(a.orderNumber||0)}}})};
