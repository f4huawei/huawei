$(function() {FastClick.attach(document.body);});


//手机版导航
//$('.header .mobile-menu-icon').click(function () {
//    $('#tab_main_nav_mobile_container').addClass('mobile-menu-open');
//});
//$('#tab_main_nav_close_mobile a').click(function () {
//    $('#tab_main_nav_mobile_container').removeClass('mobile-menu-open');
//})

//video.html
if($('.sub-article #mobile-jwplayer').length){
    mo_Player('mobile-jwplayer',$('.sub-article .js_video_player').data('videoPath'), $('.sub-article .js_video_player').data('image'), false)
}

//小屏banner替换
if($(window).width() < 800){
    $('.banner').data('bg-small') && $('.banner').css('background-image','url('+ $('.banner').data('bg-small') +')');
}

    fallline();
    countDown();
   /// videoIntro();
    tabPeople();
    tabAgenda();
    googleMap();
   /// shareBar();
    showActive();


    //function.js
    /**
     * banner 倒计时
     * 使用GMT时间比较
     */
    function countDown(){
        if($('.date-panel .countdown').length < 1)return;

        var $elem = $('.date-panel .countdown'),
            limitGMT = $elem.data('timeArea') || 08,//时区
            limitTime = $elem.data('time') ? new Date($elem.data('time')) : new Date('2015/05/29 17:0:0');//到期时间,firefox不支持短横分隔符，如2015-05-27格式

        (function interval(){
            var now = new Date();
            var GMT = now.getTimezoneOffset()/60; //这里获得的时区为反数，如+8变为-8

            var limitSec = parseInt(limitTime.getTime()/1000) - limitGMT * 60 * 60,
                nowSec = parseInt(now.getTime()/1000) + GMT * 60 * 60,
                sec = limitSec - nowSec,
                min = parseInt(sec / 60),
                hour = parseInt(min / 60),
                day = parseInt(hour / 24),
                date = {
                    day : day,
                    hour : hour % 24,
                    min : min % 60,
                    sec : sec % 60
                };
            if(sec < 0){return}
            $elem.find('.day').text(date.day);
            $elem.find('.hour').text(date.hour);
            $elem.find('.minute').text(date.min);
            $elem.find('.sec').text(date.sec);
            setTimeout(interval,1000);
        })()

    }

    /**
     * index.html瀑布流
     * 依赖文件 imagesloaded-3.1.8.pkgd.min.js,
     *         masonry-3.3.0.pkgd.min.js
     */
    function fallline(){
        $(document).ready(function(){
            if(!$('.js-fall-line').length){return}
            $(window).width() > 767 ? $('.js-fall-line li:nth-child(3n+4)').addClass('clearfix') : $('.js-fall-line li:nth-child(2n+3)').addClass('clearfix');

            $('.js-fall-line').imagesLoaded(function () {
                $('.js-fall-line').masonry({
                    itemSelector: '.js-fall-line li'
                });
            });
        });
    }

    ///**
    // * welcome栏目 模态播放
    // * 依赖文件 jwplayer.js
    // */
    //function videoIntro(){
    //    $(document).ready(function () {
    //        var $media = $('.intro .media');
    //        if (!$media.length) {$media = $('.welcome .media');}

    //        $media.each(function() {
    //            var $this = $(this);
    //            if(!$this.find('.js_video_player').length){

    //                return;
    //            }

    //            var playId = 'mobile-jwplayer-' + new Date().getTime();
    //            $this.find('.mobile-jwplayer').attr('id',playId);

    //            mo_Player(playId, $this.find('.js_video_player').data('videoPath'), $this.find('.js_video_player').data('image'), false);

    //            function videoMask(){
    //                if($(window).width() - $this.width() > 30){//2列
    //                    $this.find('.mask').length ? $this.find('.mask').show() : $('<a class="mask" style="position:absolute;display:block;left:0;top:0;width:100%;height:100%;cursor: pointer;">').appendTo($this);
    //                }else{
    //                    $this.find('.mask').hide();
    //                }
    //            }
    //            videoMask();
    //            $(window).resize(videoMask);

    //            $this.on('click','.mask',function () {
    //                var $mask = $('body>div.mask').length ? $('body>div.mask').show() : $('<div class="mask" style="position:fixed;left:0;top:0;right:0;bottom: 0;background-color:#000;opacity:.5;filter: alpha(opacity=50);z-index: 9">').appendTo('body');

    //                var $videoWrap = $('body>.video-wrap').length ? $('body>div.video-wrap').show() : $('<div class="video-wrap" style="position:fixed;left:50%;top:50%;z-index: 9"><div id="jwplayer"></div><a href="javascript:" style="position: absolute;top: 10px;right: 10px;"><img src="assets/images/icon_close.png" alt=""></a></div>').appendTo('body');

    //                $videoWrap.find('a').one('click',function () {
    //                    $mask.hide();
    //                    $videoWrap.hide()
    //                });
    //                $mask.one('click',function () {
    //                    $mask.hide()
    //                    $videoWrap.hide();
    //                });

    //                $videoWrap.css({
    //                    width : '600',
    //                    marginLeft : -300,
    //                    marginTop : -170
    //                })

    //                $videoWrap.data('id') ? '' : mo_Player('jwplayer',$this.find('.js_video_player').data('videoPath'), $this.find('.js_video_player').data('image'), true);
    //                $videoWrap.data('id','jwplayer');
    //            });

    //        });
    //    });


    //}

    ///**
    // * Keynote栏目 切换效果
    // */
    function tabPeople(){
        var max_height;
        if(!$.fn.imagesLoaded){return}
        //.style1
        if($(window).width() > 991){
            max_height = 0;
            $('.people .style1').imagesLoaded(function () {
                $('.people .style1 li').each(function(index){
                    var $this = $(this);
                    if($this.height() > max_height){
                        max_height = $this.height();
                    }
                    $this.find('.tab-content-segment').css('margin-left',0 - (index % 3) * $this.outerWidth())
                }).find('a').height(max_height);
            });

            $('.people .style1 li:nth-child(3n+4)').addClass('clearfix');
            $('.people .style1 li .tab-content-segment').css('width',$('.people .style1 ul').width() - 30);//padding:0 15px;
        }

        //.style2
        if($(window).width() > 767){
            max_height = 0;
            $('.people .style2').imagesLoaded(function () {
                $('.people .style2 li').each(function(index){
                    var $this = $(this);
                    if($this.height() > max_height){
                        max_height = $this.height();
                    }
                    $this.find('.tab-content-segment').css('margin-left',0 - (index % 2) * $this.outerWidth())
                }).find('a').height(max_height);
            });
            $('.people .style2 li:nth-child(2n+3)').addClass('clearfix');
            $('.people .style2 li .tab-content-segment').css('width',$('.people .style2 ul').width() - 30);//padding:0 15px;
        }


        $('.people .wrap li').click(function () {

            if ($(this).find("span").length>0) {

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').closest('ul').find('.tab-content-segment').slideUp(); return
                }

                $(this).closest('ul').find('.tab-content-segment').slideUp();
                $(this).addClass('active').siblings().removeClass('active').end().find('.tab-content-segment').slideDown();
            }

            
        });

    }

    /**
     * Agenda栏目 切换效果
     */
    function tabAgenda(){
        if($(window).width() > 767){
            $('.agenda .detail').width($('.agenda ul').width());
            $('.agenda li').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            }).each(function(index){
                if(!index){$(this).addClass('active')}
                $(this).find('.detail').css('margin-left',0 - index * $(this).width());
            });
        }
    }

    /**
     * google map
     * 依赖文件 http://maps.google.com/maps?file=api
     */
    function googleMap() {     //加载地图
        if($('.google-map').length < 1)return;
        if (window.GBrowserIsCompatible && GBrowserIsCompatible()) {
            var map = new GMap2($('.google-map')[0]);
            map.addControl(new GSmallMapControl());    //放大缩小
            map.addControl(new GMapTypeControl());     //地图种类
            map.enableScrollWheelZoom();    //启用鼠标滚轮
            map.setCenter(new GLatLng(39.9000, 116.3000), 6);   //地图坐标 三个参数分别为 "纬度" "经度" "比例尺"

            function createMarker(point, address,name,tel) {  //创建标记内容及标记的鼠标事件
                var marker = new GMarker(point);
                var html = '<div>'+
                    '<a >Name:'+ name +'</a><br/>'+
                    '<a >Address:'+address +'</a><br/>'+
                    '<a >telephone:'+tel +'</a>'+
                    '</div>';
                GEvent.addListener(marker, "mouseover", function() {
                    marker.openInfoWindowHtml(html);
                });
                GEvent.addListener(marker, "mouseout", function() {
                    marker.closeInfoWindow();
                });
                GEvent.addListener(marker, "click", function() {
                    map.setCenter(point, 12);
                });
                return marker;
            }
            var point = new GLatLng(39.9000,116.3000);     // 设置标记
            map.addOverlay(createMarker(point,'beijing','sh','123456'));//加入标记
        }
    }
    /**
     * 分享条
     * 依赖文件 jquery.qrcode.min.js
     */
    //function shareBar(){

    //    $('.share-box .share-list').append('<a href="javascript:" class="share-item share-item-print js-print-btn">print</a>'
    //        + '<a href="javascript:" class="share-item share-item-email js-email-btn" data-email-addr="@Your Friends" data-email-title="Sharing: {网页title}" data-email-body="{网页title}{网页url}">email</a>'
    //        + '<a href="javascript:" class="share-item share-item-facebook js-share-item-btn" data-cmd="facebook">facebook</a>'
    //        + '<a href="javascript:" class="share-item share-item-twitter js-share-item-btn" data-cmd="twitter">twitter</a>'
    //        + '<a href="javascript:" class="share-item share-item-linkedin js-share-item-btn" data-cmd="linkedin">linkedin</a>'
    //        + '<a href="javascript:" class="share-item share-item-googleplus js-share-item-btn" data-cmd="googleplus">googleplus</a>'
    //        + '<a href="javascript:" class="share-item share-item-weibo js-share-item-btn" data-cmd="weibo">weibo</a>'
    //        + '<a href="javascript:" class="share-item share-item-weixin js-share-item-btn" data-cmd="weixin">weixin</a>');


    //    $(document).on("click", ".share-box a", function (e) {
    //        var $this = $(this);
    //        if($this.hasClass('js-share-item-btn')){
    //            var share_url_list = {
    //                "twitter": "https://twitter.com/intent/tweet?url=%url%&text=%title%&via=huawei.com",
    //                "facebook": "https://facebook.com/sharer.php?u=%url%&s=100&p[title]=%title%&p[summary]=%description%&p[url]=%url%&p[images][0]=%img%",
    //                "googleplus": "https://plus.google.com/share?url=%url%",
    //                "weibo": "http://service.weibo.com/share/share.php?url=%url%&title=%title%&pic=%img%&searchPic=true",
    //                "linkedin": "http://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%&summary=%description%&source=%url%",

    //            };
    //            var cmd = $this.attr("data-cmd");
    //            var title = $this.attr("data-share-title") || $this.parent().attr("data-share-title") || document.title;
    //            var description = $this.attr("data-share-description") || $this.parent().attr("data-share-description") || $("meta[name='description']").attr("content") || "";
    //            var img = $this.attr("data-share-img") || $this.parent().attr("data-share-img") || "";
    //            var url = $this.attr("data-share-url") || $this.parent().attr("data-share-url") || document.URL;
    //            description = encodeURIComponent(description);

    //            if (cmd == "weixin") {
    //                var weixin_qrcode = $("#js-weixin-qrcode").length ? $("#js-weixin-qrcode") : $('<div id="js-weixin-qrcode" />').qrcode({
    //                    render : "div",
    //                    text : url, size: 250
    //                });

    //                var $mask = $('body>div.mask').length ? $('body>div.mask').show() : $('<div class="mask" style="position:fixed;left:0;top:0;right:0;bottom: 0;background-color:#000;opacity:.5;filter: alpha(opacity=50);z-index: 9">').appendTo('body');

    //                var $wrap = $('body>.QR-wrap').length ? $('body>div.QR-wrap').show() : $('<div class="QR-wrap" style="position:fixed;left:50%;top:50%;z-index: 9;padding: 1.5em;background: #fff;"><h3>Use Wechat scan QR code</h3><a href="javascript:" style="position: absolute;top: 10px;right: 10px;"><img src="assets/images/icon_close.png" alt=""></a></div>').appendTo('body').append(weixin_qrcode);

    //                $wrap.css({
    //                    'margin-left' : 0 - $wrap.width()/2,
    //                    'margin-top' : 0 - $wrap.height()/2
    //                })

    //                $wrap.find('a').one('click',function () {
    //                    $mask.hide()
    //                    $wrap.hide();
    //                });
    //                $mask.one('click',function () {
    //                    $mask.hide()
    //                    $wrap.hide();
    //                });

    //                return false;
    //            }
    //            title = encodeURIComponent(title);
    //            img = encodeURIComponent(img);
    //            url = encodeURIComponent(url);
    //            var share_url = share_url_list[cmd] || "";
    //            share_url = share_url.replace("%title%", title);
    //            share_url = share_url.replace("%description%", description);
    //            share_url = share_url.replace(/%url%/g, url);
    //            share_url = share_url.replace("%img%", img);

    //            window.open(share_url);
    //        }else{
    //            $this.hasClass('js-print-btn') ? window.print() : '';
    //            $this.hasClass('js-email-btn') ? (function(){
    //                var title = $this.attr("data-email-title") || "";
    //                var body = $this.attr("data-email-body") || "";
    //                var email = $this.attr("data-email-addr") || "information@huawei.com";
    //                var url = $this.attr("data-email-url") || document.URL;

    //                title = title.replace("{网页title}", document.title);
    //                body = body.replace("{网页title}", document.title);
    //                body = body.replace("{网页url}", url);

    //                $this.attr("href", "mailto:" + email + "?subject=" + title + " &body=" + body);
    //            })() : '';

    //        }
    //    });

    //}

    /**
     * 包装jwplayer
     * @param playerid
     * @param videoPath
     * @param imgSrc
     * @param autoplay
     * @returns {*}
     */
    function mo_Player(playerid, videoPath, imgSrc, autoplay) {
        autoplay = autoplay || false;
        var video_width = '100%';
        var video_height = '100%';
        var skinSrc = 'http://e.huawei.com/Assets/EBG/js/huawei_skin.xml';
        var swfPlayer = 'http://e.huawei.com/Assets/EBG/js/huawei_player.swf';
        return jwplayer(playerid).setup({
            stretching: 'exactfit',
            skin: skinSrc,
            aspectratio: "16:9",
            width: video_width,
            height: video_height,
            image: imgSrc,
            file: videoPath,
            flashplayer: swfPlayer,
            autostart: autoplay,
            primary: "flash",
            ga: {}
        });
    }

    function showActive()
    {
        if ($(".login-link").length > 0)
        {
            if ($.trim($(".login-link a:last").text()) != "") {
                $(".login-link a:last").addClass("active")
            }
        }
    }

///
    $(function () {
        $(".ShareHide").children(".share_nullbox").children(".share-btn-box").remove();
        $(".js-no-click").each(function () {
            if ($(this).find(".constrict").length == 0)
            {
                $(this).addClass("no-click");
            }

        });

        if ($(".clearfix li.col-md-4").length < 9)
        {
            $("a.pull-right").remove();
        }



        $("#tab_main_nav_mobile_container li.login").each(function () {
            if ($.trim($(this).find("a").text())== "")
            {
                $(this).remove();
            }
        });

        $(".container div .nav-custom").each(function () {

            ///无下拉内容去掉ul
            if ($(this).find(".dropdown-menu li").length == 0)
            {
                $(this).find(".dropdown-menu").remove();
                $(this).find("span").remove();
            }

            /////无标题去掉
            //if ($.trim($(this).find("a").text()) == "") {
            //    $(this).remove();
            //}
           
        });

        ///如果是锚点，则不显示下拉
        $(".container div .nav-custom .dropdown a").each(function () {
            
            if (typeof ($(this).attr("href")) != "undefined" && $(this).attr("href")!="") {
                if ($(this).attr("href").indexOf("#") > -1) {
                    ///role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"
                    $(this).removeAttr("role");
                    $(this).removeAttr("class");
                    $(this).removeAttr("data-toggle");
                    $(this).removeAttr("aria-expanded");
                    $(this).find("span").remove();
                    $(this).next().remove();
                }
                else {
                    $(this).removeAttr("role");
                    $(this).removeAttr("class");
                    $(this).removeAttr("data-toggle");
                    $(this).removeAttr("aria-expanded");
                    $(this).find("span").remove();
                }
             
            }
        })

        ///去掉为空的链接
        $("#tab_main_nav_mobile_container ul li").each(function () {
            if ($(this).find("a").text() == "")
            {
                $(this).remove();
            }
        });

        ///处理手机版的下拉
        $(".hasmore").each(function () {
            if ($(this).find("ul li").length > 0)
            {
                $(this).find("ul").prev("a").append("<em class=\"jiantou\">&nbsp;</em>");
            }

            if ($(this).find("a").attr("href").indexOf("#") > -1)
            {
                $(this).find("a").click(function () {
                    $(".js-mobile-close").trigger("tap");
                });
                $(this).removeClass("hasmore");
                $(this).find("ul").remove();
            }
            if ($(this).children("a").attr("href") == "") {

                $(this).children("a").attr("href", "javascript:viod(0)");

            }

            if ($.trim($(this).children("a").text()) == ""&&$(this).find(" ul li").length==0)
            {
                $(this).remove();
            }

            if($(this).children("a").attr("href")!=""&&$(this).find(" ul li").length==0)
            {
                $(this).children("ul").remove();
            }

        });

        $(".dropdown a").each(function () {

            $(this).click(function () {
                if ($(this).attr("aria-expanded") == "false") {
                    $(this).parent().addClass("open")
                    $(this).next("ul").slideDown();
                    $(this).attr("aria-expanded", "true");
                }
                else {
                    $(this).parent().removeClass("open")
                    $(this).next("ul").slideUp();
                    $(this).attr("aria-expanded", "false");
                }


            });
        });





    });
