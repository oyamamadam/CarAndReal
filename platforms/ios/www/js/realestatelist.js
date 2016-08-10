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
        if (gdc_gender == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            if (gdc_gender == "male") {

            } else {
                //alert(gdc_gender);
                document.getElementById("profilegender").src = "images/female.png";
            }
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
        getAllRealDetail();
        CatRealList();

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
    getAllRealDetail();

}

function goToPrv() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        pageno = pageno - 1;
        firstData = firstData - 10;
    }
    getAllRealDetail();
}
function getAllRealDetail() {

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });


    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        //data: '{"method":"AllRealDetail", "first":"' + firstData + '", "second":"' + secondData + '"}',
        data: '{"method":"AllRealDetail", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","trade_fil":"' + trade_fil + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',

        success: function (data) {
            realListData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
}
//$(document).ready(function () {
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"Tot_Real"}',
//        success: function (data) {
//            var obj = data.data;
//            document.getElementById('totalrealadv').innerHTML = obj+" Results";
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//});
function realListData(data) {

    if (data.reallist.length == 0) {
        //alert(msg_no);
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

            //var real_loan = data.reallist[i].real_loan;
            //var real_rec = data.reallist[i].real_rec;
            var real_size_pro = data.reallist[i].real_size_pro;
            var real_size_con = data.reallist[i].real_size_con;
            //var real_electricity = data.reallist[i].real_electricity;
            //var real_water = data.reallist[i].real_water;
            var real_morgage = data.reallist[i].real_morgage;
            var real_three = data.reallist[i].real_three;
            var real_acc_flex = data.reallist[i].real_acc_flex;
            var real_comment = data.reallist[i].real_comment;
            var name = data.reallist[i].name;
            var u_phone = data.reallist[i].u_phone;
            var u_email = data.reallist[i].u_email;
            var real_trade = data.reallist[i].real_trade;

            //var real_rating = data.reallist[i].real_rating;
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
            //alert(image1);
            $("#allRealData").append('<li><a onclick="gotopage(' + real_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + real_title_lis + '</h4><h3>' + real_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + real_city + ', ' + real_state + ', ' + real_country + '</h6><div class="icon-area"><div class="rating-area"><div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + ' /10</div> </div><div class="clearfix"> </div><div align="right">' + exchangeli + loanli + electricityli + waterli + '</div></div></a></li>');
        }

        /* setTimeout(function () {
         $('body').addClass('loaded');
         $('h1').css('color', '#222222');
         }, 3000);
         return true;*/
    }
    cordova.plugin.pDialog.dismiss();
}

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
    getAllRealDetail();
});


function gotopage(real_id) {
    var link = "realestatelistingdetails.html?rid=" + real_id;
    window.location.href = link;
}

//Other Filter
function CatRealList() {
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
            //alert("Error");
            return false;
        }
    });
}

function OtherCatFilterData(data) {
    if (data.realfilter.length == 0) {
        //alert(msg_no);
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.realfilter.length; i++) {
            var other_cat_id = data.realfilter[i].real_pro_id;
            var other_cat_name = data.realfilter[i].real_pro_name;
            $("#catfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" onclick="gotofilter(' + other_cat_id + ')"></span></div><div class="clearfix"></div>');
        }
        return true;
    }
}

function gotofilter(str) {
    //alert(str);
    if ($.inArray(str, cat_typ_arr) != -1) {
        var index = cat_typ_arr.indexOf(str);
        if (index >= 0) {
            cat_typ_arr.splice(index, 1);
        }
    } else {
        //alert("PUSH");
        cat_typ_arr.push(str);
    }
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //console.log("Cat Array : " + cat_typ_arr);
}
//Loan
var loan_fil = "";
function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}
//Trade
var trade_fil = "";
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}
//Price
var price_fil = "";
function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}