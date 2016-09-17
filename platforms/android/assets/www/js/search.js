/**
/**
 * Created by CTinfotech on 01/25/2015.
 */
var carkey = "";
var realkey = "";
var otherkey = "";
var search = "";
var advancsearch = "";
var blank_msg = "";
gdc_lang = window.localStorage.getItem("gdc_lang");

if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    automobiles = "Automobiles";
    realestate = "Real Estate";
    sundries = "Sundries";
    carkey = "Automobiles Search";
    realkey = "Real Estate Search";
    otherkey = "Sundries Search";
    search = "Search";
    advancsearch = "Advanced Search";
    blank_msg = "Please enter search key.";
}

function ready_spa() {
    automobiles = "Automóviles";
    realestate = "Bienes raíces";
    sundries = "Varios";
    carkey = "Automóviles Buscar";
    realkey = "Busca Inmobiliaria";
    otherkey = "Misceláneas Buscar";
    search = "Buscar";
    advancsearch = "Búsqueda Avanzada";
    blank_msg = "Por favor, introduzca la clave de búsqueda.";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('automobiles1').innerHTML = automobiles;
        document.getElementById('realestate1').innerHTML = realestate;
        document.getElementById('sundries1').innerHTML = sundries;

        document.getElementById('adcarsrc').innerHTML = advancsearch;
        document.getElementById('carsrc').innerHTML = search;

        document.getElementById('adrealsrc').innerHTML = advancsearch;
        document.getElementById('realsrc').innerHTML = search;

        document.getElementById('adothersrc').innerHTML = advancsearch;
        document.getElementById('othersrc').innerHTML = search;
    })
}
$(document).ready(
    function () {
        $("#carkey").attr("placeholder", carkey);
        $("#realkey").attr("placeholder", realkey);
        $("#otherkey").attr("placeholder", otherkey);
    }
);
//Car Search.
function goToSerachCar() {
    var carkey = document.getElementById('carkey').value;
    if ($.trim(carkey).length == 0) {
        navigator.notification.alert(blank_msg,null,'Alert','Ok');
        return false;
    }
    window.location.href = "carsearchresult.html?searchtype=carsearch" + "&carkey=" + carkey;
}
function goToAdvanceSerachCar() {
    window.location.href = "advanced-search-car.html";
}
//Car Search.
//Real Estate Search.
function goToSearchReal() {
    var realkey = document.getElementById('realkey').value;
    if ($.trim(realkey).length == 0) {
        navigator.notification.alert(blank_msg,null,'Alert','Ok');
        alert();
        return false;
    }
    window.location.href = "realsearchresult.html?searchtype=realsearch" + "&realkey=" + realkey;
}
function goToAdvanceSearchReal() {
    window.location.href = "advanced-search-realestate.html";
}
//Real Estate Search.
//Other Search.
function goToSearchOther() {
    var otherkey = document.getElementById('otherkey').value;
    if ($.trim(otherkey).length == 0) {
        navigator.notification.alert(blank_msg,null,'Alert','Ok');
        return false;
    }
    window.location.href = "otherssearchresult.html?searchtype=othersearch" + "&otherkey=" + otherkey;
}
function goToAdvanceSearchOther() {
    window.location.href = "advanced-search-others.html";
}
//Other Search.