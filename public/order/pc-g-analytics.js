(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-7728030-4', 'auto');
ga('send', 'pageview');
  var g_ssSourceSiteId = "consumer-cn";
  var g_ssSourceNodeId = "2613";
  var _host = window.location.host;
  var siteid = g_ssSourceSiteId; 
  var username = getCookie('user');
  var _hwaurl = window.location.href.substr(0,window.location.href.lastIndexOf("/"));
  if(g_ssSourceNodeId == 1000 || g_ssSourceNodeId == 15572){
    _hwaurl = "home";
  }
$(document).ready(function(){
       (function (url,win,doc,myName) {
            win[myName] = win[myName] || function(){
              (win[myName].q = win[myName].q || []).push(arguments);
            };
            setTimeout(function () {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' +
                    'var js = document.createElement(\'script\');' +
                   'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' +
                    'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js',window, document,'ha'));

      ha("setSiteId",siteid);
      if(username != "anonymous"){
      ha("set","uid",username);
    }
  });

//DMP
$(document).ready(function(){
(function (url,win,doc,myName,length) {
    win[myName] = win[myName] || function(){
        (win[myName].q = win[myName].q || []).push(arguments);
    };
    setTimeout(function () {
        var iframe = document.createElement('iframe');
        (iframe.frameElement || iframe).style.cssText = 'display:none';
        iframe.src = 'javascript:false';
        var length=0;
        if(document.getElementsByTagName('script').length>1){
            length=document.getElementsByTagName('script').length-1;
        }
        var where = document.getElementsByTagName('script')[length];
        where.parentNode.insertBefore(iframe, where);
        var doc = iframe.contentWindow.document;
        doc.open().write('<body onload="' +
            'var js = document.createElement(\'script\');' +
            'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' +
            'document.body.appendChild(js);">');
        doc.close();
    }, 0);
}('http://nebula-collector.huawei.com/api/2.0/dmpa_f-min.js',window, document,'dmpa',length)); 
var user_id=username;//网站当前登录用户id，如果未登录就为0或空字符串
dmpa('setAutoSendPV',false);
dmpa('set',"siteId",siteid);
if(user_id  != "anonymous"){
    dmpa('set',"user_id",user_id);
}

dmpa('trackPageView');
});


 <!--Huawei gaq-->

  var pageview = "pageview";
  var SITE_CODE = "cn";


  //cookie
function getCookie(name) { var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); if(arr=document.cookie.match(reg)) return unescape(arr[2]); else return 'anonymous'; }

function trackPageview(h_url,hurl) {
  try { 
  var url=h_url
  if(hurl){
	if(h_url.length<hurl.length){
	url=hurl
	}
  }
	var gaUrl="";
  if(url.indexOf('rmd')!=-1){
	for(var i=2;i<4;i++){
	gaUrl +='/'+url.split("/")[i]
	}
  }
	ga('send','pageview',SITE_CODE+"/pageview"+url);
	trackHaPageview(url);

  } catch(err){}
}

function trackEvent(category, action, label, value) {
try {
	  action = decodeURI(action);
  } catch (err) {
	action = decodeURI(encodeURI(action));
  }
  try {
	category && trackHaEvent(category, action, label, value);
	ga('send', 'event', category, action, label,{'nonInteraction':1});
  } catch (err) {}
}

function trackEventAndHwaPage(action,value){
var category = SITE_CODE;
  try {
	trackHaPageview(value);
	  ga('send', 'event', category, action, "",{'nonInteraction':1});
  } catch (err) {}
}

function trackHaPageview(_url){
_url =_url.toLocaleLowerCase()
  var _indexUrl = window.location.href;
  var _pageHierarchy = "c:{"+_hwaurl+"}g:{"+SITE_CODE+"/pageview"+"}";
  var array = _url.split("/");
var strData = "{";
for (var i = 1;i<array.length;i++){
  strData+='"'+'con_key'+(i-1)+'"'+':'+'"'+array[i]+'"';
  if(i==array.length-1){
	strData+="}";
  }else {
	strData+=",";
  }
}
	ha("trackEvent","click",{url:_indexUrl,page_hierarchy:_pageHierarchy,data:strData});
}

function trackHaEvent(category, action, label, _value){
_value=_value.toLocaleLowerCase()
  var _indexUrl = window.location.href;
  var _pageHierarchy = "c:{"+_hwaurl+"}g:{"+SITE_CODE+"/pageview"+"}";
  var hwadata ='{"con_key0":"'+category+'","con_key1":"'+action+'","con_key2":"'+label+'","con_key3":"'+_value+'"}';
  ha("trackEvent", "click",{url: _indexUrl, page_hierarchy: _pageHierarchy,data:hwadata});
  dmpa("trackEvent", "click",{data:"{'category':'"+category+"','action':'"+action+"','label':'"+label+"','_value':'"+_value+"'}"});
}

 
 


