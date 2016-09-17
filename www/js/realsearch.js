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
        /*        document.getElementById('loadmore').innerHTML = loadmore;*/
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
var realkey = "";
var real_pro_type = "";
var real_country = "";
var real_state = "";
var real_city = "";
var real_room = "";
var real_baths = "";

var loan_fil = "";
var real_rec = "";
var price_fil = "ASC";
var real_pri_type = "";
var real_price_to = "";
var real_price_from = "";
var cat_typ_arr = new Array();
var check = true;
var pageno = 1;
var firstData = 0;
var secondData = 10;

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
        getRealSearchResult();
        getRealProList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

function getRealSearchResult() {
    searchtype = GetURLParameter('searchtype');
    if (searchtype == "realsearch") {
        realkey = GetURLParameter('realkey');
        //if (price_fil == "ASC") {
        //    document.getElementById("price_fil_asc").checked = true;
        //    document.getElementById("price_fil_desc").checked = false;
        //} else {
        //    document.getElementById("price_fil_asc").checked = false;
        //    document.getElementById("price_fil_desc").checked = true;
        //}
        getRealDetail();
    } else {
        real_pro_type = window.localStorage.getItem("real_pro_type");
        if (real_pro_type != '') {
            cat_typ_arr.push(real_pro_type);
        }
        real_country = window.localStorage.getItem("real_country");
        real_state = window.localStorage.getItem("real_state");
        real_city = window.localStorage.getItem("real_city");
        real_room = window.localStorage.getItem("real_room");// GetURLParameter('real_room');
        real_baths = window.localStorage.getItem("real_baths");// GetURLParameter('real_baths');

        loan_fil = window.localStorage.getItem("real_loan");// GetURLParameter('real_loan');
        if (loan_fil == "Yes") {
            document.getElementById("loan_fil_yes").checked = true;
            document.getElementById("loan_fil_no").checked = false;
        } else {
            document.getElementById("loan_fil_yes").checked = false;
            document.getElementById("loan_fil_no").checked = true;
        }
        real_rec = window.localStorage.getItem("real_rec");//GetURLParameter('real_rec');
        if (real_rec == "Yes") {
            document.getElementById("real_rec_yes").checked = true;
            document.getElementById("real_rec_no").checked = false;
        } else {
            document.getElementById("real_rec_yes").checked = false;
            document.getElementById("real_rec_no").checked = true;
        }
        if (price_fil == "ASC") {
            document.getElementById("price_fil_asc").checked = true;
            document.getElementById("price_fil_desc").checked = false;
        } else {
            document.getElementById("price_fil_asc").checked = false;
            document.getElementById("price_fil_desc").checked = true;
        }
        real_pri_type = window.localStorage.getItem("real_pri_type");//GetURLParameter('real_pri_type');
        real_price_to = window.localStorage.getItem("real_price_to");//GetURLParameter('real_price_to');
        real_price_from = window.localStorage.getItem("real_price_from");//GetURLParameter('real_price_from');
        getAdvanceRealDetail();
    }
}

function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
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
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}

function getAdvanceRealDetail() {

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
        data: '{"method":"RealDetailsSearch", "real_pri_type":"' + real_pri_type + '","real_country":"' + real_country + '","real_state":"' + real_state + '","real_city":"' + real_city + '", "real_room":"' + real_room + '", "real_baths":"' + real_baths + '", "real_price_to":   "' + real_price_to + '", "real_rec":"' + real_rec + '", "real_price_from":"' + real_price_from + '", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '", "price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            realListData(data);
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
function getRealDetail() {

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
        //data: '{"method":"RealSearch", "key":"' + realkey + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        data: '{"method":"RealSearch", "key":"' + realkey + '", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","real_rec":"' + real_rec + '", "price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            realListData(data);
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
function gotopage(real_id) {
    var link = "realestatelistingdetails.html?rid=" + real_id;
    window.location.href = link;
}
function realListData(data) {
    if (data.reallist.length == 0) {
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
        var obj = data.realtotal;
        document.getElementById('totalrealadv').innerHTML = obj;
        document.getElementById('pageno').innerHTML = pageno;
        $("#allRealData").children().remove();
        for (var i = 0; i < data.reallist.length; i++) {
            var real_id = data.reallist[i].real_id;
            var real_property = data.reallist[i].real_property;
            var real_title_lis = data.reallist[i].real_title_lis;
            var real_pro_type = data.reallist[i].real_pro_type;
            var real_location = data.reallist[i].real_location;
            var real_near_by_loc = data.reallist[i].real_near_by_loc;
            var real_country = data.reallist[i].real_country;
            var real_state = data.reallist[i].real_state;
            var real_city = data.reallist[i].real_city;
            var real_room = data.reallist[i].real_room;
            var real_baths = data.reallist[i].real_baths;
            var real_condition = data.reallist[i].real_condition;
            var real_rating = data.reallist[i].real_rating;
            var real_loan = data.reallist[i].real_loan;
            var real_rec = data.reallist[i].real_rec;
            var real_size_pro = data.reallist[i].real_size_pro;
            var real_size_con = data.reallist[i].real_size_con;
            var real_electricity = data.reallist[i].real_electricity;
            var real_water = data.reallist[i].real_water;
            var real_morgage = data.reallist[i].real_morgage;
            var real_three = data.reallist[i].real_three;
            var real_acc_flex = data.reallist[i].real_acc_flex;
            var real_comment = data.reallist[i].real_comment;
            var name = data.reallist[i].name;
            var u_phone = data.reallist[i].u_phone;
            var u_email = data.reallist[i].u_email;
            var real_trade = data.reallist[i].real_trade;

            var rating = data.reallist[i].real_rating;
            var exchange = data.reallist[i].real_rec;
            if (exchange == "Yes") {
                var exchangeli = '<img src="images/exchange.png" class="icon-img" title="Exchange">';
            } else {
                var exchangeli = "";
            }
            var loan = data.reallist[i].real_loan;
            if (loan == "Yes") {
                var loanli = '<img src="images/loan.png" class="icon-img" title="Loan">';
            } else {
                var loanli = "";
            }

            var electricity = data.reallist[i].real_electricity;
            if (electricity == "Yes") {
                var electricityli = '<img src="images/electric.png" class="icon-img" title="Electricity-Service">';
            } else {
                var electricityli = "";
            }

            var water = data.reallist[i].real_water;
            if (water == "Yes") {
                var waterli = '<img src="images/water.png" class="icon-img" title="Water-Service">';
            } else {
                var waterli = "";
            }

            var real_price_type = data.reallist[i].real_price_type;
            if (real_price_type == "Dollares") {
                var real_price = "$ " + data.reallist[i].real_price;
            } else {
                var real_price = "₡ " + data.reallist[i].real_price;
            }
            var real_publish = data.reallist[i].real_publish;
            var real_status = data.reallist[i].real_status;
            var real_img = data.reallist[i].real_img;
            var image1 = real_img[0];
            $("#allRealData").append('<li><a onclick="gotopage(' + real_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + real_room + ' BHK ' + real_pro_type + ' (' + real_property + ')' + '</h4><h3>' + real_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + real_location + ', ' + real_city + ', ' + real_state + ', ' + real_country + '</h6><div class="icon-area"><div class="rating-area"><img src="images/star.png" class="star-img"><div class="rating-txt">' + rating + ' /10</div> </div><div class="clearfix"> </div><div align="right">' + exchangeli + loanli + electricityli + waterli + '</div></div></a></li>');
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}

//Other Filter
function getRealProList() {

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
        data: '{"method":"RealPro"}',
        success: function (data) {
            //alert(data);
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
    if (data.realfilter.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        navigator.notification.alert(msg_no,null,'Alert','Ok');
        $("#preloader").css('display','none');
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.realfilter.length; i++) {
            var other_cat_id = data.realfilter[i].real_pro_id;
            var other_cat_name = data.realfilter[i].real_pro_name;
            if (real_pro_type == other_cat_id) {
                $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" checked="checked" onclick="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
            } else {
                $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" onclick="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
            }
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}

function gotofilter(str) {
    if ($.inArray(str, cat_typ_arr) != -1) {
        var index = cat_typ_arr.indexOf(str);
        if (index >= 0) {
            cat_typ_arr.splice(index, 1);
        }
    } else {
        cat_typ_arr.push(str);
    }
    if (real_pro_type == str) {
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
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}
//Loan

function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}

function gotoExcfilter(str) {
    real_rec = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}

//Trade
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}
//Price
function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "realsearch") {
        getRealDetail();
    } else {
        getAdvanceRealDetail();
    }
}