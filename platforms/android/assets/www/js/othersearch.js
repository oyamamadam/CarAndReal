/**
 * Created by CTinfotech on 01/25/2015.
 */
var results = "";
var filter = "";
var loadmore = "";
var category = "";
var loan = "";
var yes = "";
var trade = "";
var yestrade = "";
var pricerange = "";
var pltoh = "";
var phtol = "";
var msg_no = "";

gdc_lang = window.localStorage.getItem("gdc_lang");
//alert(gdc_lang);
if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    results = "Results";
    filter = "Filter";
    loadmore = "Load More";
    category = "Category";
    loan = "Loan";
    yes = "Yes";
    trade = "Exchange";
    yestrade = "Yes";
    pricerange = "Price Range";
    pltoh = "Price Low to High";
    phtol = "Price High to Low";
    msg_no = "No Data Found!";
}

function ready_spa() {
    results = "Resultados";
    filter = "Filtrar";
    loadmore = "Carga Más";
    category = "Categoría";
    loan = "Préstamo";
    yes = "Sí";
    trade = "Intercambiar";
    yestrade = "Sí";
    pricerange = "Rango de precios";
    pltoh = "Precio de menor a mayor";
    phtol = "Precio mayor a menor";
    msg_no = "¡Datos no encontrados!";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('results').innerHTML = results;
        /*        document.getElementById('filter').innerHTML = filter;*/
        // document.getElementById('loadmore').innerHTML = loadmore;
        document.getElementById('category').innerHTML = category;
        document.getElementById('loan').innerHTML = loan;
        document.getElementById('yes').innerHTML = yes;
        document.getElementById('trade').innerHTML = trade;
        document.getElementById('yestrade').innerHTML = yestrade;
        document.getElementById('pricerange').innerHTML = pricerange;
        document.getElementById('pltoh').innerHTML = pltoh;
        document.getElementById('phtol').innerHTML = phtol;

    })
}

var searchtype = "";
var other_type = "";
var other_category = "";
var other_country = "";
var other_state = "";
var other_city = "";
var other_loan = "";
var other_trade = "";
var other_pri_type = "";
var other_pri_to = "";
var other_pri_from = "";
var other_exchange = "";
var price_fil = "ASC";
var otherkey = "";
var cat_typ_arr = new Array();
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getOtherSearchResult();
        getOtherCatList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

function getOtherSearchResult() {
    searchtype = GetURLParameter('searchtype');
    if (searchtype == "otheradvancesearch") {

        other_type = window.localStorage.getItem("other_type");

        other_category = window.localStorage.getItem("other_category");
        //other_category = GetURLParameter('other_category');
        if (other_category != '') {
            cat_typ_arr.push(other_category);
        }

        other_country = window.localStorage.getItem("other_country");
        other_state = window.localStorage.getItem("other_state");
        other_city = window.localStorage.getItem("other_city");
        loan_fil = window.localStorage.getItem("other_loan");
        if (loan_fil == "Yes") {
            document.getElementById("loan_fil_yes").checked = true;
            document.getElementById("loan_fil_no").checked = false;
        } else {
            document.getElementById("loan_fil_yes").checked = false;
            document.getElementById("loan_fil_no").checked = true;
        }

        //trade_fil = window.localStorage.getItem("other_trade");
        //if (trade_fil == "Yes") {
        //    document.getElementById("trade_fil_yes").checked = true;
        //    document.getElementById("trade_fil_no").checked = false;
        //} else {
        //    document.getElementById("trade_fil_yes").checked = false;
        //    document.getElementById("trade_fil_no").checked = true;
        //}
        other_exchange = window.localStorage.getItem("other_exchange");
        if (other_exchange == "Yes") {
            document.getElementById("other_exchange_yes").checked = true;
            document.getElementById("other_exchange_no").checked = false;
        } else {
            document.getElementById("other_exchange_yes").checked = false;
            document.getElementById("other_exchange_no").checked = true;
        }
        if (price_fil == "ASC") {
            document.getElementById("price_fil_asc").checked = true;
            document.getElementById("price_fil_desc").checked = false;
        } else {
            document.getElementById("price_fil_asc").checked = false;
            document.getElementById("price_fil_desc").checked = true;
        }
        other_pri_type = window.localStorage.getItem("other_pri_type");
        other_pri_to = window.localStorage.getItem("other_pri_to");
        if (other_pri_to == undefined) {
            other_pri_to = "";
        }
        other_pri_from = window.localStorage.getItem("other_pri_from");
        if (other_pri_from == undefined) {
            other_pri_from = "";
        }
        getAdvanceOtherDetail();
    } else {
        otherkey = GetURLParameter('otherkey');
        if (price_fil == "ASC") {
            document.getElementById("price_fil_asc").checked = true;
            document.getElementById("price_fil_desc").checked = false;
        } else {
            document.getElementById("price_fil_asc").checked = false;
            document.getElementById("price_fil_desc").checked = true;
        }
        getOtherDetail(otherkey);
    }
}

var pageno = 1;
var firstData = 0;
var secondData = 10;

function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }

}

function goToPrv() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        pageno = pageno - 1;
        firstData = firstData - 10;
    }
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}

function getAdvanceOtherDetail() {
    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"OtherDetailsSearch", "other_type":"' + other_type + '","other_country":"' + other_country + '","other_state":"' + other_state + '","other_city":"' + other_city + '","other_pri_to":"' + other_pri_to + '", "other_pri_from":"' + other_pri_from + '","other_pri_type":"' + other_pri_type + '", "other_exchange":"' + other_exchange + '", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            otherListData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert(Error,null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function getOtherDetail() {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"OtherSearch", "key":"' + otherkey + '", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","other_exchange":"' + other_exchange + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            otherListData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function gotopage(oid) {
    var link = "othersdetails.html?oid=" + oid;
    window.location.href = link;
}

function otherListData(data) {
    if (data.otherlist.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        navigator.notification.alert(msg_no,null,'Alert','Ok');
        $("#preloader").css('display','none');
        if (secondData > 10) {
            secondData = secondData - 10;
        }
        if (firstData >= 10) {
            pageno = pageno - 1;
            firstData = firstData - 10;
        }
    } else {
        var obj = data.othertotal;
        //alert(obj);
        document.getElementById('totalotheradv').innerHTML = obj;
        document.getElementById('pageno').innerHTML = pageno;
        $("#allOtherData").children().remove();
        for (var i = 0; i < data.otherlist.length; i++) {
            var other_id = data.otherlist[i].other_id;
            var other_type = data.otherlist[i].other_type;
            var other_category = data.otherlist[i].other_category;
            var other_title = data.otherlist[i].other_title;
            var other_cont_name = data.otherlist[i].other_cont_name;
            var other_email = data.otherlist[i].other_email;
            var other_phone = data.otherlist[i].other_phone;
            var other_country = data.otherlist[i].other_country;
            var other_state = data.otherlist[i].other_state;
            var other_city = data.otherlist[i].other_city;
            var other_color = data.otherlist[i].other_color;
            var other_pri_type = data.otherlist[i].other_pri_type;
            var other_pri_type = data.otherlist[i].other_pri_type;
            if (other_pri_type == "Dollares") {
                var other_price = "&#36; " + data.otherlist[i].other_price;
            } else {
                var other_price = "&#128; " + data.otherlist[i].other_price;
            }
            var other_condition = data.otherlist[i].other_condition;
            var other_rating = data.otherlist[i].other_rating;
            var other_exchange = data.otherlist[i].other_exchange;
            var other_acpt_old = data.otherlist[i].other_acpt_old;
            var other_flex_pri = data.otherlist[i].other_flex_pri;
            var other_visitor = data.otherlist[i].other_visitor;
            var other_comment = data.otherlist[i].other_comment;
            var other_created = data.otherlist[i].other_created;
            var other_status = data.otherlist[i].other_status;

            var rating = data.otherlist[i].other_rating;
            var exchange = data.otherlist[i].other_exchange;
            if (exchange == "Yes") {
                var exchangeli = '<img src="images/exchange.png" class="icon-img" title="Exchange">';
            } else {
                var exchangeli = "";
            }
            var loan = data.otherlist[i].other_loan;
            if (loan == "Yes") {
                var loanli = '<img src="images/loan.png" class="icon-img" title="Loan">';
            } else {
                var loanli = "";
            }


            var other_img = data.otherlist[i].other_img;
            var other_location = data.otherlist[i].other_location;
            var image1 = other_img[0];
            $("#allOtherData").append('<li><a onclick="gotopage(' + other_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4><h3>' + other_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + other_location + ', ' + other_city + ', ' + other_state + ', ' + other_country + '</h6><div class="icon-area"><div class="rating-area"><img src="images/star.png" class="star-img"><div class="rating-txt">' + rating + '/10</div> </div><div class="clearfix"> </div><div align="right">' + exchangeli + loanli + '</div></div></a></li>');
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}

//Other Filter
function getOtherCatList() {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"OtherCat"}',
        success: function (data) {
//                      alert(data);
            OtherCatFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function OtherCatFilterData(data) {
    if (data.othercat.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        navigator.notification.alert(msg_no,null,'Alert','Ok');
        $("#preloader").css('display','none');
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.othercat.length; i++) {

            var other_cat_id = data.othercat[i].other_cat_id;
            var other_cat_name = data.othercat[i].other_cat_name;
            if (other_category == other_cat_id) {
                $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input checked="checked"  type="checkbox" onchange="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
            } else {
                $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" onchange="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
            }
//            $("#allOtherData").append('<li><a onclick="gotopage(' + other_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4><h3>' + other_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + other_location + ', ' + other_city + ', ' + other_state + ', ' + other_country + '</h6></div></a></li>');
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}
var check = true;
function gotofilter(str) {
    if ($.inArray(str, cat_typ_arr) != -1) {
        var index = cat_typ_arr.indexOf(str);
        if (index >= 0) {
            cat_typ_arr.splice(index, 1);
        }
    } else {
        cat_typ_arr.push(str);
    }
    if (other_category == str) {
        if (check) {
            for (var i = 0; i < cat_typ_arr.length; i++) {
                if (cat_typ_arr[i] == str) {
                    var index = cat_typ_arr.indexOf(str);
                    cat_typ_arr.splice(index, 1);
                }
            }
            cat_typ_arr.splice(0, 1);
            check = false;
        }
    }
    firstData = 0;
    secondData = 10;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}
//Loan
var loan_fil = "";
function gotoLoanfilter(str) {
    firstData = 0;
    secondData = 10;
    loan_fil = str;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}
//Trade
var trade_fil = "";
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}

function gotoExefilter(str) {
    other_exchange = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}
//Price
function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "othersearch") {
        getOtherDetail();
    } else {
        getAdvanceOtherDetail();
    }
}