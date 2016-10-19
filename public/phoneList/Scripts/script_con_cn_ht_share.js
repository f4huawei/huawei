var console = window.console || {
        log: function (s) {
        }
    };
$(function () {
    var $MAIN_NAV = $('#cbg-main-nav');
    var $ACTIVE_ITEM = $MAIN_NAV.find('li.cbg-current');
    var $SUBMENU_WRAPPER = $('#cbg-submenu-wrapper');
    var SLIDE_SPEED = 0;
    var $hoverSubmenu = null;
    var $activeItem = null;
    var hideSubmenuTimer = null;

    function setActiveItem($item, forceReset) {
        if ($item == null) {
            // Reset
            $activeItem = null;
            clearTimeout(hideSubmenuTimer);
            hideSubmenuTimer = setTimeout(function () {
                if ($hoverSubmenu == null) {
                    if (forceReset || $MAIN_NAV.find('li.cbg-current').length == 0) {
                        $MAIN_NAV.find('li').removeClass('cbg-current');
                        $ACTIVE_ITEM.addClass('cbg-current');
                        $SUBMENU_WRAPPER.hide();
                        $(".cbg-breadcrumbs-x").show();
                    }
                }
            }, SLIDE_SPEED);
        }
        else {
            $MAIN_NAV.find('li').removeClass('cbg-current');
            $item.addClass('cbg-current');
            $activeItem = $item;
        }
    }

    $MAIN_NAV.find('ul>li>a')
        .click(function (e) {
            var href = $(this).attr('href');
            if (href.indexOf('#') === 0) {
                e.preventDefault();
                return false;
            }
            return true;
        })

    $MAIN_NAV.find('ul a')
        .click(function (e) {
            var href = $(this).attr('href');
            if (href.indexOf('#') === 0) {
                e.preventDefault();
                return false;
            }
            return true;
        });

    $MAIN_NAV.on('mouseenter', 'ul>li>a', function () {
        setActiveItem($(this).parent());
        var $menu = $('#cbg-submenu-' + $(this).data('submenu'));
        var index = $(this).parent().index();
        // Open submenu
        $SUBMENU_WRAPPER.show();
        $menu.show().stop().animate({top: '0px'}, SLIDE_SPEED, adjustWidth());

        if(index > 4){
            $(".cbg-breadcrumbs-x").show();
        }else{
            $(".cbg-breadcrumbs-x").hide();
        }
        var c = $("#cbg-main-nav-wrapper").attr("class");
      
    });

    $MAIN_NAV.on('mouseleave', 'ul>li>a', function () {
        var $menu = $('#cbg-submenu-' + $(this).data('submenu'));
        if ($menu.length == 0) {
            // No associated submenu
            $(this).parent().removeClass('cbg-current');
            setActiveItem(null);
            return;
        }
        var $this = $(this);
        setTimeout(function () {
            if ($hoverSubmenu != null && $hoverSubmenu.attr('id') == $menu.attr('id')) {
                // Into submenu
                $activeItem = null;
                return;
            }
            else {
                $this.parent().removeClass('cbg-current');
                setActiveItem(null);
            }
            // Close submenu
            $hoverSubmenu = null;
            $menu.stop().animate({top: '-' + ($menu.height() + 40) + 'px'}, SLIDE_SPEED);
        }, 0);
    });


    // Sub-menu elements
    // Clone SNS items to each submenu
    for (var i = 1; i < $('.cbg-submenu').length; i++) {
        $('.cbg-submenu').eq(0).find('li.col-sns').clone().appendTo($('#cbg-submenu-' + (i + 1)).find('ul.cbg-wrapper'));
    }
    $('.cbg-submenu').each(function () {
        $(this).css('top', '-' + ($(this).height() + 300) + 'px').show().hover(
            function () {
                $hoverSubmenu = $(this);
            },
            function () {
                // Close submenu
                $hoverSubmenu = null;
                //$(this).stop().animate({ top: '-' + ($(this).height() + 40) + 'px' }, SLIDE_SPEED);
                var $menu = $(this);
                $(this).fadeOut(300, function () {
                    $menu.css('top', '-' + ($menu.height() + 40) + 'px');
                });
                setTimeout(function () {
                    var forceReset = $activeItem == null ? true : false;
                    setActiveItem(null, forceReset);
                }, 200);
            }
        );
    });
    function adjustWidth() {
        $('.cbg-submenu').each(function () {
            // Adjust overlay width
            var sns = $(this).find('ul.cbg-inline .col-sns');
            var overlay = $(this).find('.cbg-overlay-left');
            var viewall = $(this).children('.cbg-view-all');
            overlay.css('width', sns.offset().left + 'px');
            viewall.css('width', sns.offset().left + 'px');
        });
    }

    adjustWidth();
    $(window).on('resize', function () {
        adjustWidth();
    });
    //$('#cbg-submenu-2').show();
    // Now we can hide the submenu wrapper
    $SUBMENU_WRAPPER.hide();

    // scrolling
    var scrollTimer;
    var $searchForm = $('#cbg-main-nav-search div:eq(0)');
    var $searchIcon = $('#cbg-main-nav-search .cbg-icon-search');
    $searchIcon.on('click', function () {
        $searchIcon.fadeOut('fast', function () {
            $searchForm[0].style.opacity = '';
            $searchForm.fadeIn(function () {
                $searchForm.find('input[type=text]').focus();
            });
        });
    });
    $(window).on('scroll.topnavfixed', function () {
        var scrollTop = $(window).scrollTop();
        var $wrapper = $('#cbg-main-nav-wrapper');

        if (scrollTop > 67) {
            if (!$wrapper.hasClass('fixed')) {
                $wrapper.addClass('y-header-border-bottom fixed');
                $('body').addClass('main-nav-fixed');
                $searchForm.stop().animate({opacity:0},0,function(){
                    $searchForm.css('display','none');
                    $searchIcon.css('display','block').stop().animate({opacity:1},500);
                });
            }
        }
        else {
            // Page top
            $wrapper.removeClass('y-header-border-bottom fixed');
            $('body').removeClass('main-nav-fixed');
            $searchIcon.stop().animate({opacity:0},0,function(){
                $searchIcon.css('display','none');
                $searchForm.css('display','block').stop().animate({opacity:1},500);
            });
        }

        // Other elements that needs to be fixed.

        $('div[data-fixed-scrolltop]').each(function () {
            var id = $(this).attr('id');
            var cls = '';
            if (id) {
                cls = id + '-fixed';
            }
            if (scrollTop > $(this).data('fixed-scrolltop')) {
                $('body').addClass(cls);
                $(this).addClass('y-header-border-bottom fixed');
            }
            else {
                $('body').removeClass(cls);
                $(this).removeClass('y-header-border-bottom fixed');
            }
        });
    });
});

// Search form
$(function () {
    $('.cbg-search-form').submit(function (e) {
        var k = $(this).find('input[name=keywords]').val();
        if (k.length > 90) {
            alert(LAG_CON_LENGTH_90);
            e.preventDefault();
            return false;
        }
        else if (k == "") {
            alert(LAG_CON_ENTER_SEARCH_TERM);
            e.preventDefault();
            return false;
        }

        else if (k.length < 2) {
            alert(LAG_CON_ENTER_MORE_TERM);
            e.preventDefault();
            return false;
        }
        return true;
    });
});




$(function () {
    // Back to top button
    var $backtotop = $('.cbg-backtotop');
    $backtotop.on('click', function (e) {
        $('html,body').animate({scrollTop: 0}, 500);
        e.preventDefault();
    });

    // Product nav
    if (!$('.product-nav').hasClass("minisite-head")) {
        $('.product-nav .btn-buy').on('click', function (e) {
            $('.product-nav .discover').slideUp();
            $('.product-nav .buy').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        })
    }
    $('.product-nav .btn-more').not('.product-nav .btn-follow-link').on('click', function (e) {
        $('.product-nav .buy').slideUp();
        $('.product-nav .discover').slideToggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $(window).on('scroll', function (e) {
        var scrollTop = $(window).scrollTop();
        var c = $("#cbg-main-nav-wrapper").attr("class")
        /*if(c == "fixed"){
         $("#cbg-main-nav .cbg-current span").css("padding-bottom","7px")
         }else{
         $("#cbg-main-nav .cbg-current span").css("padding-bottom","15px")
         }*/
        if ($('#cbg-main-nav').length) {

        }
        if ($('#cbg-main-nav').length && scrollTop > $('#cbg-main-nav').offset().top + $('#cbg-main-nav').height()) {
            !$('.product-nav').hasClass("minisite-head") ? $('.product-nav').addClass('y-header-border-bottom fixed').hide() : $('.product-nav').addClass('fixed');
        }
        else {
            // Page top
            if ($('body').hasClass('cbg-localnav')) {
                // Don't hide local nav
                $('.product-nav').removeClass('y-header-border-bottom fixed');
            }
            else {
                $('.product-nav').removeClass('y-header-border-bottom fixed').show();
            }
        }
        // back to top
        if (scrollTop > 200) {
            if ($backtotop.css('display') != 'block') {
                $('.cbg-backtotop').fadeIn();
            }
        }
        else {
            if ($backtotop.css('display') != 'none') {
                $('.cbg-backtotop').fadeOut();
            }
        }
    }).trigger('scroll');
});

// Wechat button (display QR code)
$(function () {
    $('.cbg-icon-wechat').mouseenter(function () {
        $(this).prev('img').show();
    });
    $('.cbg-icon-wechat').mouseleave(function () {
        $(this).prev('img').hide();
    });
})

// Share buttons
var share = window.share || {};
share.openShareWindow = function (site, text, linkUrl, imageUrl, title) {
    text = encodeURIComponent(text || document.title);
    linkUrl = encodeURIComponent(linkUrl || window.location.href);
    imageUrl = encodeURIComponent(imageUrl || "");
    title = encodeURIComponent(title || document.title);
    var shareUrl;
    switch (site) {
        case "facebook":
            shareUrl = "http://www.facebook.com/sharer.php?s=100&p[title]=" + title + "&p[summary]=" + text + "&p[url]=" + linkUrl + "&p[images][0]=" + imageUrl;
            break;
        case "googleplus":
            shareUrl = "https://plus.google.com/share?url=" + linkUrl;
            break;
        case "twitter":
            shareUrl = "https://twitter.com/intent/tweet?text=" + text + encodeURIComponent(' ') + linkUrl;
            break;
        case "sina":
        case "sinaweibo":
            shareUrl = "http://v.t.sina.com.cn/share/share.php?url=" + linkUrl + "&pic=" + imageUrl + "&title=" + text + "&content=utf8";
            break;
        case "qq":
            shareUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + linkUrl + "&title=" + title + "&desc=" + text + "&summary=" + text + "&pics=" + imageUrl;
            break;
        case "qqweibo":
            shareUrl = "http://share.v.t.qq.com/index.php?c=share&a=index&pic=" + imageUrl + "&url=" + linkUrl + "&title=" + text;
            break;
        case "kaixin":
            shareUrl = "http://www.kaixin001.com/rest/records.php?style=11&url=" + linkUrl + "&content=" + text;
            break;
        case "renren":
            shareUrl = "http://widget.renren.com/dialog/share?charset=UTF-8&description=" + text + "&pic=" + imageUrl + "&resourceUrl=" + linkUrl + "&title=" + title;
            break;
        case "douban":
            shareUrl = "http://shuo.douban.com/!service/share?href=" + linkUrl + "&name=" + title + "&image=" + imageUrl + "&text=" + text;
            break;
        case "taobao":
        default:
            return;
    }
    window.open(shareUrl, "sw", "width=800,height=500,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1");
}

$(function () {
    $('.cbg-share a, a.cbg-chare').click(function (e) {
        e.preventDefault();
        share.openShareWindow($(this).data('sns'));
    });
});

/*pws support product dt 2015-08-25 support-product.js*/

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
        //if (typeof define === 'function' && define.amd) {
                // AMD. Register as anonymous module.
          //      define(['jquery'], factory);
        //} else {
                // Browser globals.
                factory(jQuery);
        //}
}(function ($) {

        var pluses = /\+/g;

        function encode(s) {
                return config.raw ? s : encodeURIComponent(s);
        }

        function decode(s) {
                return config.raw ? s : decodeURIComponent(s);
        }

        function stringifyCookieValue(value) {
                return encode(config.json ? JSON.stringify(value) : String(value));
        }

        function parseCookieValue(s) {
                if (s.indexOf('"') === 0) {
                        // This is a quoted cookie as according to RFC2068, unescape...
                        s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                }

                try {
                        // Replace server-side written pluses with spaces.
                        // If we can't decode the cookie, ignore it, it's unusable.
                        // If we can't parse the cookie, ignore it, it's unusable.
                        s = decodeURIComponent(s.replace(pluses, ' '));
                        return config.json ? JSON.parse(s) : s;
                } catch(e) {}
        }

        function read(s, converter) {
                var value = config.raw ? s : parseCookieValue(s);
                return $.isFunction(converter) ? converter(value) : value;
        }
    
        var config = $.cookie = function (key, value, options) {
        
                // Write
                if (value !== undefined && !$.isFunction(value)) {
                        options = $.extend({}, config.defaults, options);

                        if (typeof options.expires === 'number') {
                                var days = options.expires, t = options.expires = new Date();
                                t.setTime(+t + days * 864e+5);
                        }
            
                        return (document.cookie = [
                                encode(key), '=', stringifyCookieValue(value),
                                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                                options.path    ? '; path=' + options.path : '',
                                options.domain  ? '; domain=' + options.domain : '',
                                options.secure  ? '; secure' : ''
                        ].join(''));
                }

                // Read
                var result = key ? undefined : {};

                // To prevent the for loop in the first place assign an empty array
                // in case there are no cookies at all. Also prevents odd result when
                // calling $.cookie().
                var cookies = document.cookie ? document.cookie.split('; ') : [];

                for (var i = 0, l = cookies.length; i < l; i++) {
                        var parts = cookies[i].split('=');
                        var name = decode(parts.shift());
                        var cookie = parts.join('=');
                        
                        if (key && key === name) {
                                // If second argument (value) is a function it's a converter...
                                result = read(cookie, value);
                                break;
                        }

                        // Prevent storing a cookie that we couldn't decode.
                        if (!key && (cookie = read(cookie)) !== undefined) {
                                result[name] = cookie;
                        }
                }

                return result;
        };

        config.defaults = {};

        $.removeCookie = function (key, options) {
                if ($.cookie(key) === undefined) {
                        return false;
                }

                // Must not alter options, thus extending a fresh object...
                $.cookie(key, '', $.extend({}, options, { expires: -1 }));
                return !$.cookie(key);
        };

}));

// some base tools under utils space
var utils = utils || {};
utils.urlParams = function(name){
    var k;
    var v;
    var index;
    var cur;
    var arr;
    var ret = {};
    var searchstr = location.search.substring(1);
    var i = 0;

    if(!searchstr){
        return ret;
    }

    arr = searchstr.split('&');
    for(; i < arr.length; i++){
        cur = arr[i];
        index = cur.indexOf('=');
        k = cur.substring(0, index);
        v = cur.substring(index + 1);
        if(k && v){
            ret[k] = decodeURIComponent(v);
        }
    }
    return name ? ret[name] : ret;
};

utils.encode = function(str){
    try{
        return encodeURIComponent(str);
    }catch(e){
        return str;
    }
};

utils.decode = function(str){
    try{
        return decodeURIComponent(str);
    }catch(e){
        return str;
    }
};

// about passports config
var CBG_PASSPORTS = {
    casParams: 'reqClientType=27&loginChannel=27000000&countryCode=cn&lang=zh-cn&themeName=huawei',
    cas: 'https://hwid1.vmall.com',
    vmall: 'http://shopcn.huawei.com',
    cbg: 'http://consumer.huawei.com',
    vmallCart: 'http://shopcn-cart.huawei.com',
    'root': 'http://consumer.huawei.com/cn'
};

    if(location.hostname === 'www-con.huawei.com'){
        CBG_PASSPORTS.root = 'http://www-con.huawei.com/consumercn'
    }else if(location.hostname === 'consumer-test1.huawei.com'){
        CBG_PASSPORTS = {
            casParams: 'reqClientType=27&loginChannel=27000000&countryCode=cn&lang=zh-cn&themeName=huawei',
            cas: 'https://hwlf.hwcloudtest.cn',
            vmall: 'http://shopcn-test.huawei.com',
            cbg: 'http://nkweb-uat.huawei.com',
            vmallCart: 'http://shopcn-carttest.huawei.com',
            'root': 'http://consumer-test1.huawei.com/consumercn'
        };
    }else if(location.hostname === 'www-beta.huawei.com'){
        CBG_PASSPORTS = {
            casParams: 'reqClientType=27&loginChannel=27000000&countryCode=cn&lang=zh-cn&themeName=huawei',
            cas: 'https://hwlf.hwcloudtest.cn',
            vmall: 'http://shopcn-test.huawei.com',
            cbg: 'http://nkweb-uat.huawei.com',
            vmallCart: 'http://shopcn-carttest.huawei.com',
            'root': 'http://www-beta.huawei.com/ucmc-cn'
        };
    }

// Header user
var hdAccountInfos = {
    defaultUser: decodeURIComponent('%E5%8D%8E%E4%B8%BA%E7%94%A8%E6%88%B7'),
    // name of cookies
    fields: {
        userNmae: 'name',
        nickName: 'user',
        isLogin: 'ac_loNa',
        isMobileValid: 'isAuthPhone',
        isEmailValid: 'isAuthEmail',
        avatar: 'userHeadPicture',
        attest: 'isAuthCust',
        orders: 'huaweiOrderCount',
        cart: 'huaweiCartCount',
        remote: 'remoteLogin'
    },

    logUrl: CBG_PASSPORTS.cas + '/CAS/remoteLogin?' + CBG_PASSPORTS.casParams + '&loginUrl='+ utils.encode(CBG_PASSPORTS.root + '/account/login/index.htm') +'&service='+ utils.encode(CBG_PASSPORTS.cbg + '/cmkt/login/cloudplatforms?siteURL=' + utils.encode(location.href)),
    regUrl: CBG_PASSPORTS.root + '/account/register/index.htm',
    logoutUrl: CBG_PASSPORTS.cas + '/CAS/logout?service=' + utils.encode(CBG_PASSPORTS.cbg + '/cmkt/logout/cloudplatforms?siteURL=' + utils.encode(location.href)),
    userCenterUrl: CBG_PASSPORTS.cas + '/CAS/remoteLogin?' + CBG_PASSPORTS.casParams + '&loginUrl='+ utils.encode(CBG_PASSPORTS.root + '/account/login/index.htm') +'&service='+ utils.encode(CBG_PASSPORTS.cbg + '/cmkt/login/cloudplatforms?siteURL=' + utils.encode(CBG_PASSPORTS.root + '/account/com/index.htm')),
    cookieOpts: {
        domain: '.huawei.com',
        path: '/'
    },
    init: function () {
        var _this = this;
        var $loginout = $('#headerLoginNot');
        if(!this.valid()){
            $loginout.hide();
            return;
        }
        
        // disable decode
        //$.cookie.raw = true;
        
        this.setUrl();
        this.update();
        this.bindEvents();
        if(!$.cookie(this.fields.remote) && this.isLogin()){
            this.remoteLogin();
        }
    },
    setUrl: function(){
		var $shop = $('#cbg-submenu-6').find('.from-img a');
		var $loginout = $('#headerLoginNot');
		var $infos = $('#topUserInfos');
		var memurl = CBG_PASSPORTS.vmall + '/member';
		
		// login
		$loginout.find('.log-link').attr('href', this.logUrl);
		// reg
		$loginout.find('.reg-link').attr('href', this.regUrl); 
		// order
		$shop.eq(0).attr('href', CBG_PASSPORTS.vmall + '/member/order');
		// cart
		$shop.eq(1).attr('href', CBG_PASSPORTS.vmallCart + '/cart/cart.html');
		//email phone
		$infos.find('.email,.phone').attr('href', CBG_PASSPORTS.root + '/account/com/index.htm');
		// attest
		$infos.find('.attest').attr('href', CBG_PASSPORTS.vmall + '/authmember/accesstoken?t=' + (new Date()*1));
		// avatar
		$infos.find('.avatar').attr('href', memurl);
		// name
		$infos.find('.name').attr('href', memurl);
    },
    valid: function(){
        var flag = true;
        var url = location.href;
        var arr = [
            'account/login/index.htm',
            'account/register/index.htm',
            'account/com/index.htm'
        ]

        $.each(arr, function(i, n){
            if(url.indexOf(n) > -1){
                return flag = false;
            }
        });
        return flag;
    },
    bindEvents: function () {
        var _this = this;

        $(document).on('mouseenter', '#headerLoginIn', function () {
            clearTimeout(_this.hoverTimeer);
            _this.hoverTimeer = setTimeout(function(){
                _this.setData();
            }, 100);
        });
        $(document).on('mouseleave', '#headerLoginIn', function () {
            clearTimeout(_this.hoverTimeer);
        });

        // &#36864;&#20986;&#30331;&#24405;
        $('#topUserInfos').on('click', '.btn-loginout', function (e) {
            e.preventDefault();
            _this.loginOut();
            _this.update();
            $('#cbg-submenu-6').hide();
        });
    },

    isLogin: function () {
        return !!$.cookie(this.fields.isLogin);
    },

    // &#21047;&#26032;&#30331;&#24405;&#29366;&#24577;
    update: function () {
        var loginHtml;
        var $loginout = $('#headerLoginNot');
        var $loginin = $('#headerLoginIn');

        if (this.isLogin()) {
            this.trueNickName = $.cookie(this.fields.nickName) || $.cookie(this.fields.userNmae) || $.cookie(this.fields.isLogin);
            $loginout.hide();
            if ($loginin.length === 0) {
                loginHtml = '<li class="login" id="headerLoginIn"><a href="'+ this.userCenterUrl +'" target="_blank" data-submenu="6"><span><i class="cbg-icon cbg-icon1 login-icon"></i><b class="name-id">UserName</b><i class="cbg-icon cbg-icon1 login-pulls"></i></span></a></li>'
                $loginout.after(loginHtml);
                $loginin = $('#headerLoginIn');
            }
            $loginin.show();
            $loginin.find('.name-id').text(this.trueNickName);
            var _user = utils.encode($.cookie(this.fields.isLogin));
            $.cookie(this.fields.isLogin, _user, this.cookieOpts);
        } else {
            $loginin.hide();
            $loginout.show();
        }
    },

    setData: function () {
        var $infos = $('#topUserInfos');
        var $name = $infos.find('.name');
        var $phone = $infos.find('.phone');
        var $email = $infos.find('.email');
        var $attest = $infos.find('.attest');
        var $order = $infos.find('.order-amount');
        var $cart = $infos.find('.cart-amount');
        var $avatar = $infos.find('.avatar');

        var nickName = this.trueNickName;
        var phone = $.cookie(this.fields.isMobileValid);
        var email = $.cookie(this.fields.isEmailValid);
        var attest = $.cookie(this.fields.attest);
        var avatar = $.cookie(this.fields.avatar);

        avatar = avatar ? '<img src="' + decodeURIComponent(avatar) + '" />' : '<span class="default-avatar"></span>';
        $name.text(nickName);
        $phone.html(format(phone, '%E5%B7%B2%E9%AA%8C%E8%AF%81%E6%89%8B%E6%9C%BA', '%E6%9C%AA%E9%AA%8C%E8%AF%81%E6%89%8B%E6%9C%BA'));
        $email.html(format(email, '%E5%B7%B2%E9%AA%8C%E8%AF%81%E9%82%AE%E7%AE%B1', '%E6%9C%AA%E9%AA%8C%E8%AF%81%E9%82%AE%E7%AE%B1'));
        $attest.html(format(attest, '%E5%B7%B2%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81', '%E6%9C%AA%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81'));
        
        $avatar.html(avatar);

        $.when(this.getOrder()).done(function(order){
            $order.text(order).show();
        });

        $.when(this.getCart()).done(function(cart){
            $cart.text(cart).show();
        });

        function format(v, yesText, noText) {
            return v === 'true' ? '<span class="passed"><ins class="cbg-icon cbg-icon1 da-eml"></ins>' + decodeURIComponent(yesText) + '</span>' : '<span class="not-passed"><ins class="cbg-icon cbg-icon1 da-phe"></ins>' + decodeURIComponent(noText) + '</span>'
        }
    },

    remoteLogin: function(){
        if($('#remoteLoginImg').length > 0){
            return;
        }
 
        var src = CBG_PASSPORTS.cas + '/CAS/remoteLogin?service=' + utils.encode(CBG_PASSPORTS.vmall + '/account/caslogin?url=' + utils.encode('/1px.gif')) + '&loginChannel=27000000&reqClientType=27&lang=zh-cn&loginUrl=' + utils.encode(CBG_PASSPORTS.vmall + '/1px.gif');
        //var src = 'https://hwlf.hwcloudtest.cn/CAS/remoteLogin?service=http%3A%2F%2Fshopcn-test.huawei.com%2Faccount%2Fcaslogin%3Furl%3D%252F1px.gif&loginChannel=27000000&reqClientType=27&lang=zh-cn&loginUrl=http%3A%2F%2Fshopcn-test.huawei.com%2F1px.gif';
        $('body').append('<img src="'+ src +'" style="display: none;">');

        $.cookie(this.fields.remote, 1, this.cookieOpts);
    },

    loginOut: function (service) {
        service = utils.encode(service||location.href);
        var url = CBG_PASSPORTS.cas + '/CAS/logout?service=' + utils.encode(CBG_PASSPORTS.cbg + '/cmkt/logout/cloudplatforms?siteURL=' + service);
        this.clear();
        location.href = url;
    },

    clear: function () {
        var _this = this;

        $.each(this.fields, function (k) {
            $.removeCookie(_this.fields[k], _this.cookieOpts);
        });
    },

    getOrder: function(callback){
        var dtd = $.Deferred();

        $.getJSON(CBG_PASSPORTS.vmall + '/member/consumer/orderCount?callback=?', function(data){
            if(typeof data === 'object' && data.success === true){
                dtd.resolve(data.orderNumber || 0);
            }
        });
        return dtd;
    },
    getCart: function(callback){
        var dtd = $.Deferred();

        $.getJSON(CBG_PASSPORTS.vmallCart + '/cart/shoppingCart/number?callback=?', function(data){
            if(typeof data === 'object' && data.success === true){
                dtd.resolve(data.cartNumber || 0);
            }
        });
        return dtd;
    }
};



// fixed element on scroll
var eleToFixed = (function(){
    var id = 0;
    
    return function($ele, options){
        var defaults = {
            'className': 'fixed',
            place: true,
            distance: 0

        };
        var opts = $.extend(defaults, options);
        $ele = $($ele);
        var ot = opts.distance ? opts.distance : $ele.offset().top;
        var className = opts.className;
        var $place;
        
        if(opts.place){
            $place = $('<div id="eleToFixedPlace_'+ (++id) +'"></div>');
            $place.css({
                display: 'none',
                width: $ele.outerWidth(true),
                height: $ele.outerHeight(true),
                opacity: 0
            });
            $ele.after($place);
        }

        $(window).on('scroll.eleToFixed', function(){
            // offset.top possible change when layout changed, so here get it on scroll
            ot = opts.distance ? opts.distance : $ele.hasClass(className) ? ot : $ele.offset().top;
            if($(this).scrollTop() >= ot){
                $ele.addClass(className);
                opts.place && $place.show();
            }else{
                $ele.removeClass(className);
                opts.place && $place.hide();
            }
        });
    }
})();



$(function () {

	// init header passports
    hdAccountInfos.init();
    
});

function showHotline1(){
	$.ajax({
  		type: 'GET',
  		async:false,
  		url: 'http://consumer.huawei.com/support/services/base/hotline/info',
  		contentType: "application/x-www-form-urlencoded; charset=utf-8",
  		data:{"siteCode": 'cn'},
  		dataType: 'jsonp', 
  		jsonp: 'jsonp', 
  	    success: function(data) {
  	    	var h = data.hotline
  	    	$("#serviceLineTel").text(data.hotline)
  	    	$("#serviceLineTime").text(data.supportLanguage + " " + data.supportTime)
  	    },
  	    error: function(msg){}
	});	
}
