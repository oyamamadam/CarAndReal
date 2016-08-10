/**
 * Created by CTinfotech on 11/27/2015.
 */
//document.addEventListener("deviceready", onDeviceReady, false);
//function onDeviceReady() {
//    document.addEventListener("backbutton", onBackKeyDown, false);
//}
//function onBackKeyDown() {
//    navigator.app.backHistory();
//}
//function goToHome() {
//    window.location.href = "index.html";
//}
//function goToMyPost() {
//    var user = window.localStorage.getItem("gdc_email_id");
//    if (user == null) {
//        window.location.href = "login.html";
//    } else {
//        window.location.href = "userpost.html";
//    }
//}
//function goToContactus() {
//    window.location.href = "contactus.html";
//}
//function goToHelp() {
//    window.location.href = "help.html";
//}
//function goToLogOut() {
//    window.localStorage.clear();
//    navigator.app.exitApp();
//}
//function goToCarList() {
//    window.location.href = "car-listing.html";
//}
//function goToRealList() {
//    window.location.href = "realestate-listing.html";
//}
//function goToOtherList() {
//    window.location.href = "others-listing.html";
//}
//var gdc_uid = window.localStorage.getItem("gdc_uid");
//var gdc_username = window.localStorage.getItem("gdc_username");
//var gdc_gender = window.localStorage.getItem("gdc_gender");
//
//$(document).ready(
//    function () {
//        if (gdc_username == null) {
//            document.getElementById('profilename').innerHTML = "Profile";
//        } else {
//
//            //user_name.innerHTML = gdc_username;
//            document.getElementById('profilename').innerHTML = gdc_username;
//        }
//        if (gdc_gender == null) {
//            document.getElementById('profilename').innerHTML = "Profile";
//        } else {
//            if (gdc_gender == "male") {
//
//            } else {
//                document.getElementById("profilegender").src = "images/female.png";
//            }
//        }
//    }
//);
var dataview = "";
var dataedit = "";
var datadelete = "";
var loadmore = "";
var msg_delete = "";
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
    dataview = "View";
    dataedit = "Edit";
    datadelete = "Delete";
    loadmore = "Load More";
    msg_delete = "Are you sure, you want to delete?";
}

function ready_spa() {
    automobiles = "Automóviles";
    realestate = "Bienes raíces";
    sundries = "Varios";
    dataview = "Ver";
    dataedit = "Editar";
    datadelete = "Borrar";
    loadmore = "Carga Más";
    msg_delete = "¿Estas seguro que quieres borrarlo?";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('automobiles2').innerHTML = automobiles;
        document.getElementById('realestate2').innerHTML = realestate;
        document.getElementById('sundries2').innerHTML = sundries;
        /*       document.getElementById('loadmorereal').innerHTML = loadmore;
         document.getElementById('loadmoreother').innerHTML = loadmore;
         document.getElementById('loadmorecar').innerHTML = loadmore;*/
    })
}

//Get Car Detail.
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
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
        var type = GetURLParameter('type');
        if (type == "realmenu") {
            $('#carmenu').removeClass('active');
            $("#menu1").removeClass("in active");
            $("#realmenu").addClass("active");
            $("#menu2").addClass("active in");
            getUserAllRealDetailB();
        } else if (type == "othermenu") {
            $('#carmenu').removeClass('active');
            $("#menu1").removeClass("in active");
            $("#othermenu").addClass("active");
            $("#menu3").addClass("active in");
            getUserAllOtherDetailB();
        } else {
            $("#carmenu").addClass("active");
            $("#menu1").addClass("active in");
            getUserAllCarDetailB();
        }
    },
    receivedEvent: function (id) {
    }
};
app.initialize();

function gotoCarDetailPage(car_id) {
    var link = "carlisting-details.html?cid=" + car_id;
    window.location.href = link;
}

function gotoCarEditPage(car_id) {
    var link = "car-edit.html?cid=" + car_id;
    window.location.href = link;
}

function gotoCarActionPage(car_id) {
    var r = confirm(msg_delete);
    if (r == true) {

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
            data: '{"method":"CarDetailsDelete", "car_id":"' + car_id + '"}',
            success: function (data) {
                cordova.plugin.pDialog.dismiss();
                goToMyPost();
                return true;
            },
            error: function (result) {
                cordova.plugin.pDialog.dismiss();
                alert("Error");
                return false;
            }
        });
    } else {
    }
}

var carpageno = 1;
var firstCarData = 0;
var secondCarData = 10;
function getUserAllCarDetailB() {
    firstCarData = 0;
    secondCarData = 10;
    getUserAllCarDetail();
}

function goToNxtCar() {
    carpageno = carpageno + 1;
    firstCarData = firstCarData + 10;
    secondCarData = secondCarData + 10;
    getUserAllCarDetail();

}

function goToPrvCar() {
    if (secondCarData > 10) {
        secondCarData = secondCarData - 10;
    }
    if (firstCarData >= 10) {
        carpageno = carpageno - 1;
        firstCarData = firstCarData - 10;
    }
    getUserAllCarDetail();
}

function getUserAllCarDetail() {

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    var method = '{"method":"AllCarDetailUser", "regi_id":"' + gdc_uid + '", "first":"' + firstCarData + '", "second":"' + secondCarData + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: method,
        success: function (data) {
            carListtData(data);
            return true;
        },
        error: function (result) {
            alert("Error");
            return false;
        }
    });
}
function carListtData(data) {
    if (data.carlist.length == 0) {
        cordova.plugin.pDialog.dismiss();
        //alert("No Data Found!");
        if (secondCarData > 10) {
            secondCarData = secondCarData - 10;
        }
        if (firstCarData >= 10) {
            carpageno = carpageno - 1;
            firstCarData = firstCarData - 10;
        }
    } else {
		$('#dnf1').hide('not-found');
        $("#car_page_list").removeClass("pagination-hide");
        //if (firstCarData == 0) {
        //    $("#userAllCarData").children().remove();
        //}
        document.getElementById('carpageno').innerHTML = carpageno;
        $("#userAllCarData").children().remove();
        for (var i = 0; i < data.carlist.length; i++) {

            var car_id = data.carlist[i].car_id;
            var car_type = data.carlist[i].car_type;
            var car_make_name = data.carlist[i].car_make_name;
            var car_model_name = data.carlist[i].car_model_name;
            var car_style_name = data.carlist[i].car_style_name;
            var car_fuel = data.carlist[i].car_fuel;
            var car_transmission = data.carlist[i].car_transmission;
            var car_engine = data.carlist[i].car_engine;
            var car_loan = data.carlist[i].car_loan;
            var car_acpt_old = data.carlist[i].car_acpt_old;
            var car_exchange = data.carlist[i].car_exchange;
            var car_year = data.carlist[i].car_year;
            var car_price_type = data.carlist[i].car_price_type;
            if (car_price_type == "Dollares") {
                var car_price = "$ " + data.carlist[i].car_price;
            } else {
                var car_price = "₡ " + data.carlist[i].car_price;
            }
            var car_color = data.carlist[i].car_color;
            var country_name = data.carlist[i].country_name;
            var state_name = data.carlist[i].state_name;
            var city_name = data.carlist[i].city_name;
            var car_doors = data.carlist[i].car_doors;
            var car_telphone = data.carlist[i].car_telphone;
            var car_listing = data.carlist[i].car_listing;
            var car_condition = data.carlist[i].car_condition;
            var car_lising_create = data.carlist[i].car_lising_create;
            var car_pow_lock = data.carlist[i].car_pow_lock;
            var car_ele_seat = data.carlist[i].car_ele_seat;
            var car_tint_win = data.carlist[i].car_tint_win;
            var car_air_bag = data.carlist[i].car_air_bag;
            var car_pow_win = data.carlist[i].car_pow_win;
            var car_ele_mir = data.carlist[i].car_ele_mir;
            var car_alarm = data.carlist[i].car_alarm;
            var car_abs = data.carlist[i].car_abs;
            var car_ac = data.carlist[i].car_ac;
            var car_win_difo = data.carlist[i].car_win_difo;
            var car_sunroof = data.carlist[i].car_sunroof;
            var car_rims = data.carlist[i].car_rims;
            var car_turbo = data.carlist[i].car_turbo;
            var car_lea_seat = data.carlist[i].car_lea_seat;
            var car_halo = data.carlist[i].car_halo;
            var car_cas = data.carlist[i].car_cas;
            var car_dvd = data.carlist[i].car_dvd;
            var car_cru_con = data.carlist[i].car_cru_con;
            var car_usb = data.carlist[i].car_usb;
            var car_rtv = data.carlist[i].car_rtv;
            var car_cont_elect = data.carlist[i].car_cont_elect;
            var car_cont_desce = data.carlist[i].car_cont_desce;
            var car_triptonic = data.carlist[i].car_triptonic;
            var car_rear_cam = data.carlist[i].car_rear_cam;
            var car_rear_sen = data.carlist[i].car_rear_sen;
            var car_front_sen = data.carlist[i].car_front_sen;
            var car_radio_string = data.carlist[i].car_radio_string;
            var car_vol_multi = data.carlist[i].car_vol_multi;
            var car_ac_climate = data.carlist[i].car_ac_climate;
            var car_mem_seat = data.carlist[i].car_mem_seat;
            var car_auto_fold_mir = data.carlist[i].car_auto_fold_mir;
            var car_xenon = data.carlist[i].car_xenon;
            var car_xenon_led = data.carlist[i].car_xenon_led;
            var car_rain_sen = data.carlist[i].car_rain_sen;
            var car_smt_keyof = data.carlist[i].car_smt_keyof;
            var car_tire_pressure = data.carlist[i].car_tire_pressure;
            var car_cru_cont = data.carlist[i].car_cru_cont;
            var car_ad_ster = data.carlist[i].car_ad_ster;
            var car_blue = data.carlist[i].car_blue;
            var car_comment = data.carlist[i].car_comment;
            var u_first_name = data.carlist[i].u_first_name;
            var u_last_name = data.carlist[i].u_last_name;
            var u_phone = data.carlist[i].u_phone;
            var u_email = data.carlist[i].u_email;
            var car_trade = data.carlist[i].car_trade;
            var file_img = data.carlist[i].file_img;
            var image1 = file_img[0];
            //$("#allCarData").append('<li><a onclick="gotopage(' + car_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + car_make_name + ', ' + car_model_name + ' (' + car_year + ')' + '</h4><h3><img src="images/dollor-icon.png"> ' + car_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + city_name + ', ' + state_name + ', ' + country_name + '</h6></div></a></li>');
            $("#userAllCarData").append('<li ><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + car_model_name + ' (' + car_year + ')' + '</h4><div class="left_side"><p><h3>' + car_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3></p><p><h6>' + city_name + ', ' + state_name + ', ' + country_name + '</h6></p><div class="popup_my"><ul><li><a onclick="gotoCarDetailPage(' + car_id + ')"><span class="glyphicon glyphicon-eye-open"></span> <span id="dataview' + i + '">View</span></a></li><li><a onclick="gotoCarEditPage(' + car_id + ')"><span class="glyphicon glyphicon-edit"></span> <span id="dataedit' + i + '">Edit</span></a></li><li><a onclick="gotoCarActionPage(' + car_id + ')"><span class="glyphicon glyphicon-trash"></span> <span id="datadelete' + i + '">Delete</span></a></li></ul></div></div></div></li>');
            document.getElementById('dataview' + i + '').innerHTML = dataview;
            document.getElementById('dataedit' + i + '').innerHTML = dataedit;
            document.getElementById('datadelete' + i + '').innerHTML = datadelete;

        }

        cordova.plugin.pDialog.dismiss();

        return true;
    }
}
//Real Estate
function gotoPageReal(real_id) {
    var link = "realestatelistingdetails.html?rid=" + real_id;
    window.location.href = link;
}

function gotoEditPage(real_id) {
    var link = "realestate-edit.html?rid=" + real_id;
    window.location.href = link;
}

function gotoActionPage(real_id) {
    var r = confirm(msg_delete);
    if (r == true) {

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
            data: '{"method":"RealEstateDetailsDelete", "real_id":"' + real_id + '"}',
            success: function (data) {
                cordova.plugin.pDialog.dismiss();
                goToMyPost();
                return true;
            },
            error: function (result) {
                cordova.plugin.pDialog.dismiss();
                alert("Error");
                return false;
            }
        });
    } else {
    }
}

var realpageno = 1;
var firstData = 0;
var secondData = 10;

function goToNxtReal() {
    realpageno = realpageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    getUserAllRealDetail();

}
function goToPrvReal() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        realpageno = realpageno - 1;
        firstData = firstData - 10;
    }
    getUserAllRealDetail();
}


function getUserAllRealDetailB() {
    firstData = 0;
    secondData = 10;
    getUserAllRealDetail();
}
function getUserAllRealDetail() {
    //alert('realmenu');

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    var method = '{"method":"AllRealDetailUser", "regi_id":"' + gdc_uid + '", "first":"' + firstData + '", "second":"' + secondData + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: method,
        success: function (data) {
            realEstatData(data);
            return true;
        },
        error: function (result) {
            alert("Error");
            return false;
        }
    });
}
function realEstatData(data) {
    //alert('realmenu data');
    //$("#userallrealData").children().remove();
    if (data.reallist.length == 0) {
        cordova.plugin.pDialog.dismiss();
        //alert("No Data Found!");
        if (secondData > 10) {
            secondData = secondData - 10;
        }
        if (firstData >= 10) {
            realpageno = realpageno - 1;
            firstData = firstData - 10;
        }
    } else {
		 $('#dnf2').hide('not-found');
        $("#real_page_list").removeClass("pagination-hide");
        //if (firstData == 0) {
        //    $("#userallrealData").children().remove();
        //}
        $("#userallrealData").children().remove();
        document.getElementById('realpageno').innerHTML = realpageno;
        for (var i = 0; i < data.reallist.length; i++) {
            var real_id = data.reallist[i].real_id;
            var real_property = data.reallist[i].real_property;
            var real_title_lis = data.reallist[i].real_title_lis;
            var real_pro_type = data.reallist[i].real_pro_type;
            var real_location = data.reallist[i].real_location;
            var real_near_by_loc = data.reallist[i].real_near_by_loc;
            var real_country = data.reallist[i].real_country;
            var real_state = data.reallist[i].real_state;
            var real_city = data.reallist[i].real_city;
            var real_room = data.reallist[i].real_room;
            var real_baths = data.reallist[i].real_baths;
            var real_condition = data.reallist[i].real_condition;
            var real_rating = data.reallist[i].real_rating;
            var real_loan = data.reallist[i].real_loan;
            var real_rec = data.reallist[i].real_rec;
            var real_size_pro = data.reallist[i].real_size_pro;
            var real_size_con = data.reallist[i].real_size_con;
            var real_electricity = data.reallist[i].real_electricity;
            var real_water = data.reallist[i].real_water;
            var real_morgage = data.reallist[i].real_morgage;
            var real_three = data.reallist[i].real_three;
            var real_acc_flex = data.reallist[i].real_acc_flex;
            var real_comment = data.reallist[i].real_comment;
            var name = data.reallist[i].name;
            var u_phone = data.reallist[i].u_phone;
            var u_email = data.reallist[i].u_email;
            var real_trade = data.reallist[i].real_trade;
            var real_price_type = data.reallist[i].real_price_type;
            if (real_price_type == "Dollares") {
                var real_price = "$ " + data.reallist[i].real_price;
            } else {
                var real_price = "₡ " + data.reallist[i].real_price;
            }
            var real_publish = data.reallist[i].real_publish;
            var real_status = data.reallist[i].real_status;
            var real_img = data.reallist[i].real_img;
            var image1 = real_img[0];
            $("#userallrealData").append('<li ><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + real_title_lis + '</h4><div class="left_side"><p><h3>' + real_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3></p><p><h6>' + real_city + ', ' + real_state + ', ' + real_country + '</h6></p><div class="popup_my"><ul><li><a onclick="gotoPageReal(' + real_id + ')"><span class="glyphicon glyphicon-eye-open"></span> <span id="datarealview' + i + '">View</span></a></li><li><a onclick="gotoEditPage(' + real_id + ')"><span class="glyphicon glyphicon-edit"></span> <span id="datarealedit' + i + '">Edit</span></a></li><li><a onclick="gotoActionPage(' + real_id + ')"><span class="glyphicon glyphicon-trash"></span> <span id="datarealdelete' + i + '">Delete</span></a></li></ul></div></div></div></li>');
            document.getElementById('datarealview' + i + '').innerHTML = dataview;
            document.getElementById('datarealedit' + i + '').innerHTML = dataedit;
            document.getElementById('datarealdelete' + i + '').innerHTML = datadelete;
        }
        cordova.plugin.pDialog.dismiss();
        return true;
    }
}
//Other Details.
function gotoOtherDetailPage(other_id) {
    var link = "othersdetails.html?oid=" + other_id;
    window.location.href = link;
}

function gotoOtherEditPage(other_id) {
    var link = "others-edit.html?oid=" + other_id;
    window.location.href = link;
}

function gotoOtherActionPage(other_id) {
    var r = confirm(msg_delete);
    if (r == true) {

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
            data: '{"method":"OtherDetailsDelete", "other_id":"' + other_id + '"}',
            success: function (data) {
                cordova.plugin.pDialog.dismiss();
                goToMyPost();
                return true;
            },
            error: function (result) {
                cordova.plugin.pDialog.dismiss();
                alert("Error");
                return false;
            }
        });
    } else {
    }
}

var otherpageno = 1;
var firstOtherData = 0;
var secondOtherData = 10;

function goToNxtOther() {
    otherpageno = otherpageno + 1;
    firstOtherData = firstOtherData + 10;
    secondOtherData = secondOtherData + 10;
    getUserAllOtherDetail();

}
function goToPrvOther() {
    if (secondOtherData > 10) {
        secondOtherData = secondOtherData - 10;
    }
    if (firstOtherData >= 10) {
        otherpageno = otherpageno - 1;
        firstOtherData = firstOtherData - 10;
    }
    getUserAllOtherDetail();
}


function getUserAllOtherDetailB() {
    firstOtherData = 0;
    secondOtherData = 10;
    getUserAllOtherDetail();
}

function getUserAllOtherDetail() {

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    var method = '{"method":"AllOtherDetailUser", "regi_id":"' + gdc_uid + '", "first":"' + firstOtherData + '", "second":"' + secondOtherData + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: method,
        success: function (data) {
            otherListData(data);
            return true;
        },
        error: function (result) {
            cordova.plugin.pDialog.dismiss();
            alert("Error");
            return false;
        }
    });
}
function otherListData(data) {
    if (data.otherlist.length == 0) {
        cordova.plugin.pDialog.dismiss();
        //alert("No Data Found!");
        if (secondOtherData > 10) {
            secondOtherData = secondOtherData - 10;
        }
        if (firstOtherData >= 10) {
            otherpageno = otherpageno - 1;
            firstOtherData = firstOtherData - 10;
        }
    } else {
		 $('#dnf3').hide('not-found');
        $("#other_page_list").removeClass("pagination-hide");
		
        /*if (firstOtherData == 0) {
            $("#userAllOtherData").children().remove();
        }*/
        $("#userAllOtherData").children().remove();
        document.getElementById('otherpageno').innerHTML = otherpageno;
        for (var i = 0; i < data.otherlist.length; i++) {
            var other_id = data.otherlist[i].other_id;
            var other_type = data.otherlist[i].other_type;
            var other_category = data.otherlist[i].other_category;
            var other_title = data.otherlist[i].other_title;
            var other_cont_name = data.otherlist[i].other_cont_name;
            var other_email = data.otherlist[i].other_email;
            var other_phone = data.otherlist[i].other_phone;
            var other_country = data.otherlist[i].other_country;
            var other_state = data.otherlist[i].other_state;
            var other_city = data.otherlist[i].other_city;
            var other_color = data.otherlist[i].other_color;
            var other_pri_type = data.otherlist[i].other_pri_type;
            if (other_pri_type == "Dollares") {
                var other_price = "$ " + data.otherlist[i].other_price;
            } else {
                var other_price = "₡ " + data.otherlist[i].other_price;
            }
            var other_condition = data.otherlist[i].other_condition;
            var other_rating = data.otherlist[i].other_rating;
            var other_exchange = data.otherlist[i].other_exchange;
            var other_acpt_old = data.otherlist[i].other_acpt_old;
            var other_flex_pri = data.otherlist[i].other_flex_pri;
            var other_visitor = data.otherlist[i].other_visitor;
            var other_comment = data.otherlist[i].other_comment;
            var other_created = data.otherlist[i].other_created;
            var other_status = data.otherlist[i].other_status;
            var other_img = data.otherlist[i].other_img;
            var other_location = data.otherlist[i].other_location;
            var image1 = other_img[0];
            //alert(image1);
            //$("#userallOtherData").append('<li><a onclick="gotopage(' + other_id + ')"><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4><h3><img src="images/dollor-icon.png"> ' + other_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3><h6>' + other_location + ', ' + other_city + ', ' + other_state + ', ' + other_country + '</h6></div></a></li>');
            $("#userAllOtherData").append('<li ><div class="img_for_listing"><img src=' + image1 + '></div><div class="txt_for_listing"><h4>' + other_title + ', ' + other_category + ' (' + other_type + ')' + '</h4><div class="left_side"><p><h3>' + other_price + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3></p><p><h6>' + other_city + ', ' + other_state + ', ' + other_country + '</h6></p><div class="popup_my"><ul><li><a onclick="gotoOtherDetailPage(' + other_id + ')"><span class="glyphicon glyphicon-eye-open"></span> <span id="dataotherview' + i + '">View</span></a></li><li><a onclick="gotoOtherEditPage(' + other_id + ')"><span class="glyphicon glyphicon-edit"></span> <span id="dataotheredit' + i + '">Edit</span></a></li><li><a onclick="gotoOtherActionPage(' + other_id + ')"><span class="glyphicon glyphicon-trash"></span> <span id="dataotherdelete' + i + '">Delete</span></a></li></ul></div></div></div></li>');
            document.getElementById('dataotherview' + i + '').innerHTML = dataview;
            document.getElementById('dataotheredit' + i + '').innerHTML = dataedit;
            document.getElementById('dataotherdelete' + i + '').innerHTML = datadelete;
        }
        cordova.plugin.pDialog.dismiss();
        return true;
    }
}
$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);

});