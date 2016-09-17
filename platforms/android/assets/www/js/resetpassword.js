/**
 * Created by Ashish on 1/18/2016.
 */
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}

var results = "";
var old_password_txt = "";
var new_password_txt = "";
var confirm_password_txt = "";
var reset_submit = "";
var approved = "";
var pending = "";
var msg_no = "";
var err_old_msg = "";
var err_new_msg = "";
var err_confirm_msg = "";
var err_notmatch_msg = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
if (gdc_lang == null) {
    gdc_lang = "en";
}
if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    results = "Results";
    //other_cat_name = "Category Name";
    old_password_txt = "Old Password";
    new_password_txt = "New Password";
    confirm_password_txt = "Confirm Password";
    reset_submit = "Submit";
    approved = "Approved";
    pending = "Pending";
    msg_no = "No Data Found!";
    err_old_msg = "Please enter old password.";
    err_new_msg = "Please enter new password.";
    err_confirm_msg = "Please enter confirm password.";
    err_notmatch_msg = "Password not match.";
}

function ready_spa() {
    results = "Resultados";
    //other_cat_name = "Nombre de la categoría";
    old_password_txt = "Contraseña anterior";
    new_password_txt = "nueva contraseña";
    confirm_password_txt = "Confirmar contraseña";
    reset_submit = "Enviar";
    approved = "Aprobado";
    pending = "Pendiente";
    msg_no = "¡Datos no encontrados!";
    err_old_msg = "Por favor, introduzca la contraseña anterior.";
    err_new_msg = "Por favor, introduzca una nueva contraseña.";
    err_confirm_msg = "Por favor, introduzca la contraseña de confirmación.";
    err_notmatch_msg = "La contraseña no coincide.";
}

display();

function display() {
    $(document).ready(function () {
        //document.getElementById('results').innerHTML = results;
        document.getElementById('reset_submit').innerHTML = reset_submit;
        $("#old_password").attr("placeholder", old_password_txt);
        $("#new_password").attr("placeholder", new_password_txt);
        $("#confirm_password").attr("placeholder", confirm_password_txt);
    })
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
function goToContactus() {
    window.location.href = "contactus.html";
}
function goToHelp() {
    window.location.href = "help.html";
}
function goToLogOut() {
    window.localStorage.clear();
    navigator.app.exitApp();
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
var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
var gdc_gender = window.localStorage.getItem("gdc_gender");
$(document).ready(
    function () {
        $("#other_cat_name").attr("placeholder", other_cat_name);
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            document.getElementById('profilename').innerHTML = gdc_username;
        }
        if (gdc_gender == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            if (gdc_gender == "male") {

            } else {
                document.getElementById("profilegender").src = "images/female.png";
            }
        }
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
    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function goChangePassword() {
    var old_password = document.getElementById('old_password').value;
    var new_password = document.getElementById('new_password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var n = new_password.localeCompare(confirm_password);
    if ($.trim(old_password).length == 0) {
        navigator.notification.alert(err_old_msg,null,'Alert','Ok');
        $('#old_password').focus();
        return false;
    } else if ($.trim(new_password).length == 0) {
        navigator.notification.alert(err_new_msg,null,'Alert','Ok');
        $('#new_password').focus();
        return false;
    } else if ($.trim(confirm_password).length == 0) {
        navigator.notification.alert(err_confirm_msg,null,'Alert','Ok');
        $('#confirm_password').focus();
        return false;
    } else if (n == -1) {
        navigator.notification.alert(err_notmatch_msg,null,'Alert','Ok');
        $('#confirm_password').focus();
        return false;
    } else {

        //cordova.plugin.pDialog.init({
        //    theme: 'HOLO_LIGHT',
        //    progressStyle: 'SPINNER',
        //    cancelable: false,
        //    title: 'Please Wait...',
        //    message: 'Loading ...'
        //});

        $("#preloader").css('display','block');

        var userAddCat = '{"method":"ResetPassword", "regi_id":"' + gdc_uid + '", "old_password":"' + old_password + '", "new_password":"' + new_password + '"}';
        $.ajax({
            url: BASE_URL + APP_API,
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: userAddCat,
            success: function (data) {
                if (data.success == 0) {
                    //cordova.plugin.pDialog.dismiss();
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');

                    return false;
                }
                if (data.success == 1) {
                    //cordova.plugin.pDialog.dismiss();
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');
                    window.location.href = "setting.html";
                    return false;
                }
            },
            error: function (result) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert('Error',null,'Alert','Ok');
                $("#preloader").css('display','none');
                return false;
            }
        });
    }
}