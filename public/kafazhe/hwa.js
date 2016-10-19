//获取cookie
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  }
  
  var uuid = getCookie("esdk_uuid");
  if (uuid.lastIndexOf('"') > 0) {
	  uuid = uuid.substr(1, uuid.length - 2);
  }

  var client_id = getCookie("_ga");
	    client_id = client_id.substr(6, client_id.length);     //取client id


		var UserCID = uuid + "-" + client_id                       //生成新的需要指标Userid+client_id


		
  //PageHa
  var siteid = 1; //站点ID，开发者社区为1
  var u="//developer.huawei.com/ict/cn/analytics/"; //HWA统计服务的域名
  
  var _paq = _paq || [];
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.developer.huawei.com"]);
  _paq.push(["setDomains", ["*.developer.huawei.com"]]);
  
  _paq.push(["setUserId", [uuid]]);
  
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', siteid]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
  //End PageHa Code
  
  //Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	

	//GET UserID Code
	ga('create', 'UA-24975728-2', {'userId': uuid}); 
	ga('set', 'dimension1', uuid);

	//GET Client_ID code
	ga('create','UA-24975728-2',{'Client_Id':client_id});
	ga('set','dimension2',client_id);
	
	//GET userid+client id
	ga('create','UA-24975728-2',{'UserCID':UserCID});
	ga('set','dimension3',UserCID);
	
	//send data to google analytics
	ga('create', 'UA-24975728-2', 'auto'); 
	ga('send', 'pageview');	
	
	//Event Code
	jQuery("body [mate_data_ts]").each(function() {
	jQuery(this).bind('click', function() {
	var ge_get = jQuery(this).attr('mate_data_ts');
	var ge_gets = ge_get.split('.');
	if(ge_gets.length){
	ga(ge_gets[0]||'', ge_gets[1]||'', ge_gets[2]||'', ge_gets[3]||'', ge_gets[4]||'', +ge_gets[5]||'');
	//eg. ga('send', 'event', 'button', 'click', 'top_login_link', 1);
		}
		});
	});
	//End Google Analytics Code

