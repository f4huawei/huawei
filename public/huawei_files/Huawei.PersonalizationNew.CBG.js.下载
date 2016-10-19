$(function () {
    var baners = $(".hw1_banner");
    if (baners.length > 0) {
        for (var i = 0; i < baners.length; i++) {
            var queryUrl = $(baners).eq(i).find("#hideTargetUrl").val();
            if (queryUrl != null && queryUrl != "") {
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
                    $(objHTML).append($(data).children());
                    //huawei.eventBinding();
                    $(window).trigger("resize");                 
                    hideloading1(objHTML);
                }
                else {
                    hideloading2(objHTML);
                }
            } else {
                hideloading2(objHTML);
                if ($.trim(data) == "") {
                    $(objHTML).remove();
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
    var t2 = new Date();
    while ((t2 - t1) < 10000) {
        t2 = new Date();
    }
}

var childlist = new Object();
function showloading(objHTML) {
    //$(objHTML).find("#hw1_content").attr("style", "display:block;");
    //$(objHTML).find("#hw1_front").attr("style", "display:block;");
    childlist.content = $(objHTML).children();
    //childlist.bigimg = $(objHTML).find("#hw1_front").attr("data-big-img");
    //childlist.smimg = $(objHTML).find("#hw1_front").attr("data-small-img");
    $(window).trigger("resize");
}

function hideloading1(objHTML) {
    $(objHtml).find("section").removeClass("hw1_loading");
    $(objHtml).find("section").find("div").removeClass("spinner");
    $(objHTML).find("#hw1_content").attr("style", "display:block;");
    $(objHTML).find("#hw1_front").attr("style", "display:block;");
}
function hideloading2(objHTML) {
    $(objHTML).children().remove();
    $(objHTML).append(childlist.content);
    $(window).trigger("resize");
}
