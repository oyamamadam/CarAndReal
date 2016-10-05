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
var other_cat_name = "";
var add = "";
var approved = "";
var pending = "";
var msg_no = "";
var err_msg = "";
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
    other_cat_name = "Category Name";
    add = "Add";
    approved = "Approved";
    pending = "Pending";
    msg_no = "No Data Found!";
    err_msg = "Please enter category name.";
}

function ready_spa() {
    results = "Resultados";
    other_cat_name = "Nombre de la categoría";
    add = "Añadir";
    approved = "Aprobado";
    pending = "Pendiente";
    msg_no = "¡Datos no encontrados!";
    err_msg = "Por favor, introduzca nombre de la categoría.";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('results').innerHTML = results;
        document.getElementById('add').innerHTML = add;
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

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getTotalCat();
        getUserCatList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

function getTotalCat() {
    var catTotal = '{"method":"Tot_Cat", "regi_id":"' + gdc_uid + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: catTotal,
        success: function (data) {
            var obj = data.data;
            document.getElementById('totalcat').innerHTML = obj;
            return true;
        },
        error: function (result) {
            navigator.notification.alert('Server Error',null,'Error','Ok');
            //alert("Error");
            return false;
        }
    });
}

function getUserCatList() {

    $("#preloader").css('display','block');

    var userCat = '{"method":"UserOtherCat", "regi_id":"' + gdc_uid + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: userCat,
        success: function (data) {
            catListtData(data);
            return true;
        },
        error: function (result) {

            navigator.notification.alert('Server Error',null,'Error','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function catListtData(data) {
    if (data.othercat.length == 0) {
        //alert(msg_no);
    } else {
        var status = "";
        for (var i = 0; i < data.othercat.length; i++) {
            var other_cat_id = data.othercat[i].other_cat_id;
            var other_cat_name = data.othercat[i].other_cat_name;
            var other_cat_status = data.othercat[i].other_cat_status;
            if (other_cat_status == 1) {
                status = '<li style="margin-bottom:5px; border-bottom:1px solid #ccc; padding-bottom:20px;"><span class="approved">' + approved + '</span></li>';
            } else {
                status = '<li style="margin-bottom:5px; border-bottom:1px solid #ccc; padding-bottom:20px;"><span class="panding">' + pending + '</span></li>';
            }
            $("#userCatList").append('<li><h4>' + other_cat_name + '</h4></li>' + status);
        }


    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}
function goAddCategory() {
    var other_cat_name = document.getElementById('other_cat_name').value;
    if ($.trim(other_cat_name).length == 0) {
        navigator.notification.alert(err_msg,null,'Alert','Ok');
        //alert(err_msg);
        return false;
    } else {


        $("#preloader").css('display','block');

        var userAddCat = '{"method":"AddOtherCat", "regi_id":"' + gdc_uid + '", "other_cat_name":"' + other_cat_name + '"}';
        $.ajax({
            url: BASE_URL + APP_API,
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: userAddCat,
            success: function (data) {
                if (data.success == 0) {
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    //cordova.plugin.pDialog.dismiss();
                    $("#preloader").css('display','none');
                    return false;
                }
                if (data.success == 1) {
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');
                    //cordova.plugin.pDialog.dismiss();
                    window.location.href = "more.html";
                    return false;
                }
            },
            error: function (result) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert('Server Error',null,'Error','Ok');
                $("#preloader").css('display','none');
                return false;
            }
        });
    }
}