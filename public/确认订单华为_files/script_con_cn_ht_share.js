var consumerHeader = (function(){
    var $win = $(window);
    var $body = $('body');
    var $nav = $('#cbg-main-nav-wrapper');

    var  headerDropMenu = function(){
        $('.js-header-menu').hover(function(){
            $(this).toggleClass('nav-menu-hover');
        });
    };

    // Wechat button (display QR code)
    var footWX = function () {
        $('.cbg-icon-wechat').mouseenter(function () {
            $(this).prev('img').show();
        })
        .mouseleave(function () {
            $(this).prev('img').hide();
        });
    };

    var scrollPack = function(fn, obj, ms, must){
        var _this = obj || this;
        var start = new Date();
        var timeer;

        ms = ms || 200;
        must = must || 150;

        return function(){
            var now = new Date();
            var args = [].slice.call(arguments);
            var callBack = function(){
                fn.apply(_this, args);
                start = now;
            };
            if(now - start > must){
                callBack();
            }else{
                clearTimeout(timeer);
                timeer = setTimeout(callBack, ms);
            }
        };
    };

    var navFixed = function(st, sl){
        var cls = 'cbg-nav-fixed';

        if(st >= 67){
            if(!$body.hasClass(cls)){
                $body.addClass(cls);
                navSearch.showIco();
            }
        }else{
            $body.removeClass(cls);
            navSearch.showForm();
        }
        $nav.css('left', -sl);
    };

    var navSearch = {
        init: function(){
            this.$searchWrap = $('#cbg-main-nav-search');
            this.$searchForm = this.$searchWrap.find('.cbg-search-form');
            this.$searchIcon = this.$searchWrap.find('.cbg-icon-search');
            this.$input = this.$searchWrap.find('#all_search');
            this.bindEvent();
            if(!supPlaceHolder()){
                this.fixPlaceHolder();
            }
        },

        bindEvent: function(){
            var _this = this;
            this.$searchIcon.on('click', function(){
                _this.showForm(function(){
                    _this.$input.focus();
                });
            });
        },

        showIco: function(){
            var _this = this;

            this.$searchForm.stop(true, true);
            this.$searchIcon.stop(true, true);
            this.$searchForm.animate({opacity: 0}, 20, function(){
                _this.$searchIcon.css('display', 'block');
                _this.$searchForm.css('display', 'none');
                _this.$searchIcon.animate({opacity: 1}, 300);
            });
        },

        showForm: function(callBack){
            var _this = this;

            this.$searchForm.stop(true, true);
            this.$searchIcon.stop(true, true);
            this.$searchIcon.animate({opacity: 0}, 20, function(){
                _this.$searchIcon.css('display', 'none');
                _this.$searchForm.css('display', 'block');
                _this.$searchForm.animate({opacity: 1}, 300);
                callBack && callBack();
            });
        },

        fixPlaceHolder: function(){
            var $elem = this.$input;
            var classNm = 'placeholder-class'
            var hidePlace = function(){
                var text = $.trim($elem.attr('placeholder'));
                var val = $.trim($elem.val());
                if(val === text){
                    $elem.val('').removeClass(classNm);
                }
            };
            var showPlace = function(){
                var text = $.trim($elem.attr('placeholder'));
                var val = $.trim($elem.val());
                if(!val){
                    $elem.val(text).addClass(classNm)
                }
            };
            showPlace();

            $elem.on('blur.placeholder', function(){
                showPlace();
            });
            $elem.on('focus.placeholder', function(){
                hidePlace();
            });
        }
    };

    var navFixedPacked = scrollPack(navFixed, null, 100, 100);

    var supPlaceHolder = function(){
        return 'placeholder' in document.createElement('input');;
    };

    return {
        init: function(){
            navSearch.init();
            headerDropMenu();
            footWX();
            $(window).on('scroll.consumerMainNav', function(){
                var st = $win.scrollTop();
                var sl = $win.scrollLeft();
                navFixedPacked(st, sl);
            });
        }
    };
})();

$(function(){
    consumerHeader.init();
});