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
var make = "";
var model = "";
var filstyle = "";
var fuel = "";

var petrol = "";
var electric = "";
var hydrogen = "";

var hybrid = "";
var luxury = "";
var suv = "";
var sedans = "";


var transmission = "";
var automatic = "";
var loan = "";
var yes = "";
var trade = "";
var yestrade = "";
var pricerange = "";
var pltoh = "";
var phtol = "";
//var yearrange = "";
var ascending = "";
var descending = "";
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
    make = "Make";
    model = "Model";
    filstyle = "Style";
    fuel = "Fuel";
    petrol = "Petrol";
    electric = "Electric";
    hydrogen = "Hydrogen";

    hybrid = "Hybrid";
    luxury = "Luxury";
    suv = "Suv";
    sedans = "Sedans";

    transmission = "Transmission";
    automatic = "Automatic";
    loan = "Loan";
    yes = "Yes";
    trade = "Exchange";
    yestrade = "Yes";
    pricerange = "Price Range";
    pltoh = "Price Low to High";
    phtol = "Price High to Low";
    //yearrange = "Year Range";
    ascending = "Ascending";
    descending = "Descending";
    msg_no = "No Data Found!";
}

function ready_spa() {
    results = "Resultados";
    filter = "Filtrar";
    loadmore = "Carga Más";
    make = "Hacer";
    model = "Modelo";
    filstyle = "Estilo";
    fuel = "Combustible";
    petrol = "Gasolina";
    electric = "Eléctrico";
    hydrogen = "Hidrógeno";

    hybrid = "Híbrido";
    luxury = "Lujo";
    suv = "Vehículo todoterreno";
    sedans = "Sedanes";

    transmission = "Transmisión";
    automatic = "Automático";
    loan = "Préstamo";
    yes = "Sí";
    trade = "Intercambiar";
    yestrade = "Sí";
    pricerange = "Rango de precios";
    pltoh = "Precio de menor a mayor";
    phtol = "Precio mayor a menor";
    //yearrange = "Rango año";
    ascending = "Ascendente";
    descending = "Descendente";
    msg_no = "¡Datos no encontrados!";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('results').innerHTML = results;
        //document.getElementById('filter').innerHTML = filter;
        //document.getElementById('loadmore').innerHTML = loadmore;
        document.getElementById('make').innerHTML = make;
        document.getElementById('model').innerHTML = model;
        document.getElementById('filstyle').innerHTML = filstyle;
        document.getElementById('fuel').innerHTML = fuel;
        document.getElementById('petrol').innerHTML = petrol;
        document.getElementById('electric').innerHTML = electric;
        document.getElementById('hydrogen').innerHTML = hydrogen;

        document.getElementById('hybrid').innerHTML = hybrid;
        document.getElementById('luxury').innerHTML = luxury;
        document.getElementById('suv').innerHTML = suv;
        document.getElementById('sedans').innerHTML = sedans;


        document.getElementById('transmission').innerHTML = transmission;
        document.getElementById('automatic').innerHTML = automatic;
        document.getElementById('loan').innerHTML = loan;
        document.getElementById('yes').innerHTML = yes;
        document.getElementById('trade').innerHTML = trade;
        document.getElementById('yestrade').innerHTML = yestrade;
        document.getElementById('pricerange').innerHTML = pricerange;
        document.getElementById('pltoh').innerHTML = pltoh;
        document.getElementById('phtol').innerHTML = phtol;
        //document.getElementById('yearrange').innerHTML = yearrange;
        //document.getElementById('ascending').innerHTML = ascending;
        //document.getElementById('descending').innerHTML = descending;

    })
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
        getAllCarDetail();
        carMakeList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

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
var pageno = 1;
var firstData = 0;
var secondData = 10;
var make_fil = new Array();
var model_fil = new Array();
var style_fil = new Array();
var fuel_fil = new Array();
var transmission_fil = new Array();
var loan_fil = "";
var trade_fil = "";
var price_fil = "";
var year_fil = "";

function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    getAllCarDetail();

}
function goToPrv() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        pageno = pageno - 1;
        firstData = firstData - 10;
    }
    getAllCarDetail();
}

function getAllCarDetail() {
    //{"method":"AllCarDetail", "first":"0", "second":"10"}
    //alert("First: " + firstData + "Second: " + secondData);


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
        //data: '{"method":"AllCarDetail", "first":"' + firstData + '", "second":"' + secondData + '"}',
        //data: '{"method":"AllCarDetail", "make_fil" : "' + make_fil + '","model_fil" : "' + model_fil + '","style_fil" : "' + style_fil + '","fuel_fil" : "' + fuel_fil + '","transmission_fil" : "' + transmission_fil + '","loan_fil" : "' + loan_fil + '","trade_fil" : "' + trade_fil + '","price_fil" : "' + price_fil + '","year_fil" : "' + year_fil + '","first":"' + firstData + '", "second":"' + secondData + '"}',
        data: '{"method":"AllCarDetail", "make_fil" : "' + make_fil + '","model_fil" : "' + model_fil + '","style_fil" : "' + style_fil + '","fuel_fil" : "' + fuel_fil + '","transmission_fil" : "' + transmission_fil + '","loan_fil" : "' + loan_fil + '","trade_fil" : "' + trade_fil + '","price_fil" : "' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            carListtData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
}
function carListtData(data) {
    if (data.carlist.length == 0) {
        //alert(msg_no);
        if (secondData > 10) {
            secondData = secondData - 10;
        }
        if (firstData >= 10) {
            pageno = pageno - 1;
            firstData = firstData - 10;
        }
    } else {
        var obj = data.cartotal;
        //alert(obj);
        document.getElementById('totalcaradv').innerHTML = obj;
        document.getElementById('pageno').innerHTML = pageno;

        $("#allCarData").children().remove();
        for (var i = 0; i < data.carlist.length; i++) {

            var car_id = data.carlist[i].car_id;
            var car_type = data.carlist[i].car_type;
            var car_make_name = data.carlist[i].car_make_name;
            var car_model_name = data.carlist[i].car_model_name;
            var car_style_name = data.carlist[i].car_style_name;
            var car_engine = data.carlist[i].car_engine;

            var car_acpt_old = data.carlist[i].car_acpt_old;

            var car_year = data.carlist[i].car_year;
            var car_price_type = data.carlist[i].car_price_type;
            var car_price =numberWithCommas(data.carlist[i].car_price);
            //if (car_price_type == "Dollares") {
            //    var car_price = "$ " + data.carlist[i].car_price;
            //} else {
            //    var car_price = "₡ " + data.carlist[i].car_price;
            //}

            //New Code
            var fuel = data.carlist[i].car_fuel;
            if (fuel == "Petrol") {
                var fuelli = '<img src="images/petrol.png" class="icon-img" title="Petrol Fuel">';
            }
            if (fuel == "Gas LPG") {
                var fuelli = '<img src="images/lpg.png" class="icon-img" title="Gas LPG Fuel">';
            }
            if (fuel == "Diesel") {
                var fuelli = '<img src="images/diesel.png" class="icon-img" title="Diesel Fuel">';
            }
            if (fuel == "Electric") {
                var fuelli = '<img src="images/electric.png" class="icon-img" title="Electric Fuel"> ';
            }
            if (fuel == "Hydrogen") {
                var fuelli = '<img src="images/h2.png" class="icon-img" title="Hydrogen Fuel">';
            }
            if (fuel == "") {
                var fuelli = "";
            }
            var transmission = data.carlist[i].car_transmission;
            if (transmission == "Manual") {
                var transmissionli = '  <img src="images/manual.png" class="icon-img" title="Manual Transmission">  ';
            }
            if (transmission == "Automatic") {
                var transmissionli = '  <img src="images/automatic.png" class="icon-img" title="Automatic Transmission">  ';
            }
            if (transmission == "Tiptronic") {
                var transmissionli = '  <img src="images/tiptronic.png" class="icon-img" title="Tiptronic Transmission">  ';
            }
            var abs = data.carlist[i].car_abs;
            if (abs == "Yes") {
                var absli = '  <img src="images/abs.png" class="icon-img" title="ABS Breaks">  ';
            } else {
                var absli = "";
            }
            var rtv = data.carlist[i].car_rtv;
            if (rtv == "Yes") {
                var rtvli = '  <img src="images/rtv.png" class="icon-img" title="RTV">  ';
            } else {
                var rtvli = "";
            }
            var xenon_led = data.carlist[i].car_xenon_led;
            if (xenon_led == "Yes") {
                var xenon_ledli = '  <img src="images/led.png" class="icon-img" title="Xe-Led">  ';
            } else {
                var xenon_ledli = "";
            }
            var rating = data.carlist[i].car_rating;
            var exchange = data.carlist[i].car_exchange;
            if (exchange == "Yes") {
                var exchangeli = '  <img src="images/exchange.png" class="icon-img" title="Exchange">  ';
            } else {
                var exchangeli = "";
            }
            var loan = data.carlist[i].car_loan;
            if (loan == "Yes") {
                var loanli = '  <img src="images/loan.png" class="icon-img" title="Loan">  ';
            } else {
                var loanli = "";
            }
            //New Code
            var car_color = data.carlist[i].car_color;
            var country_name = data.carlist[i].country_name;
            var state_name = data.carlist[i].state_name;
            var city_name = data.carlist[i].city_name;
            var car_doors = data.carlist[i].car_doors;
            var car_telphone = data.carlist[i].car_telphone;
            var car_listing = data.carlist[i].car_listing;
            var car_condition = data.carlist[i].car_condition;
            var car_lising_create = data.carlist[i].car_lising_create;
            var car_pow_lock = data.carlist[i].car_pow_lock;
            var car_ele_seat = data.carlist[i].car_ele_seat;
            var car_tint_win = data.carlist[i].car_tint_win;
            var car_air_bag = data.carlist[i].car_air_bag;
            var car_pow_win = data.carlist[i].car_pow_win;
            var car_ele_mir = data.carlist[i].car_ele_mir;
            var car_alarm = data.carlist[i].car_alarm;

            var car_ac = data.carlist[i].car_ac;
            var car_win_difo = data.carlist[i].car_win_difo;
            var car_sunroof = data.carlist[i].car_sunroof;
            var car_rims = data.carlist[i].car_rims;
            var car_turbo = data.carlist[i].car_turbo;
            var car_lea_seat = data.carlist[i].car_lea_seat;
            var car_halo = data.carlist[i].car_halo;
            var car_cas = data.carlist[i].car_cas;
            var car_dvd = data.carlist[i].car_dvd;
            var car_cru_con = data.carlist[i].car_cru_con;
            var car_usb = data.carlist[i].car_usb;

            var car_cont_elect = data.carlist[i].car_cont_elect;
            var car_cont_desce = data.carlist[i].car_cont_desce;
            var car_triptonic = data.carlist[i].car_triptonic;
            var car_rear_cam = data.carlist[i].car_rear_cam;
            var car_rear_sen = data.carlist[i].car_rear_sen;
            var car_front_sen = data.carlist[i].car_front_sen;
            var car_radio_string = data.carlist[i].car_radio_string;
            var car_vol_multi = data.carlist[i].car_vol_multi;
            var car_ac_climate = data.carlist[i].car_ac_climate;
            var car_mem_seat = data.carlist[i].car_mem_seat;
            var car_auto_fold_mir = data.carlist[i].car_auto_fold_mir;
            var car_xenon = data.carlist[i].car_xenon;

            var car_rain_sen = data.carlist[i].car_rain_sen;
            var car_smt_keyof = data.carlist[i].car_smt_keyof;
            var car_tire_pressure = data.carlist[i].car_tire_pressure;
            var car_cru_cont = data.carlist[i].car_cru_cont;
            var car_ad_ster = data.carlist[i].car_ad_ster;
            var car_blue = data.carlist[i].car_blue;
            var car_comment = data.carlist[i].car_comment;
            var u_first_name = data.carlist[i].u_first_name;
            var u_last_name = data.carlist[i].u_last_name;
            var u_phone = data.carlist[i].u_phone;
            var u_email = data.carlist[i].u_email;
            var car_trade = data.carlist[i].car_trade;
            var file_img = data.carlist[i].file_img;
            var image1 = file_img[0];
            //console.log("Size" + file_img.size);
            //alert("Size"+file_img.length);


            if (car_price_type == "Dollares") {
                $("#allCarData").append('<li><a onclick="gotopage(' + car_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div><div class="txt_for_listing">' +
                '<h4>' + car_model_name + ' (' + car_year + ')' + '</h4>' +
                '<h3>' +'$' +car_price +' '+ ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3>' +
                '<h6>' + city_name + ', ' + state_name + ', ' + country_name + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +
                '<div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + '/10</div> ' +
                '</div>' +
                '<div class="clearfix"> </div>' +
                    //'<div align="right">' + fuelli + exchangeli + loanli + transmissionli + absli + '<img src="images/fourwheel.png" class="icon-img" title="Four-Wheel-Drive">' + rtvli + xenon_ledli + '</div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>' +

                '<div align="right" class="icon-mark">' + fuelli + exchangeli + loanli + transmissionli + absli + '<img src="images/fourwheel.png" class="icon-img" title="Four-Wheel-Drive">' + rtvli + xenon_ledli + '</div>' +
                '</li>');
            }else {

                $("#allCarData").append('<li><a onclick="gotopage(' + car_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div><div class="txt_for_listing">' +
                '<h4>' + car_model_name + ' (' + car_year + ')' + '</h4>' +
                '<h3 style="color: blue;">' +'₡'+ car_price + ' ' + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3>' +
                '<h6>' + city_name + ', ' + state_name + ', ' + country_name + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +
                '<div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + '/10</div> ' +
                '</div>' +
                '<div class="clearfix"> </div>' +
                    //'<div align="right">' + fuelli + exchangeli + loanli + transmissionli + absli + '<img src="images/fourwheel.png" class="icon-img" title="Four-Wheel-Drive">' + rtvli + xenon_ledli + '</div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>' +

                '<div align="right" class="icon-mark">' + fuelli + exchangeli + loanli + transmissionli + absli + '<img src="images/fourwheel.png" class="icon-img" title="Four-Wheel-Drive">' + rtvli + xenon_ledli + '</div>' +
                '</li>');
            }
        }
    }

    $("#preloader").css('display','none');
    //cordova.plugin.pDialog.dismiss();
}
//$(document).ready(function () {
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"Tot_Cars"}',
//        success: function (data) {
//            var obj = data.data;
//            document.getElementById('totalcaradv').innerHTML = obj + " Results";
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//});
$(document).ready(function () {
    getAllCarDetail();
});

function gotopage(car_id) {
    var link = "carlisting-details.html?cid=" + car_id;
    window.location.href = link;
}

//Other Filter
function carMakeList(){
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"CarMake"}',
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
    if (data.makefilter.length == 0) {
        //alert(msg_no);
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.makefilter.length; i++) {
            var car_make_id = data.makefilter[i].car_make_id;
            var car_make_name = data.makefilter[i].car_make_name;
            //alert("CarMake:" + car_make_name);
            $("#makefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_make_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="make_fil" onclick="gotofilter(' + car_make_id + ')"></span></div><div class="clearfix"></div>');
        }
        return true;
    }
}
//Make
function gotofilter(str) {
    if ($.inArray(str, make_fil) != -1) {
        var index = make_fil.indexOf(str);
        if (index >= 0) {
            make_fil.splice(index, 1);
        }

    } else {
        make_fil.push(str);

    }

    //make_fil = str;
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"filtermodel","id":"' + make_fil + '","fuel_fil":"' + fuel_fil + '","style_fil":"' + style_fil + '","transmission_fil":"' + transmission_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherModelFilterData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
    //getModel(str);
    firstData = 0;
    secondData = 10;
    getAllCarDetail();

}
function OtherModelFilterData(data) {
    if (data.filtermodel.length == 0) {
        //alert(msg_no);
    } else {

        $("#modelfilter").children().remove();
        for (var i = 0; i < data.filtermodel.length; i++) {
            var car_model_id = data.filtermodel[i].car_model_id;
            var car_model_name = data.filtermodel[i].car_model_name;
            $("#modelfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_model_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="model_fil" onchange="getModel(' + car_model_id + ')"></span></div><div class="clearfix"></div>');
        }
        return true;
    }
}
//Model

function getModel(str) {
    if ($.inArray(str, model_fil) != -1) {
        var index = model_fil.indexOf(str);
        if (index >= 0) {
            model_fil.splice(index, 1);
        }
    } else {
        model_fil.push(str);
    }

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"filterstyle","id":"' + model_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherStyleFilterData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
    //getStyle(str);
    firstData = 0;
    secondData = 10;
    getAllCarDetail();

}
function OtherStyleFilterData(data) {
    if (data.filterstyle.length == 0) {
        //alert(msg_no);
    } else {
        $("#stylefilter").children().remove();
        for (var i = 0; i < data.filterstyle.length; i++) {
            var car_style_id = data.filterstyle[i].car_style_id;
            var car_style_name = data.filterstyle[i].car_style_name;
            $("#stylefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_style_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="style_fil" onclick="getStyle(' + car_style_id + ')"></span></div><div class="clearfix"></div>');
        }
        return true;
    }
}
//Style

function getStyle(str) {
    if ($.inArray(str, style_fil) != -1) {
        var index = style_fil.indexOf(str);
        if (index >= 0) {
            style_fil.splice(index, 1);
        }
    } else {
        style_fil.push(str);
    }
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    gotofilter(make_fil);

}
//Fuel

function gotoFuelfilter(str) {
    if ($.inArray(str, fuel_fil) != -1) {
        var index = fuel_fil.indexOf(str);
        if (index >= 0) {
            fuel_fil.splice(index, 1);
        }
    } else {
        fuel_fil.push(str);
    }
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    gotofilter(make_fil);
    //alert(loan_fil);
}
//Transmission

function gotoTransmissionfilter(str) {
    if ($.inArray(str, transmission_fil) != -1) {
        var index = transmission_fil.indexOf(str);
        if (index >= 0) {
            transmission_fil.splice(index, 1);
        }
    } else {
        transmission_fil.push(str);
    }
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    gotofilter(make_fil);
    //alert(loan_fil);
}
//Loan

function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    //alert(loan_fil);
}
//Trade

function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    //alert(loan_fil);
}
//Price

function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    //alert(loan_fil);
}
//Year

function gotoYearfilter(str) {
    year_fil = str;
    firstData = 0;
    secondData = 10;
    getAllCarDetail();
    //alert(year_fil);
}