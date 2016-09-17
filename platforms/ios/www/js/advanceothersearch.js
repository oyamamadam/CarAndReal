/**
 * Created by CTinfotech on 01/25/2015.
 */
var othersearch = "";
var cattype = "";
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
    othersearch = "Sundries Search";
    cattype = "Category Type";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    search = "Search";
}
function ready_spa() {
    othersearch = "Misceláneas Buscar";
    cattype = "Categoría Tipo";
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
        document.getElementById('othersearch').innerHTML = othersearch;
        //document.getElementById('cattype').innerHTML = cattype;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('price').innerHTML = price;
        document.getElementById('search').innerHTML = search;
    })
}

$(document).ready(
    function () {
        //$("#other_price_to").attr("placeholder", price);
        //$("#other_price_from").attr("placeholder", price);
    }
);

function setPlaceHolderPrice() {
    $("#other_price_to").attr("placeholder", price);
    $("#other_price_from").attr("placeholder", price);
}

var other_type = "";
var other_category = "";
var other_loan = "";
var other_trade = "";
var other_pri_type = "";
var other_pri_to = "";
var other_pri_from = "";
var other_exchange = "";
var other_country = "";
var other_state = "";
var other_city = "";

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getOtherCatList();
        getCountryList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function onBackKeyDown() {
    navigator.app.backHistory();
}

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
            OtherCatData(data);
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

    $("#preloader").css('display','none');
    //cordova.plugin.pDialog.dismiss();
}


function selectClear(str) {
    document.getElementById(str).innerHTML = "";
}

function OtherCatData(data) {
    var obj = data.othercat;
    for (var i = 0; i < obj.length; i++) {
        $('#other_category').append($('<option>').text(obj[i].other_cat_name).attr('value', obj[i].other_cat_id));
    }
    //cordova.plugin.pDialog.dismiss();

    $("#preloader").css('display','none');
    return true;
}

//Other Search.
function goToSerachOther() {
    other_type = document.getElementById('other_type').value;
    window.localStorage.setItem("other_type", other_type);
    other_category = document.getElementById('other_category').value;
    window.localStorage.setItem("other_category", other_category);
    other_country = document.getElementById('selectCountry').value;
    window.localStorage.setItem("other_country", other_country);
    other_state = document.getElementById('selectState').value;
    window.localStorage.setItem("other_state", other_state);
    other_city = document.getElementById('selectCity').value;
    window.localStorage.setItem("other_city", other_city);
    if (document.getElementById("other_loan").checked) {
        other_loan = "Yes";
    } else {
        other_loan = "No";
    }
    window.localStorage.setItem("other_loan", other_loan);
    //if (document.getElementById("other_trade").checked) {
    //    other_trade = "Yes";
    //} else {
    //    other_trade = "No";
    //}
    //window.localStorage.setItem("other_trade", other_trade);
    if (document.getElementById("other_exchange").checked) {
        other_exchange = "Yes";
    } else {
        other_exchange = "No";
    }
    window.localStorage.setItem("other_exchange", other_exchange);
    if (document.getElementById("other_pri_type").checked) {
        other_pri_type = "Colones";
    } else {
        other_pri_type = "Dollares";
    }
    window.localStorage.setItem("other_pri_type", other_pri_type);
    //other_pri_to = document.getElementById('other_price_to').value;
    //window.localStorage.setItem("other_pri_to", other_pri_to);
    //other_pri_from = document.getElementById('other_price_from').value;
    //window.localStorage.setItem("other_pri_from", other_pri_from);
    window.location.href = "otherssearchresult.html?searchtype=otheradvancesearch";
}
//Other Search.