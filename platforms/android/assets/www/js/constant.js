//var BASE_URL="http://ctinfotech.com.md-in-37.webhostbox.net/car_admin/";
var BASE_URL="http://grupodelcambalache.com/app/";
//var BASE_URL = "http://localhost/phonegap/api/car_admin/";
var APP_API = "api.php";
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    //StatusBar.overlaysWebView(false);

}

function onBackKeyDown() {
    navigator.app.exitApp();
}

//var profile = "";
var home = "";
var mypost = "";
var setting = "";
var aboutus = "";
var contactus = "";
//var rateus = "";
var helpfaq = "";
var logout = "";
var automobiles = "";
var realestate = "";
var sundries = "";
var more = "";
var gdc_lang = "";




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
    //profile = "Profile";
    home = "Home";
    mypost = "My Post";
    setting = "Setting";
    aboutus = "About Us";
    contactus = "Contact Us";
    //rateus = "Rate Us";
    helpfaq = "Help/Faq";
    logout = "Logout";
    automobiles = "Automobiles";
    realestate = "Real Estate";
    sundries = "Sundries";
    more = "More";

}

function ready_spa() {
    //profile = "Perfil";
    home = "Casa";
    mypost = "Mi Publicación";
    setting = "Ajuste";
    aboutus = "Sobre Nosotros";
    contactus = "Contáctenos";
    //rateus = "";
    helpfaq = "Ayuda/Preguntas Frecuentes";
    logout = "Cerrar Sesión";
    automobiles = "Automóviles";
    realestate = "Bienes raíces";
    sundries = "Artículos Varios";
    more = "Más";

}

display();

function display() {
    $(document).ready(function () {
        //document.getElementById('profile').innerHTML = profile;
        document.getElementById('home').innerHTML = home;
        document.getElementById('mypost').innerHTML = mypost;
        document.getElementById('setting').innerHTML = setting;
        document.getElementById('aboutus').innerHTML = aboutus;
        document.getElementById('contactus').innerHTML = contactus;
        document.getElementById('helpfaq').innerHTML = helpfaq;
        document.getElementById('logout').innerHTML = logout;
        document.getElementById('automobiles').innerHTML = automobiles;
        document.getElementById('realestate').innerHTML = realestate;
        document.getElementById('sundries').innerHTML = sundries;
        document.getElementById('more').innerHTML = more;

    })
}

function goToProfile() {
    var user = window.localStorage.getItem("gdc_email_id");
    if (user == null) {
        window.location.href = "login.html";
    } else {
        window.location.href = "profile.html";
    }
}

function goToHome() {
    window.location.href = "index.html";
}
function goToMyPost() {
    var user = window.localStorage.getItem("gdc_email_id");
    if (user == null) {
        window.location.href = "login.html";
    } else {
        window.location.href = "userpost.html";
    }
}
function goToSetting() {
    window.location.href = "setting.html";
}
function goToAboutUs() {
    window.location.href = "about.html";
}
function goToContactus() {
    window.location.href = "contactus.html";
}
function goToHelp() {
    window.location.href = "help.html";
}
function goToLogOut() {
    window.localStorage.clear();
    window.location.href = "login.html";
    //navigator.app.exitApp();
}
function goToCarList() {
    window.localStorage['tabstyle']=1;


    window.location.href = "car-listing.html";
}
function goToRealList() {
    window.localStorage['tabstyle']=2;
    window.location.href = "realestate-listing.html";
}
function goToOtherList() {
    window.localStorage['tabstyle']=3;
    window.location.href = "others-listing.html";
}
function goToMore() {
    window.localStorage['tabstyle']=4;
    window.location.href = "more.html";
}
function goToSearch() {
    window.location.href = "search.html";
}
function goToEditProfile() {
    window.location.href = "editprofile.html";
}
var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
//alert(gdc_username);
var gdc_gender = window.localStorage.getItem("gdc_gender");
var gdc_email = window.localStorage.getItem("gdc_email_id");
var gdc_mobile = window.localStorage.getItem("gdc_contactno");
var profile_image = window.localStorage['profile-image'];

$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
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