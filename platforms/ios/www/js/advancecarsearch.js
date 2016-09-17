/**
 * Created by CTinfotech on 01/25/2015.
 */
var carsearch = "";
var make = "";
var fuel = "";
var transmission = "";
var engine = "";
var loan = "";
var trade = "";
var exchange = "";
var pricetype = "";
var price = "";
var year = "";
var icolor = "";
var ecolor = "";
var search = "";

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
    carsearch = "Automobiles Search";
    make = "Make";
    fuel = "Fuel";
    transmission = "Transmission";
    engine = "Car Engine in CC";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    year = "Year";
    icolor = "Interior Color";
    ecolor = "Exterior Color";
    search = "Search";
}
function ready_spa() {
    carsearch = "Automóviles Buscar";
    make = "Hacer";
    fuel = "Combustible";
    transmission = "Transmisión";
    engine = "Motor de coche de CC";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "Tipo Precio";
    price = "Precio";
    year = "Año";
    icolor = "Color Interior";
    ecolor = "Color Exterior";
    search = "Buscar";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('carsearch').innerHTML = carsearch;
        //document.getElementById('make').innerHTML = make;
        //document.getElementById('fuel').innerHTML = fuel;
        //document.getElementById('transmission').innerHTML = transmission;
        //document.getElementById('engine').innerHTML = engine;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('price').innerHTML = price;
        //document.getElementById('year').innerHTML = year;
        //document.getElementById('icolor').innerHTML = icolor;
        //document.getElementById('ecolor').innerHTML = ecolor;
        document.getElementById('search').innerHTML = search;
    })
}
function selectClear(str) {
    document.getElementById(str).innerHTML = "";
}

function setPlaceHolderEngine() {
    $("#car_engine").attr("placeholder", engine);
}

function setPlaceHolderIntColor() {
    $("#car_int_color").attr("placeholder", icolor);
}

function setPlaceHolderExtColor() {
    $("#car_ext_color").attr("placeholder", ecolor);
}

function setPlaceHolderYear() {
    $("#car_year").attr("placeholder", year);
}

function setPlaceHolderPrice() {
    $("#car_price").attr("placeholder", price);
}

$(document).ready(
    function () {
        //$("#car_price_to").attr("placeholder", price);
        //$("#car_price_from").attr("placeholder", price);
        //$("#car_year_to").attr("placeholder", year);
        //$("#car_year_from").attr("placeholder", year);
        //$("#car_int_color").attr("placeholder", icolor);
        //$("#car_ext_color").attr("placeholder", ecolor);
        $("#car_engine").attr("placeholder", engine);
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
        getCarMakeList();
        getCountryList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

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
            carMakeData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();

            navigator.notification.alert('Server Error',null,'Error','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function carMakeData(data) {

    var obj = data.makefilter;
    for (var i = 0; i < obj.length; i++) {
        $('#car_make').append($('<option>').text(obj[i].car_make_name).attr('value', obj[i].car_make_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}

function selectModel12(str) {
    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?model_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divModel").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectStyle(str) {
    var url = BASE_URL + APP_API + "?style_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divStyle").html(result);
        }
    });
}
function getCountryList() {

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
        data: '{"method":"Country"}',
        success: function (data) {
            countryData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();

            navigator.notification.alert('Server Error',null,'Error','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function countryData(data) {
    var obj = data.country;
    for (var i = 0; i < obj.length; i++) {
        $('#selectCountry').append($('<option>').text(obj[i].counry_name).attr('value', obj[i].counry_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}

function selectState12(str) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');

    state = str;
    var url = BASE_URL + APP_API + "?country_id=" + state;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectCity12(str) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');

    city = str;
    var url = BASE_URL + APP_API + "?state_id=" + city;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}
//Car Search.
var car_type = "";
var car_make = "";
var car_model = "";
var car_style = "";
var car_fuel = "";
var car_transmission = "";
var car_country = "";
var car_state = "";
var car_city = "";
var car_engine = "";
var car_loan = "";
var car_acpt_old = "";
var car_exchange = "";
var car_price_type = "";
var car_price_to = "";
var car_price_from = "";
var car_year_to = "";
var car_year_from = "";
var car_int_color = "";
var car_ext_color = "";

function goToSerachCar() {
    car_type = document.getElementById('car_type').value;
    window.localStorage.setItem("car_type", car_type);
    car_make = document.getElementById('car_make').value;
    window.localStorage.setItem("car_make", car_make);
    car_model = document.getElementById('selectModel').value;
    window.localStorage.setItem("car_model", car_model);
    car_style = document.getElementById('selectStyle').value;
    window.localStorage.setItem("car_style", car_style);
    car_fuel = document.getElementById('car_fuel').value;
    window.localStorage.setItem("car_fuel", car_fuel);
    car_transmission = document.getElementById('car_transmission').value;
    window.localStorage.setItem("car_transmission", car_transmission);
    car_country = document.getElementById('selectCountry').value;
    window.localStorage.setItem("car_country", car_country);
    car_state = document.getElementById('selectState').value;
    window.localStorage.setItem("car_state", car_state);
    car_city = document.getElementById('selectCity').value;
    window.localStorage.setItem("car_city", car_city);
    car_engine = document.getElementById('car_engine').value;
    window.localStorage.setItem("car_engine", car_engine);
    if (document.getElementById("car_loan").checked) {
        car_loan = "Yes";
    } else {
        car_loan = "No";
    }
    window.localStorage.setItem("car_loan", car_loan);
    //if (document.getElementById("car_acpt_old").checked) {
    //    car_acpt_old = "Yes";
    //} else {
    //    car_acpt_old = "No";
    //}
    //window.localStorage.setItem("car_acpt_old", car_acpt_old);
    if (document.getElementById("car_exchange").checked) {
        car_exchange = "Yes";
    } else {
        car_exchange = "No";
    }
    window.localStorage.setItem("car_exchange", car_exchange);
    if (document.getElementById("car_price_type").checked) {
        car_price_type = "Colones";
    } else {
        car_price_type = "Dollares";
    }
    window.localStorage.setItem("car_price_type", car_price_type);
    //car_price_to = document.getElementById('car_price_to').value;
    //window.localStorage.setItem("car_price_to", car_price_to);
    //car_price_from = document.getElementById('car_price_from').value;
    //window.localStorage.setItem("car_price_from", car_price_from);
    //car_year_to = document.getElementById('car_year_to').value;
    //window.localStorage.setItem("car_year_to", car_year_to);
    //car_year_from = document.getElementById('car_year_from').value;
    //window.localStorage.setItem("car_year_from", car_year_from);
    //car_int_color = document.getElementById('car_int_color').value;
    //window.localStorage.setItem("car_int_color", car_int_color);
    //car_ext_color = document.getElementById('car_ext_color').value;
    //window.localStorage.setItem("car_ext_color", car_ext_color);
    window.location.href = "carsearchresult.html?searchtype=caradvancesearch";
}
//Car Search.