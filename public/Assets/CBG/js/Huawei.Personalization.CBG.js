
    var bannerCount = $("#index-banner .swiper-container .carousel-inner .swiper-slide").length;
    if (bannerCount > 0) {
        for (var i = 0; i < bannerCount; i++) {
            if (i == 0) {
                $("#index-banner .swiper-container ol.carousel-indicators").append('<li data-target="#index-banner" data-slide-to="0" class="active"></li>');
                $("#index-banner .swiper-container .carousel-inner .swiper-slide").eq(0).addClass("swiper-slide item active");
            } else {
                $("#index-banner .swiper-container ol.carousel-indicators").append('<li data-target="#index-banner" data-slide-to="' + i + '";></li>');
            }
        }
    }
    
    $(function () {
        
        var baners = $(".swiper-slide.item");
        if (baners.length > 0) {
            for (var i = 0; i < baners.length; i++) {
                var queryUrl = $(baners).eq(i).find("#hideTargetUrl").val();
                if (queryUrl != null && queryUrl != "") {
                    $($(baners).eq(i)).attr("chid", i);
                    showloading($(baners).eq(i));                    
                }
            }
            //huawei.eventBinding();
            $(window).trigger("resize");
            for (var i = 0; i < baners.length; i++) {
                var DataSource = $(baners).eq(i).find("#hideDataSourceID").val();
                var queryUrl = $(baners).eq(i).find("#hideTargetUrl").val();
                var huaweiName = $(baners).eq(i).find("#hideHuaweiName").val();
                var huaweiValue = $(baners).eq(i).find("#hideHuaweiValue").val();
                var targetIdValue = $(baners).eq(i).find("#hideTargetId").val();
                if (queryUrl != null && queryUrl != "") {                    
                    ajaxload($(baners).eq(i), DataSource, huaweiName, huaweiValue, queryUrl, targetIdValue, i);
                }
            }
        }
    });
   
   
    function ajaxload(objHTML, objHfDatasource, huaweiName, huaweiValue, queryUrl, targetId, num) {
        //var SC_Model = $(objHTML).find("#hideViewModel").val();
        //if (SC_Model == "True") {
        //$(objHTML).attr("chid", num);
        //showloading(objHTML);
            $.ajax({
                async: true,
                //防止缓存，URL加上变量参数
                url: queryUrl,
                type: 'get',
                headers: {},
                beforeSend: function (request) {
                    
                    request.setRequestHeader("X-HUAWEI-ItemId", targetId);
                    var login_userTag = $.cookie("per_loginuser");
                    if (login_userTag) {
                        request.setRequestHeader("X-HUAWEI-LoginUser", login_userTag);
                    }

                    if (document.referrer) {
                        request.setRequestHeader("X-HUAWEI-RS", document.referrer);
                    }

                    var name = JSON.parse(huaweiName);
                    var value = JSON.parse(huaweiValue);
                    var huaweilength = JSON.parse(huaweiName).length;
                    for (var i = 0; i < huaweilength; i++) {
                        var nameStr = decodeURIComponent(decodeURIComponent(name[i]));
                        var valueStr = value[i];
                        if (nameStr == "X-HUAWEI-RS") {
                            valueStr = encodeURIComponent(decodeURIComponent(decodeURIComponent(valueStr)));
                        } else {
                            valueStr = decodeURIComponent(decodeURIComponent(valueStr));
                        }

                        request.setRequestHeader(decodeURIComponent(decodeURIComponent(name[i])), valueStr);
                    }
                    if (Huawei.Personalization.AjaxFlag < 1) {
                        Huawei.Personalization.AjaxFlag = 1;
                    }
                },
                success: function (data, status, xhr) {
                    
                    if (xhr.getResponseHeader("DataSourceID") != undefined && xhr.getResponseHeader("DataSourceID") != "") {
                        if (xhr.getResponseHeader("DataSourceID").toLowerCase() != objHfDatasource.toLowerCase()) {
                            //$(objHTML).html(data);                           
                            $(objHTML).children().remove();
                            $(objHTML).attr("data-big-img", $(data).attr("data-big-img"));
                            $(objHTML).attr("data-small-img", $(data).attr("data-small-img"));
                            $(objHTML).append($(data).children());
                            //huawei.eventBinding();
                            $(window).trigger("resize");
                            $(objHTML).find(".carousel-caption").css({ 'display': 'block' });
                            hideloading1(objHTML);
                        }
                        else {
                            hideloading2(objHTML);
                        }
                    } else {
                        hideloading2(objHTML);
                        if ($.trim(data) == "") {
                            $(objHTML).remove();
                            $(".carousel-indicators span.swiper-pagination-switch").eq(num).remove();
                            //huawei.indexSlider();
                            //huawei.slide_psirt();
                            return;
                        }                                                     

                    }
                    //hideloading(objHTML);
                    if (Huawei.Personalization.AjaxFlag === 1) {
                        Huawei.Personalization.AjaxFlag = 2;
                        if (typeof (scSendPersonalizationFlag) != "undefined") {
                            scSendPersonalizationFlag("success", "");
                        }
                    }
                },
                error: function (data, status, xhr) {
                    hideloading2(objHTML);
                    if (Huawei.Personalization.AjaxFlag === 1) {
                        Huawei.Personalization.AjaxFlag = 2;
                        if (typeof (scSendPersonalizationFlag) != "undefined") {
                            scSendPersonalizationFlag("error", "");
                        }
                    }
                }
            });
        //}
    }

    function sleep() {
        var t1 = new Date();
        var t2=new Date();
        while ((t2 - t1) < 10000) {
            t2 = new Date();
        }
    }

    var childlist = new Array();
    function showloading(objHTML) {
        var count = childlist.length;
        childlist[count] = new Object();
        childlist[count].chid = $(objHTML).attr("chid");
        childlist[count].content = $(objHTML).children();
        childlist[count].bigimg = $(objHTML).attr("data-big-img");
        childlist[count].smimg = $(objHTML).attr("data-small-img");
        $(objHTML).children().not("[type='hidden']").remove();
        $(objHTML).attr("data-big-img", "Assets/CBG/img/huawei_loading.gif");
        $(objHTML).attr("data-small-img", "Assets/CBG/img/huawei_loading.gif");
        //$(objHTML).css("background-image", "url('/Assets/CBG/img/loading-bg.png')");        
        $(objHTML).css("background-image", "url('/Assets/CBG/img/huawei_loading.gif')");
        //$(objHTML).addClass("loading-bg");
        $(objHTML).css("background-color", "#eee");
        //$(objHTML).append("<div class='loading-icon'></div>");
        //huawei.eventBinding();
        $(window).trigger("resize");
        
        
    }
 
    function hideloading1(objHTML) {       
        //$(objHTML).removeClass("loading-bg");
        $(objHTML).css("background-color", "");
    }
    function hideloading2(objHTML) {
        //$(objHTML).removeClass("loading-bg");
        $(objHTML).css("background-color", "");
        for (var i = 0; i < childlist.length; i++) {
            if (childlist[i].chid == $(objHTML).attr("chid")) {
                $(objHTML).attr("data-big-img", childlist[i].bigimg);
                $(objHTML).attr("data-small-img",childlist[i].smimg);
                $(objHTML).children().remove();
                $(objHTML).append(childlist[i].content);
                //huawei.eventBinding();
                $(window).trigger("resize");
                $(objHTML).find(".carousel-caption").css({ 'display': 'block' });
                return;
            }
        }
    }
