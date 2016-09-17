/**
 * Created by CTINFO on 1/4/2016.
 */

var address = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    aboutus = "About Us";
    address = "Address";
}

function ready_spa() {
    aboutus = "Sobre Nosotros";
    address = "Dirección";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('about2').innerHTML = aboutus;
        document.getElementById('address').innerHTML = address;
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
        getAboutUs();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();


function getAboutUs() {

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
        data: '{"method":"AboutUs"}',
        success: function (data) {
            AboutUs(data)
            $.getScript('js/exp.js');
            $.getScript('js/test.js');
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Error','Ok');
            return false;
        }
    });
}
function AboutUs(data) {

    var about_id = data.aboutus.about_id;
    var about_title = data.aboutus.about_title;
    document.getElementById('aboutTitle').innerHTML = about_title;
    var about_desc = data.aboutus.about_desc;
    document.getElementById('aboutDesc').innerHTML = about_desc;
    var about_addr = data.aboutus.about_addr;
    document.getElementById('aboutAddr').innerHTML = about_addr;
    var file_img = data.aboutus.aboutimg;
    for (var j = 0; j < file_img.length; j++) {
        $("#owl-demo").append('<div class="item"><img src="' + file_img[j] + '"></div>');
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}