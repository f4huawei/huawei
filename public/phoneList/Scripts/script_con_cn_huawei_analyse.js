(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }
    ,
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-7728030-4', 'auto');
ga('send', 'pageview');
var g_ssSourceSiteId = "consumercn";
var g_ssSourceNodeId = "2613";
var SITE_CODE = "cn";
var _hwaurl = window.location.href.substr(0, window.location.href.lastIndexOf("/"));
$(document).ready(function() {
    var _host = window.location.host;
    var siteid = g_ssSourceSiteId;
    var username = getCookie('user');
    if (g_ssSourceNodeId == 1000 || g_ssSourceNodeId == 15572) {
        _hwaurl = "home";
    }
    if (_host.indexOf("consumer.huawei.com") > -1) {
        if (siteid == "endevice") {
            siteid = "consumer-en";
        } else {
            siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
        }
        (function(url, win, doc, myName) {
            win[myName] = win[myName] || function() {
                (win[myName].q = win[myName].q || []).push(arguments);
            }
            ;
            setTimeout(function() {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js', window, document, 'ha'));
        ha("setSiteId", siteid);
        if (username != "anonymous") {
            ha("set", "uid", username);
        }
    }
    // auto bind
    autoEventTracking();
    (function(url, win, doc, myName, length) {
        win[myName] = win[myName] || function() {
            (win[myName].q = win[myName].q || []).push(arguments);
        }
        ;
        setTimeout(function() {
            var iframe = document.createElement('iframe');
            (iframe.frameElement || iframe).style.cssText = 'display:none';
            iframe.src = 'javascript:false';
            var length = 0;
            if (document.getElementsByTagName('script').length > 1) {
                length = document.getElementsByTagName('script').length - 1;
            }
            var where = document.getElementsByTagName('script')[length];
            where.parentNode.insertBefore(iframe, where);
            var doc = iframe.contentWindow.document;
            doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
            doc.close();
        }, 0);
    }('http://nebula-collector.huawei.com/api/2.0/dmpa_f-min.js', window, document, 'dmpa', length));
    //此为UAT环境连接，生产的连接为：http://nebula-collector.huawei.com/api/2.0/dmpa_f-min.js
    var user_id = username;
    //网站当前登录用户id，如果未登录就为0或空字符串
    dmpa('setAutoSendPV', false);
    dmpa('set', "siteId", siteid);
    if (user_id != "anonymous") {
        dmpa('set', "user_id", user_id);
    }
    dmpa('trackPageView');
    //cookie
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return 'anonymous';
    }
    // back
    if (_host.indexOf("www-back.huawei.com") > -1) {
        siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
        (function(url, win, doc, myName) {
            win[myName] = win[myName] || function() {
                (win[myName].q = win[myName].q || []).push(arguments);
            }
            ;
            setTimeout(function() {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js', window, document, 'ha'));
        ha("setSiteId", siteid);
        if (username != "anonymous") {
            ha("set", "uid", username);
        }
    }
    //www-con or 119
    if (_host.indexOf("www-con.huawei.com") > -1 || _host.indexOf("118") > -1) {
        siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
        (function(url, win, doc, myName) {
            win[myName] = win[myName] || function() {
                (win[myName].q = win[myName].q || []).push(arguments);
            }
            ;
            setTimeout(function() {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js', window, document, 'ha'));
        ha("setSiteId", siteid);
        if (username != "anonymous") {
            ha("set", "uid", username);
        }
    }
    //c.huawei
    if (_host.indexOf("c.huawei.com") > -1) {
        siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
        (function(url, win, doc, myName) {
            win[myName] = win[myName] || function() {
                (win[myName].q = win[myName].q || []).push(arguments);
            }
            ;
            setTimeout(function() {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js', window, document, 'ha'));
        ha("setSiteId", siteid);
        if (username != "anonymous") {
            ha("set", "uid", username);
        }
    }
    var _u = window.location.href;
    if (_u.indexOf("m.huawei.com") > -1) {
        siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
        (function(url, win, doc, myName) {
            win[myName] = win[myName] || function() {
                (win[myName].q = win[myName].q || []).push(arguments);
            }
            ;
            setTimeout(function() {
                var iframe = document.createElement('iframe');
                (iframe.frameElement || iframe).style.cssText = 'display:none';
                iframe.src = 'javascript:false';
                var where = document.getElementsByTagName('script')[0];
                where.parentNode.insertBefore(iframe, where);
                var doc = iframe.contentWindow.document;
                doc.open().write('<body onload="' + 'var js = document.createElement(\'script\');' + 'js.src = \'' + url + '?hr=' + new Date().getTime() + '\';' + 'document.body.appendChild(js);">');
                doc.close();
            }, 0);
        }('http://app.huawei.com/hwa-c/configresource/js/general/ha_f.js', window, document, 'ha'));
        ha("setSiteId", siteid);
        if (username != "anonymous") {
            ha("set", "uid", username);
        }
    }
});
<!--Huawei gaq-->
function autoEventTracking() {
    // old used
    $(document).on('click.analyse', '[data-auto-tracking] a,.cbg-live-video', function(e) {
        try {
            if ($(this).data('t-cat')) {
                return;
                // Skip links with custom data-t-* attributes
            }
            var action = $(this).parents('*[data-t-act]').data('t-act') || 'click';
            var label = $.trim($(this).text().replace(/\n/g, '').replace(/ +/g, ''));
            var siteid = g_ssSourceSiteId.replace("consumer", "consumer-");
            console.log(siteid, action, label);
            trackEvent(siteid, action, label);
            // Delay link?
            var href = $(this).attr('href');
            var ignoreLink = ($(this).data('t-ignore-link') == true || !href || href.indexOf('#') === 0) ? true : false;
            if (!ignoreLink) {
                switch ($(this).attr('target')) {
                case undefined:
                case '':
                case '_self':
                case '_top':
                case '_parent':
                    try {
                        e.preventDefault();
                        trackDelayLink(href);
                    } catch (e) {
                        window.location.href = href;
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    });
    $(document).on('click.analyse', '[data-t-cat]', function(e) {
        var $this = $(this);
        var href = $this.attr('href');
        var category = $this.data('t-cat');
        var action = $this.data('t-act');
        var label = $this.data('t-label');
        var ignoreLink = ($this.data('t-ignore-link') == true || href == undefined || href.indexOf('#') === 0) ? true : false;
        trackEvent(category, action, label);
        // Auto delay link
        if (!ignoreLink) {
            switch ($this.attr('target')) {
            case undefined:
            case '':
            case '_self':
            case '_top':
            case '_parent':
                e.preventDefault();
                trackDelayLink(href);
            }
        }
    });
}
function trackDelayLink(href) {
    setTimeout(function() {
        window.location.href = href;
    }, 300);
}
function getQueryString(name) {
    return 'anonymous';
}
function trackPageview(h_url, hurl) {
    try {
        var url = h_url
        if (hurl) {
            if (h_url.length < hurl.length) {
                url = hurl
            }
        }
        var gaUrl = "";
        if (url.indexOf('rmd') != -1) {
            for (var i = 2; i < 4; i++) {
                gaUrl += '/' + url.split("/")[i]
            }
        }
        ga('send', 'pageview', WEB_SITE_SHORT + "/pageview" + url);
        trackHaPageview(url);
    } catch (err) {}
}
function trackEvent(category, action, label, value) {
    try {
        action = decodeURI(action);
    } catch (err) {
        action = decodeURI(encodeURI(action));
    }
    try {
        category && trackHaEvent(category, action, label, value);
        ga('send', 'event', category, action, label, {
            'nonInteraction': 1
        });
    } catch (err) {
      // console.log(err);
    }
}
function trackEventAndHwaPage(action, value) {
    var category = WEB_SITE_SHORT;
    try {
        trackHaPageview(value);
        ga('send', 'event', category, action, "", {
            'nonInteraction': 1
        });
    } catch (err) {}
}
function trackHaPageview(_url) {
    _url = _url.toLocaleLowerCase()
    var _indexUrl = window.location.href;
    var _pageHierarchy = "c:{" + _hwaurl + "}g:{" + WEB_SITE_SHORT + "/pageview" + "}";
    var array = _url.split("/");
    var strData = "{";
    for (var i = 1; i < array.length; i++) {
        strData += '"' + 'con_key' + (i - 1) + '"' + ':' + '"' + array[i] + '"';
        if (i == array.length - 1) {
            strData += "}";
        } else {
            strData += ",";
        }
    }
    ha("trackEvent", "click", {
        url: _indexUrl,
        page_hierarchy: _pageHierarchy,
        data: strData
    });
}
function trackHaEvent(category, action, label, _value) {
    _value = typeof _value === 'undefined' ? '' : _value.toLocaleLowerCase();
    var _indexUrl = window.location.href;
    var _pageHierarchy = "c:{" + _hwaurl + "}g:{" + SITE_CODE + "/pageview" + "}";
    var hwadata = '{"con_key0":"' + category + '","con_key1":"' + action + '","con_key2":"' + label + '","con_key3":"' + _value + '"}';
    ha("trackEvent", "click", {
        url: _indexUrl,
        page_hierarchy: _pageHierarchy,
        data: hwadata
    });
    dmpa("trackEvent", "click", {
        data: "{'category':'" + category + "','action':'" + action + "','label':'" + label + "','_value':'" + _value + "'}"
    });
}
