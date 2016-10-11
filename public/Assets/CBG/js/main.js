// huawei.js
var mobVideoFlag = false;
var orgbanners = new Array();
var huawei = {
    init: function () {
        huawei.click();
        huawei.HW1_click();
        huawei.animateGrid();
        huawei.recordbanners();
        huawei.hw1_preload();
	huawei.hw1_indexVideo();
        huawei.eventBinding();
        this.share();
        huawei.common_function();
        this.indexSlider();
        $("img.lazy").lazyload();
    huawei.hw1_slide_foot_nav();
    $(window).resize(function () {
      huawei.resize();
      huawei.reBulidMenuDom();
      huawei.hw1_slide_foot_nav();
      huawei.hw1_indexVideo();
      huawei.hw1_stage("#hw1_stage");
    });
    /*huawei.HW1_pageNav("#hw1_masthead","#hw1_global_nav","#hw1_global_nav_content");*/
    huawei.mastheadMenu();
    huawei.jwplayerSetup();
    huawei.index_wookmark();
    huawei.index_wookmark1();
    huawei.slide_psirt();
    huawei.contact_us();
    huawei.worldwide();
    //huawei.IndexVideoPlay();
    huawei.combobox_readonly();
    huawei.topSkinny();
    huawei.reBulidMenuDom();

        huawei.InitShare();
    huawei.hw1_stage("#hw1_stage");
    },
    recordbanners: function () {
        $(".carousel-inner.swiper-wrapper").children().each(function () {
            orgbanners[orgbanners.length] = $(this).clone();
        });
    },
    click: function () {
        $(document)
           .on("tap vclick", "#nav_mobile, .js-mobile-menu-open", function (e) {
               if (e.type === "vclick") {
                   if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0)
                       $("#nav_mobile, .js-mobile-menu-open").trigger("tap");
                   return;
               }
               var $container = $("#container");
               if ($container.css('left') == '0px') {
                   huawei.navMenuMobile.open();
               } else {
                   huawei.navMenuMobile.close();
               }
           })
            //mobile
            .on("vclick", "#footer_nav_mobile_back_to_top", function (e) {
                window.scrollTo(0, 0);
            });
    },
    animateGrid: function () {
        var el = {};
        el.$el = $(".animate-item");
        el.elementStatus = [];
        el.elementsVisible = 0;
        $(window).scroll(function () {
            animateGridItems();
        })
        $(window).resize(function () {
            animateGridItems();
        })

        function animateGridItems() {
            if (el.elementsVisible != el.$el.length) {
                el.viewTop = window.pageYOffset,
                el.windowHeight = $(window).height(),
                el.viewBottom = el.viewTop + el.windowHeight;
                var e = 0;
                el.$el.each(function (i, r) {
                    var t = $(this);
                    var s = $(r).parent().offset().top
                      , o = el.viewBottom - s;
                    if ((!this.initalized && o > 1) && el.elementStatus[i] !== !0) {
                        var a = "animate-start";
                        e++ > 0 && (a += " animate-delay-" + (e - 1)),
                        $(r).addClass(a),
                        el.elementStatus[i] = !0,
                        el.elementsVisible++
                    }
                })
            }

        }
        animateGridItems();
    },
    hw1_preload: function () {
        $loader = $("#hw1_preloader");
        if ($loader.length > 0) {
            $app = $(".hw1_banner");

            $("#hw1_preloader").show();
        }

    },
    topSkinny: function () {
        if ($(window).width() > 991) {
            $(window).scroll(function () {
                var $scrollTop = $(window).scrollTop();
                var $topObj = $("#hw1_masthead_wrap");
                if ($scrollTop > 1) {
                    $topObj.addClass("hw1_skinny");
                    //resizeBannerPos("#hw1_masthead");
                    // $logoObj.parent().addClass("logo_skinny");
                } else if ($scrollTop <= 104) {
                    $topObj.removeClass("hw1_skinny");
                    //resizeBannerPos("#hw1_masthead","true");
                    // $logoObj.parent().removeClass("logo_skinny");
                }
            })
        }
    },
    reBulidMenuDom: function () {
        var $hwmm5 = $('[aria-labelledby="hwmm5"]');
        var $insertDom = $('#hwmm5');

    $("#hw1_search_box").appendTo($(".hw1_search"));
    if ($(window).width() >= 1024) {
      if ($("#hw1_search_box").insertAfter)
        $insertDom.parent().append($hwmm5);
      $("#hw1_search_box").removeAttr("style");
    } else {
      $("#hw1_search_box").insertAfter($("#hw1_masthead_wrap"));
      $("#hw1_search_box").css("width", $(window).width());
    }

    $(".dropdown-toggle").off("click").on("click",function(e){
        $("#hw1_search_box").slideToggle("100");
        $("#hw1_search_box input[type='text']").focus();
    })
   
    
    $(".hw1_img_subinfo a").hover(function () {
      $this = this;
      $img = $(this).parentsUntil('.hw1_multi_img', '.hw1_img_subinfo').prev();
      if (!$img.hasClass("hover")) {
        $img = $img.addClass("hover");
      }
    }, function () {
      if ($img.hasClass("hover")) {
        $img = $img.removeClass("hover");
      }
    })

  },
  hw1_slide_foot_nav: function () {
    if ($(window).width() < 768) {
      $obj = "#footer .visible-xs .col-sm-3 label.hasmenu";
      $(document).off("vclick",$obj).on("vclick", $obj, function (e) {
        $label = $(e.target);
        $ul = $label.next();
        if ($ul.css("display") == "none") {
          $ul.slideDown("1000");
          $label.addClass("active");

                } else if ($ul.css("display") == "block") {
                    $ul.slideUp("1000");
                    $label.removeClass("active");
                }
            })
        } else {
            return;
        }
    },
    HW1_navMenuMobile: {

        open: function () {
            $("#container, #footer, footer.footer, .share_nullbox").addClass("open");
            $("#footer, footer.footer").css("top", $("#container").height());
            $("#hw1_mob_nav_container").addClass("open");
        },

        close: function () {

            $("#footer, footer.footer").css("top", "initial")
            $("#hw1_mob_nav_container").removeClass("open");
            $("#container, #footer, footer.footer, .share_nullbox").removeClass("open");
            return;
        }

  },
  HW1_click: function () {
    $(document).on("click", "#mob_menuitem,#hw1_mob_nav_close", function (e) {
        if (e.type === "vclick") {
          if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0)
            $("#mob_menuitem").trigger("tap");
          return;
        }
        var $container = $("#container");
        if ($container.css('left') == '0px') {
          huawei.HW1_navMenuMobile.open();
        } else {
          huawei.HW1_navMenuMobile.close();
        }
      })
      .on("click", ".hw1_hasmore>a", function () {
        var $sub_nav = $(this).parent().children("ul").first();
        var $sub_nav_li = $(this).parent();
        var $array_li = $(".hw1_hasmore");
        $array_li.each(function (index, domEle) {
          if (index == $sub_nav_li.attr("data-index")) {
            $(this).parent().addClass("active");
            if ($sub_nav.css("display") == "none") {
              $sub_nav.slideDown();
            } else {
              $sub_nav.slideUp();
            }

                   } else {
                       $(this).parent().removeClass("active");
                       if ($(domEle).children("ul").first().css("display") == "block") {
                           $(domEle).children("ul").first().slideUp();
                       }
                   }
               })

        return false;
      })
      //mobile
      .on("vclick", "#footer_nav_mobile_back_to_top", function (e) {
        window.scrollTo(0, 0);
      })
      .on("click",function(e){
        if($("#hw1_search_box").css("display") == "block"){
          if($(e.target) && !$(e.target).hasClass("dropdown-toggle") && !jQuery.contains($("#hw1_search_box").get(0), $(e.target).get(0))){
            $("#hw1_search_box").slideUp();
          }
        }
      
    })
  },
  mastheadMenu: function () {
    var lastobj,ak,aj, s = {
      $closeButtonLink: null ,
      $el: null ,
      $sectionShowing: null ,
      isopen: false,
      $panelShowing: null
    };
    s.$el=$("#hw1_global_nav .nav_ul");

        $("#hw1_global_nav .nav_ul").hoverIntent(function () {
            var al = this.getAttribute("data-menutype")
              , am = this.getAttribute("data-section");
            lastobj = am;
            b();
            if (al === "dropdown" || al === "has_no_submenu") {
                $("#hw1_global_nav_content").height("auto");
            } else {
                if (al === "megamenu") {
                    aa(am);
                    ad(true);
                    w($(this), true)
                }
            }
        }, function () { }, ">li>a").on("click keydown", ">li>a", function (al) {
            var am = this.getAttribute("data-menutype")
              , an = this.getAttribute("data-section");
            if (lastobj == an) {
                return;
            }
            b();
            if (am === "dropdown") {
                al.preventDefault();
                w($(this), true);
            } else {
                if (am === "megamenu" && s.isopen == false) {
                    al.preventDefault();
                    aa(an);
                    ad(true);
                    s.$sectionShowing.find("a:first").focus()
                }
            }
        })
        $("#hw1_global_nav .nav_ul li,#hw1_global_nav_content").hover(function () {
            clearTimeout(ak);
        }, function () {
            clearTimeout(aj);
            ak = setTimeout(function () {
                b();
            }, 500)
        });
        function b() {
            ad(false);
            w(s.$el.find("li.active a"), false)
        }
        function w(aj, ai) {
            if (ai) {
                aj.parent().addClass("active")
            } else {
                aj.parent().removeClass("active")
            }
        }

        function ad(ai) {
            if (ai) {
                $("body").addClass("showing");
                s.isopen = true
            } else {
                s.isopen = false;
                $("#hw1_global_nav_content").css("top", "");
                if (!s.isopen && s.$sectionShowing) {
                    s.$sectionShowing.removeClass("open");
                    s.$sectionShowing = null;
                    $("#hw1_global_nav_content").removeAttr("style");
                }
                $("body").removeClass("showing");
            }
        }
        function aa(ai) {

            $("#hw1_global_nav_content").outerHeight($(".hw1_menu_section[data-section='" + ai + "']").outerHeight());
            if ($("#hw1_masthead_wrap").hasClass("hw1_skinny")) {
                $("#hw1_global_nav_content").css("top", $("#hw1_masthead_wrap").outerHeight())
            }
            $(".hw1_menu_section[data-section='" + ai + "']").find(".hw1_box_wrap").outerHeight($(".hw1_menu_section[data-section='" + ai + "']").outerHeight());
            s.$sectionShowing = $(".hw1_menu_section[data-section='" + ai + "']").addClass("open");

        }

  },
  hw1_stage:function(i){
    if ($("#hw1_stage").length <= 0) {
      return;
    }
     var n, s, o;
  s = $(window),
  o = $(document);
   var t = $(window);
    t.ratio = .76;
    t.imgRatio = .5629;
   
    t.$el = $("#hw1_stage");
    t.$layer = $("#hw1_front");
    t.$layer.height("auto");
    if (s.width() > 767) {
        t.$layer.removeAttr("style");
        t.$layer.css("background-image", "url(" + t.$layer.attr("data-big-img") + ")");
        $("#hw1_stage").removeAttr("style");
    } else {
        t.$layer.removeAttr("style");
        t.$layer.css("background-image", "url(" + t.$layer.attr("data-small-img") + ")");
        t.$layer.css("style", "");
        if($(".hw1_mob .hw1_mobile_link").length > 0){
          $(".hw1_mob .hw1_mobile_link").insertBefore(t.$layer);
        }
        var $height = s.width() * t.imgRatio + $("#hw1_content").height();
        $("#hw1_stage").height($height);
        s.off("resize.stagesParallax");
        s.off("scroll.stagesParallax");
        return;
    }
    var a = !!navigator.userAgent.match(/webkit/i);
    s.on("resize.stagesParallax", function () {
        t.topPosition = t.$el.offset().top,
          t.height = t.$el.height(),
          t.bottomPosition = t.topPosition + t.height;
        t.$layer.css("height","700px");

        }).trigger("resize.stagesParallax")
          ,
          s.on("scroll.stagesParallax", function () {
            var e = t.scrollTop();
             if(e>=140){
                e = 130;
              }
            (Modernizr.csstransforms3d && a ? t.$layer.css("transform", "translateY(" + (t.topPosition + e) * -1 * (t.ratio) + "px) translateZ(0px)") : Modernizr.csstransforms ? t.$layer.css("transform", "translate(0," + (t.topPosition + e) * -1 * (t.ratio) + "px)") : t.$layer.css("margin-top", (t.topPosition + e) * -1 * t.ratio + "px"))
          }).trigger("scroll.stagesParallax")
	},
  	hw1_indexVideo:function(){
    var $winWidth = $(window).width();
    var $videoHeight = ($winWidth > 960) ? 540 : $winWidth * 9 / 16;
    $('.index-video-box').height($videoHeight);
    },
    IndexVideoPlay: function () {
        var $winWidth = $(window).width();
        var $videoHeight = ($winWidth > 1200) ? 576 : $winWidth * 9 / 16;
        $('.index-video a.js_video_player').bind('click', function () {
            if (!mobVideoFlag) {
                $(this).hide().parent().addClass('bg-alpha');
                $(this).siblings('.title').addClass('bg-alpha');
                $('.index-video .index-player').css("background-color", "#000");
                $('.index-video a.close').show();
            }
            mobVideoFlag = false;
            $('.index-video').height($videoHeight).find("img").height($videoHeight);
        });
        $('.index-video a.close').click(function () {
            $(this).hide().parents('.video_box').removeClass('bg-alpha').find('.title').removeClass('bg-alpha').siblings('.js_video_player').show();
            $('.index-video .index-player').css("background-color", "");
            if ($('#player100').length) {
                $('#player100').html('').attr('class', '').attr('style', '');
            }
            if ($('#player100_wrapper').length) {
                $('#player100_wrapper').html('').attr('class', '').attr('style', '').attr('id', 'player100');
            }
            $('.index-video').css('height', 'auto');
        });
    },
    resize: function () {
        var $windowWidth = $(window).width();
        if ($windowWidth > 768) {
            huawei.navMenuMobile.close();
            huawei.HW1_navMenuMobile.close();
        }
    },

    navMenuMobile: {

        open: function () {
            $("#container, #footer, footer.footer, .share_nullbox").addClass("mobile-menu-open");
            $("#footer, footer.footer").css("top", $("#container").height());
            $("#tab_main_nav_mobile_container").addClass("mobile-menu-open");
            // $('#tab_main_nav_close_mobile').addClass("show-table-cell").show().siblings('#tab_main_nav_mobile,#tab_main_need_help_mobile').addClass("hidden").hide();
        },

        close: function () {
            $("#tab_main_nav_mobile_next_container").removeClass("mobile-menu-open");
            $("#footer, footer.footer").css("top", "initial")
            $("#tab_main_nav_mobile_container").removeClass("mobile-menu-open");
            $("#container, #footer, footer.footer, .share_nullbox").removeClass("mobile-menu-open");
            // $('#tab_main_nav_close_mobile').removeClass("show-table-cell").hide().siblings().removeClass("hidden").show();
            return;
        }

    },

    share: function () {

        $(document).on("click", ".js-share-item-btn", function (e) {
            var share_url_list = {
                "twitter": "https://twitter.com/intent/tweet?url=%url%&text=%title%&via=huawei.com",
                "facebook": "https://facebook.com/sharer.php?u=%url%&s=100&p[title]=%title%&p[summary]=%description%&p[url]=%url%&p[images][0]=%img%",
                "googleplus": "https://plus.google.com/share?url=%url%",
                "weibo": "http://service.weibo.com/share/share.php?url=%url%&title=%title%&pic=%img%&searchPic=true",
                "linkedin": "http://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%&summary=%description%&source=%url%"

            };
            var $this = $(this);
            var cmd = $this.attr("data-cmd");
            var title = $this.attr("data-share-title") || $this.parent().attr("data-share-title") || document.title;
            var description = $this.attr("data-share-description") || $this.parent().attr("data-share-description") || $("meta[name='description']").attr("content") || "";
            var img = $this.attr("data-share-img") || $this.parent().attr("data-share-img") || "";
            var url = $this.attr("data-share-url") || $this.parent().attr("data-share-url") || document.URL;
            description = encodeURIComponent(description);

            if (cmd == "weixin") {
                var weixin_qrcode = $("#js-weixin-qrcode");
                if (!weixin_qrcode.length)
                    weixin_qrcode = $('<div id="js-weixin-qrcode" class="weixin-qrcode"/>').appendTo("body").wrap('<div class="hidden"/>');
                weixin_qrcode.children("div").remove().end().qrcode({
                    render: "div",
                    text: url, size: 250
                }).fadeIn();
                $("#fancyboxHandle").attr("href", "#js-weixin-qrcode").trigger("click");

                return false;
            }
            title = encodeURIComponent(title);
            img = encodeURIComponent(img);
            url = encodeURIComponent(url);
            var share_url = share_url_list[cmd] || "";
            share_url = share_url.replace("%title%", title);
            share_url = share_url.replace("%description%", description);
            share_url = share_url.replace(/%url%/g, url);
            share_url = share_url.replace("%img%", img);

            window.open(share_url);
            return false;
        });
    }

    , indexSlider: function () {
        if ($(".swiper-container").length <= 0 || $(".swiper-container > .swiper-wrapper > .swiper-slide").length <= 1) {
            $(".swiper-container .arrow-left, .swiper-container .arrow-right, .swiper-container .swiper-pagination").addClass("hidden");
            $(".swiper-container").addClass("no-swiper");
            return;
        }
        var interval = parseInt($(".swiper-container").parent().attr("data-interval")) || 5000;
        var speed = parseInt($(".swiper-container").parent().attr("data-speed")) || 1000;
        var mySwiper = $('.swiper-container').swiper({
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            speed: speed,
            autoplay: interval,
            onSlideChangeStart: function (swiper) {
                var $active = $(swiper.getSlide(swiper.activeIndex)).find(".carousel-caption");
                var $prev = $(swiper.container).find(".item .carousel-caption").filter(":visible");

                $prev.stop(true, true).fadeOut();
                $active.stop(true, true).delay(500).fadeIn(800);
            }
        });

        $(document).on('click', '.arrow-left', function (e) {
            e.preventDefault();
            mySwiper.swipePrev();
        })
            .on('click', '.arrow-right', function (e) {
                e.preventDefault();
                mySwiper.swipeNext();
            })
            .on('mouseenter', '.swiper-container, .nav-list, #nav-cont-wrap', function (e) {
                mySwiper.stopAutoplay();
            })
            .on('mouseleave', '.swiper-container', function (e) {
                mySwiper.startAutoplay();
            });
    },

    eventBinding: function () {

        $(document).on('slid.bs.carousel', "#index-banner", function (e) {
            //do stuff in here
        })
            .on('slide.bs.carousel', "#index-banner", function (e) {
                $(this).find(".item.active .carousel-caption").fadeOut();
                setTimeout(function () {
                    $(e.relatedTarget).find(".carousel-caption").fadeIn(800);
                }, 500);

                //do stuff in here
            })
            .on("click", ".js-show-box", function (e) {
                $(".js-show-box").not(this).removeClass("active");
                $('.faqs-a').not($(this).next()).removeClass("show");
                $(this).toggleClass("active").next().slideToggle(500);
                return false;
            })
            .on("click", ".js-close-box", function (e) {
                $(this).parents('.faqs-a').prev().trigger("click");
                return false;
            })
            .on("vclick", ".js-search-show", function (e) {
                $(".js-search-header").slideToggle();
                return false;
            }).on("vclick", ".js_weixin", function (e) {
                $(".weixin-qr").slideToggle();
            })
            .on("vclick", ".js-feedback-btn", function (e) {
                $("#fancybox-close").addClass("icon-popup-close");
                $("#fancyboxHandle").attr("href", $(this).attr("href")).trigger("click");
                return false;
            })
        .on("tap vclick", "#tab_main_nav_close_mobile, .js-mobile-menu-close", function (e) {
            if (e.type === "vclick") {
                if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0)
                    $("#nav_mobile").trigger("tap");
                return;
            }
            $("#nav_mobile").trigger("tap");
        })
            .on("vclick", ".js-popup-fancybox-btn", function (e) {
                $("#fancyboxHandle").attr("href", $(this).attr("href")).trigger("click");
                return false;
            })
            .on("vclick", ".js-carrier-fancybox-btn", function (e) {
                var $fancyboxHandle = $("#fancyboxHandle-noclose");
                if (!$fancyboxHandle.length)
                    $fancyboxHandle = $('<a href="#" id="fancyboxHandle-noclose"></a>').appendTo("body").fancybox({
                        padding: 0,
                        showCloseButton: false
                    });
                $("#fancyboxHandle-noclose").attr("href", $(this).attr("href")).trigger("click");
                return false;
            })
            .on("vclick", ".js-fade-box-btn", function (e) {
                $(".js-body-not-close").filter(":visible").not($(this).attr("data-related-selector")).fadeOut(500);
                $($(this).attr("data-related-selector")).fadeToggle(500);
                return false;
            })
            .on("vclick", ".js-slide-box-btn", function (e) {
                $(".js-body-not-close").filter(":visible").not($(this).attr("data-related-selector")).slideUp(500);
                $($(this).attr("data-related-selector")).slideToggle(500);
                return false;
            })
            .on("vclick", ".js-bds_mail", function (e) {
                var title = $(this).attr("data-share-title");
                title = title || "Share: ";
                title += document.title;
                var body = document.title;
                $(this).attr("href", "mailto:?subject=" + title + "&body=" + body + " " + encodeURI(document.URL));
                //return false;
            })
            .on("vclick", ".js-email-btn", function (e) {
                var title = $(this).attr("data-email-title") || "";
                var body = $(this).attr("data-email-body") || "";
                var email = $(this).attr("data-email-addr") || "information@huawei.com";
                var url = $(this).attr("data-email-url") || document.URL;

                title = title.replace("{网页title}", document.title);
                body = body.replace("{网页title}", document.title);
                body = body.replace("{网页url}", url);

                $(this).attr("href", "mailto:" + email + "?subject=" + title + " &body=" + body);

                //return false;
            })
            .on("vclick", ".js-print, .js-print-btn", function (e) {
                window.print();
                return false;
            })
            .on("vclick", ".js-share-show-btn", function (e) {
                $($(this).attr("data-related-selector")).slideToggle();
                return false;
            })
            .on("vclick", ".fancybox-close, .js-fancybox-close", function (e) {
                $.fancybox.close();
                return false;
            })
            .on("vclick", ".js-tel-btn", function (e) {
                if (!is_touch_device())
                    return false;
                //location.href=$(this).attr("data-href");
                $(this).attr("href", $(this).attr("data-href"));
                return;
            })
            .on("vclick", ".js-share-btn", function (e) {
                var $this = $(this);
                $($this.attr("data-related-selector")).css({
                    "top": $this.position().top - (50 * 5 + 10)
                });
                return false;
            })
            .on("vclick", "body", function (e) {
                if ($(e.target).parents(".js-body-not-close").length)
                    return;
                $(".js-body-not-close").filter(":visible").fadeOut(500);
            })
            .on("vclick", ".zhankai", function (e) {

                $(this).children("i").toggleClass("down").end().find(".neirong").slideToggle()
                    .end().children("a").toggleClass("active");
                return false;
            })
            .on("vclick", ".icon-tel", function (e) {
                var position = $(this).offset() || $(this).position();
                $(".tel_tanchu").css({
                    position: "absolute",
                    top: position.top - 160,
                    left: "10%",
                    width: "80%"
                });
                return false;
            });

        $(window).on("resize", function (e) {
            if ($(window).width() >= 768) {
                $(".tel_tanchu").css({
                    position: "",
                    top: "",
                    left: "",
                    width: ""
                });

            }
            $("#index-banner .item").css("background-image", function (i, v) {
                var url = $(window).width() >= 768 ? $(this).attr("data-big-img") : $(this).attr("data-small-img");
                return "url(" + url + ")";
            });
        }).trigger("resize");
        $(window).on("scroll", function (e) {
            var $scrollTop = $(window).scrollTop();
            if ($scrollTop > 100 && $('#right_iconbox').is(":hidden")) {
                $('#right_iconbox').fadeIn(500);
            }

            if ($scrollTop >= 500) {

                $('.js-goto-top').stop().animate({
                    opacity: 1
                }, 500);
            } else {

                $('.js-goto-top').stop().animate({
                    opacity: 0
                }, 500);
            }
        }).trigger("scroll");
        $(document).on("vclick", ".quick-links a", function (e) {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr("data-section-selector")).offset().top
            }, 700);
            return false;
        })
    }
    ,
    common_function: function () {
        $(document).on("click.js-expand-more", ".js-expand-more", function (e) {
            var $t = $(this);
            var $m = $($t.data("related-selector"));
            if ($m.is(":hidden")) {
                $t.find("span").text($t.data("collapse"));
            }
            else {
                $t.find("span").text($t.data("expand"));
            }
            $m.slideToggle();
            return false;
        }).on("click.js-password-show", ".js-password-show", function (e) {
            var $t = $(this);
            var $p = $($t.data("related-selector"));
            var is_ie8 = $.browser.msie && ($.browser.version == "8.0" || $.browser.version == "7.0");
            if ($p.attr("type") == "text") {
                //$p.clone().attr("type", "password").after($p).end().remove();
                if (!is_ie8)
                    $p.attr("type", "password");
                else
                    $(".js-password-input").replaceWith($($(".js-password-input")[0].outerHTML.replace(/type="?text"?/, 'type="password"')).val($(".js-password-input").val()));

                $t.find($t.data("related-selector-img-show")).hide().siblings($t.data("related-selector-img-hide")).show();
            }
            else {
                //$p.clone().attr("type", "text").after($p).end().remove();

                if (!is_ie8)
                    $p.attr("type", "text");
                else
                    $(".js-password-input").replaceWith($($(".js-password-input")[0].outerHTML.replace(/type="?password"?/, 'type="text"')).val($(".js-password-input").val()));

                $t.find($t.data("related-selector-img-hide")).hide().siblings($t.data("related-selector-img-show")).show();
            }

            return false;
        });

        if (typeof $.fn.combobox == "function") {
            // combobox setup
            $(".js_combobox, .js-combobox").combobox({
                select: function (event, ui) {
                    $(ui.item.parentNode).change();

                }
            });
        }
    }
    ,

    jwplayerSetup: function () {


        // bof jwplayer
        (function ($) {
            $(function ($) {
                // bof dom ready
                // fancybox handler
                if ($.fn.fancybox)
                    $('<a href="#" id="play_video_fancyboxTag"></a>').appendTo("body").fancybox({
                        padding: 0,
                        onClosed: function () {
                            pauseVideo();
                        }
                    });

                var playerInstance = null;

                function pauseVideo(e) {
                    try {
                        if (playerInstance)
                            playerInstance.destroyPlayer();
                    } catch (_e) {
                    }
                }

                $(document).on("vclick", ".js_video_player, .js-play-btn", function (e) {
                    var playerid = $(this).attr("data-player-id") || 'playerContainer';
                    var video_path = $(this).attr("data-video-path");
                    var video_name = $(this).attr("data-video-name");//added by chenyi at 2015-12-24 增加视频名称
                    if (video_name == "" || video_name == undefined) {
                        video_name = video_path;//视频名称为空，去取path
                    }
                    var autostart = ($(this).attr("data-player-autostart") || "1") == "1";
                    var ismobile = $(window).width() < 768;
                    if (ismobile)
                        video_path = $(this).attr("data-video-path-mobile") || video_path;

                    if ($(this).attr("data-play-nopop")) {
                        //$(this).next("img").fadeOut();
                        playerInstance = initPlayer(playerid, video_path, $(this).attr("data-img-path"), autostart, video_name);

                        setTimeout(function () {
                            if (!ismobile && playerInstance && playerInstance.getState() != "PLAYING")
                                playerInstance.play();
                        }, 2000);
                        $(this).hide();
                        return false;
                    }

                    if (!$("#player_wrapper").length)
                        $('<div style="display:none;"><div id="player_wrapper"></div></div>').appendTo("body");
                    $("#play_video_fancyboxTag").attr("href", "#player_wrapper").trigger("click");
                    if (playerInstance)
                        playerInstance.destroyPlayer();
                    $("#player_wrapper").empty();
                    $('<div id="' + playerid + '"/>').appendTo("#player_wrapper");
                    //$("#player_wrapper").show();
                    playerInstance = initPlayer(playerid, video_path, $(this).attr("data-img-path"), autostart, video_name);
                    playerInstance.onFullscreen = function (e) {
                        console.log(e); //alert(e);
                    };

                    setTimeout(function () {
                        if (playerInstance && playerInstance.getState() != "PLAYING")
                            playerInstance.play();
                    }, 2000);

                    return false;
                });

                if ($(".leftcontent a:first-child").length > 0) {
                    $(document).on("click", ".leftcontent a:first-child", function (e) {
                        e.preventDefault();
                        var playerid = 'playerContainer';
                        var video_path = $(this).attr("href");
                        var autostart = ($(this).attr("data-player-autostart") || "1") == "1";
                        if (!$("#player_wrapper").length)
                            $('<div style="display:none;"><div id="player_wrapper"></div></div>').appendTo("body");
                        $("#play_video_fancyboxTag").attr("href", "#player_wrapper").trigger("click");
                        if (playerInstance)
                            playerInstance.destroyPlayer();
                        $("#player_wrapper").empty();
                        $('<div id="' + playerid + '"/>').appendTo("#player_wrapper");
                        //$("#player_wrapper").show();
                        playerInstance = initPlayer(playerid, video_path, $(this).attr("data-img-path"), autostart, "");
                        playerInstance.onFullscreen = function (e) {
                            console.log(e); //alert(e);
                        };
                        setTimeout(function () {
                            if (playerInstance && playerInstance.getState() != "PLAYING")
                                playerInstance.play();
                        }, 2000);

                        return false;

                    })
                }

                window.initPlayer = function (playerid, videoPath, imgSrc, autoplay, video_Name) {
                    //if(jwplayer(playerid))return;
                    SetCookieValue("VideoName", video_Name, 60);//added by chenyi at 2015-12-24 增加视频名称
                    autoplay = autoplay || false;
                    var video_width = '100%';
                    var video_height = '100%';
                    //var videoPath=$("#"+playerid).attr("data-video-path");
                    //var imgSrc=$("#"+playerid).attr("data-img-path");
                    var skinSrc = '/Assets/CBG/js/carbon.xml';
                    var swfPlayer = '/Assets/CBG/js/player_new.swf';
                    var is_proxy_ok = window.s && window.s.hasOwnProperty("Media") ? "true" : "false";
                    if (is_proxy_ok == "true") {
                        return jwplayer(playerid).setup({
                            //stretching : 'exactfit',
                            skin: skinSrc,
                            aspectratio: "16:9",
                            width: video_width,
                            height: video_height,
                            image: imgSrc,
                            file: videoPath,
                            flashplayer: swfPlayer,
                            autostart: autoplay,
                            primary: "flash",
                            ga: {},
                            sitecatalyst: {
                                mediaName: videoPath,
                                playerName: "Huawei_player.swf"
                            }
                        });
                    } else if (is_proxy_ok == "false") {
                        return jwplayer(playerid).setup({
                            //stretching : 'exactfit',
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
                };

                // eof dom ready
            });
        })(jQuery);
        // eof

    },
    slide_psirt: function () {
        if ($(".swiper-container-psirt").length <= 0 || $(".swiper-container-psirt > .swiper-wrapper > .swiper-slide").length <= 1) {
            $(".swiper-container-psirt .arrow-left, .swiper-container-psirt .arrow-right, .swiper-container-psirt .swiper-pagination").addClass("hidden");
            $(".swiper-container-psirt").addClass("no-swiper");
            return;
        }
        var interval = parseInt($(".swiper-container-psirt").parent().attr("data-interval")) || 5000;
        var speed = parseInt($(".swiper-container-psirt").parent().attr("data-speed")) || 1000;
        var mySwiper = $('.swiper-container-psirt').swiper({
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            speed: speed,
            autoplay: interval,
            noSwiping: true,
            onSlideChangeStart: function (swiper) {

            },
            onSlideChangeEnd: function (swiper) {
                var i = $('.swiper-container-psirt .swiper-active-switch').index();
                $('.swiper-container-psirt').find('.psirt-tab-title a.js-tab-title').eq(i).trigger('click');

                // $active.stop(true, true).fadeIn(1500);
            }
        });

        $(document).on('click', '.arrow-left', function (e) {
            e.preventDefault();
            mySwiper.swipePrev();
        })
            .on('click', '.js-tab-title', function (e) {
                var i = $(this).index();
                $(this).parents(".swiper-container-psirt").find('.swiper-pagination .swiper-pagination-switch').eq(i).trigger('click');
                $(this).addClass('active').siblings('.active').removeClass('active');
                return false;

            })
            .on('click', '.arrow-right', function (e) {
                e.preventDefault();
                mySwiper.swipeNext();
            })
            .on('mouseenter', '.swiper-container-psirt, .nav-list, #nav-cont-wrap', function (e) {
                mySwiper.stopAutoplay();
            })
            .on('mouseleave', '.swiper-container-psirt', function (e) {
                mySwiper.startAutoplay();
            });

    }
    , contact_us: function () {
        $(document)
            .on("click", ".contact-list-item", function () {
                var js_contact_content = $(this).parents(".js-contact-fonts").find(".js-contact-fonts .js-contact-content");
                var i = $(this).parent().index();

                if ($(window).width() < 768) {
                    $(".js-contact-content").eq(i).insertAfter(this);
                    if ($(".js-contact-content").eq(i).is(":visible")) {
                        $(".js-contact-content").eq(i).slideUp();
                        $(this).removeClass("active");
                    } else {
                        $(".js-contact-content").eq(i).insertAfter(this).slideDown(500);
                        $(".contact-list-item").eq(i).removeClass("active");
                        $(this).addClass("active");
                        $('body,html').animate({
                            'scrollTop': $(this).offset().top
                        });

                    }

                    return false;

                }
                if ($(".js-contact-content").eq(i).is(":visible")) {
                    $(".js-contact-content").eq(i).slideUp();
                    $(this).removeClass("active");
                } else {
                    $(".js-contact-content").removeClass("active").hide();
                    $(".js-contact-content").addClass("active").eq(i).slideDown(500);
                    $(".contact-list-item").removeClass("active").eq(i);
                    $(this).addClass("active");
                }

            });
        if ($(window).width() < 768) {
            $(".js-contact-content").eq(0).insertAfter(".contact-list-item:eq(0)");
        }

    }

    , worldwide: function () {
        var getWorldwide = function () {
            var _tct = $.cookie("worldwide_tag");
            var _tag = $("#show_tag").text();

            $('a[isWorldwide="false"]').each(function (o) {
                var href = $(this).attr("href");
                var subhref = href.substring(0, 4);
                if (subhref == "http") {
                    $(this).attr("permissions", "false");
                    $(this).attr("href", href);
                } else {
                    $(this).attr("permissions", "true");
                }
            });

            $('a[permissions="true"]').each(function (o) {
                var _art = $(this).children("label").attr("displayData");
                if (_art == _tct) {
                    $(this).attr("href", "http://www.huawei.com/" + _art);
                    $(this).attr("isWorldwide", "true");
                } else {
                    $(this).attr("href", "#worldwide_alert");
                }

            })
        }

        $('<a id="fancyboxHandle-worldwide" class="hidden"></a>').appendTo("body").fancybox({
            padding: 0,
            showCloseButton: false
        });
        $(document).on("click", ".worldwide a", function (e) {
            var obj = this;
            if ($(obj).attr("isWorldwide") == "true") {
                window.location = $(obj).attr("href");
            } else {

                $("#fancyboxHandle-worldwide").attr("href", $(obj).attr("href")).trigger("click");

                var show_tag = $(obj).find("label").text();
                $("#show_tag").text(show_tag);
            }
        }).on("click", ".js-worldwide-yes", function (e) {
            var _tag = $("#show_tag").text();

            $.cookie("worldwide_tag", _tag, {
                path: '/',
                expires: 365,
                domain: ".huawei.com"
            });
            $("#show_tag").text(_tag);
            getWorldwide();
            window.location = "http://www.huawei.com/" + _tag;

        }).on("click", ".js-worldwide-no", function (e) {
            var _tag = $("#show_tag").text();

            window.location = "http://www.huawei.com/" + _tag;

        });
    }

};


// main.js

var Huaweimain = {
    init: function () {

        this.pageNav();
        this.mobileNav();
        this.detailMore();
        this.solutionCategory();
        this.pageTop();
        this.videoSwitch();
        this.feedbackValidate();
        this.mobileJWPlayerInit();
        this.indexNews();
        this.pageSubjects();

        $("#index-banner .item.active").first().find(".carousel-caption").delay(500).fadeIn(1000);
        BrowseHappy();
        // goto the anchor
        var anchorSection = getQueryString("goto-section") || getQueryString("section");
        var $anchorSection = $("[name='#" + anchorSection + "']");
        if ($anchorSection.length) {
            $anchorSection.parents(".moreinfo").first().next().children().first().trigger("click");
            setTimeout(function () {
                $('body,html').animate({
                    'scrollTop': $anchorSection.offset().top
                }, 500);
            }, 1000);
        }
        // fancybox handler
        if ($.fn.fancybox)
            $('<a href="#" id="fancyboxHandle"></a>').appendTo("body").fancybox({
                padding: 0
            });

    },
    videoSwitch: function () {
        var $winW = $(window).width();
        var $videoCount = 0;
        var $videoWrapW = 0;
        var $videoCuntNum = 0;
        var $videoContNum = $(".solution_video_wrap").find("li").length;
        var videonumSpanW = $('.solution_video_cont p.video-num span').length * 25;
        //alert($videoCuntNum);

        function videoWrap() {
            $winW = $(window).width();
            if ($winW >= 768) {
                if ($videoContNum > 4) {
                    $(".solution_video_cont a.next").show();
                    $(".solution_video_cont a.prev").show();
                    $(".solution_video_wrap .video-list").css({
                        'margin-left': 0
                    });
                }
                var $videoListWidth = $('.solution_video_cont').width();
                var $videoSiple = $videoListWidth * 0.18;
                $(".solution_video_wrap").find("li").width($videoSiple);

                var $videoListW = $(".solution_video_wrap").find("li").outerWidth(true);
                $(".solution_video_wrap .solution_video").width($videoListW * 4 - 40);
                $videoCuntNum = ($videoContNum / 4) > (Math.floor($videoContNum / 4)) ? Math.floor($videoContNum / 4) : (Math.floor($videoContNum / 4) - 1);
                $('.solution_video_cont p.point_btn').css('left', ($videoListWidth - 75) / 2).width(26 * ($videoCuntNum + 1));
                var $videoContW = $(".solution_video_wrap").find("li").outerWidth(true);
                $(".solution_video_wrap .video-list").width($videoContW * $videoContNum + 10);
                $(".solution_video_cont a.btn").height(100);
                $videoWrapW = $videoListW * 4;
            } else {
                if ($videoContNum > 1) {
                    $(".solution_video_wrap .video-list").css({
                        'margin-left': 0
                    });
                }
                $(".solution_video_cont a.btn").show().removeClass('false').height(($winW - 30) * 9 / 16);
                $(".solution_video_wrap .solution_video").width($winW);
                $(".solution_video_wrap").find("li").width($winW - 30);
                var $videoListWidth = $('.solution_video_cont').width();
                var $videoContW = $(".solution_video_wrap").find("li").outerWidth(true);
                $(".solution_video_wrap .video-list").width($videoContW * $videoContNum);
                $('.solution_video_cont p.video-num').css({
                    'left': ($videoListWidth - videonumSpanW) / 2,
                    'width': videonumSpanW
                });
            }
        }

        videoWrap();
        $(window).resize(function () {
            $videoCount = 0;
            $videoWrapW = 0;
            videoWrap();
        });
        $(".solution_video_cont a.next").click(function () {
            $videoCount++;
            if ($winW > 768) {
                if ($videoCount >= $videoCuntNum) {
                    $(this).addClass('false');
                    if ($videoCount > $videoCuntNum) {
                        $videoCount = $videoCuntNum;
                        return false;
                    }
                } else {
                    $(".solution_video_cont a.prev").removeClass('false');
                }
                $(".solution_video .video-list").animate({
                    "margin-left": -$videoWrapW * $videoCount
                });
                $('.solution_video_cont p.point_btn span').eq($videoCount).addClass('on').siblings().removeClass('on');
            } else {
                if ($videoCount > ($videoContNum - 1)) {
                    $videoCount = 0;
                }
                $(".solution_video .video-list").animate({
                    "margin-left": -($winW + 10) * $videoCount
                });
                $('.solution_video_cont p.video-num span').eq($videoCount).addClass('on').siblings().removeClass('on');
            }
        });
        $(".solution_video_cont a.prev").click(function () {
            $videoCount--;
            if ($winW > 768) {
                if ($videoCount <= 0) {
                    $(this).addClass('false');
                    if ($videoCount < 0) {

                        $videoCount = 0;
                        return false;
                    }
                } else {
                    $(".solution_video_cont a.next").removeClass('false');
                }
                $(".solution_video .video-list").animate({
                    "margin-left": -$videoWrapW * $videoCount
                });
                $('.solution_video_cont p.point_btn span').eq($videoCount).addClass('on').siblings().removeClass('on');
            } else {
                if ($videoCount < 0) {
                    $videoCount = $videoContNum - 1;
                }
                $(".solution_video .video-list").animate({
                    "margin-left": -($winW + 10) * $videoCount
                });
                $('.solution_video_cont p.video-num span').eq($videoCount).addClass('on').siblings().removeClass('on');
            }
        });
        $('.solution_video_cont .point_btn span').click(function () {
            var $pointBtnlength = $('.solution_video_cont .point_btn span').length;
            var $thisIndex = $('.solution_video_cont .point_btn span').index(this);
            $videoCount = $thisIndex;
            switch ($thisIndex) {
                case 0:
                    $(".solution_video_cont a.prev").addClass('false');
                    $(".solution_video_cont a.next").removeClass('false');
                    break;
                case $pointBtnlength - 1:
                    $(".solution_video_cont a.next").addClass('false');
                    $(".solution_video_cont a.prev").removeClass('false');
                    break;
                default:
                    $(".solution_video_cont a.prev,.solution_video_cont a.next").removeClass('false');
            }

            $(this).addClass('on').siblings().removeClass('on');
            $(".solution_video .video-list").animate({
                "margin-left": -$videoWrapW * $thisIndex
            });
        });
    },
    pageNav: function () {
        var timer = null;
        var timer2 = null;

        function navlisttitle() {
            $("#nav-cont .nav-list").css({
                "border-bottom": "1px solid #eeeeee"
            });
        }

        function navContslide() {
            $('#nav-cont .navlist a').removeClass('active');
            $('#nav-cont-wrap .nav-cont-wrap').find('ul').children().stop(true, false).filter(":visible").slideUp(500, function (e) {
                $("#nav-cont .nav-list").css({
                    "border-bottom": ""
                });
            });

        }

        $(document).on('mouseleave', '#nav-cont', function (e) {
            timer2 = setTimeout(function () {
                navContslide();
                $("#nav-cont-wrap").css({
                    "border-top": "none"
                });
                $("#nav-want-cont-wrap").css({
                    "border-top": "none"
                });

            }, 400);
        })
            .on('mouseenter click', '#nav-cont .navlist a', function (e) {
                var $thisIndex = $('#nav-cont a').index(this);
                var $oldIndex = $('#nav-cont a').index($('#nav-cont a.active'));
                var delay_time = $('#nav-cont-wrap .nav-cont-wrap').find('ul').children(":visible").length === 0 ? 0 : 500;
                delay_time = 500;
                $('#nav-cont .navlist span.btn').removeClass('active');

                $(this).addClass('active').siblings().removeClass('active');
                $("#nav-cont .nav-list").css({
                    "border-bottom": "1px solid #eeeeee"
                });
                if ($oldIndex >= 0)
                    $('#nav-cont-wrap .nav-cont-wrap').find('ul').children().eq($oldIndex).stop(true, true).delay(delay_time).slideUp();
                $('#nav-cont-wrap .nav-cont-wrap').find('ul').children().eq($thisIndex).stop(true, true).delay(delay_time).slideDown(500, function () {
                });
                if (!$(this).hasClass("js-no-menu"))
                    return false;
            })
            .on('mouseenter', '#nav-wrap', function (e) {
                clearTimeout(timer2);
            })
            .on('mouseleave', '#nav-wrap', function (e) {
                timer2 = setTimeout(function () {
                    navContslide();
                }, 500);
            });
    },

    detailMore: function () {
        $(document).on("vclick", '.cloud_computing .expand-more a,.expand-moreb a,.product_solution .expand-more a,.product-overview .expand-more a, .expand-more a', function (e) {
            var $expand = $(this).attr('data-expand');
            var $collapse = $(this).attr('data-collapse');

            $(this).parents('.expand-more').prev().slideToggle();
            $(this).parents('.expand-moreb').next().slideToggle();
            $(this).find('i').toggleClass('down');
            $expandTarget = $(document).scrollTop();
            if ($(this).hasClass('on')) {
                $(this).find('span').text($expand);
                $(this).removeClass('on');
                $('body,html').animate({
                    'scrollTop': $expandTarget
                });
            } else {
                $(this).find('span').text($collapse);
                $(this).addClass('on');
                //$expandTarget = $(document).scrollTop();
            }
        }).on("vclick", '.js-more-toggle', function (e) {
            if ($(this).hasClass("on"))
                $($(this).attr("data-related-selector")).slideDown();
            else $($(this).attr("data-related-selector")).slideUp();
            //$(this).toggleClass("on");
            // var expand = $(this).attr('data-expand');
            // var collapse = $(this).attr('data-collapse');
            // if($(this).hasClass("on"))$(this).children("span").text(expand);
            // else $(this).children("span").text(collapse);
        });
    },

    solutionCategory: function () {
        $(document).on("vclick", '.solCategory .solution-nav span.title,.anyts-down .solution-nav span.title', function (e) {
            $(this).toggleClass('on');
            $(this).siblings('.link-wrap').slideToggle();
        })
            .on("vclick", ".solution-mobilr-nav .title i", function (e) {
                $(this).toggleClass('on').siblings('ul').slideToggle();
            })
            .on("vclick", ".solution-mobilr-nav .title ul li span", function (e) {
                $(this).addClass('on').siblings().removeClass('on');
            });
    },

    pageTop: function () {
        $(window).scroll(function () {
            var $scrollTop = $(window).scrollTop();
            if ($scrollTop > 1000) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });
        $(document).on("vclick", '#top, .js-goto-top', function () {
            $('body,html').animate({
                'scrollTop': 0
            });
        });
    },

    mobileNav: function () {
        $(document).on("vclick", "#tab_main_nav_mobile_container ul li.home", function (e) {
            $(this).toggleClass('active').next('li').slideToggle();
        })
            .on("vclick", ".js-hasmore > a, .hasmore > a", function (e) {
                var $sub_nav = $(this).parent().children("ul").first();
                $(this).parent().siblings(".active").children("a").trigger("click");
                if ($sub_nav.is(":hidden")) {
                    $(this).find("i, em").add($(this).parent()).addClass("active");
                }
                else $(this).find("i, em").add($(this).parent()).removeClass("active");
                $sub_nav.slideToggle(500, function () {
                    if ($(this).is(":hidden")) return;
                    $("#tab_main_nav_mobile_container").stop().delay(100).animate({
                        scrollTop: ($(this).parent().position() || $(this).parent().offset()).top + $("#tab_main_nav_mobile_container").scrollTop()
                    }, 500);
                });
                return false;
            })
            .on("vclick", "#tab_main_nav_mobile_next_container", function (e) {
                e.stopPropagation();
            })
            .on("vclick", "#tab_main_nav_mobile_next_container h3", function (e) {
                $(this).parent().removeClass("mobile-menu-open");
            });
    },
    feedbackValidate: function () {
        $(document).on("click", ".js-feedback-submit-btn", function (e) {
            $(this).parents("form").first().submit();
            //windows.location.href = window.location.href;
            //$.fancybox.close();
            return false;
        });
        if ($(".js-feedback-form").length) {

            $(".js-feedback-form").on("submit", function (e) {
                if (!$(this).validate().form())
                    return false;

                OpenLoading();

                $(this).ajaxSubmit(function (data) {
                    //alert(data["msg"]);
                    setTimeout(function () {
                        $.fancybox.close();
                        CloseLoading();
                    }, 1000);


                    $("input[name='VerificationCode']").val("");
                    $("#VerifyCode").click();
                });

                return false;
            }).validate({
                ignore: [],
                onfocusout: function (element, event) {
                    if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                        this.element(element);
                    }
                },

                messages: {
                    userid: {
                        required: '<i class="icon_error"></i>' + $("#ToolbarRequired").val()
                    },
                    email: {
                        required: '<i class="icon_error"></i>' + $("#ToolbarRequired").val(),
                        email: '<i class="icon_error"></i>' + $("#ToolbarEmailformat").val()
                    },
                    gryw: {
                        required: '<i class="icon_error"></i>' + $("#ToolbarRequired").val()
                    },
                    liuyan: {
                        required: '<i class="icon_error"></i>' + $("#ToolbarRequired").val()
                    },
                    VerificationCode: {
                        required: ''
                    }
                },
                rules: {
                    userid: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    gryw: {
                        required: true
                    },
                    liuyan: {
                        required: true
                    },
                    VerificationCode: {
                        required: true
                    }
                },
                errorPlacement: function (label, element) {
                    //console.log(arguments);
                    var error = element.parent().next(".error-messages");
                    if (error.length == 0) error = element.parent().after('<div class="error-messages"/>').next(".error-messages");
                    error.empty().append(label);
                }
            });
        }
    },
    mobileJWPlayerInit: function () {
        if (!($(window).width() < 768 || is_touch_device()))
            return;
        mobVideoFlag = true;
        $(".js_video_player").filter("[data-player-id]").attr("data-player-autostart", "0").trigger("click");
    },
    indexNews: function () {
        if ($(".swiper-container-news").length <= 0) return;
        var mySwiper = new Swiper('.swiper-container-news', {
            //pagination : '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            autoplay: 5000,
            speed: 800,
            mode: 'vertical'

        });

        $(document).on('click', '.arrow-left, .js-prev-news', function (e) {

            e.preventDefault()
            mySwiper.swipePrev()
        })
            .on('click', '.arrow-right, .js-next-news', function (e) {
                e.preventDefault()
                mySwiper.swipeNext()
            })
            .on('mouseenter', '.group-news', function (e) {
                mySwiper.stopAutoplay();
            })
            .on('mouseleave', '.group-news', function (e) {
                mySwiper.startAutoplay();
            });
        return;
        // news auto roll
        $(document)
            .on("vclick", ".js-prev-news", function (e) {
                var $scroll_box = $(".js-news-box");
                var $scroll_box_height = $scroll_box.find("> ul > li").first().height();
                if ($scroll_box.scrollTop() === 0)
                    $scroll_box.animate({
                        "scrollTop": $scroll_box_height
                    }, 500);
                $scroll_box.children("ul").animate({
                    "margin-top": 1 * $scroll_box_height
                }, 500, function (_e) {
                    $(this).css({
                        'margin-top': '0'
                    }).children("li").last().prependTo(this);
                });
                return false;

            })
            .on("vclick", ".js-next-news", function (e) {
                var $scroll_box = $(".js-news-box");
                var $scroll_box_height = $scroll_box.find("> ul > li").first().height();
                $scroll_box.children("ul").animate({
                    "margin-top": -1 * $scroll_box_height
                }, 500, function (_e) {
                    $(this).css({
                        'margin-top': '0'
                    }).children("li").first().appendTo(this);
                });
                var news_timer;
                $(document)
                    .on("mouseenter", ".group-news", function (e) {
                        clearInterval(news_timer);
                    }).on("mouseleave", ".group-news", function (e) {
                        news_timer = setInterval(function () {
                            $(".js-next-news").trigger("click");
                        }, 5000);
                    }).find(".group-news").trigger("mouseleave");

                return false;
            });
    },
    pageSubjects: function () {
        /*industry-analysts-download.html*/
        if ($('.hirp-open-cate').length > 0) {
            $(document).on('mouseenter click', '.hirp-open-cate th', function (e) {/*click是为兼容平板*/
                var $this = $(this);
                var _thisIndex = $('.hirp-open-cate th').index($(this));
                var _oldIndex = $('.hirp-open-cate th').index($('.hirp-open-cate th.active'));

                $(this).addClass('active').siblings().removeClass('active');

                if (_oldIndex >= 0)
                    $('.hirp-open-cate .sub-cate').find('.item').eq(_oldIndex).stop().slideUp();

                setTimeout(function () {
                    if ($this.hasClass('active')) {
                        $('.hirp-open-cate .sub-cate').width($('.hirp-open-cate .table').width())
                        /*兼容小屏*/
                        $('.hirp-open-cate .sub-cate').find('.item').eq(_thisIndex).stop().slideDown(500);
                    }
                }, 100);
            });
            $(document).on('mouseleave', '.hirp-open-cate', function (e) {
                $('.hirp-open-cate th').removeClass('active');
                $('.hirp-open-cate .sub-cate .item').stop().slideUp(function () {
                    $('.hirp-open-cate .sub-cate .item').attr('style', '')
                });
            });
        }
    }

};

// 20150525 psirt silder
huawei.slide_psirt = function () {
    if ($(".swiper-container-psirt").length <= 0 || $(".swiper-container-psirt > .swiper-wrapper > .swiper-slide").length <= 1) {
        $(".swiper-container-psirt .arrow-left, .swiper-container-psirt .arrow-right, .swiper-container-psirt .swiper-pagination").addClass("hidden");
        $(".swiper-container-psirt").addClass("no-swiper");
        return;
    }
    var interval = parseInt($(".swiper-container-psirt").parent().attr("data-interval")) || 5000;
    var speed = parseInt($(".swiper-container-psirt").parent().attr("data-speed")) || 1000;
    var mySwiper = $('.swiper-container-psirt').swiper({
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        speed: speed,
        autoplay: interval,
        noSwiping: true,
        onSlideChangeStart: function (swiper) {

        },
        onSlideChangeEnd: function (swiper) {
            var i = $('.swiper-container-psirt .swiper-active-switch').index();
            $('.swiper-container-psirt').find('.psirt-tab-title a.js-tab-title').eq(i).trigger('click');

            // $active.stop(true, true).fadeIn(1500);
        }
    });

    $(document).on('click', '.arrow-left', function (e) {
        e.preventDefault();
        mySwiper.swipePrev();
    })
        .on('click', '.js-tab-title', function (e) {
            var i = $(this).index();
            $(this).parents(".swiper-container-psirt").find('.swiper-pagination .swiper-pagination-switch').eq(i).trigger('click');
            $(this).addClass('active').siblings('.active').removeClass('active');
            return false;

        })
        .on('click', '.arrow-right', function (e) {
            e.preventDefault();
            mySwiper.swipeNext();
        })
        .on('mouseenter', '.swiper-container-psirt, .nav-list, #nav-cont-wrap', function (e) {
            mySwiper.stopAutoplay();
        })
        .on('mouseleave', '.swiper-container-psirt', function (e) {
            mySwiper.startAutoplay();
        });

};


// bof common method

function is_touch_device() {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
function BrowseHappy() {
    var currentUrl = window.location.pathname;
    //删除中文站点下获取使用cookie提示
    if (currentUrl.indexOf("cn") != 1) {
        $(document).on("vclick", '.browsehappy a.close', function (e) {
            $(this).parents('.browsehappy').slideUp(
                function () {
                    $.cookie('browsehappy', 'browsehappy', {
                        domain: ".huawei.com",
                        expires: 30,
                        path: '/'
                    });
                });
        });
        if ($.cookie('browsehappy')) {
            return false;
        } else {
            $('.browsehappy').slideDown();
        }
    }
}
function resizeBannerPos(obj, clear) {
    var $bannerPosTop = $(obj).outerHeight();
    if ($('.browsehappy').css("display") == "block") {
        $bannerPosTop = $bannerPosTop + $('.browsehappy').outerHeight();
    }
    if (clear == "true") {
        $bannerPosTop = 0;
    }
    $("#hw1_stage").css("top", $bannerPosTop);
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null)
        return unescape(decodeURI(r[2]));
    return null;
}
// eof common method

// register.js
// bof form validate
// bof
(function ($) {
    // bof dom ready
    $(function ($) {
        //表单验证方法调用
        huawei.registerForm();
        huawei.changePasswordForm();
        huawei.subscribeForm();
        huawei.individuationForm();
    });
    // eof dom ready
})(jQuery);
// eof

var huawei = huawei || {};

function getForMsgEmailExist() {
    var MsgEmailExist = $("#MsgEmailExist").val();
    return MsgEmailExist;
}


function getForMsgFromH(str) {
    var msg = $("#" + str).val();
    return msg;
}

//获取表单必填字段的提示信息
function getFormRequiredInfo() {
    var msgRequired = $("#MsgRequired").val();
    return msgRequired;
}

function getFormMsgPasswordreg() {
    var MsgPasswordreg = $("#MsgPasswordreg").val();
    return MsgPasswordreg;
}

//获取表单必填字段的提示信息
function getFormEmailInfo() {
    var msgEmail = $("#MsgEmail").val();
    return msgEmail;
}
//获取表单必填字段的提示信息
function getFormEqualToInfo() {
    var MsgEqualTo = $("#MsgEqualTo").val();
    return MsgEqualTo;
}
//获取表单必填字段的提示信息
function getFormVerificationCodeInfo() {
    var MsgEqualTo = $("#MsgVerificationCode").val();
    return MsgEqualTo;
}
// 自定义复合选择框 custom.combobox bof
(function ($) {
    if (typeof $.widget == "undefined")
        return;
    $.widget("custom.combobox", {
        _create: function () {
            this.wrapper = $("<span>")
                .addClass("custom-combobox")
                .insertAfter(this.element);

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(":selected"),
                value = selected.val() ? selected.text() : "";

            this.input = $("<input>")
                .appendTo(this.wrapper)
                .val(value)
                .attr("title", "")
                .attr("placeholder", this.element.attr("placeholder"))
                .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: $.proxy(this, "_source")
                })
                .tooltip({
                    tooltipClass: "ui-state-highlight"
                });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger("select", event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: "_removeIfInvalid"
            });
        },

        _createShowAllButton: function () {
            var input = this.input,
                wasOpen = false;

            $("<a>")
                .attr("tabIndex", -1)
                .attr("title", "Show All Items")
                //			.tooltip()
                .appendTo(this.wrapper)
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass("ui-corner-all")
                .addClass("custom-combobox-toggle ui-corner-right")
                .mousedown(function () {
                    wasOpen = input.autocomplete("widget").is(":visible");
                })
                .click(function () {
                    input.focus();

                    // Close if already visible
                    if (wasOpen) {
                        return;
                    }

                    // Pass empty string as value to search for, displaying all results
                    input.autocomplete("search", "");
                });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response(this.element.children("option").map(function () {
                var text = $(this).text();
                if (this.value && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children("option").each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            // Remove invalid value
            this.input
                .val("")
                .attr("title", value + " didn't match any item");
            //.tooltip("open");
            this.element.val("");
            this._delay(function () {
                this.input.tooltip("close").attr("title", "");
            }, 2500);
            this.input.data("ui-autocomplete").term = "";
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });
})(jQuery);
// eof

//add by zhucong 2015/09/01
function getLanguage() {
    var language = $("#Language").val();
    if (language == null) {
        language = "en";
    }
    if (language == "ru-RU") {
        language = "ru";
    }
    if (language == "zh") {
        language = "cn";
    }
    return language.toLowerCase();
}

//function bingVerifyCodeImg() {
//    var verifyCodeUrl = "http://e-beta.huawei.com/enterpriseform/images/image.jsp";
//    if (location.host == "e.huawei.com") {
//        verifyCodeUrl = "http://e.huawei.com/enterpriseform/images/image.jsp";
//    }
//    $("#VerifyCode").attr("src", verifyCodeUrl).click(function () {
//        $("#VerifyCode").attr("src", verifyCodeUrl + "?time=" + new Date().getTime());
//    });
//}

//add by zhucong 
//function checkVerify() {
//    var validateNumber = $("input[name='validateNumber']").val();
//    var imgNumber = $("#HidCode").val();
//    if (validateNumber == imgNumber) {
//        //$("input[name='validateNumber']").val("");
//        //$("#VerifyCode").click();
//    }
//    else {
//        $("input[name='validateNumber']").val("");
//    }
//    return false;
//    //var urlvalidateNumber = "http://e-beta.huawei.com/enterpriseform/buyfeedback.do?method=checkCode&validate=";
//    //if (location.host == "e.huawei.com") {
//    //    urlvalidateNumber = "http://e.huawei.com/enterpriseform/buyfeedback.do?method=checkCode&validate=";
//    //}
//    //if (validateNumber != "" && validateNumber.length == 4) {
//    //    $.ajax({
//    //        type: "POST",
//    //        url: urlvalidateNumber + validateNumber,
//    //        success: function (html) {
//    //            if (html == "false") {
//    //                $("input[name='validateNumber']").val("");
//    //                $("#VerifyCode").click();
//    //            }
//    //            //$("#VerifyCode").click();
//    //        },
//    //        error: function () {
//    //            $("input[name='validateNumber']").val("");
//    //        }
//    //    });
//    //}
//    //else {
//    //    $("input[name='validateNumber']").val("");
//    //}
//}

//行业分析师绑定国家/区域 add by zhucong 2015/09/01
function getPriceInfoBindList() {
    ////绑定国家
    //var urlCountry = "http://e-beta.huawei.com/enterpriseform/buyfeedback.do?method=changeRegion&enterprise_lang=";
    //if (location.host == "e.huawei.com") {
    //    urlCountry = "http://e.huawei.com/enterpriseform/buyfeedback.do?method=changeRegion&enterprise_lang=";
    //}
    //$.ajax({
    //    type: "POST",
    //    url: urlCountry + getLanguage() + (getLanguage() == "cn" ? "&regionCode=1" : ""),
    //    success: function (msg) {
    //        var obj = eval(msg);
    //        $.each(obj, function () {
    //            $("#Country").append("<option value='" + this.value + "'>" + this.name + "</option>");
    //        });
    //    },
    //    error: function (ex) {
    //        //alert("绑定国家请求失败");
    //    }
    //});
    var curlang = getLanguage();
    if (curlang.toUpperCase() == "CN") {
        var thisVal = $(this).val();
        if (thisVal != "") {
            $.ajax({
                type: "POST",
                url: "/zh/Ajax/AjaxCommon.ashx?method=getAddrByCityId",
                data: "cityid=" + thisVal,
                success: function (data) {
                    if (data != "0") {
                        var dataObj = eval("(" + data + ")");//转换为json对象

                        for (var i = 0; i < dataObj.length; i++) {
                            $("#Country").append("<option value='" + dataObj[i].Id + "'>" + dataObj[i].Name + "</option>");
                        }
                    }
                }
            });
        }
    }
    else if (curlang.toUpperCase() == "EN") {
        //国家下拉框事件
        var thisVal = $(this).val();
        if (thisVal != "") {
            $.ajax({
                type: "POST",
                url: "/en/Ajax/AjaxCommon.ashx?method=getAddrBycountryId",
                data: "countryid=" + thisVal,
                success: function (data) {
                    if (data != "0") {
                        //$("#contactAddr").html(data);
                        var dataObj = eval("(" + data + ")");//转换为json对象
                        for (var i = 0; i < dataObj.length; i++) {
                            $("#Country").append("<option value='" + dataObj[i].Id + "'>" + dataObj[i].Name + "</option>");
                        }
                    }
                }
            });
        }
    }
}

function GetPostUrlPram() {
    var data = new Array();
    data.push("Email=" + encodeURIComponent($("#Email").val()));
    data.push("GivenName=" + encodeURIComponent($("#GivenName").val()));
    data.push("LastName=" + encodeURIComponent($("#LastName").val()));
    data.push("Company=" + encodeURIComponent($("#Company").val()));
    data.push("Country=" + encodeURIComponent($("#jCountry .js_combobox option:selected").text()));
    data.push("Area=" + encodeURIComponent($("#Area").val()));
    data.push("validateNumber=" + encodeURIComponent($("#validateNumber").val()));

    var vReqValue = "";
    $(".row .col-sm-3").find("input[type=checkbox]").each(function () {
        if ($(this).attr("type") == "checkbox") {
            var checked = $(this).attr("checked") == "checked";
            if (checked) {
                vReqValue = vReqValue + $(this).val() + ",";
            }
        }
    })
    if ($("#Others").attr("checked") == "checked")
        vReqValue = vReqValue + $("#OtherValue").val() + ",";
    if (vReqValue.length > 0)
        vReqValue = vReqValue.substring(0, vReqValue.length - 1);
    data.push("Interest=" + encodeURIComponent(vReqValue));
    return data;
}

//行业分析师的注册
function SubmitRegister() {
    var ret = /\?/;
    var path = window.location.href
    if (ret.exec(path) == "?") {
        url = path + "&d=ws";
    } else {
        url = "?d=ws";
    }
    url = url + "&" + GetPostUrlPram().join('&');
    $.ajax({
        url: url,
        type: "POST",
        beforeSend: function () {

        },
        success: function (html) {
            if (html.trim() == "1") {
                alert(" VerifyCode Error ");
                return;
            }
            else if (html.trim() == "2") {
                alert("Register Success!");
                ClearData(); //清除数据
                return;
            }
            else {
                alert("Register Error!");
            }
        },
        error: function (responseText) {
            alert("Register Error!");
        }
    });
};


function ClearData() {
    $("#VerifyCode").click();
    $("input[name='validateNumber']").val("");
    $("#Email").val("");
    $("#ConfirmEmail").val("");
    $("#GivenName").val("");
    $("#LastName").val("");
    $("#Company").val("");
    $("#registerform_0_Country").val("");
    $("#Area").val("");
    $(".row .col-sm-3").find("input[type=checkbox]").each(function () {
        if ($(this).attr("type") == "checkbox") {
            var checked = $(this).attr("checked") == "checked";
            if (checked) {
                $(this).removeAttr("checked");
            }
        }
    })
    $("#Others").removeAttr("checked");
    $("#OtherValue").val("");
}

// 行业分析师注册 bof
(function ($, huawei) {
    huawei.registerForm =
        function () {
            $(".js_register_form")
                .on("submit", function (e) {
                    if (!$(this).validate().form())
                        return false;
                    $(this).ajaxSubmit(function (data) {
                        //ajax请求成功
                        SubmitRegister();
                        return false;
                    });

                    return false;
                })
                .validate({
                    ignore: [],
                    onfocusout: function (element, event) {
                        if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                            this.element(element);
                        }
                    },
                    messages: {
                        ConfirmEmail: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo(),
                            equalTo: '<i class="icon_error"></i>' + getFormEqualToInfo()
                        },
                        Email: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        GivenName: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        LastName: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        Company: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        registerform_0$Country: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        Area: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        //Other: {
                        //    required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        //},
                        Agree: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        Booking: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        },
                        validateNumber: {
                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                        }
                    },
                    rules: {
                        ConfirmEmail: {
                            required: true,
                            email: true,
                            equalTo: "input[name='Email']"
                        },
                        Email: {
                            required: true,
                            email: true
                        },
                        GivenName: {
                            required: true
                        },
                        LastName: {
                            required: true
                        },
                        Company: {
                            required: true
                        },
                        registerform_0$Country: {
                            required: true
                        },
                        Area: {
                            required: true
                        },
                        //Other: {
                        //    required: "input[name='OtherInterest']:checked"?false:true
                        //},
                        Agree: {
                            required: true
                        },
                        Booking: {
                            required: true
                        },
                        validateNumber: {
                            required: true
                        }
                    },
                    errorPlacement: function (label, element) {
                        //console.log(arguments);
                        element.parents(".row").first().find(".field_message").empty().append(label);
                    }
                });

            $(document).on("click", ".js_register_form_submit", function (e) {
                $(this).parents("form").first().submit();
                return false;
            })
                .on("focusout", ".custom-combobox input", function (e) {
                    $(this).parent().prev("select").change();
                    return true;
                })
                .on("change", ".js_combobox", function (e) {
                    setTimeout(function () {
                        try {
                            $(e.target).valid();
                        } catch (_e) { }
                    }, 500);

                    return true;
                })
                .on("click", ".js_checkable", function (e) {
                    if ($(e.target).is("input"))
                        return true;
                    $(this).find("input").trigger("click");
                });

            //if (typeof $.fn.combobox == "function") {
            //    // combobox setup
            //    $(".js_combobox").combobox({
            //        select: function (event, ui) {
            //            $(ui.item.parentNode).change();

            //        }
            //    });
            //}
        };

})(jQuery, huawei);
// eof

//// 更改密码表单验证 bof xwx282787 检查出这个表单代码无用（先去掉）
//(function ($, huawei) {
//    huawei.changePasswordForm =
//        function () {
//            $(".js_change_password_form")
//                .on("submit", function (e) {
//                    if (!$(this).validate().form())
//                        return false;
//                    $("#btnSubmitFeedback").attr("disabled", "disabled");
//                    $(this).ajaxSubmit(function (data) {
//                        //ajax请求成功
//                        // $("#btnSubmitFeedback").removeAttr("disabled");
//                        // var language = getLanguage() == "cn" ? "zh" : getLanguage();
//                        // var path = "/" + language + "/success_result";
//                        // window.location.href = path;
//                        return false;
//                    });

//                    return false;
//                })
//                .validate({
//                    ignore: [],
//                    onfocusout: function (element, event) {
//                        if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
//                            this.element(element);
//                        }
//                    },
//                    messages: {
//                        Email: {
//                            required: '<i class="icon_error"></i>' + getFormRequiredInfo(),
//                            email: '<i class="icon_error"></i>' + getFormEmailInfo()
//                        },
//                        Password: {
//                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
//                        },
//                        Newpassword: {
//                            required: '<i class="icon_error"></i>' + getFormRequiredInfo()
//                        },
//                        Confirm_password: {
//                            required: '<i class="icon_error"></i>' + getFormRequiredInfo(),
//                            equalTo: '<i class="icon_error"></i>' + getFormEqualToInfo()
//                        }
//                    },
//                    rules: {
//                        Email: {
//                            required: true,
//                            email: true
//                        },
//                        Password: {
//                            required: true
//                        },
//                        Newpassword: {
//                            required: true
//                        },
//                        Confirm_password: {
//                            required: true,
//                            equalTo: "input[name='Newpassword']"
//                        }
//                    },
//                    errorPlacement: function (label, element) {
//                        //console.log(arguments);
//                        element.parents(".row").first().find(".field_message").empty().append(label);
//                    }
//                });

//            $(document).on("click", ".js_change_password_form_submit", function (e) {
//                $(this).parents("form").first().submit();
//                return false;
//            });

//        };
//})(jQuery, huawei);
//// eof

// 角色验证表单验证 bof
(function ($, huawei) {
    huawei.individuationForm =
        function () {
            var validateOptions = {
                ignore: [],
                onfocusout: function (element, event) {
                    if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                        this.element(element);
                    }
                },
                messages: {
                    username: {
                        required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                    },
                    organization: {
                        required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                    }
                },
                rules: {
                    username: {
                        required: true
                    },
                    organization: {
                        required: true
                    }
                },
                errorPlacement: function (label, element) {
                    //console.log(arguments);
                    element.next(".field_message").empty().append(label);
                }
            };
            $(".js_individuation_form,.js_abalysts_form,.js_media_form")
                .on("submit", function (e) {
                    if (!$(this).validate().form())
                        return false;
                    $("#btnSubmitFeedback").attr("disabled", "disabled");
                    $(this).ajaxSubmit(function (data) {
                        //ajax请求成功
                        // $("#btnSubmitFeedback").removeAttr("disabled");
                        // var language = getLanguage() == "cn" ? "zh" : getLanguage();
                        // var path = "/" + language + "/success_result";
                        // window.location.href = path;
                        return false;
                    });

                    return false;
                }).each(function (i, o) {
                    $(this).validate(validateOptions);
                });

            $(document).on("click", ".tijiao", function (e) {
                $(this).parents("form").first().submit();
                return false;
            });

        };
})(jQuery, huawei);
// eof
// eof form validate

// row-wookmark bof
huawei.index_wookmark = function () {
    var $container = $('.wookmark');
    if (!$container.length) return;
    $('#container').imagesLoaded(function () {
        // images have loaded
    }).always(function (instance) {
        console.log('all images loaded');
        // initialize
        $container.masonry({
            itemSelector: '.col-sm-4',
            stamp: '.stamp'
        });
    });
};
// row-wookmark eof
//get login state
function GetUserInfo() {
    var userStatusUrl = $("#hfUserstate").val();
    if (userStatusUrl != "") {
        userStatusUrl += "?action=userstate&currentUrl=" + encodeURI(window.location);
        $.ajax({
            url: userStatusUrl,
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.Stats) {
                    var html = "";
                    //登录用户信息标签ID修改 modify by Gordon 2015.09.14
                    var linkContainer = $("#hw1_masthead_subinfo");
                    $(linkContainer).empty();
                    //clear the links at first.
                    for (var i = 0; i < data.Links.length; i++) {
                        html += "<li><a id='headLink" + i + "' data-value='" + data.Links[i].ID + "' title='"
                          + data.Links[i].Name + "' href='" + data.Links[i].Url + "'>" + data.Links[i].Name + "</a></li>";
                        //if (i < data.Links.length - 1) {
                        //    html += "|";
                        //}
                    }
                    $(linkContainer).html(html);
                    $("#V_userName").val(data.UserName);
                    $.cookie("accountid", data.UserName);
                }
            },
            error: function (ex) {

            }
        });
    }
}

$(function () {
    GetUserInfo();
});
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null)
        return unescape(decodeURI(r[2]));
    return null;
}

function AlertDialog() {
    $("#fancybox-close").addClass("icon-popup-close");
    $("#fancyboxHandle").attr("href", "#Subscribe_reg").trigger("click");
    return false;
}
huawei.index_wookmark1 = function () {
    var $container = $('.wookmark1');
    if (!$container.length)
        return;
    $('#container').imagesLoaded(function () {
        // images have loaded
    }).always(function (instance) {
        console.log('all images loaded');
        // initialize
        $container.masonry({
            itemSelector: '.col-sm-6'
        });
    });
};

function OpenLoading() {
    if ($("#gary").length == 0 || $("#loading").length == 0) {
        $("#fancybox-content").append("<div id=\"gary\"></div>").append("<div id=\"loading\">" + $("#Submittings").val() + "</div>");
        $("#gary").css({
            "position": "absolute",
            "background-color": "gray",
            "opacity": "0.5",
            "width": "100%",
            "height": "100%",
            "z-index": "99",
            "top": "0",
            "left": "0",
        });
        var loading = $("#loading");
        $("#loading").css({
            "position": "absolute",
            "width": "150px",
            "heigth": "50px",
            "display": "block",
            "line-height": "50px",
            "background-color": "#C0C0C0",
            "z-index": "100"
        });
        $("#loading").css({
            "left": (($("#gary").width() - loading.width()) / 2) + "px",
            "top": (($("#gary").height() - loading.height()) / 2) + "px"
        });
    }
    $("#loading").show();
    $("#gary").show();
}
function CloseLoading() {
    $("#loading").remove();
    $("#gary").remove();
}


function OpenLoadingNew(str) {
    if ($("#loading").length == 0) {
        $("body").append("<div class='hidden'><div id=\"loading\">" + str + "</div></div>");

        var loading = $("#loading");
        $("#loading").css({
            "width": "750px",
            "height": "300px",
            "display": "block",
            "padding": "120px 20px",
            "line-height": "24px",
            "background-color": "WHITE",
            "z-index": "100"
        });
    }
    $("#loading").html(str);
    $("#fancyboxHandle").attr("href", "#loading").trigger("click");
}
function CloseLoadingNew() {
    $("#fancybox-close").trigger("click");
}

// bof init
(function ($) {
    // bof dom ready
    $(function ($) {
        //huawei init
        huawei.init();
        // main init
        Huaweimain.init();
    });
    // eof dom ready
})(jQuery);
// eof init

//投资者关系
$(document).on("click", ".js-goto-section", function (e) {
    $('body,html').animate({
        'scrollTop': $($(this).attr("data-related-selector")).offset

().top
    });
    return false;
});
//投资者关系
/*
功能：保存cookies函数
参数：name，cookie名字；value，值
*/
function SetCookieValue(name, value, days) {
    var exp = new Date(); //获得当前时间
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000); //换成毫秒
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
/*
功能：获取cookies函数
参数：name，cookie名字
*/
function GetCookieValue(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}




/**
*@author xz
*@desc hwa通用事件个性化需求（为了通用而设计）
*pC：层级一共（7级，层级一/层级二/层级三...）
*pEName:事件操作（xx提交）
*pG=pT：最多三级(请以/分割、模块一/模块二)
*pF：事件说明（如:添加一个1006型号产品）
*/
function hwaTrackEventClick(pC, pEName, pG, pF) {
    /*以上是事例Demo
    ha("set", {
    "opr_wf_n": '合同修改保存', //操作名称 - 业务功能标识
    "page_hierarchy": "c:{财经系统}g:{模块一}t:{标签一}f:{事件2}"
    });
    ha("trackEvent", "click"); //此种JS直接设置方法，您要用trackEvent来发送数据
    */
    try {
        ha("set", {
            "opr_wf_n": pEName,
            "page_hierarchy": "c:{" + pC + "}g:{" + pG + "}t:{" + pG + "}f:{" + pF + "}"
        });
        ha("trackEvent", "click");
    } catch (ex) {
        var sss = ex;
    }
}
huawei.combobox_readonly = function () {
    var i = $(".js-combobox_readonly .js_combobox").next().find(".ui-autocomplete-input").attr("readonly", "readonly")
    if (/MSIE/i.test(navigator.userAgent)) i.placeholderEnhanced();
    setTimeout(function () { $(".solar-down-page-cell .ui-autocomplete").hide(); }, 150);
    //$(document).on("change", ".js-parent-select", function (e) {
    //    $($(this).attr("data-related-selector")).val("").next().find("input").val("");
    //});
    $(document).on("click", ".js-combobox_readonly .custom-combobox .ui-autocomplete-input", function (e) {
        $(this).next().trigger("click");
        return false;
    });
};
huawei.InitShare = function () {
    //added by chenyi at 20160826 集团网分享优化
    if ($("#top_pc_share_nullbox").length > 0) {
        if ($("body").height() - $("#footer").height() > $(window).height()) {
            $("#top_pc_share_nullbox").show();
        }
    }
};

// 自定义复合选择框 custom.combobox bof
(function ($) {
    if (typeof $.widget == "undefined")
        return;
    $.widget("custom.combobox", {
        _create: function () {
            this.wrapper = $("<span>")
            .addClass("custom-combobox")
            .insertAfter(this.element);

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(":selected")
              ,
            value = selected.val() ? selected.text() : "";

            this.input = $("<input>")
            .appendTo(this.wrapper)
            .val(value)
            .attr("title", "")
            .attr("placeholder", this.element.attr("placeholder"))
            .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
            .autocomplete({
                delay: 0,
                minLength: 0,
                source: $.proxy(this, "_source")
            })
            .tooltip({
                tooltipClass: "ui-state-highlight"
            });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger("select", event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: "_removeIfInvalid"
            });
        },

        _createShowAllButton: function () {
            var input = this.input
              ,
            wasOpen = false;

            $("<a>")
            .attr("tabIndex", -1)
            .attr("title", "Show All Items")
            //			.tooltip()
            .appendTo(this.wrapper)
            .button({
                icons: {
                    primary: "ui-icon-triangle-1-s"
                },
                text: false
            })
            .removeClass("ui-corner-all")
            .addClass("custom-combobox-toggle ui-corner-right")
            .mousedown(function () {
                wasOpen = input.autocomplete("widget").is(":visible");
            })
            .click(function () {
                input.focus();

                // Close if already visible
                if (wasOpen) {
                    return;
                }

                // Pass empty string as value to search for, displaying all results
                input.autocomplete("search", "");
            });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response(this.element.children("option").map(function () {
                var text = $(this).text();
                if (this.value && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val()
              ,
            valueLowerCase = value.toLowerCase()
              ,
            valid = false;
            this.element.children("option").each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            // Remove invalid value
            this.input
            .val("")
            .attr("title", value + " didn't match any item");
            //.tooltip("open");
            this.element.val("");
            this._delay(function () {
                this.input.tooltip("close").attr("title", "");
            }, 2500);
            this.input.data("ui-autocomplete").term = "";
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });
})(jQuery);
// eof

//刷新验证码时（清掉）
$("#VerifyCode").click(function () {
    $("input[name='VerificationCode']").val("");
})

function checkVerify() {
    var validateNumber = $("input[name='VerificationCode']").val();
    var verifyCodeUrl = "/Assets/CBG/VerificationCode.aspx?validate=" + validateNumber;

    $.ajax({
        type: "GET",
        url: verifyCodeUrl,
        async: false,
        success: function (data) {
            if (data.toLowerCase() != validateNumber.toLowerCase()) {
                $("input[name='VerificationCode']").val("");
                $("#VerifyCode").click();
            }
        },
        error: function () {

        }
    });

}

// 用户注册用的表单验证 bof
(function ($, huawei) {
    jQuery.validator.methods.customRegular = function (value, element, param) {
        var r = param.test(value)
        return r;
    };

    huawei.changePasswordForm =
    function () {
        $("#Registerform")
        .off("submit").on("submit", function (e) {
            if (!$(this).validate().form()) {
                return false;
            }
        })
        .validate({
            ignore: [],
            onfocusout: function (element, event) {
                if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            messages: {
                Email: {
                    required: '<i class="icon_error"></i>' + getForMsgFromH("EmailRequired"),
                    email: '<i class="icon_error"></i>' + getFormEmailInfo(),
                    customRegular: '<i class="icon_error"></i>' + getFormEmailInfo(),
                    remote: getForMsgEmailExist()
                },
                Password: {
                    required: '<i class="icon_error"></i>' + getForMsgFromH("PasswordRequired"),
                    maxlength: '<i class="icon_error"></i>' + getForMsgFromH("passwordMax"),
                    minlength: '<i class="icon_error"></i>' + getForMsgFromH("passwordMin")
                    /*, customRegular: '<i class="icon_error"></i>' + getFormMsgPasswordreg()*/
                },
                Name: {
                    required: '<i class="icon_error"></i>' + getForMsgFromH("FirstNameRequired")
                },
                Name1: {
                    required: '<i class="icon_error"></i>' + getForMsgFromH("LastNameRequired")
                },
                VerificationCode: {
                    required: '<i class="icon_error"></i>' + getFormRequiredInfo()
                }
            },
            rules: {
                Email: {
                    required: true,
                    //email: true,
                    customRegular: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
                    //customRegular: /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    remote: { url: $("#AccountModifyOrRegServiceUrl").val() + "?type=5", jsonpCallback: "jsonpCallback", jsonp: "callback", async: false, dataType: "jsonp" }
                },
                Password: {
                    required: true,
                    /* customRegular: /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+/ ,*/
                    maxlength: 16,
                    minlength: 8
                },
                Name: {
                    required: true
                },
                Name1: {
                    required: true
                },
                VerificationCode: {
                    required: true
                }
            },
            errorPlacement: function (label, element) {
                //console.log(arguments);
                element.parents(".infor-write").first().find(".field_message").empty().append(label);
            }
        });

        //$(document).off('click').on("click", ".js-personal-information-form-submit", function (e) {
        //    if (!$("#Registerform").validate().form())
        //        return false;

        //    SubmitRegister();

        //    //$(this).parents("form").first().submit();
        //    //return false;
        //});

    }
    ;
})(jQuery, huawei);


// eof
// huawave期刊订阅表单验证 bof
(function ($, huawei) {
    huawei.subscribeForm =
        function () {
            $(".js_subscribe_form")
                .on("submit", function (e) {
                    if (!$(this).validate().form())
                        return false;
                    //$("#btnSubmitFeedback").attr("disabled", "disabled");
                    $(this).ajaxSubmit(function (data) {
                        //ajax请求成功
                        if (data == "{}sucess") {
                            $("#form_table").attr("style", "display:none;");
                            $("#success_info").attr("style", "display:block;");
                            //SubscribeSendEmail();
                            //订阅成功操作
                        } else {
                            //订阅失败
                            $("#form_table").attr("style", "display:none;");
                            $("#success_info").attr("style", "display:block;");
                        }

                        return false;
                    });

                    return false;
                })
                .validate({
                    ignore: [],
                    onfocusout: function (element, event) {
                        if (true || !this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                            this.element(element);
                        }
                    },
                    messages: {
                        "value(Name)": {
                            required: '<i class="icon_error"></i>御名前を入力してください'
                        },
                        "value(Company)": {
                            required: '<i class="icon_error"></i>御社名を入力してください'
                        },
                        "value(Email)": {
                            required: '<i class="icon_error"></i>Eメールアドレスを入力してください',
                            email: '<i class="icon_error"></i>Eメールアドレスを入力してください'
                        }
                    },
                    rules: {
                        "value(Name)": {
                            required: true
                        },
                        "value(Company)": {
                            required: true
                        },
                        "value(Email)": {
                            required: true,
                            email: true
                        }
                    },
                    errorPlacement: function (label, element) {
                        //console.log(arguments);
                        element.parents(".row").first().find(".field_message").empty().append(label);
                    }
                });

            $(document).on("click", ".js_subscribe_form_submit", function (e) {
                $(this).parents("form").first().submit();
                return false;
            });

        };
})(jQuery, huawei);
// eof

(function ($, t, n) {
    "use strict";
    if ($(".hw1_banner").length == "0")
        return;
    var i = function () {
        this.$loader = $("#hw1_preloader"),
          this.$app = $(".hw1_banner")
    }
    ;
    $.extend(i.prototype, {
        init: function () {
            var e = this;
            $app.imagesLoaded({
                background: ".home-secondary__inner"
            }).always(function () {
                e.removeLoader(function () {
                    this.onImageLoaded()
                }
                  .bind(e))
            })
        },
        removeLoader: function (e) {
            var t = this;
            this.$loader.animate({
                opacity: 0
            }, 500),
              setTimeout(function () {
                  t.$loader.addClass("lower")
              }, 600)
        },
        onImageLoaded: function () {
            this.$app.trigger("finished:loader")
        }
    }),
      $(function () {
          (new i).init()
      })
})(jQuery, window);
function SubscribeSendEmail() {
    var ret = /\?/;
    var path = window.location.href
    if (ret.exec(path) == "?") {
        url = path + "&d=ws";
    } else {
        url = "?d=ws";
    }
    $.ajax({
        url: url,
        type: "POST",
        data: { "Email": $("input[name='value(Email)']").val() },
        success: function (html) {

        },
        error: function (responseText) {

        }
    });
};


$(document).ready(function () {
    var vFromSite = getQueryString("fromsite");
    if (vFromSite == null || vFromSite == undefined) {
        $("#fromsite").val(location.host);
    } else {
        $("#fromsite").val(vFromSite);
    }

    $(".js-personal-information-form-submit").click(function () {
        if (!vRegisterBool) {//xwx282787 20160824添加
            $(".js-reg-loading").delay(1000).fadeOut();
            return false;
        }

        if (!$("#Registerform").validate().form()) {
            $(".js-reg-loading").delay(1000).fadeOut();
            return false;
        }
        SubmitRegisterLogin();
    });

    //$('#Password').keyup(function () {
    //    CheckPwd();
    //})

    //function CheckPwd() {
    //    var password = $("#Password").val();
    //    var pattern = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
    //    if (!pattern.test(password)) {
    //        $("#PasswordMessage").html("<label  class='error'><i class='icon_error'></i>" + $("#checkPwd").val() + "</label>");
    //        return true;
    //    }
    //    else {
    //        $("#PasswordMessage").empty();
    //    }
    //    return false;
    //}
});

//注册帐号时验证邮箱是否已注册(没有啥好方案，先用这个吧)
//$('#UserEmail').keyup(function () {
//    var vUserEmail=$("#UserEmail").val();
//    var vTest = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//    if (vTest.test(vUserEmail))//邮件格式正确时，才调用
//    {
//        RegisterVerifyEmailBack();
//    }
//})

//邮箱失去焦点
//$('#UserEmail').focusout(function () {
//    var vUserEmail = $("#UserEmail").val();
//    var vTest = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//    if (vTest.test(vUserEmail))//邮件格式正确时，才调用
//    {
//        RegisterVerifyEmailBack();
//    }
//})

//注册帐号时验证邮箱是否已注册(没有啥好方案，先用这个吧)
function RegisterVerifyEmailBack() {
    try {
        $.ajax({
            url: $("#AccountModifyOrRegServiceUrl").val(),
            data: { "type": "5", "Email": $("#UserEmail").val() },
            type: "post",
            dataType: "jsonp",
            cache: false,
            async: false,
            jsonp: "jsonpRegisterVerifyEmailBack"
        });
    } catch (e) {
        var data = e;
    }
}

var vRegisterBool = true;//提交
////注册帐号时验证邮箱是否已注册
function jsonpRegisterVerifyEmailBack(data) {
    if (data.status == "false") {
        //要提示已注册
        var vResData = "<label id='UserEmail-error' class='error' for='UserEmail'><i class='icon_error'></i>" + getForMsgEmailExist() + "</label>";
        $("#email_field_message").html(vResData);
        vRegisterBool = false;
    } else {
        //隐藏提示
        $("#email_field_message").html('');
        vRegisterBool = true;
    }
}
//if (data.status == "true") {
//    要提示已注册
//} else {
//    隐藏提示
//}



//注册帐号时调用
function SubmitRegisterLogin() {
    try {
        $(".js-reg-loading").fadeIn();
        $.ajax({
            url: $("#AccountModifyOrRegServiceUrl").val(),
            data: $("#Registerform").serialize(),
            type: "post",
            dataType: "jsonp",
            cache: false,
            async: false,
            jsonp: "jsonpRegisterBack"
        });
    } catch (e) {
        var data = e;
    }
};

function jsonpRegisterBack(data) {
    $(".js-reg-loading").delay(1000).fadeOut();
    if (data.message.toLowerCase() == "successfully") {
        //$("#forward").click();
        var msgact = $("#MsgActivation").val();
        if (msgact == undefined || msgact == "") {
            msgact = data.message;
        }
        else {
            msgact = msgact.replace("@mail", $("#UserEmail").val());
            msgact = msgact.replace("@mail", $("#UserEmail").val());
        }
        $("#loading").html(msgact);
        $("#UserEmail").val("");
        $("input[name='Password']").val("");
        var hidAppUrl = $("#hidAppUrl").val();
        if (hidAppUrl != "" && hidAppUrl != undefined) {
            var ret = /\?/;
            if (ret.exec(hidAppUrl) == "?") {
                hidAppUrl = hidAppUrl + "&userid=" + data.uid + "&redirecturl=" + $("#redirecturl").val();
            }
            else {
                hidAppUrl = hidAppUrl + "?userid=" + data.uid + "&redirecturl=" + $("#redirecturl").val();
            }
            var httpret = /\http:/;
            if (httpret.exec(hidAppUrl) != "http:") {
                hidAppUrl = "http://" + hidAppUrl;
            }
            window.location = hidAppUrl;
        }
    } else {
        //失败
        if ($("#Ploading") != undefined) {
            $("#Ploading").text(data.message);
        }
        if (data.message != null && data.message != undefined && data.message != "") {
            $("#PasswordMessage").html("<label  class='error'><i class='icon_error'></i>" + data.message + "</label>");
            //$("#email_field_message").html("<label  class='error'><i class='icon_error'></i>" + data.message + "</label>");
        } else {
            //$("#email_field_message").html("");
            $("#PasswordMessage").html("");
            $("#Ploading").text(data.message);
        }
        $("input[name='VerificationCode']").val("");
        $("#VerifyCode").click();
    }
    $(".js-reg-loading").delay(1000).fadeOut();
}