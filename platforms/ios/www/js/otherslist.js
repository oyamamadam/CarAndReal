/**
 * Created by CTinfotech on 11/27/2015.
 */
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}

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

function goToHome() {
    window.location.href = "index.html";
}
function goToMyPost() {
    var user = window.localStorage.getItem("gdc_email_id");
    //alert(user);
    if (user == null) {
        window.location.href = "login.html";
    } else {
        window.location.href = "userpost.html";
    }
}
function goToContactus() {
    window.location.href = "contactus.html";
}
function goToHelp() {
    window.location.href = "help.html";
}
function goToLogOut() {
    //alert("Logout");
    window.localStorage.clear();
    navigator.app.exitApp();
    //window.location.href ="login.html";
    //return true;
}
function goToCarList() {
    window.location.href = "car-listing.html";
}
function goToRealList() {
    window.location.href = "realestate-listing.html";
}
function goToOtherList() {
    window.location.href = "others-listing.html";
}
function goToMore() {
    window.location.href = "more.html";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
var gdc_gender = window.localStorage.getItem("gdc_gender");
//alert(gdc_gender);
$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {

            //user_name.innerHTML = gdc_username;
            document.getElementById('profilename').innerHTML = gdc_username;
        }
        if (profile_image == null && gdc_gender == "male") {
            document.getElementById('profilegender').innerHTML = "images/g_male.png";
        } else if(profile_image == null && gdc_gender == "female") {
            //alert(profile_image);
            document.getElementById("profilegender").src = "images/g_female.png";
        }
        else {
            document.getElementById("profilegender").src = profile_image;
        }
    }
);

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getAllOtherDetail();
        catOtherList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

var pageno = 1;
var firstData = 0;
var secondData = 10;
var cat_typ_arr = new Array();

function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    getAllOtherDetail();

}

function goToPrv() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        pageno = pageno - 1;
        firstData = firstData - 10;
    }
    getAllOtherDetail();
}


function getAllOtherDetail() {
    //$('#loadingmessage').show();

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
        //data: '{"method":"AllOtherDetail", "first":"' + firstData + '", "second":"' + secondData + '"}',
        data: '{"method":"AllOtherDetail", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","trade_fil":"' + trade_fil + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',

        success: function (data) {
            otherListData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
}

function getSorteddate(array){

    return array.sort(function (a, b){
        //console.log(a.other_created);
        var a_s= a.other_created.split(' ');
        var a_date= a_s[0] + "T"+a_s[1];
        var aaa= new Date(a_date);
        var b_s= b.other_created.split(' ');
        var b_date= b_s[0] + "T"+b_s[1];
        var bbb= new Date(b_date);
        console.log("adfasdfsdf="+ aaa.getDate());
        return bbb - aaa;
    });
}

function otherListData(data) {
    if (data.otherlist.length == 0) {
        //alert(msg_no);
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

        var insteadlist = getSorteddate(data.otherlist);

        for (var i = 0; i < insteadlist.length; i++) {
            var other_id = insteadlist[i].other_id;
            var other_type = insteadlist[i].other_type;
            var other_category = insteadlist[i].other_category;
            var other_title = insteadlist[i].other_title;
            var other_country = insteadlist[i].other_country;
            var other_state = insteadlist[i].other_state;
            var other_city = insteadlist[i].other_city;

            var other_pri_type = insteadlist[i].other_pri_type;

            var other_price =numberWithCommas(insteadlist[i].other_price) ;

            var rating = insteadlist[i].other_rating;
            var exchange = insteadlist[i].other_exchange;
            if (exchange == "Yes") {
                var exchangeli = '<img src="images/exchange.png" class="icon-img" title="Exchange">';
            } else {
                var exchangeli = "";
            }
            var loan = insteadlist[i].other_loan;
            if (loan == "Yes") {
                var loanli = '<img src="images/loan.png" class="icon-img" title="Loan">';
            } else {
                var loanli = "";
            }


            var other_img = insteadlist[i].other_img;
            var image1 = other_img[0];
            //alert(image1);

            if (other_pri_type == "Dollares") {
                $("#allOtherData").append('<li>' +
                '<a onclick="gotopage(' + other_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div>' +
                '<div class="txt_for_listing">' +
                '<h4>'+ other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4>' +
                '<h3>' +'$' + other_price + ' '+' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span>' +
                '</h3>' +
                '<h6>' + other_city + ', ' + other_state + ', ' + other_country + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +

                '<div class="rating-txt">' + rating + '/10</div> ' +
                '<img src="images/star.png" class="star-img" style="float: right;">' +
                '</div><div class="clearfix"> </div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '<div align="right" class="realestate">' + exchangeli + loanli + '</div>' +
                '</li>');
            }else
            {
                $("#allOtherData").append('<li>' +
                '<a onclick="gotopage(' + other_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div>' +
                '<div class="txt_for_listing">' +
                '<h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4>' +
                '<h3 style="color: blue;">' +'₡'+ other_price +' '+ '<span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span>' +
                '</h3>' +
                '<h6>' + other_city + ', ' + other_state + ', ' + other_country + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +

                '<div class="rating-txt">'+  rating + '/10</div> ' +
                '<img src="images/star.png" class="star-img" style="float: right;">' +
                '</div><div class="clearfix"> </div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '<div align="right" class="realestate">' + exchangeli + loanli + '</div>' +
                '</li>');
            }
        }
       // console.log("date" +JSON.stringify(data.otherlist));
        //for (var i = 0; i < data.otherlist.length; i++) {
        //    var other_id = data.otherlist[i].other_id;
        //    var other_type = data.otherlist[i].other_type;
        //    var other_category = data.otherlist[i].other_category;
        //    var other_title = data.otherlist[i].other_title;
        //    var other_cont_name = data.otherlist[i].other_cont_name;
        //    var other_email = data.otherlist[i].other_email;
        //    var other_phone = data.otherlist[i].other_phone;
        //    var other_country = data.otherlist[i].other_country;
        //    var other_state = data.otherlist[i].other_state;
        //    var other_city = data.otherlist[i].other_city;
        //    var other_color = data.otherlist[i].other_color;
        //
        //    var date = data.otherlist[i].other_created;
        //
        //    var other_pri_type = data.otherlist[i].other_pri_type;
        //
        //    var other_price =numberWithCommas(data.otherlist[i].other_price) ;
        //    //if (other_pri_type == "Dollares") {
        //    //    var other_price = "$ " + data.otherlist[i].other_price +',';
        //    //} else {
        //    //    var other_price = "₡ " + data.otherlist[i].other_price +',';
        //    //}
        //    var other_condition = data.otherlist[i].other_condition;
        //    var other_rating = data.otherlist[i].other_rating;
        //    var other_exchange = data.otherlist[i].other_exchange;
        //    var other_acpt_old = data.otherlist[i].other_acpt_old;
        //    var other_flex_pri = data.otherlist[i].other_flex_pri;
        //    var other_visitor = data.otherlist[i].other_visitor;
        //    var other_comment = data.otherlist[i].other_comment;
        //    var other_created = data.otherlist[i].other_created;
        //    var other_status = data.otherlist[i].other_status;
        //
        //    var rating = data.otherlist[i].other_rating;
        //    var exchange = data.otherlist[i].other_exchange;
        //    if (exchange == "Yes") {
        //        var exchangeli = '<img src="images/exchange.png" class="icon-img" title="Exchange">';
        //    } else {
        //        var exchangeli = "";
        //    }
        //    var loan = data.otherlist[i].other_loan;
        //    if (loan == "Yes") {
        //        var loanli = '<img src="images/loan.png" class="icon-img" title="Loan">';
        //    } else {
        //        var loanli = "";
        //    }
        //
        //
        //    var other_img = data.otherlist[i].other_img;
        //    var other_location = data.otherlist[i].other_location;
        //    var image1 = other_img[0];
        //    //alert(image1);
        //
        //    if (other_pri_type == "Dollares") {
        //        $("#allOtherData").append('<li>' +
        //        '<a onclick="gotopage(' + other_id + ')">' +
        //        '<div class="img_for_listing">' +
        //        '<img src=' + image1 + '>' +
        //        '</div>' +
        //        '<div class="txt_for_listing">' +
        //        '<h4>'+ other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4>' +
        //        '<h3>' +'$' + other_price + ' '+' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span>' +
        //        '</h3>' +
        //        '<h6>' + other_city + ', ' + other_state + ', ' + other_country + '</h6>' +
        //        '<div class="icon-area">' +
        //        '<div class="rating-area">' +
        //
        //        '<div class="rating-txt">' +date + rating + '/10</div> ' +
        //        '<img src="images/star.png" class="star-img" style="float: right;">' +
        //        '</div><div class="clearfix"> </div>' +
        //        '</div>' +
        //        '</a>' +
        //        '</div>' +
        //        '</div>' +
        //        '<div align="right" class="realestate">' + exchangeli + loanli + '</div>' +
        //        '</li>');
        //    }else
        //    {
        //        $("#allOtherData").append('<li>' +
        //        '<a onclick="gotopage(' + other_id + ')">' +
        //        '<div class="img_for_listing">' +
        //        '<img src=' + image1 + '>' +
        //        '</div>' +
        //        '<div class="txt_for_listing">' +
        //        '<h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4>' +
        //        '<h3 style="color: blue;">' +'₡'+ other_price +' '+ '<span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span>' +
        //        '</h3>' +
        //        '<h6>' + other_city + ', ' + other_state + ', ' + other_country + '</h6>' +
        //        '<div class="icon-area">' +
        //        '<div class="rating-area">' +
        //
        //        '<div class="rating-txt">' +date +  rating + '/10</div> ' +
        //        '<img src="images/star.png" class="star-img" style="float: right;">' +
        //        '</div><div class="clearfix"> </div>' +
        //        '</div>' +
        //        '</a>' +
        //        '</div>' +
        //        '</div>' +
        //        '<div align="right" class="realestate">' + exchangeli + loanli + '</div>' +
        //        '</li>');
        //    }
        //}


        /*setTimeout(function () {
         $('body').addClass('loaded');
         $('h1').css('color', '#222222');
         }, 3000);*/

        //return true;
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

$(document).ready(function () {
    getAllOtherDetail();
});
//$(document).ready(function () {
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"Tot_Other"}',
//        success: function (data) {
//            var obj = data.data;
//            document.getElementById('totalotheradv').innerHTML = obj + " Results";
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//});

function gotopage(oid) {
    var link = "othersdetails.html?oid=" + oid;
    window.location.href = link;
}

function catOtherList() {
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
            //alert("Error");
            return false;
        }
    });
}
//Other Filter

function OtherCatFilterData(data) {
    if (data.othercat.length == 0) {
        //alert(msg_no);
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.othercat.length; i++) {

            var other_cat_id = data.othercat[i].other_cat_id;
            var other_cat_name = data.othercat[i].other_cat_name;
            $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" onclick="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
//            $("#allOtherData").append('<li><a onclick="gotopage(' + other_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4><h3>' + other_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + other_location + ', ' + other_city + ', ' + other_state + ', ' + other_country + '</h6></div></a></li>');
        }
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
    firstData = 0;
    secondData = 10;
    getAllOtherDetail();
    //console.log("Cat Array : " + cat_typ_arr);
}
//Loan
var loan_fil = "";
function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    getAllOtherDetail();
    //alert(loan_fil);
}
//Trade
var trade_fil = "";
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    getAllOtherDetail();
    //alert(loan_fil);
}
//Price
var price_fil = "";
function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    getAllOtherDetail();
    //alert(loan_fil);
}
////Filter
//function gotootherfilter(){
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"AllOtherDetail", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","trade_fil":"' + trade_fil + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
//        success: function (data) {
//            otherListData(data);
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//}