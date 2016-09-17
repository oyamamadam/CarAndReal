/**
 * Created by CTINFO on 1/4/2016.
 */
var helpTitle = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    helpTitle = "If you can't find the answer to your question please contact us.";
}
function ready_spa() {
    helpTitle = "Si no puede encontrar la respuesta a su pregunta, por favor póngase en contacto con nosotros.";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('helpspan').innerHTML = helpfaq;
        document.getElementById('helpTitle').innerHTML = helpTitle;
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
        getHelpData();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function getHelpData() {
    //
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
        data: '{"method":"AllHelpAndFAQ"}',
        success: function (data) {
            AllHelpAndFAQ(data)
            $.getScript('js/exp.js');
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
function AllHelpAndFAQ(data) {
    if (data.allhelpfaq.length == 0) {
        //cordova.plugin.pDialog.dismiss();
        navigator.notification.alert('No Data Found!',null,'Alert','Ok');
        $("#preloader").css('display','none');

    } else {
        for (var i = 0; i < data.allhelpfaq.length; i++) {
            var help_id = data.allhelpfaq[i].help_id;
            var help_title = data.allhelpfaq[i].help_title;
            var help_descrip = data.allhelpfaq[i].help_descrip;
            var help_status = data.allhelpfaq[i].help_status;
            $("#helpdata").append('<h2 class="bg-col-a padtblr10">' + help_title + '</h2><p>' + help_descrip + '</p>');
        }
        //cordova.plugin.pDialog.dismiss();
        $("#preloader").css('display','none');
        return true;
    }
}