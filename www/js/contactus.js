/**
 * Created by CTINFO on 1/4/2016.
 */
var contact1 = "";
var fullname = "";
var emailid = "";
var contactno = "";
var user_comment = "";
var blankfiled = "";
var sendmsg = "";
var name_msg = "";
var email_msg = "";
var contact_msg = "";
var select_msg = "";
var comment_msg = "";
var invalid_msg = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    contact1 = "Connect with us";
    sendmsg = "Send";
    fullname = "Full Name";
    emailid = "Email Address";
    contactno = "Contact Number";
    user_comment = "Comment";
    blankfiled = "Select Query Type";
    name_msg = "Please enter name.";
    email_msg = "Please enter valid email address.";
    contact_msg = "Please enter contact number.";
    select_msg = "Please select query type.";
    comment_msg = "Please enter comment.";
    invalid_msg = "Invalid Email Address.";
}

function ready_spa() {
    contact1 = "Conectate con nosotros";
    sendmsg = "Enviar";
    fullname = "Nombre completo";
    emailid = "Dirección de correo electrónico";
    contactno = "Número de contacto";
    user_comment = "Comentario";
    blankfiled = "Seleccione Tipo de consulta";
    name_msg = "Por favor, introduzca su nombre.";
    email_msg = "Por favor ingrese una dirección de correo electrónico válida.";
    contact_msg = "Por favor, introduzca el número de contacto.";
    select_msg = "Por favor, seleccione el tipo de consulta.";
    comment_msg = "Por favor, introduzca comentario.";
    invalid_msg = "Dirección de correo electrónico no válida.";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('contact1').innerHTML = contact1;
        document.getElementById('sendmsg').innerHTML = sendmsg;
        document.getElementById('blankfiled').innerHTML = blankfiled;
        document.getElementById('carfiled').innerHTML = automobiles;
        document.getElementById('realfiled').innerHTML = realestate;
        document.getElementById('otherfiled').innerHTML = sundries;


    })
}
$(document).ready(
    function () {
        $("#fullname").attr("placeholder", fullname);
        $("#emailid").attr("placeholder", emailid);
        $("#contactno").attr("placeholder", contactno);
        $("#user_comment").attr("placeholder", user_comment);
    }
);

$(document).ready(function () {
    document.getElementById("fullname").value = gdc_username;
    document.getElementById("emailid").value = gdc_email;
    document.getElementById("contactno").value = gdc_mobile;
});


var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {

    }
};
app.initialize();


function goContact() {

    var fullname = document.getElementById('fullname').value;
    if ($.trim(fullname).length == 0) {
        alert(name_msg);
        return false;
    }

    var emailid = document.getElementById('emailid').value;
    if ($.trim(emailid).length == 0) {
        alert(email_msg);
        return false;
    }

    var contactno = document.getElementById('contactno').value;
    if ($.trim(contactno).length == 0) {
        alert(contact_msg);
        return false;
    }

    var cat_type = document.getElementById('cat_type').value;
    if ($.trim(cat_type) == "") {
        alert(select_msg);
        return false;
    }

    var user_comment = document.getElementById('user_comment').value;
    if ($.trim(user_comment).length == 0) {
        alert(comment_msg);
        return false;
    }

    if (validateEmail(emailid)) {

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
            data: '{"method":"ContactUs", "fullname":"' + fullname + '", "emailid":"' + emailid + '", "contactno":"' + contactno + '", "cat_type":"' + cat_type + '", "user_comment":"' + user_comment + '"}',
            success: function (data) {
                if (data.success == 0) {
                    cordova.plugin.pDialog.dismiss();
                    alert(data.message);
                    return false;
                }
                if (data.success == 1) {
                    cordova.plugin.pDialog.dismiss();
                    alert(data.message);
                    window.location.href = "index.html";
                    return false;
                }
                if (data.success == 2) {
                    cordova.plugin.pDialog.dismiss();
                    alert(data.message);
                    return false;
                }
            },
            error: function (result) {
                cordova.plugin.pDialog.dismiss();
                alert("Error");
                return false;
            }
        });
    }
    else {
        alert(invalid_msg);
        return false;
    }

}
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}