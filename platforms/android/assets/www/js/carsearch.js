/**
 * Created by CTinfotech on 01/25/2015.
 */
var results = "";
var filter = "";
var loadmore = "";
var make = "";
var model = "";
var filstyle = "";
var fuel = "";
var petrol = "";
var electric = "";

var hybrid = "";
var luxury = "";
var suv = "";
var sedans = "";

var hydrogen = "";
var transmission = "";
var automatic = "";
var loan = "";
var yes = "";
var trade = "";
var yestrade = "";
var pricerange = "";
var pltoh = "";
var phtol = "";
var yearrange = "";
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
    electric = "Electric";

    hybrid = "Hybrid";
    luxury = "Luxury";
    suv = "Suv";
    sedans = "Sedans";

    petrol = "Petrol";
    hydrogen = "Hydrogen";
    transmission = "Transmission";
    automatic = "Automatic";
    loan = "Loan";
    yes = "Yes";
    trade = "Exchange";
    yestrade = "Yes";
    pricerange = "Price Range";
    pltoh = "Price Low to High";
    phtol = "Price High to Low";
    yearrange = "Year Range";
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
    electric = "Eléctrico";

    hybrid = "Híbrido";
    luxury = "Lujo";
    suv = "Vehículo todoterreno";
    sedans = "Sedanes";

    petrol = "Gasolina";
    hydrogen = "Hidrógeno";
    transmission = "Transmisión";
    automatic = "Automático";
    loan = "Préstamo";
    yes = "Sí";
    trade = "Intercambiar";
    yestrade = "Sí";
    pricerange = "Rango de precios";
    pltoh = "Precio de menor a mayor";
    phtol = "Precio mayor a menor";
    yearrange = "Rango año";
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
        document.getElementById('electric').innerHTML = electric;


        document.getElementById('hybrid').innerHTML = hybrid;
        document.getElementById('luxury').innerHTML = luxury;
        document.getElementById('suv').innerHTML = suv;
        document.getElementById('sedans').innerHTML = sedans;

        document.getElementById('petrol').innerHTML = petrol;
        document.getElementById('hydrogen').innerHTML = hydrogen;
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


var searchtype = "";
var carkey = "";
var car_type = "";
var car_make = "";
var make_fil = new Array();
var car_model = "";
var model_fil = new Array();
var car_style = "";
var style_fil = new Array();
var car_fuel = "";
var fuel_fil = new Array();
var car_transmission = "";
var transmission_fil = new Array();
var car_country = "";
var car_state = "";
var car_city = "";
var car_engine = "";
var car_year_to = "";
var car_year_from = "";
var car_price_type = "";
var car_price_to = "";
var car_price_from = "";
var car_int_color = "";
var car_ext_color = "";
var loan_fil = "";
var car_acpt_old = "";
var car_exchange = "";
var trade_fil = "";
var price_fil = "ASC";
var year_fil = "";

var checkMake = true;
var checkModel = true;
var checkStyle = true;
var checkFuel = true;
var checkTransmission = true;

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
        getCarSearchResult();
        getCarMakeList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

function getCarSearchResult() {
    searchtype = GetURLParameter('searchtype');
    if (searchtype == "carsearch") {
        carkey = GetURLParameter('carkey');
        getCarDetail();
    } else {

        car_type = window.localStorage.getItem("car_type");
        car_make = window.localStorage.getItem("car_make");
        if (car_make != "") {
            make_fil.push(car_make);
        }
        car_model = window.localStorage.getItem("car_model");
        if (car_model != "") {
            model_fil.push(car_model);
        }

        car_style = window.localStorage.getItem("car_style");

        if (car_style != "") {
            style_fil.push(car_style);
        }
        if (car_style == "Hatchback") {
            document.getElementById("car_style_hatchback").checked = true;
        }
        if (car_style == "Sedans") {
            document.getElementById("car_style_sedans").checked = true;
        }
        if (car_style == "Suv") {
            document.getElementById("car_style_suv").checked = true;
        }
        if (car_style == "MUV") {
            document.getElementById("car_style_muv").checked = true;
        }
        if (car_style == "Luxury") {
            document.getElementById("car_style_luxury").checked = true;
        }

        if (car_style == "Convertible") {
            document.getElementById("car_style_convertible").checked = true;
        }
        if (car_style == "Hybrid") {
            document.getElementById("car_style_hybrid").checked = true;
        }
        if (car_style == "Coupe") {
            document.getElementById("car_style_coupe").checked = true;
        }
        if (car_style == "Minivans") {
            document.getElementById("car_style_minivans").checked = true;
        }

        car_fuel = window.localStorage.getItem("car_fuel");//GetURLParameter('car_fuel');
        if (car_fuel != "") {
            fuel_fil.push(car_fuel);
        }
        if (fuel_fil == "Petrol") {
            document.getElementById("fuel_fil_petrol").checked = true;
        }
        if (fuel_fil == "Gas LPG") {
            document.getElementById("fuel_fil_gaslpg").checked = true;
        }
        if (fuel_fil == "Diesel") {
            document.getElementById("fuel_fil_diesel").checked = true;
        }
        if (fuel_fil == "Electric") {
            document.getElementById("fuel_fil_electric").checked = true;
        }
        if (fuel_fil == "Hydrogen") {
            document.getElementById("fuel_fil_hydrogen").checked = true;
        }
        car_transmission = window.localStorage.getItem("car_transmission");//GetURLParameter('car_transmission');
        if (car_transmission != "") {
            transmission_fil.push(car_transmission);
        }
        if (transmission_fil == "Manual") {
            document.getElementById("transmission_fil_manual").checked = true;
        }
        if (transmission_fil == "Automatic") {
            document.getElementById("transmission_fil_automatic").checked = true;
        }
        if (transmission_fil == "Tiptronic") {
            document.getElementById("transmission_fil_tiptronic").checked = true;
        }

        car_country = window.localStorage.getItem("car_country");
        car_state = window.localStorage.getItem("car_state");
        car_city = window.localStorage.getItem("car_city");
        car_engine = window.localStorage.getItem("car_engine");// GetURLParameter('car_engine');
        loan_fil = window.localStorage.getItem("car_loan");//GetURLParameter('car_loan');
        if (loan_fil == "Yes") {
            document.getElementById("loan_fil_yes").checked = true;
            document.getElementById("loan_fil_no").checked = false;
        } else {
            document.getElementById("loan_fil_yes").checked = false;
            document.getElementById("loan_fil_no").checked = true;
        }

        car_exchange = window.localStorage.getItem("car_exchange");// GetURLParameter('car_exchange');
        if (car_exchange == "Yes") {
            document.getElementById("car_exchange_yes").checked = true;
            document.getElementById("car_exchange_no").checked = false;
        } else {
            document.getElementById("car_exchange_yes").checked = false;
            document.getElementById("car_exchange_no").checked = true;
        }
        if (price_fil == "ASC") {
            document.getElementById("price_fil_asc").checked = true;
            document.getElementById("price_fil_desc").checked = false;
        } else {
            document.getElementById("price_fil_asc").checked = false;
            document.getElementById("price_fil_desc").checked = true;
        }
        //if (year_fil == "ASC") {
        //    document.getElementById("year_fil_asc").checked = true;
        //    document.getElementById("year_fil_desc").checked = false;
        //} else {
        //    document.getElementById("year_fil_asc").checked = false;
        //    document.getElementById("year_fil_desc").checked = true;
        //}
        car_price_type = window.localStorage.getItem("car_price_type");// GetURLParameter('car_price_type');
        //car_price_to = window.localStorage.getItem("car_price_to");// GetURLParameter('car_price_to');
        //car_price_from = window.localStorage.getItem("car_price_from");// GetURLParameter('car_price_from');

        car_price_to = "";
        car_price_from = "";

        //car_year_to = window.localStorage.getItem("car_year_to");// GetURLParameter('car_year_to');
        //car_year_from = window.localStorage.getItem("car_year_from");// GetURLParameter('car_year_from');

        car_year_to = "";
        car_year_from = "";

        //car_int_color = window.localStorage.getItem("car_int_color");// GetURLParameter('car_int_color');
        //car_ext_color = window.localStorage.getItem("car_ext_color");// GetURLParameter('car_ext_color');

        car_int_color = "";
        car_ext_color = "";

        getAdvanceCarDetail();
    }
}

var pageno = 1;
var firstData = 0;
var secondData = 10;

function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
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
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
}

function getAdvanceCarDetail() {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');
    //var post_data = '"method":"CarDetailsSearch", "car_type":"' + car_type + '","car_country":"' + car_country + '","car_state":"' + car_state + '","car_city":"' + car_city + '","car_engine":"' + car_engine + '", "car_exchange":"' + car_exchange + '", "car_year_to":"' + car_year_to + '","car_year_from":"' + car_year_from + '","car_price_type":"' + car_price_type + '","car_price_to":"' + car_price_to + '","car_price_from":"' + car_price_from + '", "car_int_color":"' + car_int_color + '", "car_ext_color":"' + car_ext_color + '", "make_fil" : "' + make_fil + '","model_fil" : "' + model_fil + '","style_fil" : "' + style_fil + '","fuel_fil" : "' + fuel_fil + '","transmission_fil" : "' + transmission_fil + '","loan_fil" : "' + loan_fil + '", "price_fil" : "' + price_fil + '","year_fil" : "' + year_fil + '","first":"' + firstData + '", "second":"' + secondData + '"';

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"CarDetailsSearch", "car_type":"' + car_type + '","car_country":"' + car_country + '","car_state":"' + car_state + '","car_city":"' + car_city + '","car_engine":"' + car_engine + '", "car_exchange":"' + car_exchange + '", "car_price_type":"' + car_price_type + '", "make_fil" : "' + make_fil + '","model_fil" : "' + model_fil + '","style_fil" : "' + style_fil + '","fuel_fil" : "' + fuel_fil + '","transmission_fil" : "' + transmission_fil + '","loan_fil" : "' + loan_fil + '", "price_fil" : "' + price_fil + '","first":"' + firstData + '", "second":"' + secondData + '"}',
        success: function (data) {
            carListtData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function getCarDetail() {

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
        data: '{"method":"CarSearch", "key":"' + carkey + '", "make_fil" : "' + make_fil + '","model_fil" : "' + model_fil + '","style_fil" : "' + style_fil + '","fuel_fil" : "' + fuel_fil + '","transmission_fil" : "' + transmission_fil + '","loan_fil" : "' + loan_fil + '","trade_fil" : "' + trade_fil + '","car_exchange" : "' + car_exchange + '","price_fil" : "' + price_fil + '","year_fil" : "' + year_fil + '","first":"' + firstData + '", "second":"' + secondData + '"}',

        success: function (data) {
            carListtData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function gotopage(car_id) {
    var link = "carlisting-details.html?cid=" + car_id;
    window.location.href = link;
}


function carListtData(data) {
    if (data.carlist.length == 0) {
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
            if (car_price_type == "Dollares") {
                var car_price = "$ " + data.carlist[i].car_price;
            } else {
                var car_price = "₡ " + data.carlist[i].car_price;
            }

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
            $("#allCarData").append('<li><a onclick="gotopage(' + car_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + car_model_name + ' (' + car_year + ')' + '</h4><h3>' + car_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + city_name + ', ' + state_name + ', ' + country_name + '</h6><div class="icon-area"><div class="rating-area"><div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + '/10</div> </div><div class="clearfix"> </div><div align="right">' + fuelli + exchangeli + loanli + transmissionli + absli + '<img src="images/fourwheel.png" class="icon-img" title="Four-Wheel-Drive">' + rtvli + xenon_ledli + '</div></div></a></li>');
        }
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

//Other Filter
function getCarMakeList() {

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
        data: '{"method":"CarMake"}',
        success: function (data) {
            //alert(data);
            OtherCatFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function OtherCatFilterData(data) {
    if (data.makefilter.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        navigator.notification.alert(msg_no,null,'Alert','Ok');
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.makefilter.length; i++) {
            var car_make_id = data.makefilter[i].car_make_id;
            var car_make_name = data.makefilter[i].car_make_name;
            if (car_make == car_make_id) {
                $("#makefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_make_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" checked="checked" name="make_fil" onchange="gotofilter(' + car_make_id + ')"></span></div><div class="clearfix"></div>');
                gotofilterNew(car_make_id);
            } else {
                $("#makefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_make_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="make_fil" onchange="gotofilter(' + car_make_id + ')"></span></div><div class="clearfix"></div>');
            }
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}
//Make
function gotofilterNew(str) {

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
        data: '{"method":"filtermodel","id":"' + make_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherModelFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function gotofilter(str) {
    if ($.inArray(str, make_fil) != -1) {
        var index = make_fil.indexOf(str);
        if (index >= 0) {
            make_fil.splice(index, 1);
        }
    } else {
        make_fil.push(str);
    }
    if (car_make == str) {
        if (checkMake) {
            for (var i = 0; i < make_fil.length; i++) {
                if (make_fil[i] == str) {
                    var index = make_fil.indexOf(str);
                    make_fil.splice(index, 1);
                }
            }
            make_fil.splice(0, 1);
            checkMake = false;
        }
    }

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
        data: '{"method":"filtermodel","id":"' + make_fil + '","fuel_fil":"' + fuel_fil + '","style_fil":"' + style_fil + '","transmission_fil":"' + transmission_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherModelFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
    //getModel(str);
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }

}
function OtherModelFilterData(data) {
    if (data.filtermodel.length == 0) {
        //cordova.plugin.pDialog.dismiss();

        navigator.notification.alert(msg_no,null,'Alert','Ok');
        $("#preloader").css('display','none');
    } else {

        $("#modelfilter").children().remove();
        for (var i = 0; i < data.filtermodel.length; i++) {
            var car_model_id = data.filtermodel[i].car_model_id;
            var car_model_name = data.filtermodel[i].car_model_name;
            if (car_model == car_model_id) {
                $("#modelfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_model_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" checked="checked" name="model_fil" onchange="getModel(' + car_model_id + ')"></span></div><div class="clearfix"></div>');
                getModelNew(car_model_id);
            } else {
                $("#modelfilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_model_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="model_fil" onchange="getModel(' + car_model_id + ')"></span></div><div class="clearfix"></div>');
            }
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}
//Model
function getModelNew(str) {

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
        data: '{"method":"filterstyle","id":"' + model_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherStyleFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function getModel(str) {
    if ($.inArray(str, model_fil) != -1) {
        var index = model_fil.indexOf(str);
        if (index >= 0) {
            model_fil.splice(index, 1);
        }
    } else {
        model_fil.push(str);
    }
    if (car_model == str) {
        if (checkModel) {
            for (var i = 0; i < model_fil.length; i++) {
                if (model_fil[i] == str) {
                    var index = model_fil.indexOf(str);
                    model_fil.splice(index, 1);
                }
            }
            model_fil.splice(0, 1);
            checkModel = false;
        }
    }

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
        data: '{"method":"filterstyle","id":"' + model_fil + '"}',
        success: function (data) {
            //alert(data);
            OtherStyleFilterData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
    //getStyle(str);
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }

}
function OtherStyleFilterData(data) {
    if (data.filterstyle.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        navigator.notification.alert(msg_no,null,'Alert','Ok');
        $("#preloader").css('display','none');

    } else {
        $("#stylefilter").children().remove();
        for (var i = 0; i < data.filterstyle.length; i++) {
            var car_style_id = data.filterstyle[i].car_style_id;
            var car_style_name = data.filterstyle[i].car_style_name;
            if (car_style == car_style_id) {
                $("#stylefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_style_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" checked="checked" name="style_fil" onchange="getStyle(' + car_style_id + ')"></span></div><div class="clearfix"></div>');
            } else {
                $("#stylefilter").append('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + car_style_name + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><span><input type="checkbox" name="style_fil" onchange="getStyle(' + car_style_id + ')"></span></div><div class="clearfix"></div>');
            }
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
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
    if (car_style == str) {
        if (checkStyle) {
            for (var i = 0; i < style_fil.length; i++) {
                if (style_fil[i] == str) {
                    var index = style_fil.indexOf(str);
                    style_fil.splice(index, 1);
                }
            }
            style_fil.splice(0, 1);
            checkStyle = false;
        }
    }

    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
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
    if (car_fuel == str) {
        if (checkFuel) {
            for (var i = 0; i < fuel_fil.length; i++) {
                if (fuel_fil[i] == str) {
                    var index = fuel_fil.indexOf(str);
                    fuel_fil.splice(index, 1);
                }
            }
            fuel_fil.splice(0, 1);
            checkFuel = false;
        }
    }
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
    gotofilter(make_fil);
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
    if (car_transmission == str) {
        if (checkTransmission) {
            for (var i = 0; i < transmission_fil.length; i++) {
                if (transmission_fil[i] == str) {
                    var index = transmission_fil.indexOf(str);
                    transmission_fil.splice(index, 1);
                }
            }
            transmission_fil.splice(0, 1);
            checkTransmission = false;
        }
    }
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
    gotofilter(make_fil);
}
//Loan
function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
}
//Trade
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
}
//Exchange
function gotoExefilter(str) {
    car_exchange = str;
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
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
}
//Year
function gotoYearfilter(str) {
    year_fil = str;
    firstData = 0;
    secondData = 10;
    if (searchtype == "carsearch") {
        getCarDetail();
    } else {
        getAdvanceCarDetail();
    }
}