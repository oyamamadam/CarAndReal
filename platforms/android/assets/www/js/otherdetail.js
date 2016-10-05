/**
 * Created by CTinfotech on 11/27/2015.
 */

var basicinfo = "";
var ptype = "";
var cattype = "";
var oTitle = "";
var oColor = "";
var olocation = "";
var oCountry = "";
var oState = "";
var oCity = "";
var oCondition = "";
var oRating = "";
var loan = "";
var trade = "";
var exchange = "";
var pricetype = "";
var price = "";
var vCount = "";
var cPublishOn = "";
var ouploadpic = "";
var extraInfo = "";
var oAceept = "";
var oFlexible = "";
var oComment = "";
var oPublishBy = "";
var oContact = "";
var oEmail = "";
var oSubmit = "";
var clocation = ""


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
    basicinfo = "Basic Info";
    clocation = "Location";
    ptype = "Old / New";
    vCount = "Visitor Count";
    cattype = "Category Type";
    cPublishOn = "Publish On";
    oTitle = "Title";
    oColor = "Color";
    olocation = "Location";
    oCountry = "Country";
    oState = "State";
    oCity = "City";
    oCondition = "Condition";
    oRating = "Rating";
    ouploadpic = "Upload Pics";
    extraInfo = "Extras";
    oAceept = "Accept Old As Payment";
    oFlexible = "Flexible Price";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    oComment = "Comment";
    oPublishBy = "Published By";
    oContact = "Contact No.";
    oEmail = "Email";
    oSubmit = "Submit";
}
function ready_spa() {
    basicinfo = "Básica";
    clocation = "Ubicación";
    ptype = "Viejo / Nuevo";
    cattype = "Categoría Tipo";
    vCount = "Contador de visitantes";
    oTitle = "Título";
    oColor = "Color";
    olocation = "Ubicación";
    cPublishOn = "En publicará";
    oCountry = "País";
    oState = "Estado";
    oCity = "Ciudad";
    oCondition = "Condición";
    oRating = "Clasificación";
    ouploadpic = "Subir fotos";
    extraInfo = "Extras";
    oAceept = "Acepta el oro como medio de pago";
    oFlexible = "Precio Flexible";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "Tipo Precio";
    price = "Precio";
    oComment = "Comentario";
    oPublishBy = "Publicado por";
    oContact = "Contacto No.";
    oEmail = "Email";
    oSubmit = "Enviar";


}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        document.getElementById('clocation').innerHTML = clocation;
        //document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('cattype').innerHTML = cattype;
        //document.getElementById('oTitle').innerHTML = oTitle;
        //document.getElementById('oColor').innerHTML = oColor;
        //document.getElementById('olocation').innerHTML = olocation;
        //document.getElementById('oCountry').innerHTML = oCountry;
        //document.getElementById('oState').innerHTML = oState;
        //document.getElementById('oCity').innerHTML = oCity;
        document.getElementById('oCondition').innerHTML = oCondition;
        document.getElementById('oRating').innerHTML = oRating;
        //document.getElementById('ouploadpic').innerHTML = ouploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        //document.getElementById('oAceept').innerHTML = oAceept;
        document.getElementById('oFlexible').innerHTML = oFlexible;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        //document.getElementById('pricetype').innerHTML = pricetype;
        document.getElementById('price').innerHTML = price;
        document.getElementById('vCount').innerHTML = vCount;
        //document.getElementById('oComment').innerHTML = oComment;
        document.getElementById('cPublishOn').innerHTML = cPublishOn;
        document.getElementById('oPublishBy').innerHTML = oPublishBy;

        //document.getElementById('oContact').innerHTML = oContact;
        //document.getElementById('oEmail').innerHTML = oEmail;
        //document.getElementById('oSubmit').innerHTML = oSubmit;
    })
}


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}
function goToHome() {
    window.location.href = "index.html";
}
function goToMyPost() {
    var user = window.localStorage.getItem("gdc_email_id");
    //alert(user);
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
    //alert("Logout");
    window.localStorage.clear();
    navigator.app.exitApp();
    //window.location.href ="login.html";
    //return true;
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
var gdc_gender = window.localStorage.getItem("gdc_gender");
//alert(gdc_gender);
$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {

            //user_name.innerHTML = gdc_username;
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
        var oid = GetURLParameter('oid');
        getOtherDetail(oid);

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
});


function getOtherDetail(oid) {
    //{"method":"SelectOtherDetail", "other_id":"2"}

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
        data: '{"method":"SelectOtherDetail", "other_id":"' + oid + '", "regi_id":"' + gdc_uid + '"}',
        success: function (data) {
            otherDetailData(data);
            $.getScript('js/test.js');
            return true;
        },
        error: function (result) {
            //alert("Error");
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function otherDetailData(data) {
    //$("#imageData").children().remove();
    for (var i = 0; i < data.otherlist.length; i++) {

        var other_id = data.otherlist[i].other_id;
        var other_pri_type = data.otherlist[i].other_pri_type;
        var other_type = data.otherlist[i].other_type;
        var other_category = data.otherlist[i].other_category;
        var other_title = data.otherlist[i].other_title;
        document.getElementById('realPropertyType').innerHTML = other_title + ", " + other_category + " (" + other_type + ")";
        var other_color = data.otherlist[i].other_color;
        //document.getElementById('realYersMoment').innerHTML = other_color;
        var other_location = data.otherlist[i].other_location;
        var other_country = data.otherlist[i].other_country;
        var other_state = data.otherlist[i].other_state;
        var other_city = data.otherlist[i].other_city;
        document.getElementById('realLocation').innerHTML = other_city + ", " + other_state + ", " + other_country;
        var other_condition = data.otherlist[i].other_condition;
        document.getElementById('realCondition').innerHTML = other_condition;
        var other_rating = data.otherlist[i].other_rating;
        document.getElementById('realRating').innerHTML = other_rating + "/10";
        var other_pri_type = data.otherlist[i].other_pri_type;

        var other_price = numberWithCommas(data.otherlist[i].other_price);
        if (other_pri_type == "Dollares") {
            document.getElementById('realPrice').innerHTML = "&#36;" + other_price+' ';
        } else {
            document.getElementById('realPrice').innerHTML = "&#128;" + other_price+' ';
        }
        var other_visitor = data.otherlist[i].other_visitor;
        document.getElementById('otherVisitorCount').innerHTML = other_visitor;
        var date = data.otherlist[i].other_created;

        var m_names = new Array("Jan", "Feb", "Mar", "Apl", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


        var kk = date.split(" ");
        var year = kk[0].split("-");
        var time = kk[1];

        var cc = parseInt(year[1]);
        var other_created =m_names[cc]+'/'+ year[2]+'/'+year[0];

        document.getElementById('realPublish').innerHTML = other_created +" "+ time;
        var other_cont_name = data.otherlist[i].other_cont_name;
        document.getElementById('realPublishUname').innerHTML = other_cont_name;
        var other_email = data.otherlist[i].other_email;
        //document.getElementById('realPublishUemail').innerHTML = other_email;

        var other_loan = data.otherlist[i].other_loan;
        if (other_loan == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realLoan").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realLoan").src = string;
            $('.ul-left li:nth-child(1)').css("display",'none');
        }

        var other_exchange = data.otherlist[i].other_exchange;
        if (other_exchange == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realExchange").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realExchange").src = string;
            $('.ul-left li:nth-child(2)').css("display",'none');
        }

        var other_flex_pri = data.otherlist[i].other_flex_pri;
        if (other_flex_pri == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realFlexible").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realFlexible").src = string;
            $('.ul-right li:nth-child(1)').css("display",'none');
        }
        var other_comment = data.otherlist[i].other_comment;
        document.getElementById('realComment').innerHTML = other_comment;
        var u_phone = data.otherlist[i].other_phone;
        $("#callPerson").append('<span style="font-weight:bold; width:40%; float:left;"></span><a href="tel:' + u_phone + '"><img src="images/contact-icon.png"></a><a href="sms:' + u_phone + '"><img src="images/sms-icon.png"></a>');
        var other_img = data.otherlist[i].other_img;
        for (var j = 0; j < other_img.length; j++) {
            //alert(real_img[j]);
            $("#owl-demo2").append('<div class="item"><img src="' + other_img[j] + '"></div>');
        }
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}