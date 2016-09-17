/**
 * Created by CTinfotech on 01/25/2015.
 */
var realsearch = "";
var cattype = "";
var rooms = "";
var bathrooms = "";
var loan = "";
var trade = "";
var exchange = "";
var pricetype = "";
var price = "";
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
    realsearch = "Real Estate Search";
    cattype = "Category Type";
    rooms = "Rooms";
    bathrooms = "Bathrooms";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    search = "Search";
}
function ready_spa() {
    realsearch = "Busca Inmobiliaria";
    cattype = "Categoría Tipo";
    rooms = "Habitaciones";
    bathrooms = "Baños";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "Tipo Precio";
    price = "Precio";
    search = "Buscar";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('realsearch').innerHTML = realsearch;
        //document.getElementById('cattype').innerHTML = cattype;
        //document.getElementById('rooms').innerHTML = rooms;
        //document.getElementById('bathrooms').innerHTML = bathrooms;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('price').innerHTML = price;
        document.getElementById('search').innerHTML = search;
    })
}

function setPlaceHolderRoom() {
    $("#real_room").attr("placeholder", rooms);
}

function setPlaceHolderBath() {
    $("#real_baths").attr("placeholder", bathrooms);
}

function setPlaceHolderPrice() {
    $("#real_price_to").attr("placeholder", price);
    $("#real_price_from").attr("placeholder", price);
}

$(document).ready(
    function () {
        $("#real_room").attr("placeholder", rooms);
        $("#real_baths").attr("placeholder", bathrooms);
        //$("#real_price_to").attr("placeholder", price);
        //$("#real_price_from").attr("placeholder", price);
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
        getRealProList();
        getCountryList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

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
            proData(data);
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
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function proData(data) {
    var obj = data.realfilter;
    for (var i = 0; i < obj.length; i++) {
        $('#propertyType').append($('<option>').text(obj[i].real_pro_name).attr('value', obj[i].real_pro_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
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
    var url = BASE_URL + APP_API + "?country_id=" + str;
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
    var url = BASE_URL + APP_API + "?state_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}
function selectClear(str) {
    document.getElementById(str).innerHTML = "";
}
//Real Search.
var proType = "";
var real_pro_type = "";
var real_country = "";
var real_state = "";
var real_city = "";
var real_room = "";
var real_baths = "";
var real_loan = "";
var real_rec = "";
var real_pri_type = "";
var real_price_to = "";
var real_price_from = "";

function goToSerachReal() {
    proType = document.getElementById('proType').value;
    window.localStorage.setItem("proType", proType);
    real_pro_type = document.getElementById('propertyType').value;
    window.localStorage.setItem("real_pro_type", real_pro_type);
    real_country = document.getElementById('selectCountry').value;
    window.localStorage.setItem("real_country", real_country);
    real_state = document.getElementById('selectState').value;
    window.localStorage.setItem("real_state", real_state);
    real_city = document.getElementById('selectCity').value;
    window.localStorage.setItem("real_city", real_city);
    real_room = document.getElementById('real_room').value;
    window.localStorage.setItem("real_room", real_room);
    real_baths = document.getElementById('real_baths').value;
    window.localStorage.setItem("real_baths", real_baths);
    if (document.getElementById("real_loan").checked) {
        real_loan = "Yes";
    } else {
        real_loan = "No";
    }
    window.localStorage.setItem("real_loan", real_loan);
    if (document.getElementById("real_rec").checked) {
        real_rec = "Yes";
    } else {
        real_rec = "No";
    }
    window.localStorage.setItem("real_rec", real_rec);
    if (document.getElementById("real_pri_type").checked) {
        real_pri_type = "Colones";
    } else {
        real_pri_type = "Dollares";
    }
    window.localStorage.setItem("real_pri_type", real_pri_type);
   /* real_price_to = document.getElementById('real_price_to').value
    window.localStorage.setItem("real_price_to", real_price_to);
    real_price_from = document.getElementById('real_price_from').value;
    window.localStorage.setItem("real_price_from", real_price_from);*/
    window.location.href = "realsearchresult.html?searchtype=realadvancesearch";
}
//Real Search.